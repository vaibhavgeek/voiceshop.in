"use client";

import { useState } from "react";
import { Plug, TestTube, Rocket, ChevronRight, ChevronDown } from "lucide-react";

const steps = [
  {
    icon: Plug,
    title: "Demo Phase: One-Click Integration",
    description:
      "Connect with Shopify in one click. Custom integrations with WooCommerce and other stores in just 1 day. See Arya in action on your own store.",
  },
  {
    icon: TestTube,
    title: "Trial Phase: 14-Day Trial",
    description:
      "50% discounted trial to measure & build confidence on the sales results. Full features, real conversations, and performance metrics from day one.",
  },
  {
    icon: Rocket,
    title: "Scaling Phase: Choose Your Plan",
    description:
      "Select the plan that fits your needs and scale your conversions. Flexible pricing, unlimited conversations, and priority support.",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      className="section-container py-24 md:py-32 relative overflow-hidden border-x"
      id="how-it-works"
    >
      <div className="section-container-padding">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="section-heading">
            <span className="text-muted-foreground">Fast Integration. Quick Testing.</span> Trial to
            Check Results.
          </h2>
          <p className="section-subheadline">
            Get started in minutes, not months. See real results before committing.
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
                  {/* Platform logos */}
                  <div className="flex flex-col items-center gap-8">
                    <div className="text-xs font-medium tracking-wider text-neutral-500 uppercase">Works seamlessly with</div>
                    <div className="grid grid-cols-2 gap-4">
                      {["Shopify", "WooCommerce", "Magento", "Custom"].map((platform) => (
                        <div
                          key={platform}
                          className="bg-white rounded-xl shadow-lg border border-neutral-100 px-6 py-4 flex items-center justify-center"
                        >
                          <span className="text-sm font-medium text-neutral-700">{platform}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 mt-4">
                      <div className="w-2 h-2 bg-neutral-400 rounded-full animate-pulse" />
                      <span className="text-sm text-neutral-500">Integration in minutes</span>
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
