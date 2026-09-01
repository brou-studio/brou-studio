"use client";

import { useState } from "react";
import Image from "next/image";

export default function PhotoToggle({
  realSrc,
  plushSrc,
  alt,
}: {
  realSrc: string;
  plushSrc: string;
  alt: string;
}) {
  const [showPlush, setShowPlush] = useState(false);

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPlush(!showPlush);
  };

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPlush(!showPlush);
  };

  return (
    <div className="w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-square bg-[#e8e4dd] rounded-xl overflow-hidden relative group">
      <Image
        src={realSrc}
        alt={alt}
        fill
        className={`object-cover object-top transition-opacity duration-500 ${
          showPlush ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        src={plushSrc}
        alt={`${alt} — versión peluche`}
        fill
        className={`object-cover object-center transition-opacity duration-500 ${
          showPlush ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Left arrow */}
      <button
        onClick={goPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer border-none shadow-md hover:bg-white"
        aria-label="Foto anterior"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={goNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer border-none shadow-md hover:bg-white"
        aria-label="Siguiente foto"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        <button
          onClick={(e) => { e.stopPropagation(); setShowPlush(false); }}
          className={`w-2 h-2 rounded-full border-none cursor-pointer transition-all duration-300 ${
            !showPlush ? "bg-white w-4" : "bg-white/50"
          }`}
          aria-label="Foto real"
        />
        <button
          onClick={(e) => { e.stopPropagation(); setShowPlush(true); }}
          className={`w-2 h-2 rounded-full border-none cursor-pointer transition-all duration-300 ${
            showPlush ? "bg-white w-4" : "bg-white/50"
          }`}
          aria-label="Versión peluche"
        />
      </div>
    </div>
  );
}
