"use client";

import { motion } from "framer-motion";
import { Sparkles, Calendar, BookOpen, PenTool, Terminal } from "lucide-react";

interface Chapter {
  num: string;
  period: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: any;
  color: string;
}

const CHAPTERS: Chapter[] = [
  {
    num: "01",
    period: "2004 — 2018",
    title: "Curiosity & Construction",
    subtitle: "Observing physical mechanisms",
    desc: "My interface with the world started with a physical question: How does this work? Growing up, I was obsessed with taking things apart—dismantling toys, studying structural physics, and assembling model kits. This early curiosity laid the foundation for seeing the world not as static objects, but as dynamic, interlocking systems.",
    icon: PenTool,
    color: "#22D3EE" // Cyan
  },
  {
    num: "02",
    period: "2018 — 2022",
    title: "The Language of Systems",
    subtitle: "Acquiring mathematical bedrocks",
    desc: "As I entered Computer Science, I realized code is only the execution layer. Mathematics is the underlying grammar of systems. Diving into linear algebra, multidimensional calculus, optimization formulas, and probability distributions gave me the analytical vocabulary to model complex realities.",
    icon: BookOpen,
    color: "#8B5CF6" // Purple
  },
  {
    num: "03",
    period: "2022 — Present",
    title: "Production Architectures",
    subtitle: "Translating ideas into codebases",
    desc: "Today, I translate abstract mathematical models and database constraints into high-throughput systems. Whether profiling memory layouts for event brokers, fine-tuning computer vision classifiers, or orchestrating Docker deployments, building is my mechanism for transforming curiosity into functional infrastructure.",
    icon: Terminal,
    color: "#EC4899" // Soft Pink
  }
];

export default function PersonalJourney() {
  return (
    <section className="py-28 relative overflow-hidden bg-transparent">
      {/* Background aurora blurs */}
      <div className="absolute top-[10%] left-[-15%] w-[450px] h-[450px] bg-electric-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[450px] h-[450px] bg-soft-pink/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-8 md:px-16 lg:px-24 w-full max-w-[1200px] relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 flex flex-col gap-4">
          <span className="font-mono text-[10px] text-primary-purple uppercase tracking-widest font-extrabold flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            Biography
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-text-dark leading-[1.1] tracking-tight uppercase">
            My Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-purple to-soft-pink mx-auto rounded-full mt-4" />
          <p className="text-muted-text text-sm md:text-base font-sans mt-6 leading-relaxed max-w-xl mx-auto font-medium">
            How a childhood obsession with physical mechanisms evolved into engineering scalable, math-driven digital architectures.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Central Vertical Connector Line */}
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-primary-purple/10 via-soft-pink/15 to-electric-cyan/10" />

          {/* Chapters List */}
          <div className="flex flex-col gap-28 w-full">
            {CHAPTERS.map((chap, idx) => {
              const Icon = chap.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={chap.num}
                  className={`w-full flex flex-col md:flex-row items-stretch justify-between relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Icon (Static positioning) */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 w-12 h-12 rounded-2xl flex items-center justify-center z-20 pointer-events-none bg-background-primary border border-white/40 shadow-md">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                      style={{ background: `linear-gradient(135deg, ${chap.color} 0%, #7C3AED 100%)` }}
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  {/* Left/Right Narrative Card Container */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full md:w-[44%] pl-16 md:pl-0"
                  >
                    <div
                      className="p-8 rounded-[32px] glass-panel border border-white/45 shadow-xl text-left relative overflow-hidden transition-all duration-300 hover:scale-[1.01]"
                      style={{
                        boxShadow: `0 10px 30px rgba(0, 0, 0, 0.015), inset 0 2px 4px rgba(255, 255, 255, 0.7), 0 0 0px 1px ${chap.color}10`
                      }}
                    >
                      {/* Aura Corner Glow */}
                      <div
                        className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-2xl opacity-[0.08] pointer-events-none"
                        style={{ backgroundColor: chap.color }}
                      />

                      {/* Giant background index number */}
                      <span className="absolute -bottom-8 -right-4 font-display font-black text-8xl md:text-9xl text-text-dark/5 select-none pointer-events-none">
                        {chap.num}
                      </span>

                      {/* Header details */}
                      <div className="flex flex-col gap-1 border-b border-white/10 pb-4 mb-4 z-10 relative">
                        <div className="flex items-center gap-2 text-primary-purple">
                          <Calendar className="w-3.5 h-3.5" />
                          <span className="font-mono text-[9px] font-bold uppercase tracking-wider">{chap.period}</span>
                        </div>
                        <h3 className="font-display font-extrabold text-xl md:text-2xl text-text-dark tracking-tight mt-1">
                          {chap.title}
                        </h3>
                        <span className="font-mono text-[8px] uppercase tracking-widest text-muted-text font-bold mt-0.5">
                          {chap.subtitle}
                        </span>
                      </div>

                      {/* Description Narrative */}
                      <p className="text-muted-text text-xs md:text-sm leading-relaxed font-sans font-medium z-10 relative">
                        {chap.desc}
                      </p>

                    </div>
                  </motion.div>

                  {/* Empty Spacer Column for layout bounds */}
                  <div className="hidden md:block w-[44%]" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
