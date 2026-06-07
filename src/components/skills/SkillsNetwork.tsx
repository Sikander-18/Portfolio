"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, Network, Globe } from "lucide-react";

interface Node {
  id: string;
  label: string;
  type: "center" | "category" | "skill";
  x: number; // 0-800 scale
  y: number; // 0-500 scale
  category?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface Connection {
  from: string;
  to: string;
}

const NODES: Node[] = [
  // Center
  { id: "sikander", label: "SIKANDER", type: "center", x: 400, y: 250, icon: Network },

  // Categories
  { id: "cat-ai", label: "AI & ML", type: "category", x: 240, y: 160, category: "ai", icon: Cpu },
  { id: "cat-web", label: "Web Stack", type: "category", x: 560, y: 160, category: "web", icon: Globe },
  { id: "cat-lang", label: "Languages", type: "category", x: 240, y: 340, category: "lang", icon: Terminal },
  { id: "cat-tools", label: "Tools", type: "category", x: 560, y: 340, category: "tools", icon: Network },

  // AI & ML Skills
  { id: "pytorch", label: "PyTorch", type: "skill", x: 100, y: 80, category: "ai" },
  { id: "tensorflow", label: "TensorFlow", type: "skill", x: 240, y: 60, category: "ai" },
  { id: "sklearn", label: "Scikit-Learn", type: "skill", x: 380, y: 90, category: "ai" },
  { id: "opencv", label: "OpenCV", type: "skill", x: 100, y: 180, category: "ai" },

  // Web Stack Skills
  { id: "nextjs", label: "Next.js", type: "skill", x: 700, y: 80, category: "web" },
  { id: "react", label: "React", type: "skill", x: 560, y: 60, category: "web" },
  { id: "fastapi", label: "FastAPI", type: "skill", x: 420, y: 90, category: "web" },
  { id: "nodejs", label: "Node.js", type: "skill", x: 700, y: 180, category: "web" },
  { id: "tailwind", label: "Tailwind", type: "skill", x: 580, y: 240, category: "web" },

  // Languages Skills
  { id: "python", label: "Python", type: "skill", x: 80, y: 320, category: "lang" },
  { id: "java", label: "Java", type: "skill", x: 160, y: 440, category: "lang" },
  { id: "js", label: "JavaScript", type: "skill", x: 300, y: 440, category: "lang" },
  { id: "sql", label: "SQL", type: "skill", x: 100, y: 420, category: "lang" },

  // Tools Skills
  { id: "git", label: "Git", type: "skill", x: 720, y: 320, category: "tools" },
  { id: "docker", label: "Docker", type: "skill", x: 640, y: 440, category: "tools" },
  { id: "linux", label: "Linux", type: "skill", x: 500, y: 440, category: "tools" },
  { id: "github", label: "GitHub", type: "skill", x: 700, y: 420, category: "tools" },
];

const CONNECTIONS: Connection[] = [
  // Categories to Center
  { from: "sikander", to: "cat-ai" },
  { from: "sikander", to: "cat-web" },
  { from: "sikander", to: "cat-lang" },
  { from: "sikander", to: "cat-tools" },

  // AI skills
  { from: "cat-ai", to: "pytorch" },
  { from: "cat-ai", to: "tensorflow" },
  { from: "cat-ai", to: "sklearn" },
  { from: "cat-ai", to: "opencv" },

  // Web skills
  { from: "cat-web", to: "nextjs" },
  { from: "cat-web", to: "react" },
  { from: "cat-web", to: "fastapi" },
  { from: "cat-web", to: "nodejs" },
  { from: "cat-web", to: "tailwind" },

  // Languages skills
  { from: "cat-lang", to: "python" },
  { from: "cat-lang", to: "java" },
  { from: "cat-lang", to: "js" },
  { from: "cat-lang", to: "sql" },

  // Tools skills
  { from: "cat-tools", to: "git" },
  { from: "cat-tools", to: "docker" },
  { from: "cat-tools", to: "linux" },
  { from: "cat-tools", to: "github" },
];

export default function SkillsNetwork() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Determine if a node or connection is active based on hover state
  const isNodeActive = (nodeId: string) => {
    if (!hoveredNode) return true;
    if (hoveredNode === "sikander") return true;
    if (nodeId === hoveredNode) return true;

    const hoverNode = NODES.find((n) => n.id === hoveredNode);
    if (!hoverNode) return false;

    // If hovering a category, activate center, category, and its skills
    if (hoverNode.type === "category") {
      return (
        nodeId === "sikander" ||
        nodeId === hoveredNode ||
        (NODES.find((n) => n.id === nodeId)?.category === hoverNode.category)
      );
    }

    // If hovering a skill, activate center, parent category, and itself
    if (hoverNode.type === "skill") {
      const parentCat = NODES.find((n) => n.type === "category" && n.category === hoverNode.category);
      return nodeId === "sikander" || nodeId === parentCat?.id || nodeId === hoveredNode;
    }

    return false;
  };

