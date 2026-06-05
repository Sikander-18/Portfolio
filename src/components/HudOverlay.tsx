"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Terminal, Shield } from "lucide-react";
import { clsx } from "clsx";

const Crosshair = ({ className }: { className?: string }) => (
  <svg 
    width="8" 
    height="8" 
    viewBox="0 0 8 8" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={clsx("absolute text-zinc-800 pointer-events-none z-50", className)}
  >
    <path d="M4 0V8M0 4H8" stroke="currentColor" strokeWidth="0.75" />
  </svg>
);

export default function HudOverlay() {
  const pathname = usePathname();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [scrollPercent, setScrollPercent] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [ping, setPing] = useState(12);

  // Tracks cursor coordinates
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Tracks scroll percentage
  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setScrollPercent(0);
        return;
      }
      const scrolled = (window.scrollY / docHeight) * 100;
      setScrollPercent(Math.round(scrolled));
    };

    window.addEventListener("scroll", handleScroll);
    // Initial run
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Uptime/Session running timer
  useEffect(() => {
    const start = performance.now();
    const interval = setInterval(() => {
      const now = performance.now();
      setElapsedTime(Math.round((now - start) / 100) / 10);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Soft ping variations to feel active
  useEffect(() => {
    const interval = setInterval(() => {
      setPing(prev => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = prev + delta;
        return next > 6 && next < 22 ? next : prev;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Background grain noise layer */}
      <div className="grain" aria-hidden="true" />

      {/* Frame border bounds */}
      <div className="fixed inset-3 md:inset-5 border border-zinc-900/40 pointer-events-none z-40 select-none">
        
        {/* Four Corner Crosshairs */}
        <Crosshair className="-top-1 -left-1" />
        <Crosshair className="-top-1 -right-1" />
        <Crosshair className="-bottom-1 -left-1" />
        <Crosshair className="-bottom-1 -right-1" />

        {/* Top Header Labels (HUD style) */}
        <div className="absolute top-3 left-4 hidden md:flex items-center gap-3 font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
          <Shield className="w-3 h-3 text-primary/70" />
          <span>secure_tunnel // active</span>
        </div>

        <div className="absolute top-3 right-4 hidden md:flex items-center gap-2 font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
          <Terminal className="w-3 h-3 text-accent/70" />
          <span>sys_loc: mumbai_in</span>
        </div>

        {/* Bottom Metrics HUD status bars */}
        <div className="absolute -bottom-4 md:bottom-2 left-4 right-4 flex justify-between items-center z-50">
          
          {/* Coordinates HUD Column */}
          <div className="flex gap-4 font-mono text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-widest bg-background/80 px-2 py-0.5 rounded backdrop-blur-sm border border-zinc-950 pointer-events-auto">
            <span className="hidden sm:inline">Cursor:</span>
            <span>X:{coords.x}px</span>
            <span>Y:{coords.y}px</span>
          </div>

          {/* Uptime & Uptime Stats Column */}
          <div className="flex gap-4 font-mono text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-widest bg-background/80 px-2 py-0.5 rounded backdrop-blur-sm border border-zinc-950 pointer-events-auto">
            <span>Scroll:{scrollPercent}%</span>
            <span>Time:{elapsedTime.toFixed(1)}s</span>
          </div>

          {/* Simulated Branch Metrics ticker */}
          <div className="hidden sm:flex gap-4 font-mono text-[9px] text-zinc-500 uppercase tracking-widest bg-background/80 px-2 py-0.5 rounded backdrop-blur-sm border border-zinc-950">
            <span>git:main</span>
            <span>ping:{ping}ms</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-success animate-pulse" />
              <span>vrc:OK</span>
            </span>
          </div>

        </div>

      </div>
    </>
  );
}
