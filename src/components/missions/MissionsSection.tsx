"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Compass, CheckCircle2, Eye, Award, Settings, ExternalLink, Cpu } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Mission {
  id: string;
  num: string;
  name: string;
  category: string;
  challenge: string;
  approach: string;
  architecture: string;
  tech: string[];
  outcome: string;
  lessons: string;
  future: string;
  color: string;
  github: string;
  demo?: string;
  renderDiagram: () => React.ReactNode;
}

const MISSIONS: Mission[] = [
  {
    id: "vitalguard",
    num: "01",
    name: "VitalGuard",
    category: "Healthcare + AI System",
    challenge: "Lack of immediate, reliable radiological diagnostic assistance in remote clinics, leading to critical referral delays.",
    approach: "Fine-tune Convolutional Neural Network (CNN) classifiers on large-scale chest radiographic datasets, deploying them via optimized inference libraries.",
    architecture: "Asynchronous task queue workers running PyTorch model instances inside Docker containers, triggered by a FastAPI broker generating Grad-CAM activation zones.",
    tech: ["PyTorch", "FastAPI", "React", "Docker", "Grad-CAM"],
    outcome: "Abnormality masks and diagnostic flags computed and returned in under 1.5 seconds.",
    lessons: "Decoding high-resolution images in the main thread blocks event loops. Delegating processing to background worker queues is essential to maintain responsive API endpoints.",
    future: "Support multi-class radiology scans and integrate federated learning pipelines.",
    color: "#22D3EE", // Cyan
    github: "https://github.com/Sikander-18",
    renderDiagram: () => (
      <svg viewBox="0 0 400 300" className="w-full h-full text-cyan-400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" rx="16" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
        <circle cx="80" cy="150" r="24" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
        <text x="80" y="153" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">IMAGE</text>
        <circle cx="200" cy="90" r="18" stroke="currentColor" strokeWidth="1" fill="rgba(34,211,238,0.05)" />
        <circle cx="200" cy="150" r="18" stroke="currentColor" strokeWidth="1" fill="rgba(34,211,238,0.05)" />
        <circle cx="200" cy="210" r="18" stroke="currentColor" strokeWidth="1" fill="rgba(34,211,238,0.05)" />
        <text x="200" y="153" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace">CNN</text>
        <circle cx="320" cy="150" r="24" stroke="currentColor" strokeWidth="1.5" fill="rgba(34,211,238,0.15)" className="animate-pulse" />
        <text x="320" y="153" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace" fontWeight="bold">GRAD-CAM</text>
        <path d="M104 150H182" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M218 150H296" stroke="currentColor" strokeWidth="1" />
        <path d="M104 150L182 95" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <path d="M104 150L182 205" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <path d="M218 90L296 150" stroke="rgba(34,211,238,0.2)" strokeWidth="1" />
        <path d="M218 210L296 150" stroke="rgba(34,211,238,0.2)" strokeWidth="1" />
      </svg>
    )
  },
  {
    id: "eventsphere",
    num: "02",
    name: "EventSphere",
    category: "Transactional Event Ecosystem",
    challenge: "High ticket bot fraud, double-booking race conditions during high-demand checkout rushes.",
    approach: "Establish a relational schema with transaction isolation levels. Design secure check-in checkpoints using digital cryptographic signatures.",
    architecture: "Express backend paired with relational SQL databases utilizing explicit transaction locks. Frontend features optimized client-side telemetry dashboards.",
    tech: ["Next.js", "Node.js", "Express", "SQL", "WebSockets"],
    outcome: "Sub-second database bookings with secure QR checkpoint scan validation.",
    lessons: "Without explicit table indexing on foreign keys, concurrent transaction checks degrade under high load, causing pool timeouts. Optimizing index strategy is critical.",
    future: "Incorporate ticket verification ledgers using cryptographic proofs.",
    color: "#8B5CF6", // Purple
    github: "https://github.com/Sikander-18",
    renderDiagram: () => (
      <svg viewBox="0 0 400 300" className="w-full h-full text-purple-400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" rx="16" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
        <rect x="50" y="80" width="80" height="40" rx="8" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
        <text x="90" y="103" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">USER CART</text>
        <rect x="50" y="180" width="80" height="40" rx="8" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
        <text x="90" y="203" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">QR SCANNER</text>
        <rect x="180" y="130" width="80" height="40" rx="8" stroke="currentColor" strokeWidth="1" fill="rgba(139,92,246,0.05)" />
        <text x="220" y="153" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace">LEDGER</text>
        <circle cx="330" cy="150" r="22" stroke="currentColor" strokeWidth="1.5" fill="rgba(139,92,246,0.15)" />
        <text x="330" y="153" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace" fontWeight="bold">COMMIT</text>
        <path d="M130 100L180 140" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <path d="M130 200L180 160" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <path d="M260 150H308" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  },
  {
    id: "heimdall",
    num: "03",
    name: "Heimdall",
    category: "Intrusion Detection Agent",
    challenge: "High pricing SIEM licensing limits for small local servers, causing lack of anomaly visibility.",
    approach: "Observe low-level socket interface packets and train lightweight Random Forest anomaly classification models to flag scans.",
    architecture: "Local packet sniffer parsing headers and comparing traffic densities against offline-trained decision bounds.",
    tech: ["Python", "Scikit-Learn", "Linux Shell", "Git"],
    outcome: "Identifies and logs volumetric DDOS packet anomalies locally.",
    lessons: "Raw packet sniffing drops frames under heavy socket loads. Buffering network streams to shared memory channels is necessary for accuracy.",
    future: "Transition classifier sniffer to eBPF hooks inside the Linux kernel.",
    color: "#EC4899", // Pink
    github: "https://github.com/Sikander-18",
    renderDiagram: () => (
      <svg viewBox="0 0 400 300" className="w-full h-full text-pink-400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" rx="16" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
        <rect x="40" y="130" width="80" height="40" rx="8" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
        <text x="80" y="153" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">SOCKET RX</text>
        <circle cx="210" cy="150" r="22" stroke="currentColor" strokeWidth="1" fill="rgba(236,72,153,0.05)" />
        <text x="210" y="153" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace">CLASSIFY</text>
        <rect x="300" y="130" width="70" height="40" rx="8" stroke="currentColor" strokeWidth="1.5" fill="rgba(236,72,153,0.15)" />
        <text x="335" y="153" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace" fontWeight="bold">ALERT LOG</text>
        <path d="M120 150H188" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M232 150H300" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  },
  {
    id: "trust-ai",
    num: "04",
    name: "Trust AI",
    category: "LLM Evaluation Checker",
    challenge: "Model hallucination rates and lack of automated factual verification testing in production pipelines.",
    approach: "Compute semantic distance calculations between generated model outputs and static vector databases.",
    architecture: "Next.js dashboard paired with Python evaluator modules measuring sentence embedding cosine coordinates.",
    tech: ["Next.js", "Python", "OpenAI API", "Docker"],
    outcome: "Evaluation checking panel detailing factual confidence ratios.",
    lessons: "Evaluating text batches sequentially causes high response latencies. Parallelizing vector math pipelines is vital.",
    future: "Integrate custom reinforcement learning evaluator loops.",
    color: "#F59E0B", // Gold/Amber
    github: "https://github.com/Sikander-18",
    renderDiagram: () => (
      <svg viewBox="0 0 400 300" className="w-full h-full text-amber-400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" rx="16" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
        <circle cx="80" cy="110" r="18" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
        <text x="80" y="113" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">OUTPUT</text>
        <circle cx="80" cy="190" r="18" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
        <text x="80" y="193" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">KNOWLEDGE</text>
        <rect x="170" y="130" width="80" height="40" rx="8" stroke="currentColor" strokeWidth="1" fill="rgba(245,158,11,0.05)" />
        <text x="210" y="153" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace">COSINE MATH</text>
        <circle cx="310" cy="150" r="22" stroke="currentColor" strokeWidth="1.5" fill="rgba(245,158,11,0.15)" />
        <text x="310" y="153" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace" fontWeight="bold">SCORE</text>
        <path d="M98 110L170 140" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <path d="M98 190L170 160" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <path d="M250 150H288" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  },
  {
    id: "skipq",
    num: "05",
    name: "SkipQ",
    category: "Mobile Queue-Bypass Cart",
    challenge: "Bottlenecks and user delays at supermarket transaction counters during peak hours.",
    approach: "Create a camera barcode scanning mobile web client with optimized database syncing logic.",
    architecture: "React interface using client-side cart states linked to Express/SQL payment portals.",
    tech: ["React", "Node.js", "Express", "SQL", "Tailwind"],
    outcome: "Shoppers scan products and checkout via web to bypass cashier queues.",
    lessons: "Intermittent network dropouts within store structures break payment sessions. Implementing a client-side localStorage rollback cache resolved this.",
    future: "Integrate autonomous RFID store portal scanning.",
    color: "#10B981", // Emerald
    github: "https://github.com/Sikander-18",
    renderDiagram: () => (
      <svg viewBox="0 0 400 300" className="w-full h-full text-emerald-400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" rx="16" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
        <circle cx="80" cy="150" r="20" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
        <text x="80" y="153" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">SCANNER</text>
        <rect x="180" y="130" width="80" height="40" rx="8" stroke="currentColor" strokeWidth="1" fill="rgba(16,185,129,0.05)" />
        <text x="220" y="153" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace">CACHE SYNC</text>
        <circle cx="320" cy="150" r="22" stroke="currentColor" strokeWidth="1.5" fill="rgba(16,185,129,0.15)" />
        <text x="320" y="153" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace" fontWeight="bold">GATEWAY</text>
        <path d="M100 150H180" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M260 150H298" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  }
];

export default function MissionsSection() {
  return (
    <section id="missions" className="py-24 relative overflow-hidden bg-transparent">
      
      {/* Background aurora lights */}
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] bg-primary-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] bg-soft-pink/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-8 md:px-16 lg:px-24 w-full max-w-[1200px] relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-24 flex flex-col gap-4">
          <span className="font-mono text-[10px] text-primary-purple uppercase tracking-widest font-extrabold flex items-center justify-center gap-2">
            <Cpu className="w-3.5 h-3.5" />
            Project Archives
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-text-dark leading-tight tracking-tight uppercase">
            Declassified Missions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-purple to-soft-pink mx-auto rounded-full mt-4" />
          <p className="text-muted-text text-sm md:text-base font-sans mt-4 leading-relaxed font-medium max-w-lg mx-auto">
            Technical breakdowns of engineering problems and system architectures, declassified from the development pipeline.
          </p>
        </div>

        {/* Vertical Journey of Full-Width Cards */}
        <div className="flex flex-col gap-20">
          {MISSIONS.map((mission, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full rounded-[36px] glass-panel border border-white/45 p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col gap-8 transition-all duration-300 hover:scale-[1.005]"
                style={{
                  boxShadow: `0 20px 50px rgba(0, 0, 0, 0.015), inset 0 2px 4px rgba(255, 255, 255, 0.7), 0 0 0px 1px ${mission.color}10`
                }}
              >
                {/* Internal Glow Overlay */}
                <div 
                  className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-[100px] opacity-[0.06] pointer-events-none"
                  style={{ backgroundColor: mission.color }}
                />

                {/* Card Title Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6">
                  <div className="flex flex-col text-left">
                    <span className="font-mono text-[9px] uppercase tracking-widest font-extrabold" style={{ color: mission.color }}>
                      Mission File 0{mission.num} // RESTRICTED ACCESS
                    </span>
                    <h3 className="font-display font-extrabold text-2xl md:text-4xl text-text-dark tracking-tight mt-1">
                      {mission.name}
                    </h3>
                  </div>
                  
                  {/* Category Pill */}
                  <span className="font-mono text-[9px] text-muted-text px-3 py-1.5 bg-white/40 border border-white/50 rounded-xl shadow-sm">
                    {mission.category}
                  </span>
                </div>

                {/* Two-Column Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
                  
                  {/* Narrative Column */}
                  <div className={`lg:col-span-7 flex flex-col gap-6 text-left ${isEven ? "" : "lg:order-2"}`}>
                    
                    {/* Challenge */}
                    <div className="flex items-start gap-3">
                      <ShieldAlert className="w-4.5 h-4.5 text-red-500 shrink-0 mt-0.5" />
                      <div className="flex flex-col">
                        <span className="font-mono text-[8px] uppercase tracking-wider text-red-500 font-extrabold">
                          The Challenge
                        </span>
                        <p className="text-muted-text text-xs md:text-sm mt-0.5 leading-relaxed font-sans font-medium">
                          {mission.challenge}
                        </p>
                      </div>
                    </div>

                    {/* Approach & Architecture */}
                    <div className="flex items-start gap-3">
                      <Compass className="w-4.5 h-4.5 text-cyan-500 shrink-0 mt-0.5" />
                      <div className="flex flex-col">
                        <span className="font-mono text-[8px] uppercase tracking-wider text-cyan-500 font-extrabold">
                          Approach & Architecture
                        </span>
                        <p className="text-muted-text text-xs md:text-sm mt-0.5 leading-relaxed font-sans font-medium">
                          {mission.approach} <span className="text-text-dark font-semibold">{mission.architecture}</span>
                        </p>
                      </div>
                    </div>

                    {/* Outcome */}
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                      <div className="flex flex-col">
                        <span className="font-mono text-[8px] uppercase tracking-wider text-emerald-500 font-extrabold">
                          Factual Outcome
                        </span>
                        <p className="text-muted-text text-xs md:text-sm mt-0.5 leading-relaxed font-sans font-medium">
                          {mission.outcome}
                        </p>
                      </div>
                    </div>

                    {/* Lessons Learned */}
                    <div className="flex items-start gap-3">
                      <Settings className="w-4.5 h-4.5 text-primary-purple shrink-0 mt-0.5" />
                      <div className="flex flex-col">
                        <span className="font-mono text-[8px] uppercase tracking-wider text-primary-purple font-extrabold">
                          Lessons Learned
                        </span>
                        <p className="text-muted-text text-xs md:text-sm mt-0.5 leading-relaxed font-sans font-medium">
                          {mission.lessons}
                        </p>
                      </div>
                    </div>

                    {/* Future Vision */}
                    <div className="flex items-start gap-3">
                      <Award className="w-4.5 h-4.5 text-amber-500 shrink-0 mt-0.5" />
                      <div className="flex flex-col">
                        <span className="font-mono text-[8px] uppercase tracking-wider text-amber-500 font-extrabold">
                          Future Vision
                        </span>
                        <p className="text-muted-text text-xs md:text-sm mt-0.5 leading-relaxed font-sans font-medium">
                          {mission.future}
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Visual Column: SVG Diagram */}
                  <div className={`lg:col-span-5 flex items-center justify-center ${isEven ? "" : "lg:order-1"}`}>
                    <div className="w-full h-full max-h-[260px] aspect-video rounded-2xl overflow-hidden relative shadow-inner">
                      {mission.renderDiagram()}
                    </div>
                  </div>

                </div>

                {/* Footer buttons / tech badges */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2">
                    {mission.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-lg bg-white/40 border border-white/50 text-[9px] font-mono text-text-dark font-bold shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <a
                      href={mission.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="clay-button px-4 py-2.5 rounded-xl text-[10px] font-bold flex items-center justify-center gap-1.5 pointer-events-auto w-full sm:w-auto"
                      data-cursor="BUILD"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>

                    {mission.demo && (
                      <a
                        href={mission.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="clay-button-active px-4 py-2.5 rounded-xl text-[10px] font-bold flex items-center justify-center gap-1.5 pointer-events-auto w-full sm:w-auto"
                        data-cursor="CONNECT"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Launch Demo</span>
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
