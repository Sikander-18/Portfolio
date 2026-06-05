import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sikander Prajapati | From Ideas to Systems",
  description: "AI & ML Engineer and Software Developer specializing in building scalable AI-integrated systems, deterministic automated pipelines, and intelligent tools from Mumbai, India.",
  keywords: ["Sikander Prajapati", "AI Engineer", "Software Developer", "Machine Learning", "FastAPI", "Next.js", "Mumbai Developer", "VitalGuard", "Offline RAG", "EventSphere"],
  authors: [{ name: "Sikander Prajapati" }],
  openGraph: {
    title: "Sikander Prajapati | From Ideas to Systems",
    description: "Building AI-powered systems from curiosity, mathematics, and code.",
    url: "https://sikander.dev", // Replace with final deployment URL
    siteName: "Sikander Prajapati Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sikander Prajapati | From Ideas to Systems",
    description: "Building AI-powered systems from curiosity, mathematics, and code.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} font-sans bg-background text-foreground antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
