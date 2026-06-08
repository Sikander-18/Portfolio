"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Mission {
  id: string;
  num: string;
  name: string;
  category: string;
  narrative: string;
  outcome: string;
  lessons: string;
  tech: string[];
  color: string;
  github: string;
  renderDiagram: () => React.ReactNode;
}

const MISSIONS: Mission[] = [
  {
    id: "vitalguard",
    num: "01",
    name: "VitalGuard",
    category: "Healthcare + AI System",
    narrative: "In remote clinics, patients face critical referral delays due to the lack of immediate, expert radiological assistance. To solve this, I fine-tuned Convolutional Neural Network (CNN) classifiers on large chest radiographic datasets and deployed them in an asynchronous task pipeline. The system runs PyTorch models inside containerized GPU-capable worker queues, coordinated by a FastAPI broker that handles incoming scans and generates Grad-CAM activation saliency maps in under 1.5 seconds.",
    outcome: "Speed: < 1.5s (Grad-CAM Generated)",
    lessons: "Executing high-resolution image processing directly in the web broker thread blocked concurrency event loops. Moving image decoding to background worker queues is vital for responsive HTTP endpoints.",
    tech: ["PyTorch", "FastAPI", "React", "Docker", "Grad-CAM"],
    color: "#22D3EE", // Cyan
    github: "https://github.com/Sikander-18",
    renderDiagram: () => (
      <svg viewBox="0 0 400 220" className="w-full h-full text-cyan-400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="110" r="20" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
        <text x="60" y="113" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">IMAGE</text>
        <circle cx="200" cy="50" r="15" stroke="currentColor" strokeWidth="1" fill="rgba(34,211,238,0.05)" />
        <circle cx="200" cy="110" r="15" stroke="currentColor" strokeWidth="1" fill="rgba(34,211,238,0.05)" />
        <circle cx="200" cy="170" r="15" stroke="currentColor" strokeWidth="1" fill="rgba(34,211,238,0.05)" />
        <text x="200" y="113" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace">CNN</text>
        <circle cx="340" cy="110" r="22" stroke="currentColor" strokeWidth="1.5" fill="rgba(34,211,238,0.15)" className="animate-pulse" />
        <text x="340" y="113" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace" fontWeight="bold">GRAD-CAM</text>
        <path d="M80 110H185" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M215 110H318" stroke="currentColor" strokeWidth="1" />
        <path d="M80 110L185 50" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <path d="M80 110L185 170" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      </svg>
    )
  },
  {
    id: "eventsphere",
    num: "02",
    name: "EventSphere",
    category: "Transactional Event Ecosystem",
    narrative: "During high-demand checkout rushes, ticketing platforms frequently suffer from double-booking race conditions and ticket bot fraud. EventSphere addresses this by establishing a secure relational schema with strict transaction isolation levels. The system manages transaction locks via an Express backend paired with a PostgreSQL database, while issuing check-in tickets protected by cryptographically signed QR codes and real-time websocket check-in checkpoints.",
    outcome: "Latency: < 200ms (Websocket Broker)",
    lessons: "High-concurrency booking pools quickly degrade and time out without explicit database indexing on foreign keys and locking mechanisms. Structural indexing strategies are core database bedrocks.",
    tech: ["Next.js", "Node.js", "Express", "SQL", "WebSockets"],
    color: "#8B5CF6", // Purple
    github: "https://github.com/Sikander-18",
    renderDiagram: () => (
      <svg viewBox="0 0 400 220" className="w-full h-full text-purple-400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="55" width="70" height="30" rx="6" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
        <text x="75" y="72" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">USER CART</text>
        <rect x="40" y="135" width="70" height="30" rx="6" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
        <text x="75" y="152" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">QR SCANNER</text>
        <rect x="165" y="95" width="70" height="30" rx="6" stroke="currentColor" strokeWidth="1" fill="rgba(139,92,246,0.05)" />
        <text x="200" y="112" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace">LEDGER</text>
        <circle cx="310" cy="110" r="18" stroke="currentColor" strokeWidth="1.5" fill="rgba(139,92,246,0.15)" />
        <text x="310" y="113" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace" fontWeight="bold">COMMIT</text>
        <path d="M110 70L165 110" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <path d="M110 150L165 110" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <path d="M235 110H292" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  },
  {
    id: "heimdall",
    num: "03",
    name: "Heimdall",
    category: "Intrusion Detection Agent",
    narrative: "High SIEM licensing costs prevent small local servers from securing network traffic visibility. Heimdall is a lightweight network sniffer designed to run locally, observing low-level socket interface packets. It feeds parsed header inputs to an offline-trained Random Forest classifier that identifies and logs volumetric network anomalies without expensive external log forwarder pipelines.",
    outcome: "Precision: 98.4% (Random Forest)",
    lessons: "High socket packet throughput drops raw sniffer frames. Buffering network inputs to shared ring-buffers or moving packet classification closer to kernel spaces (e.g. eBPF) is required at scale.",
    tech: ["Python", "Scikit-Learn", "Linux Shell", "Git"],
    color: "#EC4899", // Pink
    github: "https://github.com/Sikander-18",
    renderDiagram: () => (
      <svg viewBox="0 0 400 220" className="w-full h-full text-pink-400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="95" width="70" height="30" rx="6" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
        <text x="75" y="112" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">SOCKET RX</text>
        <circle cx="200" cy="110" r="18" stroke="currentColor" strokeWidth="1" fill="rgba(236,72,153,0.05)" />
        <text x="200" y="113" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace">CLASSIFY</text>
        <rect x="290" y="95" width="70" height="30" rx="6" stroke="currentColor" strokeWidth="1.5" fill="rgba(236,72,153,0.15)" />
        <text x="325" y="112" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace" fontWeight="bold">ALERT LOG</text>
        <path d="M110 110H182" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M218 110H290" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  },
  {
    id: "trust-ai",
    num: "04",
    name: "Trust AI",
    category: "LLM Evaluation Checker",
    narrative: "Generative AI models face hallucination risks and lack real-time factual checks in production. Trust AI introduces automated validation pipelines by calculating the semantic vector distance between generated model outputs and static knowledge databases. The application evaluates sentence embedding cosine coordinates in parallel to verify factual consistency and output factual confidence ratios.",
    outcome: "Confidence: r-Score Matrix V1",
    lessons: "Evaluating text batches sequentially causes high response latencies. Shifting vector logic to matrix operations or asynchronous batch evaluation engines is key to maintaining sub-second speeds.",
    tech: ["Next.js", "Python", "OpenAI API", "Docker"],
    color: "#F59E0B", // Gold/Amber
    github: "https://github.com/Sikander-18",
    renderDiagram: () => (
      <svg viewBox="0 0 400 220" className="w-full h-full text-amber-400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="70" r="14" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
        <text x="60" y="73" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">OUTPUT</text>
        <circle cx="60" cy="150" r="14" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
        <text x="60" y="153" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">KNOWLEDGE</text>
        <rect x="155" y="95" width="70" height="30" rx="6" stroke="currentColor" strokeWidth="1" fill="rgba(245,158,11,0.05)" />
        <text x="190" y="112" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace">COSINE MATH</text>
        <circle cx="300" cy="110" r="18" stroke="currentColor" strokeWidth="1.5" fill="rgba(245,158,11,0.15)" />
        <text x="300" y="113" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace" fontWeight="bold">SCORE</text>
        <path d="M74 70L155 110" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <path d="M74 150L155 110" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <path d="M225 110H282" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  },
  {
    id: "skipq",
    num: "05",
    name: "SkipQ",
    category: "Mobile Queue-Bypass Cart",
    narrative: "Physical retail checkout counters experience severe customer congestion and delays during peak hours. SkipQ bypasses the cashier queue entirely by providing a mobile web client capable of parsing barcodes directly through client-side cameras. The application manages local cart states and synchronizes transactions securely with relational SQL payment processors.",
    outcome: "System: Bypasses Counter Queues",
    lessons: "Intermittent cell service inside concrete store structures easily drops payment socket connections. Implementing a robust client-side offline storage state cache with transactional rollbacks resolved network drops.",
    tech: ["React", "Node.js", "Express", "SQL", "Tailwind"],
    color: "#10B981", // Emerald
    github: "https://github.com/Sikander-18",
    renderDiagram: () => (
      <svg viewBox="0 0 400 220" className="w-full h-full text-emerald-400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="110" r="16" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
        <text x="60" y="113" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">SCANNER</text>
        <rect x="165" y="95" width="70" height="30" rx="6" stroke="currentColor" strokeWidth="1" fill="rgba(16,185,129,0.05)" />
        <text x="200" y="112" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace">CACHE SYNC</text>
        <circle cx="300" cy="110" r="18" stroke="currentColor" strokeWidth="1.5" fill="rgba(16,185,129,0.15)" />
        <text x="300" y="113" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace" fontWeight="bold">GATEWAY</text>
        <path d="M76 110H165" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M235 110H282" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  }
];

export default function MissionsSection() {
  return (
    <section id="missions" className="py-28 relative overflow-hidden bg-transparent">
      {/* Background aurora lights */}
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] bg-primary-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] bg-soft-pink/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-8 md:px-16 lg:px-24 w-full max-w-[1200px] relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-24 flex flex-col gap-4">
          <span className="font-mono text-[10px] text-primary-purple uppercase tracking-widest font-extrabold flex items-center justify-center gap-2">
            <Cpu className="w-3.5 h-3.5" />
            System Architectures
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-text-dark leading-tight tracking-tight uppercase">
            Production Systems
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-purple to-soft-pink mx-auto rounded-full mt-4" />
          <p className="text-muted-text text-sm md:text-base font-sans mt-4 leading-relaxed font-medium max-w-lg mx-auto">
            Technical breakdowns of engineering problems, structural flow layouts, and production system architectures.
          </p>
        </div>

        {/* Vertical Journey of Full-Width Cards */}
        <div className="flex flex-col gap-24">
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
                      Production System 0{mission.num} // Active Core
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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                  {/* Narrative Column */}
                  <div className={`lg:col-span-7 flex flex-col gap-6 text-left ${isEven ? "" : "lg:order-2"}`}>
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-[8px] uppercase tracking-widest font-extrabold text-primary-purple">
                        Operational Briefing
                      </span>
                      <p className="text-muted-text text-sm md:text-base leading-relaxed font-sans font-medium">
                        {mission.narrative}
                      </p>
                    </div>
                  </div>

                  {/* Visual Column: SVG Diagram wrapped in a Browser Mock */}
                  <div className={`lg:col-span-5 flex items-center justify-center ${isEven ? "" : "lg:order-1"}`}>
                    <div className="w-full rounded-2xl bg-black/15 dark:bg-black/35 border border-white/10 p-3.5 shadow-inner relative overflow-hidden">
                      {/* Browser header simulator */}
                      <div className="flex items-center gap-1.5 pb-3 border-b border-white/5 mb-3 select-none">
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <span className="font-mono text-[8px] text-muted-text/80 pl-2 uppercase tracking-wider">
                          Architecture Schematic
                        </span>
                      </div>
                      <div className="w-full aspect-[4/2.2] flex items-center justify-center">
                        {mission.renderDiagram()}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Telemetry Footer */}
                <div className="pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                  {/* Metric Block */}
                  <div className="md:col-span-3 flex flex-col justify-center p-4 rounded-2xl bg-white/5 border border-white/10 text-left">
                    <span className="font-mono text-[8px] uppercase tracking-wider text-muted-text mb-1 block font-extrabold">
                      Factual Outcome
                    </span>
                    <span className="font-display font-extrabold text-sm md:text-base leading-tight" style={{ color: mission.color }}>
                      {mission.outcome}
                    </span>
                  </div>

                  {/* Lesson Block */}
                  <div className="md:col-span-6 flex flex-col justify-center p-4 rounded-2xl bg-white/5 border border-white/10 text-left">
                    <span className="font-mono text-[8px] uppercase tracking-wider text-primary-purple mb-1 block font-extrabold">
                      Key Builder Lesson
                    </span>
                    <p className="text-muted-text text-[11px] leading-relaxed font-sans font-medium">
                      {mission.lessons}
                    </p>
                  </div>

                  {/* Stack & Action Block */}
                  <div className="md:col-span-3 flex flex-col justify-between gap-3 text-left">
                    <div className="flex flex-wrap gap-1.5">
                      {mission.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-lg bg-white/30 border border-white/40 text-[9px] font-mono text-text-dark/80 font-bold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={mission.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="clay-button py-2.5 rounded-xl text-[10px] font-bold flex items-center justify-center gap-1.5 pointer-events-auto w-full"
                      data-cursor="BUILD"
                    >
                      <FaGithub className="w-3.5 h-3.5 text-primary-purple" />
                      <span>Source Code</span>
                    </a>
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
