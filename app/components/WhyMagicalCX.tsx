"use client";

import { useState } from "react";
import {
  VolumeX,
  Globe,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";

const slides = [
  {
    icon: VolumeX,
    title: "Silent Customers",
    subtitle: "Your customer liked the product but doesn\u2019t know how to buy.",
    description:
      "They don\u2019t know how to browse or buy online \u2014 so they leave silently. No questions asked, no help offered. You lose the sale without ever knowing.",
    quote: "40% of paid traffic leave because no one helps them buy.",
  },
  {
    icon: Globe,
    title: "Silent Exploration",
    subtitle: "Small town & village buyers know local language.",
    description:
      "English gives fear. Your website speaks only English, but your customers think in Hindi, Tamil, Bengali, Telugu. They can\u2019t express what they want.",
    quote: "Hum ko bas bhojpuri aur hindi aati hai. Dekhke chhod dete hai.",
  },
  {
    icon: HelpCircle,
    title: "Silent Hesitations",
    subtitle: "Customers have doubts on quality, size, functionality.",
    description:
      "When customers have questions about material, sizing, or quality \u2014 there\u2019s no one to answer. Every unanswered doubt is a lost sale.",
    quote: "Will this color fade? Is this true to size? No one answers \u2014 they leave.",
  },
  {
    icon: AlertTriangle,
    title: "Silent Problems",
    subtitle: "You don\u2019t know why visitors leave without buying.",
    description:
      "Is it the collection? The price? The size? A doubt about quality? You have no visibility into what\u2019s going wrong. You\u2019re spending on ads but flying blind.",
    quote: "96 out of 100 visitors leave without buying. That\u2019s your money walking away.",
  },
];

export default function WhyMagicalCX() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="bg-background dark">
      <section className="section-container border py-24 md:py-32 bg-background overflow-hidden dark">
        <div className="max-w-5xl mx-auto text-center mb-16 section-container-padding">
          <h2 className="section-heading">
            <span className="text-muted-foreground">You&apos;re Paying Rs.50\u2013Rs.200 Per Click.</span>{" "}
            <span>Most Leave in 60 Seconds.</span>
          </h2>
          <p className="section-subheadline">
            96 out of 100 visitors leave without buying. That&apos;s your money walking away.
          </p>
        </div>

        {/* Ad Spend Funnel */}
        <div className="max-w-3xl mx-auto mb-16 section-content-padding">
          <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
            {[
              { number: "100", label: "Ad Clicks", loss: "" },
              { number: "30", label: "Leave Immediately", loss: "-70%" },
              { number: "17", label: "Browse Products", loss: "-45%" },
              { number: "4", label: "Actually Buy", loss: "-21%" },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-card border border-border rounded-lg p-3 md:p-4">
                  <div className="text-xl md:text-2xl font-medium text-foreground">{step.number}</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground mt-1">{step.label}</div>
                  {step.loss && (
                    <div className="text-[10px] font-medium text-muted-foreground mt-1">{step.loss}</div>
                  )}
                </div>
                {i < 3 && (
                  <div className="absolute top-1/2 -right-1 md:-right-2 -translate-y-1/2 text-muted-foreground text-xs">&rarr;</div>
                )}
              </div>
            ))}
          </div>
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
                        THE IMPACT
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
