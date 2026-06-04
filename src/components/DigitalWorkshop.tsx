"use client";

import { useEffect, useState } from "react";
import { GitCommit, GitBranch, Star, Terminal, RefreshCw } from "lucide-react";
import { GithubIcon as Github } from "@/components/icons";
import { clsx } from "clsx";

interface Commit {
  repo: string;
  hash: string;
  message: string;
  time: string;
}

const FALLBACK_COMMITS: Commit[] = [
  { repo: "vitalguard", hash: "a9c3d4f", message: "feat: compile multi-agent diagnostic graph over vital streams", time: "2 hours ago" },
  { repo: "offline-rag-system", hash: "f8b7e2a", message: "refactor: local Mistral-7B self-hosting parameters via Ollama", time: "1 day ago" },
  { repo: "eventsphere", hash: "d4c6b8e", message: "feat: cryptographic QR ticketing registration workflows", time: "3 days ago" },
  { repo: "rx-plain", hash: "9e5c4a2", message: "fix: asynchronous parsing of medical lab report datasets", time: "5 days ago" },
  { repo: "heimdall", hash: "3f8d9b1", message: "feat: socket network sniffer pipe logs to n8n alerts", time: "1 week ago" }
];

export default function DigitalWorkshop() {
  const [commits] = useState<Commit[]>(FALLBACK_COMMITS);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncTime, setSyncTime] = useState("");

  const triggerSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      const now = new Date().toLocaleTimeString();
      setSyncTime(`Synced at ${now}`);
    }, 1200);
  };

  useEffect(() => {
    const now = new Date().toLocaleTimeString();
    setSyncTime(`Synced at ${now}`);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center py-20 px-6 md:px-12 bg-transparent z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-primary uppercase tracking-widest block">
              {"// Version Control metrics"}
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight select-none">
              DIGITAL WORKSHOP.
            </h2>
          </div>

          <button
            onClick={triggerSync}
            disabled={isSyncing}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-950 text-[10px] font-mono text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors pointer-events-auto select-none"
            data-cursor="CONNECT"
          >
            <RefreshCw className={clsx("w-3 h-3", isSyncing && "animate-spin")} />
            <span>{isSyncing ? "Syncing..." : syncTime || "Sync Logs"}</span>
          </button>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column (Metrics & Languages - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Stats Dashboard Box */}
            <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-950/60 backdrop-blur-sm grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5 p-4 rounded-xl border border-zinc-900 bg-zinc-950/40 select-none">
                <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest">Total Commits</span>
                <span className="font-display text-2xl font-bold text-white tracking-tight">480+</span>
              </div>
              <div className="flex flex-col gap-1.5 p-4 rounded-xl border border-zinc-900 bg-zinc-950/40 select-none">
                <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest">Repositories</span>
                <span className="font-display text-2xl font-bold text-white tracking-tight">18</span>
              </div>
              <div className="flex flex-col gap-1.5 p-4 rounded-xl border border-zinc-900 bg-zinc-950/40 select-none">
                <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest">Active Streak</span>
                <span className="font-display text-2xl font-bold text-accent tracking-tight">24 Days</span>
              </div>
              <div className="flex flex-col gap-1.5 p-4 rounded-xl border border-zinc-900 bg-zinc-950/40 select-none">
                <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest">Total Stars</span>
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-2xl font-bold text-white tracking-tight">12</span>
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500/20" />
                </div>
              </div>
            </div>

            {/* Languages Distribution Box */}
            <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-950/60 backdrop-blur-sm select-none">
              <h3 className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest mb-4">
                Language Allocation Index
              </h3>
              
              <div className="flex flex-col gap-4">
                {/* Horizontal segment progress */}
                <div className="h-2 w-full rounded-full bg-zinc-900 overflow-hidden flex">
                  <div style={{ width: "55%" }} className="h-full bg-primary" title="Python 55%" />
                  <div style={{ width: "20%" }} className="h-full bg-accent" title="JavaScript/TS 20%" />
                  <div style={{ width: "15%" }} className="h-full bg-success" title="Java 15%" />
                  <div style={{ width: "10%" }} className="h-full bg-zinc-500" title="Other 10%" />
                </div>

                {/* Legend list */}
                <div className="grid grid-cols-2 gap-3.5 mt-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                    <span className="font-mono text-xs text-zinc-300">Python</span>
                    <span className="font-mono text-[10px] text-zinc-500 ml-auto">55%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                    <span className="font-mono text-xs text-zinc-300">JS / TS</span>
                    <span className="font-mono text-[10px] text-zinc-500 ml-auto">20%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-success" />
                    <span className="font-mono text-xs text-zinc-300">Java</span>
                    <span className="font-mono text-[10px] text-zinc-500 ml-auto">15%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-500" />
                    <span className="font-mono text-xs text-zinc-300">Shell / HTML</span>
                    <span className="font-mono text-[10px] text-zinc-500 ml-auto">10%</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Terminal Recent Commits - 7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-stretch">
            <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-950/60 backdrop-blur-sm flex flex-col justify-between h-full min-h-[360px]">
              
              {/* Terminal Title */}
              <div className="flex justify-between items-center border-b border-zinc-900 pb-4 mb-4 select-none">
                <div className="flex items-center gap-2 font-mono text-[9px] text-zinc-500">
                  <Terminal className="w-3.5 h-3.5 text-accent" />
                  <span>sikander@digital-workshop:~/repos/log</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest">Live Streams</span>
                </div>
              </div>

              {/* Commits logs container */}
              <div className="flex flex-col gap-3.5 overflow-y-auto max-h-[260px] pr-2 no-scrollbar">
                {commits.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 bg-zinc-900/40 border border-zinc-950 hover:border-zinc-850 hover:bg-zinc-900/60 rounded-xl transition-all duration-300 group"
                  >
                    <GitCommit className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-1 w-full">
                      <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-2 font-mono text-[10px] tracking-wide">
                          <span className="text-white font-bold group-hover:text-accent transition-colors duration-300">
                            {c.repo}
                          </span>
                          <span className="text-zinc-600 font-normal">/</span>
                          <span className="text-zinc-500 flex items-center gap-0.5 bg-zinc-950 px-1.5 py-0.5 rounded text-[8px]">
                            <GitBranch className="w-2.5 h-2.5 shrink-0" />
                            {c.hash}
                          </span>
                        </div>
                        <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest shrink-0">
                          {c.time}
                        </span>
                      </div>
                      <p className="font-mono text-[11px] text-zinc-400 leading-relaxed truncate group-hover:text-zinc-300">
                        {c.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer status link */}
              <div className="mt-6 border-t border-zinc-900 pt-4 flex justify-between items-center select-none">
                <a
                  href="https://github.com/Sikander-18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-[10px] text-zinc-400 hover:text-white uppercase tracking-widest font-bold transition-colors"
                  data-cursor="BUILD"
                >
                  <Github className="w-4 h-4" />
                  <span>Inspect Main Profile</span>
                </a>
                <span className="font-mono text-[8px] text-zinc-650 uppercase tracking-widest">
                  System buffer: cached fallback active
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Contribution Map Layout */}
        <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-sm select-none overflow-hidden">
          <h3 className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest mb-4">
            Heatmap Activity Matrix // Year 2026
          </h3>
          
          {/* Scrollable grid container for small displays */}
          <div className="overflow-x-auto w-full no-scrollbar pb-1">
            <div className="flex gap-[3px] min-w-[700px] justify-between">
              {Array.from({ length: 53 }).map((_, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-[3px]">
                  {Array.from({ length: 7 }).map((_, rowIdx) => {
                    // Pick a random shade of green or grey
                    // Weight towards zero contribution (grey) and low contribution (light green)
                    const rand = Math.random();
                    let color = "bg-zinc-900"; // zero
                    if (rand > 0.88) color = "bg-primary"; // High
                    else if (rand > 0.72) color = "bg-primary/60"; // Med
                    else if (rand > 0.45) color = "bg-primary/20"; // Low
                    
                    return (
                      <div
                        key={rowIdx}
                        className={clsx("w-[8px] h-[8px] rounded-[1px] transition-all duration-300 hover:scale-125 hover:shadow-[0_0_8px_rgba(124,58,237,0.5)]", color)}
                        title={`${Math.floor(Math.random() * 8)} contributions`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
