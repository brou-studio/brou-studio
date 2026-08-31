"use client";

import { useRef, useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

export default function Contacto() {
  const mascotRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mascotRef.current) return;
      const rect = mascotRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 12;
      const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 12;
      setRotation({ x: rotateX, y: rotateY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-bg-main">
      <Nav />

      {/* Hero */}
      <ScrollReveal className="px-5 md:px-8 lg:px-12 pt-12 md:pt-20 pb-8 md:pb-10 max-w-[900px]">
        <h1 className="text-[28px] sm:text-[34px] md:text-[42px] text-text-primary leading-snug mb-4" style={{ fontFamily: "Georgia, serif" }}>
          ¿Tienes un proyecto en mente?
          <br />
          Escríbenos a
        </h1>
        <a
          href="mailto:hola@broustudio.com"
          className="font-pixel text-base sm:text-xl md:text-2xl text-accent-red no-underline border-b-[3px] border-accent-red pb-1 hover:text-accent-red-hover hover:border-accent-red-hover transition-colors break-all"
        >
          hola@broustudio.com
        </a>
      </ScrollReveal>

      {/* Content area */}
      <div className="px-5 md:px-8 lg:px-12 py-6 md:py-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        {/* Left: Mascot + Message form */}
        <div className="flex-1 w-full">
          {/* 3D Mascot */}
          <ScrollReveal>
            <div
              ref={mascotRef}
              className="w-full h-[220px] sm:h-[260px] md:h-[300px] rounded-2xl flex items-center justify-center mb-6 md:mb-8"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(230,57,22,0.06) 0%, transparent 70%)",
              }}
            >
              <div
                style={{
                  transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                <Image
                  src="/images/mascota/BROU.png"
                  alt="Brou mascota"
                  width={200}
                  height={230}
                  className="drop-shadow-xl w-[130px] sm:w-[160px] md:w-[200px] h-auto"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Inline message form */}
          <ScrollReveal delay={1}>
            <div className="bg-[#e8ddd0] rounded-2xl p-5 md:p-8">
              <div className="font-pixel text-[10px] md:text-xs text-text-primary mb-3 md:mb-4">
                &gt;/ DÉJANOS UN MENSAJE
              </div>
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                <input
                  type="text"
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 bg-white rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none border-none"
                />
                <button className="bg-text-primary rounded-lg px-5 py-3 text-[13px] text-white font-medium cursor-pointer border-none hover:bg-black transition-colors">
                  Enviar
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right: Contact info */}
        <div className="w-full md:w-[340px] lg:w-[360px] flex-shrink-0">
          {/* WhatsApp CTA */}
          <ScrollReveal delay={1}>
            <a
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-text-primary rounded-2xl p-5 md:p-6 mb-5 md:mb-6 no-underline group hover:bg-black transition-colors"
            >
              <div className="flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
                    fill="#25D366"
                  />
                  <path
                    d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"
                    stroke="#25D366"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
                <div>
                  <div className="text-sm text-white font-medium">
                    WhatsApp
                  </div>
                  <div className="text-[11px] md:text-xs text-white/50">
                    Respuesta en menos de 1 hora
                  </div>
                </div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="ml-auto"
                >
                  <path
                    d="M5 13L13 5M13 5H6M13 5V12"
                    stroke="#e63916"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </ScrollReveal>

          {/* Social links */}
          <ScrollReveal delay={2}>
            <div className="flex flex-col gap-3">
              {[
                {
                  label: "Instagram",
                  value: "@broustudio",
                  href: "https://instagram.com/broustudio",
                },
                {
                  label: "Email",
                  value: "hola@broustudio.com",
                  href: "mailto:hola@broustudio.com",
                },
                {
                  label: "TikTok",
                  value: "@broustudio",
                  href: "https://tiktok.com/@broustudio",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex justify-between items-center py-3 md:py-4 border-b border-border-light no-underline group"
                >
                  <span className="text-[13px] md:text-sm text-text-primary font-medium">
                    {link.label}
                  </span>
                  <span className="text-[12px] md:text-[13px] text-accent-red group-hover:text-accent-red-hover transition-colors">
                    {link.value} <span className="link-arrow">&#8599;</span>
                  </span>
                </a>
              ))}
              <div className="flex justify-between items-center py-3 md:py-4">
                <span className="text-[13px] md:text-sm text-text-primary font-medium">
                  Ubicación
                </span>
                <span className="text-[12px] md:text-[13px] text-text-muted">Lima, Perú</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <Footer variant="full" />
    </div>
  );
}
