"use client";

import { useState, useRef } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import Image from "next/image";

const filters = [
  { label: "Destacados", value: "Todos" },
  { label: "Todos", value: "All" },
  { label: "Web", value: "Web" },
  { label: "Marketing", value: "Marketing" },
  { label: "Branding", value: "Branding" },
  { label: "AI", value: "AI" },
];

const projects = [
  {
    slug: "excelsior",
    name: "Excelsior",
    subtitle: "EXOESQUELETOS",
    services: "Branding + Web + Marketing + Brou AI",
    tags: ["Branding", "Web", "Marketing", "AI"],
    heroImage: "/images/proyectos/excelsior/HERO.png",
  },
  {
    slug: "maffia",
    name: "Maffia",
    subtitle: "PIZZERÍA",
    services: "Branding + Marketing Digital + Brou AI",
    tags: ["Branding", "Marketing", "AI"],
    heroImage: "/images/proyectos/maffia/HERO.png",
  },
  {
    slug: "la-casa-de-las-narices",
    name: "La Casa de las Narices",
    subtitle: "ESTÉTICA",
    services: "Marketing Digital + Meta Ads + Contenido",
    tags: ["Marketing"],
    heroImage: "/images/proyectos/la-casa-de-las-narices/HERO.png",
  },
  {
    slug: "jachita",
    name: "Jachita",
    subtitle: "RESTAURANTE",
    services: "Branding + Identidad Visual",
    tags: ["Branding"],
    heroImage: null,
  },
];

export default function Proyectos() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeFilter === "Todos" || activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <div className="min-h-screen bg-bg-main">
      <Nav />

      {/* Hero + Filter row */}
      <div className="px-6 md:px-10 lg:px-16 xl:px-20 pt-12 md:pt-20 pb-16 md:pb-24 flex justify-between items-start">
        {/* Title — large serif like ToyFight */}
        <ScrollReveal>
          <div className="flex items-baseline gap-4">
            <div>
              <h1 className="text-[40px] sm:text-[52px] md:text-[64px] lg:text-[80px] xl:text-[90px] font-light text-text-primary leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: "var(--font-body), Georgia, 'Times New Roman', serif" }}>
                Proyectos
                <br />
                <span className="inline-flex items-baseline gap-4">
                  Destacados
                  <span className="text-[24px] sm:text-[28px] md:text-[32px] font-light text-text-muted">
                    ({filteredProjects.length})
                  </span>
                </span>
              </h1>
            </div>
          </div>
        </ScrollReveal>

        {/* Filter — vertical list on right like ToyFight */}
        <div className="hidden md:flex flex-col items-end gap-1 pt-2">
          <span className="text-[11px] tracking-[2px] text-text-muted mb-2 font-medium">FILTRAR</span>
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`text-[13px] lg:text-[14px] text-right py-1 px-0 bg-transparent border-none cursor-pointer transition-colors tracking-wide ${
                activeFilter === filter.value
                  ? "text-text-primary font-medium underline underline-offset-4"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile filters */}
      <div className="md:hidden px-6 pb-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-4 py-1.5 rounded-[23px] text-[11px] font-medium tracking-wider border transition-all cursor-pointer ${
              activeFilter === filter.value
                ? "bg-text-primary text-white border-text-primary"
                : "bg-transparent text-text-primary border-text-primary hover:bg-text-primary hover:text-white"
            }`}
          >
            {filter.label.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Projects — horizontal scroll strip like ToyFight */}
      <div className="pb-20 md:pb-32">
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-5 overflow-x-auto px-6 md:px-10 lg:px-16 xl:px-20 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/proyectos/${project.slug}`}
              className="project-card flex-shrink-0 w-[220px] sm:w-[260px] md:w-[280px] lg:w-[320px] no-underline group"
            >
              {/* Card — black background with centered image */}
              <div className="w-full aspect-[4/3] bg-[#1a1a1a] rounded-xl overflow-hidden flex items-center justify-center relative">
                {project.heroImage ? (
                  <Image
                    src={project.heroImage}
                    alt={project.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="text-center px-4">
                    <div className="font-pixel text-base sm:text-lg lg:text-xl text-white tracking-wider">
                      {project.name.toUpperCase()}
                    </div>
                    <div className="text-[11px] text-white/50 mt-2 tracking-widest">
                      {project.subtitle}
                    </div>
                  </div>
                )}
              </div>
              {/* Title below card */}
              <div className="pt-3">
                <div className="project-title font-pixel text-[11px] md:text-xs text-text-primary">
                  {project.name}
                </div>
                <div className="text-[11px] md:text-[12px] text-text-muted mt-1">
                  {project.services}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer variant="full" />
    </div>
  );
}
