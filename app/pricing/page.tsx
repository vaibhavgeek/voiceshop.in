"use client";

import { useState, useEffect } from "react";
import { Check, Globe, Phone, ShieldCheck, X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
    custom: false,
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
    custom: false,
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
    custom: false,
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
    custom: false,
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
    custom: false,
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
    custom: false,
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
    custom: false,
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
    custom: false,
    billingNote: "Charged on # of conversations via auto-pay",
  },
];

function getCurrencySymbol(region: Region) {
  return region === "IN" ? "₹" : "$";
}

function DemoModal({ onClose }: { onClose: () => void }) {
  const [website, setWebsite] = useState("");
  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState<{ website?: boolean; mobile?: boolean }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const missingWebsite = !website.trim();
    const missingMobile = !mobile.trim();

    if (missingWebsite || missingMobile) {
      setErrors({ website: missingWebsite, mobile: missingMobile });
      return;
    }

    setErrors({});
    setLoading(true);
    try {
      await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ website: website.trim(), mobile: mobile.trim() }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  function missingFieldsMessage() {
    const missingBoth = errors.website && errors.mobile;
    if (missingBoth) return "Add missing website & mobile to book your demo";
    if (errors.website) return "Add missing website to book your demo";
    if (errors.mobile) return "Add missing mobile to book your demo";
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#737373] hover:text-[#0a0a0a] transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-6">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
            </div>
            <p className="text-[#0a0a0a] font-medium text-base text-center">
              Thank You. Our team will reach out to you in 24 hours.
            </p>
            <button
              onClick={onClose}
              className="mt-2 text-sm text-[#737373] hover:text-[#0a0a0a] underline cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-[#0a0a0a] mb-2">Book a Demo</h2>
            <p className="text-sm text-[#737373] mb-6">
              Enter your details and our team will reach out within 24 hours.
            </p>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
              <div className="relative group">
                <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none">
                  <Globe className="h-5 w-5 text-[#737373]/50 group-focus-within:text-black/40 transition-colors" />
                </div>
                <input
                  type="text"
                  value={website}
                  onChange={(e) => { setWebsite(e.target.value); setErrors((prev) => ({ ...prev, website: false })); }}
                  placeholder="Website URL"
                  className={`w-full h-14 rounded-lg border bg-white pl-11 pr-4 text-base transition-all focus:outline-none focus:ring-2 ${
                    errors.website
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                      : "border-[#e5e5e5] focus:border-black focus:ring-black/10"
                  }`}
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-[#737373]/50 group-focus-within:text-black/40 transition-colors" />
                </div>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => { setMobile(e.target.value); setErrors((prev) => ({ ...prev, mobile: false })); }}
                  placeholder="Mobile No."
                  className={`w-full h-14 rounded-lg border bg-white pl-11 pr-4 text-base transition-all focus:outline-none focus:ring-2 ${
                    errors.mobile
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                      : "border-[#e5e5e5] focus:border-black focus:ring-black/10"
                  }`}
                />
              </div>

              {missingFieldsMessage() && (
                <p className="text-red-500 text-sm -mt-1">{missingFieldsMessage()}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="h-14 w-full rounded-lg bg-black text-white font-medium text-sm hover:bg-black/80 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer mt-1"
              >
                {loading ? "Booking..." : "Book Demo"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function PricingPage() {
  const [isQuarterly, setIsQuarterly] = useState(true);
  const [region, setRegion] = useState<Region | null>(null);
  const [showModal, setShowModal] = useState(false);

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

  const plans = region ? (region === "IN" ? inPlans : usPlans) : [];
  const currency = region ? getCurrencySymbol(region) : "";

  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      <Navbar />

      {showModal && <DemoModal onClose={() => setShowModal(false)} />}

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="section-container section-container-padding text-center">
          <h1
            className="font-stix font-normal text-[#0a0a0a] mb-4"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 3rem)" }}
          >
            From free trial to enterprise
          </h1>
          <p className="section-subheadline">
            Designed for every stage of your journey. Start for Free today.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-container section-container-padding">
          {!region ? (
            <div className="flex justify-center py-20">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#e5e5e5] border-t-[#0a0a0a]" />
            </div>
          ) : (
          <>
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
                          ? plan.monthlyPrice
                          : plan.quarterlyPrice
                        : plan.monthlyPrice}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#737373] mb-1">
                  {region === "IN"
                    ? isQuarterly
                      ? "Per quarter, billed quarterly"
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
                  onClick={() => setShowModal(true)}
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
          </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
