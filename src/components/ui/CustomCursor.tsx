"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable custom cursor on desktop screens
    if (window.innerWidth < 1024) return;

    setIsVisible(true);
    document.documentElement.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverElement = target.closest("[data-cursor]");
      if (hoverElement) {
        const text = hoverElement.getAttribute("data-cursor");
        setCursorText(text || "");
      } else {
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  const hasText = !!cursorText;

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: hasText ? 72 : 14,
        height: hasText ? 72 : 14,
        backgroundColor: hasText ? "rgba(139, 92, 246, 0.9)" : "rgba(139, 92, 246, 0.3)",
        borderColor: hasText ? "rgba(255, 255, 255, 0.8)" : "rgba(139, 92, 246, 0.8)",
      }}
      transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.6 }}
      className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9999] flex items-center justify-center text-white font-mono text-[8px] font-bold tracking-widest uppercase shadow-[0_0_24px_rgba(139,92,246,0.25)]"
    >
      {hasText && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
}
