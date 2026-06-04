"use client";

import { motion } from "framer-motion";

interface FormulaProps {
  equation: string;
  top: string;
  left: string;
  duration: string;
  delay: string;
  opacity: number;
}

function FloatingFormula({ equation, top, left, duration, delay, opacity }: FormulaProps) {
  return (
    <div
      className="drift-item font-mono text-zinc-700/40 pointer-events-none select-none text-[10px] md:text-sm select-none"
      style={{
        top,
        left,
        opacity,
        "--drift-duration": duration,
        "--drift-delay": delay,
      } as React.CSSProperties}
    >
      {equation}
    </div>
  );
}

export default function Mathematics() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center py-20 px-6 md:px-12 bg-transparent z-10 overflow-hidden">
      
      {/* Floating Equations Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <FloatingFormula 
          equation="e^(i*π) + 1 = 0" 
          top="15%" 
          left="10%" 
          duration="18s" 
          delay="0s" 
          opacity={0.35} 
        />
        <FloatingFormula 
          equation="a² + b² = c²" 
          top="25%" 
          left="75%" 
          duration="14s" 
          delay="-3s" 
          opacity={0.25} 
        />
        <FloatingFormula 
          equation="f(x) = 1 / (1 + e^(-x))" 
          top="70%" 
          left="8%" 
          duration="22s" 
          delay="-5s" 
          opacity={0.35} 
        />
        <FloatingFormula 
          equation="∇L(θ) = E[∇log P(x|θ)]" 
          top="80%" 
          left="70%" 
          duration="25s" 
          delay="-2s" 
          opacity={0.3} 
        />
        <FloatingFormula 
          equation="∫ e^(-x²) dx = √π" 
          top="45%" 
          left="82%" 
          duration="20s" 
          delay="-8s" 
          opacity={0.2} 
        />
        <FloatingFormula 
          equation="f'(x) = lim[h→0] (f(x+h)-f(x))/h" 
          top="65%" 
          left="50%" 
          duration="16s" 
          delay="-11s" 
          opacity={0.2} 
        />
        <FloatingFormula 
          equation="W^(t+1) = W^(t) - η*∇L" 
          top="12%" 
          left="48%" 
          duration="24s" 
          delay="-4s" 
          opacity={0.3} 
        />
      </div>

      {/* Main Quote Block */}
      <div className="max-w-4xl mx-auto w-full text-center relative z-10 select-none">
        
        {/* Category tag */}
        <div className="flex justify-center mb-6">
          <span className="font-mono text-xs text-primary uppercase tracking-widest block px-3 py-1 bg-zinc-950/60 border border-zinc-900 rounded-full">
            {"// Core Logic"}
          </span>
        </div>

        {/* Display Quote */}
        <div className="flex flex-col gap-6 md:gap-10 font-display text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-center items-center gap-2"
          >
            <span className="text-zinc-600 font-mono text-sm md:text-xl font-normal">[01]</span>
            <span>Mathematics taught me how to</span>
            <span className="text-accent underline decoration-accent/30 underline-offset-4">think.</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row justify-center items-center gap-2"
          >
            <span className="text-zinc-600 font-mono text-sm md:text-xl font-normal">[02]</span>
            <span>Programming taught me how to</span>
            <span className="text-primary underline decoration-primary/30 underline-offset-4">build.</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-center items-center gap-2"
          >
            <span className="text-zinc-600 font-mono text-sm md:text-xl font-normal">[03]</span>
            <span>Artificial Intelligence taught me how to</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-black">combine both.</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
