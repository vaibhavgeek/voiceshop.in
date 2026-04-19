import {
  MessageCircle,
  Globe,
  HelpCircle,
  ShoppingBag,
  Handshake,
  Search,
  Shirt,
  Package,
  UserCheck,
  Undo,
  Redo,
} from "lucide-react";

const offlineItems = [
  { icon: Handshake, text: "Salesman greets in customer\u2019s language" },
  { icon: Search, text: "Asks occasion, budget, filters 500 SKUs to 5" },
  { icon: MessageCircle, text: 'Handles "Will this color fade?" on the spot' },
  { icon: Shirt, text: "Shows matching blouse, suggests accessories" },
  { icon: UserCheck, text: "Remembers repeat customers" },
];

const websiteItems = [
  { icon: Globe, text: "Static homepage, English-only" },
  { icon: ShoppingBag, text: "Customer drowns in product grid" },
  { icon: HelpCircle, text: "Unanswered doubt = exit" },
  { icon: Package, text: "No cross-sell, no upsell" },
  { icon: UserCheck, text: "Every visit = stranger" },
];

export default function OldVsNew() {
  return (
    <section className="section-container py-16 md:py-32 border section-content-padding" id="the-problem">
      <div className="text-center mb-12 md:mb-20">
        <h2 className="section-heading">Every Showroom Knows This.<br />Your Website Does Not.</h2>
        <p className="section-subheadline">
          Your offline showroom converts at 30-40%. Your website? Just 2-4%. Here&apos;s why.
        </p>
      </div>

      <div className="flex flex-col md:flex-row max-w-4xl mx-auto border border-border rounded-md overflow-hidden">
        {/* Offline Showroom */}
        <div className="w-full md:w-1/2 bg-primary px-4 py-6 md:px-6 lg:px-8 md:py-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg md:text-xl text-primary-foreground font-normal">Offline Showroom</h3>
            <Redo className="size-5 text-primary-foreground" />
          </div>
          <div className="space-y-6 pb-2 md:pb-0">
            {offlineItems.map((item, i) => (
              <div key={i} className="flex gap-4 items-center">
                <item.icon className="w-5 h-5 text-primary-foreground shrink-0" />
                <h3 className="text-base text-primary-foreground font-normal leading-snug">{item.text}</h3>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="text-sm text-primary-foreground/60 mb-1">Conversion Rate</div>
            <div className="text-2xl font-medium text-primary-foreground">30-40%</div>
          </div>
        </div>

        {/* Your Website (Before Arya) */}
        <div className="w-full md:w-1/2 bg-card px-4 py-6 md:px-6 lg:px-8 md:py-8 border-b md:border-b-0 md:border-r border-border">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg md:text-xl text-muted-foreground font-normal">Your Website (Before Arya)</h3>
            <Undo className="size-5 text-muted-foreground" />
          </div>
          <div className="space-y-6 pb-2 md:pb-0">
            {websiteItems.map((item, i) => (
              <div key={i} className="flex gap-4 opacity-60 items-center">
                <item.icon className="w-5 h-5 text-muted-foreground shrink-0" />
                <h3 className="text-base text-foreground font-normal leading-snug">{item.text}</h3>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-border">
            <div className="text-sm text-muted-foreground mb-1">Conversion Rate</div>
            <div className="text-2xl font-medium text-foreground">2-4%</div>
          </div>
        </div>
      </div>

    </section>
  );
}
