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
      <nav className="w-full bg-white/90 backdrop-blur-md border-b border-[#e5e5e5] transition-colors duration-300">
        <div className="section-container py-2.5 px-4 pr-2 md:px-6 lg:px-4 flex items-center justify-between">
          <a
            aria-label="SpeedShop AI Home"
            className="relative inline-flex items-center focus:outline-none z-50"
            href="/"
          >
            <span className="font-medium text-base text-[#0a0a0a]">SpeedShop AI</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            <a className="transition-colors text-sm text-[#737373] hover:text-[#0a0a0a]" href="#the-problem">
              The Problem
            </a>
            <a className="transition-colors text-sm text-[#737373] hover:text-[#0a0a0a]" href="#meet-arya">
              Meet Arya
            </a>
            <a className="transition-colors text-sm text-[#737373] hover:text-[#0a0a0a]" href="#how-it-works">
              How It Works
            </a>
            <a className="transition-colors text-sm text-[#737373] hover:text-[#0a0a0a]" href="#faq">
              FAQ
            </a>
            <div className="flex items-center gap-6 ml-0">
              <button className="cursor-pointer text-sm rounded-full font-medium transition-all duration-300 px-4 py-1.5 bg-black text-white hover:bg-black/80">
                Book a Demo
              </button>
            </div>
          </div>

          <button
            className="inline-flex cursor-pointer items-center justify-center rounded-full hover:bg-gray-100 size-9 md:hidden z-50 relative"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="text-[#0a0a0a]" size={22} /> : <Menu className="text-[#0a0a0a]" size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[88px] z-40 bg-white/98 backdrop-blur-md p-6 flex flex-col gap-4 border-t border-[#e5e5e5]">
          <a href="#the-problem" className="text-lg text-[#0a0a0a]" onClick={() => setMobileOpen(false)}>The Problem</a>
          <a href="#meet-arya" className="text-lg text-[#0a0a0a]" onClick={() => setMobileOpen(false)}>Meet Arya</a>
          <a href="#how-it-works" className="text-lg text-[#0a0a0a]" onClick={() => setMobileOpen(false)}>How It Works</a>
          <a href="#faq" className="text-lg text-[#0a0a0a]" onClick={() => setMobileOpen(false)}>FAQ</a>
          <button className="mt-4 text-sm rounded-full font-medium px-4 py-2 bg-black text-white hover:bg-black/80 w-fit">
            Book a Demo
          </button>
        </div>
      )}
    </div>
  );
}
