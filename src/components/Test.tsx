'use client';

import { useEffect, useState, useRef, KeyboardEvent } from "react";
import words200 from "../data/English.json";
import words500 from "../data/English500.json";
import Footer from '../components/Footer';

type TestState = "idle" | "running" | "finished";

const wordSets: { [key: string]: string[] } = {
    "200 Words": words200.words,
    "500 Words": words500.words,
};

/**
 * Group the words into rows of 15-20 words each.
 */
function groupWords(words: string[]): string[][] {
    const groups: string[][] = [];
    let i = 0;
    while (i < words.length) {
        // Each group will have between 15 and 20 words
        const groupSize = Math.min(15 + Math.floor(Math.random() * 6), words.length - i);
        groups.push(words.slice(i, i + groupSize));
        i += groupSize;
    }
    return groups;
}

/**
 * Given a global word index and grouped words, returns the row (line) index.
 */
function getLineIndex(globalIndex: number, groupedWords: string[][]): number {
    let count = 0;
    for (let i = 0; i < groupedWords.length; i++) {
        count += groupedWords[i].length;
        if (globalIndex < count) return i;
    }
    return groupedWords.length - 1;
}

export default function TypingTest() {
    // State definitions with explicit types
    const [words, setWords] = useState<string[]>([]);
    const [groupedWords, setGroupedWords] = useState<string[][]>([]);
    const [input, setInput] = useState<string>("");
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [timer, setTimer] = useState<number>(15);
    const [timeLeft, setTimeLeft] = useState<number>(15);
    const [wpm, setWpm] = useState<number | null>(null);
    const [errors, setErrors] = useState<{ [key: number]: string }>({});
    const [flash, setFlash] = useState<boolean>(false);
    const [caretPosition, setCaretPosition] = useState<number>(0);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [selectedWordSet, setSelectedWordSet] = useState<string>("200 Words");
    const [history, setHistory] = useState<any[]>([]);
    const [testState, setTestState] = useState<TestState>("idle");

    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Reset the test when timer or word set changes.
    useEffect(() => {
        resetTest();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timer, selectedWordSet]);

    // Timer effect: only run if the test is running.
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (testState === "running" && timeLeft > 0) {
            interval = setInterval(() => setTimeLeft((t) => t - 1), 1000);
        } else if (testState === "running" && timeLeft === 0) {
            calculateWPM();
            setTestState("finished");
            // Do not auto-reset so that results remain visible.
        }
        return () => interval && clearInterval(interval);
    }, [timeLeft, testState]);

    // Auto-scroll effect: scroll container to the current line if needed.
    useEffect(() => {
        if (containerRef.current && groupedWords.length > 0) {
            const lineIndex = getLineIndex(currentIndex, groupedWords);
            const lineHeight = 50; // Each line is assumed to be 50px tall.
            containerRef.current.scrollTo({
                top: lineIndex * lineHeight,
                behavior: "smooth",
            });
        }
    }, [currentIndex, groupedWords]);

    // Shuffle function.
    function shuffleArray(array: string[]): string[] {
        return array.sort(() => Math.random() - 0.5);
    }

    // Handle keydown events: start a new test if idle/finished and valid key pressed.
    function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
        const validKey = /^[a-zA-Z0-9]$/.test(e.key);
        if ((testState === "idle" || testState === "finished") && validKey) {
            // Reset test if previously finished.
            if (testState === "finished") {
                resetTest();
            }
            setTestState("running");
            setTimeLeft(timer);
            // Start the input with the pressed key.
            setInput(e.key);
            setCaretPosition(1);
            e.preventDefault();
        }
    }

    // Handle input change during the test.
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (testState !== "running") return;

        const value = e.target.value;
        setInput(value);
        setCaretPosition(value.length);

        if (value.endsWith(" ")) {
            const currentWord = getCurrentWord();
            if (value.trim() === currentWord) {
                // Correct word typed; advance to next global word.
                setCurrentIndex((i) => i + 1);
                setInput("");
            } else {
                // Record error for this word.
                setErrors((prev) => ({ ...prev, [currentIndex]: value.trim() }));
                setFlash(true);
                setTimeout(() => setFlash(false), 100);
            }
        }
    }

    // Return the current word from the words array.
    function getCurrentWord(): string {
        return words[currentIndex] || "";
    }

    // Calculate WPM and accuracy when the test finishes.
    function calculateWPM(): void {
        const totalTyped = currentIndex; // words typed
        const totalErrors = Object.keys(errors).length;
        const accuracy = totalTyped > 0 ? ((totalTyped - totalErrors) / totalTyped) * 100 : 100;
        const calculatedWPM = totalTyped / (timer / 60);
        const result = {
            wpm: Math.round(calculatedWPM),
            accuracy,
            timestamp: new Date().toISOString(),
        };
        setHistory((prev) => [result, ...prev].slice(0, 10));
        setWpm(result.wpm);
    }

    // Resets the test completely: clears previous test data and resets the view.
    function resetTest(): void {
        const newWords: string[] = shuffleArray([...wordSets[selectedWordSet]]).slice(0, 150);
        setWords(newWords);
        setGroupedWords(groupWords(newWords));
        setCurrentIndex(0);
        setInput("");
        setErrors({});
        setCaretPosition(0);
        setTimeLeft(timer);
        setWpm(null);
        setTestState("idle");
        if (inputRef.current) {
            // Clear any previous input and focus the textbox.
            inputRef.current.value = "";
            setTimeout(() => inputRef.current!.focus(), 100);
        }
        // Reset container scroll position.
        if (containerRef.current) {
            containerRef.current.scrollTop = 0;
        }
    }

    function handleFocus(): void {
        setIsFocused(true);
    }

    function handleBlur(): void {
        setIsFocused(false);
    }

    return (
        <div className={`p-4 text-center flex flex-col items-center justify-center h-screen ${flash ? "bg-red-500" : ""}`}>

            <h1 className="text-2xl font-bold mb-4">TypeSwift</h1>
            <div className="mb-4 flex gap-4">
                <select
                    className="p-2 text-dropdown"
                    value={selectedWordSet}
                    onChange={(e) => setSelectedWordSet(e.target.value)}
                >
                    {Object.keys(wordSets).map((set) => (
                        <option key={set} value={set}>
                            {set}
                        </option>
                    ))}
                </select>
                <div className="flex gap-2">
                    {[15, 30, 60, 120].map((t) => (
                        <button key={t} className="text-button" onClick={() => setTimer(t)}>
                            {t}s
                        </button>
                    ))}
                </div>
            </div>
            <div className="relative w-full max-w-3xl rounded overflow-hidden">
                <div className="fancy-scroll">
                    <div
                        ref={containerRef}
                        className="inner-scroll p-4 bg-gray-800 text-white scrollbar-hide"
                    >
                        {groupedWords.map((line, lineIndex) => {
                            const startGlobalIndex = groupedWords
                                .slice(0, lineIndex)
                                .reduce((sum, curr) => sum + curr.length, 0);
                            return (
                                <div key={lineIndex} className="flex flex-wrap justify-center gap-2 mb-2">
                                    {line.map((word, wordIndex) => {
                                        const globalIndex = startGlobalIndex + wordIndex;
                                        let wordClass = "";
                                        if (globalIndex === currentIndex) {
                                            wordClass = "text-blue-500";
                                        } else if (globalIndex < currentIndex) {
                                            wordClass = "text-gray-400";
                                        }
                                        return (
                                            <span key={globalIndex} className={wordClass}>
                                                {word}
                                            </span>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <input
                    ref={inputRef}
                    className="absolute inset-0 opacity-0 w-full h-full"
                    value={input}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    autoFocus
                />
                {!isFocused && (
                    <div
                        className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 text-white text-xl cursor-pointer backdrop-blur-md z-10"
                        onClick={() => inputRef.current?.focus()}
                        onTouchEnd={() => inputRef.current?.focus()}
                    >
                        Press here to focus.
                    </div>
                )}
            </div>
            <p className="mt-4">Time Left: {timeLeft}s</p>
            {testState === "finished" && wpm !== null && (
                <div className="mt-4">
                    <p className="font-bold">WPM: {wpm}</p>
                    <p className="mt-2">
                        Accuracy:{" "}
                        {(
                            ((currentIndex - Object.keys(errors).length) / (currentIndex || 1)) *
                            100
                        ).toFixed(2)}
                        %
                    </p>
                </div>
            )}
            {/* Arrow button for test reset */}
            <div className="mt-6 flex flex-col items-center">
                <button onClick={resetTest} className="reset-arrow">
                    <img src="/arrow-right-circle-svgrepo-com.svg" alt="Arrow" className="w-6 h-6"></img>
                </button>
                <p className="text-sm mt-1">Press TAB + Enter to reset.</p>
            </div>
            {/* <Footer /> */}
        </div>
    );
}
