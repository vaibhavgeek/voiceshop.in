"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface AnnouncementBarProps {
  show?: boolean;
  badge?: string;
  message?: string;
  linkText?: string;
  linkHref?: string;
}

export default function AnnouncementBar({
  show = true,
  badge = "🔥 India's First AI Voice Salesman",
  message = "40% of paid traffic leave because no one helps them buy.",
  linkText = "Book a Demo",
  linkHref = "/#cta",
}: AnnouncementBarProps) {
  const [dismissed, setDismissed] = useState(false);

  if (!show || dismissed) return null;

  return (
    <div className="w-full bg-black text-white text-sm py-2.5 px-4 flex items-center justify-center relative">
      <p className="text-center text-xs sm:text-sm">
        <strong>{badge}</strong>
        <span className="mx-2 text-white/40">|</span>
        {message}{" "}
        <a
          href={linkHref}
          className="font-semibold underline underline-offset-2 hover:text-white/80 transition-colors"
        >
          {linkText}
        </a>
      </p>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
        aria-label="Dismiss announcement"
      >
        <X size={16} />
      </button>
    </div>
  );
}
