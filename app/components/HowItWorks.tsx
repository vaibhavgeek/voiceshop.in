"use client";

import { useState } from "react";
import { Globe, Bot, Zap, ChartLine, LayoutDashboard, ChevronRight, ChevronDown } from "lucide-react";

const steps = [
  {
    icon: Globe,
    title: "Enter your website",
    description: null,
  },
  {
    icon: Bot,
    title: "MagicalCX understands",
    description:
      "MagicalCX reads your site to power a unified, brand-aligned conversation engine that responds with empathy.",
  },
  {
    icon: Zap,
    title: "Customer experience levels up",
    description: null,
  },
  {
    icon: ChartLine,
    title: "EFRO\u2122 increases revenue",
    description: null,
  },
  {
    icon: LayoutDashboard,
    title: "Steer with a dashboard",
    description: null,
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section
      className="section-container py-24 md:py-32 relative overflow-hidden border-x"
      id="how-it-works"
    >
      <div className="section-container-padding">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="section-heading">
            <span className="text-muted-foreground">What happens when you start</span> with
            MagicalCX?
          </h2>
          <p className="section-subheadline">
            Instant, Empathetic &amp; Thoughtful Customer Experience delivered by your brand
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 section-content-padding items-center">
          {/* Steps */}
          <div className="lg:col-span-5 flex flex-col gap-1">
            {steps.map((step, i) => {
              const isActive = i === activeStep;
              return (
                <div
                  key={i}
                  className={`group relative py-4 px-6 rounded-lg transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? "bg-white border-border/50"
                      : "border-transparent hover:bg-white/50 hover:border-border/30"
                  }`}
                  onClick={() => setActiveStep(i)}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-300 flex-shrink-0 ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "bg-neutral-100 text-neutral-400 group-hover:text-neutral-600"
                      }`}
                    >
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`text-lg mb-1 transition-colors font-medium ${
                            isActive
                              ? "text-foreground"
                              : "text-muted-foreground group-hover:text-foreground"
                          }`}
                        >
                          {step.title}
                        </h3>
                        {isActive ? (
                          <ChevronDown className="w-4 h-4 text-primary animate-in fade-in" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-muted-foreground transition-colors" />
                        )}
                      </div>
                      {isActive && step.description && (
                        <div className="overflow-hidden" style={{ marginTop: 12 }}>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visual */}
          <div className="lg:col-span-7 h-[400px] md:h-[500px] lg:h-[500px] sticky top-24">
            <div className="relative w-full h-full rounded-3xl border border-border/60 shadow-2xl shadow-neutral-200/50 bg-white/50 backdrop-blur-xl overflow-hidden p-2">
              <div className="w-full h-full">
                <div className="relative w-full h-full bg-gradient-to-br from-indigo-50/50 to-purple-50/50 rounded-xl border border-border/50 overflow-hidden flex items-center justify-center shadow-sm p-8">
                  <div className="relative z-10 w-32 h-32 bg-white rounded-full shadow-2xl border border-indigo-100 flex items-center justify-center">
                    <div className="absolute inset-0 bg-indigo-500/5 rounded-full animate-ping" />
                    <Bot className="w-14 h-14 text-indigo-600" />
                  </div>

                  {/* Orbiting dots */}
                  {[0, 72, 144, 216, 288].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = Math.cos(rad) * 100;
                    const y = Math.sin(rad) * 100;
                    return (
                      <div
                        key={i}
                        className="absolute w-3 h-3 bg-indigo-400 rounded-full shadow-lg ring-2 ring-white"
                        style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
                      />
                    );
                  })}

                  {/* Labels */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[20%] left-[20%] text-xs font-medium bg-white/90 px-3 py-1.5 rounded-lg border shadow-sm text-indigo-600">
                      Tone
                    </div>
                    <div className="absolute bottom-[25%] right-[20%] text-xs font-medium bg-white/90 px-3 py-1.5 rounded-lg border shadow-sm text-indigo-600">
                      Policies
                    </div>
                    <div className="absolute top-[30%] right-[15%] text-xs font-medium bg-white/90 px-3 py-1.5 rounded-lg border shadow-sm text-indigo-600">
                      FAQ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
