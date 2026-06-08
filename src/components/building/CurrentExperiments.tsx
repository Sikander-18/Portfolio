"use client";

import { motion } from "framer-motion";
import { Bot, Activity, ShieldCheck, Layers, Terminal } from "lucide-react";

interface Experiment {
  topic: string;
  status: string;
  progress: number;
  desc: string;
  color: string;
  icon: any;
  metric: string;
}

const EXPERIMENTS: Experiment[] = [
  {
    topic: "AI Agents",
    status: "Active Prototyping",
    progress: 80,
    desc: "Exploring autonomous execution loops, multi-agent coordination frameworks, and dynamic planning capabilities.",
    color: "#8B5CF6", // Purple
    icon: Bot,
    metric: "0.80 Alpha Run"
  },
  {
    topic: "Healthcare AI",
    status: "Validation Testing",
    progress: 90,
    desc: "Refining CNN radiological Grad-CAM saliency mapping and clinical decision-support interpretability metrics.",
    color: "#22D3EE", // Cyan
    icon: Activity,
    metric: "90% Saliency Map"
  },
  {
    topic: "Trustworthy AI",
    status: "Foundational Research",
    progress: 45,
    desc: "Drafting semantic distance calculations and alignment scoring formulas to detect and mitigate model hallucinations.",
    color: "#F59E0B", // Orange/Gold
    icon: ShieldCheck,
    metric: "r-Score Formula V1"
  },
  {
    topic: "System Design",
    status: "Performance Profiling",
    progress: 70,
    desc: "Analyzing memory layouts and throughput benchmarks for high-concurrency asynchronous event queue brokers.",
    color: "#EC4899", // Soft Pink
    icon: Layers,
    metric: "70% Load Cap"
  },
  {
    topic: "Human-AI Interaction",
    status: "UX Drafting",
    progress: 60,
    desc: "Designing natural language command consoles, ambient workspace HUDs, and context-aware shortcut menus.",
    color: "#10B981", // Emerald
    icon: Terminal,
    metric: "User Trial Phase 2"
  }
];

export default function CurrentExperiments() {
  return (
    <div className="flex flex-col gap-6">
      <span className="font-mono text-[9px] text-muted-text uppercase tracking-widest pl-2 mb-1 text-left block">
        Current R&D / Sandbox Exploration
      </span>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 w-full">
        {EXPERIMENTS.map((exp, idx) => {
          const Icon = exp.icon;
          return (
            <motion.div
              key={exp.topic}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`p-6 rounded-2xl glass-panel border border-white/40 flex flex-col justify-between gap-5 text-left shadow-lg relative overflow-hidden transition-all duration-300 hover:scale-[1.01] ${
                idx < 3
                  ? "md:col-span-3 lg:col-span-2"
                  : "md:col-span-3 lg:col-span-3"
              }`}
            >
              {/* Background Glow */}
              <div
                className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-10 pointer-events-none transition-all duration-300 group-hover:scale-125"
                style={{ backgroundColor: exp.color }}
              />

              <div className="flex flex-col gap-3 relative z-10">
                {/* Header: Icon & Topic Name */}
                <div className="flex items-center gap-3">
                  <div
                    className="p-2.5 rounded-xl border border-white/20 flex items-center justify-center shadow-inner"
                    style={{ backgroundColor: `${exp.color}15`, color: exp.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-display font-extrabold text-sm md:text-base text-text-dark leading-tight">
                      {exp.topic}
                    </h4>
                    <span className="font-mono text-[8px] uppercase tracking-wider text-muted-text mt-0.5">
                      {exp.status}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-text text-xs leading-relaxed mt-1 font-medium font-sans">
                  {exp.desc}
                </p>
              </div>

              {/* Progress & Metrics */}
              <div className="flex flex-col gap-2 relative z-10">
                <div className="flex justify-between items-center text-[9px] font-mono text-muted-text font-bold">
                  <span>Pipeline Progress</span>
                  <span style={{ color: exp.color }}>{exp.progress}%</span>
                </div>

                {/* Segmented linear progress bar */}
                <div className="flex gap-1 h-1.5 w-full bg-white/5 border border-white/10 rounded-sm p-[1px] overflow-hidden">
                  {Array.from({ length: 10 }).map((_, segmentIdx) => {
                    const threshold = (segmentIdx + 1) * 10;
                    const isActive = exp.progress >= threshold;
                    return (
                      <motion.div
                        key={segmentIdx}
                        className="h-full flex-1 rounded-xs"
                        style={{
                          backgroundColor: isActive ? exp.color : "rgba(255, 255, 255, 0.05)",
                          boxShadow: isActive ? `0 0 4px ${exp.color}80` : "none"
                        }}
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 + segmentIdx * 0.05 }}
                      />
                    );
                  })}
                </div>

                <div className="flex justify-between items-center text-[8px] font-mono text-muted-text/80 mt-1 select-none">
                  <span>Telemetry Active</span>
                  <span>{exp.metric}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
