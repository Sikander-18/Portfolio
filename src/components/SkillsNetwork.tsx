"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { ExternalLink } from "lucide-react";

interface SkillNode {
  id: string;
  name: string;
  category: "programming" | "frontend" | "backend" | "aiml" | "tools";
  description: string;
  projects: { name: string; slug: string }[];
}

const SKILL_DATABASE: SkillNode[] = [
  {
    id: "python",
    name: "Python",
    category: "programming",
    description: "Core language for ML architecture, LangGraph agents, medical document parsing, and FastAPI endpoints.",
    projects: [
      { name: "VitalGuard", slug: "vitalguard" },
      { name: "Offline RAG System", slug: "offline-rag" },
      { name: "Rx-Plain", slug: "rx-plain" },
      { name: "Trust AI", slug: "trust-ai" }
    ]
  },
  {
    id: "java",
    name: "Java",
    category: "programming",
    description: "Object-oriented backend design, algorithms development, and Spring Boot queue telemetry systems.",
    projects: [{ name: "SkipQ", slug: "skipq" }]
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "programming",
    description: "Full-stack application script logic, asynchronous event loops, and React state controllers.",
    projects: [{ name: "EventSphere", slug: "eventsphere" }]
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    description: "Server-side rendering, routing logic, layouts optimization, and premium UI animations integration.",
    projects: [{ name: "Trust AI", slug: "trust-ai" }]
  },
  {
    id: "react",
    name: "React",
    category: "frontend",
    description: "Component-based layouts, custom state hooks, interactive dashboards, and conversational inputs.",
    projects: [
      { name: "EventSphere", slug: "eventsphere" },
      { name: "Offline RAG System", slug: "offline-rag" }
    ]
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    description: "Responsive layouts, utility classes, HSL colors mapping, and glassmorphism panel styles.",
    projects: [
      { name: "EventSphere", slug: "eventsphere" },
      { name: "Offline RAG System", slug: "offline-rag" }
    ]
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "backend",
    description: "High-performance Python backend REST endpoints, document chunk ingestion, and network security routing.",
    projects: [
      { name: "Offline RAG System", slug: "offline-rag" },
      { name: "Heimdall", slug: "heimdall" }
    ]
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    description: "Asynchronous backend loops, role-based JWT auth validation, and registration databases integrations.",
    projects: [{ name: "EventSphere", slug: "eventsphere" }]
  },
  {
    id: "springboot",
    name: "Spring Boot",
    category: "backend",
    description: "Robust enterprise REST frameworks, scheduling jobs, and high-throughput telemetry queues.",
    projects: [{ name: "SkipQ", slug: "skipq" }]
  },
  {
    id: "langgraph",
    name: "LangGraph",
    category: "aiml",
    description: "Multi-agent cyclic graph orchestration to run complex clinical logic pipelines over raw patient data.",
    projects: [{ name: "VitalGuard", slug: "vitalguard" }]
  },
  {
    id: "chromadb",
    name: "ChromaDB",
    category: "aiml",
    description: "Local vector databases, handling high-dimensional text embeddings, and running fast cosine search queries.",
    projects: [{ name: "Offline RAG System", slug: "offline-rag" }]
  },
  {
    id: "ollama",
    name: "Ollama (Mistral)",
    category: "aiml",
    description: "Self-hosting local language models (Mistral-7B) to perform private Q&A analysis with zero api token costs.",
    projects: [{ name: "Offline RAG System", slug: "offline-rag" }]
  },
  {
    id: "docker",
    name: "Docker",
    category: "tools",
    description: "Containerizing software configurations to build sandboxed, cross-platform security monitoring agents.",
    projects: [{ name: "Heimdall", slug: "heimdall" }]
  },
  {
    id: "twilio",
    name: "Twilio",
    category: "tools",
    description: "Integrating phone calling APIs into diagnostic pipelines to trigger immediate audio notifications.",
    projects: [{ name: "VitalGuard", slug: "vitalguard" }]
  },
  {
    id: "n8n",
    name: "n8n Automation",
    category: "tools",
    description: "Workflow automation nodes connecting events alerts and background cron validation procedures.",
    projects: [{ name: "Heimdall", slug: "heimdall" }]
  }
];

