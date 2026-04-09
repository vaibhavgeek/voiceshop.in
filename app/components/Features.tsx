import {
  MessageCircle,
  Brain,
  Zap,
  Globe,
  ShoppingCart,
  Search,
  BarChart3,
  AlertTriangle,
  HelpCircle,
  Truck,
} from "lucide-react";

function AryaConversationCard() {
  return (
    <div className="w-full h-full min-h-[200px] bg-[#eeecea] flex items-center justify-center px-4 py-6 overflow-hidden">
      <div className="w-full max-w-[320px] space-y-3">
        <div className="flex items-end justify-end gap-2">
          <div className="bg-neutral-900 text-white px-3.5 py-2 rounded-2xl rounded-br-sm text-[11px] leading-snug max-w-[210px] shadow-sm">
            Ye saree kitne ki hai?
          </div>
          <div className="w-7 h-7 rounded-full bg-neutral-300 flex-shrink-0" />
        </div>
        <div className="flex items-end gap-2">
          <div className="w-7 h-7 rounded-full bg-primary/20 flex-shrink-0" />
          <div className="space-y-1.5 max-w-[240px]">
            <div className="bg-white text-neutral-800 px-3.5 py-2 rounded-2xl rounded-bl-sm text-[11px] leading-snug shadow-sm">
              Madam, ye Banarasi silk saree Rs.2,499 ki hai. Aaj 20% off hai. Size bataaiye?
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 w-fit">
          <Globe className="w-2.5 h-2.5 text-neutral-500" />
          <span className="text-[9px] font-medium text-neutral-600">Hindi &bull; Tamil &bull; Bengali &bull; Telugu</span>
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

function AryaHesitationCard() {
  return (
    <div className="w-full h-full min-h-[200px] bg-[#eeecea] flex items-center justify-center px-4 py-6 overflow-hidden">
      <div className="w-full max-w-[320px] space-y-3">
        <div className="flex items-end justify-end gap-2">
          <div className="bg-neutral-900 text-white px-3.5 py-2 rounded-2xl rounded-br-sm text-[11px] leading-snug max-w-[210px] shadow-sm">
            Ye material fade toh nahi hoga?
          </div>
          <div className="w-7 h-7 rounded-full bg-neutral-300 flex-shrink-0" />
        </div>
        <div className="flex items-end gap-2">
          <div className="w-7 h-7 rounded-full bg-primary/20 flex-shrink-0" />
          <div className="space-y-1.5 max-w-[240px]">
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 w-fit">
              <AlertTriangle className="w-2.5 h-2.5 text-neutral-500" />
              <span className="text-[9px] font-medium text-neutral-600">Hesitation detected</span>
            </div>
            <div className="bg-white text-neutral-800 px-3.5 py-2 rounded-2xl rounded-bl-sm text-[11px] leading-snug shadow-sm">
              Bilkul nahi madam! Ye pure silk hai, 200+ customers ne 5-star review diya hai. Size chart bheju?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AryaNudgeCard() {
  return (
    <div className="w-full h-full min-h-[200px] bg-[#eeecea] flex items-center justify-center px-4 py-6 overflow-hidden">
      <div className="w-full max-w-[320px] space-y-3">
        <div className="flex items-end gap-2">
          <div className="w-7 h-7 rounded-full bg-primary/20 flex-shrink-0" />
          <div className="space-y-1.5 max-w-[240px]">
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 w-fit">
              <Zap className="w-2.5 h-2.5 text-neutral-500" />
              <span className="text-[9px] font-medium text-neutral-600">Nudge mode</span>
            </div>
            <div className="bg-white text-neutral-800 px-3.5 py-2 rounded-2xl rounded-bl-sm text-[11px] leading-snug shadow-sm">
              Order lagaadu sir? Aaj free delivery hai!
            </div>
            <div className="bg-neutral-100 text-neutral-700 px-3.5 py-2 rounded-2xl text-[11px] leading-snug shadow-sm border border-neutral-200 flex items-center gap-2">
              <ShoppingCart className="w-3 h-3" />
              Order placed successfully
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="text-[10px] text-neutral-500">Conversation Duration: <span className="font-medium text-neutral-700">02:34</span></div>
        </div>
      </div>
    </div>
  );
}

function AryabhattaInsightsCard() {
  return (
    <div className="relative w-full h-full min-h-[300px] bg-gradient-to-br from-slate-50 to-neutral-100 flex items-center justify-center p-6 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="relative z-10 w-full max-w-[260px] bg-white rounded-2xl shadow-xl border border-border/50 overflow-hidden">
        <div className="bg-neutral-50/80 border-b border-border/50 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
              <BarChart3 className="w-3.5 h-3.5 text-primary" />
            </div>
            <span className="text-sm font-semibold text-neutral-700">Aryabhatta Dashboard</span>
          </div>
        </div>
        <div className="p-3 space-y-2">
          {[
            { label: "Price Concerns", value: "47%", color: "text-neutral-800" },
            { label: "Size Questions", value: "32%", color: "text-neutral-700" },
            { label: "Quality Doubts", value: "21%", color: "text-neutral-600" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between p-2 rounded-xl bg-neutral-50/80 border border-border/30">
              <span className="text-[11px] text-neutral-600">{item.label}</span>
              <span className={`text-[11px] font-bold ${item.color}`}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AryabhattaMissingProductCard() {
  return (
    <div className="relative w-full h-full min-h-[200px] bg-neutral-50/50 flex items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-[260px] bg-white rounded-xl border border-border/50 shadow-sm p-4 space-y-3">
        <div className="flex items-center gap-2 mb-2">
          <Search className="w-4 h-4 text-neutral-500" />
          <span className="text-xs font-medium text-neutral-700">Top Missing Product</span>
        </div>
        <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-3">
          <p className="text-[11px] text-neutral-700 leading-relaxed">
            23 visitors searched for &ldquo;cotton kurti under Rs.500&rdquo; — Not in catalog
          </p>
        </div>
        <div className="space-y-2 pt-2">
          <div className="text-[10px] text-neutral-500 font-medium uppercase tracking-wider">Recent Query Patterns</div>
          {[
            { query: "Free delivery kab milega?", count: "89x" },
            { query: "Return policy kya hai?", count: "67x" },
            { query: "COD available hai?", count: "54x" },
          ].map((item) => (
            <div key={item.query} className="flex items-center justify-between text-[10px]">
              <span className="text-neutral-600">{item.query}</span>
              <span className="font-medium text-neutral-800">{item.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Understands All Your Products",
    description: "Design, colors, size, price, material, occasion, season \u2014 Arya knows your catalog inside out.",
    card: AryaConversationCard,
  },
  {
    title: "Speaks 12 Indian Languages",
    description: "Ask & respond in their language \u2014 Hindi, Tamil, Bengali, Telugu, and 8 more. No English fear.",
    card: AryaLanguageCard,
  },
  {
    title: "Detects & Handles Hesitations",
    description: "Explains material like a manufacturer, uses reviews to convince, shows size charts when customers doubt.",
    card: AryaHesitationCard,
  },
  {
    title: "Nudges Order Placement",
    description: "\u201COrder lagaadu sir?\u201D \u2014 Arya pushes when users like the product and closes the sale.",
    card: AryaNudgeCard,
  },
  {
    title: "Aryabhatta: Why They Didn\u2019t Buy",
    description: "Records all conversations, finds patterns in hesitations \u2014 price, size, quality, delivery concerns.",
    card: AryabhattaInsightsCard,
  },
  {
    title: "Missing Products & Query Patterns",
    description: "Tells you what users searched that you don\u2019t have, and the top questions visitors ask.",
    card: AryabhattaMissingProductCard,
  },
];

export default function Features() {
  return (
    <section className="section-container py-24 md:py-32 border-x border-b" id="meet-arya">
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
  );
}
