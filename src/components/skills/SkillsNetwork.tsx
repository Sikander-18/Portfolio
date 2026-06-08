"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Terminal, Network, Code2, Sigma, Compass, Sparkles } from "lucide-react";

interface Node {
  id: string;
  label: string;
  type: "center" | "category" | "project" | "math-detail" | "explore-detail";
  x: number; // 0-800 scale
  y: number; // 0-500 scale
  category: "center" | "ai" | "software" | "systems" | "math" | "exploration";
  icon?: React.ComponentType<{ className?: string }>;
}

interface Connection {
  from: string;
  to: string;
  category: "ai" | "software" | "systems" | "math" | "exploration";
}

const NODES: Node[] = [
  // Center Node
  { id: "sikander", label: "SIKANDER", type: "center", x: 400, y: 250, category: "center", icon: Network },

  // Category Nodes
  { id: "cat-ai", label: "AI Stack", type: "category", x: 260, y: 160, category: "ai", icon: Cpu },
  { id: "cat-soft", label: "Software Eng.", type: "category", x: 540, y: 160, category: "software", icon: Code2 },
  { id: "cat-sys", label: "Systems Design", type: "category", x: 540, y: 340, category: "systems", icon: Terminal },
  { id: "cat-math", label: "Mathematics", type: "category", x: 260, y: 340, category: "math", icon: Sigma },
  { id: "cat-explore", label: "Exploration", type: "category", x: 400, y: 95, category: "exploration", icon: Compass },

  // Sub-Project / Detail Nodes (Revealed on click)
  // AI Projects
  { id: "proj-vital", label: "VitalGuard", type: "project", x: 100, y: 90, category: "ai" },
  { id: "proj-trust", label: "Trust AI", type: "project", x: 100, y: 210, category: "ai" },

  // Software Projects
  { id: "proj-sphere", label: "EventSphere", type: "project", x: 700, y: 90, category: "software" },
  { id: "proj-skipq", label: "SkipQ", type: "project", x: 700, y: 210, category: "software" },

  // Systems Projects
  { id: "proj-heimdall", label: "Heimdall", type: "project", x: 700, y: 390, category: "systems" },

  // Math Details
  { id: "math-linear", label: "Linear Algebra", type: "math-detail", x: 100, y: 310, category: "math" },
  { id: "math-prob", label: "Probability", type: "math-detail", x: 100, y: 410, category: "math" },
  { id: "math-opt", label: "Optimization", type: "math-detail", x: 230, y: 440, category: "math" },

  // Exploration Details
  { id: "explore-anomaly", label: "Anomaly Hunting", type: "explore-detail", x: 280, y: 40, category: "exploration" },
  { id: "explore-deep", label: "Deep Learning", type: "explore-detail", x: 520, y: 40, category: "exploration" },
];

const CONNECTIONS: Connection[] = [
  // Categories to Center
  { from: "sikander", to: "cat-ai", category: "ai" },
  { from: "sikander", to: "cat-soft", category: "software" },
  { from: "sikander", to: "cat-sys", category: "systems" },
  { from: "sikander", to: "cat-math", category: "math" },
  { from: "sikander", to: "cat-explore", category: "exploration" },

  // AI Sub-nodes
  { from: "cat-ai", to: "proj-vital", category: "ai" },
  { from: "cat-ai", to: "proj-trust", category: "ai" },

  // Software Sub-nodes
  { from: "cat-soft", to: "proj-sphere", category: "software" },
  { from: "cat-soft", to: "proj-skipq", category: "software" },

  // Systems Sub-nodes
  { from: "cat-sys", to: "proj-heimdall", category: "systems" },

  // Math Sub-nodes
  { from: "cat-math", to: "math-linear", category: "math" },
  { from: "cat-math", to: "math-prob", category: "math" },
  { from: "cat-math", to: "math-opt", category: "math" },

  // Exploration Sub-nodes
  { from: "cat-explore", to: "explore-anomaly", category: "exploration" },
  { from: "cat-explore", to: "explore-deep", category: "exploration" },
];

interface CategoryDetail {
  title: string;
  summary: string;
  connections: string;
  color: string;
}

const CATEGORY_DETAILS: Record<string, CategoryDetail> = {
  ai: {
    title: "Artificial Intelligence Stack",
    summary: "Applying neural network architectures, computer vision classifiers, and automated hallucination checkpoints to diagnostic datasets.",
    connections: "Realized in VitalGuard (thoracic CNN models) and Trust AI (evaluating model response semantic distances).",
    color: "#22D3EE"
  },
  software: {
    title: "Software Engineering System",
    summary: "Designing scalable database architectures, sub-second message booking pipelines, and responsive client-side telemetry dashboards.",
    connections: "Realized in EventSphere (relational schemas & check-in gates) and SkipQ (barcode cart simulator).",
    color: "#8B5CF6"
  },
  systems: {
    title: "Systems & Security Design",
    summary: "Monitoring machine networks, packet parsing loops, intrusion detection logging, and containerized deployment pipelines.",
    connections: "Realized in Heimdall (detecting socket packet volumetric anomalies on lightweight servers).",
    color: "#EC4899"
  },
  math: {
    title: "Applied Mathematics Bedrock",
    summary: "Structuring optimization vectors, probability modeling, and applied linear algebra equations to validate system accuracy ratios.",
    connections: "Foundational mathematics power my predictive modeling layers and semantic valuation checker calculations.",
    color: "#F59E0B"
  },
  exploration: {
    title: "Research & Development Exploration",
    summary: "Investigating emerging distributed telemetry standards, system bottleneck profiling, and packet filter anomaly modeling.",
    connections: "Drives active prototyping and experimental feature loops across all development channels.",
    color: "#10B981"
  }
};

