"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MissionsSection from "../../components/missions/MissionsSection";

export default function MissionsPage() {
  return (
    <div className="min-h-screen py-24 px-4 md:px-8 max-w-5xl mx-auto flex flex-col gap-8 text-left">
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
      <MissionsSection />
    </div>
  );
}
