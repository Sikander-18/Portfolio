"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ContactForm from "../../components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto flex flex-col gap-12 text-left">
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
      <ContactForm />
    </div>
  );
}
