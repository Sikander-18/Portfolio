"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Play } from "lucide-react";
import Image from "next/image";

const ROLES = ["AI & Machine Learning Engineer", "System Architect", "Full Stack Developer", "Curious Problem Solver"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center overflow-hidden py-24 xl:py-0"
    >
      {/* Background GIF Canvas Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply select-none">
        <Image
          src="/animations/hero/herobackground.gif"
          alt="Neural Backdrop"
          fill
          priority
          unoptimized
          className="object-cover"
        />
        {/* Soft fading overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#ECEAFF]/10 via-[#ECEAFF]/60 to-[#ECEAFF]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#ECEAFF] via-transparent to-[#ECEAFF]" />
      </div>

      {/* Floating 3D Organic Claymorphic Morphing Blob */}
      <div className="absolute top-[15%] right-[20%] w-[320px] md:w-[450px] h-[320px] md:h-[450px] z-0 opacity-70 pointer-events-none select-none">
        <div 
          className="w-full h-full bg-gradient-to-tr from-primary-purple/45 via-soft-pink/35 to-electric-cyan/45 blur-md animate-[float-slow_20s_infinite_alternate]"
          style={{
            animation: "morph 15s ease-in-out infinite alternate, float-slow 15s ease-in-out infinite alternate",
            boxShadow: "inset 0 10px 40px rgba(255,255,255,0.7), 0 20px 60px rgba(139,92,246,0.15)",
            border: "1px solid rgba(255,255,255,0.4)"
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 w-full max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Headline & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
            
            {/* Tagline Badge */}
            <div className="px-4 py-1.5 rounded-full bg-white/30 border border-white/50 text-[10px] uppercase font-mono font-bold tracking-widest text-primary-purple flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span>Available for Work</span>
            </div>

            {/* Title Headline */}
            <h1 className="font-display font-extrabold text-5xl md:text-7xl text-text-dark leading-[1.05] tracking-tight">
              I BUILD <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-purple via-soft-pink to-electric-cyan">
                SYSTEMS
              </span> <br />
              FROM IDEAS.
            </h1>

            {/* Rotating Role Text */}
            <div className="h-8 flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="font-mono text-sm md:text-base font-bold text-secondary-purple tracking-wide"
                >
                  {ROLES[roleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Brief Introduction */}
            <p className="text-muted-text text-sm md:text-base font-sans max-w-lg leading-relaxed">
              Hey, I'm <strong className="text-text-dark font-semibold">Sikander Prajapati</strong>. A builder focused on blending machine learning pipelines, structured web platforms, and data pipelines to construct scalable, user-centric software architectures.
            </p>

            {/* Actions Panel */}
            <div className="flex flex-wrap items-center gap-4 mt-4 w-full sm:w-auto">
              <button
                onClick={() => handleScrollTo("about")}
                className="clay-button px-6 py-3.5 rounded-2xl text-xs flex items-center gap-2 group w-full sm:w-auto justify-center pointer-events-auto"
                data-cursor="OPEN"
              >
                <span>Explore My Mind</span>
                <ArrowRight className="w-4 h-4 text-primary-purple group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleScrollTo("missions")}
                className="clay-button-active px-6 py-3.5 rounded-2xl text-xs flex items-center gap-2 w-full sm:w-auto justify-center pointer-events-auto"
                data-cursor="BUILD"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>View Missions</span>
              </button>
            </div>

          </div>

          {/* Right Side: Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            
            <div 
              className="w-full max-w-[320px] rounded-[32px] glass-panel p-6 flex flex-col gap-5 select-none relative overflow-hidden transition-all duration-300 hover:scale-[1.02] border border-white/40 shadow-xl"
            >
              {/* Corner Aurora Light */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-soft-pink/15 rounded-full blur-2xl pointer-events-none" />

              {/* Graphic Profile Slot */}
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-white/30 to-white/10 border border-white/40 overflow-hidden relative shadow-inner flex items-center justify-center">
                {/* Simulated Glass/3D Avatar Graphic using SVG */}
                <svg className="w-2/3 h-2/3 text-primary-purple/70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="35" r="18" stroke="currentColor" strokeWidth="3" fill="rgba(139,92,246,0.05)" />
                  <path d="M15 85C15 68.4315 28.4315 55 45 55H55C71.5685 55 85 68.4315 85 85" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="rgba(139,92,246,0.05)" />
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                </svg>

                {/* Subtitle Card overlay */}
                <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-xl bg-white/40 backdrop-blur-md border border-white/40 flex items-center justify-between text-[9px] font-mono text-text-dark/80">
                  <span>HOST: SIKANDER-18</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </div>

              {/* Profile Meta Info */}
              <div className="flex flex-col gap-1 text-left">
                <span className="font-display font-extrabold text-lg text-text-dark">Sikander Prajapati</span>
                <span className="font-mono text-[10px] text-muted-text uppercase tracking-wider">AI Engineer & Builder</span>
              </div>

              {/* Resume download container */}
              <a
                href="/Resume.pdf"
                download="Sikander_Prajapati_Resume.pdf"
                className="clay-button py-3.5 rounded-2xl text-[11px] font-bold flex items-center justify-center gap-2 transition-all hover:bg-white/70 pointer-events-auto"
                data-cursor="READ"
              >
                <Download className="w-4 h-4 text-primary-purple" />
                <span>Download Resume</span>
              </a>

            </div>

          </div>

        </div>
      </div>

      {/* Embedded Morph keyframes inside styled jsx or style tag */}
      <style jsx global>{`
        @keyframes morph {
          0% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
        }
      `}</style>
    </section>
  );
}
