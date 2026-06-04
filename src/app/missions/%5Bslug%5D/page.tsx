import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, ShieldAlert, CheckCircle, Flame, Server, Code, TrendingUp, Layers } from "lucide-react";
import { GithubIcon as Github } from "@/components/icons";
import { clsx } from "clsx";

interface CaseStudy {
  code: string;
  name: string;
  category: string;
  status: string;
  stack: string[];
  github: string;
  demo?: string;
  problem: string;
  motivation: string;
  architecture: string;
  architectureChart: string; // ASCII visual mapping
  challenges: string;
  outcome: string;
  lessons: string;
  future: string;
}

const CASE_STUDIES: Record<string, CaseStudy> = {
  "vitalguard": {
    code: "MISSION-01",
    name: "VitalGuard",
    category: "Healthcare + AI",
    status: "Active Development",
    stack: ["Python", "LangGraph", "FastAPI", "Twilio API", "Streamlit", "Git"],
    github: "https://github.com/Sikander-18",
    problem: "A critical patient's physiological metrics fluctuate rapidly, but traditional health monitors lack automated communication lines to instantly trigger alert procedures for clinician teams.",
    motivation: "Translating high-level health monitoring concepts into a deployed software system that consumes simulated Bluetooth Low Energy (BLE) vital streams and automates phone calls to contacts during anomalies.",
    architecture: "Employs a multi-agent reasoning graph (LangGraph) over physiological data streams. Clinician views are decoupled from patient inputs in a live dashboard featuring role-based authentication.",
    architectureChart: `
[Simulated BLE Stream]
         │
         ▼
[FastAPI Telemetry Socket]
         │
         ▼
[LangGraph Multi-Agent Evaluator] ──(Anomaly Detected?)──► [Twilio Voice Call API]
         │                                                      │
         ▼ (Normal Vitals)                                      ▼
[Streamlit Live Clinician Dashboard]                       [Emergency Contacts Ring]
    `,
    challenges: "Handling concurrency and real-time state synchronization when simulated vitals streams fluctuated rapidly, ensuring Twilio call API thresholds did not flood and lock call queues.",
    outcome: "Secured a Top 10 finish in the Health Track out of 250 participating hackathon teams by delivering a fully operational, end-to-end telemetry and escalation prototype under a strict deadline.",
    lessons: "Learned the value of state graph architectures (LangGraph) in modeling event-driven logic and coordinating complex API integrations like Twilio under strict latency limits.",
    future: "Integrate physical BLE hardware nodes to stream real physiological readings and implement predictive anomaly detection utilizing lightweight local regression models."
  },
  "offline-rag": {
    code: "MISSION-02",
    name: "Offline RAG System",
    category: "Data Privacy + AI",
    status: "Prototype",
    stack: ["Python", "FastAPI", "ChromaDB", "Ollama", "Mistral 7B", "React"],
    github: "https://github.com/Sikander-18",
    problem: "Organizations exposing sensitive proprietary datasets to cloud-hosted LLM vendors, resulting in data leaks risks and high recurring API token transaction fees.",
    motivation: "Building a fully local document Q&A platform to guarantee complete data sovereignty while keeping semantic search speeds comparable to cloud alternatives.",
    architecture: "Ingests unstructured PDFs and DOCX files, slices text into normalized chunks, and embeds them into a local ChromaDB database. User prompts search ChromaDB and feed context to a locally hosted Mistral-7B instance via Ollama.",
    architectureChart: `
[Unstructured PDFs/Docs] ──► [FastAPI Parsing Pipeline] ──► [ChromaDB Vector Store]
                                                                  │
                                                                  ▼ (Semantic Context)
[User Prompt Chat UI] ──────────────────────────────────────────► [Ollama: Mistral 7B]
                                                                  │
                                                                  ▼
                                                          [Source-Cited Chat Answer]
    `,
    challenges: "Optimizing text chunk overlaps and embedding vectors queries on local CPU configurations, which originally led to high prompt latency. Solved by tweaking ChromaDB indexing settings.",
    outcome: "Eliminated all external cloud api dependencies and transaction fees while achieving private, real-time conversational document Q&A with source-citations.",
    lessons: "Gained depth in retrieval-augmented generation methodologies, vector embeddings, chunking optimization, and the performance characteristics of open-weights local models.",
    future: "Support parsing image-heavy documents via local vision-language models and implement hybrid keyword/vector search logic."
  },
  "eventsphere": {
    code: "MISSION-03",
    name: "EventSphere",
    category: "Event Ecosystem",
    status: "Active Development",
    stack: ["Node.js", "Express", "React", "MongoDB", "Tailwind CSS", "REST APIs"],
    github: "https://github.com/Sikander-18",
    problem: "Fragmented, disconnected admin workflows for organizer coordination, ticketing registrations, and instantaneous check-in validation at physical event venues.",
    motivation: "Assembling a scalable event ecosystem that ensures smooth attendee registrations and secure cryptographic ticketing validation.",
    architecture: "Uses a modular model-view-controller API structure. Cryptographic QR codes are issued to attendees upon registration, which are validated instantly at physical doors using a web-based scanner.",
    architectureChart: `
[Organizer Admin Console] ◄──► [Node.js REST API] ◄──► [MongoDB Database]
                                     ▲
                                     │
[Attendee Register] ──► [Cryptographic QR Generator] ──► [Instant On-site Scanner Check]
    `,
    challenges: "Handling database integrity and concurrent booking locks during peak registration hours, and structuring clean API routes to avoid data fetch bottlenecks on mobile networks.",
    outcome: "Created a scalable, production-ready event management system with a comprehensive dashboard that handles real-time ticket statuses and instant verification checks.",
    lessons: "Deepened knowledge in database schemas design, role-based JWT authentication, and cryptographic hash verification workflows.",
    future: "Add email ticket dispatch queues using Redis and incorporate real-time venue seating allocation graphics."
  },
  "rx-plain": {
    code: "MISSION-04",
    name: "Rx-Plain",
    category: "NLP + Healthcare",
    status: "Prototype",
    stack: ["Python", "NLP", "Data Normalization", "Streamlit"],
    github: "https://github.com/Sikander-18",
    problem: "Highly complex, fragmented clinical lab results containing raw medical codes and variables that prevent patients from understanding their historical metrics.",
    motivation: "Providing patients with a transparent, chronological dashboard translating clinical records into readable insights.",
    architecture: "Extracts unstructured data from medical PDFs, maps values to a centralized clinical normalizer database, and displays longitudinal graphs tracking parameter movements over time.",
    architectureChart: `
[Medical PDF Reports] ──► [Asynchronous NLP Ingestion] ──► [Clinical Normalization Layer]
                                                                   │
                                                                   ▼
[Patient Client UI] ◄────────────────────────────────────── [Chronological Health Timeline]
    `,
    challenges: "Normalizing lab metrics across multiple distinct laboratory report standards, which required designing a flexible translation table mapping raw symbols to standard clinical terminology.",
    outcome: "Built an intuitive, chronological analysis interface that converts isolated medical check-ups into continuous historical metrics analytics.",
    lessons: "Explored NLP parsing techniques, data cleaning, and mapping techniques, and patient-first data visualization standards.",
    future: "Add OCR image ingestion to let users upload photos of paper lab sheets and support multi-language translations."
  },
  "heimdall": {
    code: "MISSION-05",
    name: "Heimdall",
    category: "Cybersecurity",
    status: "Research & Development",
    stack: ["Python", "Docker", "Network Sockets", "n8n Automation"],
    github: "https://github.com/Sikander-18",
    problem: "Server ports face continuous intrusion scans, but configuring enterprise intrusion detection systems is complex and demands high host performance overhead.",
    motivation: "Building a lightweight, containerized monitoring agent that passive-sniffs local sockets and triggers instant warning actions.",
    architecture: "A dockerized Python daemon sniffs local socket connections, audits traffic logs, and pipes warning flags to n8n automated warning scripts.",
    architectureChart: `
[Incoming Network Packet]
         │
         ▼
[Dockerized Sniffer Daemon] ──► [Passive Threat Audits] ──(Flag Trigger)──► [n8n Automation]
                                                                                │
                                                                                ▼
                                                                     [Warning Broadcast SMS]
    `,
    challenges: "Minimizing host CPU consumption when sniffer processes inspected high-traffic ports. Solved by optimizing packet inspection filters to run asynchronously.",
    outcome: "Deploys containerized host agents that audit network channels with minimal resource consumption, linking trigger events to automations.",
    lessons: "Deepened system-level containerization understanding, linux socket programming, and automated n8n workflow integration patterns.",
    future: "Incorporate anomaly detection algorithms to identify malicious request payloads and automate firewall IP bans."
  },
  "skipq": {
    code: "MISSION-06",
    name: "SkipQ",
    category: "Queue Telemetry",
    status: "Prototype",
    stack: ["Java", "Spring Boot", "React", "REST APIs"],
    github: "https://github.com/Sikander-18",
    problem: "Crowded patient waiting rooms and physical queues at public clinics that cause extreme inefficiencies and patient discomfort.",
    motivation: "Optimizing the wait experience by calculating real-time queue delays and sending SMS queue notifications.",
    architecture: "Uses Spring Boot scheduling engines to track queue velocities, calculate optimal clinic routing parameters, and dispatch SMS alerts on queue changes.",
    architectureChart: `
[Clinic Front Desk UI] ──► [Spring Boot Queue Tracker] ◄──► [Routing Optimizers]
                                     │
                                     ▼
[Patient Client UI] ◄──────── [SMS Status Alert]
    `,
    challenges: "Syncing queue timing states dynamically when patient session durations fluctuated, which required calculating moving averages of queue processing times.",
    outcome: "Delivered routing mechanics that calculate real-time queue delay indicators, routing patients optimally.",
    lessons: "Learned Java concurrency principles, job scheduling triggers, and queue velocity estimation mathematics.",
    future: "Enable patients to book remote ticket entries via GPS geofencing and predict wait patterns based on historical day-of-week records."
  },
  "trust-ai": {
    code: "MISSION-07",
    name: "Trust AI",
    category: "AI Verification",
    status: "Concept & Research",
    stack: ["Python", "PyTorch", "Next.js", "Vector Similarity"],
    github: "https://github.com/Sikander-18",
    problem: "LLM responses are often subject to hallucinations, making it risky to integrate generative models in clinical or enterprise workflows without automated validation.",
    motivation: "Formulating grounding evaluation algorithms to run semantic similarity checks on LLM responses relative to source contexts.",
    architecture: "Calculates grounding similarity values and semantic overlap metrics to check for factual contradictions.",
    architectureChart: `
[Source Context Inputs]
         │
         ▼
[LLM Generation Output] ──► [Vector Similarity Evaluator] ──► [Grounding Verification Score]
    `,
    challenges: "Differentiating between minor rewording changes and actual factual contradictions, which required fine-tuning semantic distance thresholds.",
    outcome: "Formulated custom evaluation metrics checking grounding vector indices to flag hallucinated text.",
    lessons: "Explored advanced embedding math, semantic analysis patterns, and factual grounding metrics.",
    future: "Build an active API gateway validator that intercepts LLM outputs and automatically regenerates answers if grounding scores fall below threshold limits."
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function MissionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const mission = CASE_STUDIES[slug];

  if (!mission) {
    notFound();
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Active Development":
        return <Flame className="w-4 h-4 text-accent animate-pulse" />;
      case "Prototype":
        return <CheckCircle className="w-4 h-4 text-success" />;
      case "Research & Development":
        return <ShieldAlert className="w-4 h-4 text-primary" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active Development":
        return "text-accent border-accent/20 bg-accent/5";
      case "Prototype":
        return "text-success border-success/20 bg-success/5";
      case "Research & Development":
        return "text-primary border-primary/20 bg-primary/5";
      default:
        return "text-zinc-400 border-zinc-800 bg-zinc-950";
    }
  };

  return (
    <div className="min-h-screen w-full bg-background p-6 md:p-12 relative overflow-hidden flex flex-col justify-between">
      
      {/* Container */}
      <div className="max-w-5xl mx-auto w-full flex flex-col gap-10">
        
        {/* Navigation */}
        <div className="flex justify-between items-center select-none">
          <Link
            href="/missions"
            className="flex items-center gap-2 font-mono text-[10px] text-zinc-400 hover:text-white uppercase tracking-widest font-bold transition-colors group"
            data-cursor="CONNECT"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>Archive index</span>
          </Link>
          <span className="font-mono text-[9px] text-zinc-650 uppercase tracking-widest">
            {mission.code} {"// CLASSIFIED DOSSIER"}
          </span>
        </div>

        {/* Dossier Title Block */}
        <div className="border-b border-zinc-900 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 select-none">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-primary uppercase tracking-widest block">
              {"// Operation Case Study"}
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-black text-white tracking-tight leading-none uppercase">
              {mission.name}
            </h1>
            <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mt-1">
              Category: {mission.category}
            </p>
          </div>

          <div className={clsx("flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-mono tracking-wider uppercase font-bold", getStatusColor(mission.status))}>
            {getStatusIcon(mission.status)}
            <span>{mission.status}</span>
          </div>
        </div>

        {/* Dossier Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Panel: Stats Dossier (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6 select-none">
            <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-950/60 backdrop-blur-sm flex flex-col gap-6">
              
              {/* Folder metadata line */}
              <div className="border-b border-zinc-900 pb-3 flex justify-between items-center text-[9px] font-mono text-zinc-500 uppercase tracking-wider">
                <span>SYSTEM TARGETS</span>
                <span>DOSSIER.V1</span>
              </div>

              {/* Stack */}
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5" />
                  Technology Stack
                </span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {mission.stack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-850 font-mono text-[9px] text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* System details */}
              <div className="flex flex-col gap-3 pt-3 border-t border-zinc-900/60">
                <div className="flex flex-col gap-0.5">
                  <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5" />
                    Classification
                  </span>
                  <span className="font-sans text-[11px] text-zinc-300 mt-1 font-semibold">
                    Restricted Access (S2)
                  </span>
                </div>

                <div className="flex flex-col gap-0.5 mt-1">
                  <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    Operational Node
                  </span>
                  <span className="font-sans text-[11px] text-zinc-300 mt-1 font-semibold">
                    Local Sandbox Host
                  </span>
                </div>
              </div>

              {/* Source/Demo Buttons */}
              <div className="flex flex-col gap-2.5 pt-4 border-t border-zinc-900/60 pointer-events-auto">
                <a
                  href={mission.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-zinc-900 border border-zinc-850 hover:border-accent rounded-xl text-xs font-mono font-bold text-zinc-300 hover:text-white uppercase tracking-widest transition-colors"
                  data-cursor="BUILD"
                >
                  <Github className="w-4 h-4 text-zinc-400" />
                  <span>Inspect Source</span>
                </a>

                {mission.demo && (
                  <a
                    href={mission.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary rounded-xl text-xs font-mono font-bold text-white uppercase tracking-widest transition-all duration-300"
                    data-cursor="OPEN"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

            </div>
          </div>

          {/* Right Panel: Dossier Narrative (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* The Problem */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[9px] text-primary uppercase tracking-widest block font-bold">
                [01] THE OPERATIONAL CHALLENGE
              </span>
              <p className="font-sans text-sm text-zinc-300 leading-relaxed">
                {mission.problem}
              </p>
            </div>

            {/* Motivation */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[9px] text-primary uppercase tracking-widest block font-bold">
                [02] MISSION OBJECTIVES
              </span>
              <p className="font-sans text-sm text-zinc-300 leading-relaxed">
                {mission.motivation}
              </p>
            </div>

            {/* System Architecture */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] text-primary uppercase tracking-widest block font-bold">
                  [03] SYSTEM TOPOLOGY DESIGN
                </span>
                <p className="font-sans text-sm text-zinc-300 leading-relaxed">
                  {mission.architecture}
                </p>
              </div>

              {/* ASCII Flowchart */}
              <div className="p-4 rounded-xl border border-zinc-900 bg-zinc-950/60 font-mono text-[9px] md:text-[10px] text-accent leading-relaxed overflow-x-auto select-none no-scrollbar">
                <div className="font-mono text-[8px] text-zinc-650 uppercase tracking-widest mb-2 border-b border-zinc-900 pb-1">
                  {"// Telemetry data flows chart"}
                </div>
                <pre>{mission.architectureChart}</pre>
              </div>
            </div>

            {/* Challenges */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[9px] text-primary uppercase tracking-widest block font-bold">
                [04] ENGINEERING BOTTLENECKS
              </span>
              <p className="font-sans text-sm text-zinc-300 leading-relaxed">
                {mission.challenges}
              </p>
            </div>

            {/* Outcomes */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[9px] text-success uppercase tracking-widest block font-bold flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-success" />
                [05] VERIFIED OUTCOMES
              </span>
              <p className="font-sans text-sm text-zinc-300 leading-relaxed border-l-2 border-success/45 pl-4 italic">
                &ldquo;{mission.outcome}&rdquo;
              </p>
            </div>

            {/* Lessons & Future */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-900">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest block">
                  Lessons Learned
                </span>
                <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                  {mission.lessons}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest block">
                  Future Vision Blueprint
                </span>
                <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                  {mission.future}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto w-full border-t border-zinc-900/50 pt-6 mt-16 font-mono text-[8px] text-zinc-650 flex justify-between items-center select-none uppercase tracking-widest">
        <div>Sikander Prajapati &bull; Cabinet Dossier Registry</div>
        <div>Security classification: confidential</div>
      </footer>

    </div>
  );
}
