"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, BookOpen, Hammer, Zap, RefreshCw } from "lucide-react";
import Image from "next/image";

const MINDSET_STEPS = [
  {
    phase: "Observe",
    icon: Eye,
    title: "Observe Constraints",
    desc: "Identify friction in existing structures. Track down computational bottlenecks and user pain points to map structural demands.",
    color: "#22D3EE",
  },
  {
    phase: "Learn",
    icon: BookOpen,
    title: "Acquire & Structure",
    desc: "Digest documentation, study relevant mathematical formulas, map data flows, and analyze system dependencies.",
    color: "#8B5CF6",
  },
  {
    phase: "Build",
    icon: Hammer,
    title: "Implement & Construct",
    desc: "Translate models into clean binaries, optimize training loops, engineer clean APIs, and package production code.",
    color: "#EC4899",
  },
  {
    phase: "Improve",
    icon: Zap,
    title: "Profile & Optimize",
    desc: "Run benchmarks, profile memory, eliminate memory leaks, tune hyperparameters, and refactor latency bottlenecks.",
    color: "#10B981",
  },
  {
    phase: "Repeat",
    icon: RefreshCw,
    title: "Iterate & Scale",
    desc: "Push to deployment, monitor telemetry, refactor for scale, and restart the cycle for the next modular feature.",
    color: "#F59E0B",
  },
];

export default function Mindset() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % MINDSET_STEPS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const activeStep = MINDSET_STEPS[activeIndex];
  const ActiveIcon = activeStep.icon;

  return (
    <section id="mindset" className="py-24 relative overflow-hidden">
      {/* Background Soft Blurs */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-soft-pink/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-8 md:px-16 lg:px-24 w-full max-w-[1200px] relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
          <span className="font-mono text-[10px] text-primary-purple uppercase tracking-widest font-bold">
            Cognitive Loop
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-text-dark leading-tight tracking-tight">
            How My Brain Works
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-purple to-soft-pink mx-auto rounded-full mt-2" />
          <p className="text-muted-text text-sm md:text-base font-sans mt-4 leading-relaxed">
            Systems building is an iterative process. This infinite feedback loop guides my software engineering and machine learning projects.
          </p>
        </div>

        {/* Content split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Interactive Loop Visualizer */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* Glowing neon ring outer border */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              
              {/* Spinning loop glow boundary */}
              <div 
                className="absolute inset-0 rounded-full border border-dashed border-white/50 animate-[spin_40s_linear_infinite]"
                style={{ borderColor: activeStep.color }}
              />

              {/* Glowing inner shadow screen */}
              <div className="absolute w-[92%] h-[92%] rounded-full glass-panel border border-white/40 flex items-center justify-center shadow-xl overflow-hidden">
                <Image
                  src="/animations/brain-cycle/Builder_mindset_cycle.gif"
                  alt="Mindset Cycle"
                  fill
                  unoptimized
                  priority
                  className="object-cover opacity-80 pointer-events-none select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent mix-blend-overlay" />
              </div>

              {/* Mini Icon Indicator float on top */}
              <motion.div
                key={activeIndex}
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute -top-3 right-[15%] w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg z-20"
                style={{ background: `linear-gradient(135deg, ${activeStep.color} 0%, #7C3AED 100%)` }}
              >
                <ActiveIcon className="w-5 h-5" />
              </motion.div>
            </div>
          </div>

          {/* Right: Step list selection panel */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {MINDSET_STEPS.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = activeIndex === idx;

              return (
                <button
                  key={step.phase}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => {
                    setActiveIndex(idx);
                    setIsHovered(true);
                  }}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`w-full p-4 rounded-2xl text-left transition-all duration-300 flex items-start gap-4 border pointer-events-auto ${
                    isActive
                      ? "glass-panel border-white/60 shadow-md translate-x-2 bg-white/20"
                      : "bg-white/5 border-transparent hover:bg-white/10 text-muted-text"
                  }`}
                  data-cursor="OPEN"
                >
                  {/* Step Num & Icon */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm shrink-0 transition-colors duration-300 ${
                      isActive ? "" : "bg-white/10"
                    }`}
                    style={isActive ? { background: `linear-gradient(135deg, ${step.color} 0%, #7C3AED 100%)` } : {}}
                  >
                    <StepIcon className="w-4 h-4" />
                  </div>

                  {/* Step Content */}
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] uppercase tracking-wider font-bold opacity-60">
                        Phase 0{idx + 1}
                      </span>
                      <span className="w-1 h-1 bg-white/30 rounded-full" />
                      <span className="font-display font-extrabold text-xs tracking-wide text-text-dark">
                        {step.phase}
                      </span>
                    </div>
                    
                    <h4 className="font-display font-bold text-sm text-text-dark leading-snug">
                      {step.title}
                    </h4>

                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-muted-text text-xs leading-relaxed mt-1"
                      >
                        {step.desc}
                      </motion.p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
