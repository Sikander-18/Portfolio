"use client";

import { useRef } from "react";
import Link from "next/link";
import { Folder, ArrowRight, ShieldAlert, CheckCircle, Flame } from "lucide-react";
import { clsx } from "clsx";

interface Mission {
  code: string;
  name: string;
  category: string;
  status: "Active Development" | "Prototype" | "Research & Development" | "Concept & Research";
  summary: string;
  problem: string;
  impact: string;
  stack: string[];
  slug: string;
}

const MISSIONS: Mission[] = [
  {
    code: "MISSION-01",
    name: "VitalGuard",
    category: "Healthcare + AI",
    status: "Active Development",
    summary: "Multi-agent AI monitoring system designed to run clinical reasoning graphs over real-time patient vitals, triggering instant Twilio telephone escalations upon anomaly detection.",
    problem: "Critical patient health anomalies go unnoticed due to lack of automated communication pipelines.",
    impact: "Top 10 finish in Health Track out of 250 teams. Completed end-to-end telemetry system.",
    stack: ["Python", "LangGraph", "FastAPI", "Twilio API", "Streamlit"],
    slug: "vitalguard"
  },
  {
    code: "MISSION-02",
    name: "Offline RAG",
    category: "Data Privacy + AI",
    status: "Prototype",
    summary: "Fully local, self-hosted Document Q&A Retrieval-Augmented Generation system ensuring absolute data privacy by containerizing Mistral-7B models via Ollama and utilizing ChromaDB vectors.",
    problem: "Data exposure hazards and heavy token fees associated with cloud-hosted LLM document parsing.",
    impact: "Achieved zero external API dependency and zero processing fees with real-time semantic retrieval.",
    stack: ["Python", "FastAPI", "ChromaDB", "Ollama", "Mistral 7B", "React"],
    slug: "offline-rag"
  },
  {
    code: "MISSION-03",
    name: "EventSphere",
    category: "Full Stack Ecosystem",
    status: "Active Development",
    summary: "End-to-end event management dashboard featuring role-based dashboards, secure continuous REST data fetching pipelines, and cryptographic QR code check-ins.",
    problem: "Fragmented attendee registration workflows and slow ticket checks at physical venues.",
    impact: "Highly scalable, production-ready system capable of instantaneous QR ticket checks.",
    stack: ["Node.js", "Express", "React", "MongoDB", "Tailwind CSS"],
    slug: "eventsphere"
  },
  {
    code: "MISSION-04",
    name: "Rx-Plain",
    category: "NLP + Diagnostics",
    status: "Prototype",
    summary: "Asynchronous clinical document parsing engine converting unstructured biomedical report parameters into clear, chronological health timelines for patient analysis.",
    problem: "Highly complex, fragmented biomedical structures that patients cannot interpret.",
    impact: "Developed patient-friendly explanations for clinical lab metrics in longitudinal visual grids.",
    stack: ["Python", "NLP", "Data Normalization", "Streamlit"],
    slug: "rx-plain"
  },
  {
    code: "MISSION-05",
    name: "Heimdall",
    category: "Cybersecurity",
    status: "Research & Development",
    summary: "Dockerized passive network socket monitoring agent that sniffs packages locally, runs passive threat evaluations, and pipes trigger flags to n8n automated warning webhooks.",
    problem: "Intrusion threat logs are scattered, requiring heavy cloud compute configurations for detection.",
    impact: "Created modular lightweight agents that monitor local server ports with low performance overhead.",
    stack: ["Python", "Docker", "Network Sockets", "n8n Automation"],
    slug: "heimdall"
  },
  {
    code: "MISSION-06",
    name: "SkipQ",
    category: "Queue Telemetry",
    status: "Prototype",
    summary: "Smart ticketing scheduling engine calculating real-time queue delay indicators, routing patients optimally, and dispatching SMS alerts on queue updates.",
    problem: "Physical crowding and long queue wait times in public utility offices and health clinics.",
    impact: "Designed routing logic to balance clinic loads and dispatch queue ticks to SMS.",
    stack: ["Java", "Spring Boot", "React", "REST APIs"],
    slug: "skipq"
  },
  {
    code: "MISSION-07",
    name: "Trust AI",
    category: "LLM Verification",
    status: "Concept & Research",
    summary: "Algorithmic validation engine comparing model responses against grounding reference text to calculate semantic similarity metrics and check for hallucinations.",
    problem: "Unreliable, hallucinated LLM responses that lack safety boundaries for industrial integration.",
    impact: "Formulated custom evaluation equations with grounding vector indices.",
    stack: ["Python", "PyTorch", "Next.js", "Vector Similarity"],
    slug: "trust-ai"
  }
];

