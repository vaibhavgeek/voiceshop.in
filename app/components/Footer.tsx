const footerLinks = {
  Product: [
    { label: "Meet Arya", href: "/#meet-arya" },
    { label: "Aryabhatta Dashboard", href: "/#meet-arya" },
    { label: "Book a Demo", href: "/#cta" },
  ],
  Resources: [
    { label: "FAQ", href: "/#faq" },
    { label: "Pricing", href: "/pricing" },
    { label: "Case Studies", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Contact: [
    { label: "founders@voiceshop.ai", href: "mailto:founders@voiceshop.ai" },
    { label: "LinkedIn", href: "#" },
    { label: "WhatsApp Support", href: "#" },
  ],
};

export default function Footer() {
  return (
    <div className="bg-background dark">
      <footer className="section-container bg-background border overflow-hidden relative">
        {/* Main footer links */}
        <div className="section-content-padding py-10 sm:py-12 lg:py-16 border-b border-border relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 sm:gap-10 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-2 mb-4 sm:mb-0 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl font-medium text-foreground">VoiceShop AI</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-sm">
                India&apos;s first AI voice salesman. Converting website visitors into customers, 24/7.
              </p>
              <div className="mt-auto pt-4">
                <address className="text-sm text-muted-foreground not-italic leading-relaxed">
                  Bangalore, India
                </address>
              </div>
            </div>

            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className="col-span-1">
                <h3 className="mb-3 sm:mb-4 text-sm sm:text-base text-foreground font-medium">
                  {section}
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-sm text-muted-foreground">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-content-padding py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 relative z-10">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            &copy; 2026 VoiceShop AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
