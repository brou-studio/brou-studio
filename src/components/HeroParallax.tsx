"use client";

export default function HeroParallax() {
  return (
    <div className="flex justify-center items-center pb-0 relative z-20 -mt-2 sm:-mt-3 md:-mt-4 lg:-mt-5 -mb-1 sm:-mb-1.5 md:-mb-2 lg:-mb-2.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/mascota/BROU-trimmed.png"
        alt="Brou — mascota de Brou Studio"
        className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] h-auto"
      />
    </div>
  );
}
