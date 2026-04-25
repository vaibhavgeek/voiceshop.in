"use client";

import { useState } from "react";

type FAQItem = { q: string; a: string };

const tabs = [
  { id: "general", label: "General" },
  { id: "results", label: "Results & Impact" },
  { id: "setup", label: "Setup & Technical" },
  { id: "control", label: "Control & Customization" },
  { id: "pricing", label: "Pricing" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const faqData: Record<TabId, FAQItem[]> = {
  general: [
    {
      q: "Is this just another chatbot?",
      a: "No. Unlike chatbots that handle support queries, Arya is your AI salesman. She proactively engages visitors, understands their needs in their language, handles objections, and guides them to purchase — just like your best offline salesperson would.",
    },
    {
      q: "How is VoiceShop different from other chatbots?",
      a: "Unlike traditional chatbots built for support (tracking orders, handling returns), Arya is built for sales. She talks to users in their natural language so they can freely express hesitations and exploration intent — then converts them by managing objections while solving address and payment problems in the funnel.\n\nMost chatbots require typing. But Tier-II and beyond audiences are vernacular-first and love to talk. This is how they buy offline. Voice replicates the exact offline salesman experience online — typing was just a workaround invented when AI wasn't available.",
    },
    {
      q: "What languages does Arya support?",
      a: "Arya speaks 15+ Indian languages fluently including Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Punjabi, Odia, and more. She automatically detects the language your customer is most comfortable with.",
    },
    {
      q: "Will it work on mobile?",
      a: "Yes. Arya works perfectly on mobile devices. In fact, most voice conversations happen on mobile where typing is inconvenient. The voice interface is optimized for touch screens and works across all modern mobile browsers.",
    },
    {
      q: "What if customers don't want to talk?",
      a: "That's completely fine. Arya appears as an optional assistant on your site. Customers who prefer browsing silently can do so. But for those who have questions or need guidance, Arya is there to help — increasing your conversion rate without disrupting the experience for others.",
    },
  ],
  results: [
    {
      q: "How quickly will I see results after installing Arya?",
      a: "It typically takes 3-4 days for Arya to create a measurable sales uptick. You can monitor your conversion rate pre and post-launch. We also share the conversion rate of traffic using the voice agent, which you can compare to your baseline.",
    },
    {
      q: "Can Arya handle high traffic during sales/festivals?",
      a: "Yes. We proactively scale our systems to handle festive and seasonal traffic spikes (Diwali, Republic Day sales, etc.) to ensure a smooth experience for your customers — no slowdowns, no downtime.",
    },
    {
      q: "How does Aryabhatta know why they didn't buy?",
      a: "Aryabhatta analyzes every conversation and categorizes drop-off reasons into clear buckets: didn't like design, doubts on material quality, doubts on size/color/authenticity, poor reviews, too expensive, or long delivery time. You see these as percentages in your dashboard — day-over-day and month-over-month.\n\nAryabhatta also identifies missing products users are asking for (like \"green saree\" or \"white kurta\") that aren't in your catalog yet.\n\nWhen users find products too expensive, Arya captures their number via chat — and recommends extending a discount via WhatsApp right in the Aryabhatta dashboard.",
    },
  ],
  setup: [
    {
      q: "How long does it take to go live?",
      a: "Shopify stores: 5 minutes with just 3 simple steps. No developer needed.\n\nCustom stores: Our engineers will set it up within 12 hours. Still no technical team required on your end.",
    },
    {
      q: "Does this work with Shopify/WooCommerce/Custom stores?",
      a: "Yes. VoiceShop works on all kinds of stores — Shopify, WooCommerce, custom websites, and even mobile apps.",
    },
    {
      q: "What if I don't have detailed product names or descriptions written for my products?",
      a: "Absolutely works. Our model consumes your product images and customer reviews and deciphers everything users need to know about the product — even if your catalog isn't text-heavy.",
    },
    {
      q: "Is my data safe?",
      a: "Yes. We take data security seriously. All conversations are encrypted, and we never share your customer data with third parties. We're compliant with industry-standard security practices and Indian data protection regulations.",
    },
  ],
  control: [
    {
      q: "Can I control what Arya says about pricing, discounts, or policies?",
      a: "Arya automatically syncs with your store's pricing and policies. When you update pricing on your store, it reflects immediately in how Arya responds. Arya never offers unauthorized discounts — she only shares what's already live on your site.",
    },
    {
      q: "What if Arya gives wrong information to a customer?",
      a: "Our error rate is under 0.1% (tested via AI Judge). Arya pulls information directly from your store, reviews, and images to ensure accuracy.",
    },
    {
      q: "Can I customize Arya's personality/tone to match my brand?",
      a: "We don't customize tone and style to ensure the best voice experience across all stores — optimized through extensive voice training. However, you can customize the UI colors of the Arya bar on your website via Shopify toggles.",
    },
  ],
  pricing: [
    {
      q: "What happens after the 14-day free trial?",
      a: "After 14 days, you can choose a plan based on your traffic and conversation needs.\n\nNo credit card required upfront. No auto-charge. The trial is fully unlocked with no restrictions — you get the complete experience.\n\nIf you see results, you can buy a plan directly from our pricing page and credits will be activated in your store. You can also:\n• Buy extra conversation credits anytime\n• Enable auto-pay when credits hit a certain threshold",
    },
    {
      q: "Is there a minimum contract period?",
      a: "Plans are billed monthly or quarterly (with 15% discount on quarterly). No lock-in. You can also buy credits directly with a minimum of 100 conversations.",
    },
    {
      q: "Do you charge per conversation or per visitor?",
      a: "We charge per conversation.\n\n1 conversation = 1 user's entire voice session where they talk at least 2 times — this avoids counting spam or accidental clicks.",
    },
    {
      q: "What exactly counts as a \"conversation credit\"?",
      a: "Whenever a user talks to Arya 2 or more times in the same session, it's considered 1 conversation and 1 credit is deducted.\n\nExamples:\n• User talks for 30 seconds or 5 minutes → Still 1 credit (as long as they spoke 2+ times)\n• User clicks Arya but only says something once → No credit used\n• User comes back the next day and talks again → New session, new credit (if they talk 2+ times)",
    },
    {
      q: "Is the free trial really \"no credit card required\"?",
      a: "Yes. You don't need to add any payment information during the trial.\n\nOn day 15, if you haven't purchased a plan, Arya simply stops working. No charges, no surprise billing.",
    },
    {
      q: "What's the difference between your plans?",
      a: "All plans include the same complete Arya experience:\n• All 15+ Indian languages\n• Full Aryabhatta dashboard with insights\n• Session replay and conversion analytics\n• Missing product recommendations\n• WhatsApp lead capture for price objections\n\nThe only difference is conversation volume — choose based on how much traffic your store gets.",
    },
    {
      q: "Can I upgrade or downgrade mid-month?",
      a: "Yes. You can upgrade anytime and credits are added immediately to your account.\n\nIf you're on a monthly/quarterly plan and want to switch, reach out to us and we'll adjust your billing accordingly.",
    },
    {
      q: "Do you offer custom/enterprise plans?",
      a: "Yes. For high-traffic brands (100K+ monthly visitors) or those needing custom features, we offer enterprise pricing with:\n• Volume discounts\n• Annual contracts\n• Dedicated support\n• Custom integrations\n\nContact us at founders@voiceshop.ai to discuss enterprise options.",
    },
    {
      q: "Can I get an invoice/GST receipt?",
      a: "Yes. All Indian businesses receive GST-compliant invoices automatically after payment. You can download them from your dashboard or request via email.",
    },
  ],
};

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left hover:bg-muted/50 transition-colors duration-150 cursor-pointer"
      >
        <span className="font-semibold text-base text-foreground leading-snug">
          {item.q}
        </span>
        <span
          className="shrink-0 text-2xl font-light text-muted-foreground mt-0.5 leading-none select-none w-5 text-center"
          aria-hidden="true"
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 300ms ease",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <div className="px-6 pb-5 pt-0">
            <div className="h-px bg-border mb-4" />
            {item.a.split("\n\n").map((para, i) => (
              <p
                key={i}
                className={`text-sm text-muted-foreground leading-relaxed${i > 0 ? " mt-3" : ""}`}
                style={{ whiteSpace: "pre-line" }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [activeTab, setActiveTab] = useState<TabId>("general");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
    setOpenIndex(null);
  };

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="section-container py-24 md:py-32 bg-background border relative overflow-hidden"
      id="faq"
    >
      <div className="section-container-padding relative z-10">
        {/* Header */}
        <div className="text-center mb-10 section-content-padding">
          <h2 className="text-3xl leading-tight text-foreground md:text-4xl mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Arya and Aryabhatta.
          </p>
        </div>

        {/* Tab Bar */}
        <div className="mb-8 overflow-x-auto scrollbar-hide">
          <div className="flex border-b border-border min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabChange(tab.id)}
                className={`px-5 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-150 border-b-2 -mb-px cursor-pointer ${
                  activeTab === tab.id
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Items */}
        <div className="flex flex-col gap-6 max-w-3xl">
          {faqData[activeTab].map((item, i) => (
            <AccordionItem
              key={`${activeTab}-${i}`}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-10 max-w-3xl">
          <p className="text-sm text-muted-foreground">
            Still have questions?{" "}
            <a
              href="mailto:founders@voiceshop.ai"
              className="text-foreground font-medium hover:underline"
            >
              Contact us at founders@voiceshop.ai
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
