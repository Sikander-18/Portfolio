"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import CustomCursor from "../ui/CustomCursor";
import TerminalOverlay from "../ui/TerminalOverlay";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Sparkles, X } from "lucide-react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  // Easter egg states
  const [konamiIdx, setKonamiIdx] = useState(0);
  const [showAchievement, setShowAchievement] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const [showQuote, setShowQuote] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Listen for Konami Code key sequence
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      const expectedKey = KONAMI_CODE[konamiIdx];

      if (key.toLowerCase() === expectedKey.toLowerCase()) {
        const nextIdx = konamiIdx + 1;
        if (nextIdx === KONAMI_CODE.length) {
          // Unlocked Konami easter egg
          setShowAchievement(true);
          setKonamiIdx(0);
          // Auto hide after 6s
          setTimeout(() => setShowAchievement(false), 6000);
        } else {
          setKonamiIdx(nextIdx);
        }
      } else {
        // Reset key index if mismatch
        setKonamiIdx(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [konamiIdx]);

  // Listen for logo click event
  useEffect(() => {
    const handleLogoClick = () => {
      setLogoClicks((prev) => {
        const next = prev + 1;
        if (next >= 5) {
          setShowQuote(true);
          return 0; // reset
        }
        return next;
      });
    };

    window.addEventListener("logo-click-event", handleLogoClick);
    return () => window.removeEventListener("logo-click-event", handleLogoClick);
  }, []);

  return (
    <>
      {/* Scrollable Main Content */}
      <div className="flex-1 flex flex-col">{children}</div>

      {/* Interactive Overlay utilities */}
      <CustomCursor />
      <TerminalOverlay />

      {/* Konami Achievement Badge Overlay */}
      <AnimatePresence>
        {showAchievement && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] px-6 py-4 rounded-3xl glass-panel border border-white/50 shadow-2xl flex items-center gap-3.5 select-none"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-500 flex items-center justify-center text-white shadow-md">
              <Award className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-mono text-[9px] text-[#A855F7] uppercase tracking-widest font-extrabold flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500 animate-spin" />
                Achievement Unlocked
              </span>
              <span className="font-display font-extrabold text-xs text-text-dark">
                Curiosity Level 100
              </span>
            </div>
            <button
              onClick={() => setShowAchievement(false)}
              className="ml-4 p-1 rounded-full hover:bg-white/20 text-muted-text hover:text-text-dark"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Secret Logo Quote Modal Overlay */}
      <AnimatePresence>
        {showQuote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background-primary/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 10 }}
              className="w-full max-w-[380px] p-8 rounded-[32px] glass-panel border border-white/40 shadow-2xl flex flex-col items-center justify-center text-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary-purple to-soft-pink flex items-center justify-center font-display font-extrabold text-white text-xl shadow-md">
                S
              </div>
              <p className="font-display font-extrabold text-base text-text-dark italic px-4 mt-2">
                "There are still more ideas than time."
              </p>
              <button
                onClick={() => setShowQuote(false)}
                className="clay-button-active px-6 py-2.5 rounded-xl text-[10px] font-bold mt-4 tracking-wider pointer-events-auto"
                data-cursor="CONNECT"
              >
                CLOSE
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
