"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { VolumeX, Globe, HelpCircle, AlertTriangle, ChevronLeft, ChevronRight } from "lucide-react";

const funnelSteps = [
  { number: "100", label: "Land on your site" },
  { number: "70", label: "Leave in-session" },
  { number: "26", label: "Browse, then drop" },
  { number: "4", label: "Actually buy from your store" },
];

const silentWords = ["Customers", "Exploration", "Hesitations", "Problems"];

const problems = [
  {
    icon: Globe,
    title: "Your site is not in their language",
    description:
      "They can't express what they want. Search, filters, and copy are English-first; they think in Hindi, Tamil, or Bhojpuri. On site they can't use filters or the size chart with comfort, so they close the tab in the same visit.",
  },
  {
    icon: VolumeX,
    title: "No one to guide them on the site",
    description:
      "They are on your site, but no one greets or guides them, so they leave without ever asking. You pay for the visit and still lose the sale, often with no clear signal they were stuck.",
  },
  {
    icon: HelpCircle,
    title: "They have doubts, but no on-site response",
    description:
      "On the product page they almost add to cart, but doubts about fabric, size, and quality have no on-site answer. They don't open chat; they just leave, after you already paid to get them that far.",
  },
  {
    icon: AlertTriangle,
    title: "You do not see why the visit still fails",
    description:
      "Reports show traffic and product views, not which on-site moment broke trust — price, size, or delivery. You keep buying ads; the same post-visit drop repeats.",
  },
];

const INACTIVITY_MS = 60_000;

export default function WhyMagicalCX() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [isErasing, setIsErasing] = useState(false);
  const [boxVisible, setBoxVisible] = useState(true);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fullWord = silentWords[activeIndex];

  useEffect(() => {
    if (isPaused) return;

    let timeout: ReturnType<typeof setTimeout>;

    if (!isErasing) {
      if (displayedWord.length < fullWord.length) {
        timeout = setTimeout(() => {
          setDisplayedWord(fullWord.slice(0, displayedWord.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => {
          setBoxVisible(false);
          setIsErasing(true);
        }, 3500);
      }
    } else {
      if (displayedWord.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedWord(displayedWord.slice(0, -1));
        }, 40);
      } else {
        const target =
          nextIndex !== null ? nextIndex : (activeIndex + 1) % silentWords.length;
        setNextIndex(null);
        setActiveIndex(target);
        setIsErasing(false);
        setTimeout(() => setBoxVisible(true), 80);
      }
    }

    return () => clearTimeout(timeout);
  }, [isPaused, isErasing, displayedWord, fullWord, activeIndex, nextIndex]);

  useEffect(() => {
    return () => {
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    };
  }, []);

  const scheduleResume = useCallback(() => {
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    inactivityTimer.current = setTimeout(() => setIsPaused(false), INACTIVITY_MS);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setIsPaused(true);
      setActiveIndex(index);
      setDisplayedWord(silentWords[index]);
      setIsErasing(false);
      setNextIndex(null);
      setBoxVisible(true);
      scheduleResume();
    },
    [scheduleResume]
  );

  const goNext = useCallback(
    () => goTo((activeIndex + 1) % silentWords.length),
    [activeIndex, goTo]
  );

  const goPrev = useCallback(
    () => goTo((activeIndex - 1 + silentWords.length) % silentWords.length),
    [activeIndex, goTo]
  );

  const problem = problems[activeIndex];

  return (
    <div className="dark bg-background text-foreground">
      <section
        className="section-container border-x border-b py-24 md:py-32 bg-background"
        id="the-silence"
      >
        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-16 section-container-padding">
          <h2 className="section-heading">
            <span className="block text-foreground font-normal">
              You pay &#8377;100+ on ads to get users on your website.
            </span>
            <span className="block font-bold text-[2.15rem] md:text-[2.6rem] mt-2">
              But 90%+ don&apos;t buy!
            </span>
          </h2>
        </div>

        {/* Funnel */}
        <div className="max-w-3xl mx-auto section-content-padding">
          <div className="flex items-center text-center">
            {funnelSteps.map((step, i) => {
              const isLast = i === funnelSteps.length - 1;
              const isFirst = i === 0;
              return (
                <div key={i} className="flex items-center flex-1 min-w-0">
                  <div
                    className={`flex-1 py-5 px-3 md:px-5 border-y border-l border-border ${
                      isLast
                        ? "bg-foreground text-background rounded-r-lg border-r"
                        : "bg-card"
                    } ${isFirst ? "rounded-l-lg" : ""}`}
                  >
                    <div
                      className={`text-2xl md:text-3xl font-semibold tracking-tight ${
                        isLast ? "text-background" : "text-foreground"
                      }`}
                    >
                      {step.number}
                    </div>
                    <div
                      className={`text-xs md:text-sm mt-1.5 font-medium ${
                        isLast ? "text-background/80" : "text-foreground"
                      }`}
                    >
                      {step.label}
                    </div>
                  </div>
                  {!isLast && (
                    <div className="flex items-center justify-center w-6 md:w-8 bg-card border-y border-border text-muted-foreground shrink-0">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Why? connector — vertical line → arrow → pill → line → arrow */}
        <div className="flex flex-col items-center mb-14">
          <div className="w-px h-10 bg-border" />
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="currentColor"
            className="text-border -mt-px"
          >
            <path d="M6 7L0 0h12z" />
          </svg>
          <div className="bg-foreground rounded-full px-8 py-3 my-3">
            <span className="font-semibold text-background text-base tracking-tight">
              Why?
            </span>
          </div>
          <div className="w-px h-10 bg-border" />
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="currentColor"
            className="text-border -mt-px"
          >
            <path d="M6 7L0 0h12z" />
          </svg>
        </div>

        {/* Your Store Has Silent XYZ */}
        <div className="max-w-5xl mx-auto text-center mb-10 section-content-padding">
          <p
            className="font-medium text-foreground tracking-tight leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
          >
            Your Store Has{" "}
            <span
              className="font-bold"
              style={{ fontSize: "1.1em" }}
            >
              Silent
            </span>{" "}
            <span
              className="font-bold"
              style={{ fontSize: "1.1em" }}
            >
              {displayedWord}
              <span className="animate-cursor-blink inline-block w-[2px] h-[0.85em] bg-foreground align-middle ml-0.5" />
            </span>
          </p>
        </div>

        {/* Problem box */}
        <div className="max-w-3xl mx-auto section-content-padding">
          <div
            className="transition-opacity duration-300"
            style={{ opacity: boxVisible ? 1 : 0 }}
          >
            <div className="bg-card border border-border rounded-xl p-8 md:p-10">
              <div className="flex items-start gap-4 mb-5">
                <div className="rounded-lg bg-muted p-2.5 shrink-0">
                  <problem.icon className="size-5 text-foreground stroke-[1.5]" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-foreground tracking-tight pt-1">
                  {problem.title}
                </h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-5 mt-8">
            <button
              onClick={goPrev}
              className="p-2 rounded-full border border-border bg-card text-foreground hover:bg-muted transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="size-5" />
            </button>

            <div className="flex items-center gap-2.5">
              {silentWords.map((word, i) => (
                <button
                  key={word}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "size-3 bg-foreground"
                      : "size-2.5 bg-muted-foreground/40 hover:bg-muted-foreground/60"
                  }`}
                  aria-label={`Go to ${word}`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="p-2 rounded-full border border-border bg-card text-foreground hover:bg-muted transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