export default function SkillsNetwork() {
  const [hoveredSkill, setHoveredSkill] = useState<SkillNode | null>(SKILL_DATABASE[0]);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen w-full flex items-center py-20 px-6 md:px-12 bg-transparent z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-12 md:gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-primary uppercase tracking-widest block">
            {"// Tech Stack Map"}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight select-none">
            SYSTEM ARCHITECTURE.
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Graph Visual - 7 cols) */}
          <div className="lg:col-span-7 flex justify-center items-center relative h-[380px] md:h-[460px] border border-zinc-900 rounded-2xl bg-zinc-950/20 backdrop-blur-sm overflow-hidden select-none">
            
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            
            {/* SVG Connections Canvas */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Dynamic connection lines linking categories to center */}
              <line x1="50%" y1="50%" x2="25%" y2="25%" stroke={hoveredCategory === "programming" || hoveredSkill?.category === "programming" ? "#7c3aed" : "#1f1f23"} strokeWidth={hoveredCategory === "programming" || hoveredSkill?.category === "programming" ? "1.5" : "0.5"} className="transition-all duration-300" />
              <line x1="50%" y1="50%" x2="75%" y2="25%" stroke={hoveredCategory === "aiml" || hoveredSkill?.category === "aiml" ? "#22d3ee" : "#1f1f23"} strokeWidth={hoveredCategory === "aiml" || hoveredSkill?.category === "aiml" ? "1.5" : "0.5"} className="transition-all duration-300" />
              <line x1="50%" y1="50%" x2="25%" y2="75%" stroke={hoveredCategory === "frontend" || hoveredSkill?.category === "frontend" ? "#a855f7" : "#1f1f23"} strokeWidth={hoveredCategory === "frontend" || hoveredSkill?.category === "frontend" ? "1.5" : "0.5"} className="transition-all duration-300" />
              <line x1="50%" y1="50%" x2="75%" y2="75%" stroke={hoveredCategory === "backend" || hoveredSkill?.category === "backend" ? "#10b981" : "#1f1f23"} strokeWidth={hoveredCategory === "backend" || hoveredSkill?.category === "backend" ? "1.5" : "0.5"} className="transition-all duration-300" />
              <line x1="50%" y1="50%" x2="50%" y2="80%" stroke={hoveredCategory === "tools" || hoveredSkill?.category === "tools" ? "#a855f7" : "#1f1f23"} strokeWidth={hoveredCategory === "tools" || hoveredSkill?.category === "tools" ? "1.5" : "0.5"} className="transition-all duration-300" />
            </svg>

            {/* Center Node (Sikander) */}
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-primary bg-zinc-950 flex flex-col items-center justify-center text-center shadow-[0_0_25px_rgba(124,58,237,0.25)] z-20 font-display">
              <span className="text-[7px] text-zinc-500 uppercase tracking-widest block leading-none">Center</span>
              <span className="text-[10px] text-white font-bold mt-1 uppercase tracking-widest block leading-none">Sikander</span>
            </div>

            {/* Branch Nodes (Categories) */}
            {/* Programming Branch */}
            <div 
              onMouseEnter={() => setHoveredCategory("programming")}
              onMouseLeave={() => setHoveredCategory(null)}
              className={clsx(
                "absolute top-[25%] left-[25%] -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg border text-[9px] font-mono font-bold tracking-widest uppercase z-10 transition-all duration-300",
                hoveredCategory === "programming" || hoveredSkill?.category === "programming"
                  ? "border-primary bg-primary/20 text-white shadow-[0_0_15px_rgba(124,58,237,0.15)] scale-105"
                  : "border-zinc-800 bg-zinc-950/80 text-zinc-400"
              )}
            >
              Languages
            </div>

            {/* AI/ML Branch */}
            <div 
              onMouseEnter={() => setHoveredCategory("aiml")}
              onMouseLeave={() => setHoveredCategory(null)}
              className={clsx(
                "absolute top-[25%] right-[25%] translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg border text-[9px] font-mono font-bold tracking-widest uppercase z-10 transition-all duration-300",
                hoveredCategory === "aiml" || hoveredSkill?.category === "aiml"
                  ? "border-accent bg-accent/20 text-white shadow-[0_0_15px_rgba(34,211,238,0.15)] scale-105"
                  : "border-zinc-800 bg-zinc-950/80 text-zinc-400"
              )}
            >
              AI & Data
            </div>

            {/* Frontend Branch */}
            <div 
              onMouseEnter={() => setHoveredCategory("frontend")}
              onMouseLeave={() => setHoveredCategory(null)}
              className={clsx(
                "absolute bottom-[25%] left-[25%] -translate-x-1/2 translate-y-1/2 px-3 py-1.5 rounded-lg border text-[9px] font-mono font-bold tracking-widest uppercase z-10 transition-all duration-300",
                hoveredCategory === "frontend" || hoveredSkill?.category === "frontend"
                  ? "border-secondary bg-secondary/20 text-white shadow-[0_0_15px_rgba(168,85,247,0.15)] scale-105"
                  : "border-zinc-800 bg-zinc-950/80 text-zinc-400"
              )}
            >
              Frontend
            </div>

            {/* Backend Branch */}
            <div 
              onMouseEnter={() => setHoveredCategory("backend")}
              onMouseLeave={() => setHoveredCategory(null)}
              className={clsx(
                "absolute bottom-[25%] right-[25%] translate-x-1/2 translate-y-1/2 px-3 py-1.5 rounded-lg border text-[9px] font-mono font-bold tracking-widest uppercase z-10 transition-all duration-300",
                hoveredCategory === "backend" || hoveredSkill?.category === "backend"
                  ? "border-success bg-success/20 text-white shadow-[0_0_15px_rgba(16,185,129,0.15)] scale-105"
                  : "border-zinc-800 bg-zinc-950/80 text-zinc-400"
              )}
            >
              Backend
            </div>

            {/* Tools Branch */}
            <div 
              onMouseEnter={() => setHoveredCategory("tools")}
              onMouseLeave={() => setHoveredCategory(null)}
              className={clsx(
                "absolute bottom-[20%] left-[50%] -translate-x-1/2 translate-y-1/2 px-3 py-1.5 rounded-lg border text-[9px] font-mono font-bold tracking-widest uppercase z-10 transition-all duration-300",
                hoveredCategory === "tools" || hoveredSkill?.category === "tools"
                  ? "border-secondary bg-secondary/20 text-white shadow-[0_0_15px_rgba(168,85,247,0.15)] scale-105"
                  : "border-zinc-800 bg-zinc-950/80 text-zinc-400"
              )}
            >
              Infrastructure
            </div>

            {/* Skill Leaf Badges orbiting branches */}
            {/* Programming Leaves */}
            <button onMouseEnter={() => setHoveredSkill(SKILL_DATABASE[0])} className={clsx("absolute top-[8%] left-[18%] p-1.5 border rounded text-[8px] font-mono transition-all", hoveredSkill?.id === "python" ? "border-primary bg-primary/10 text-white" : "border-zinc-850 bg-zinc-950 text-zinc-500")}>Python</button>
            <button onMouseEnter={() => setHoveredSkill(SKILL_DATABASE[1])} className={clsx("absolute top-[18%] left-[8%] p-1.5 border rounded text-[8px] font-mono transition-all", hoveredSkill?.id === "java" ? "border-primary bg-primary/10 text-white" : "border-zinc-850 bg-zinc-950 text-zinc-500")}>Java</button>
            <button onMouseEnter={() => setHoveredSkill(SKILL_DATABASE[2])} className={clsx("absolute top-[28%] left-[8%] p-1.5 border rounded text-[8px] font-mono transition-all", hoveredSkill?.id === "javascript" ? "border-primary bg-primary/10 text-white" : "border-zinc-850 bg-zinc-950 text-zinc-500")}>JS</button>

            {/* AI/ML Leaves */}
            <button onMouseEnter={() => setHoveredSkill(SKILL_DATABASE[9])} className={clsx("absolute top-[8%] right-[18%] p-1.5 border rounded text-[8px] font-mono transition-all", hoveredSkill?.id === "langgraph" ? "border-accent bg-accent/10 text-white" : "border-zinc-850 bg-zinc-950 text-zinc-500")}>LangGraph</button>
            <button onMouseEnter={() => setHoveredSkill(SKILL_DATABASE[10])} className={clsx("absolute top-[18%] right-[8%] p-1.5 border rounded text-[8px] font-mono transition-all", hoveredSkill?.id === "chromadb" ? "border-accent bg-accent/10 text-white" : "border-zinc-850 bg-zinc-950 text-zinc-500")}>ChromaDB</button>
            <button onMouseEnter={() => setHoveredSkill(SKILL_DATABASE[11])} className={clsx("absolute top-[28%] right-[8%] p-1.5 border rounded text-[8px] font-mono transition-all", hoveredSkill?.id === "ollama" ? "border-accent bg-accent/10 text-white" : "border-zinc-850 bg-zinc-950 text-zinc-500")}>Ollama</button>

            {/* Frontend Leaves */}
            <button onMouseEnter={() => setHoveredSkill(SKILL_DATABASE[3])} className={clsx("absolute bottom-[28%] left-[8%] p-1.5 border rounded text-[8px] font-mono transition-all", hoveredSkill?.id === "nextjs" ? "border-secondary bg-secondary/10 text-white" : "border-zinc-850 bg-zinc-950 text-zinc-500")}>Next.js</button>
            <button onMouseEnter={() => setHoveredSkill(SKILL_DATABASE[4])} className={clsx("absolute bottom-[18%] left-[8%] p-1.5 border rounded text-[8px] font-mono transition-all", hoveredSkill?.id === "react" ? "border-secondary bg-secondary/10 text-white" : "border-zinc-850 bg-zinc-950 text-zinc-500")}>React</button>
            <button onMouseEnter={() => setHoveredSkill(SKILL_DATABASE[5])} className={clsx("absolute bottom-[8%] left-[18%] p-1.5 border rounded text-[8px] font-mono transition-all", hoveredSkill?.id === "tailwind" ? "border-secondary bg-secondary/10 text-white" : "border-zinc-850 bg-zinc-950 text-zinc-500")}>Tailwind</button>

            {/* Backend Leaves */}
            <button onMouseEnter={() => setHoveredSkill(SKILL_DATABASE[6])} className={clsx("absolute bottom-[28%] right-[8%] p-1.5 border rounded text-[8px] font-mono transition-all", hoveredSkill?.id === "fastapi" ? "border-success bg-success/10 text-white" : "border-zinc-850 bg-zinc-950 text-zinc-500")}>FastAPI</button>
            <button onMouseEnter={() => setHoveredSkill(SKILL_DATABASE[7])} className={clsx("absolute bottom-[18%] right-[8%] p-1.5 border rounded text-[8px] font-mono transition-all", hoveredSkill?.id === "nodejs" ? "border-success bg-success/10 text-white" : "border-zinc-850 bg-zinc-950 text-zinc-500")}>Node.js</button>
            <button onMouseEnter={() => setHoveredSkill(SKILL_DATABASE[8])} className={clsx("absolute bottom-[8%] right-[18%] p-1.5 border rounded text-[8px] font-mono transition-all", hoveredSkill?.id === "springboot" ? "border-success bg-success/10 text-white" : "border-zinc-850 bg-zinc-950 text-zinc-500")}>Spring Boot</button>

            {/* Tools/Infra Leaves */}
            <button onMouseEnter={() => setHoveredSkill(SKILL_DATABASE[12])} className={clsx("absolute bottom-[8%] left-[36%] p-1.5 border rounded text-[8px] font-mono transition-all", hoveredSkill?.id === "docker" ? "border-secondary bg-secondary/10 text-white" : "border-zinc-850 bg-zinc-950 text-zinc-500")}>Docker</button>
            <button onMouseEnter={() => setHoveredSkill(SKILL_DATABASE[13])} className={clsx("absolute bottom-[4%] left-[48%] -translate-x-1/2 p-1.5 border rounded text-[8px] font-mono transition-all", hoveredSkill?.id === "twilio" ? "border-secondary bg-secondary/10 text-white" : "border-zinc-850 bg-zinc-950 text-zinc-500")}>Twilio</button>
            <button onMouseEnter={() => setHoveredSkill(SKILL_DATABASE[14])} className={clsx("absolute bottom-[8%] right-[36%] p-1.5 border rounded text-[8px] font-mono transition-all", hoveredSkill?.id === "n8n" ? "border-secondary bg-secondary/10 text-white" : "border-zinc-850 bg-zinc-950 text-zinc-500")}>n8n</button>

          </div>

          {/* Right Column (Skill Details Pane - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="p-6 md:p-8 rounded-2xl border border-zinc-900 bg-zinc-950/60 backdrop-blur-md min-h-[350px] flex flex-col justify-between">
              
              {/* Header */}
              <div className="flex justify-between items-center border-b border-zinc-900 pb-4 mb-4 select-none">
                <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider">
                  Skill Details console
                </div>
                <div className="px-2 py-0.5 rounded bg-accent/15 border border-accent/30 font-mono text-[8px] text-accent tracking-widest uppercase">
                  {hoveredSkill?.category || "general"}
                </div>
              </div>

              {/* Dynamic Skill Details */}
              {hoveredSkill ? (
                <div className="flex flex-col gap-4">
                  <h3 className="font-display text-xl font-bold text-white leading-none">
                    {hoveredSkill.name}
                  </h3>
                  
                  <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                    {hoveredSkill.description}
                  </p>

                  {/* Connected Projects */}
                  <div className="mt-4 flex flex-col gap-2">
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest select-none">
                      {"// Connected Outcomes"}
                    </span>
                    <div className="flex flex-col gap-2.5 mt-1">
                      {hoveredSkill.projects.map((proj) => (
                        <a
                          key={proj.slug}
                          href={`/missions/${proj.slug}`}
                          className="flex justify-between items-center px-3.5 py-2.5 bg-zinc-900 border border-zinc-850 hover:border-accent rounded-xl text-xs font-mono text-zinc-300 hover:text-white transition-all duration-300 group"
                          data-cursor="OPEN"
                        >
                          <span className="font-bold">{proj.name}</span>
                          <span className="text-[9px] text-zinc-500 flex items-center gap-1 group-hover:text-accent font-semibold tracking-wider uppercase">
                            Open Mission
                            <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="font-mono text-xs text-zinc-500 py-12 text-center select-none">
                  Hover over any node in the network to inspect credentials.
                </div>
              )}

              {/* Status footer info */}
              <div className="mt-6 border-t border-zinc-900 pt-4 font-mono text-[8px] text-zinc-600 select-none uppercase tracking-widest">
                {"Nodes active // double-click node to open case studies"}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
