import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OldVsNew from "./components/OldVsNew";
import Features from "./components/Features";
import WhyMagicalCX from "./components/WhyMagicalCX";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import AskAI from "./components/AskAI";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      <Navbar />
      <Hero />
      <WhyMagicalCX />
      <OldVsNew />
      <Features />
      <FAQ />
      <CTA />
      <AskAI />
      <Footer />
    </div>
  );
}