export default function SkillsNetwork() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleNodeClick = (node: Node) => {
    if (node.type === "center") {
      setSelectedCategory(null);
      return;
    }
    if (node.type === "category") {
      setSelectedCategory(selectedCategory === node.category ? null : node.category);
    }
  };

  const isNodeVisible = (node: Node) => {
    if (node.type === "center" || node.type === "category") return true;
    return selectedCategory === node.category;
  };

  const isConnectionVisible = (conn: Connection) => {
    const fromNode = NODES.find((n) => n.id === conn.from);
    const toNode = NODES.find((n) => n.id === conn.to);
    if (!fromNode || !toNode) return false;

    if (fromNode.type === "center" && toNode.type === "category") return true;
    return selectedCategory === conn.category;
  };

  const isNodeDimmed = (node: Node) => {
    if (!selectedCategory) return false;
    if (node.category === "center") return false;
    return node.category !== selectedCategory;
  };

  const isConnectionDimmed = (conn: Connection) => {
    if (!selectedCategory) return false;
    return conn.category !== selectedCategory;
  };

  const activeDetail = selectedCategory ? CATEGORY_DETAILS[selectedCategory] : null;

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-transparent">
      
      {/* Background blurs */}
      <div className="absolute top-[20%] right-[-10%] w-[380px] h-[380px] bg-electric-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[380px] h-[380px] bg-soft-pink/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-8 md:px-16 lg:px-24 w-full max-w-[1200px] relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-16 flex flex-col gap-4">
          <span className="font-mono text-[10px] text-primary-purple uppercase tracking-widest font-extrabold flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Map
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-text-dark leading-tight tracking-tight">
            Mission Control
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-purple to-soft-pink mx-auto rounded-full mt-2" />
          <p className="text-muted-text text-sm md:text-base font-sans mt-4 leading-relaxed font-medium">
            Explore how my key focus domains branch out into research concepts and running software applications. Click category nodes to inspect.
          </p>
        </div>

        {/* Interactive Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-[1100px] mx-auto">
          
          {/* Left Panel: SVG Network Core Canvas */}
          <div className="lg:col-span-8 relative aspect-[85/52] w-full rounded-3xl glass-panel border border-white/45 p-4 shadow-xl overflow-hidden pointer-events-auto">
            
            {/* SVG Connection Paths */}
            <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 850 520" fill="none">
              {CONNECTIONS.map((conn, idx) => {
                const fromNode = NODES.find((n) => n.id === conn.from);
                const toNode = NODES.find((n) => n.id === conn.to);
                if (!fromNode || !toNode) return null;

                const visible = isConnectionVisible(conn);
                const dimmed = isConnectionDimmed(conn);
                if (!visible) return null;

                // Color variables
                const colorMap: Record<string, string> = {
                  ai: "#22D3EE",
                  software: "#8B5CF6",
                  systems: "#EC4899",
                  math: "#F59E0B",
                  exploration: "#10B981"
                };
                const color = colorMap[conn.category];

                return (
                  <g key={idx}>
                    {/* Glowing background line path */}
                    <line
                      x1={fromNode.x}
                      y1={fromNode.y}
                      x2={toNode.x}
                      y2={toNode.y}
                      stroke={color}
                      strokeWidth={selectedCategory === conn.category ? 4 : 1.5}
                      strokeLinecap="round"
                      className={`transition-all duration-300 ${
                        selectedCategory === conn.category ? "opacity-30 blur-[2px]" : "opacity-10"
                      } ${dimmed ? "opacity-5" : ""}`}
                    />
                    
                    {/* Dynamic packet line */}
                    <line
                      x1={fromNode.x}
                      y1={fromNode.y}
                      x2={toNode.x}
                      y2={toNode.y}
                      stroke={color}
                      strokeWidth={selectedCategory === conn.category ? 1.8 : 1}
                      strokeLinecap="round"
                      strokeDasharray={selectedCategory === conn.category ? "6 6" : "none"}
                      className={`transition-all duration-300 ${
                        selectedCategory === conn.category 
                          ? "opacity-90 animate-[dash_15s_linear_infinite]" 
                          : "opacity-25"
                      } ${dimmed ? "opacity-5" : ""}`}
                      style={{
                        animation: selectedCategory === conn.category ? "dash 20s linear infinite" : "none"
                      }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Render Nodes */}
            <div className="absolute inset-0 z-10 w-full h-full select-none">
              {NODES.map((node) => {
                const visible = isNodeVisible(node);
                const dimmed = isNodeDimmed(node);
                const isCenter = node.type === "center";
                const isCategory = node.type === "category";

                if (!visible) return null;

                // Custom Styling
                let sizeClass = "px-3.5 py-2 text-[10px] text-muted-text bg-white/40 border-white/40 hover:bg-white/70";
                if (isCenter) {
                  sizeClass = "px-6 py-4 text-xs font-extrabold text-white bg-gradient-to-tr from-primary-purple to-soft-pink border-white/20 shadow-md";
                } else if (isCategory) {
                  const colorMap: Record<string, string> = {
                    ai: "shadow-cyan-200/25 border-cyan-300/60 bg-cyan-50/70 hover:bg-cyan-100/80",
                    software: "shadow-purple-200/25 border-purple-300/60 bg-purple-50/70 hover:bg-purple-100/80",
                    systems: "shadow-pink-200/25 border-pink-300/60 bg-pink-50/70 hover:bg-pink-100/80",
                    math: "shadow-amber-200/25 border-amber-300/60 bg-amber-50/70 hover:bg-amber-100/80",
                    exploration: "shadow-emerald-200/25 border-emerald-300/60 bg-emerald-50/70 hover:bg-emerald-100/80"
                  };
                  sizeClass = `px-4.5 py-3 text-[11px] font-bold text-text-dark border shadow-sm ${colorMap[node.category]}`;
                }

                const colorMapHex: Record<string, string> = {
                  ai: "#22D3EE",
                  software: "#8B5CF6",
                  systems: "#EC4899",
                  math: "#F59E0B",
                  exploration: "#10B981"
                };

                return (
                  <motion.div
                    key={node.id}
                    layoutId={node.id}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ 
                      scale: 1, 
                      opacity: dimmed ? 0.35 : 1,
                      boxShadow: selectedCategory === node.category 
                        ? `0 0 12px ${colorMapHex[node.category]}40` 
                        : "none"
                    }}
                    transition={{ type: "spring", stiffness: 150, damping: 15 }}
                    style={{
                      left: `${(node.x / 850) * 100}%`,
                      top: `${(node.y / 520) * 100}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    onClick={() => handleNodeClick(node)}
                    className={`absolute rounded-2xl border transition-all duration-300 cursor-pointer flex items-center gap-1.5 font-mono select-none pointer-events-auto shadow-sm ${sizeClass}`}
                    data-cursor={isCenter ? "CONNECT" : isCategory ? "OPEN" : "BUILD"}
                  >
                    {node.icon && <node.icon className={`w-3.5 h-3.5 ${isCenter ? "text-white animate-pulse" : "text-primary-purple"}`} />}
                    <span>{node.label}</span>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Right Panel: Selected node details & telemetry */}
          <div className="lg:col-span-4 flex flex-col justify-between p-6 rounded-3xl glass-panel border border-white/45 shadow-xl relative overflow-hidden text-left">
            <AnimatePresence mode="wait">
              {activeDetail ? (
                <motion.div
                  key={selectedCategory}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col gap-5 h-full justify-between"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                      <span 
                        className="w-2.5 h-2.5 rounded-full shadow-md shrink-0"
                        style={{ 
                          backgroundColor: activeDetail.color,
                          boxShadow: `0 0 10px ${activeDetail.color}`
                        }}
                      />
                      <h3 className="font-display font-extrabold text-sm text-text-dark tracking-tight leading-none">
                        {activeDetail.title}
                      </h3>
                    </div>
                    
                    <div className="flex flex-col gap-1.5">
                      <span className="font-mono text-[8px] uppercase tracking-widest font-extrabold opacity-60">
                        Operational Concept
                      </span>
                      <p className="text-muted-text text-xs leading-relaxed font-sans font-medium">
                        {activeDetail.summary}
                      </p>
                    </div>

                    <div className="flex flex-col gap-1.5 mt-2">
                      <span className="font-mono text-[8px] uppercase tracking-widest font-extrabold opacity-60">
                        Applied Pipeline
                      </span>
                      <p className="text-text-dark text-xs leading-relaxed font-sans font-semibold">
                        {activeDetail.connections}
                      </p>
                    </div>
                  </div>

                  <button 
                    onClick={() => setSelectedCategory(null)}
                    className="clay-button py-3.5 rounded-2xl text-[10px] font-bold mt-6 text-center w-full block pointer-events-auto"
                    data-cursor="CONNECT"
                  >
                    RESET MATRIX
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="empty-telemetry"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center my-auto gap-4 py-8"
                >
                  <Network className="w-10 h-10 text-primary-purple/40 animate-pulse" />
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[9px] uppercase tracking-widest font-extrabold opacity-60">
                      System Status
                    </span>
                    <span className="font-display font-extrabold text-xs text-text-dark">
                      Telemetry Standby
                    </span>
                  </div>
                  <p className="text-muted-text text-[10px] leading-relaxed max-w-xs font-sans font-medium">
                    Click any focus domain category on the node link map to check running micro-architectures and conceptual integrations.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>

      <style jsx global>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -1000;
          }
        }
      `}</style>
    </section>
  );
}
