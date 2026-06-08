"use client";

import { motion } from "framer-motion";
import { Star, GitFork, BookMarked, Activity, Terminal, Cpu, CheckCircle2, Code, Sparkles, Clock } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Repo {
  name: string;
  desc: string;
  lang: string;
  langColor: string;
  stars: number;
  forks: number;
  url: string;
}

const FEATURED_REPOS: Repo[] = [
  {
    name: "vitalguard-core",
    desc: "AI-based medical image diagnostic core. Fine-tuned PyTorch CNN models optimized with TensorRT pipeline.",
    lang: "Python",
    langColor: "#3572A5",
    stars: 18,
    forks: 4,
    url: "https://github.com/Sikander-18"
  },
  {
    name: "eventsphere-api",
    desc: "Event ticket ledger broker backend. Asynchronous middleware engine handling booking checkout pipelines.",
    lang: "TypeScript",
    langColor: "#3178C6",
    stars: 12,
    forks: 2,
    url: "https://github.com/Sikander-18"
  }
];

interface TechRatio {
  name: string;
  percent: number;
  color: string;
  desc: string;
}

const TECH_RATIOS: TechRatio[] = [
  { name: "Python (AI / Core Models)", percent: 45, color: "#8B5CF6", desc: "PyTorch, TensorRT, FastAPI" },
  { name: "TypeScript / JS (API & UX)", percent: 30, color: "#22D3EE", desc: "Next.js, Node.js, WebSockets" },
  { name: "SQL (Database Optimization)", percent: 15, color: "#EC4899", desc: "PostgreSQL, Query Tuning" },
  { name: "Java (Core Structures)", percent: 10, color: "#F59E0B", desc: "Algorithms, Data Processing" }
];

interface LogEvent {
  time: string;
  type: "PUSH" | "BUILD" | "SUCCESS" | "TRAIN";
  text: string;
}

const ACTIVITY_LOGS: LogEvent[] = [
  { time: "11:05", type: "TRAIN", text: "Initialized Heimdall RF training iteration" },
  { time: "10:24", type: "SUCCESS", text: "Compilation success: EventSphere v2.1-stable" },
  { time: "10:18", type: "BUILD", text: "Building EventSphere WebSocket connection gates..." },
  { time: "09:42", type: "PUSH", text: "git push origin main (vitalguard-core)" },
  { time: "09:15", type: "BUILD", text: "Run docker compose regression validation suite" }
];

