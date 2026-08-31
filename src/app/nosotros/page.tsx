import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-bg-main">
      <Nav />

      {/* Hero */}
      <ScrollReveal className="px-5 md:px-8 lg:px-12 pt-10 md:pt-16 pb-8 md:pb-10">
        <h1 className="font-pixel text-xl sm:text-2xl lg:text-[32px] text-text-primary leading-relaxed mb-4 md:mb-6">
          Somos Brou<span className="text-accent-red">.</span>
        </h1>
        <p className="text-base md:text-xl text-text-muted leading-relaxed max-w-[650px]">
          Un estudio creativo nacido en Lima, Perú en 2021. Combinamos diseño,
          tecnología e inteligencia artificial para crear marcas que venden y
          sistemas que escalan.
        </p>
      </ScrollReveal>

      {/* Mascot Section */}
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
              Conoce a Brou
            </h3>
            <p className="text-[13px] md:text-[15px] text-white/70 leading-relaxed">
              Nuestra mascota es la cara de todo lo que hacemos. Una llama de
              fuego que representa la energía, creatividad y pasión que ponemos
              en cada proyecto. Brou nació como un símbolo de que las mejores
              ideas encienden negocios.
            </p>
          </div>
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
              <div className="w-full h-[220px] sm:h-[240px] md:h-[280px] bg-[#e8e4dd] rounded-xl overflow-hidden mb-5 md:mb-6 relative">
                <Image
                  src="/images/equipo/BRAYAN.jpeg"
                  alt="Brayan Cuzcano"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-pixel text-sm md:text-base text-text-primary mb-1">
                Brayan Cuzcano
              </h3>
              <div className="text-sm text-accent-red font-medium mb-3 md:mb-4">
                Co-fundador
              </div>
              <p className="text-[13px] md:text-sm text-text-muted leading-relaxed mb-3 md:mb-4">
                Diseñador, marketer y desarrollador. Apasionado por la
                intersección entre creatividad y tecnología. Lidera la visión
                creativa y la estrategia digital de Brou Studio.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Diseño", "Marketing", "AI", "Desarrollo"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 md:px-3 py-1 rounded-2xl bg-bg-main text-[11px] md:text-xs text-text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Nilton */}
          <ScrollReveal delay={2}>
            <div className="border border-border-light rounded-2xl p-5 md:p-8 bg-white">
              <div className="w-full h-[220px] sm:h-[240px] md:h-[280px] bg-[#e8e4dd] rounded-xl flex items-center justify-center mb-5 md:mb-6">
                <span className="text-[13px] text-text-muted">
                  [Foto de Nilton]
                </span>
              </div>
              <h3 className="font-pixel text-sm md:text-base text-text-primary mb-1">
                Nilton
              </h3>
              <div className="text-sm text-accent-red font-medium mb-3 md:mb-4">
                Co-fundador
              </div>
              <p className="text-[13px] md:text-sm text-text-muted leading-relaxed mb-3 md:mb-4">
                Co-fundador de Brou Studio. Su visión y experiencia complementan
                la dirección creativa del estudio, impulsando el crecimiento y
                la innovación.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Estrategia", "Negocios", "Operaciones"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 md:px-3 py-1 rounded-2xl bg-bg-main text-[11px] md:text-xs text-text-primary"
                  >
                    {skill}
                  </span>
                ))}
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
