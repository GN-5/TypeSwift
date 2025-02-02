'use client'

import { useEffect, useState, useRef } from "react";

const wordsList = [
  "the", "be", "to", "of", "and", "a", "in", "that", "have", "I", "it", "for", "not", "on", "with", "he", "as", "you", "do", "at",
  "this", "but", "his", "by", "from", "they", "we", "say", "her", "she", "or", "an", "will", "my", "one", "all", "would", "there", "their", "what",
  "so", "up", "out", "if", "about", "who", "get", "which", "go", "me", "when", "make", "can", "like", "time", "no", "just", "him", "know", "take",
  "people", "into", "year", "your", "good", "some", "could", "them", "see", "other", "than", "then", "now", "look", "only", "come", "its", "over", "think",
  "also", "back", "after", "use", "two", "how", "our", "work", "first", "well", "way", "even", "new", "want", "because", "any", "these", "give", "day",
  "most", "us"
];

export default function TypingTest() {
  const [words, setWords] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState<number>(60);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [wpm, setWpm] = useState<number | null>(null);
  const [errorCount, setErrorCount] = useState(0);
  const [flash, setFlash] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    resetTest();
  }, [timer]);

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
    if (timeLeft === 0) return; // Stop input if timer is over

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

  function calculateWPM() {
    const timeElapsedInMinutes = timer / 60;
    const wordsTyped = currentIndex;
    const mistakes = errorCount;
    const calculatedWPM = (wordsTyped - mistakes) / timeElapsedInMinutes;
    setWpm(Math.max(0, Math.round(calculatedWPM))); // Ensure WPM is not negative
  }

  function resetTest() {
    setWords(shuffleArray([...wordsList]).map(word => word + " "));
    setCurrentIndex(0);
    setInput("");
    setErrorCount(0);
    setCaretPosition(0);
    setTimeLeft(null);
    setWpm(null);
    setTimeout(() => inputRef.current?.focus(), 100);
  }

  return (
    <div className={`p-4 text-center flex flex-col items-center justify-center min-h-screen ${flash ? "bg-red-500" : ""}`}>
      <h1 className="text-2xl font-bold mb-4">Typing Test</h1>
      <select
        className="mb-4 p-2 border rounded"
        value={timer}
        onChange={(e) => setTimer(Number(e.target.value))}
      >
        {[15, 30, 60, 120].map((t) => (
          <option key={t} value={t}>{t}s</option>
        ))}
      </select>
      <div className="p-4 rounded-lg text-lg flex flex-wrap relative">
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
                  <span className="absolute left-0 top-0 w-0.5 h-4 bg-black blinking-caret" />
                )}
              </span>
            ))}
          </span>
        ))}
      </div>
      <input
        ref={inputRef}
        className="mt-4 p-2 border rounded absolute w-0 h-0 opacity-0"
        value={input}
        onChange={handleChange}
        autoFocus
      />
      <p className="mt-4">Time Left: {timeLeft !== null ? timeLeft : timer}s</p>
      {wpm !== null && <p className="mt-4 font-bold">WPM: {wpm}</p>}
    </div>
  );
}
