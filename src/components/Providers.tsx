"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import ParticleBackground from "./ParticleBackground";
import CustomCursor from "./CustomCursor";
import SoundEffects from "./SoundEffects";
import KonamiCelebration from "./KonamiCelebration";
import TerminalOverlay from "./TerminalOverlay";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.8,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  if (!mounted) {
    return (
      <div className="bg-[#050505] min-h-screen text-white flex items-center justify-center font-mono">
        INITIALIZING...
      </div>
    );
  }

  return (
    <>
      <ParticleBackground />
      <CustomCursor />
      <SoundEffects />
      <KonamiCelebration />
      <TerminalOverlay />
      {children}
    </>
  );
}
