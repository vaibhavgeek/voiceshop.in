"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = { q: string; a: string };

const generalFAQs: FAQItem[] = [
  {
    q: "What is EFRO\u2122?",
    a: "EFRO\u2122 (Empathy-First Revenue Orchestrator) is MagicalCX\u2019s built-in revenue engine. It understands customer intent in real time and suggests the right next step, upgrade, or offer only when it helps the customer move forward. That means your support doesn\u2019t just resolve issues. It quietly supports growth. More yeses. Fewer pushy moments. Revenue that feels natural, not forced.",
  },
  {
    q: "What is HumanlyClear\u2122?",
    a: "HumanlyClear\u2122 is MagicalCX\u2019s quality standard for human-grade conversations: clear, warm, and action-oriented. It makes answers easy to understand, asks only what\u2019s needed, and guides customers to the next step fast, so they feel helped (not handled) and your support and sales conversations convert better.",
  },
  {
    q: "Is this just another chatbot?",
    a: "No. Chatbots follow scripts. MagicalCX understands meaning, tone, frustration, emotions, and context and solves the problem like a real teammate using EFRO\u2122 and HumanlyClear\u2122.",
  },
  {
    q: "Can it fix real issues or only answer questions?",
    a: "It fixes real issues like order updates, size swaps, address changes, subscription upgrades, and booking calls \u2014 all done within the conversation.",
  },
  {
    q: "Will it sound like a robot?",
    a: "No. It sounds exactly like you want your brand to\u2014friendly or professional, authoritative or kind, direct or thoughtful.",
  },
  {
    q: "Does this work for voice calls too?",
    a: "Yes. Customers can talk naturally, and MagicalCX handles the call calmly without the usual \u201cplease hold\u201d chaos.",
  },
  {
    q: "Will it replace my team?",
    a: "No. MagicalCX works alongside your team, handling repetitive and routine tasks so your human agents can focus on what matters most.",
  },
  {
    q: "Is this right for my business?",
    a: "If you want to improve sales, yes. If you sell online, definitely. If you want happier customers and fewer headaches, it\u2019s a great fit.",
  },
];

const setupFAQs: FAQItem[] = [
  {
    q: "How long does setup take?",
    a: "Most businesses are live within 24-48 hours. Our team handles the entire setup process for you.",
  },
  {
    q: "Does it integrate with my existing tools?",
    a: "Yes. MagicalCX integrates with major CRMs, e-commerce platforms, helpdesks, and communication tools.",
  },
  {
    q: "Do I need technical knowledge to set it up?",
    a: "No. Our DIY setup is simple enough for anyone, and we also offer full done-for-you white-glove onboarding.",
  },
];

const pricingFAQs: FAQItem[] = [
  {
    q: "Is there a free trial?",
    a: "Yes. We offer a 14-day free trial. Try it and see how it feels for your brand.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No hidden fees. All features are included in your plan. You only pay for what you use.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. You can cancel your subscription at any time with no penalties.",
  },
];

const tabData = [
  { id: "general", label: "General", items: generalFAQs },
  { id: "setup", label: "Setup & Technical", items: setupFAQs },
  { id: "pricing", label: "Pricing", items: pricingFAQs },
];

function AccordionItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border px-0 last:border-none">
      <h3 className="flex">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex flex-1 items-start justify-between gap-4 rounded-md outline-none text-left text-lg font-medium text-foreground py-6 transition-colors cursor-pointer hover:no-underline"
        >
          {item.q}
          <ChevronDown
            className={`text-muted-foreground size-4 shrink-0 translate-y-0.5 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </h3>
      {open && (
        <div className="pb-6 text-sm text-muted-foreground leading-relaxed">
          {item.a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [activeTab, setActiveTab] = useState("general");

  const activeItems = tabData.find((t) => t.id === activeTab)?.items ?? [];

  return (
    <section className="section-container py-24 md:py-32 bg-background border relative overflow-hidden">
      <div className="section-container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 section-content-padding">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl leading-tight text-foreground md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about your intelligent, always working, lowest paid
                employee.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tabData.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center justify-center font-medium rounded-full px-5 py-2 text-sm border transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-foreground text-background border-foreground"
                      : "border-border bg-background text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Accordion */}
            <div className="w-full space-y-0">
              {activeItems.map((item, i) => (
                <AccordionItem key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
