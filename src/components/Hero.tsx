"use client";

import React from "react";
import { Search, Sparkles } from "lucide-react";

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

export default function Hero({ searchQuery, setSearchQuery }: HeroProps) {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-16 md:py-24 border-b border-white/5 overflow-hidden">
      {/* Background glowing decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-tr from-violet-600/10 to-pink-500/10 rounded-full blur-[80px] -z-10 pointer-events-none" />

      {/* Hero Badge */}
      <div className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3.5 py-1.5 text-xs font-medium text-violet-300 backdrop-blur-md mb-6 hover:border-violet-500/30 transition-all cursor-default">
        <Sparkles className="h-3.5 w-3.5" />
        <span>Synthesizing Design & Development Paradigms</span>
      </div>

      {/* Main Headlines */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl leading-[1.15] mb-6">
        Discover the Craft of{" "}
        <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
          Modern Engineering
        </span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
        Guides, deep dives, and discussions on UI aesthetics, server-side performance, React architectures, and developer velocity.
      </p>

      {/* Search Input Box */}
      <div className="w-full max-w-md px-4">
        <div className="relative flex items-center">
          <Search className="absolute left-4 h-5 w-5 text-slate-500 pointer-events-none" />
          <input
            type="text"
            placeholder="Search articles, tags, or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl bg-white/5 border border-white/10 px-12 py-3.5 text-sm md:text-base text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/60 focus:bg-white/[0.08] focus:ring-4 focus:ring-violet-500/10 transition-all shadow-xl"
            aria-label="Search articles"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 text-xs font-semibold text-slate-500 hover:text-white transition-colors"
            >
              Clear
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
