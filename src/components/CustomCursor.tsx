"use client";

import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";

export default function CustomCursor() {
  const cursorRingRef = useRef<HTMLDivElement | null>(null);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const [label, setLabel] = useState<string | null>(null);
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
      } else {
        setLabel(null);
        setIsHovered(false);
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
          <span className="text-[9px] font-mono font-bold tracking-widest text-background uppercase animate-fade-in select-none">
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
    </>
  );
}
