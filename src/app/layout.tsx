import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "../components/layout/ClientLayout";
import Header from "../components/layout/Header";

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

export const metadata: Metadata = {
  title: "Sikander Prajapati | From Ideas to Systems",
  description: "Personal portfolio of Sikander Prajapati - AI & ML Engineer and Software Builder specializing in transforming complex ideas into functional real-world systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ClientLayout>
          {/* Header navigation bar */}
          <Header />

          {/* Core Content Shell */}
          <main className="flex-1 w-full transition-all duration-300">
            {children}
          </main>
        </ClientLayout>
      </body>
    </html>
  );
}
