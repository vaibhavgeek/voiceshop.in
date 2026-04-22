"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = { q: string; a: string };

const faqItems: FAQItem[] = [
  {
    q: "Is this just another chatbot?",
    a: "No. Arya is an AI voice salesman that speaks 12 Indian languages, understands your entire product catalog, detects customer hesitations, and actively nudges them to buy \u2014 just like your best offline salesman. Regular chatbots follow scripts. Arya sells.",
  },
  {
    q: "Will it work on mobile?",
    a: "Yes. Arya works seamlessly on mobile devices, which is where most of your customers browse. The voice-first interface is actually easier to use on mobile than typing.",
  },
  {
    q: "What if customers don\u2019t want to talk?",
    a: "That\u2019s fine! Arya also supports text-based chat. Customers can type their questions in any language. But we find that most customers from tier-2 and tier-3 cities actually prefer voice \u2014 it feels more natural to them.",
  },
  {
    q: "How does Aryabhatta know why they didn\u2019t buy?",
    a: "Aryabhatta records and analyzes all conversations using AI. It identifies patterns \u2014 what percentage of visitors had price concerns, size questions, quality doubts, or delivery hesitations. It also shows you what products visitors searched for that you don\u2019t carry.",
  },
  {
    q: "Is my data safe?",
    a: "Absolutely. All conversations are encrypted and stored securely. We follow industry-standard security practices and never share your customer data with third parties.",
  },
  {
    q: "What languages does Arya support?",
    a: "Arya supports 12 Indian languages including Hindi, Tamil, Bengali, Telugu, Marathi, Gujarati, Kannada, Malayalam, Punjabi, Odia, Bhojpuri, and English.",
  },
  {
    q: "How long does integration take?",
    a: "Shopify stores can connect in one click. For WooCommerce and custom stores, integration takes just 1 day. You can start seeing results during your 14-day trial.",
  },
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
  return (
    <section className="section-container py-24 md:py-32 bg-background border relative overflow-hidden" id="faq">
      <div className="section-container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 section-content-padding">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl leading-tight text-foreground md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about Arya and Aryabhatta.
              </p>
            </div>
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                Still have questions?
              </p>
              <a
                href="mailto:founders@voiceshop.ai"
                className="text-sm text-foreground font-medium hover:underline mt-1 inline-block"
              >
                Contact us at founders@voiceshop.ai
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Accordion */}
            <div className="w-full space-y-0">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
