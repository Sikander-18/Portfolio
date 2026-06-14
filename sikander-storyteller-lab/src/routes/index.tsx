import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import neuralAtlas from "@/assets/project-neural-atlas.jpg";
import graphxImg from "@/assets/project-graphx.jpg";
import { CustomCursor } from "@/components/CustomCursor";
import { Loader } from "@/components/Loader";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";
import { RotatingWords } from "@/components/RotatingWords";
import { ParticleField } from "@/components/ParticleField";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sikander Prajapati — From Ideas to Systems" },
      {
        name: "description",
        content:
          "Personal portfolio of Sikander Prajapati — CS student building AI-powered systems from curiosity, mathematics and code.",
      },
      { property: "og:title", content: "Sikander Prajapati — From Ideas to Systems" },
      {
        property: "og:description",
        content: "Building AI-powered systems from curiosity, mathematics, and code.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const PROJECTS = [
  {
    id: "vitalguard",
    name: "VitalGuard",
    role: "AI Health Monitor",
    year: "2025",
    desc: "Real-time vitals monitoring with anomaly detection for at-risk patients.",
    tags: ["Python", "PyTorch", "FastAPI", "WebSockets"],
    img: neuralAtlas,
    accent: "from-brand-primary/40 to-brand-secondary/10",
  },
  {
    id: "eventsphere",
    name: "EventSphere",
    role: "Campus Events Platform",
    year: "2025",
    desc: "End-to-end event lifecycle: tickets, attendance, post-event analytics.",
    tags: ["Next.js", "Postgres", "Stripe", "Redis"],
    img: graphxImg,
    accent: "from-brand-accent/40 to-brand-primary/10",
  },
  {
    id: "heimdall",
    name: "Heimdall",
    role: "Security Observability",
    year: "2025",
    desc: "Threat-detection dashboard with ML-classified log streams and alerts.",
    tags: ["Go", "Kafka", "ClickHouse", "React"],
    img: neuralAtlas,
    accent: "from-brand-success/30 to-brand-accent/10",
  },
  {
    id: "trust-ai",
    name: "Trust AI",
    role: "LLM Output Auditing",
    year: "2025",
    desc: "Confidence scoring and citation grounding for LLM-generated answers.",
    tags: ["TypeScript", "OpenAI", "Vector DB"],
    img: graphxImg,
    accent: "from-brand-secondary/40 to-brand-accent/10",
  },
  {
    id: "skipq",
    name: "SkipQ",
    role: "Queue Intelligence",
    year: "2024",
    desc: "Predictive wait times for service counters via mobile crowd-sensing.",
    tags: ["React Native", "Node", "TensorFlow Lite"],
    img: neuralAtlas,
    accent: "from-brand-primary/40 to-brand-accent/10",
  },
];

function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) document.body.style.overflow = "";
    else document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [loading]);

  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans">
      <CustomCursor />
      {loading && <Loader onDone={() => setLoading(false)} />}

      <Nav />

      <main id="top">
        <Hero />
        <OriginStory />
        <Mindset />
        <Missions />
        <CurrentlyBuilding />
        <Toolkit />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */

function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 px-6 md:px-10 py-5 flex justify-between items-center mix-blend-difference">
      <a href="#top" className="flex items-center gap-2 text-xs font-medium tracking-[0.25em] uppercase font-mono">
        <span className="inline-block w-2 h-2 rounded-full bg-brand-accent" />
        Sikander.Prajapati
      </a>
      <div className="flex gap-3 md:gap-7 items-center text-[10px] tracking-[0.25em] uppercase font-mono">
        <a href="#story" className="hidden sm:inline hover:text-brand-accent transition-colors">Origin</a>
        <a href="#missions" className="hidden sm:inline hover:text-brand-accent transition-colors">Missions</a>
        <a href="#toolkit" className="hidden sm:inline hover:text-brand-accent transition-colors">Toolkit</a>
        <Magnetic strength={0.3}>
          <a
            href="#connect"
            className="btn-shine inline-block px-4 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Connect
          </a>
        </Magnetic>
      </div>
    </nav>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section className="relative min-h-screen pt-32 md:pt-40 pb-20 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute inset-0 pointer-events-none">
        <ParticleField />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10 animate-fade-in font-mono text-[10px] tracking-[0.3em] uppercase text-brand-muted">
          <span className="w-2 h-2 rounded-full bg-brand-success" style={{ boxShadow: "0 0 12px #10b981" }} />
          Available — Summer / Fall 2026
        </div>

        <h1 className="font-display text-[14vw] md:text-[10vw] lg:text-[9vw] leading-[0.88] tracking-[-0.04em] font-medium animate-fade-up">
          <span className="block">I&nbsp;BUILD</span>
          <span className="block text-gradient">SYSTEMS</span>
          <span className="block">FROM IDEAS<span className="text-brand-accent">.</span></span>
        </h1>

        <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end justify-between gap-10 animate-fade-up" style={{ animationDelay: "180ms" }}>
          <div className="max-w-md">
            <p className="text-brand-muted leading-relaxed">
              Every project starts with curiosity. I turn ideas into systems through
              software engineering, mathematics, and AI.
            </p>
          </div>
          <div className="flex items-center gap-3 font-mono text-sm">
            <span className="text-brand-faint">/&gt;</span>
            <RotatingWords
              className="text-brand-accent font-medium"
              words={["AI Engineer", "Developer", "Explorer", "Problem Solver"]}
            />
          </div>
        </div>

        <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-brand-muted float-soft font-mono">
          Explore My Mind
          <span className="inline-block w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- ORIGIN STORY ---------------- */

