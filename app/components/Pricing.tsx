"use client";

import { useState, useEffect } from "react";
import { Check } from "lucide-react";

type Region = "IN" | "US";

const inPlans = [
  {
    name: "Free Trial",
    monthlyPrice: "0",
    quarterlyPrice: "0",
    tagline: "First 14-days are on us to test results on sales",
    features: [
      "14-day free trial",
      "100+ voices & Languages",
      "AI Builder",
      "Email + SMS notification",
    ],
    cta: "Start Free Trial",
    highlighted: false,
    billingNote: null,
  },
  {
    name: "VoiceShop Smart",
    monthlyPrice: "9,999",
    quarterlyPrice: "3,999",
    tagline: "Brands with upto 300 Visitors/day; Upto ₹1000 Ad budget",
    features: [
      "100 Conversations / Month",
      "Aryabhatta Insights",
      "Premium voices",
      "Spam filtering",
    ],
    cta: "Choose Smart",
    highlighted: false,
    billingNote: "Charged on # of conversations via auto-pay",
  },
  {
    name: "VoiceShop Pro",
    monthlyPrice: "27,999",
    quarterlyPrice: "10,999",
    badge: "Most Popular",
    tagline: "Brands with upto 1000 Visitors/day",
    features: [
      "300 Conversations / Month",
      "Aryabhatta Insights",
      "Advanced API Integrations",
      "CRM integrations",
    ],
    cta: "Choose Pro",
    highlighted: true,
    billingNote: "Charged on # of conversations via auto-pay",
  },
  {
    name: "VoiceShop Enterprise",
    monthlyPrice: "42,999",
    quarterlyPrice: "16,999",
    tagline: "Brands with >1000 Visitors/day",
    features: [
      "500 Conversations / Month",
      "Aryabhatta Insights",
      "Slack Channel Support",
      "₹25/conversation over 3 min",
    ],
    cta: "Choose Enterprise",
    highlighted: false,
    billingNote: "Charged on # of conversations via auto-pay",
  },
];

const usPlans = [
  {
    name: "Free Trial",
    monthlyPrice: "0",
    quarterlyPrice: "0",
    tagline: "First 14-days are on us to test results on sales",
    features: [
      "14-day free trial",
      "100+ voices & Languages",
      "AI Builder",
      "Email + SMS notification",
    ],
    cta: "Start Free Trial",
    highlighted: false,
    billingNote: null,
  },
  {
    name: "VoiceShop Smart",
    monthlyPrice: "50",
    quarterlyPrice: "50",
    tagline: "Brands with upto 300 Visitors/day",
    features: [
      "100 Conversations / Month",
      "AI Insights",
      "Premium voices",
      "Spam filtering",
    ],
    cta: "Choose Smart",
    highlighted: false,
    billingNote: "Charged on # of conversations via auto-pay",
  },
  {
    name: "VoiceShop Pro",
    monthlyPrice: "100",
    quarterlyPrice: "100",
    badge: "Most Popular",
    tagline: "Brands with upto 1000 Visitors/day",
    features: [
      "300 Conversations / Month",
      "AI Insights",
      "Advanced API Integrations",
      "CRM integrations",
    ],
    cta: "Choose Pro",
    highlighted: true,
    billingNote: "Charged on # of conversations via auto-pay",
  },
  {
    name: "VoiceShop Enterprise",
    monthlyPrice: "150",
    quarterlyPrice: "150",
    tagline: "Brands with >1000 Visitors/day",
    features: [
      "500 Conversations / Month",
      "AI Insights",
      "Slack Channel Support",
      "Custom overage pricing",
    ],
    cta: "Choose Enterprise",
    highlighted: false,
    billingNote: "Charged on # of conversations via auto-pay",
  },
];

function getCurrencySymbol(region: Region) {
  return region === "IN" ? "₹" : "$";
}

export default function Pricing() {
  const [isQuarterly, setIsQuarterly] = useState(true);
  const [region, setRegion] = useState<Region | null>(null);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setRegion(data?.country_code === "IN" ? "IN" : "US");
      })
      .catch(() => {
        try {
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
          setRegion(tz && tz.startsWith("Asia/") ? "IN" : "US");
        } catch {
          setRegion("IN");
        }
      });
  }, []);

  if (!region) {
    return (
      <section id="pricing" className="py-16 md:py-24">
        <div className="section-container section-container-padding">
          <div className="text-center mb-12">
            <h2
              className="font-stix font-normal text-[#0a0a0a] mb-4"
              style={{ fontSize: "clamp(1.75rem, 4.5vw, 3rem)" }}
            >
              From Small Business to Government
            </h2>
            <p className="section-subheadline">
              Designed for every stage of your journey. Start for Free today.
            </p>
          </div>
          <div className="flex justify-center py-20">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#e5e5e5] border-t-[#0a0a0a]" />
          </div>
        </div>
      </section>
    );
  }

  const plans = region === "IN" ? inPlans : usPlans;
  const currency = getCurrencySymbol(region);

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="section-container section-container-padding">
        <div className="text-center mb-12">
          <h2
            className="font-stix font-normal text-[#0a0a0a] mb-4"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 3rem)" }}
          >
            From Small Business to Government
          </h2>
          <p className="section-subheadline">
            Designed for every stage of your journey. Start for Free today.
          </p>
        </div>

        {region === "IN" && (
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-full border border-[#e5e5e5] bg-white p-1">
              <button
                onClick={() => setIsQuarterly(false)}
                className={`cursor-pointer rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 ${
                  !isQuarterly
                    ? "bg-black text-white"
                    : "text-[#737373] hover:text-[#0a0a0a]"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsQuarterly(true)}
                className={`cursor-pointer rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 ${
                  isQuarterly
                    ? "bg-black text-white"
                    : "text-[#737373] hover:text-[#0a0a0a]"
                }`}
              >
                Quarterly
              </button>
            </div>
          </div>
        )}

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
              <div className="flex items-center gap-2 mb-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a]">
                  {plan.name}
                </h3>
                {"badge" in plan && plan.badge && (
                  <span className="inline-flex items-center rounded-full bg-[#e8f5e8] px-3 py-1 text-xs font-medium text-[#2d7a2d]">
                    {plan.badge}
                  </span>
                )}
              </div>

              <div className="mb-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-[#0a0a0a]">
                    {currency}
                    {region === "IN"
                      ? isQuarterly
                        ? plan.quarterlyPrice
                        : plan.monthlyPrice
                      : plan.monthlyPrice}
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#737373] mb-1">
                {region === "IN"
                  ? isQuarterly
                    ? "Per month, billed quarterly"
                    : "Per month, billed monthly"
                  : "Per month"}
              </p>
              {plan.billingNote && (
                <p className="text-xs text-[#2d7a2d] font-medium mb-8">
                  {plan.billingNote}
                </p>
              )}
              {!plan.billingNote && <div className="mb-8" />}

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
