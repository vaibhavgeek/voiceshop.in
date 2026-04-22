"use client";

import { CircleCheck } from "lucide-react";

export default function CTA() {
  return (
    <div className="bg-background dark" id="cta">
      <section className="section-container border py-24 md:py-32 bg-background overflow-hidden">
        <div>
          <div className="bg-card border border-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-8 pt-6 pb-6 pl-6 pr-6 md:pt-8 md:pb-8 md:pl-8 md:pr-8 lg:pt-16 lg:pb-16 lg:pl-16 lg:pr-16">
                <div className="space-y-6">
                  <div className="text-xs font-medium tracking-wider text-muted-foreground uppercase">Live Demo Available</div>
                  <h2 className="text-3xl leading-normal text-foreground md:text-4xl">
                    See Arya Convert a Real Visitor. Live Demo in 15 Minutes.
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground max-w-xl">
                    We&apos;ll show you exactly how Arya handles real conversations, overcomes
                    objections, and closes sales &mdash; on your product category.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    "See Arya handle real customer conversations",
                    "Get a personalized analysis of your store",
                    "Learn how top D2C brands are using AI sales",
                    "No commitment, no credit card required",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CircleCheck className="w-5 h-5 text-foreground shrink-0 mt-0.5 stroke-[1.5]" />
                      <p className="text-base text-foreground font-normal leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Demo Form */}
              <div className="relative h-full min-h-[500px] lg:min-h-[600px] pt-8 pl-0 md:pt-10 md:pl-10 lg:pt-12 lg:pl-12">
                <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-tl-md flex items-center justify-center">
                  <div className="w-full max-w-sm p-8 space-y-5">
                    <h3 className="text-xl font-medium text-white mb-6">Book Your Demo</h3>
                    <div suppressHydrationWarning>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full h-12 rounded-lg border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
                        suppressHydrationWarning
                      />
                    </div>
                    <div suppressHydrationWarning>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full h-12 rounded-lg border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
                        suppressHydrationWarning
                      />
                    </div>
                    <div suppressHydrationWarning>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        className="w-full h-12 rounded-lg border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
                        suppressHydrationWarning
                      />
                    </div>
                    <div suppressHydrationWarning>
                      <input
                        type="url"
                        placeholder="https://yourstore.com"
                        className="w-full h-12 rounded-lg border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
                        suppressHydrationWarning
                      />
                    </div>
                    <div>
                      <select
                        className="w-full h-12 rounded-lg border border-white/10 bg-white/5 px-4 text-sm text-white/40 focus:border-white/30 focus:outline-none appearance-none"
                      >
                        <option value="">Select category</option>
                        <option value="fashion">Fashion & Apparel</option>
                        <option value="electronics">Electronics</option>
                        <option value="home">Home & Decor</option>
                        <option value="beauty">Beauty & Personal Care</option>
                        <option value="food">Food & Grocery</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <button className="w-full h-12 rounded-lg bg-white text-black font-medium text-sm hover:bg-white/90 transition-colors cursor-pointer">
                      Book My Demo
                    </button>
                    <p className="text-[11px] text-white/30 text-center">
                      Join the AI revolution &mdash; make your store talk &amp; sell
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
