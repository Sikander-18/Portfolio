"use client";

import { motion } from "framer-motion";
import { Compass, BookOpen, Layers, Zap, RotateCw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface RelatedProject {
  name: string;
  action: string;
  href: string;
}

interface StageItem {
  phase: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  gradient: string;
  projects: RelatedProject[];
}

const STAGES: StageItem[] = [
  {
    phase: "Observe",
    title: "Identifying Constraints & Friction",
    desc: "Every build starts by observing where systems break. I track down computational bottlenecks, analyze user flow friction, and map structural demands before writing a single line of code.",
    icon: Compass,
    color: "#22D3EE",
    gradient: "from-cyan-400 to-blue-500",
    projects: [
      { name: "Heimdall", action: "Analyzing network volumetric spikes", href: "/mission" },
      { name: "SkipQ", action: "Studying checkout queue latency", href: "/mission" }
    ]
  },
  {
    phase: "Learn",
    title: "Acquiring Underlying Foundations",
    desc: "I dive deep into documentation, study relevant mathematical formulas, map data flow structures, and analyze dependency trees to conceptualize the optimal architecture.",
    icon: BookOpen,
    color: "#8B5CF6",
    gradient: "from-purple-400 to-indigo-500",
    projects: [
      { name: "Trust AI", action: "Studying semantic evaluation equations", href: "/mission" },
      { name: "VitalGuard", action: "Reviewing radiographic CNN classification models", href: "/mission" }
    ]
  },
  {
    phase: "Build",
    title: "Implementing Modular Systems",
    desc: "Execution phase. I translate conceptual models into structured code bases, engineer high-throughput APIs, design scalable database schemas, and containerize environments.",
    icon: Layers,
    color: "#EC4899",
    gradient: "from-pink-400 to-rose-500",
    projects: [
      { name: "EventSphere", action: "Designing transactional relational tables", href: "/mission" },
      { name: "VitalGuard", action: "Constructing async FastAPI microservices", href: "/mission" }
    ]
  },
  {
    phase: "Improve",
    title: "Profiling & Eliminating Latency",
    desc: "Writing code is only half the battle. I profile memory footprints, debug latency bottlenecks, tune hyperparameters, and optimize queries to push systems to maximum efficiency.",
    icon: Zap,
    color: "#10B981",
    gradient: "from-emerald-400 to-teal-500",
    projects: [
      { name: "EventSphere", action: "Optimizing websocket roundtrips to <200ms", href: "/mission" },
      { name: "Heimdall", action: "Tuning Random Forest decision bounds", href: "/mission" }
    ]
  },
  {
    phase: "Repeat",
    title: "Monitoring, Scaling & Iterating",
    desc: "Deployment is a beginning, not an end. I monitor metrics telemetry, gather execution logs, scale infrastructures, and restart the loop for the next modular system feature.",
    icon: RotateCw,
    color: "#F59E0B",
    gradient: "from-amber-400 to-orange-500",
    projects: [
      { name: "All Systems", action: "Monitoring live telemetry & planning updates", href: "/workspace" }
    ]
  }
];

export default function Mindset() {
  return (
    <section id="mindset" className="py-32 relative overflow-hidden bg-transparent">
      
      {/* Scroll-guided background GIF inspiration backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay select-none">
        <Image
          src="/animations/brain-cycle/Builder_mindset_cycle.gif"
          alt="Brain Cycle Backdrop"
          fill
          unoptimized
          className="object-cover"
        />
        {/* Soft fading overlays */}
        <div className="absolute inset-0 bg-[#ECEAFF]/40 dark:bg-[#0B081F]/40" />
      </div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24 w-full max-w-[1200px] relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-28 flex flex-col gap-4">
          <span className="font-mono text-[10px] text-primary-purple uppercase tracking-widest font-extrabold">
            Cognitive Loop
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-text-dark leading-tight tracking-tight">
            How My Brain Works
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-purple to-soft-pink mx-auto rounded-full mt-2" />
          <p className="text-muted-text text-sm md:text-base font-sans mt-4 leading-relaxed font-medium">
            Engineering is not a skills checklist—it is a continuous, iterative cycle of translating curiosity into running systems.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Central Line Indicator */}
          <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#8B5CF6]/5 to-[#8B5CF6]/30 via-white/10 to-[#8B5CF6]/5" />

          {/* Flow list */}
          <div className="flex flex-col gap-24">
            {STAGES.map((stage, idx) => {
              const StageIcon = stage.icon;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={stage.phase} 
                  className={`w-full flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Left/Right Narrative Card */}
                  <motion.div
                    initial={{ opacity: 0.2, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full md:w-[45%] flex flex-col justify-center pl-10 md:pl-0"
                  >
                    <div 
                      className={`relative rounded-[32px] glass-panel border border-white/45 p-6 md:p-8 shadow-xl transition-all duration-300 text-left`}
                      style={{
                        boxShadow: `0 8px 30px rgba(0, 0, 0, 0.015), inset 0 2px 4px rgba(255, 255, 255, 0.7), 0 0 0px 1px ${stage.color}10`
                      }}
                    >
                      {/* Aura Soft Glow */}
                      <div
                        className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-3xl opacity-[0.08] pointer-events-none"
                        style={{ backgroundColor: stage.color }}
                      />

                      {/* Header info */}
                      <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
                        <div 
                          className="w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-md"
                          style={{ background: `linear-gradient(135deg, ${stage.color} 0%, #7C3AED 100%)` }}
                        >
                          <StageIcon className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-mono text-[9px] uppercase tracking-widest font-extrabold opacity-60">
                            Phase 0{idx + 1}
                          </span>
                          <span className="font-display font-extrabold text-base md:text-lg text-text-dark tracking-tight leading-none">
                            {stage.phase}
                          </span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h4 className="font-display font-bold text-sm md:text-base text-text-dark mb-2 leading-snug">
                        {stage.title}
                      </h4>
                      <p className="text-muted-text text-xs leading-relaxed font-sans font-medium mb-4">
                        {stage.desc}
                      </p>

                      {/* Associated Case Studies */}
                      <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                        <span className="font-mono text-[8px] uppercase tracking-widest font-extrabold opacity-60">
                          Philosophy In Action:
                        </span>
                        <div className="flex flex-col gap-2.5">
                          {stage.projects.map((proj) => (
                            <Link 
                              key={proj.name} 
                              href={proj.href}
                              className="group/proj flex flex-col text-left pointer-events-auto hover:translate-x-1 transition-transform duration-200"
                            >
                              <div className="flex items-baseline gap-1.5">
                                <span className="font-mono text-[9px] font-bold text-primary-purple group-hover/proj:underline">
                                  {proj.name}
                                </span>
                                <span className="text-[10px] text-muted-text leading-tight font-sans font-medium">
                                  — {proj.action}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                    </div>
                  </motion.div>

                  {/* Central Timeline Dot Indicator */}
                  <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center z-20 pointer-events-none mt-10">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0.3 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-120px" }}
                      transition={{ type: "spring", stiffness: 150, damping: 12 }}
                      className="w-3.5 h-3.5 rounded-full border-2 border-white shadow-md transition-all duration-300"
                      style={{ 
                        backgroundColor: stage.color,
                        boxShadow: `0 0 16px ${stage.color}`
                      }}
                    />
                  </div>

                  {/* Empty Spacer Column for layout bounds */}
                  <div className="hidden md:block w-[45%]" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
