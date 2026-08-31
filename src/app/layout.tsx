import type { Metadata } from "next";
import { Press_Start_2P, Inter } from "next/font/google";
import "./globals.css";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BROU. Studio — Ideas que venden, sistemas que escalan",
  description:
    "Agencia creativa en Lima, Peru. Branding, diseno web, marketing digital e inteligencia artificial.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${pressStart.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
