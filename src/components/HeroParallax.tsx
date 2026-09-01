"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const hasTouchScreen = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouchScreen);

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 15;
      const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 15;
      setRotation({ x: rotateX, y: rotateY });
    };

    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchMove = (e: TouchEvent) => {
      if (!containerRef.current || !e.touches[0]) return;
      const touch = e.touches[0];
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateY = ((touch.clientX - centerX) / (rect.width / 2)) * 12;
      const rotateX = -((touch.clientY - centerY) / (rect.height / 2)) * 12;
      setRotation({ x: rotateX, y: rotateY });
    };

    const handleTouchEnd = () => {
      setRotation({ x: 0, y: 0 });
    };

    if (hasTouchScreen) {
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleTouchEnd);
    } else {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex justify-center items-center pb-0 relative z-20 -mt-2 sm:-mt-3 md:-mt-4 lg:-mt-5 -mb-1 sm:-mb-1.5 md:-mb-2 lg:-mb-2.5"
      style={{ perspective: "1000px" }}
    >
      <div
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: "transform 0.15s ease-out",
          willChange: "transform",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/mascota/BROU-trimmed.png"
          alt="Brou — mascota de Brou Studio"
          className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] h-auto drop-shadow-xl"
        />
      </div>
      {isTouchDevice && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-0 animate-fade-in-hint">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted">
            <path d="M18 11V6a2 2 0 00-2-2 2 2 0 00-2 2v0M14 10V4a2 2 0 00-2-2 2 2 0 00-2 2v6M10 10.5V6a2 2 0 00-2-2 2 2 0 00-2 2v8" />
            <path d="M18 8a2 2 0 012 2v7a5 5 0 01-5 5H9.37a5 5 0 01-3.54-1.46L2 16.5" />
          </svg>
          <span className="text-[10px] text-text-muted tracking-wider">TOCA Y ARRASTRA</span>
        </div>
      )}
    </div>
  );
}
