"use client";

import { motion } from "framer-motion";
import { Hourglass, Milestone, Flag } from "lucide-react";

interface RoadmapItem {
  name: string;
  category: string;
  description: string;
  stage: string;
  percent: number;
  milestone: string;
}

const ITEMS: RoadmapItem[] = [
  {
    name: "VitalGuard",
    category: "Healthcare + AI",
    description: "AI-powered real-time vital monitoring and automated multi-contact Twilio phone call escalation alerts.",
    stage: "Beta Testing (BLE Telemetry Streams Simulation)",
    percent: 80,
    milestone: "LangGraph reasoning agent nodes and emergency call routing completed."
  },
  {
    name: "EventSphere",
    category: "Event Ecosystem",
    description: "Event administrative dashboard, ticket registration, and cryptographic QR ticket verification client.",
    stage: "Implementing Attendee Registration Flow UI",
    percent: 65,
    milestone: "REST endpoints secure validation and MongoDB database integration complete."
  },
  {
    name: "Trust AI",
    category: "AI Verification",
    description: "Factual grounding evaluator verifying LLM outputs against context inputs to spot hallucinations.",
    stage: "Concept Research & Reference Evaluation Testing",
    percent: 35,
    milestone: "Formulated grounding metrics equations and mathematical similarity index tests."
  }
];

export default function CurrentlyBuilding() {
  return (
    <section className="relative min-h-[80vh] w-full flex items-center py-20 px-6 md:px-12 bg-transparent z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-primary uppercase tracking-widest block">
            {"// Active Roadmap"}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight select-none">
            CURRENTLY BUILDING.
          </h2>
        </div>

        {/* Roadmap Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ITEMS.map((item) => (
            <div
              key={item.name}
              className="relative p-6 rounded-2xl border border-zinc-900 bg-zinc-950/60 backdrop-blur-md flex flex-col justify-between min-h-[360px] select-none hover:border-zinc-800 transition-all duration-300"
            >
              <div className="flex flex-col gap-5">
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                      {item.category}
                    </span>
                    <h3 className="font-display text-lg font-bold text-white mt-0.5">
                      {item.name}
                    </h3>
                  </div>

                  <span className="flex items-center gap-1 font-mono text-[9px] text-accent">
                    <Hourglass className="w-3 h-3 animate-spin" />
                    <span>In Progress</span>
                  </span>
                </div>

                {/* Description */}
                <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Progress bar info */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between font-mono text-[9px] leading-none text-zinc-500">
                    <span>BUILD INDEX</span>
                    <span className="text-white font-bold">{item.percent}%</span>
                  </div>
                  {/* Outer bar */}
                  <div className="relative w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                    {/* Inner animating progress */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Stage & Milestones details */}
              <div className="mt-8 pt-4 border-t border-zinc-900/60 flex flex-col gap-3">
                <div className="flex items-start gap-2.5">
                  <Milestone className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest leading-none">Current Phase</span>
                    <span className="font-sans text-[11px] text-zinc-300 mt-1 leading-normal font-semibold">
                      {item.stage}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Flag className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest leading-none">Latest Milestone</span>
                    <span className="font-sans text-[11px] text-zinc-400 mt-1 leading-normal italic">
                      {item.milestone}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
