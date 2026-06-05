"use client";

import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";

interface ProjectPreview {
  title: string;
  desc: string;
  layout: string;
  tags: string[];
}

const PROJECT_PREVIEWS: Record<string, ProjectPreview> = {
  "vitalguard": {
    title: "VitalGuard Core",
    desc: "AI Vitals Reasoning Engine",
    layout: `┌─[ Vitals Stream ]─┐
│ [ Graph Reasoning ] │
└─────────┬───────────┘
          ▼
   [ Twilio Alert ]`,
    tags: ["LangGraph", "Twilio API"]
  },
  "offline-rag": {
    title: "Offline RAG Core",
    desc: "Local Mistral Sandbox",
    layout: `┌──[ Document Q&A ]──┐
│  [ Vector Store ]  │
│  [ Local LLM Core ] │
└────────────────────┘`,
    tags: ["Ollama", "ChromaDB"]
  },
  "eventsphere": {
    title: "EventSphere",
    desc: "Cryptographic Ticketing",
    layout: `┌─[ Secure Register ]─┐
│   [ QR Ticket Gen ]  │
└─────────┬───────────┘
          ▼
  [ Instant Check-In ]`,
    tags: ["Express", "MongoDB"]
  },
  "rx-plain": {
    title: "Rx-Plain Parser",
    desc: "Bio-Medical Timeline Engine",
    layout: `┌─[ Biomedical PDF ]─┐
│  [ Longitudinal ]  │
│    [ Grid View ]   │
└────────────────────┘`,
    tags: ["Python", "NLP"]
  },
  "heimdall": {
    title: "Heimdall Agent",
    desc: "Socket Sniffer & Alerts",
    layout: `┌─[ Socket Sniffer ]─┐
│  [ n8n Automation ] │
└─────────┬───────────┘
          ▼
   [ Trigger Flags ]`,
    tags: ["Docker", "n8n"]
  },
  "skipq": {
    title: "SkipQ Telemetry",
    desc: "Queue Delay Optimizer",
    layout: `┌─[ Patient Queues ]─┐
│   [ Routing Engine ] │
└─────────┬───────────┘
          ▼
     [ SMS Alerts ]`,
    tags: ["Spring Boot", "Java"]
  },
  "trust-ai": {
    title: "Trust AI Verify",
    desc: "Hallucination Validator",
    layout: `┌──[ Grounding Text ]──┐
│  [ Hallucination ]   │
│    [ Evaluation ]    │
└──────────────────────┘`,
    tags: ["PyTorch", "Next.js"]
  }
};

export default function CustomCursor() {
  const cursorRingRef = useRef<HTMLDivElement | null>(null);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);

  const [label, setLabel] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<ProjectPreview | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Track cursor position
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device supports hover interactions (not touch-only)
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    setIsVisible(true);
    document.documentElement.classList.add("custom-cursor-active");

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Dynamic hover listeners for cursor state modification
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Look up target or closest ancestor with data-cursor attributes
      const cursorEl = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorEl) {
        const val = cursorEl.getAttribute("data-cursor");
        setLabel(val);
        setIsHovered(true);

        const projectSlug = cursorEl.getAttribute("data-project-slug");
        if (projectSlug && PROJECT_PREVIEWS[projectSlug]) {
          setActiveProject(PROJECT_PREVIEWS[projectSlug]);
        } else {
          setActiveProject(null);
        }
      } else {
        setLabel(null);
        setIsHovered(false);
        setActiveProject(null);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    // Frame animation loop
    let rafId: number;
    const animate = () => {
      // Ring follows dot with a linear interpolation (lerp)
      const lerpFactor = 0.15;
      ring.current.x += (mouse.current.x - ring.current.x) * lerpFactor;
      ring.current.y += (mouse.current.y - ring.current.y) * lerpFactor;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (previewRef.current) {
        previewRef.current.style.transform = `translate3d(${mouse.current.x + 24}px, ${mouse.current.y + 24}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };
    
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring (trailing) */}
      <div
        ref={cursorRingRef}
        className={clsx(
          "fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/40 pointer-events-none z-[9999] transition-[width,height,border-color,background-color] duration-300 ease-out flex items-center justify-center overflow-hidden",
          isHovered 
            ? "w-14 h-14 border-accent bg-accent/15 backdrop-blur-[1px]" 
            : "w-8 h-8 bg-transparent"
        )}
        style={{
          transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
        }}
      >
        {label && (
          <span className="text-[9px] font-mono font-bold tracking-widest text-accent uppercase animate-fade-in select-none">
            {label}
          </span>
        )}
      </div>

      {/* Inner dot (exact tracking) */}
      <div
        ref={cursorDotRef}
        className={clsx(
          "fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-accent pointer-events-none z-[10000] transition-transform duration-100",
          isHovered && "scale-[0.5] opacity-50"
        )}
        style={{
          transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
        }}
      />

      {/* Floating project preview card */}
      <div
        ref={previewRef}
        className={clsx(
          "fixed top-0 left-0 pointer-events-none z-[9998] p-4 rounded-xl bg-zinc-950/90 border border-zinc-850 backdrop-blur-md flex flex-col gap-2.5 w-60 shadow-2xl transition-all duration-300 ease-out origin-top-left",
          activeProject ? "scale-100 opacity-100" : "scale-75 opacity-0"
        )}
        style={{
          transform: "translate3d(-500px, -500px, 0)"
        }}
      >
        {activeProject && (
          <>
            <div className="flex flex-col gap-0.5 select-none">
              <span className="font-mono text-[8px] text-accent uppercase tracking-widest font-semibold leading-none">system_blueprint</span>
              <span className="font-display text-sm font-bold text-white tracking-wide">{activeProject.title}</span>
              <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest leading-none mt-0.5">{activeProject.desc}</span>
            </div>

            {/* Simulated Architecture Map */}
            <pre className="font-mono text-[9px] text-zinc-400 bg-zinc-900/40 p-2 rounded-lg border border-zinc-900 leading-snug select-none">
              {activeProject.layout}
            </pre>

            <div className="flex flex-wrap gap-1 mt-0.5 select-none">
              {activeProject.tags.map(tag => (
                <span key={tag} className="font-mono text-[7px] text-zinc-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
