"use client";

import { useState } from "react";
import { Eye, BookOpen, Cpu, Settings, RotateCw } from "lucide-react";
import { clsx } from "clsx";

interface Stage {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  description: string;
  example: string;
}

const STAGES: Stage[] = [
  {
    name: "Observe",
    icon: Eye,
    tagline: "Pinpointing real-world bottlenecks.",
    description: "I study complex systems and fragmented workflows to identify points of failure. Whether it's data exposure in cloud document search or vital health signal lags, it begins by studying the gaps.",
    example: "Observation: Patients lack automated emergency lines when clinical metrics cross critical limits (VitalGuard)."
  },
  {
    name: "Learn",
    icon: BookOpen,
    tagline: "Deconstructing mathematics and tools.",
    description: "Every solution requires a deep understanding of core theory. I research mathematical models, database schemas, local vector embeddings, and multi-agent reasoning graphs before writing a single line of code.",
    example: "Learning: Researching ChromaDB dimensions and Mistral-7B token parameters for completely offline document Q&A."
  },
  {
    name: "Build",
    icon: Cpu,
    tagline: "Coding production-ready systems.",
    description: "I translate blueprints into modular, scalable software architectures. From building FastAPI microservices to React dashboards and MongoDB schemas, I program with speed, structure, and readability.",
    example: "Building: Engineering Node.js REST APIs with cryptographic QR code validation logic for instant ticket checks (EventSphere)."
  },
  {
    name: "Improve",
    icon: Settings,
    tagline: "Profiling, refactoring, and optimizing.",
    description: "A system isn't complete when it works; it's complete when it works optimally. I refactor code paths, self-host models to cut token fees, and secure endpoints to guarantee zero latency and complete privacy.",
    example: "Improvement: Moving report analysis to asynchronous parsing pipelines to process multi-format medical metrics (Rx-Plain)."
  },
  {
    name: "Repeat",
    icon: RotateCw,
    tagline: "Iterating on real feedback loops.",
    description: "Systems must evolve. I deploy functional prototypes under hackathon speed pressures, evaluate metrics against user behavior, and continuously cycle back to observation to refine the product.",
    example: "Iteration: Refining queue routing algorithms in response to clinic flow feedback in active prototypes (SkipQ)."
  }
];

export default function Mindset() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="relative min-h-screen w-full flex items-center py-20 px-6 md:px-12 bg-transparent z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-12 md:gap-16">
        
        {/* Title */}
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-primary uppercase tracking-widest block">
            {"// Operational Philosophy"}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight select-none">
            HOW MY BRAIN WORKS.
          </h2>
        </div>

        {/* Mindset Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Columns: Dynamic Ring Interface */}
          <div className="lg:col-span-5 flex justify-center items-center relative h-[300px] md:h-[400px]">
            {/* Ambient background glow */}
            <div className="absolute w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />

            {/* Loop Outer Ring */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-zinc-900 flex items-center justify-center animate-[spin_60s_linear_infinite]">
              {/* Internal SVG connector lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <circle cx="50%" cy="50%" r="40%" fill="none" stroke="url(#cyan-purple)" strokeWidth="1.5" strokeDasharray="6,4" />
                <defs>
                  <linearGradient id="cyan-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Ring Stages Nodes (Placed absolutely relative to container, bypassing CSS spin to keep text straight!) */}
            {STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              // Compute angles for 5 items (360 / 5 = 72 degrees)
              const angle = (idx * 72 * Math.PI) / 180 - Math.PI / 2;
              const radius = 120; // Radius in pixels (responsive adjust)
              
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              const isActive = activeStage === idx;

              return (
                <button
                  key={stage.name}
                  onMouseEnter={() => setActiveStage(idx)}
                  onClick={() => setActiveStage(idx)}
                  style={{
                    transform: `translate3d(${x}px, ${y}px, 0)`,
                  }}
                  className={clsx(
                    "absolute w-12 h-12 md:w-16 md:h-16 rounded-full flex flex-col items-center justify-center border transition-all duration-500 pointer-events-auto select-none",
                    isActive
                      ? "border-accent bg-accent/20 text-white shadow-[0_0_20px_rgba(34,211,238,0.3)] scale-110"
                      : "border-zinc-800 bg-zinc-950/80 text-zinc-500 hover:border-primary hover:text-zinc-300"
                  )}
                  data-cursor="OPEN"
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-[7px] md:text-[9px] font-mono font-bold tracking-widest uppercase mt-1">
                    {stage.name}
                  </span>
                </button>
              );
            })}

            {/* Central Node Indicator */}
            <div className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full border border-zinc-800 bg-zinc-950 flex flex-col justify-center items-center text-center font-mono">
              <span className="text-[8px] text-zinc-500 uppercase tracking-widest leading-none">Status</span>
              <span className="text-xs text-accent font-bold mt-1 uppercase tracking-wider animate-pulse">
                Loop active
              </span>
            </div>
          </div>

          {/* Right Columns: Console Panel Displays Stage Details */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="relative p-6 md:p-8 rounded-2xl border border-zinc-900 bg-zinc-950/60 backdrop-blur-md overflow-hidden min-h-[280px] flex flex-col justify-between">
              
              {/* Code window control details */}
              <div className="flex justify-between items-center border-b border-zinc-900 pb-4 mb-4 select-none">
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-zinc-500">
                  <span className="w-2 h-2 rounded-full bg-red-500/20 border border-red-500/40" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                  <span className="w-2 h-2 rounded-full bg-green-500/20 border border-green-500/40" />
                  <span className="ml-1.5">{"MINDSET_RUNNER.SH // PHASE_0"}{activeStage + 1}</span>
                </div>
                <div className="font-mono text-[9px] text-zinc-600">60 FPS</div>
              </div>

              {/* Dynamic Content display */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {(() => {
                      const Icon = STAGES[activeStage].icon;
                      return <Icon className="w-5 h-5 text-primary" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="font-display text-lg md:text-xl font-bold text-white leading-none">
                      Stage {activeStage + 1}: {STAGES[activeStage].name}
                    </h3>
                    <p className="font-mono text-[10px] text-accent mt-1 leading-none">
                      {STAGES[activeStage].tagline}
                    </p>
                  </div>
                </div>

                <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                  {STAGES[activeStage].description}
                </p>
              </div>

              {/* Project Trace Example */}
              <div className="mt-6 border-t border-zinc-900/60 pt-4">
                <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest select-none">
                  {"// Example Execution"}
                </div>
                <div className="font-mono text-[11px] text-zinc-300 bg-zinc-950 border border-zinc-900 rounded p-2.5 mt-1.5 leading-relaxed">
                  {STAGES[activeStage].example}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
