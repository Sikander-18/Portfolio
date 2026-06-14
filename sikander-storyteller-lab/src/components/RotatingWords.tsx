import { useEffect, useState } from "react";

export function RotatingWords({
  words,
  interval = 2200,
  className = "",
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => window.clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className={`relative inline-flex overflow-hidden align-bottom ${className}`}>
      <span className="invisible whitespace-nowrap">{words.reduce((a,b)=>a.length>b.length?a:b)}</span>
      {words.map((w, idx) => (
        <span
          key={w}
          aria-hidden={idx !== i}
          className="absolute inset-0 flex items-center justify-start transition-all duration-700 ease-[cubic-bezier(.2,.8,.2,1)]"
          style={{
            transform: `translateY(${(idx - i) * 100}%)`,
            opacity: idx === i ? 1 : 0,
          }}
        >
          {w}
        </span>
      ))}
    </span>
  );
}
