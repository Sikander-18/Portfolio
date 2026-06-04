"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

const STAGES = [
  { text: "INITIALIZING SIKANDER.EXE", duration: 600 },
  { text: "Loading Curiosity...", duration: 800 },
  { text: "Loading Mathematics...", duration: 700 },
  { text: "Loading Code...", duration: 800 },
  { text: "Loading Artificial Intelligence...", duration: 700 },
  { text: "Building Systems...", duration: 600 },
];

export default function Loader({ onComplete }: LoaderProps) {
  const [currentStage, setCurrentStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Generate pseudo-terminal logs in background
    const logPool = [
      "sys.mem.heap_alloc : OK",
      "import tensorflow as tf : loaded",
      "vector_store.chromadb.init() : Success",
      "langgraph.compile() : Done",
      "twilio.connect_client() : Active",
      "ollama.start_local_model('mistral-7b') : Online",
      "sec.crypto.qr_generation : Enabled",
      "nlp.parse_medical_reports : Running",
      "opt.queue_telemetry.init : Ready",
    ];

    const logInterval = setInterval(() => {
      if (isFinished) return;
      const randomLog = logPool[Math.floor(Math.random() * logPool.length)];
      const timestamp = new Date().toISOString().split("T")[1].slice(0, -1);
      setLogs((prev) => [...prev.slice(-6), `[${timestamp}] ${randomLog}`]);
    }, 350);

    return () => clearInterval(logInterval);
  }, [isFinished]);

  useEffect(() => {
    let stageIndex = 0;

    const runStage = () => {
      if (stageIndex >= STAGES.length) {
        setIsFinished(true);
        setTimeout(() => {
          onComplete();
        }, 800); // Allow collapse animation to complete
        return;
      }

      setCurrentStage(stageIndex);
      const stage = STAGES[stageIndex];

      // Animate progress up to stage target
      const targetProgress = Math.floor(((stageIndex + 1) / STAGES.length) * 100);
      const increment = (targetProgress - progress) / (stage.duration / 30);
      
      let currentProg = progress;
      const progressInterval = setInterval(() => {
        currentProg += increment;
        if (currentProg >= targetProgress) {
          currentProg = targetProgress;
          clearInterval(progressInterval);
          
          // Move to next stage
          stageIndex++;
          setTimeout(runStage, 100);
        }
        setProgress(Math.floor(currentProg));
      }, 30);
    };

    runStage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            scaleY: 0,
            opacity: 0,
            transition: { duration: 0.65, ease: [0.85, 0, 0.15, 1] } 
          }}
          className="fixed inset-0 z-[10000] flex flex-col justify-between bg-[#050505] p-8 md:p-16 select-none origin-center"
        >
          {/* Top header status bar */}
          <div className="flex justify-between items-center font-mono text-[10px] text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-4">
            <div>Sikander Prajapati &bull; Core Systems Boot</div>
            <div className="animate-pulse flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span>Active Terminal Session</span>
            </div>
          </div>

          {/* Main loader panel */}
          <div className="max-w-md w-full mx-auto flex flex-col gap-6 md:gap-8 my-auto">
            {/* Stage Title */}
            <div className="flex flex-col gap-2">
              <div className="font-mono text-[10px] text-primary uppercase tracking-widest leading-none">
                System Boot Sequence
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-wide">
                {STAGES[currentStage]?.text || "BOOT COMPLETE"}
              </h2>
            </div>

            {/* Progress bar */}
            <div className="relative w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent rounded-full"
                style={{ width: `${progress}%` }}
                layoutId="loader-progress"
              />
            </div>

            {/* Metrics */}
            <div className="flex justify-between items-center font-mono text-xs">
              <span className="text-zinc-500">Progress:</span>
              <span className="text-accent font-bold tracking-widest">{progress}%</span>
            </div>
          </div>

          {/* Bottom terminal logs log window */}
          <div className="border-t border-zinc-900 pt-6 flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-start md:items-end">
            <div className="font-mono text-[9px] text-zinc-600 flex flex-col gap-1 w-full max-w-lg overflow-hidden h-[90px]">
              {logs.map((log, i) => (
                <div key={i} className="truncate select-none leading-relaxed">
                  {log}
                </div>
              ))}
            </div>
            
            <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest select-none shrink-0">
              CURIOSITY // MATHEMATICS // CODE // SYSTEMS
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
