"use client";

import { useState, useEffect } from "react";
import { Check } from "lucide-react";

type Region = "IN" | "US";

const MIN_CONV = 500;
const MAX_CONV = 10000;
const CONV_STEP = 100;
const USD_RATE = 0.1;
const INR_RATE = 5;
const QUARTERLY_DISCOUNT = 0.8; // 20% off

const PLAN_META = [
  {
    name: "Free Trial",
    taglineIN: "First 14-days are on us to test results on sales",
    taglineUS: "First 14-days are on us to test results on sales",
    cta: "Start Free Trial",
    highlighted: false,
    isFree: true,
    badge: null,
  },
  {
    name: "VoiceShop Smart",
    taglineIN: "Brands with upto 300 Visitors/day; Upto ₹1000 Ad budget",
    taglineUS: "Brands with upto 300 Visitors/day",
    cta: "Choose Smart",
    highlighted: false,
    isFree: false,
    badge: null,
  },
  {
    name: "VoiceShop Pro",
    taglineIN: "Brands with upto 1000 Visitors/day",
    taglineUS: "Brands with upto 1000 Visitors/day",
    cta: "Choose Pro",
    highlighted: true,
    isFree: false,
    badge: "Most Popular",
  },
  {
    name: "VoiceShop Enterprise",
    taglineIN: "Brands with >1000 Visitors/day",
    taglineUS: "Brands with >1000 Visitors/day",
    cta: "Choose Enterprise",
    highlighted: false,
    isFree: false,
    badge: null,
  },
] as const;

const FEATURE_ROWS_IN = [
  { label: "14-day free trial",            included: [true,  false, false, false] },
  { label: "100+ Voices & Languages",      included: [true,  true,  true,  true ] },
  { label: "AI Builder",                   included: [true,  false, false, false] },
  { label: "Email + SMS notification",     included: [true,  true,  true,  true ] },
  { label: "Aryabhatta Insights",          included: [false, true,  true,  true ] },
  { label: "Premium voices",               included: [false, true,  true,  true ] },
  { label: "Spam filtering",               included: [false, true,  true,  true ] },
  { label: "Advanced API Integrations",    included: [false, false, true,  true ] },
  { label: "CRM integrations",             included: [false, false, true,  true ] },
  { label: "Slack Channel Support",        included: [false, false, false, true ] },
  { label: "₹25/conversation over 3 min", included: [false, false, false, true ] },
];

const FEATURE_ROWS_US = [
  { label: "14-day free trial",          included: [true,  false, false, false] },
  { label: "100+ Voices & Languages",    included: [true,  true,  true,  true ] },
  { label: "AI Builder",                 included: [true,  false, false, false] },
  { label: "Email + SMS notification",   included: [true,  true,  true,  true ] },
  { label: "AI Insights",                included: [false, true,  true,  true ] },
  { label: "Premium voices",             included: [false, true,  true,  true ] },
  { label: "Spam filtering",             included: [false, true,  true,  true ] },
  { label: "Advanced API Integrations",  included: [false, false, true,  true ] },
  { label: "CRM integrations",           included: [false, false, true,  true ] },
  { label: "Slack Channel Support",      included: [false, false, false, true ] },
  { label: "Custom overage pricing",     included: [false, false, false, true ] },
];

function baseMonthly(conversations: number, region: Region): number {
  return conversations * (region === "IN" ? INR_RATE : USD_RATE);
}

function effectiveMonthly(conversations: number, region: Region, isQuarterly: boolean): number {
  return baseMonthly(conversations, region) * (isQuarterly ? QUARTERLY_DISCOUNT : 1);
}

function quarterlyTotal(conversations: number, region: Region): number {
  return effectiveMonthly(conversations, region, true) * 3;
}

function formatCurrency(amount: number, region: Region): string {
  if (region === "IN") return `₹${Math.round(amount).toLocaleString("en-IN")}`;
  return `$${Math.round(amount)}`;
}

function effectiveRate(region: Region, isQuarterly: boolean): string {
  if (region === "IN") {
    const r = INR_RATE * (isQuarterly ? QUARTERLY_DISCOUNT : 1);
    return `₹${r}/conv`;
  }
  const r = USD_RATE * (isQuarterly ? QUARTERLY_DISCOUNT : 1);
  return `$${r.toFixed(2)}/conv`;
}

