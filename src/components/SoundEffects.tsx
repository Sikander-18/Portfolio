"use client";

import { useEffect, useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { clsx } from "clsx";

export default function SoundEffects() {
  const [isMuted, setIsMuted] = useState(true);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Initialize Audio Context on user interaction
  const initAudio = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    }
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
  };

  // Synthesize standard hover click (micro-click)
  const playHoverClick = () => {
    if (isMuted) return;
    initAudio();
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    const time = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(1200, time);
    osc.frequency.exponentialRampToValueAtTime(800, time + 0.015);

    gain.gain.setValueAtTime(0.015, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.015);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(time);
    osc.stop(time + 0.02);
  };

  // Synthesize select click
  const playSelectClick = () => {
    if (isMuted) return;
    initAudio();
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    const time = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(600, time);
    osc.frequency.exponentialRampToValueAtTime(300, time + 0.03);

    gain.gain.setValueAtTime(0.03, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(time);
    osc.stop(time + 0.05);
  };

  // Trigger boot-up tone when user unmutes for the first time
  const handleToggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    
    // Play sound immediately if unmuting
    if (!nextMute) {
      setTimeout(() => {
        setIsMuted(false);
        initAudio();
        // Play small double beep on activation
        const ctx = audioCtxRef.current;
        if (ctx) {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(880, ctx.currentTime);
          gain.gain.setValueAtTime(0.03, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.1);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 0.12);
        }
      }, 50);
    }
  };

  // Hook global click/hover triggers to support automatic interface auditory cues
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Trigger click sound on items that have explicit cursors or clickable classes
      if (
        target.closest("button") || 
        target.closest("a") || 
        target.closest("[data-cursor]") ||
        target.classList.contains("interactive-node")
      ) {
        playHoverClick();
      }
    };

    const handleSelectClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("button") || 
        target.closest("a") || 
        target.closest("[data-cursor]")
      ) {
        playSelectClick();
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("click", handleSelectClick);

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("click", handleSelectClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMuted]);

  return (
    <div className="fixed top-6 right-6 z-[9990] flex items-center gap-3">
      {/* Sound indicator overlay */}
      {!isMuted && (
        <div className="flex items-center gap-0.5 h-3.5 select-none opacity-60">
          <span className="w-0.5 h-full bg-accent rounded-full animate-[pulse_0.8s_infinite]" />
          <span className="w-0.5 h-3 bg-accent rounded-full animate-[pulse_0.8s_infinite_0.15s]" />
          <span className="w-0.5 h-2 bg-accent rounded-full animate-[pulse_0.8s_infinite_0.3s]" />
          <span className="w-0.5 h-4 bg-accent rounded-full animate-[pulse_0.8s_infinite_0.45s]" />
        </div>
      )}
      
      {/* Dynamic Toggle Button */}
      <button
        onClick={handleToggleMute}
        className={clsx(
          "p-2 rounded-full border bg-background/80 backdrop-blur-md transition-all duration-300 pointer-events-auto hover:scale-105 active:scale-95 group",
          isMuted 
            ? "border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700" 
            : "border-primary/50 text-accent hover:border-primary"
        )}
        title={isMuted ? "Unmute system feedback sounds" : "Mute system sounds"}
        data-cursor="CONNECT"
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4 transition-transform group-hover:scale-110" />
        ) : (
          <Volume2 className="w-4 h-4 transition-transform group-hover:scale-110 animate-pulse" />
        )}
      </button>
    </div>
  );
}
