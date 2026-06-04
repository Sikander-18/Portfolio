"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Mail, ArrowDown, ArrowUpRight } from "lucide-react";
import { GithubIcon as Github } from "@/components/icons";

const SUBHEADINGS = [
  "AI Engineer",
  "Developer",
  "Explorer",
  "Problem Solver"
];

export default function Hero() {
  const [subIndex, setSubIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSubIndex((prev) => (prev + 1) % SUBHEADINGS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between p-6 md:p-12 z-10 overflow-hidden bg-transparent">
      {/* Empty spacer for top spacing */}
      <div />

      {/* Center content */}
      <div className="max-w-5xl mx-auto w-full flex flex-col justify-center items-start gap-8 md:gap-10 my-auto">
        <div className="flex flex-col gap-3 font-mono text-xs md:text-sm tracking-widest text-accent uppercase select-none">
          <span>{"// Welcome to the Digital Workshop"}</span>
        </div>

        {/* Main Display Headline */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white leading-[0.9] select-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="block"
          >
            I BUILD
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent"
          >
            SYSTEMS
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="block"
          >
            FROM IDEAS.
          </motion.div>
        </h1>

        {/* Subtitle Rotator */}
        <div className="h-8 flex items-center font-mono text-lg md:text-2xl text-zinc-400 select-none">
          <span className="text-zinc-600 mr-2.5">&gt;</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={subIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="text-white font-semibold tracking-wide"
            >
              {SUBHEADINGS[subIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* CTA Button Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="flex flex-wrap gap-4 w-full"
        >
          <button
            onClick={() => handleScrollTo("missions")}
            className="px-6 py-3.5 bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary rounded-xl text-xs font-mono font-bold tracking-widest text-white uppercase shadow-[0_0_25px_rgba(124,58,237,0.15)] transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center gap-2 group"
            data-cursor="OPEN"
          >
            <span>View Missions</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <a
            href="https://github.com/Sikander-18"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-zinc-900/60 border border-zinc-800 hover:border-accent hover:bg-zinc-900 rounded-xl text-xs font-mono font-bold tracking-widest text-zinc-300 hover:text-white uppercase transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center gap-2"
            data-cursor="BUILD"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-zinc-900/60 border border-zinc-800 hover:border-accent hover:bg-zinc-900 rounded-xl text-xs font-mono font-bold tracking-widest text-zinc-300 hover:text-white uppercase transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center gap-2"
            data-cursor="READ"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </a>

          <button
            onClick={() => handleScrollTo("contact")}
            className="px-6 py-3.5 bg-zinc-900/60 border border-zinc-800 hover:border-accent hover:bg-zinc-900 rounded-xl text-xs font-mono font-bold tracking-widest text-zinc-300 hover:text-white uppercase transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center gap-2"
            data-cursor="CONNECT"
          >
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </button>
        </motion.div>
      </div>

      {/* Floating Explore indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ delay: 1, duration: 1 }}
        className="w-full flex justify-between items-center border-t border-zinc-900/50 pt-4 font-mono text-[10px] text-zinc-500 uppercase tracking-widest select-none"
      >
        <div>Based in Mumbai, India</div>
        <button
          onClick={() => handleScrollTo("origin")}
          className="flex items-center gap-2 group hover:text-accent transition-colors duration-300"
        >
          <span>Explore My Mind</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:text-accent" />
        </button>
      </motion.div>
    </section>
  );
}
