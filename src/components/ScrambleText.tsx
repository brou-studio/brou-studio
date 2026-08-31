"use client";

import { useState, useCallback, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@&%!?";

export default function ScrambleText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const [display, setDisplay] = useState(text);
  const rafRef = useRef<number>(0);
  const isAnimating = useRef(false);

  const scramble = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const original = text;
    const duration = 600;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);

      const result = original
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          const threshold = i / original.length;
          if (progress > threshold + 0.3) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplay(result);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(original);
        isAnimating.current = false;
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  }, [text]);

  const reset = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    isAnimating.current = false;
    setDisplay(text);
  }, [text]);

  return (
    <span
      className={className}
      onMouseEnter={scramble}
      onMouseLeave={reset}
    >
      {display}
    </span>
  );
}
