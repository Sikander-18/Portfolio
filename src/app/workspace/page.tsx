"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CurrentlyBuilding from "../../components/building/CurrentlyBuilding";
import DigitalWorkshop from "../../components/workshop/DigitalWorkshop";

export default function WorkshopPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-8 md:px-16 lg:px-24 max-w-[1200px] mx-auto flex flex-col gap-12 text-left">
      <div>
        <Link
          href="/"
          className="clay-button px-5 py-2.5 rounded-xl text-xs inline-flex items-center gap-2 group pointer-events-auto"
          data-cursor="OPEN"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Return Home</span>
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        <span className="font-mono text-[10px] text-primary-purple uppercase tracking-widest font-bold">
          Developer Lab
        </span>
        <h1 className="font-display font-extrabold text-3xl md:text-5xl text-text-dark tracking-tight">
          Digital Workshop
        </h1>
        <p className="text-muted-text text-sm leading-relaxed max-w-2xl font-sans font-medium">
          A live look into my coding pipelines, active local systems under development, languages breakdown, and active logs.
        </p>
      </div>

      {/* Dev progress rings */}
      <CurrentlyBuilding />

      {/* Workshop widgets grid */}
      <DigitalWorkshop />
    </div>
  );
}
