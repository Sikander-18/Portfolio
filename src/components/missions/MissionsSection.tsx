"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderClosed, FolderOpen, ExternalLink, ShieldAlert, Compass, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

interface Mission {
  id: string;
  name: string;
  category: string;
  status: "Active Development" | "Research & Development" | "Prototype" | "Concept & Research";
  problem: string;
  approach: string;
  solution: string;
  tech: string[];
  github: string;
  demo?: string;
  color: string;
}

const MISSIONS: Mission[] = [
  {
    id: "vitalguard",
    name: "VitalGuard",
    category: "Healthcare + AI",
    status: "Active Development",
    problem: "Lack of immediate, reliable radiology diagnostic assistance in rural clinics, causing long referral delays.",
    approach: "Fine-tune deep CNN models on chest radiographic datasets. Build a fast asynchronous FastAPI endpoint with Grad-CAM activation mapping.",
    solution: "A web platform that analyzes clinical images, identifies abnormalities, and highlights diagnostic regions in under 1.5 seconds.",
    tech: ["PyTorch", "FastAPI", "React", "Docker", "Tailwind"],
    github: "https://github.com/Sikander-18",
    color: "#22D3EE"
  },
  {
    id: "eventsphere",
    name: "EventSphere",
    category: "Event Management Ecosystem",
    status: "Active Development",
    problem: "High ticketing bot fraud, fragmented check-in flows, and expensive vendor transaction fees.",
    approach: "Design a relational system schema with transactional guarantees. Build a real-time event booking and analytics dashboard.",
    solution: "An end-to-end booking ecosystem featuring instant tickets, administrative dashboards, and scanned check-in validation.",
    tech: ["Next.js", "Node.js", "Express", "SQL", "Tailwind"],
    github: "https://github.com/Sikander-18",
    color: "#8B5CF6"
  },
  {
    id: "heimdall",
    name: "Heimdall",
    category: "Cybersecurity Monitoring",
    status: "Research & Development",
    problem: "Intrusive network scanning, delay in log correlation, and expensive licenses for SIEM monitors on small servers.",
    approach: "Monitor network traffic sockets, capture metrics, and run anomaly models (Random Forest) to flag volumetric packet spikes.",
    solution: "A lightweight terminal monitor and agent that tracks network interface cards and writes high-risk signature alerts.",
    tech: ["Python", "Scikit-Learn", "Linux Shell", "Git"],
    github: "https://github.com/Sikander-18",
    color: "#EC4899"
  },
  {
    id: "skipq",
    name: "SkipQ",
    category: "Queue Management",
    status: "Prototype",
    problem: "Bottlenecks at supermarket billing counters during checkout rushes, decreasing customer satisfaction.",
    approach: "Create a camera-based barcode scanning mobile interface with instant local cart caching and secure payment simulation.",
    solution: "A complete mobile checkout app allowing retail shoppers to scan barcodes and pay on the web to bypass lines entirely.",
    tech: ["React", "Node.js", "Express", "SQL", "Tailwind"],
    github: "https://github.com/Sikander-18",
    color: "#10B981"
  },
  {
    id: "trust-ai",
    name: "Trust AI",
    category: "AI Verification Platform",
    status: "Concept & Research",
    problem: "Model hallucinations and lack of rigorous, measurable factual tests for customized LLM deployments.",
    approach: "Develop a semantic checker system comparing API answers against static knowledge bases using distance metrics.",
    solution: "An evaluation rig interface highlighting semantic gaps, confidence thresholds, and toxicity ratios.",
    tech: ["Next.js", "Python", "OpenAI API", "Docker"],
    github: "https://github.com/Sikander-18",
    color: "#F59E0B"
  }
];

