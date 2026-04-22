import {
  VolumeX,
  Globe,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";

const problems = [
  {
    icon: VolumeX,
    title: "No one to guide them on the site",
    description:
      "They are on your site, but no one greets or guides them, so they leave without ever asking. You pay for the visit and still lose the sale, often with no clear signal they were stuck.",
    impact:
      "Nothing on the page moved them from \u201cI\u2019m here\u201d to \u201cwhat to do next\u201d \u2014 so they left right after landing.",
  },
  {
    icon: Globe,
    title: "Your site is not in their language",
    description:
      "Search, filters, and copy are English-first; they think in Hindi, Tamil, or Bhojpuri. On site they can\u2019t use filters or the size chart with comfort, so they close the tab in the same visit.",
    impact: "Aaye, par English samajh nahi aaya. Dekhke tab band kar diya.",
  },
  {
    icon: HelpCircle,
    title: "Doubt on the product page, no on-site response",
    description:
      "On the product page they almost add to cart, but doubts about fabric, size, and quality have no on-site answer. They don\u2019t open chat; they just leave, after you already paid to get them that far.",
    impact:
      "Fade, size, return? A static page. The doubt is real; they are gone right after a high-intent visit.",
  },
  {
    icon: AlertTriangle,
    title: "You do not see why the visit still fails",
    description:
      "Reports show traffic and product views, not which on-site moment broke trust \u2014 price, size, or delivery. You keep buying ads; the same post-visit drop repeats.",
    impact:
      "They reached your site and still did not buy. You can\u2019t name the on-site doubt that lost the sale.",
  },
];

const funnelSteps = [
  { number: "100", label: "Land on your site" },
  { number: "70", label: "Leave in-session" },
  { number: "26", label: "Browse, then drop" },
  { number: "4", label: "Actually buy from your store" },
];

export default function WhyMagicalCX() {
  return (
    <div className="dark bg-background text-foreground">
    <section className="section-container border-x border-b py-24 md:py-32 bg-background" id="the-silence">
      <div className="max-w-5xl mx-auto text-center mb-16 section-container-padding">
        <h2 className="section-heading">
          <span className="text-muted-foreground">
            You pay &#8377;100+ on ads to get users on your website.
          </span>{" "}
          <span>But 90%+ don&apos;t buy. Why?</span>
        </h2>
        <p className="section-subheadline">
          Most of your paid clicks turn into a real visit &mdash; then people leave the site without buying. These are
          the reasons, on the page, after they have already shown up.
        </p>
      </div>

      {/* Funnel */}
      <div className="max-w-3xl mx-auto mb-20 section-content-padding">
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
                  <div className={`text-2xl md:text-3xl font-semibold tracking-tight ${isLast ? "text-background" : "text-foreground"}`}>
                    {step.number}
                  </div>
                  <div className={`text-xs md:text-sm mt-1.5 font-medium ${isLast ? "text-background/80" : "text-foreground"}`}>
                    {step.label}
                  </div>
                </div>
                {!isLast && (
                  <div className="flex items-center justify-center w-6 md:w-8 bg-card border-y border-border text-muted-foreground shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Problem Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border-y max-w-7xl mx-auto overflow-hidden">
        {problems.map((problem) => (
          <div key={problem.title} className="bg-card p-6 md:p-10 lg:p-12 flex flex-col">
            <div className="flex items-start gap-4 mb-5">
              <div className="rounded-lg bg-muted p-2.5 shrink-0">
                <problem.icon className="size-5 text-foreground stroke-[1.5]" />
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-foreground tracking-tight pt-1">
                {problem.title}
              </h3>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              {problem.description}
            </p>

            <div className="mt-auto pt-6 border-t border-border">
              <div className="text-[10px] font-medium tracking-[0.15em] text-muted-foreground uppercase mb-2">
                The Impact
              </div>
              <p className="text-base md:text-lg font-serif italic text-foreground leading-snug">
                &ldquo;{problem.impact}&rdquo;
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
