"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LoaderProps {
  onComplete: () => void;
}

const STAGES = [
  { min: 0, max: 15, text: "INITIALIZING SIKANDER.EXE..." },
  { min: 16, max: 35, text: "Loading Curiosity..." },
  { min: 36, max: 55, text: "Loading Mathematics..." },
  { min: 56, max: 75, text: "Loading Code..." },
  { min: 76, max: 90, text: "Loading Artificial Intelligence..." },
  { min: 91, max: 100, text: "Building Systems..." },
];

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("INITIALIZING...");
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // 3.5s total loading duration
    const totalDuration = 3500;
    const intervalTime = 30; // ms per tick
    const increment = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(onComplete, 800); // Allow exit transition to play
          }, 400);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const stage = STAGES.find(
      (s) => progress >= s.min && progress <= s.max
    );
    if (stage) {
      setCurrentText(stage.text);
    }
  }, [progress]);

  // SVG parameters
  const radius = 70;
  const strokeWidth = 4;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {!isFading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background-primary overflow-hidden"
        >
          {/* Animated Ambient Aurora Blurs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-primary-purple/20 rounded-full blur-[80px] animate-float-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-soft-pink/20 rounded-full blur-[90px] animate-float-slow [animation-delay:4s]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-cyan/15 rounded-full blur-[100px] animate-float-slow [animation-delay:8s]" />
          </div>

          {/* Center Glass Panel Loader Content */}
          <div className="z-10 p-8 md:p-12 rounded-[32px] glass-panel flex flex-col items-center justify-center w-[90%] max-w-[420px] text-center shadow-2xl">
            <div className="relative w-40 h-40 flex items-center justify-center">
              {/* Circular SVG Ring */}
              <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 160 160">
                {/* Background Ring */}
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  fill="transparent"
                  stroke="rgba(139, 92, 246, 0.08)"
                  strokeWidth={strokeWidth}
                />
                {/* Progress Ring */}
                <motion.circle
                  cx="80"
                  cy="80"
                  r={radius}
                  fill="transparent"
                  stroke="url(#loaderGrad)"
                  strokeWidth={strokeWidth}
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  transition={{ ease: "easeOut" }}
                />
                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="loaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="50%" stopColor="#EC4899" />
                    <stop offset="100%" stopColor="#22D3EE" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Loader GIF Centerpiece */}
              <div className="w-[124px] h-[124px] rounded-full overflow-hidden relative border border-white/40 shadow-inner bg-white/20">
                <Image
                  src="/animations/loader/portfolioloader.gif"
                  alt="System Loading"
                  fill
                  sizes="124px"
                  className="object-cover pointer-events-none"
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* Percentage Indicator */}
            <div className="mt-6 font-display text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-soft-pink tracking-tight select-none">
              {Math.round(progress)}%
            </div>

            {/* Stage Text Console */}
            <div className="mt-4 min-h-[20px] font-mono text-[10px] uppercase tracking-widest text-text-dark font-semibold select-none flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-success rounded-full animate-ping" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentText}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.15 }}
                >
                  {currentText}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