export default function DigitalWorkshop() {
  return (
    <div className="flex flex-col gap-6">
      <span className="font-mono text-[9px] text-muted-text uppercase tracking-widest pl-2 mb-1 text-left block">
        Builder's Workshop Telemetry
      </span>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Panel: Active Engineering Logs, Build Terminals & Repos */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          {/* Active Operations Header */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Latest Build Terminal Card */}
              <div className="p-5 rounded-2xl glass-panel border border-white/40 flex flex-col justify-between gap-4 text-left shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-emerald-500/5 blur-2xl pointer-events-none" />
                
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-emerald-500" />
                      <span className="font-display font-extrabold text-sm text-text-dark">
                        Latest Shipped Build
                      </span>
                    </div>
                    <span className="px-2 py-0.5 font-mono text-[8px] font-bold rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      SUCCESSFUL
                    </span>
                  </div>
                  <h4 className="font-mono text-[11px] font-bold text-text-dark mt-1">
                    EventSphere v2.1-stable
                  </h4>
                  <p className="text-muted-text text-xs leading-normal font-sans">
                    Optimized WebSocket check-in ticket ledger broker pipeline.
                  </p>
                </div>

                {/* Terminal Window Output */}
                <div className="p-3 rounded-lg bg-black/25 dark:bg-black/40 border border-white/5 font-mono text-[9px] text-text-dark/95 flex flex-col gap-1 leading-normal select-none">
                  <div className="flex justify-between border-b border-white/5 pb-1 mb-1 text-muted-text/80 text-[8px]">
                    <span>COMPILE LOGS // HASH: 7af99ce</span>
                    <span>184ms AVG</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="text-emerald-500">&gt;</span>
                    <span>WebSocket connection gateway established.</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="text-emerald-500">&gt;</span>
                    <span>Benchmarking: sub-200ms transaction cycle.</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="text-emerald-500">&gt;</span>
                    <span>Memory allocations garbage collected.</span>
                  </div>
                </div>
              </div>

              {/* Current Experiment Card */}
              <div className="p-5 rounded-2xl glass-panel border border-white/40 flex flex-col justify-between gap-4 text-left shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-amber-500/5 blur-2xl pointer-events-none" />
                
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-amber-500" />
                      <span className="font-display font-extrabold text-sm text-text-dark">
                        Live Sandbox Run
                      </span>
                    </div>
                    <span className="px-2 py-0.5 font-mono text-[8px] font-bold rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 animate-pulse">
                      TRAINING
                    </span>
                  </div>
                  <h4 className="font-mono text-[11px] font-bold text-text-dark mt-1">
                    Heimdall Anomaly Model
                  </h4>
                  <p className="text-muted-text text-xs leading-normal font-sans">
                    Random Forest parameter tuning for automated network log classification.
                  </p>
                </div>

                {/* Model Training Telemetry */}
                <div className="p-3 rounded-lg bg-black/25 dark:bg-black/40 border border-white/5 font-mono text-[9px] text-text-dark/95 flex flex-col gap-1 leading-normal select-none">
                  <div className="flex justify-between border-b border-white/5 pb-1 mb-1 text-muted-text/80 text-[8px]">
                    <span>ML telemetry // loss: 0.0124</span>
                    <span>epoch 480/500</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Train Dataset Size:</span>
                    <span className="text-amber-500">1.2M rows</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>F1-Score Precision:</span>
                    <span className="text-emerald-500">98.4%</span>
                  </div>
                  {/* Progress Line */}
                  <div className="w-full bg-white/5 border border-white/10 rounded-sm h-1 mt-1 overflow-hidden">
                    <div className="h-full bg-amber-500 w-[96%]" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Featured Repositories Grid */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[8px] text-muted-text uppercase tracking-widest pl-2 block text-left">
              Featured Code Repositories
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {FEATURED_REPOS.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl glass-panel border border-white/40 flex flex-col gap-4 text-left shadow-lg pointer-events-auto transition-all duration-300 hover:scale-[1.01] hover:bg-white/20 dark:hover:bg-white/5 relative overflow-hidden group"
                  data-cursor="BUILD"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-white/5 blur-2xl pointer-events-none transition-all duration-300 group-hover:scale-150" />
                  
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-2 text-primary-purple">
                      <BookMarked className="w-4 h-4" />
                      <span className="font-display font-extrabold text-sm text-text-dark">
                        {repo.name}
                      </span>
                    </div>
                    <FaGithub className="w-4 h-4 text-muted-text group-hover:text-text-dark transition-colors duration-300" />
                  </div>
                  
                  <p className="text-muted-text text-xs leading-relaxed flex-1 relative z-10">
                    {repo.desc}
                  </p>
                  
                  <div className="flex items-center justify-between text-[9px] font-mono text-muted-text mt-2 border-t border-white/5 pt-2 relative z-10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: repo.langColor }} />
                      <span>{repo.lang}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-500/80" />
                        <span>{repo.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5 text-primary-purple/80" />
                        <span>{repo.forks}</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Right Panel: Languages breakdown & Live Ticker */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Tech Breakdown Widget */}
          <div className="p-5 rounded-2xl glass-panel border border-white/40 flex flex-col gap-5 text-left shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-primary-purple/5 blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-2 border-b border-white/10 pb-2.5">
              <Sparkles className="w-4 h-4 text-primary-purple" />
              <span className="font-mono text-[9px] text-muted-text uppercase tracking-widest">
                Language Diagnostics
              </span>
            </div>
            
            <div className="flex flex-col gap-4 justify-center py-2">
              {TECH_RATIOS.map((tech) => (
                <div key={tech.name} className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-[10px] font-mono font-bold text-text-dark">
                    <span>{tech.name}</span>
                    <span style={{ color: tech.color }}>{tech.percent}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden border border-white/10 p-[1px]">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        backgroundColor: tech.color,
                        boxShadow: `0 0 4px ${tech.color}80`
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                  <span className="text-[8px] font-mono text-muted-text/80 pl-0.5">
                    {tech.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Build Pipeline & Git Log Ticker */}
          <div className="p-5 rounded-2xl glass-panel border border-white/40 flex flex-col gap-4 text-left shadow-lg overflow-hidden flex-1">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary-purple animate-pulse" />
                <span className="font-mono text-[9px] text-muted-text uppercase tracking-widest">
                  Live Compile Ticker
                </span>
              </div>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>

            <div className="flex flex-col gap-4 font-mono text-[9px] text-text-dark/95 leading-relaxed overflow-y-auto no-scrollbar py-1">
              {ACTIVITY_LOGS.map((log, lIdx) => (
                <div key={lIdx} className="flex items-start gap-2 border-b border-white/5 pb-2 last:border-0 last:pb-0">
                  <span className="text-muted-text text-[8px] flex items-center gap-1 select-none pt-0.5">
                    <Clock className="w-2.5 h-2.5" />
                    {log.time}
                  </span>
                  <div className="flex-1 flex flex-col gap-0.5">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`text-[8px] font-bold px-1 rounded-sm border ${
                          log.type === "SUCCESS"
                            ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                            : log.type === "BUILD"
                            ? "bg-blue-500/10 text-blue-500 border-blue-500/20"
                            : log.type === "TRAIN"
                            ? "bg-amber-500/10 text-amber-500 border-amber-500/20"
                            : "bg-purple-500/10 text-purple-500 border-purple-500/20"
                        }`}
                      >
                        {log.type}
                      </span>
                    </div>
                    <span className="text-text-dark/90 leading-normal font-sans font-medium text-[11px] mt-0.5">
                      {log.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
