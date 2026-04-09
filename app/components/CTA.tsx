import { CircleCheck } from "lucide-react";

export default function CTA() {
  return (
    <div className="bg-background dark">
      <section className="section-container border py-24 md:py-32 bg-background overflow-hidden">
        <div>
          <div className="bg-card border border-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-8 pt-6 pb-6 pl-6 pr-6 md:pt-8 md:pb-8 md:pl-8 md:pr-8 lg:pt-16 lg:pb-16 lg:pl-16 lg:pr-16">
                <div className="space-y-6">
                  <h2 className="text-3xl leading-normal text-foreground md:text-4xl">
                    See your AI teammate in action now
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground max-w-xl">
                    Ready to make support faster, kinder, easier and help customers feel good about
                    choosing you?
                    <br />
                    <br />
                    PS: Sales improves too...
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <button className="inline-flex cursor-pointer items-center justify-center gap-2 font-medium transition-all px-8 py-6 text-base rounded-full bg-foreground text-background hover:bg-foreground/90">
                    Book a Demo
                  </button>
                </div>

                <div className="space-y-3">
                  {["No credit card required", "14 days free trial", "DIY or Guided setup"].map(
                    (item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CircleCheck className="w-5 h-5 text-foreground shrink-0 mt-0.5 stroke-[1.5]" />
                        <p className="text-base text-foreground font-normal leading-relaxed">
                          {item}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="relative h-full min-h-[500px] lg:min-h-[600px] pt-8 pl-0 md:pt-10 md:pl-10 lg:pt-12 lg:pl-12">
                {/* Placeholder dashboard preview */}
                <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-tl-md flex items-center justify-center">
                  <div className="text-center space-y-3 p-8">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3" y="3" width="7" height="9" rx="1" />
                        <rect x="14" y="3" width="7" height="5" rx="1" />
                        <rect x="14" y="12" width="7" height="9" rx="1" />
                        <rect x="3" y="16" width="7" height="5" rx="1" />
                      </svg>
                    </div>
                    <p className="text-white/40 text-sm">Customer Support Dashboard</p>
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
