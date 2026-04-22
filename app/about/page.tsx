import { ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import vaibhavImg from "../assets/vaibhav.jpg";
import ketanImg from "../assets/ketan.jpeg";

const founders = [
  {
    name: "Vaibhav Maheshwari",
    role: "CTO & Co-founder",
    avatar: vaibhavImg,
    linkedin: "https://linkedin.com/in/vaibhavgeek",
    bio: "Tech nerd, obsessed about Claude Code and the future.",
    experience: [
      {
        company: "Kleo Network",
        role: "Founder",
        detail: "120K users, $40K revenue, $80K in grants & hackathon wins. Acquired.",
      },
    ],
    education: [
      "NIT Surat — B.Sc. Mathematics (2015–2020)",
    ],
  },
  {
    name: "Ketan Kachhadiya",
    role: "CEO & Co-founder",
    avatar: ketanImg,
    linkedin: "https://www.linkedin.com/in/ketan8469822270/",
    bio: "I bring clarity, focus and business at VoiceShop.",
    experience: [
      {
        company: "Meesho",
        role: "Senior Business Manager",
        detail: "Grew categories by 24% YoY. Scaled Meesho Gold from 0.2% to 3% NMV share.",
      },
    ],
    education: [
      "IIM Indore — MBA (2019–2021)",
      "NIT Surat — BTech Civil Engineering (2014–2018)",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      <Navbar />

      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="section-container section-container-padding text-center">
          <h1 className="font-stix text-4xl md:text-5xl lg:text-6xl font-normal text-[#0a0a0a] mb-4">
            We believe commerce deserves<br />a magical experience
          </h1>
          <p className="section-subheadline max-w-2xl">
            We&apos;re annoyed by bad UX. Our goal is to help D2C brands earn more by transforming the customer experience on their websites — bringing commerce to where it hasn&apos;t reached before.
          </p>
        </div>
      </section>

      <section className="pb-12">
        <div className="section-container section-container-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-[#e5e5e5] p-8 text-center">
              <p className="text-4xl font-bold text-[#0a0a0a] mb-2">90%+</p>
              <p className="text-sm text-[#737373]">Website visitors leave without buying</p>
            </div>
            <div className="bg-white rounded-2xl border border-[#e5e5e5] p-8 text-center">
              <p className="text-4xl font-bold text-[#0a0a0a] mb-2">15+</p>
              <p className="text-sm text-[#737373]">Indian languages supported by our AI</p>
            </div>
            <div className="bg-white rounded-2xl border border-[#e5e5e5] p-8 text-center">
              <p className="text-4xl font-bold text-[#0a0a0a] mb-2">24/7</p>
              <p className="text-sm text-[#737373]">Always-on AI salesman for your store</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-container section-container-padding">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0a0a0a] text-center mb-10">
            Meet the Founders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="bg-white rounded-2xl border border-[#e5e5e5] p-8 flex flex-col items-center text-center"
              >
                <img
                  src={founder.avatar.src}
                  alt={founder.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-[#0a0a0a]">
                  {founder.name}
                </h3>
                <p className="text-sm text-[#737373] mt-0.5">{founder.role}</p>
                <p className="text-sm text-[#737373] mt-3 leading-relaxed">
                  {founder.bio}
                </p>

                <div className="w-full mt-6 pt-6 border-t border-[#e5e5e5] text-left">
                  {founder.experience.map((exp) => (
                    <div key={exp.company} className="mb-4">
                      <p className="text-sm font-semibold text-[#0a0a0a]">{exp.role}</p>
                      <p className="text-sm text-[#737373]">{exp.company}</p>
                      <p className="text-sm text-[#737373] mt-1 leading-relaxed">{exp.detail}</p>
                    </div>
                  ))}
                  {founder.education.map((edu) => (
                    <p key={edu} className="text-sm text-[#737373]">{edu}</p>
                  ))}
                </div>

                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-[#0a0a0a] hover:underline"
                >
                  <ExternalLink size={14} />
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