export default function MissionsSection() {
  const [selectedId, setSelectedId] = useState("vitalguard");
  const selectedMission = MISSIONS.find((m) => m.id === selectedId) || MISSIONS[0];

  return (
    <section id="missions" className="py-24 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-[20%] right-[-10%] w-[380px] h-[380px] bg-primary-purple/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="container mx-auto px-4 w-full max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
          <span className="font-mono text-[10px] text-primary-purple uppercase tracking-widest font-bold">
            Project Archives
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-text-dark leading-tight tracking-tight">
            Declassified Missions
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-purple to-soft-pink mx-auto rounded-full mt-2" />
          <p className="text-muted-text text-sm md:text-base font-sans mt-4 leading-relaxed">
            I approach engineering challenges as specific missions. Explore the technical breakdowns, problems, and solutions below.
          </p>
        </div>

        {/* Dossier Terminal Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Dossier Directory List */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="font-mono text-[9px] text-muted-text uppercase tracking-widest pl-2 mb-1 text-left block">
              Mission Index Directory
            </span>
            {MISSIONS.map((mission) => {
              const isSelected = mission.id === selectedId;
              const Icon = isSelected ? FolderOpen : FolderClosed;

              return (
                <button
                  key={mission.id}
                  onClick={() => setSelectedId(mission.id)}
                  className={`w-full p-4 rounded-2xl text-left border flex items-center justify-between gap-4 transition-all duration-300 pointer-events-auto ${
                    isSelected
                      ? "glass-panel border-white/60 shadow-md translate-x-1.5 bg-white/20"
                      : "bg-white/5 border-transparent hover:bg-white/10"
                  }`}
                  data-cursor="OPEN"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-primary-purple shrink-0" />
                    <div className="flex flex-col text-left">
                      <span className="font-display font-extrabold text-sm text-text-dark">
                        {mission.name}
                      </span>
                      <span className="font-mono text-[8px] text-muted-text uppercase mt-0.5">
                        {mission.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Status Indicator circle */}
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: mission.color }}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Declassified Dossier Details */}
          <div className="lg:col-span-8">
            <div className="w-full h-full rounded-3xl glass-panel border border-white/40 p-6 md:p-8 flex flex-col gap-6 shadow-xl relative overflow-hidden text-left">
              
              {/* Header dossier telemetry */}
              <div className="absolute top-0 right-0 w-36 h-36 z-0 pointer-events-none opacity-[0.08] blur-[1px]">
                <Image
                  src="/animations/missions/missionsection.gif"
                  alt="Dossier Scanner"
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>

              {/* Dossier Header Info */}
              <div className="flex flex-col gap-1 pb-4 border-b border-white/10 z-10 relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[8px] text-red-500 uppercase tracking-widest font-extrabold">
                    CLASSIFIED FILE // RESTRICTED ACCESS
                  </span>
                  <span className="font-mono text-[8px] text-muted-text uppercase">
                    STATUS: {selectedMission.status}
                  </span>
                </div>
                <h3 className="font-display font-extrabold text-2xl md:text-3xl text-text-dark mt-1">
                  MISSION: {selectedMission.name}
                </h3>
              </div>

              {/* Content sections */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col gap-5 z-10 relative flex-1"
                >
                  {/* Problem */}
                  <div className="flex items-start gap-3">
                    <ShieldAlert className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="font-mono text-[8px] uppercase tracking-wider text-rose-500 font-bold">
                        Problem Statement
                      </span>
                      <p className="text-muted-text text-xs md:text-sm mt-0.5 leading-relaxed font-sans font-medium">
                        {selectedMission.problem}
                      </p>
                    </div>
                  </div>

                  {/* Approach */}
                  <div className="flex items-start gap-3">
                    <Compass className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="font-mono text-[8px] uppercase tracking-wider text-cyan-500 font-bold">
                        The Approach
                      </span>
                      <p className="text-muted-text text-xs md:text-sm mt-0.5 leading-relaxed font-sans font-medium">
                        {selectedMission.approach}
                      </p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="font-mono text-[8px] uppercase tracking-wider text-emerald-500 font-bold">
                        The Solution
                      </span>
                      <p className="text-muted-text text-xs md:text-sm mt-0.5 leading-relaxed font-sans font-medium">
                        {selectedMission.solution}
                      </p>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-col gap-1.5 mt-2">
                    <span className="font-mono text-[8px] uppercase tracking-wider text-muted-text font-bold">
                      Mission Tech Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedMission.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-xl bg-white/40 border border-white/40 text-[9px] font-mono text-text-dark font-semibold shadow-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Dossier footer links */}
              <div className="pt-4 border-t border-white/10 flex justify-between items-center z-10 relative">
                <span className="font-mono text-[8px] text-muted-text">
                  REF: SIKANDER-18/{selectedMission.id}
                </span>

                <div className="flex items-center gap-3">
                  <a
                    href={selectedMission.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clay-button p-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 hover:bg-white/70 pointer-events-auto"
                    data-cursor="BUILD"
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Source Code</span>
                  </a>

                  {selectedMission.demo && (
                    <a
                      href={selectedMission.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="clay-button-active p-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 pointer-events-auto"
                      data-cursor="CONNECT"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Launch Demo</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