  const isConnectionActive = (conn: Connection) => {
    if (!hoveredNode) return true;
    if (hoveredNode === "sikander") return true;

    const hoverNode = NODES.find((n) => n.id === hoveredNode);
    if (!hoverNode) return false;

    // If hovering category, activate all connections linking to center or its skills
    if (hoverNode.type === "category") {
      return (
        (conn.from === "sikander" && conn.to === hoveredNode) ||
        (conn.from === hoveredNode)
      );
    }

    // If hovering skill, activate path from center -> category -> skill
    if (hoverNode.type === "skill") {
      const parentCat = NODES.find((n) => n.type === "category" && n.category === hoverNode.category);
      return (
        (conn.from === "sikander" && conn.to === parentCat?.id) ||
        (conn.from === parentCat?.id && conn.to === hoveredNode)
      );
    }

    return false;
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 w-full max-w-5xl relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-16 flex flex-col gap-4">
          <span className="font-mono text-[10px] text-primary-purple uppercase tracking-widest font-bold">
            Skill Landscape
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-text-dark leading-tight tracking-tight">
            System Architecture
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-purple to-soft-pink mx-auto rounded-full mt-2" />
          <p className="text-muted-text text-sm md:text-base font-sans mt-4 leading-relaxed">
            Hover over nodes in the neural cluster to inspect my technology stacks and pipeline competencies.
          </p>
        </div>

        {/* Scalable Neural Canvas */}
        <div className="relative w-full max-w-[850px] mx-auto aspect-[85/50] rounded-3xl glass-panel border border-white/40 p-4 shadow-xl overflow-hidden pointer-events-auto">
          
          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 850 500" fill="none">
            {CONNECTIONS.map((conn, idx) => {
              const fromNode = NODES.find((n) => n.id === conn.from);
              const toNode = NODES.find((n) => n.id === conn.to);
              if (!fromNode || !toNode) return null;

              const active = isConnectionActive(conn);

              return (
                <g key={idx}>
                  {/* Glowing layer */}
                  {active && (
                    <line
                      x1={fromNode.x}
                      y1={fromNode.y}
                      x2={toNode.x}
                      y2={toNode.y}
                      stroke={fromNode.type === "center" ? "#8B5CF6" : "#22D3EE"}
                      strokeWidth={4}
                      strokeLinecap="round"
                      className="opacity-20 blur-[3px] transition-all duration-300"
                    />
                  )}
                  {/* Base layer */}
                  <line
                    x1={fromNode.x}
                    y1={fromNode.y}
                    x2={toNode.x}
                    y2={toNode.y}
                    stroke={active ? "#8B5CF6" : "rgba(139, 92, 246, 0.12)"}
                    strokeWidth={active ? 2 : 1}
                    strokeDasharray={active ? "none" : "4 4"}
                    strokeLinecap="round"
                    className="transition-all duration-300"
                  />
                </g>
              );
            })}
          </svg>

          {/* Interactive HTML Node Badges (Scaled with Container) */}
          <div className="absolute inset-0 z-10 w-full h-full select-none">
            {NODES.map((node) => {
              const active = isNodeActive(node.id);
              const isCenter = node.type === "center";
              const isCategory = node.type === "category";

              // Map Node Styles
              let sizeClass = "px-3 py-1.5 text-[10px] text-muted-text bg-white/45 border-white/45 hover:bg-white/70";
              if (isCenter) {
                sizeClass = "px-6 py-3.5 text-xs font-extrabold text-white bg-gradient-to-tr from-primary-purple to-soft-pink border-white/20 shadow-md";
              } else if (isCategory) {
                sizeClass = "px-4 py-2.5 text-[11px] font-bold text-text-dark bg-white/75 border-white/60 shadow-sm";
              }

              return (
                <div
                  key={node.id}
                  style={{
                    left: `${(node.x / 850) * 100}%`,
                    top: `${(node.y / 500) * 100}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`absolute rounded-2xl border transition-all duration-300 cursor-pointer flex items-center gap-1.5 font-mono select-none pointer-events-auto ${sizeClass} ${
                    active ? "opacity-100 scale-105" : "opacity-25 scale-95"
                  }`}
                  data-cursor="CONNECT"
                >
                  {node.icon && <node.icon className={`w-3.5 h-3.5 ${isCenter ? "text-white animate-pulse" : "text-primary-purple"}`} />}
                  <span>{node.label}</span>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
