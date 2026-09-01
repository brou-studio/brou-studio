"use client";

import React, { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

const services = [
  { id: "web", label: "PÁGINA WEB", icon: "monitor" },
  { id: "auto", label: "AUTOMATIZACIÓN", icon: "gear" },
  { id: "marketing", label: "MARKETING", icon: "megaphone" },
  { id: "ia", label: "IA", icon: "sparkle" },
  { id: "otro", label: "OTRO", icon: "dots" },
];

export default function Contacto() {
  const [selectedService, setSelectedService] = useState("web");

  return (
    <div className="min-h-screen bg-bg-main">
      <Nav />

      {/* Main content */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-4 md:pt-6 lg:pt-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[4%] items-start">

          {/* LEFT COLUMN: Hero + cards + mascot */}
          <ScrollReveal className="flex-1 w-full">
            <div className="font-pixel text-[10px] md:text-xs text-text-primary tracking-wider mb-2">
              HABLEMOS DE TU PROYECTO
              <span className="text-accent-red ml-1">.</span>
            </div>
            <h1
              className="font-pixel text-text-primary leading-[1.1] mb-3"
              style={{ fontSize: "clamp(1.5rem, 4vw, 3.5rem)" }}
            >
              TU IDEA PUEDE
              <br />
              <span className="text-accent-red">CAMBIAR TODO</span>
              <span className="text-text-primary">.</span>
            </h1>
            <p
              className="text-text-muted leading-relaxed mb-4 lg:mb-6 max-w-[500px]"
              style={{ fontSize: "clamp(0.8rem, 1.2vw, 1rem)" }}
            >
              Cuéntanos tu proyecto y hagamos juntos un sistema que{" "}
              <span className="text-accent-red font-medium">venda</span>,{" "}
              <span className="text-accent-red font-medium">escale</span> y
              deje{" "}
              <span className="text-accent-red font-medium">huella</span>.
            </p>

            {/* Value cards 2x2 */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-4 lg:mb-6">
              {[
                { icon: "bolt", title: "IDEAS QUE\nVENDEN", desc: "Estrategias que convierten." },
                { icon: "gear", title: "AUTOMATIZACIÓN\nINTELIGENTE", desc: "Procesos que trabajan por ti." },
                { icon: "chart", title: "SISTEMAS QUE\nESCALAN", desc: "Tecnología que impulsa." },
                { icon: "sparkle", title: "CREATIVIDAD\n+ IA", desc: "Contenido que conecta." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent-red/10 flex items-center justify-center flex-shrink-0">
                    <ServiceIcon name={item.icon} size={14} color="var(--accent-red)" />
                  </div>
                  <div>
                    <div className="font-pixel text-[8px] md:text-[9px] text-text-primary leading-snug whitespace-pre-line">
                      {item.title}
                    </div>
                    <div className="text-[10px] md:text-[11px] text-text-muted mt-0.5">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mascot with speech bubble — hidden on mobile, shown on lg+ */}
            <div className="hidden lg:flex items-end gap-3">
              <div className="relative self-center">
                <div className="absolute -top-2.5 -left-1 text-accent-red text-lg">&#9829;</div>
                <div className="bg-white border border-border-light rounded-xl px-3 py-2 mb-1 relative max-w-[180px]">
                  <p className="font-pixel text-[7px] md:text-[8px] text-text-primary leading-snug">
                    ¡Cuéntame tu idea!<br />Estoy listo para<br />hacerla realidad.
                  </p>
                  <div className="absolute -bottom-1.5 left-5 w-2.5 h-2.5 bg-white border-r border-b border-border-light rotate-45" />
                </div>
              </div>
              <Image
                src="/images/mascota/BROU.png"
                alt="Brou mascota"
                width={280}
                height={320}
                className="drop-shadow-xl h-auto"
                style={{ width: "clamp(140px, 12vw, 220px)" }}
              />
            </div>
          </ScrollReveal>

          {/* RIGHT COLUMN: Form */}
          <div className="w-full lg:w-[48%] xl:w-[45%] flex-shrink-0">
            <ScrollReveal delay={1}>
              <div className="bg-text-primary rounded-2xl p-5 sm:p-6 md:p-8">
                {/* Terminal header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="font-pixel text-[10px] md:text-xs text-white/80 tracking-wider">
                    // CUÉNTANOS TU PROYECTO
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-sm bg-white/30" />
                    <div className="w-2.5 h-2.5 rounded-sm bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-sm bg-accent-red" />
                  </div>
                </div>

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="font-pixel text-[9px] md:text-[10px] text-white/60 tracking-wider mb-1.5 block">NOMBRE</label>
                    <input type="text" placeholder="Tu nombre" className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-accent-red transition-colors" />
                  </div>
                  <div>
                    <label className="font-pixel text-[9px] md:text-[10px] text-white/60 tracking-wider mb-1.5 block">EMAIL</label>
                    <input type="email" placeholder="tu@email.com" className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-accent-red transition-colors" />
                  </div>
                </div>

                {/* Service selector */}
                <div className="mb-4">
                  <label className="font-pixel text-[9px] md:text-[10px] text-white/60 tracking-wider mb-2 block">¿QUÉ NECESITAS?</label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((svc) => (
                      <button
                        key={svc.id}
                        onClick={() => setSelectedService(svc.id)}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border text-[11px] md:text-xs font-medium cursor-pointer transition-all duration-300 ${
                          selectedService === svc.id
                            ? "bg-accent-red border-accent-red text-white"
                            : "bg-transparent border-white/15 text-white/60 hover:border-white/30"
                        }`}
                      >
                        <ServiceIcon name={svc.icon} size={15} color="currentColor" />
                        {svc.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="mb-4">
                  <label className="font-pixel text-[9px] md:text-[10px] text-white/60 tracking-wider mb-1.5 block">CUÉNTANOS MÁS SOBRE TU PROYECTO</label>
                  <textarea
                    placeholder="Cuéntanos qué tienes en mente..."
                    rows={4}
                    className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-accent-red transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <a
                  href={`https://wa.me/+51904495146?text=${encodeURIComponent("Hola, quiero hablar sobre mi proyecto")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-accent-red text-white font-pixel text-[11px] md:text-xs text-center py-4 rounded-xl no-underline hover:bg-accent-red-hover transition-colors"
                >
                  ENVIAR PROYECTO <span className="inline-block ml-1">&#8599;</span>
                </a>
                <p className="text-[10px] text-white/30 text-center mt-2 flex items-center justify-center gap-1">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                  Tu información está protegida. Nadie compartirá tus datos.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Mascot mobile — shown below form on small screens */}
        <div className="flex lg:hidden justify-center items-end gap-3 mt-6">
          <div className="relative self-center">
            <div className="absolute -top-2.5 -left-1 text-accent-red text-lg">&#9829;</div>
            <div className="bg-white border border-border-light rounded-xl px-3 py-2 mb-1 relative max-w-[180px]">
              <p className="font-pixel text-[7px] text-text-primary leading-snug">
                ¡Cuéntame tu idea!<br />Estoy listo para<br />hacerla realidad.
              </p>
              <div className="absolute -bottom-1.5 left-5 w-2.5 h-2.5 bg-white border-r border-b border-border-light rotate-45" />
            </div>
          </div>
          <Image
            src="/images/mascota/BROU.png"
            alt="Brou mascota"
            width={280}
            height={320}
            className="drop-shadow-xl w-[150px] sm:w-[180px] h-auto"
          />
        </div>

        {/* Contact cards */}
        <ScrollReveal delay={2} className="mt-6 lg:mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: "whatsapp", label: "WHATSAPP", desc: "Respuesta rápida\nen menos de 1 hora", href: "https://wa.me/+51904495146" },
              { icon: "instagram", label: "INSTAGRAM", desc: "Conoce nuestro\ntrabajo diario", href: "https://www.instagram.com/broustudio" },
              { icon: "email", label: "EMAIL", desc: "broustudiolab@gmail.com\nTe respondemos", href: "mailto:broustudiolab@gmail.com" },
              { icon: "location", label: "UBICACIÓN", desc: "Lima, Perú\nTrabajamos contigo", href: null },
            ].map((item) => (
              <ContactCard key={item.label} {...item} />
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Ticker */}
      <div className="border-t border-border-light py-3 mt-6 overflow-hidden">
        <div className="ticker-track">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 px-2">
              {["AUTOMATIZACIÓN", "MARKETING", "CONTENIDO", "IA"].map((word) => (
                <span key={`${word}-${i}`} className="font-pixel text-[10px] md:text-xs text-text-muted/40 tracking-wider whitespace-nowrap flex items-center gap-4">
                  {word}<span className="text-accent-red/30">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-4 flex justify-center">
        <a
          href="https://wa.me/+51904495146?text=Hola%2C%20quiero%20hablar%20sobre%20mi%20proyecto"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-text-primary text-white font-pixel text-[10px] md:text-xs px-6 md:px-8 py-3.5 rounded-full no-underline btn-primary hover:bg-black transition-colors"
        >
          HABLEMOS DE TU PROYECTO
          <span className="text-accent-red">&#8599;</span>
        </a>
      </div>

      <Footer variant="full" />
    </div>
  );
}

function ServiceIcon({ name, size, color }: { name: string; size: number; color: string }) {
  const props = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "bolt": return <svg {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>;
    case "gear": return <svg {...props}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg>;
    case "chart": return <svg {...props}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>;
    case "sparkle": return <svg {...props}><path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.4 5.6 21.2 8 14 2 9.2h7.6L12 2z" /></svg>;
    case "monitor": return <svg {...props}><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>;
    case "megaphone": return <svg {...props}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>;
    case "dots": return <svg {...props}><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>;
    default: return null;
  }
}

function ContactCard({ icon, label, desc, href }: { icon: string; label: string; desc: string; href: string | null }) {
  const iconMap: Record<string, React.ReactNode> = {
    whatsapp: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>,
    instagram: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>,
    email: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
    location: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  };

  const content = (
    <div className="border border-border-light rounded-xl p-3 md:p-4 text-center hover:border-border-medium transition-colors h-full">
      <div className="flex justify-center mb-2">{iconMap[icon]}</div>
      <div className="font-pixel text-[8px] md:text-[9px] text-text-primary tracking-wider mb-1">{label}</div>
      <div className="text-[10px] md:text-[11px] text-text-muted leading-relaxed whitespace-pre-line">{desc}</div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="no-underline">
        {content}
      </a>
    );
  }
  return content;
}
