"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="w-full bg-black text-white text-sm py-2.5 px-4 flex items-center justify-center relative">
      <p className="text-center text-xs sm:text-sm">
        🔥 <strong>India&apos;s First AI Voice Salesman</strong>
        <span className="mx-2 text-white/40">|</span>
        40% of paid traffic leave because no one helps them buy.{" "}
        <a
          href="#cta"
          className="font-semibold underline underline-offset-2 hover:text-white/80 transition-colors"
        >
          Book a Demo
        </a>
      </p>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
        aria-label="Dismiss announcement"
      >
        <X size={16} />
      </button>
    </div>
  );
}
