"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    annualDiscount: false,
    billing: "Per month, billed annually",
    tagline: "For the First Timers",
    features: [
      "100 Free Minutes ~50 calls",
      "100+ voices & Languages",
      "AI Builder",
      "Email + SMS notification",
    ],
    cta: "Start for Free",
    highlighted: false,
    custom: false,
  },
  {
    name: "Starter",
    monthlyPrice: 49,
    annualPrice: 33,
    annualDiscount: true,
    billing: "Per month, billed annually",
    tagline: "For Small Teams",
    features: [
      "250 mins ~100 calls",
      "Premium voices",
      "Transcript and AI Analytics",
      "Spam filtering",
    ],
    cta: "Choose Starter",
    highlighted: false,
    custom: false,
  },
  {
    name: "Professional",
    monthlyPrice: 149,
    annualPrice: 99,
    annualDiscount: true,
    billing: "Per month, billed annually",
    tagline: "For Growing Teams",
    features: [
      "750 mins ~300 calls",
      "Conversational AI SMS",
      "Advanced API Integrations",
      "CRM integrations",
    ],
    cta: "Continue with Pro",
    highlighted: true,
    custom: false,
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    annualPrice: null,
    annualDiscount: false,
    billing: "Billed monthly, billed annually",
    tagline: "For large organizations",
    features: [
      "Full Agent Buildout",
      "Fine tuning & SIP trunking",
      "Slack Channel Support",
      "HIPAA BAA",
    ],
    cta: "Talk to Sales",
    highlighted: false,
    custom: true,
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="section-container section-container-padding">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal text-[#0a0a0a] mb-4">
            From Small Business to Government
          </h2>
          <p className="section-subheadline">
            Designed for every stage of your journey. Start for Free today.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full border border-[#e5e5e5] bg-white p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`cursor-pointer rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 ${
                !isAnnual
                  ? "bg-black text-white"
                  : "text-[#737373] hover:text-[#0a0a0a]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`cursor-pointer rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 ${
                isAnnual
                  ? "bg-black text-white"
                  : "text-[#737373] hover:text-[#0a0a0a]"
              }`}
            >
              Annual
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#e5e5e5] rounded-2xl bg-white overflow-hidden">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`flex flex-col p-8 ${
                plan.highlighted ? "bg-[#f0f9f0]" : ""
              } ${
                index < plans.length - 1
                  ? "border-b lg:border-b-0 lg:border-r border-[#e5e5e5]"
                  : ""
              }`}
            >
              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-6">
                {plan.name}
              </h3>

              <div className="mb-2">
                {plan.custom ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-[#737373]">as low as</span>
                    <span className="text-5xl font-bold text-[#0a0a0a]">
                      5¢
                    </span>
                    <span className="text-lg font-medium text-[#0a0a0a]">
                      /
                    </span>
                    <span className="text-sm font-medium text-[#0a0a0a]">
                      min
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <span className="text-5xl font-bold text-[#0a0a0a]">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    {plan.annualDiscount && isAnnual && (
                      <span className="inline-flex items-center rounded-full bg-[#e8f5e8] px-3 py-1 text-xs font-medium text-[#2d7a2d]">
                        33% off
                      </span>
                    )}
                  </div>
                )}
              </div>

              <p className="text-sm text-[#737373] mb-8">
                {plan.custom
                  ? plan.billing
                  : isAnnual
                  ? "Per month, billed annually"
                  : "Per month, billed monthly"}
              </p>

              <p className="text-sm font-semibold text-[#0a0a0a] mb-4">
                {plan.tagline}
              </p>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      className={`mt-0.5 flex-shrink-0 ${
                        plan.highlighted
                          ? "text-[#2d7a2d]"
                          : "text-[#737373]"
                      }`}
                      size={18}
                    />
                    <span className="text-sm text-[#737373]">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`cursor-pointer w-full rounded-lg py-3 text-sm font-medium transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-black text-white hover:bg-black/80"
                    : "bg-white text-[#0a0a0a] border border-[#e5e5e5] hover:bg-[#f5f5f5]"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
