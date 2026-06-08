"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HelpCircle, ArrowDown, ExternalLink } from "lucide-react";

interface StoryItem {
  question: string;
  projectName: string;
  projectCategory: string;
  projectDesc: string;
  tech: string[];
  color: string;
  href: string;
}

const STORY_ITEMS: StoryItem[] = [
  {
    question: "Why does healthcare guidance feel confusing?",
    projectName: "VitalGuard",
    projectCategory: "Healthcare + AI",
    projectDesc: "Engineered an AI thoracic classification web platform utilizing fine-tuned Convolutional Neural Networks (CNNs) to analyze radiographic images and highlight diagnostic zones in under 1.5 seconds.",
    tech: ["PyTorch", "FastAPI", "React", "Docker"],
    color: "#22D3EE", // Cyan
    href: "/mission"
  },
  {
    question: "Why is event management fragmented?",
    projectName: "EventSphere",
    projectCategory: "Event Management Ecosystem",
    projectDesc: "Constructed a transactional event booking system with real-time telemetry dashboard, secure QR check-in checkpoints, and automated checkout processes.",
    tech: ["Next.js", "Node.js", "Express", "SQL"],
    color: "#8B5CF6", // Purple
    href: "/mission"
  },
  {
    question: "How can AI become trustworthy?",
    projectName: "Trust AI",
    projectCategory: "AI Verification Platform",
    projectDesc: "Developing checking systems to evaluate semantic distance, hallucination ratios, and confidence thresholds for custom LLM deployments.",
    tech: ["Next.js", "Python", "OpenAI API", "Docker"],
    color: "#F59E0B", // Gold/Amber
    href: "/mission"
  },
  {
    question: "How can systems become more intelligent?",
    projectName: "Heimdall",
    projectCategory: "Cybersecurity monitoring",
    projectDesc: "Researching light machine-learning anomaly detection algorithms to monitor local packet headers and flag anomalous volumetric socket actions.",
    tech: ["Python", "Scikit-Learn", "Linux Shell", "Git"],
    color: "#EC4899", // Pink
    href: "/mission"
  }
];

export default function OriginStory() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent">
      
      {/* Background Soft Blurs */}
      <div className="absolute top-[10%] left-[-15%] w-[450px] h-[450px] bg-electric-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[50%] right-[-15%] w-[450px] h-[450px] bg-soft-pink/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-primary-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-8 md:px-16 lg:px-24 w-full max-w-[1200px] relative z-10">
        
        {/* Cinematic Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 flex flex-col gap-4">
          <span className="font-mono text-[10px] text-primary-purple uppercase tracking-widest font-extrabold flex items-center justify-center gap-2">
            <HelpCircle className="w-3.5 h-3.5" />
            Origin Story
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-text-dark leading-[1.1] tracking-tight">
            EVERY PROJECT <br />
            STARTS WITH A <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-purple via-soft-pink to-electric-cyan animate-pulse">
              QUESTION.
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-purple to-soft-pink mx-auto rounded-full mt-4" />
          <p className="text-muted-text text-sm md:text-base font-sans mt-6 leading-relaxed max-w-xl mx-auto font-medium">
            Curiosity is the catalyst. Below is the trace of how specific system constraints and research questions evolved into fully functional codebases.
          </p>
        </div>

        {/* Vertical Journey Flow */}
        <div className="flex flex-col items-center">
          {STORY_ITEMS.map((item, idx) => {
            const isLast = idx === STORY_ITEMS.length - 1;

            return (
              <div key={item.projectName} className="w-full flex flex-col items-center">
                
                {/* 1. Large Typography Question */}
                <motion.div
                  initial={{ opacity: 0.15, y: 20, filter: "blur(2px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-center max-w-2xl px-4"
                >
                  <p className="font-mono text-[9px] text-muted-text uppercase tracking-widest font-extrabold mb-2">
                    Question 0{idx + 1}
                  </p>
                  <h3 className="font-display font-extrabold text-2xl md:text-4xl text-text-dark leading-tight tracking-tight select-none">
                    "{item.question}"
                  </h3>
                </motion.div>

                {/* 2. Visual Connector Line Down to Project Card */}
                <div className="h-20 w-full flex items-center justify-center relative my-4">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-[1.5px] h-full origin-top"
                    style={{
                      background: `linear-gradient(to bottom, #8B5CF6 0%, ${item.color} 100%)`
                    }}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="absolute bottom-0 p-0.5 rounded-full"
                    style={{ backgroundColor: `${item.color}20`, border: `1px solid ${item.color}40` }}
                  >
                    <ArrowDown className="w-3 h-3" style={{ color: item.color }} />
                  </motion.div>
                </div>

                {/* 3. System Project Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ type: "spring", stiffness: 90, damping: 15, delay: 0.15 }}
                  className="max-w-[520px] w-full px-4"
                >
                  <Link href={item.href} className="block group pointer-events-auto">
                    <div 
                      className="relative rounded-[32px] glass-panel border border-white/45 p-6 md:p-8 shadow-xl transition-all duration-300 hover:scale-[1.01] hover:bg-white/25 hover:shadow-2xl overflow-hidden text-left"
                      style={{
                        boxShadow: `0 8px 30px rgba(0, 0, 0, 0.02), inset 0 2px 4px rgba(255, 255, 255, 0.7), 0 0 0px 1px ${item.color}15`
                      }}
                      data-cursor="BUILD"
                    >
                      {/* Aura Corner Glow */}
                      <div
                        className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-2xl opacity-15 transition-opacity duration-300 group-hover:opacity-25 pointer-events-none"
                        style={{ backgroundColor: item.color }}
                      />

                      <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                          <div className="flex flex-col">
                            <span className="font-mono text-[8px] uppercase tracking-widest font-extrabold opacity-60">
                              System Realization
                            </span>
                            <h4 className="font-display font-extrabold text-xl md:text-2xl text-text-dark tracking-tight mt-0.5">
                              {item.projectName}
                            </h4>
                          </div>
                          <span className="font-mono text-[9px] text-muted-text px-2 py-1 bg-white/40 border border-white/50 rounded-lg shadow-sm">
                            {item.projectCategory}
                          </span>
                        </div>

                        <p className="text-muted-text text-xs md:text-sm leading-relaxed font-sans font-medium">
                          {item.projectDesc}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-2">
                          {item.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 rounded-lg bg-white/30 border border-white/40 text-[9px] font-mono text-text-dark/80 font-bold"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-primary-purple mt-3 border-t border-white/10 pt-4 group-hover:underline">
                          <span>Inspect Classified Mission Archive</span>
                          <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>

                    </div>
                  </Link>
                </motion.div>

                {/* 4. Spacer line to next section (if not last) */}
                {!isLast && (
                  <div className="h-24 w-full flex items-center justify-center my-2">
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="w-[1.5px] h-full origin-top bg-gradient-to-b from-transparent via-[#8B5CF6]/25 to-transparent"
                    />
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
