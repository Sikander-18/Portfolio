"use client";

import { motion } from "framer-motion";
import { Sigma, Code2, BrainCircuit } from "lucide-react";
import Image from "next/image";

const CARD_DATA = [
  {
    title: "Mathematics",
    description: "The Bedrock of Logic",
    narrative: "Mathematics taught me how to think. It provides the core frameworks for optimization, linear structures, and vector math that power machine learning models.",
    icon: Sigma,
    color: "#22D3EE", // Cyan
    gif: "/animations/mathematics/mathematicssection.gif"
  },
  {
    title: "Programming",
    description: "Structure & Implementation",
    narrative: "Programming taught me how to build. It bridges conceptual logic with execution, letting me formulate software architecture, write APIs, and model systems.",
    icon: Code2,
    color: "#8B5CF6", // Purple
    gif: null // Standard interactive card
  },
  {
    title: "Artificial Intelligence",
    description: "Systems that Learn",
    narrative: "AI taught me how to combine both. It connects mathematical modeling with engineering code to construct systems that learn from data and automate complex tasks.",
    icon: BrainCircuit,
    color: "#EC4899", // Pink
    gif: null // Standard interactive card
  }
];

export default function OriginStory() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      
      {/* Visual Ambient Element */}
      <div className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] bg-electric-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-8 md:px-16 lg:px-24 w-full max-w-[1200px] relative z-10">
        
        {/* Title Details */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
          <span className="font-mono text-[10px] text-primary-purple uppercase tracking-widest font-bold">
            Origin Story
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-text-dark leading-tight tracking-tight">
            Everything Starts With a Question
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-purple to-soft-pink mx-auto rounded-full mt-2" />
          <p className="text-muted-text text-sm md:text-base font-sans mt-4 leading-relaxed">
            I am a Computer Science student specializing in Artificial Intelligence and Machine Learning. I leverage software engineering and mathematical optimization to convert raw curiosity into high-performance, real-world systems.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARD_DATA.map((card, idx) => {
            const Icon = card.icon;
            
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="rounded-[28px] glass-panel p-6 flex flex-col gap-5 border border-white/40 relative overflow-hidden group shadow-lg transition-all duration-300 hover:scale-[1.01]"
              >
                {/* Background Glow */}
                <div 
                  className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-10 pointer-events-none"
                  style={{ backgroundColor: card.color }}
                />

                {/* Optional embedded animation gif */}
                {card.gif && (
                  <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06] group-hover:opacity-10 transition-opacity duration-300">
                    <Image
                      src={card.gif}
                      alt="Animated equations"
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Card Icon Header */}
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md z-10"
                  style={{ background: `linear-gradient(135deg, ${card.color} 0%, #7C3AED 100%)` }}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-2 z-10 text-left">
                  <h3 className="font-display font-extrabold text-lg text-text-dark">
                    {card.title}
                  </h3>
                  <span className="font-mono text-[10px] text-muted-text uppercase tracking-wider">
                    {card.description}
                  </span>
                  <p className="text-muted-text text-xs md:text-sm leading-relaxed mt-2">
                    {card.narrative}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
