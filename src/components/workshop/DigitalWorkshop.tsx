"use client";

import { motion } from "framer-motion";
import { Star, GitFork, BookMarked, Activity } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";

interface Repo {
  name: string;
  desc: string;
  lang: string;
  langColor: string;
  stars: number;
  forks: number;
}

const FEATURED_REPOS: Repo[] = [
  {
    name: "vitalguard-core",
    desc: "AI-based medical image diagnostic core. Fine-tuned PyTorch CNN models optimized with TensorRT pipeline.",
    lang: "Python",
    langColor: "#3572A5",
    stars: 18,
    forks: 4
  },
  {
    name: "eventsphere-api",
    desc: "Event ticket ledger broker backend. Asynchronous middleware engine handling booking checkout pipelines.",
    lang: "JavaScript",
    langColor: "#f1e05a",
    stars: 12,
    forks: 2
  }
];

// Generate mock contribution heatmap data (52 weeks x 7 days)
const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const ACTIVITY_LEVELS = [0, 1, 2, 3, 4];

export default function DigitalWorkshop() {
  const [heatmap, setHeatmap] = useState<number[][]>([]);

  useEffect(() => {
    // Generate a static grid to prevent hydration mismatches
    const grid: number[][] = [];
    for (let day = 0; day < 7; day++) {
      const row: number[] = [];
      for (let week = 0; week < 38; week++) {
        // Bias middle weeks and days to have higher contributions
        const randomBias = Math.random() * 5;
        let val = 0;
        if (randomBias > 3.8) val = 4;
        else if (randomBias > 2.8) val = 3;
        else if (randomBias > 1.8) val = 2;
        else if (randomBias > 0.8) val = 1;
        row.push(val);
      }
      grid.push(row);
    }
    setHeatmap(grid);
  }, []);

  const getHeatmapColor = (level: number) => {
    switch (level) {
      case 1: return "bg-[#DCD8FF]";
      case 2: return "bg-[#B4ABFF]";
      case 3: return "bg-[#8B5CF6]";
      case 4: return "bg-[#7C3AED]";
      default: return "bg-[#ECEAFF]";
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <span className="font-mono text-[9px] text-muted-text uppercase tracking-widest pl-2 mb-1 text-left block">
        Digital Workshop Telemetry
      </span>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Panel: GitHub Matrix & Contribution Feed */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* Heatmap Widget */}
          <div className="p-5 rounded-2xl glass-panel border border-white/40 flex flex-col gap-4 text-left shadow-lg">
            <div className="flex justify-between items-center pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <FaGithub className="w-4 h-4 text-primary-purple" />
                <span className="font-display font-extrabold text-sm text-text-dark">
                  Sikander-18 / Contributions Matrix
                </span>
              </div>
              <span className="font-mono text-[9px] text-muted-text">1,420 Commits This Year</span>
            </div>

            {/* Heatmap Scroll Container */}
            <div className="overflow-x-auto no-scrollbar w-full py-1">
              <div className="flex gap-2 min-w-[500px]">
                {/* Y-Axis Label */}
                <div className="flex flex-col justify-between text-[8px] font-mono text-muted-text h-24 pt-1 select-none">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>
                
                {/* Grid matrix */}
                <div className="flex flex-col gap-1 flex-1 justify-center">
                  {heatmap.map((row, rIdx) => (
                    <div key={rIdx} className="flex gap-1">
                      {row.map((level, cIdx) => (
                        <div
                          key={cIdx}
                          className={`w-2.5 h-2.5 rounded-sm transition-all duration-300 hover:scale-125 hover:z-10 cursor-pointer ${getHeatmapColor(level)}`}
                          title={`${level > 0 ? level * 3 : 0} commits`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Legend info */}
            <div className="flex justify-between items-center text-[8px] font-mono text-muted-text select-none">
              <span>Learn more at GitHub.com/Sikander-18</span>
              <div className="flex items-center gap-1">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-sm bg-[#ECEAFF]" />
                <span className="w-2.5 h-2.5 rounded-sm bg-[#DCD8FF]" />
                <span className="w-2.5 h-2.5 rounded-sm bg-[#B4ABFF]" />
                <span className="w-2.5 h-2.5 rounded-sm bg-[#8B5CF6]" />
                <span className="w-2.5 h-2.5 rounded-sm bg-[#7C3AED]" />
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Featured Repos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FEATURED_REPOS.map((repo, rIdx) => (
              <a
                key={repo.name}
                href="https://github.com/Sikander-18"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl glass-panel border border-white/40 flex flex-col gap-3 text-left shadow-lg pointer-events-auto transition-all duration-300 hover:scale-[1.01] hover:bg-white/20"
                data-cursor="BUILD"
              >
                <div className="flex items-center gap-2 text-primary-purple">
                  <BookMarked className="w-4 h-4" />
                  <span className="font-display font-extrabold text-sm text-text-dark">
                    {repo.name}
                  </span>
                </div>
                <p className="text-muted-text text-xs leading-relaxed flex-1">
                  {repo.desc}
                </p>
                <div className="flex items-center gap-4 text-[9px] font-mono text-muted-text mt-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: repo.langColor }} />
                    <span>{repo.lang}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5" />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" />
                    <span>{repo.forks}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>

        {/* Right Panel: Code Diagnostics & Analytics */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Language distribution card */}
          <div className="p-5 rounded-2xl glass-panel border border-white/40 flex flex-col gap-4 text-left shadow-lg flex-1">
            <span className="font-mono text-[9px] text-muted-text uppercase tracking-widest border-b border-white/10 pb-2">
              Language Diagnostics
            </span>
            
            <div className="flex flex-col gap-4 my-auto justify-center">
              {/* Python */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-[10px] font-mono font-bold text-text-dark">
                  <span>Python (AI/FastAPI)</span>
                  <span>45%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/20 overflow-hidden border border-white/30">
                  <div className="h-full bg-gradient-to-r from-primary-purple to-soft-pink rounded-full w-[45%]" />
                </div>
              </div>

              {/* JS/TS */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-[10px] font-mono font-bold text-text-dark">
                  <span>JavaScript/TypeScript</span>
                  <span>30%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/20 overflow-hidden border border-white/30">
                  <div className="h-full bg-gradient-to-r from-soft-pink to-electric-cyan rounded-full w-[30%]" />
                </div>
              </div>

              {/* SQL */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-[10px] font-mono font-bold text-text-dark">
                  <span>SQL</span>
                  <span>15%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/20 overflow-hidden border border-white/30">
                  <div className="h-full bg-gradient-to-r from-electric-cyan to-primary-purple rounded-full w-[15%]" />
                </div>
              </div>

              {/* Java */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-[10px] font-mono font-bold text-text-dark">
                  <span>Java (Core Data Structure)</span>
                  <span>10%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/20 overflow-hidden border border-white/30">
                  <div className="h-full bg-[#3572A5] rounded-full w-[10%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Activity Feed log ticker */}
          <div className="p-5 rounded-2xl glass-panel border border-white/40 flex flex-col gap-3 text-left shadow-lg max-h-[160px] overflow-hidden">
            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              <Activity className="w-4 h-4 text-emerald-500 animate-pulse" />
              <span className="font-mono text-[9px] text-muted-text uppercase tracking-widest">
                Activity Logs
              </span>
            </div>
            <div className="flex flex-col gap-2 font-mono text-[9px] text-text-dark/95 leading-relaxed overflow-y-auto no-scrollbar">
              <div className="flex gap-1.5">
                <span className="text-[#8B5CF6] font-bold">&gt;</span>
                <span>Pushed 4 commits to vitalguard-core/main</span>
              </div>
              <div className="flex gap-1.5">
                <span className="text-[#8B5CF6] font-bold">&gt;</span>
                <span>Indexed EventSphere schema metrics</span>
              </div>
              <div className="flex gap-1.5">
                <span className="text-[#8B5CF6] font-bold">&gt;</span>
                <span>Configured docker compose testing rigs</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