function OriginStory() {
  return (
    <section id="story" className="relative py-32 md:py-44 px-6 md:px-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-12 font-mono text-[10px] tracking-[0.3em] uppercase text-brand-accent">
            <span>01</span>
            <div className="line-grow h-px w-24 bg-brand-accent" />
            Origin Story
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-5xl">
            I grew up taking things apart. <span className="text-brand-muted">A calculator. A radio. </span>
            Then code. Then mathematics. <span className="text-gradient">Then intelligence itself.</span>
          </p>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-3 gap-10 md:gap-14">
          {[
            {
              k: "Mathematics",
              v: "Teaches me how to think — precisely, recursively, without shortcuts.",
            },
            {
              k: "Programming",
              v: "Lets me build the things I imagine, then put them in front of real people.",
            },
            {
              k: "Artificial Intelligence",
              v: "Sits exactly where curiosity meets utility. So I live there.",
            },
          ].map((it, i) => (
            <Reveal key={it.k} delay={i * 120}>
              <div className="border-t border-white/10 pt-5">
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-muted mb-3">
                  0{i + 1} — {it.k}
                </div>
                <p className="text-lg leading-relaxed text-white/85">{it.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- MINDSET ---------------- */

function Mindset() {
  const steps = ["Observe", "Learn", "Build", "Improve", "Repeat"];
  return (
    <section className="relative py-28 md:py-40 px-6 md:px-10 border-t border-white/5 bg-brand-surface">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-12 font-mono text-[10px] tracking-[0.3em] uppercase text-brand-accent">
            <span>02</span>
            <div className="line-grow h-px w-24 bg-brand-accent" />
            Mindset
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl">
            A small loop, run forever.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {steps.map((s, i) => (
            <Reveal key={s} delay={i * 100}>
              <div
                data-cursor="hover"
                className="group relative aspect-[5/6] rounded-2xl border border-white/10 bg-brand-elev p-5 md:p-6 flex flex-col justify-between hover:border-brand-accent/60 transition-colors"
              >
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-faint">
                  0{i + 1}
                </span>
                <div>
                  <div className="font-display text-2xl md:text-3xl">{s}</div>
                  <div className="mt-3 h-px w-8 bg-brand-accent group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- MISSIONS ---------------- */

function Missions() {
  return (
    <section id="missions" className="relative py-28 md:py-40 px-6 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-end justify-between mb-12 gap-6">
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-brand-accent">
              <span>03</span>
              <div className="line-grow h-px w-24 bg-brand-accent" />
              Selected Missions
            </div>
            <span className="font-mono text-[10px] tracking-widest text-brand-muted">
              {PROJECTS.length.toString().padStart(2, "0")} systems shipped
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.04] tracking-tight max-w-5xl mb-16">
            Things I built when no one asked me to.
          </h2>
        </Reveal>

        <ul className="divide-y divide-white/10 border-y border-white/10">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <li>
                <a
                  href="#"
                  data-cursor="hover"
                  className={`group relative grid grid-cols-12 items-center gap-4 md:gap-6 py-6 md:py-8 px-2 md:px-4 transition-colors hover:bg-white/[0.03]`}
                >
                  <span className="col-span-1 font-mono text-xs text-brand-faint">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="col-span-5 md:col-span-4 font-display text-2xl md:text-4xl tracking-tight">
                    {p.name}
                  </span>
                  <span className="col-span-3 hidden md:block text-sm text-brand-muted">
                    {p.role}
                  </span>
                  <span className="col-span-3 md:col-span-2 font-mono text-[10px] tracking-widest uppercase text-brand-muted">
                    {p.year}
                  </span>
                  <span className="col-span-3 md:col-span-2 flex justify-end items-center gap-2 text-brand-accent">
                    <span className="hidden md:inline text-xs tracking-widest uppercase font-mono">View</span>
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </span>

                  {/* hover preview */}
                  <div
                    className={`pointer-events-none absolute right-32 top-1/2 -translate-y-1/2 w-56 h-36 rounded-lg overflow-hidden border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 hidden lg:block bg-gradient-to-br ${p.accent}`}
                  >
                    <img
                      src={p.img}
                      alt=""
                      className="w-full h-full object-cover opacity-80"
                      loading="lazy"
                    />
                  </div>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap gap-2">
            {Array.from(new Set(PROJECTS.flatMap((p) => p.tags))).map((t) => (
              <span
                key={t}
                className="text-[10px] tracking-widest uppercase font-mono px-3 py-1.5 rounded-full border border-white/10 text-brand-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CURRENTLY BUILDING ---------------- */

function CurrentlyBuilding() {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-10 border-t border-white/5 bg-brand-surface overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-10 font-mono text-[10px] tracking-[0.3em] uppercase text-brand-accent">
            <span>04</span>
            <div className="line-grow h-px w-24 bg-brand-accent" />
            Currently Building
          </div>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-center">
          <Reveal className="md:col-span-7">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
              A vision-language agent that explains what it sees — and admits when it doesn't.
            </h2>
            <p className="mt-6 text-brand-muted max-w-xl leading-relaxed">
              Multimodal model with calibrated confidence and retrieval grounding.
              Live progress, dead ends, and notes — all in the open.
            </p>
          </Reveal>

          <Reveal className="md:col-span-5" delay={120}>
            <div className="relative rounded-2xl border border-white/10 bg-black/40 p-6 font-mono text-xs leading-7 backdrop-blur scanline overflow-hidden">
              <div className="flex items-center gap-1.5 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-3 text-brand-faint">~/lab/agent</span>
              </div>
              <div><span className="text-brand-accent">$</span> python train.py --calibrate</div>
              <div className="text-brand-muted">→ loading 1.2M image-caption pairs…</div>
              <div className="text-brand-muted">→ epoch 04/12 · loss 0.214 · ECE 0.041</div>
              <div className="text-brand-success">✓ saved checkpoint v0.4-rc</div>
              <div><span className="text-brand-accent">$</span> agent ask "what's in frame 0042?"<span className="cursor-blink">_</span></div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* marquee */}
      <div className="mt-24 relative overflow-hidden border-y border-white/5 py-8">
        <div className="flex marquee-track whitespace-nowrap gap-12 font-display text-5xl md:text-7xl text-white/80">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12 items-center">
              {["Curiosity", "·", "Mathematics", "·", "Systems", "·", "AI", "·", "Build", "·", "Repeat", "·"].map((w, i) => (
                <span key={`${k}-${i}`} className={w === "·" ? "text-brand-accent" : ""}>{w}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TOOLKIT ---------------- */

function Toolkit() {
  return (
    <section id="toolkit" className="relative py-28 md:py-40 px-6 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
        <div className="md:w-1/3">
          <Reveal>
            <div className="flex items-center gap-3 mb-6 font-mono text-[10px] tracking-[0.3em] uppercase text-brand-accent">
              <span>05</span>
              <div className="line-grow h-px w-24 bg-brand-accent" />
              Toolkit
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              The instruments<br />I think with.
            </h2>
          </Reveal>
        </div>

        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-y-10 md:gap-y-12 gap-x-10">
          {[
            { label: "Languages", items: ["Python", "TypeScript", "C++", "SQL"] },
            { label: "AI / ML", items: ["PyTorch", "Transformers", "scikit-learn", "OpenCV"] },
            { label: "Systems", items: ["Docker", "Kubernetes", "Postgres", "Redis"] },
            { label: "Cloud", items: ["AWS", "GCP", "Cloudflare", "Vercel"] },
            { label: "Frontend", items: ["React", "Next.js", "Tailwind", "Framer"] },
            { label: "Craft", items: ["Figma", "Linear", "Git", "Notion"] },
          ].map((col, i) => (
            <Reveal key={col.label} delay={i * 70}>
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-brand-muted mb-3">
                  {col.label}
                </span>
                <ul className="space-y-2 text-sm">
                  {col.items.map((it) => (
                    <li key={it} data-cursor="hover" className="hover:text-brand-accent transition-colors cursor-pointer">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */

function Contact() {
  return (
    <section id="connect" className="relative pt-32 md:pt-40 pb-28 px-6 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-12 font-mono text-[10px] tracking-[0.3em] uppercase text-brand-accent">
            <span>06</span>
            <div className="line-grow h-px w-24 bg-brand-accent" />
            Contact
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.03em] max-w-5xl">
            Let&apos;s build something
            <br />
            <span className="text-gradient">meaningful.</span>
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <Reveal delay={160}>
            <Magnetic strength={0.2}>
              <a
                href="mailto:sikander.prajapati@cs.edu"
                className="btn-shine inline-flex items-center gap-3 text-lg md:text-2xl font-display border-b border-white/20 pb-2 hover:border-brand-accent hover:text-brand-accent transition-colors"
              >
                sikander.prajapati@cs.edu
                <span aria-hidden>↗</span>
              </a>
            </Magnetic>
          </Reveal>

          <Reveal delay={220}>
            <ul className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-[10px] tracking-[0.3em] uppercase text-brand-muted">
              {[
                ["GitHub", "#"],
                ["LinkedIn", "#"],
                ["Twitter", "#"],
                ["Resume", "#"],
              ].map(([k, href]) => (
                <li key={k}>
                  <a href={href} data-cursor="hover" className="hover:text-white transition-colors">
                    {k}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer className="px-6 md:px-10 py-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-brand-faint">
        <span>© 2026 · SP Laboratory</span>
        <span>There are still more ideas than time.</span>
      </div>
    </footer>
  );
}
