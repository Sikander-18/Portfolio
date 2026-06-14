import { useEffect, useState } from "react";

const STEPS = [
  "Loading Curiosity",
  "Loading Mathematics",
  "Loading Code",
  "Loading AI",
  "Building Systems",
];

export function Loader({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const totalMs = 2200;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / totalMs);
      setProgress(p);
      setStep(Math.min(STEPS.length - 1, Math.floor(p * STEPS.length)));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setLeaving(true);
        setTimeout(onDone, 650);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-brand-bg flex items-center justify-center"
      style={{
        animation: leaving ? "loader-out 650ms cubic-bezier(.7,0,.3,1) forwards" : undefined,
      }}
      aria-hidden={leaving}
    >
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-radial-fade" />

      <div className="relative w-[min(540px,86vw)] font-mono text-sm">
        <div className="flex items-center gap-2 text-brand-muted mb-6">
          <span className="w-2 h-2 rounded-full bg-brand-accent" />
          <span className="text-[10px] tracking-[0.3em] uppercase">
            Initializing&nbsp;SIKANDER.exe
          </span>
        </div>

        <div className="text-white/90 mb-3 h-5">
          <span>&gt; {STEPS[step]}</span>
          <span className="cursor-blink">_</span>
        </div>

        <div className="h-px w-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent"
            style={{ width: `${progress * 100}%`, transition: "width 120ms linear" }}
          />
        </div>

        <div className="mt-3 flex justify-between text-[10px] tracking-widest uppercase text-brand-faint">
          <span>{Math.round(progress * 100).toString().padStart(3, "0")}%</span>
          <span>SP_LAB / 2026</span>
        </div>
      </div>
    </div>
  );
}
