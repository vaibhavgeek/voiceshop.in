import {
  VolumeX,
  Globe,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";

const problems = [
  {
    icon: VolumeX,
    title: "Silent Customers",
    description:
      "They don\u2019t know how to browse or buy online \u2014 so they leave silently. No questions asked, no help offered. You lose the sale without ever knowing.",
    impact: "40% of paid traffic leave because no one helps them buy.",
  },
  {
    icon: Globe,
    title: "Silent Exploration",
    description:
      "English gives fear. Your website speaks only English, but your customers think in Hindi, Tamil, Bengali, Telugu. They can\u2019t express what they want.",
    impact:
      "Hum ko bas bhojpuri aur hindi aati hai. Dekhke chhod dete hai.",
  },
  {
    icon: HelpCircle,
    title: "Silent Hesitations",
    description:
      "When customers have questions about material, sizing, or quality \u2014 there\u2019s no one to answer. Every unanswered doubt is a lost sale.",
    impact:
      "Will this color fade? Is this true to size? No one answers \u2014 they leave.",
  },
  {
    icon: AlertTriangle,
    title: "Silent Problems",
    description:
      "Is it the collection? The price? The size? A doubt about quality? You have no visibility into what\u2019s going wrong. You\u2019re spending on ads but flying blind.",
    impact:
      "96 out of 100 visitors leave without buying. That\u2019s your money walking away.",
  },
];

const funnelSteps = [
  { number: "100", label: "Visit from Ads", sublabel: "You pay per click" },
  { number: "70", label: "Leave Immediately", sublabel: "No greeting, no help" },
  { number: "26", label: "Browse & Hesitate", sublabel: "Doubts go unanswered" },
  { number: "4", label: "Actually Buy", sublabel: "96% money wasted" },
];

export default function WhyMagicalCX() {
  return (
    <div className="dark bg-background">
    <section className="section-container border-x border-b py-24 md:py-32 bg-background" id="the-silence">
      <div className="max-w-5xl mx-auto text-center mb-16 section-container-padding">
        <h2 className="section-heading">
          <span className="text-muted-foreground">
            You pay &#8377;100+ on ads to get users on your website.
          </span>{" "}
          <span>But 90%+ don&apos;t buy. Why?</span>
        </h2>
        <p className="section-subheadline">
          96 out of 100 visitors leave without buying. That&apos;s your money
          walking away &mdash; silently.
        </p>
      </div>

      {/* Funnel */}
      <div className="max-w-3xl mx-auto mb-20 section-content-padding">
        <div className="grid grid-cols-4 gap-0 text-center">
          {funnelSteps.map((step, i) => (
            <div key={i} className="relative">
              <div className={`py-4 px-2 md:px-4 ${i === 0 ? "rounded-l-lg" : ""} ${i === funnelSteps.length - 1 ? "rounded-r-lg" : ""} ${i === funnelSteps.length - 1 ? "bg-primary text-primary-foreground" : "bg-card border-y first:border-l last:border-r border-border"}`}>
                <div className={`text-2xl md:text-3xl font-medium ${i === funnelSteps.length - 1 ? "" : "text-foreground"}`}>
                  {step.number}
                </div>
                <div className={`text-xs md:text-sm mt-1 font-medium ${i === funnelSteps.length - 1 ? "text-primary-foreground/80" : "text-foreground"}`}>
                  {step.label}
                </div>
                <div className={`text-[10px] md:text-xs mt-0.5 ${i === funnelSteps.length - 1 ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {step.sublabel}
                </div>
              </div>
              {i < funnelSteps.length - 1 && (
                <div className="absolute top-1/2 -right-px -translate-y-1/2 z-10 text-muted-foreground text-sm md:text-base">
                  &rsaquo;
                </div>
              )}
            </div>
          ))}
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
