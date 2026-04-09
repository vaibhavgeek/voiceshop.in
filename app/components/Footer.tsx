const footerLinks = {
  Product: [
    { label: "Overview", href: "/" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Free Tools", href: "/free-tools" },
  ],
  Company: [
    { label: "About us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ],
  Legal: [
    { label: "Terms", href: "/legal/terms" },
    { label: "Privacy", href: "/legal/privacy" },
    { label: "Refund policy", href: "/legal/refund" },
  ],
};

const aiSummaryLinks = [
  {
    label: "ChatGPT",
    href: "https://chat.openai.com/?q=As%20a%20potential%20client%2C%20I%20want%20to%20concretely%20understand%20what%20I%20will%20receive%20with%20MagicalCX",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-8 sm:size-9">
        <path fill="currentColor" d="M20.557 10.634a5.07 5.07 0 0 0-.42-4.099c-1.087-1.901-3.284-2.864-5.432-2.42c-.939-1.061-2.321-1.654-3.754-1.654a5.07 5.07 0 0 0-4.814 3.481a5 5 0 0 0-3.334 2.42a5.07 5.07 0 0 0 .618 5.901a5.06 5.06 0 0 0 .444 4.1a5.025 5.025 0 0 0 5.432 2.419a5.07 5.07 0 0 0 3.753 1.679a5.07 5.07 0 0 0 4.815-3.481a5 5 0 0 0 3.333-2.42a5.07 5.07 0 0 0-.642-5.926M13.05 21.152a3.66 3.66 0 0 1-2.395-.864c.025-.025.099-.05.124-.074l3.975-2.296a.65.65 0 0 0 .321-.568v-5.605l1.679.963c.025 0 .025.024.025.05v4.641a3.716 3.716 0 0 1-3.729 3.753M5 17.72c-.444-.765-.592-1.654-.444-2.518c.025.024.075.05.124.074l3.975 2.296a.6.6 0 0 0 .642 0l4.864-2.815v1.95c0 .026 0 .05-.024.05l-4.025 2.321c-1.778 1.037-4.074.42-5.111-1.358M3.965 9.03a3.88 3.88 0 0 1 1.95-1.654v4.74c0 .223.124.445.321.568l4.865 2.815l-1.68.963c-.024 0-.049.025-.049 0L5.347 14.14a3.714 3.714 0 0 1-1.383-5.111m13.827 3.21l-4.864-2.815l1.679-.963c.024 0 .05-.025.05 0l4.024 2.32a3.727 3.727 0 0 1 1.358 5.112a3.72 3.72 0 0 1-1.95 1.63v-4.716a.61.61 0 0 0-.297-.568m1.654-2.519a.5.5 0 0 0-.123-.074L15.347 7.35a.6.6 0 0 0-.642 0L9.84 10.165V8.214c0-.025 0-.05.025-.05l4.025-2.32A3.73 3.73 0 0 1 19 7.226c.445.741.593 1.63.445 2.494M8.927 13.177l-1.68-.963c-.024 0-.024-.025-.024-.05v-4.64a3.75 3.75 0 0 1 3.753-3.753a3.66 3.66 0 0 1 2.395.864a.5.5 0 0 1-.123.074L9.273 7.004a.65.65 0 0 0-.321.568v5.605zm.913-1.975l2.173-1.26l2.173 1.26v2.493l-2.173 1.26l-2.173-1.26z" />
      </svg>
    ),
  },
  {
    label: "Claude",
    href: "https://claude.ai/new?q=As%20a%20potential%20client%2C%20I%20want%20to%20concretely%20understand%20what%20I%20will%20receive%20with%20MagicalCX",
    icon: (
      <svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="size-8 sm:size-9">
        <path fill="#D97757" d="m50.228 170.321l50.357-28.257l.843-2.463l-.843-1.361h-2.462l-8.426-.518l-28.775-.778l-24.952-1.037l-24.175-1.296l-6.092-1.297L0 125.796l.583-3.759l5.12-3.434l7.324.648l16.202 1.101l24.304 1.685l17.629 1.037l26.118 2.722h4.148l.583-1.685l-1.426-1.037l-1.101-1.037l-25.147-17.045l-27.22-18.017l-14.258-10.37l-7.713-5.25l-3.888-4.925l-1.685-10.758l7-7.713l9.397.649l2.398.648l9.527 7.323l20.35 15.75L94.817 91.9l3.889 3.24l1.555-1.102l.195-.777l-1.75-2.917l-14.453-26.118l-15.425-26.572l-6.87-11.018l-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0l10.63 1.426l4.472 3.888l6.61 15.101l10.694 23.786l16.591 32.34l4.861 9.592l2.592 8.879l.973 2.722h1.685v-1.556l1.36-18.211l2.528-22.36l2.463-28.776l.843-8.1l4.018-9.722l7.971-5.25l6.222 2.981l5.12 7.324l-.713 4.73l-3.046 19.768l-5.962 30.98l-3.889 20.739h2.268l2.593-2.593l10.499-13.934l17.628-22.036l7.778-8.749l9.073-9.657l5.833-4.601h11.018l8.1 12.055l-3.628 12.443l-11.342 14.388l-9.398 12.184l-13.48 18.147l-8.426 14.518l.778 1.166l2.01-.194l30.46-6.481l16.462-2.982l19.637-3.37l8.88 4.148l.971 4.213l-3.5 8.62l-20.998 5.184l-24.628 4.926l-36.682 8.685l-.454.324l.519.648l16.526 1.555l7.065.389h17.304l32.21 2.398l8.426 5.574l5.055 6.805l-.843 5.184l-12.962 6.611l-17.498-4.148l-40.83-9.721l-14-3.5h-1.944v1.167l11.666 11.406l21.387 19.314l26.767 24.887l1.36 6.157l-3.434 4.86l-3.63-.518l-23.526-17.693l-9.073-7.972l-20.545-17.304h-1.36v1.814l4.73 6.935l25.017 37.59l1.296 11.536l-1.814 3.76l-6.481 2.268l-7.13-1.297l-14.647-20.544l-15.1-23.138l-12.185-20.739l-1.49.843l-7.194 77.448l-3.37 3.953l-7.778 2.981l-6.48-4.925l-3.436-7.972l3.435-15.749l4.148-20.544l3.37-16.333l3.046-20.285l1.815-6.74l-.13-.454l-1.49.194l-15.295 20.999l-23.267 31.433l-18.406 19.702l-4.407 1.75l-7.648-3.954l.713-7.064l4.277-6.286l25.47-32.405l15.36-20.092l9.917-11.6l-.065-1.686h-.583L44.07 198.125l-12.055 1.555l-5.185-4.86l.648-7.972l2.463-2.593l20.35-13.999z" />
      </svg>
    ),
  },
  {
    label: "Gemini",
    href: "https://gemini.google.com/app?prompt=Tell%20me%20about%20MagicalCX",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-8 sm:size-9">
        <path fill="currentColor" d="M24 12.024c-6.437.388-11.59 5.539-11.977 11.976h-.047C11.588 17.563 6.436 12.412 0 12.024v-.047C6.437 11.588 11.588 6.437 11.976 0h.047c.388 6.437 5.54 11.588 11.977 11.977z" />
      </svg>
    ),
  },
  {
    label: "Perplexity",
    href: "https://www.perplexity.ai/?q=Tell%20me%20about%20MagicalCX",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-8 sm:size-9">
        <path fill="currentColor" d="m5.735 2l5.695 5.247V2.012h1.109v5.259L18.259 2v5.983h2.349v8.629h-2.342v5.327l-5.727-5.032v5.09h-1.11V16.99L5.742 22v-5.388H3.393v-8.63h2.342zm4.86 7.078H4.5v6.439h1.24v-2.031zM6.85 13.972v5.585l4.58-4.034V9.81zm5.72 1.497l4.588 4.03v-2.887h-.006v-2.646l-4.582-4.16zm5.696.048H19.5v-6.44h-6.047l4.814 4.363zm-1.115-7.534V4.519l-3.76 3.464zm-6.548 0l-3.76-3.464v3.464z" />
      </svg>
    ),
  },
];

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
              <span className="text-xl font-medium text-foreground">MagicalCX</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Greater sales, through better customer service
            </p>
            <div className="mt-auto pt-4">
              <address className="text-sm text-muted-foreground not-italic leading-relaxed">
                8 The Green STE D
                <br />
                Dover, County of Kent, Delaware 19901
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

      {/* AI Summary row */}
      <div className="section-content-padding py-10 sm:py-12 flex flex-col items-center gap-5 text-center border-b border-border">
        <div className="flex items-center justify-center gap-6 sm:gap-8 text-foreground">
          {aiSummaryLinks.map((tool) => (
            <a
              key={tool.label}
              aria-label={tool.label}
              target="_blank"
              rel="noopener noreferrer"
              href={tool.href}
              className="flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
            >
              {tool.icon}
            </a>
          ))}
        </div>
        <p className="text-lg sm:text-2xl text-foreground font-playfair tracking-wider italic">
          Request an AI summary of MagicalCX
        </p>
      </div>

      {/* Bottom bar */}
      <div className="section-content-padding py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 relative z-10">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          &copy; 2026 MagicalCX. All rights reserved.
        </p>
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-muted-foreground hover:text-foreground transition-colors"
            href="https://x.com/MagicalCX_"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground transition-colors"
            href="https://www.linkedin.com/company/magicalcx"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground hover:text-foreground transition-colors"
            href="https://www.instagram.com/themagicalcx/"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
    </div>
  );
}
