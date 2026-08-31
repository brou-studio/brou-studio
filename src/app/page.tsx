"use client";

import Nav from "@/components/Nav";
import HeroParallax from "@/components/HeroParallax";
import Ticker from "@/components/Ticker";
import LoadingScreen from "@/components/LoadingScreen";
import HeroEntrance from "@/components/HeroEntrance";
import ScrambleText from "@/components/ScrambleText";
import Link from "next/link";

const heroWords = [
  ["IDEAS", "QUE", "VENDEN"],
  ["SISTEMAS", "QUE", "ESCALAN"],
];

export default function Home() {
  return (
    <>
      <LoadingScreen />

      <div className="min-h-screen bg-bg-main flex flex-col">
        <Nav />

        <div className="flex-1 flex flex-col">
          <HeroParallax />

          <HeroEntrance>
            {/* Headline Blocks */}
            <div className="hero-entrance-headlines flex flex-col items-center gap-3 sm:gap-4 px-4 sm:px-8 lg:px-12 mt-0 relative z-10">
              {heroWords.map((line, lineIdx) => (
                <div key={lineIdx} className="hero-headline-line flex flex-wrap gap-2 sm:gap-3 justify-center">
                  {line.map((word, wordIdx) => {
                    const isLast = wordIdx === line.length - 1;
                    return (
                      <div
                        key={wordIdx}
                        className={`hero-word-block bg-text-primary px-5 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-md ${isLast ? "flex items-center gap-1 sm:gap-2" : ""}`}
                      >
                        <ScrambleText
                          text={word}
                          className="font-pixel text-xl sm:text-3xl lg:text-[44px] text-white tracking-wider"
                        />
                        {isLast && (
                          <span className="font-pixel text-3xl sm:text-5xl lg:text-[64px] text-accent-red leading-none">.</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Ticker */}
            <div className="hero-entrance-ticker">
              <Ticker />
            </div>

            {/* CTA */}
            <div className="hero-entrance-cta flex justify-center pb-4 px-4">
              <Link
                href="/contacto"
                className="btn-primary bg-text-primary rounded-full px-6 sm:px-8 py-3 sm:py-3.5 flex items-center gap-3 no-underline"
              >
                <span className="text-[11px] sm:text-sm text-white tracking-[1px] sm:tracking-[1.5px] font-medium">
                  HABLEMOS DE TU PROYECTO
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M5 13L13 5M13 5H6M13 5V12"
                    stroke="#e63916"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </HeroEntrance>
        </div>
      </div>
    </>
  );
}
