import { TypewriterOptions, TypewriterProps } from "@/types";
import React, { useState, useEffect, useCallback } from "react";

function useTypewriter({
  words = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500,
  pauseOnEmptyDuration = 300,
  loop = true,
}: TypewriterOptions): string {
  const [textIndex, setTextIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const currentWord: string = words[textIndex] ?? "";

  const tick = useCallback(() => {
    if (isPaused) return;
    if (!isDeleting) {
      if (charIndex < currentWord.length) {
        setCharIndex((prev) => prev + 1);
      }

      if (charIndex + 1 === currentWord.length) {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      }

      if (charIndex - 1 === 0) {
        setIsPaused(true);

        setTimeout(() => {
          setIsDeleting(false);
          setCharIndex(0);

          if (textIndex + 1 < words.length) {
            setTextIndex((prev) => prev + 1);
          } else if (loop) {
            setTextIndex(0);
          }

          setIsPaused(false);
        }, pauseOnEmptyDuration);
      }
    }
  }, [
    charIndex,
    isDeleting,
    isPaused,
    currentWord,
    textIndex,
    words,
    pauseDuration,
    pauseOnEmptyDuration,
    loop,
  ]);

  useEffect(() => {
    if (!words.length) return;

    const currentSpeed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, currentSpeed);

    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed, words]);

  return currentWord.substring(0, charIndex);
}

export const Typewriter: React.FC<TypewriterProps> = ({
  words = ["Word 1", "Word 2", "Etc"],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
  pauseOnEmptyDuration = 300,
  loop = true,
  cursorSymbol = "|",
  className = "",
}) => {
  const displayText = useTypewriter({
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    pauseOnEmptyDuration,
    loop,
  });

  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span>{displayText || "\u00A0"}</span>
      <span className="animate-pulse ml-0.5 font-normal select-none">
        {cursorSymbol}
      </span>
    </span>
  );
};

export default Typewriter;
