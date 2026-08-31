"use client";

import { useEffect, useRef, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Estrategia",
    description:
      "Antes de crear, definimos dónde debe competir tu marca y qué debe hacerla diferente. Analizamos mercado, audiencia y competencia para convertir ideas en una dirección clara.",
    pills: [
      "Estrategia de Marca",
      "Estrategia de Contenido",
      "Consultoría",
      "Posicionamiento",
      "Naming",
    ],
    caseStudies: [
      { name: "Excelsior", slug: "excelsior" },
      { name: "Maffia", slug: "maffia" },
    ],
    image: "/images/servicios/estrategia.png",
    gradient: "from-amber-900 to-amber-700",
    imagePosition: "left" as const,
  },
  {
    number: "02",
    title: "Diseño",
    description:
      "Convertimos la estrategia en una identidad que pueda reconocerse, recordarse y crecer. Branding, diseño web y UX/UI se conectan en un sistema visual coherente en cada punto de contacto.",
    pills: [
      "Branding",
      "Identidad Visual",
      "Diseño Web",
      "UI/UX",
      "Motion Graphics",
    ],
    caseStudies: [
      { name: "Jachita", slug: "jachita" },
      { name: "Excelsior", slug: "excelsior" },
    ],
    image: "/images/servicios/diseno.png",
    gradient: "from-rose-900 to-rose-700",
    imagePosition: "right" as const,
  },
  {
    number: "03",
    title: "Desarrollo",
    description:
      "Construimos tecnología para que las ideas funcionen en el mundo real. Desarrollamos webs, eCommerce, automatizaciones y soluciones con Brou AI que simplifican procesos y convierten conversaciones en oportunidades.",
    pills: [
      "Desarrollo Web",
      "Landing Pages",
      "eCommerce",
      "Automatizaciones",
      "Brou AI",
    ],
    caseStudies: [
      { name: "Maffia", slug: "maffia" },
      { name: "Excelsior", slug: "excelsior" },
    ],
    image: "/images/servicios/desarrollo.png",
    gradient: "from-blue-900 to-blue-700",
    imagePosition: "left" as const,
  },
  {
    number: "04",
    title: "Contenido",
    description:
      "Creamos contenido para conseguir algo más que atención. Fotografía, video, redes, publicidad y copy trabajan juntos para provocar una acción: mirar, conectar, escribir o comprar.",
    pills: [
      "Campañas",
      "Redes Sociales",
      "Fotografía",
      "Video / Reels",
      "Meta Ads",
      "Copywriting",
    ],
    caseStudies: [
      { name: "La Casa de las Narices", slug: "la-casa-de-las-narices" },
      { name: "Maffia", slug: "maffia" },
    ],
    image: "/images/servicios/contenido.png",
    gradient: "from-emerald-900 to-emerald-700",
    imagePosition: "right" as const,
  },
];

function ServiceSection({ service, index }: { service: typeof services[0]; index: number }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={`svc-section ${visible ? "svc-visible" : ""}`}>
      <div className={`flex flex-col ${service.imagePosition === "right" ? "md:flex-row" : "md:flex-row"} gap-8 md:gap-12 lg:gap-16`}>
        {/* Image */}
        <div
          className={`svc-image w-full md:w-[340px] lg:w-[400px] xl:w-[440px] flex-shrink-0 aspect-[3/4] rounded-2xl overflow-hidden ${service.image ? "" : `bg-gradient-to-br ${service.gradient}`} flex items-center justify-center ${service.imagePosition === "right" ? "md:order-2" : "md:order-1"}`}
        >
          {service.image ? (
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="font-pixel text-white text-base md:text-lg opacity-50">
              [{service.title}]
            </span>
          )}
        </div>

        {/* Content */}
        <div className={`flex-1 flex flex-col justify-between ${service.imagePosition === "right" ? "md:order-1" : "md:order-2"}`}>
          <div>
            {/* Number + Title */}
            <div className="svc-title flex items-baseline gap-3 mb-6 md:mb-8">
              <span className="font-pixel text-[11px] md:text-[13px] text-accent-red tracking-wide">
                ({service.number})
              </span>
              <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-medium text-text-primary tracking-[-0.02em]" style={{ fontFamily: "var(--font-body), Georgia, 'Times New Roman', serif" }}>
                {service.title}
              </h2>
            </div>

            {/* Pills — staggered */}
            <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
              {service.pills.map((pill, pillIndex) => (
                <span
                  key={pill}
                  className="svc-pill service-pill px-3.5 py-1.5 rounded-full border border-text-primary text-[11px] md:text-[12px] text-text-primary cursor-default tracking-wide"
                  style={{ transitionDelay: `${0.15 + pillIndex * 0.08}s` }}
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="svc-desc text-[14px] md:text-[15px] text-text-muted leading-[1.7] max-w-[440px] mb-8 md:mb-10">
              {service.description}
            </p>
          </div>

          {/* Case study links */}
          <div className="svc-work flex items-start gap-8">
            <div className="flex gap-6">
              {service.caseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/proyectos/${cs.slug}`}
                  className="text-[12px] md:text-[13px] text-accent-red font-medium no-underline hover:text-accent-red-hover transition-colors tracking-wide"
                >
                  {cs.name}{" "}
                  <span className="link-arrow">&#8599;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Servicios() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    let observer: IntersectionObserver | null = null;
    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHeroVisible(true);
            observer?.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    }, 100);
    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg-main">
      <Nav />

      {/* Hero */}
      <div
        ref={heroRef}
        className={`svc-hero px-6 md:px-10 lg:px-16 xl:px-20 pt-12 md:pt-20 pb-16 md:pb-24 ${heroVisible ? "svc-hero-visible" : ""}`}
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-16">
          <h1 className="svc-hero-title text-[32px] sm:text-[42px] md:text-[52px] lg:text-[64px] xl:text-[72px] font-light text-text-primary leading-[1.1] tracking-[-0.02em] max-w-[700px]" style={{ fontFamily: "var(--font-body), Georgia, 'Times New Roman', serif" }}>
            Diseñamos la marca.
            <br />
            Construimos lo que
            <br />
            viene después.
          </h1>
          <p className="svc-hero-desc text-[15px] md:text-[17px] text-text-muted leading-[1.7] max-w-[380px] md:pt-4">
            Brou Studio es una agencia creativa y digital en Lima, Perú. Unimos estrategia de marca, branding, diseño y desarrollo web, contenido, marketing digital e inteligencia artificial.
            <br /><br />
            Creamos marcas coherentes y construimos los sistemas digitales que necesitan para comunicar, vender y crecer.
          </p>
        </div>
      </div>

      {/* Service Categories */}
      <div className="px-6 md:px-10 lg:px-16 xl:px-20 flex flex-col gap-0 pb-20 md:pb-32">
        {services.map((service, index) => (
          <div key={service.number}>
            {/* Divider line */}
            <div className="border-t border-border-medium" />
            <div className="py-12 md:py-16 lg:py-20">
              <ServiceSection service={service} index={index} />
            </div>
          </div>
        ))}
      </div>

      <Footer variant="full" />
    </div>
  );
}
