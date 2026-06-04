"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactSubpage() {
  return (
    <div className="min-h-screen w-full bg-background p-6 md:p-12 relative overflow-hidden flex flex-col justify-between">
      
      {/* Container */}
      <div className="max-w-5xl mx-auto w-full flex flex-col gap-6">
        
        {/* Navigation header */}
        <div className="flex justify-between items-center select-none mb-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-[10px] text-zinc-400 hover:text-white uppercase tracking-widest font-bold transition-colors group"
            data-cursor="CONNECT"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>Return Home</span>
          </Link>
          
          <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
            Sikander Prajapati &bull; Contact Interface
          </span>
        </div>

        {/* Mount Contact Form */}
        <div className="-mt-16 pointer-events-auto">
          <ContactForm />
        </div>

      </div>

    </div>
  );
}
