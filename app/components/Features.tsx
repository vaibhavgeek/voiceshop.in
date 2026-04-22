import {
  Search,
  BarChart3,
  HelpCircle,
  Truck,
  Sparkles,
  Mic,
  Clock,
} from "lucide-react";

function ProductExplorationCard() {
  return (
    <div className="w-full h-full min-h-[200px] bg-[#eeecea] flex items-center justify-center px-4 py-6 overflow-hidden">
      <div className="w-full max-w-[320px] space-y-3">
        <div className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider text-center">Discovery</div>
        <div className="flex items-end justify-end gap-2">
          <div className="bg-neutral-900 text-white px-3.5 py-2 rounded-2xl rounded-br-sm text-[11px] leading-snug max-w-[220px] shadow-sm">
            Office ke liye comfortable kurti, budget around ₹1,200
          </div>
          <div className="w-7 h-7 rounded-full bg-neutral-300 flex-shrink-0" />
        </div>
        <div className="flex items-end gap-2">
          <div className="w-7 h-7 rounded-full bg-primary/20 flex-shrink-0" />
          <div className="space-y-2 max-w-[260px]">
            <div className="bg-white text-neutral-800 px-3.5 py-2 rounded-2xl rounded-bl-sm text-[11px] leading-snug shadow-sm border border-neutral-100">
              Yeh do styles try karein &mdash; dono airy cotton hain. Agar thoda zyada stretch chahiye to teesra option bhi bataa sakti hoon.
            </div>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[9px] px-2 py-0.5 rounded-md bg-amber-100/80 text-amber-900 border border-amber-200/60">Softer on budget</span>
              <span className="text-[9px] px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-700 border border-neutral-200">+2 alternatives</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-900/5 border border-neutral-200">
          <Sparkles className="w-3 h-3 text-neutral-700" />
          <span className="text-[9px] font-medium text-neutral-700">Needs summary saved for PDP &amp; next pages</span>
        </div>
      </div>
    </div>
  );
}

