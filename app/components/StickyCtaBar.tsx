"use client";

import { useState, useEffect } from "react";
import { Globe, ArrowRight } from "lucide-react";

export default function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const form = document.getElementById("hero-cta-form");
    if (!form) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="py-3 px-4">
        <div className="section-container flex items-center justify-center">
          <form className="relative group w-full max-w-lg">
            <div className="relative">
              <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none">
                <Globe className="h-5 w-5 text-[#737373]/50 group-focus-within:text-black/40 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Enter your website URL"
                className="w-full h-14 rounded-lg border border-[#e5e5e5] bg-white pl-11 pr-4 text-base transition-all focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 sm:pr-36"
              />
              <button
                type="submit"
                className="hidden sm:flex absolute right-1.5 top-1.5 h-11 px-5 rounded-md bg-black text-white font-medium text-sm hover:bg-black/80 transition-colors items-center gap-2"
              >
                Try Free Demo
                <ArrowRight className="size-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
