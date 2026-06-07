"use client";

import { motion } from "framer-motion";

interface ProjectProgress {
  name: string;
  desc: string;
  stage: string;
  progress: number;
  milestone: string;
  color: string;
}

const CURRENTLY_BUILDING: ProjectProgress[] = [
  {
    name: "VitalGuard",
    desc: "AI-based immediate thoracic screening assistant model.",
    stage: "Model Fine-tuning & ROC Optimization",
    progress: 75,
    milestone: "Achieved 94.2% diagnostic validation accuracy on validation set.",
    color: "#22D3EE" // Cyan
  },
  {
    name: "EventSphere",
    desc: "Scale check-in app and payment ecosystems.",
    stage: "Middleware Integrations & QR Signature checking",
    progress: 85,
    milestone: "Completed websocket check-in broker with <200ms roundtrip latency.",
    color: "#8B5CF6" // Purple
  },
  {
    name: "Trust AI",
    desc: "Fact checking and hallucination checking evaluator for open-source AI models.",
    stage: "Semantic Engine Research",
    progress: 35,
    milestone: "Drafted fact-checking distance evaluation scoring equations.",
    color: "#F59E0B" // Orange/Gold
  }
];

export default function CurrentlyBuilding() {
  return (
    <div className="flex flex-col gap-6">
      <span className="font-mono text-[9px] text-muted-text uppercase tracking-widest pl-2 mb-1 text-left block">
        Current Development Pipelines
      </span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CURRENTLY_BUILDING.map((item, idx) => {
          const radius = 32;
          const stroke = 3.5;
          const circumference = 2 * Math.PI * radius;
          const strokeDashoffset = circumference - (item.progress / 100) * circumference;

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-5 rounded-2xl glass-panel border border-white/40 flex flex-col gap-4 text-left shadow-lg relative overflow-hidden transition-all duration-300 hover:scale-[1.01]"
            >
              {/* Background Glow */}
              <div 
                className="absolute top-0 right-0 w-16 h-16 rounded-full blur-2xl opacity-10 pointer-events-none"
                style={{ backgroundColor: item.color }}
              />

              {/* Card Header: Title & Progress Ring */}
              <div className="flex justify-between items-center z-10 relative">
                <div className="flex flex-col">
                  <h4 className="font-display font-extrabold text-base text-text-dark">
                    {item.name}
                  </h4>
                  <span className="font-mono text-[8px] text-muted-text uppercase tracking-wider mt-0.5">
                    Stage: {item.stage}
                  </span>
                </div>

                {/* Progress Ring SVG */}
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 80 80">
                    <circle
                      cx="40"
                      cy="40"
                      r={radius}
                      fill="transparent"
                      stroke="rgba(139, 92, 246, 0.08)"
                      strokeWidth={stroke}
                    />
                    <motion.circle
                      cx="40"
                      cy="40"
                      r={radius}
                      fill="transparent"
                      stroke={item.color}
                      strokeWidth={stroke}
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      whileInView={{ strokeDashoffset }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="font-mono text-[10px] font-bold text-text-dark select-none">
                    {item.progress}%
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-text text-xs leading-relaxed z-10">
                {item.desc}
              </p>

              {/* Milestone Details */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[10px] text-text-dark font-sans leading-relaxed font-semibold z-10">
                <span className="font-mono text-[8px] text-primary-purple block font-extrabold uppercase tracking-wider mb-0.5">
                  Latest Milestone:
                </span>
                {item.milestone}
              </div>

            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
