import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PhotoToggle from "@/components/PhotoToggle";
import Image from "next/image";

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-bg-main">
      <Nav />

      {/* Hero */}
      <ScrollReveal className="px-5 md:px-8 lg:px-12 pt-10 md:pt-16 pb-8 md:pb-10">
        <h1 className="font-pixel text-xl sm:text-2xl lg:text-[32px] text-text-primary leading-relaxed mb-4 md:mb-6">
          Somos Brou
        </h1>
        <p className="text-base md:text-xl text-text-muted leading-relaxed">
          Un estudio creativo nacido en Lima, Perú en 2021. Combinamos diseño,
          tecnología e inteligencia artificial para crear marcas que venden y
          sistemas que escalan.
        </p>
      </ScrollReveal>

      {/* Mascot Section — ¿Quién es Brou? */}
      <ScrollReveal className="px-5 md:px-8 lg:px-12 mb-10 md:mb-12">
        <div className="bg-text-primary rounded-2xl p-6 sm:p-8 lg:p-12 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
          <div className="flex-shrink-0">
            <Image
              src="/images/mascota/BROU.png"
              alt="Brou mascota"
              width={160}
              height={180}
              className="drop-shadow-xl w-[100px] sm:w-[130px] md:w-[160px] h-auto"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-pixel text-sm md:text-base text-white mb-3 md:mb-4">
              ¿Quién es Brou?
            </h3>
            <p className="text-[13px] md:text-[15px] text-white/70 leading-relaxed mb-4">
              Soy Brou, CEO creativo y director de BROU Studio. Me encargo de
              convertir ideas en marcas con personalidad, contenido con intención
              y diseños que sí se hacen notar.
            </p>
            <p className="font-pixel text-[11px] md:text-xs text-accent-red">
              Prendo la chispa que impulsa tu marca.
            </p>
            <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-start">
              {["Branding", "Contenido", "Redes", "Web & Ads"].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full border border-white/20 text-[11px] text-white/60"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Sello Brou */}
      <ScrollReveal className="px-5 md:px-8 lg:px-12 mb-10 md:mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {[
            { title: "Creatividad con personalidad", icon: "fire" },
            { title: "Estrategia con intención", icon: "target" },
            { title: "Diseño que impacta", icon: "bolt" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-text-primary rounded-xl p-5 md:p-6 text-center"
            >
              <div className="text-accent-red text-2xl mb-2">
                {item.icon === "fire" && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                    <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z" />
                  </svg>
                )}
                {item.icon === "target" && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                )}
                {item.icon === "bolt" && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                )}
              </div>
              <h3 className="text-[13px] md:text-sm font-semibold text-white">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Founders */}
      <div className="px-5 md:px-8 lg:px-12">
        <ScrollReveal>
          <h2 className="font-pixel text-sm md:text-base text-text-primary mb-6 md:mb-8">
            <span className="text-accent-red">(01)</span> Fundadores
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {/* Brayan */}
          <ScrollReveal delay={1}>
            <div className="border border-border-light rounded-2xl p-5 md:p-8 bg-white">
              <div className="mb-5 md:mb-6">
                <PhotoToggle
                  realSrc="/images/equipo/BRAYAN.png"
                  plushSrc="/images/equipo/BRAYAN-PELUCHE.png"
                  alt="Brayan Cuzcano"
                />
              </div>
              <h3 className="font-pixel text-sm md:text-base text-text-primary mb-1">
                Brayan Cuzcano
              </h3>
              <div className="text-sm text-accent-red font-medium mb-3 md:mb-4">
                Co-fundador · Perú
              </div>
              <p className="text-[13px] md:text-sm text-text-muted leading-relaxed mb-4 md:mb-5">
                Creador digital especializado en páginas web y automatizaciones
                inteligentes que transforman negocios. Combina diseño, estrategia
                y tecnología para construir experiencias digitales que no solo se
                ven bien, sino que convierten y generan resultados.
              </p>

              {/* Info grid */}
              <div className="grid grid-cols-2 gap-4 mb-4 md:mb-5">
                <div>
                  <div className="font-pixel text-[9px] md:text-[10px] text-accent-red mb-1">EXPERIENCIA</div>
                  <div className="text-[12px] md:text-[13px] text-text-primary">Freelancer</div>
                  <div className="text-[11px] text-text-muted">2021 — Actualmente</div>
                </div>
                <div>
                  <div className="font-pixel text-[9px] md:text-[10px] text-accent-red mb-1">FORMACIÓN</div>
                  <div className="text-[12px] md:text-[13px] text-text-primary">Universidad San Ignacio de Loyola</div>
                  <div className="text-[11px] text-text-muted">Julio 2024</div>
                </div>
              </div>

              {/* Servicios */}
              <div className="mb-4 md:mb-5">
                <div className="font-pixel text-[9px] md:text-[10px] text-accent-red mb-2">SERVICIOS</div>
                <div className="flex flex-wrap gap-1.5">
                  {["Ads", "Diseño Web", "Automatización AI"].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 md:px-3 py-1 rounded-2xl bg-bg-main text-[11px] md:text-xs text-text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Herramientas */}
              <div>
                <div className="font-pixel text-[9px] md:text-[10px] text-accent-red mb-2">HERRAMIENTAS</div>
                <div className="flex flex-wrap gap-1.5">
                  {["Meta Business Suite", "Claude Code", "Photoshop"].map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 md:px-3 py-1 rounded-2xl border border-border-light text-[11px] md:text-xs text-text-muted"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Nilton */}
          <ScrollReveal delay={2}>
            <div className="border border-border-light rounded-2xl p-5 md:p-8 bg-white">
              <div className="mb-5 md:mb-6">
                <PhotoToggle
                  realSrc="/images/equipo/NILTON.png"
                  plushSrc="/images/equipo/NILTON-PELUCHE.png"
                  alt="Nilton Orinuela"
                />
              </div>
              <h3 className="font-pixel text-sm md:text-base text-text-primary mb-1">
                Nilton Orinuela
              </h3>
              <div className="text-sm text-accent-red font-medium mb-3 md:mb-4">
                Co-fundador · Perú
              </div>
              <p className="text-[13px] md:text-sm text-text-muted leading-relaxed mb-4 md:mb-5">
                Diseñador y filmmaker. Desarrolla conceptos y piezas digitales
                uniendo storytelling con diseño. Crea contenido, campañas y
                experiencias digitales que ayudan a las marcas a comunicar,
                conectar y crecer.
              </p>

              {/* Info grid */}
              <div className="grid grid-cols-2 gap-4 mb-4 md:mb-5">
                <div>
                  <div className="font-pixel text-[9px] md:text-[10px] text-accent-red mb-1">EXPERIENCIA</div>
                  <div className="text-[12px] md:text-[13px] text-text-primary">Freelancer</div>
                  <div className="text-[11px] text-text-muted">2021 — Actualmente</div>
                </div>
                <div>
                  <div className="font-pixel text-[9px] md:text-[10px] text-accent-red mb-1">FORMACIÓN</div>
                  <div className="text-[12px] md:text-[13px] text-text-primary">Universidad San Ignacio de Loyola</div>
                  <div className="text-[11px] text-text-muted">Julio 2024</div>
                </div>
              </div>

              {/* Servicios */}
              <div className="mb-4 md:mb-5">
                <div className="font-pixel text-[9px] md:text-[10px] text-accent-red mb-2">SERVICIOS</div>
                <div className="flex flex-wrap gap-1.5">
                  {["Producción Audiovisual", "Edición & Postproducción", "Diseño Gráfico & Branding"].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 md:px-3 py-1 rounded-2xl bg-bg-main text-[11px] md:text-xs text-text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Herramientas */}
              <div>
                <div className="font-pixel text-[9px] md:text-[10px] text-accent-red mb-2">HERRAMIENTAS</div>
                <div className="flex flex-wrap gap-1.5">
                  {["Premiere Pro", "After Effects", "Photoshop", "Illustrator", "CapCut"].map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 md:px-3 py-1 rounded-2xl border border-border-light text-[11px] md:text-xs text-text-muted"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Values */}
      <div className="px-5 md:px-8 lg:px-12 py-10 md:py-12">
        <ScrollReveal>
          <h2 className="font-pixel text-sm md:text-base text-text-primary mb-6 md:mb-8">
            <span className="text-accent-red">(02)</span> Nuestros valores
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              num: "01",
              title: "Creatividad con propósito",
              desc: "Cada diseño tiene un objetivo medible. No hacemos arte por arte — hacemos arte que vende.",
            },
            {
              num: "02",
              title: "Tecnología como aliado",
              desc: "IA, automatizaciones y bots no son el futuro — son el presente. Los integramos en cada solución.",
            },
            {
              num: "03",
              title: "Resultados reales",
              desc: "No prometemos likes — prometemos ventas. Cada proyecto se mide por el impacto en tu negocio.",
            },
          ].map((value, i) => (
            <ScrollReveal key={value.num} delay={i + 1}>
              <div className="bg-text-primary rounded-xl p-6 md:p-8">
                <div className="font-pixel text-xs text-accent-red mb-3">
                  {value.num}
                </div>
                <h3 className="text-sm md:text-base font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-[12px] md:text-[13px] text-white/60 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Footer variant="full" />
    </div>
  );
}