export default function Pricing() {
  const [isQuarterly, setIsQuarterly] = useState(false);
  const [region, setRegion] = useState<Region | null>(null);
  const [conversations, setConversations] = useState(MIN_CONV);

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
              From free trial to enterprise
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

  const featureRows = region === "IN" ? FEATURE_ROWS_IN : FEATURE_ROWS_US;
  const sliderFillPct = ((conversations - MIN_CONV) / (MAX_CONV - MIN_CONV)) * 100;

  const cellBase = (highlighted: boolean, isLast: boolean) =>
    `p-5 ${isLast ? "" : "border-r border-[#e5e5e5]"} ${highlighted ? "bg-[#f0f9f0]" : ""}`;

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="section-container section-container-padding">
        <div className="text-center mb-12">
          <h2
            className="font-stix font-normal text-[#0a0a0a] mb-4"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 3rem)" }}
          >
            From free trial to enterprise
          </h2>
          <p className="section-subheadline">
            Designed for every stage of your journey. Start for Free today.
          </p>
        </div>

        {/* Currency toggle + billing period toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          {/* Currency */}
          <div className="inline-flex rounded-full border border-[#e5e5e5] bg-white p-1">
            <button
              onClick={() => setRegion("IN")}
              className={`cursor-pointer rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 ${
                region === "IN"
                  ? "bg-black text-white"
                  : "text-[#737373] hover:text-[#0a0a0a]"
              }`}
            >
              ₹ INR
            </button>
            <button
              onClick={() => setRegion("US")}
              className={`cursor-pointer rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 ${
                region === "US"
                  ? "bg-black text-white"
                  : "text-[#737373] hover:text-[#0a0a0a]"
              }`}
            >
              $ USD
            </button>
          </div>

          {/* Billing period */}
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
              className={`cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                isQuarterly
                  ? "bg-black text-white"
                  : "text-[#737373] hover:text-[#0a0a0a]"
              }`}
            >
              Quarterly
              <span
                className={`text-xs rounded-full px-1.5 py-0.5 font-semibold ${
                  isQuarterly
                    ? "bg-white/20 text-white"
                    : "bg-[#e8f5e8] text-[#2d7a2d]"
                }`}
              >
                −20%
              </span>
            </button>
          </div>
        </div>

        {/* Conversation pricing slider */}
        <div className="mb-10 bg-white border border-[#e5e5e5] rounded-2xl p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-1">
                Pay per conversation
              </h3>
              <p className="text-sm text-[#737373] mb-8">
                {effectiveRate(region, isQuarterly)} ·{" "}
                {isQuarterly ? "billed every 3 months" : "billed monthly"}
                {isQuarterly && (
                  <span className="ml-2 inline-flex items-center rounded-full bg-[#e8f5e8] px-2 py-0.5 text-xs font-semibold text-[#2d7a2d]">
                    Save 20% vs monthly
                  </span>
                )}
              </p>

              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-[#737373]">
                  Conversations per month
                </span>
                <span className="text-sm font-semibold text-[#0a0a0a]">
                  {conversations.toLocaleString()}
                </span>
              </div>

              <input
                type="range"
                min={MIN_CONV}
                max={MAX_CONV}
                step={CONV_STEP}
                value={conversations}
                onChange={(e) => setConversations(Number(e.target.value))}
                className="conv-slider"
                style={{
                  background: `linear-gradient(to right, #0a0a0a ${sliderFillPct}%, #e5e5e5 ${sliderFillPct}%)`,
                }}
              />

              <div className="flex justify-between mt-2">
                <span className="text-xs text-[#737373]">500</span>
                <span className="text-xs text-[#737373]">10,000</span>
              </div>
            </div>

            <div className="md:w-56 flex flex-col md:items-end">
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl font-bold text-[#0a0a0a]">
                  {formatCurrency(effectiveMonthly(conversations, region, isQuarterly), region)}
                </span>
              </div>
              <p className="text-sm text-[#737373] mb-1">
                {isQuarterly ? "per month, billed quarterly" : "per month"}
              </p>
              {isQuarterly ? (
                <p className="text-xs text-[#2d7a2d] font-medium mb-5">
                  {formatCurrency(quarterlyTotal(conversations, region), region)} billed every 3 months
                </p>
              ) : (
                <p className="text-xs text-[#737373] mb-5">
                  {conversations.toLocaleString()} conv ×{" "}
                  {region === "IN" ? "₹5" : "$0.10"}
                </p>
              )}
              <button className="cursor-pointer rounded-lg px-6 py-3 text-sm font-medium bg-black text-white hover:bg-black/80 transition-all duration-200">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Pricing comparison table */}
        <div className="overflow-x-auto rounded-2xl border border-[#e5e5e5]">
          <table className="w-full min-w-[680px] bg-white border-collapse">
            {/* Plan name headers */}
            <thead>
              <tr className="border-b border-[#e5e5e5]">
                <th className="p-5 w-44 border-r border-[#e5e5e5]" />
                {PLAN_META.map((plan, i) => (
                  <th
                    key={plan.name}
                    className={`p-5 text-left ${
                      i < PLAN_META.length - 1 ? "border-r border-[#e5e5e5]" : ""
                    } ${plan.highlighted ? "bg-[#f0f9f0]" : ""}`}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-[#0a0a0a]">
                        {plan.name}
                      </span>
                      {plan.badge && (
                        <span className="inline-flex items-center rounded-full bg-[#e8f5e8] px-2 py-0.5 text-xs font-medium text-[#2d7a2d]">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {/* Price row — updates with slider and billing period */}
              <tr className="border-b border-[#e5e5e5]">
                <td className="p-5 border-r border-[#e5e5e5] text-xs font-medium text-[#737373] uppercase tracking-wide align-top pt-6">
                  {isQuarterly ? "Quarterly price" : "Monthly price"}
                </td>
                {PLAN_META.map((plan, i) => (
                  <td
                    key={plan.name}
                    className={cellBase(plan.highlighted, i === PLAN_META.length - 1)}
                  >
                    {plan.isFree ? (
                      <>
                        <div className="text-3xl font-bold text-[#0a0a0a]">
                          {region === "IN" ? "₹0" : "$0"}
                        </div>
                        <div className="text-xs text-[#737373] mt-1">
                          14-day trial
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          className={`text-3xl font-bold ${
                            plan.highlighted ? "text-[#2d7a2d]" : "text-[#0a0a0a]"
                          }`}
                        >
                          {formatCurrency(
                            effectiveMonthly(conversations, region, isQuarterly),
                            region
                          )}
                        </div>
                        <div className="text-xs text-[#737373] mt-1">
                          per month
                          {isQuarterly ? ", billed quarterly" : ""}
                        </div>
                        {isQuarterly && (
                          <div className="text-xs text-[#2d7a2d] font-medium mt-0.5">
                            {formatCurrency(quarterlyTotal(conversations, region), region)}{" "}
                            / quarter
                          </div>
                        )}
                        <div className="text-xs text-[#737373] mt-0.5">
                          {conversations.toLocaleString()} conv/mo
                        </div>
                      </>
                    )}
                  </td>
                ))}
              </tr>

              {/* Best for row */}
              <tr className="border-b border-[#e5e5e5]">
                <td className="p-5 border-r border-[#e5e5e5] text-xs font-medium text-[#737373] uppercase tracking-wide">
                  Best for
                </td>
                {PLAN_META.map((plan, i) => (
                  <td
                    key={plan.name}
                    className={`${cellBase(plan.highlighted, i === PLAN_META.length - 1)} text-sm text-[#737373]`}
                  >
                    {region === "IN" ? plan.taglineIN : plan.taglineUS}
                  </td>
                ))}
              </tr>

              {/* CTA row */}
              <tr className="border-b border-[#e5e5e5]">
                <td className="p-5 border-r border-[#e5e5e5]" />
                {PLAN_META.map((plan, i) => (
                  <td
                    key={plan.name}
                    className={cellBase(plan.highlighted, i === PLAN_META.length - 1)}
                  >
                    <button
                      className={`cursor-pointer w-full rounded-lg py-2.5 text-sm font-medium transition-all duration-200 ${
                        plan.highlighted
                          ? "bg-black text-white hover:bg-black/80"
                          : "bg-white text-[#0a0a0a] border border-[#e5e5e5] hover:bg-[#f5f5f5]"
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </td>
                ))}
              </tr>

              {/* Feature rows */}
              {featureRows.map((row, rowIdx) => (
                <tr
                  key={row.label}
                  className={rowIdx < featureRows.length - 1 ? "border-b border-[#e5e5e5]" : ""}
                >
                  <td className="p-5 border-r border-[#e5e5e5] text-sm text-[#737373]">
                    {row.label}
                  </td>
                  {row.included.map((included, colIdx) => (
                    <td
                      key={colIdx}
                      className={cellBase(
                        PLAN_META[colIdx].highlighted,
                        colIdx === PLAN_META.length - 1
                      )}
                    >
                      {included ? (
                        <Check
                          className={
                            PLAN_META[colIdx].highlighted
                              ? "text-[#2d7a2d]"
                              : "text-[#0a0a0a]"
                          }
                          size={18}
                        />
                      ) : (
                        <span className="text-[#d4d4d4] text-lg leading-none">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