export default function MissionsSection() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Active Development":
        return <Flame className="w-3.5 h-3.5 text-accent animate-pulse" />;
      case "Prototype":
        return <CheckCircle className="w-3.5 h-3.5 text-success" />;
      case "Research & Development":
        return <ShieldAlert className="w-3.5 h-3.5 text-primary" />;
      default:
        return <Folder className="w-3.5 h-3.5 text-zinc-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active Development":
        return "text-accent border-accent/20 bg-accent/5";
      case "Prototype":
        return "text-success border-success/20 bg-success/5";
      case "Research & Development":
        return "text-primary border-primary/20 bg-primary/5";
      default:
        return "text-zinc-400 border-zinc-800 bg-zinc-950";
    }
  };

  return (
    <section id="missions" className="relative min-h-screen w-full flex flex-col justify-center py-20 px-6 md:px-12 bg-transparent z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-primary uppercase tracking-widest block">
              {"// Operation Case Studies"}
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight select-none">
              ACTIVE MISSIONS.
            </h2>
          </div>
          
          <div className="flex gap-2 font-mono text-[9px] text-zinc-500 uppercase tracking-widest border border-zinc-900 rounded-xl px-4 py-2 bg-zinc-950/40 select-none">
            Swipe or Drag horizontally to navigate cabinet
          </div>
        </div>

        {/* Horizontal File cabinet scroll */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-6 pb-6 w-full -mx-4 px-4 pointer-events-auto"
        >
          {MISSIONS.map((mission) => (
            <div 
              key={mission.code}
              className="snap-start shrink-0 w-[290px] sm:w-[360px] md:w-[410px] first:pl-2 last:pr-2"
            >
              {/* Folder Design */}
              <div 
                className="relative flex flex-col justify-between p-6 md:p-8 min-h-[460px] rounded-2xl border border-zinc-900 bg-zinc-950/60 backdrop-blur-md hover:border-accent/40 transition-all duration-500 group select-none shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
                data-cursor="OPEN"
              >
                {/* Folder Top Tab */}
                <div className="absolute -top-[19px] left-6 h-5 w-24 bg-zinc-950/80 border-t border-x border-zinc-900 rounded-t-lg flex items-center justify-center font-mono text-[8px] text-zinc-500 uppercase tracking-widest select-none pointer-events-none">
                  {mission.code}
                </div>
                
                {/* Folder interior metadata */}
                <div className="flex flex-col gap-6">
                  {/* Title block */}
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                        {mission.category}
                      </span>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                        {mission.name}
                      </h3>
                    </div>

                    <div className={clsx("flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[8px] font-mono tracking-wider uppercase shrink-0 font-bold", getStatusColor(mission.status))}>
                      {getStatusIcon(mission.status)}
                      <span>{mission.status}</span>
                    </div>
                  </div>

                  {/* Problem specification */}
                  <div className="flex flex-col gap-1.5">
                    <span className="font-mono text-[8px] text-primary uppercase tracking-widest">
                      {"// Vulnerability"}
                    </span>
                    <p className="font-sans text-xs text-zinc-400 leading-relaxed italic border-l-2 border-primary/45 pl-3">
                      &ldquo;{mission.problem}&rdquo;
                    </p>
                  </div>

                  {/* Summary */}
                  <div className="flex flex-col gap-1.5">
                    <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest">
                      {"// System Blueprint"}
                    </span>
                    <p className="font-sans text-xs text-zinc-300 leading-relaxed">
                      {mission.summary}
                    </p>
                  </div>

                  {/* Tech stack items */}
                  <div className="flex flex-wrap gap-1.5">
                    {mission.stack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 font-mono text-[8px] text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer link to Declassify */}
                <div className="mt-8 pt-4 border-t border-zinc-900/60 flex justify-between items-center">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-mono text-[8px] text-zinc-600 uppercase tracking-widest leading-none">Security Class</span>
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest font-semibold leading-none">Confidential</span>
                  </div>

                  <Link
                    href={`/missions/${mission.slug}`}
                    className="flex items-center gap-1.5 font-mono text-[10px] text-white hover:text-accent font-bold tracking-widest uppercase transition-all duration-300 group/link"
                  >
                    <span>Declassify File</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