function ProductDetailPageCard() {
  return (
    <div className="w-full h-full min-h-[200px] bg-[#eeecea] flex items-center justify-center px-4 py-5 overflow-hidden text-neutral-900">
      <div className="relative w-full max-w-[300px] rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
        {/* Image strip: explicit colors so .dark parent does not wash out text-primary / bg-primary */}
        <div className="relative h-[90px] bg-gradient-to-br from-stone-100 via-amber-50/80 to-stone-200 border-b border-neutral-200 flex items-center justify-center gap-1.5 px-4">
          <div
            className="h-16 w-12 rounded-md bg-stone-300/95 shadow-sm ring-1 ring-stone-400/25"
            aria-hidden
          />
          <div
            className="h-[72px] w-14 rounded-md bg-amber-200/95 shadow-md ring-1 ring-amber-400/30 -ml-1 z-10"
            aria-hidden
          />
        </div>
        <div className="p-3 space-y-2.5">
          <div className="text-[10px] font-medium uppercase tracking-wider text-neutral-800">On this product</div>
          <p className="text-[11px] text-neutral-800 leading-snug">
            Aapne office + breathable fabric bola tha &mdash; yeh fabric exactly wohi use-case ke liye designed hai.
          </p>
          <div className="flex items-center gap-1 text-[9px] text-neutral-600">
            <span className="px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-800">Matches: comfort</span>
            <span className="px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-800">₹1,199</span>
          </div>
          <div className="flex gap-2 pt-1">
            <div className="flex-1 text-center text-[10px] font-medium py-1.5 rounded-lg bg-neutral-900 text-white">
              Add to cart
            </div>
            <div className="flex-1 text-center text-[10px] font-medium py-1.5 rounded-lg border border-neutral-200 bg-white text-neutral-800">
              Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SilentHesitationCard() {
  return (
    <div className="w-full h-full min-h-[200px] bg-[#eeecea] flex items-center justify-center px-4 py-6 overflow-hidden">
      <div className="w-full max-w-[300px] space-y-4">
        <div className="text-center text-[10px] font-medium text-neutral-500 uppercase tracking-wider">When words aren&apos;t needed</div>
        <div className="rounded-xl border border-dashed border-neutral-300 bg-white/60 px-4 py-5 text-center">
          <div className="inline-flex items-center gap-1.5 text-neutral-400 mb-2">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-[10px] font-mono">0:47</span>
          </div>
          <p className="text-[10px] text-neutral-500 leading-relaxed">Comfortable pause &mdash; Arya isn&apos;t filling the silence</p>
        </div>
        <div className="flex items-end gap-2">
          <div className="w-7 h-7 rounded-full bg-primary/20 flex-shrink-0" />
          <div className="bg-white text-neutral-800 px-3.5 py-2 rounded-2xl rounded-bl-sm text-[11px] leading-snug shadow-sm border border-neutral-100 max-w-[220px]">
            Jab aap ready hon, main yahin hoon. Aur sawaal ho toh poochiye.
          </div>
        </div>
      </div>
    </div>
  );
}

function AryaLanguageCard() {
  return (
    <div className="w-full h-full min-h-[200px] bg-[#eeecea] flex items-center justify-center px-4 py-6 overflow-hidden">
      <div className="w-full max-w-[320px] space-y-4">
        <div className="text-center mb-3">
          <div className="text-[11px] font-medium text-neutral-500 uppercase tracking-wider">Ask &amp; Respond in Their Language</div>
        </div>
        <div className="space-y-2">
          {[
            { lang: "Hindi", text: "aapki size bataaoge?" },
            { lang: "Tamil", text: "உங்கள் அளவு என்ன?" },
            { lang: "Bengali", text: "আপনার সাইজ কত?" },
            { lang: "Telugu", text: "మీ సైజ్ ఏంటి?" },
          ].map((item) => (
            <div key={item.lang} className="bg-white rounded-lg px-3 py-2 shadow-sm border border-neutral-100">
              <div className="text-[9px] text-neutral-400 mb-0.5">{item.lang}</div>
              <div className="text-[11px] text-neutral-700">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WebsiteKnowledgeCard() {
  return (
    <div className="w-full h-full min-h-[200px] bg-[#eeecea] flex items-center justify-center px-4 py-6 overflow-hidden">
      <div className="w-full max-w-[300px] space-y-2.5">
        <div className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider text-center">Pulled from your store</div>
        {[
          { icon: Truck, q: "Free delivery kab milegi?", a: "₹999+ orders, 3–5 days metro" },
          { icon: HelpCircle, q: "Return policy kya hai?", a: "7 days, tags intact" },
        ].map((row) => (
          <div key={row.q} className="bg-white rounded-lg border border-neutral-200 p-2.5 shadow-sm">
            <div className="flex items-start gap-2">
              <row.icon className="w-3.5 h-3.5 text-neutral-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-[10px] text-neutral-500">{row.q}</div>
                <div className="text-[11px] text-neutral-800 mt-0.5 leading-snug">{row.a}</div>
              </div>
            </div>
          </div>
        ))}
        <p className="text-[9px] text-center text-neutral-500 pt-0.5">Policy pages &amp; FAQs synced from your site</p>
      </div>
    </div>
  );
}

function ListenConversationsCard() {
  return (
    <div className="relative w-full h-full min-h-[300px] bg-gradient-to-br from-slate-50 to-neutral-100 flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="relative z-10 w-full max-w-[280px] space-y-2.5">
        <div className="bg-white rounded-xl border border-border/50 shadow-sm p-2.5 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Mic className="w-4 h-4 text-primary" />
          </div>
          <div>
            <div className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider">Session replay</div>
            <div className="text-[11px] text-neutral-800">Listen to full customer conversations</div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl border border-border/50 overflow-hidden">
          <div className="bg-neutral-50/80 border-b border-border/50 px-3 py-2.5 flex items-center gap-2">
            <BarChart3 className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-neutral-700">Conversion &amp; hesitation insights</span>
          </div>
          <div className="p-2.5 space-y-1.5">
            {[
              { label: "Price Concerns", value: "47%" },
              { label: "Size Questions", value: "32%" },
              { label: "Quality Doubts", value: "21%" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between p-1.5 rounded-lg bg-neutral-50/80 border border-border/30">
                <span className="text-[10px] text-neutral-600">{item.label}</span>
                <span className="text-[10px] font-bold text-neutral-800">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 text-[9px] text-neutral-500">
          <Search className="w-2.5 h-2.5" />
          <span>+ missing product &amp; query patterns</span>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Product exploration",
    description:
      "It asks what you are looking for, shows alternatives, and stays patient the whole time. It suggests better fits for your comfort and budget, and keeps a short summary of your needs for the next pages.",
    card: ProductExplorationCard,
  },
  {
    title: "Product detail page",
    description:
      "On the PDP it speaks clearly about the product and how it lines up with what you asked for. It nudges you to add to cart, then move toward checkout when you are ready.",
    card: ProductDetailPageCard,
  },
  {
    title: "Silent hesitations",
    description:
      "It reads natural pauses, knows when to stay quiet, and when to say something. It does not talk over the customer, and is comfortable with long silences while they decide.",
    card: SilentHesitationCard,
  },
  {
    title: "Talks to them in their language",
    description:
      "Shoppers can speak the language they are at home in. We support 99 languages so the experience works wherever your customers are coming from.",
    card: AryaLanguageCard,
  },
  {
    title: "Ask about shipping, returns, or anything on your site",
    description:
      "We pull the right text from your website so visitors can ask about delivery, refunds, or policy in plain language and get an answer that matches your store.",
    card: WebsiteKnowledgeCard,
  },
  {
    title: "Listen to each user conversation",
    description:
      "Hear the full back-and-forth for every visit, and use the insights view to see how many people convert, what held others back, and which searches you do not yet stock.",
    card: ListenConversationsCard,
  },
];

export default function Features() {
  return (
    <div className="dark bg-background text-foreground">
    <section className="section-container py-24 md:py-32 border-x border-b bg-background" id="meet-arya">
      <div className="max-w-5xl mx-auto text-center mb-16 section-container-padding">
        <h2 className="section-heading max-w-3xl mx-auto">
          <span className="text-muted-foreground">Meet the Agents.</span> Your AI-powered sales team
          that works 24/7
        </h2>
        <p className="section-subheadline">
          Speaks every language, never takes a day off, and never asks for a salary hike.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border-y rounded-none max-w-7xl mx-auto overflow-hidden">
        {features.map((feature) => (
          <div key={feature.title} className="group relative bg-card flex flex-col h-full">
            <div className="w-full h-[350px] bg-muted border-b overflow-hidden relative">
              <feature.card />
            </div>
            <div className="p-6 md:p-8 bg-card z-10 flex flex-col justify-start">
              <h3 className="text-lg mb-2">{feature.title}</h3>
              <p className="text-base font-normal text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
