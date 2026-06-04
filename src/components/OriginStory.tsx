"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface QuestionNodeProps {
  text: string;
  xDir: number;
  yDir: number;
  scrollYProgress: MotionValue<number>;
  className?: string;
}

function QuestionNode({ text, xDir, yDir, scrollYProgress, className }: QuestionNodeProps) {
  // Drift outward on scroll
  const x = useTransform(scrollYProgress, [0, 0.8], [0, xDir * 200]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, yDir * 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [1, 0.6, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.75]);

  return (
    <motion.div
      style={{ x, y, opacity, scale }}
      className={`absolute px-4 py-2 bg-zinc-900/60 border border-zinc-800 rounded-full font-mono text-[10px] md:text-xs text-zinc-400 select-none shadow-[0_4px_12px_rgba(0,0,0,0.5)] ${className}`}
    >
      {text}
    </motion.div>
  );
}

export default function OriginStory() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  // Track scroll position inside this component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transforms for answers revealing in the center
  const centerScale = useTransform(scrollYProgress, [0.2, 0.6], [0.8, 1]);
  const centerOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const lineY = useTransform(scrollYProgress, [0.1, 0.6], [50, 0]);

  // Story text reveal transitions
  const storyReveal1 = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);
  const storyReveal2 = useTransform(scrollYProgress, [0.35, 0.6], [0, 1]);
  const storyReveal3 = useTransform(scrollYProgress, [0.5, 0.75], [0, 1]);

  return (
    <section
      id="origin"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center py-20 px-6 md:px-12 bg-transparent z-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Floating Questions Visual Canvas */}
        <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl border border-zinc-900 bg-zinc-950/20 backdrop-blur-sm overflow-hidden flex items-center justify-center">
          
          {/* Drifting Question Bubbles */}
          <QuestionNode 
            text="How can AI help patients in real-time?" 
            xDir={-1} 
            yDir={-1} 
            scrollYProgress={scrollYProgress}
            className="top-12 left-6"
          />
          <QuestionNode 
            text="Can we run LLMs fully offline?" 
            xDir={1} 
            yDir={-0.8} 
            scrollYProgress={scrollYProgress}
            className="top-24 right-10"
          />
          <QuestionNode 
            text="Why not automate medical reports?" 
            xDir={-1.2} 
            yDir={0.5} 
            scrollYProgress={scrollYProgress}
            className="bottom-24 left-10"
          />
          <QuestionNode 
            text="How do we cryptographically verify tickets?" 
            xDir={1.1} 
            yDir={0.9} 
            scrollYProgress={scrollYProgress}
            className="bottom-16 right-4"
          />
          <QuestionNode 
            text="What happens if vitals cross critical limits?" 
            xDir={0} 
            yDir={-1.3} 
            scrollYProgress={scrollYProgress}
            className="top-40 left-1/3"
          />
          <QuestionNode 
            text="Is queue telemetry possible locally?" 
            xDir={-0.9} 
            yDir={1.1} 
            scrollYProgress={scrollYProgress}
            className="bottom-12 left-1/4"
          />

          {/* Central System Node (Reveals on Scroll) */}
          <motion.div 
            style={{ scale: centerScale, opacity: centerOpacity, y: lineY }}
            className="flex flex-col items-center justify-center text-center p-6"
          >
            <div className="relative p-5 rounded-2xl bg-zinc-900 border border-accent/30 shadow-[0_0_30px_rgba(34,211,238,0.05)] w-48 font-mono">
              <span className="text-[10px] text-accent uppercase tracking-widest block mb-1">{"// System Node"}</span>
              <span className="text-sm text-white font-bold block">INTELLIGENT SYSTEMS</span>
              
              {/* Core branches */}
              <div className="absolute top-1/2 -left-8 w-8 h-[1px] bg-zinc-800" />
              <div className="absolute top-1/2 -right-8 w-8 h-[1px] bg-zinc-800" />
            </div>
            
            <p className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider mt-4">
              Connecting dots, solving complexity
            </p>
          </motion.div>
        </div>

        {/* Right Side: Origin Story Text */}
        <div className="flex flex-col gap-6 md:gap-8 justify-center">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-primary uppercase tracking-widest block">
              {"// Origin Story"}
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-none select-none">
              EVERYTHING STARTS WITH A QUESTION.
            </h2>
          </div>

          <div className="flex flex-col gap-6 font-sans text-base md:text-lg text-zinc-400 leading-relaxed max-w-xl">
            <motion.p style={{ opacity: storyReveal1 }}>
              I am <strong className="text-white font-semibold">Sikander Prajapati</strong>, a Computer Science student specializing in Artificial Intelligence and Machine Learning. I do not just study systems; I build them.
            </motion.p>

            <motion.p style={{ opacity: storyReveal2 }}>
              I enjoy transforming complex, real-world problems into clean, high-performance software systems. By merging deterministic engineering logic with the predictive power of AI, I construct tools that deliver measurable utility.
            </motion.p>

            <motion.p style={{ opacity: storyReveal3 }}>
              For me, every project begins with a spark of curiosity — a question. That question evolves into mathematical modeling, then into code, and finally emerges as a functional, scalable system.
            </motion.p>
          </div>
        </div>

      </div>
    </section>
  );
}
