"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import AnnouncementBar from "./AnnouncementBar";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Announcement bar */}
      <AnnouncementBar />

      {/* Main nav */}
      <nav className="w-full bg-white/90 backdrop-blur-md border-b border-neutral-200 transition-colors duration-300 text-neutral-900">
        <div className="section-container py-1.5 px-4 pr-2 md:px-6 lg:px-4 flex items-center justify-between">
          <a
            aria-label="SpeedShop AI Home"
            className="relative inline-flex items-center gap-2 focus:outline-none z-50"
            href="/"
          >
            <svg viewBox="0 0 200 200" width={36} height={36} className="flex-shrink-0">
              <rect x="10" y="10" width="180" height="180" rx="36" fill="#0a0a0a" />
              <path d="M 55 48 L 100 118 L 145 48" fill="none" stroke="#fff" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
              {[0,1,2,3,4,5,6].map(i => {
                const heights = [10, 18, 26, 34, 26, 18, 10];
                const h = heights[i];
                return (
                  <rect key={i} x={54 + i * 13} y={162 - h} width={7} height={h} rx={3.5} fill="#fff" />
                );
              })}
            </svg>
            <span className="font-semibold text-base text-neutral-900 tracking-tight">SpeedShop AI</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            <a className="transition-colors text-sm text-neutral-500 hover:text-neutral-900" href="/#the-problem">
              Features
            </a>
            <a className="transition-colors text-sm text-neutral-500 hover:text-neutral-900" href="/pricing">
              Pricing
            </a>
            <a className="transition-colors text-sm text-neutral-500 hover:text-neutral-900" href="/about">
              About
            </a>
            <a
              href="/#cta"
              className="text-sm rounded-full font-medium transition-colors duration-200 px-4 py-1.5 bg-neutral-900 text-white hover:bg-neutral-800"
            >
              Book a Demo
            </a>
          </div>

          <button
            className="inline-flex cursor-pointer items-center justify-center rounded-full hover:bg-gray-100 size-9 md:hidden z-50 relative"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="text-neutral-900" size={22} /> : <Menu className="text-neutral-900" size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[88px] z-40 bg-white/98 backdrop-blur-md p-6 flex flex-col gap-4 border-t border-neutral-200">
          <a href="/#the-problem" className="text-lg text-neutral-900" onClick={() => setMobileOpen(false)}>Features</a>
          <a href="/pricing" className="text-lg text-neutral-900" onClick={() => setMobileOpen(false)}>Pricing</a>
          <a href="/about" className="text-lg text-neutral-900" onClick={() => setMobileOpen(false)}>About</a>
          <a
            href="/#cta"
            className="mt-4 inline-flex w-fit text-sm rounded-full font-medium px-4 py-2 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Book a Demo
          </a>
        </div>
      )}
    </div>
  );
}
