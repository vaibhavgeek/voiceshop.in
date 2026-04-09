import {
  Bot,
  Repeat2,
  Link,
  Split,
  CircleHelp,
  Mail,
  Unplug,
  MessageCircle,
  Brain,
  Zap,
  TrendingUp,
  FileText,
  Megaphone,
  User,
  Cable,
  Undo,
  Redo,
} from "lucide-react";

const oldWayItems = [
  { icon: Bot, text: "Fails with robotic replies when it matters" },
  { icon: Repeat2, text: "Makes customers repeat themselves" },
  { icon: Link, text: "Sends links when people need solutions" },
  { icon: Split, text: "Designed to deflect tickets" },
  { icon: CircleHelp, text: "Leaves you guessing" },
  { icon: Bot, text: "Makes your brand sound cold and generic" },
  { icon: Mail, text: "Tells customers to email for complex issues" },
  { icon: Unplug, text: "Disconnected from your tools and data" },
];

const newWayItems = [
  { icon: MessageCircle, text: "Helps with human-like replies when it matters" },
  { icon: Brain, text: "Remembers every detail, across channels" },
  { icon: Zap, text: "Takes agentic action within the chat" },
  { icon: TrendingUp, text: "Generate sales from support using EFRO\u2122" },
  { icon: FileText, text: "Tells you what customers actually care about" },
  { icon: Megaphone, text: "Makes your brand sound HumanlyClear\u2122" },
  { icon: User, text: "Escalates to a human when needed" },
  { icon: Cable, text: "Works seamlessly with your CRM and data" },
];

export default function OldVsNew() {
  return (
    <section className="section-container py-16 md:py-32 border section-content-padding">
      <div className="text-center mb-12 md:mb-20">
        <h2 className="section-heading">The Old Way vs The Magical Way</h2>
        <p className="section-subheadline">
          Two very different ways to handle support. In 2026, only one makes sense.
        </p>
      </div>

      <div className="flex flex-col md:flex-row max-w-4xl mx-auto border border-border rounded-md overflow-hidden">
        {/* Old Way */}
        <div className="w-full md:w-1/2 bg-card px-4 py-6 md:px-6 lg:px-8 md:py-8 border-b md:border-b-0 md:border-r border-border">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg md:text-xl text-muted-foreground font-normal">The Old Way</h3>
            <Undo className="size-5 text-muted-foreground" />
          </div>
          <div className="space-y-6 pb-2 md:pb-0">
            {oldWayItems.map((item, i) => (
              <div key={i} className="flex gap-4 opacity-60 items-center">
                <item.icon className="w-5 h-5 text-muted-foreground shrink-0" />
                <h3 className="text-base text-foreground font-normal leading-snug">{item.text}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* New Way */}
        <div className="w-full md:w-1/2 bg-primary px-4 py-6 md:px-6 lg:px-8 md:py-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg md:text-xl text-primary-foreground font-normal">
              The MagicalCX Way
            </h3>
            <Redo className="size-5 text-primary-foreground" />
          </div>
          <div className="space-y-6 pb-2 md:pb-0">
            {newWayItems.map((item, i) => (
              <div key={i} className="flex gap-4 items-center">
                <item.icon className="w-5 h-5 text-primary-foreground shrink-0" />
                <h3 className="text-base text-primary-foreground font-normal leading-snug">
                  {item.text}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
