import { Globe, ArrowRight, Star, CreditCard, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <div className="pt-[90px]">
      <div className="section-container border-x flex flex-col items-center justify-center w-full pt-14 sm:pt-16 md:pt-20 pb-0 gap-6 sm:gap-8 md:gap-10">
        <div className="flex flex-col items-center text-center mt-4 sm:mt-6 md:mt-8 px-4">
          <h1
            className="font-playfair italic font-normal leading-tight mb-5 px-4 text-[#0a0a0a]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            AI Customer Service that delivers
            <br />
            faster resolutions and feels human
          </h1>
          <p className="text-base leading-relaxed text-[#737373] max-w-xl mx-auto">
            AI agents that remember every conversation, respond with empathy, and speak
            HumanlyClear&trade; while creating revenue opportunities across web chat, email,
            WhatsApp, Instagram, and Messenger
          </p>

          <div className="w-full mt-8">
            <div className="w-full max-w-lg mx-auto px-4">
              <form className="relative group w-full">
                <div className="relative">
                  <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none">
                    <Globe className="h-5 w-5 text-[#737373]/50 group-focus-within:text-black/40 transition-colors" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your website URL"
                    className="w-full h-14 rounded-lg border border-[#e5e5e5] bg-white pl-11 pr-4 text-base transition-all focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 sm:pr-36"
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

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 mt-5 text-sm text-[#737373]">
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium text-[#0a0a0a]">4.9/5</span>{" "}
                Customer rating
              </span>
              <span className="flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-emerald-500" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                <span className="font-medium text-[#0a0a0a]">99.9%</span>{" "}
                Uptime SLA
              </span>
            </div>
          </div>
        </div>

        {/* Dashboard preview */}
        <div
          className="relative flex items-center justify-center w-full p-4 md:p-6 rounded-xl mx-4"
          style={{
            background: "linear-gradient(0deg, #f7fafc 0%, #e5ecec 100%)",
            aspectRatio: "16/9",
          }}
        >
          <div className="w-full h-full rounded-lg bg-white/60 shadow-inner flex items-center justify-center text-[#737373] text-sm min-h-[200px]">
            <div className="text-center space-y-2 opacity-50">
              <svg className="w-10 h-10 mx-auto text-[#737373]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
