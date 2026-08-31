"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { label: "SERVICIOS", href: "/servicios" },
  { label: "PROYECTOS", href: "/proyectos" },
  { label: "NOSOTROS", href: "/nosotros" },
  { label: "CONTACTO", href: "/contacto" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/broustudio",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@broustudio",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.8a4.84 4.84 0 01-1-.11z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/broustudio",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/51999999999",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/broustudio",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    ),
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const isHome = pathname === "/";
    if (isHome) {
      const timer = setTimeout(() => setEntered(true), 2200);
      return () => clearTimeout(timer);
    } else {
      setEntered(true);
    }
  }, [pathname]);

  return (
    <nav className="flex items-center justify-between px-5 md:px-8 lg:px-12 py-4 lg:py-6 relative">
      {/* Logo */}
      <Link href="/" className="flex items-center no-underline z-50 overflow-hidden shrink-0">
        <span
          className="font-body text-[28px] sm:text-[30px] lg:text-[38px] tracking-tight whitespace-nowrap"
          style={{
            fontWeight: 900,
            transform: entered ? "translateY(0)" : "translateY(110%)",
            transition: "transform 0.8s cubic-bezier(1, -0.5, 0, 1.5)",
            transitionDelay: "0s",
            display: "block",
          }}
        >
          <span className="text-text-primary">BROU</span>
          <span className="text-accent-red ml-1.5 sm:ml-2">STUDIO</span>
        </span>
      </Link>

      {/* Nav pills — desktop (lg+) */}
      <div className="hidden lg:flex items-center gap-2">
        {navItems.map((item, i) => (
          <div key={item.href} className="overflow-hidden">
            <Link
              href={item.href}
              className={`nav-pill block bg-text-primary px-4 xl:px-5 py-2 rounded-[23px] text-[11px] xl:text-[13px] text-white tracking-[1.5px] font-medium no-underline whitespace-nowrap ${
                pathname === item.href ? "active" : ""
              }`}
              style={{
                transform: entered ? "translateY(0)" : "translateY(110%)",
                transitionProperty: "transform, background",
                transitionDuration: "0.8s, 0.3s",
                transitionTimingFunction: "cubic-bezier(1, -0.5, 0, 1.5), cubic-bezier(0.19, 1, 0.22, 1)",
                transitionDelay: entered ? `${0.1 + i * 0.07}s, 0s` : "0s, 0s",
              }}
            >
              {item.label}
            </Link>
          </div>
        ))}
      </div>

      {/* Social icons + Location — desktop (lg+) */}
      <div className="hidden lg:flex items-center gap-4 xl:gap-5">
        <div className="flex items-center gap-2 xl:gap-2.5">
          {socials.map((s, i) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-text-primary hover:text-accent-red transition-colors"
              style={{
                transform: entered ? "translateY(0)" : "translateY(110%)",
                transition: "transform 0.8s cubic-bezier(1, -0.5, 0, 1.5), color 0.3s cubic-bezier(0.19, 1, 0.22, 1)",
                transitionDelay: entered ? `${0.12 + i * 0.05}s, 0s` : "0s, 0s",
                display: "block",
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        <div
          className="w-px h-8 bg-border-medium"
          style={{
            opacity: entered ? 1 : 0,
            transition: "opacity 0.6s cubic-bezier(0.19, 1, 0.22, 1)",
            transitionDelay: "0.4s",
          }}
        />

        <div className="text-right overflow-hidden">
          <div
            style={{
              transform: entered ? "translateY(0)" : "translateY(110%)",
              transition: "transform 0.8s cubic-bezier(1, -0.5, 0, 1.5)",
              transitionDelay: "0.15s",
            }}
          >
            <div className="text-[12px] xl:text-[13px] text-text-primary font-medium tracking-wider leading-snug">
              LIMA, PERÚ
            </div>
            <div className="text-[12px] xl:text-[13px] text-text-primary tracking-wider leading-snug">
              2026
            </div>
          </div>
        </div>
      </div>

      {/* Hamburger / Close — mobile + tablet (below lg) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden z-50 p-2 bg-transparent border-none cursor-pointer"
        aria-label="Menu"
        style={{
          opacity: entered ? 1 : 0,
          transition: "opacity 0.5s cubic-bezier(0.13, 0.47, 0.13, 0.98)",
          transitionDelay: "0.1s",
        }}
      >
        {menuOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        ) : (
          <div className="flex flex-col gap-[5px]">
            <span className="block w-6 h-[2px] bg-text-primary" />
            <span className="block w-6 h-[2px] bg-text-primary" />
            <span className="block w-6 h-[2px] bg-text-primary" />
          </div>
        )}
      </button>

      {/* Menu overlay — mobile + tablet */}
      {menuOpen && (
        <div className="fixed inset-0 bg-bg-main z-40 flex flex-col items-center gap-6 lg:hidden pt-28 sm:pt-32">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`font-pixel text-lg sm:text-xl tracking-wider no-underline transition-colors ${
                pathname === item.href ? "text-accent-red" : "text-text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="flex gap-6 mt-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-text-primary hover:text-accent-red transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div className="mt-2 text-center text-[13px] text-text-muted">
            <div className="tracking-wider">LIMA, PERÚ</div>
            <div className="tracking-wider">2026</div>
          </div>
        </div>
      )}
    </nav>
  );
}
