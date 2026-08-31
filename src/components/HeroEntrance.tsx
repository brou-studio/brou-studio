"use client";

import { useEffect, useState } from "react";

export default function HeroEntrance({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Start headlines right as loading fade completes
    const timer = setTimeout(() => setVisible(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`hero-entrance ${visible ? "hero-entered" : ""}`}>
      {children}
    </div>
  );
}
