"use client";

import { useState } from "react";
import {
  HeartHandshake,
  FolderOpen,
  MessageCircleMore,
  FileText,
} from "lucide-react";

const slides = [
  {
    icon: HeartHandshake,
    title: "DIY or Done-for-you",
    subtitle: "You choose the level of involvement.",
    description:
      "Simple enough to set up on your own. But if you'd prefer, we offer a full done-for-you, white-glove setup at no extra cost.",
    quote: "Zero hassle integration. We do the heavy lifting so you don't have to.",
  },
  {
    icon: FolderOpen,
    title: "Memory that feels human",
    subtitle: "Other bots forget. MagicalCX listens and remembers.",
    description:
      "It recalls past chats, issues, and promises to avoid asking the same basic questions again.",
    quote: "Your brand treats customers like a relationship, not a ticket.",
  },
  {
    icon: MessageCircleMore,
    title: "EFRO\u2122 + HumanlyClear\u2122",
    subtitle: "Empathetic Agentic Intelligence",
    description:
      "Trained for emotional clarity and business precision, balancing customer empathy with your revenue goals.",
    quote: "Conversations that build loyalty and lifetime value, not just resolutions.",
  },
  {
    icon: FileText,
    title: "Dashboards & Insights",
    subtitle: 'Tell you exactly "how it\'s going"',
    description:
      'Live dashboards and weekly reports give you a crystal-clear answer to "How are our conversations going?" with concrete suggestions.',
    quote: "You start steering with clear, actionable data.",
  },
];

export default function WhyMagicalCX() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="bg-background dark">
      <section className="section-container border py-24 md:py-32 bg-background overflow-hidden dark">
        <div className="max-w-5xl mx-auto text-center mb-16 section-container-padding">
          <h2 className="section-heading">
            <span className="text-muted-foreground">Why MagicalCX is the</span>{" "}
            <span>smarter choice</span>
          </h2>
          <p className="section-subheadline">
            It&apos;s the world&apos;s only AI engine that remembers like a CRM, acts like an agent,
            and thinks like an empathetic salesperson.
          </p>
        </div>

        <div className="relative section-content-padding">
          <div
            className="flex gap-0 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            {slides.map((slide, i) => (
              <div key={i} className="flex-shrink-0 w-full snap-center px-2 md:px-12"
                style={{ display: i === current ? "block" : "none" }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full min-h-[420px]">
                  <div className="bg-card rounded-3xl border border-border p-6 md:p-8 lg:p-16 flex flex-col justify-center h-full">
                    <div className="mb-6">
                      <slide.icon className="size-9 md:size-11 text-foreground stroke-[1.5]" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-medium mb-5 text-foreground tracking-tight">
                      {slide.title}
                    </h3>
                    <p className="text-base text-foreground font-normal mb-6">{slide.subtitle}</p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                  <div className="bg-card rounded-3xl border border-border p-6 md:p-8 lg:p-16 flex flex-col items-center justify-center text-center h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 to-transparent pointer-events-none" />
                    <div className="relative z-10 max-w-md mx-auto">
                      <div className="text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase mb-6">
                        THE OUTCOME
                      </div>
                      <p className="text-2xl md:text-3xl font-serif italic leading-snug text-foreground">
                        &ldquo;{slide.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-content-padding flex items-center justify-between gap-4 mt-8">
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all cursor-pointer rounded-full ${
                    i === current
                      ? "w-8 h-2 bg-foreground"
                      : "w-2 h-2 bg-muted-foreground/40 hover:bg-muted-foreground/60"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrent(Math.max(0, current - 1))}
                disabled={current === 0}
                className="inline-flex cursor-pointer items-center justify-center rounded-full w-10 h-10 border bg-background/5 border-border/10 text-foreground hover:bg-background/10 disabled:opacity-30 transition-all"
                aria-label="Previous"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrent(Math.min(slides.length - 1, current + 1))}
                disabled={current === slides.length - 1}
                className="inline-flex cursor-pointer items-center justify-center rounded-full w-10 h-10 border bg-background/5 border-border/10 text-foreground hover:bg-background/10 disabled:opacity-30 transition-all"
                aria-label="Next"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
