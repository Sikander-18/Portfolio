"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowLeft, ArrowRight } from "lucide-react";
import { clsx } from "clsx";

interface Mission {
  code: string;
  name: string;
  category: string;
  status: string;
  summary: string;
  stack: string[];
  slug: string;
}

const MISSIONS: Mission[] = [
  {
    code: "MISSION-01",
    name: "VitalGuard",
    category: "AI & ML",
    status: "Active Development",
    summary: "AI-powered real-time patient telemetry health monitoring system utilizing LangGraph multi-agent diagnostic logic and Twilio audio alert calls.",
    stack: ["Python", "LangGraph", "FastAPI", "Twilio API", "Streamlit"],
    slug: "vitalguard"
  },
  {
    code: "MISSION-02",
    name: "Offline RAG",
    category: "AI & ML",
    status: "Prototype",
    summary: "Completely offline document analysis Q&A platform hosting Mistral-7B via Ollama and using ChromaDB to protect data privacy.",
    stack: ["Python", "FastAPI", "ChromaDB", "Ollama", "Mistral 7B", "React"],
    slug: "offline-rag"
  },
  {
    code: "MISSION-03",
    name: "EventSphere",
    category: "Full Stack",
    status: "Active Development",
    summary: "Event ticketing ecosystem with role-based dashboard, REST data fetching, and QR code attendee ticketing checks.",
    stack: ["Node.js", "Express", "React", "MongoDB", "Tailwind CSS"],
    slug: "eventsphere"
  },
  {
    code: "MISSION-04",
    name: "Rx-Plain",
    category: "Healthcare",
    status: "Prototype",
    summary: "Asynchronous medical report parser normalizing clinical parameters into longitudinal health timelines for patients.",
    stack: ["Python", "NLP", "Data Normalization", "Streamlit"],
    slug: "rx-plain"
  },
  {
    code: "MISSION-05",
    name: "Heimdall",
    category: "Security",
    status: "Research & Development",
    summary: "Dockerized passive network socket threat sniffer piping alert flags to n8n automated warning webhooks.",
    stack: ["Python", "Docker", "Network Sockets", "n8n Automation"],
    slug: "heimdall"
  },
  {
    code: "MISSION-06",
    name: "SkipQ",
    category: "Queue Telemetry",
    status: "Prototype",
    summary: "Smart ticketing scheduling engine calculating real-time queue delays and optimizing clinic patient routing.",
    stack: ["Java", "Spring Boot", "React", "REST APIs"],
    slug: "skipq"
  },
  {
    code: "MISSION-07",
    name: "Trust AI",
    category: "AI & ML",
    status: "Concept & Research",
    summary: "Factual evaluation engine evaluating LLM outputs against context grounding reference data to check for hallucinations.",
    stack: ["Python", "PyTorch", "Next.js", "Vector Similarity"],
    slug: "trust-ai"
  }
];

const CATEGORIES = ["All", "AI & ML", "Healthcare", "Full Stack", "Security", "Queue Telemetry"];

export default function MissionsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredMissions = MISSIONS.filter((m) => {
    const matchesSearch = 
      m.name.toLowerCase().includes(search.toLowerCase()) || 
      m.summary.toLowerCase().includes(search.toLowerCase()) ||
      m.stack.some(s => s.toLowerCase().includes(search.toLowerCase()));
      
    const matchesCategory = category === "All" || m.category === category;
    
    return matchesSearch && matchesCategory;
  });

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
    <div className="min-h-screen w-full bg-background p-6 md:p-12 relative overflow-hidden flex flex-col justify-between">
      
      {/* Top Header */}
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-8 md:gap-10">
        
        {/* Navigation row */}
        <div className="flex justify-between items-center select-none">
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-[10px] text-zinc-400 hover:text-white uppercase tracking-widest font-bold transition-colors group"
            data-cursor="CONNECT"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>Return Home</span>
          </Link>
          
          <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
            Sikander Prajapati &bull; Cabinet Index
          </div>
        </div>

        {/* Title */}
        <div className="flex flex-col gap-2 select-none">
          <span className="font-mono text-xs text-primary uppercase tracking-widest block">
            {"// Mission Archive"}
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
            DECLASSIFIED REGISTRY.
          </h1>
          <p className="font-sans text-xs md:text-sm text-zinc-400 leading-relaxed max-w-xl mt-1">
            An indexed archive of software architectures and diagnostic systems built from mathematics, core code pipelines, and AI graphs.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center mt-4 pb-6 border-b border-zinc-900">
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 pointer-events-auto select-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={clsx(
                  "px-3.5 py-1.5 rounded-xl border text-[10px] font-mono tracking-wider uppercase transition-all duration-350",
                  category === cat
                    ? "border-accent bg-accent/20 text-white shadow-[0_0_12px_rgba(34,211,238,0.15)]"
                    : "border-zinc-850 bg-zinc-950 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                )}
                data-cursor="OPEN"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative max-w-xs w-full pointer-events-auto">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-650" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search stack, file, code..."
              className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-zinc-850 focus:border-accent rounded-xl text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:ring-0 transition-colors"
            />
          </div>

        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {filteredMissions.length > 0 ? (
            filteredMissions.map((m) => (
              <div
                key={m.code}
                className="relative p-6 rounded-2xl border border-zinc-900 bg-zinc-950/60 backdrop-blur-sm min-h-[300px] flex flex-col justify-between hover:border-accent/35 transition-all duration-300 group"
                data-cursor="OPEN"
              >
                {/* Folder Top Tab */}
                <div className="absolute -top-[19px] left-6 h-5 w-20 bg-zinc-950 border-t border-x border-zinc-900 rounded-t-lg flex items-center justify-center font-mono text-[7px] text-zinc-500 uppercase tracking-widest select-none">
                  {m.code}
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex flex-col">
                      <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest">
                        {m.category}
                      </span>
                      <h3 className="font-display text-lg font-bold text-white group-hover:text-accent transition-colors">
                        {m.name}
                      </h3>
                    </div>
                    <span className={clsx("px-2 py-0.5 border rounded-full text-[8px] font-mono tracking-wider uppercase font-semibold", getStatusColor(m.status))}>
                      {m.status}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                    {m.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {m.stack.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-850 font-mono text-[8px] text-zinc-500">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-900/60 flex justify-between items-center select-none">
                  <span className="font-mono text-[8px] text-zinc-600 uppercase tracking-widest">Confidential</span>
                  <Link
                    href={`/missions/${m.slug}`}
                    className="flex items-center gap-1 font-mono text-[9px] text-white hover:text-accent font-bold tracking-widest uppercase transition-colors group/link"
                  >
                    <span>Analyze Mission</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center font-mono text-xs text-zinc-500 border border-dashed border-zinc-900 rounded-2xl select-none">
              No declassified missions match the active selection criteria.
            </div>
          )}
        </div>

      </div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto w-full border-t border-zinc-900/50 pt-6 mt-16 font-mono text-[8px] text-zinc-600 flex justify-between items-center select-none uppercase tracking-widest">
        <div>Sikander Prajapati &bull; Operational Registry</div>
        <div>All records valid</div>
      </footer>

    </div>
  );
}
