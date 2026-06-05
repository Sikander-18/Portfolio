"use client";

import { clsx } from "clsx";

interface TextRollProps {
  text: string;
  className?: string;
  groupClassName?: string;
}

export default function TextRoll({ text, className, groupClassName = "group/link" }: TextRollProps) {
  const letters = text.split("");

  return (
    <span className={clsx("inline-flex overflow-hidden relative select-none", className, groupClassName)}>
      {letters.map((char, index) => {
        if (char === " ") {
          return <span key={index}>&nbsp;</span>;
        }

        return (
          <span
            key={index}
            className="relative inline-block overflow-hidden"
            style={{ verticalAlign: "middle" }}
          >
            {/* Upper line: slides up on hover */}
            <span
              className="inline-block transition-transform duration-300 ease-in-out group-hover/link:-translate-y-full group-hover/btn:-translate-y-full"
              style={{ transitionDelay: `${index * 20}ms` }}
            >
              {char}
            </span>
            
            {/* Lower line: slides up into view on hover */}
            <span
              className="absolute left-0 top-0 translate-y-full inline-block transition-transform duration-300 ease-in-out group-hover/link:translate-y-0 group-hover/btn:translate-y-0 text-accent font-semibold"
              style={{ transitionDelay: `${index * 20}ms` }}
            >
              {char}
            </span>
          </span>
        );
      })}
    </span>
  );
}
