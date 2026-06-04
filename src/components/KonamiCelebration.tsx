"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Sparkles } from "lucide-react";

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
  "a",
];

export default function KonamiCelebration() {
  const [isActive, setIsActive] = useState(false);
  const [inputSequence, setInputSequence] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Record keypress
      const key = e.key;
      const nextSequence = [...inputSequence, key];

      // Slice to keep only last 10 keys
      if (nextSequence.length > KONAMI_CODE.length) {
        nextSequence.shift();
      }

      setInputSequence(nextSequence);

      // Check match
      const isMatch = nextSequence.every((val, index) => val.toLowerCase() === KONAMI_CODE[index].toLowerCase());
      if (isMatch) {
        setIsActive(true);
        setInputSequence([]); // reset
        
        // Play retro sound if possible
        try {
          const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
          const playBeep = (freq: number, start: number, duration: number) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.frequency.value = freq;
            osc.type = "square";
            gain.gain.setValueAtTime(0.04, start);
            gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(start);
            osc.stop(start + duration);
          };
          const now = audioCtx.currentTime;
          playBeep(523.25, now, 0.15); // C5
          playBeep(659.25, now + 0.12, 0.15); // E5
          playBeep(783.99, now + 0.24, 0.15); // G5
          playBeep(1046.50, now + 0.36, 0.4); // C6
        } catch {
          // ignore context errors if blocked by browser autoplay rules
        }

        // Hide after 6 seconds
        setTimeout(() => {
          setIsActive(false);
        }, 6000);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [inputSequence]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-background/80 backdrop-blur-md pointer-events-auto"
        >
          {/* Confetti particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: "50vw",
                  y: "50vh",
                  scale: Math.random() * 0.8 + 0.4,
                  opacity: 1,
                  rotate: 0,
                }}
                animate={{
                  x: `${Math.random() * 100}vw`,
                  y: `${Math.random() * 100}vh`,
                  rotate: Math.random() * 360,
                  opacity: [1, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  ease: "easeOut",
                }}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: ["#7c3aed", "#22d3ee", "#10b981", "#a855f7"][i % 4],
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative p-8 md:p-12 max-w-md bg-zinc-900 border border-primary/40 rounded-2xl text-center shadow-[0_0_50px_rgba(124,58,237,0.2)]"
          >
            {/* Pulsing glow ring */}
            <div className="absolute inset-0 border border-accent/20 rounded-2xl animate-ping opacity-40 pointer-events-none" />

            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent blur opacity-75 animate-pulse" />
                <div className="relative p-4 bg-background rounded-full border border-primary/40">
                  <Award className="w-12 h-12 text-accent" />
                </div>
              </div>
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white mb-2 uppercase tracking-wide">
              Achievement Unlocked
            </h3>
            
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
              Curiosity Level 100
            </p>

            <p className="font-sans text-sm text-zinc-400 mb-6 leading-relaxed">
              &ldquo;The important thing is not to stop questioning. Curiosity has its own reason for existence.&rdquo;
            </p>

            <div className="flex justify-center items-center gap-1.5 font-mono text-[10px] text-zinc-500 bg-zinc-950/80 border border-zinc-800 rounded px-3 py-1.5 w-fit mx-auto">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>SIKANDER.EXE INTERNAL BUFFER CLEARED</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
