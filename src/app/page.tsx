'use client'

import { useEffect, useState, useRef } from "react";
import words200 from "../data/English.json";
import words500 from "../data/English500.json";

const wordSets: { [key: string]: string[] } = {
  "200 Words": words200.words,
  "500 Words": words500.words,
};

export default function TypingTest() {
  const [words, setWords] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState<number>(15);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [wpm, setWpm] = useState<number | null>(null);
  const [errorCount, setErrorCount] = useState(0);
  const [flash, setFlash] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedWordSet, setSelectedWordSet] = useState("200 Words");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    resetTest();
  }, [timer, selectedWordSet]);
  useEffect(() => {
    if (timeLeft !== null && timeLeft > 0) {
      const interval = setInterval(() => setTimeLeft((t) => t! - 1), 1000);
      return () => clearInterval(interval);
    } else if (timeLeft === 0) {
      calculateWPM();
      setTimeout(() => resetTest(), 2000); // Auto-reset after 2 seconds
    }
  }, [timeLeft]);

  function shuffleArray(array: string[]) {
    return array.sort(() => Math.random() - 0.5);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (timeLeft === 0) return;

    const value = e.target.value;
    setInput(value);
    setCaretPosition(value.length);

    if (timeLeft === null) {
      setTimeLeft(timer);
    }

    if (value.endsWith(" ")) {
      if (value.trim() === words[currentIndex].trim()) {
        setCurrentIndex((i) => i + 1);
        setInput("");
        setCaretPosition(0);
      } else {
        setErrorCount((count) => count + 1);
        setFlash(true);
        setTimeout(() => setFlash(false), 100);
      }
    }
  }

  function resetTest() {
    setWords(shuffleArray([...wordSets[selectedWordSet]]).map(word => word + " "));
    setCurrentIndex(0);
    setInput("");
    setErrorCount(0);
    setCaretPosition(0);
    setTimeLeft(null);
    setWpm(null);
    setTimeout(() => inputRef.current?.focus(), 100);
  }

  function calculateWPM() {
    const timeElapsedInMinutes = timer / 60;
    const wordsTyped = currentIndex;
    const mistakes = errorCount;
    const calculatedWPM = (wordsTyped - mistakes) / timeElapsedInMinutes;
    setWpm(Math.max(0, Math.round(calculatedWPM))); // Ensure WPM is not negative
  }

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  return (
    <div className={`p-4 text-center flex flex-col items-center justify-center min-h-screen ${flash ? "bg-red-500" : ""}`}>
      {!isFocused && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 text-white text-xl cursor-pointer"
          onClick={() => inputRef.current?.focus()}
        >
          Press here to focus
        </div>
      )}
      <h1 className="text-2xl font-bold mb-4">Typing Test</h1>
      <div className="mb-4 flex gap-4">
        <select
          className="p-2 border rounded text-black"
          value={selectedWordSet}
          onChange={(e) => setSelectedWordSet(e.target.value)}
        >
          {Object.keys(wordSets).map((set) => (
            <option key={set} value={set}>{set}</option>
          ))}
        </select>
        <select
          className="p-2 border rounded text-black"
          value={timer}
          onChange={(e) => setTimer(Number(e.target.value))}
        >
          {[15, 30, 60, 120].map((t) => (
            <option key={t} value={t}>{t}s</option>
          ))}
        </select>
      </div>
      <div className="relative w-full max-w-3xl p-4 bg-gray-800 text-white rounded-lg">
        <input
          ref={inputRef}
          className="absolute w-full h-full opacity-0"
          value={input}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoFocus
        />
        <div className="p-4 text-lg flex flex-wrap justify-center items-center min-h-[120px] text-center">
          {words.map((word, index) => (
            <span
              key={index}
              className={index === currentIndex ? "text-blue-500 relative" : index < currentIndex ? "text-gray-400" : ""}
              style={{ whiteSpace: "pre" }}
            >
              {word.split('').map((char, charIndex) => (
                <span key={charIndex} className="relative">
                  {char}
                  {index === currentIndex && charIndex === caretPosition && (
                    <span className="absolute left-0 top-5 w-3 h-0.5 bg-white blinking-caret" />
                  )}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
      <p className="mt-4">Time Left: {timeLeft !== null ? timeLeft : timer}s</p>
      {wpm !== null && <p className="mt-4 font-bold">WPM: {wpm}</p>}
    </div>
  );
}
