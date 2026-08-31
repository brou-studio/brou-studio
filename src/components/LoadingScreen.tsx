"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1800);
    const removeTimer = setTimeout(() => setRemoved(true), 2400);
    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div className={`loading-screen ${hidden ? "loading-screen-hidden" : ""}`}>
      <span className="loading-pill font-body">CARGANDO</span>
      <span className="loading-pill font-body">POR</span>
      <span className="loading-pill font-body">FAVOR</span>
      <span className="loading-pill font-body">ESPERA</span>
    </div>
  );
}
