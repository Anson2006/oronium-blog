"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Cpu, Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#090a0f]/65 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Link href="/" className="group flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 to-pink-500 text-white shadow-lg shadow-violet-500/20 transition-all duration-300 group-hover:scale-105 group-hover:rotate-6">
                <Cpu className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white bg-clip-text transition-all duration-300">
                Oronium<span className="text-violet-500 group-hover:animate-pulse">⚙️</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/#categories"
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              Categories
            </Link>
            <a
              href="#"
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              Newsletter
            </a>
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/10 hover:shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-violet-500 hover:to-indigo-500">
              <Sparkles className="h-4 w-4" />
              <span>Subscribe</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/5 bg-[#090a0f]/95 px-4 py-4 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block rounded-lg px-3 py-2 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white"
          >
            Articles
          </Link>
          <Link
            href="/#categories"
            onClick={() => setMobileMenuOpen(false)}
            className="block rounded-lg px-3 py-2 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white"
          >
            Categories
          </Link>
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block rounded-lg px-3 py-2 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white"
          >
            About
          </a>
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block rounded-lg px-3 py-2 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white"
          >
            Newsletter
          </a>
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white">
            <Sparkles className="h-4 w-4" />
            <span>Subscribe</span>
          </button>
        </div>
      )}
    </nav>
  );
}
