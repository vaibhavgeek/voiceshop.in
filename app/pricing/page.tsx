"use client";

import { Check } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const plans = [
  {
    name: "Free Trial",
    price: "0",
    tagline: "First 14-days are on us to test results on sales",
    features: [
      "14-day free trial",
      "100+ voices & Languages",
      "AI Builder",
      "Email + SMS notification",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "VoiceShop Pro",
    price: "10,000",
    badge: "Most Popular",
    tagline: "2,000 meaningful conversations per month",
    features: [
      "2,000 Conversations / Month",
      "Aryabhatta Insights",
      "Premium voices",
      "Spam filtering",
      "Advanced API Integrations",
      "CRM integrations",
    ],
    cta: "Choose Pro",
    highlighted: true,
  },
  {
    name: "Custom",
    price: null,
    tagline: "For brands needing more than 2,000 conversations or custom integrations",
    features: [
      "Unlimited Conversations",
      "Aryabhatta Insights",
      "Slack Channel Support",
      "Dedicated Account Manager",
      "Custom API Integrations",
      "Priority Support",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="section-container section-container-padding text-center">
          <h1
            className="font-stix font-normal text-[#0a0a0a] mb-4"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 3rem)" }}
          >
            Simple, transparent pricing
          </h1>
          <p className="section-subheadline">
            Start for free. Scale when you&apos;re ready.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-container section-container-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#e5e5e5] rounded-2xl bg-white overflow-hidden">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`flex flex-col p-8 ${
                  plan.highlighted ? "bg-[#f0f9f0]" : ""
                } ${
                  index < plans.length - 1
                    ? "border-b md:border-b-0 md:border-r border-[#e5e5e5]"
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
                    {plan.price !== null ? (
                      <span className="text-5xl font-bold text-[#0a0a0a]">
                        ₹{plan.price}
                      </span>
                    ) : (
                      <span className="text-4xl font-bold text-[#0a0a0a]">
                        Let&apos;s talk
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm text-[#737373] mb-8">
                  {plan.price !== null ? "Per month" : "Reach out for specifics"}
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
                      <span className="text-sm text-[#737373]">
                        {feature}
                      </span>
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

      <Footer />
    </div>
  );
}
