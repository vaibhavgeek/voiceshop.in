import { Globe, ArrowRight, ShieldCheck, Clock, ShoppingCart, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <div className="pt-[90px]">
      <div className="section-container border-x flex flex-col items-center justify-center w-full pt-14 sm:pt-16 md:pt-20 pb-0 gap-6 sm:gap-8 md:gap-10">
        <div className="flex flex-col items-center text-center mt-4 sm:mt-6 md:mt-8 px-4">
          <h1
            className="font-stix font-normal leading-snug mb-5 px-4 text-[#0a0a0a]"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 3rem)" }}
          >
            Your Shop Visitors Need Help
            <br />
            <span className="font-bold">Add Talking AI Salesmen &amp; Grow Sales</span>
          </h1>
          <p className="text-lg leading-relaxed text-[#737373] max-w-md mx-auto text-center">
            40% of paid traffic leave because no one helps them buy. Arya speaks 12 Indian languages, works 24/7, and converts visitors into customers.
          </p>

          <div className="w-full mt-8">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 mb-6 text-base text-[#737373]">
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-500" />
                <span className="font-semibold text-[#0a0a0a]">24/7</span> Live
              </span>
              <span className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-500" />
                <span className="font-semibold text-[#0a0a0a]">15+</span> Indian Languages
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold text-[#0a0a0a]">₹0</span> charge for 14-day
              </span>
            </div>
            <div className="w-full max-w-lg mx-auto px-4">
              <form id="hero-cta-form" className="relative group w-full">
                <div className="relative">
                  <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none">
                    <Globe className="h-5 w-5 text-[#737373]/50 group-focus-within:text-black/40 transition-colors" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your website URL"
                    className="w-full h-14 rounded-lg border border-[#e5e5e5] bg-white pl-11 pr-4 text-base transition-all focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 sm:pr-36"
                    suppressHydrationWarning
                  />
                  <button
                    type="submit"
                    className="hidden sm:flex absolute right-1.5 top-1.5 h-11 px-5 rounded-md bg-black text-white font-medium text-sm hover:bg-black/80 transition-colors items-center gap-2"
                  >
                    Try Free Demo
                    <ArrowRight className="size-4" />
                  </button>
                </div>
                <button
                  type="submit"
                  className="sm:hidden mt-3 h-11 px-6 rounded-lg bg-black text-white font-medium text-sm hover:bg-black/80 transition-colors flex items-center gap-2 w-full justify-center"
                >
                  Try Free Demo
                  <ArrowRight className="size-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Video preview */}
        <div
          className="relative flex items-center justify-center w-full p-4 md:p-6 rounded-xl mx-4"
          style={{
            background: "linear-gradient(0deg, #f7fafc 0%, #e5ecec 100%)",
            aspectRatio: "16/9",
          }}
        >
          <div className="w-full h-full rounded-lg bg-white/60 shadow-inner flex items-center justify-center text-[#737373] text-sm min-h-[200px]">
            <div className="text-center space-y-2">
              <button className="w-16 h-16 mx-auto rounded-full bg-[#0a0a0a] flex items-center justify-center hover:bg-[#0a0a0a]/80 transition-colors cursor-pointer">
                <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Without vs With Arya comparison */}
        <div className="w-full max-w-4xl mx-auto px-4 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Without Arya */}
            <div className="bg-white rounded-xl border border-[#e5e5e5] p-6 md:p-8">
              <div className="text-sm font-medium text-[#737373] uppercase tracking-wider mb-4">Without Arya</div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#737373] shrink-0" />
                  <span className="text-[#0a0a0a]">User leaves website</span>
                </div>
                <div className="text-sm text-[#737373]">Session: 47 seconds</div>
                <div className="mt-4 pt-4 border-t border-[#e5e5e5]">
                  <div className="text-sm text-[#737373] mb-1">Conversion Rate</div>
                  <div className="text-3xl font-medium text-[#0a0a0a]">2-4%</div>
                </div>
              </div>
            </div>

            {/* With Arya */}
            <div className="bg-[#0a0a0a] rounded-xl border border-[#333] p-6 md:p-8">
              <div className="text-sm font-medium text-white/60 uppercase tracking-wider mb-4">With Arya</div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-5 h-5 text-white/70 shrink-0" />
                  <span className="text-white">&quot;Haan madam, ye saree silk hai...&quot;</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-white/70 shrink-0" />
                  <span className="text-white">Order Placed</span>
                </div>
                <div className="text-sm text-white/60">Conversation: 3 min 24 sec</div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="text-sm text-white/60 mb-1">Conversion Rate</div>
                  <div className="text-3xl font-medium text-white">15%+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
