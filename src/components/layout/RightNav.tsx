"use client";

import { CheckCircle, Cpu, FileCode, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface StatItem {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  points: number[];
}

const STATS: StatItem[] = [
  {
    label: "Projects Completed",
    value: "12+",
    icon: CheckCircle,
    color: "#22D3EE", // Cyan
    points: [10, 15, 8, 22, 14, 30, 25, 35]
  },
  {
    label: "Systems Built",
    value: "8+",
    icon: Cpu,
    color: "#8B5CF6", // Purple
    points: [5, 12, 15, 10, 18, 14, 25, 28]
  },
  {
    label: "Lines of Code",
    value: "25K+",
    icon: FileCode,
    color: "#EC4899", // Pink
    points: [15, 20, 18, 30, 24, 38, 32, 45]
  },
  {
    label: "Impact",
    value: "1000+",
    icon: Users,
    color: "#10B981", // Green
    points: [12, 28, 24, 45, 38, 55, 48, 65]
  }
];

export default function RightNav() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Convert points array to SVG path
  const getSvgPath = (points: number[], width: number, height: number) => {
    const maxVal = Math.max(...points);
    const minVal = Math.min(...points);
    const range = maxVal - minVal || 1;
    
    const coords = points.map((p, idx) => {
      const x = (idx / (points.length - 1)) * width;
      const y = height - ((p - minVal) / range) * (height - 6) - 3;
      return `${x},${y}`;
    });

    return `M ${coords.join(" L ")}`;
  };

  return (
    <aside className="fixed top-6 right-6 bottom-6 w-[260px] z-[90] hidden xl:flex flex-col gap-5 p-6 glass-panel rounded-3xl select-none">
      
      {/* Top Title */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <span className="font-mono text-[9px] text-muted-text uppercase tracking-widest">Liquid Stats</span>
        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
      </div>

      {/* Stats Cards Stack */}
      <div className="flex flex-col gap-4 overflow-y-auto pr-1 no-scrollbar my-auto justify-center">
        {STATS.map((stat, idx) => {
          const Icon = stat.icon;
          const svgPath = getSvgPath(stat.points, 100, 30);
          
          return (
            <div 
              key={stat.label}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-2 relative overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]"
            >
              {/* Card Glow Effect */}
              <div 
                className="absolute top-0 right-0 w-16 h-16 blur-2xl rounded-full opacity-10 pointer-events-none"
                style={{ backgroundColor: stat.color }}
              />

              {/* Header details */}
              <div className="flex justify-between items-center z-10">
                <span className="text-[10px] text-muted-text font-medium leading-none">{stat.label}</span>
                <Icon className="w-4 h-4" style={{ color: stat.color }} />
              </div>

              {/* Stat Value + Sparkline */}
              <div className="flex justify-between items-end mt-1 z-10">
                <span className="font-display font-extrabold text-2xl text-text-dark leading-none">
                  {stat.value}
                </span>

                {/* Animated Sparkline */}
                {mounted && (
                  <svg className="w-24 h-8 overflow-visible" fill="none">
                    {/* Shadow line */}
                    <motion.path
                      d={svgPath}
                      stroke={stat.color}
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: idx * 0.2, ease: "easeInOut" }}
                    />
                  </svg>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Status Ticker */}
      <div className="pt-3 border-t border-white/10 flex justify-between items-center text-[8px] font-mono text-muted-text">
        <span>STABLE CONTEXT</span>
        <span>24 FPS</span>
      </div>

    </aside>
  );
}
