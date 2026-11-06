import { Link } from "@tanstack/react-router";
import { Mail, Phone, Clock, Facebook, Linkedin, Instagram, MapPin } from "lucide-react";
import { JTLLogo } from "./JTLLogo";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 bg-[oklch(0.18_0.04_254)] text-white/80">
      <div className="absolute inset-x-0 -top-px h-24 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 text-center md:grid-cols-4 md:text-left">
        <div className="md:col-span-2">
          <JTLLogo useImage={true} className="mx-auto h-16 brightness-0 invert md:mx-0" />
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/65 md:mx-0">
            Juruanya Technologies Limited (JTL) is a Lagos-based technology startup building
            innovative software solutions, digital platforms, SaaS products, AI/ML, and technology
            hardware products that astonish.
          </p>
          <div className="mt-6 flex justify-center gap-3 md:justify-start">
            <a
              href="https://www.facebook.com/share/1JH8YqWsLn/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:bg-secondary hover:border-secondary transition text-white/80 hover:text-white"
              title="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/j%E1%BB%A5%CC%80r%E1%BB%A5%CC%80-%C3%A1ny%C3%A1-technologies-limited/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:bg-secondary hover:border-secondary transition text-white/80 hover:text-white"
              title="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/juruanyatech"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:bg-secondary hover:border-secondary transition text-white/80 hover:text-white"
              title="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://vt.tiktok.com/ZSXPaJyKo/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:bg-secondary hover:border-secondary transition text-white/80 hover:text-white"
              title="TikTok"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M19 8.78c-1.58.1-2.92-.85-3.32-2.28V14.5c0 2.48-2.02 4.5-4.5 4.5s-4.5-2.02-4.5-4.5 2.02-4.5 4.5-4.5c.34 0 .67.03 1 .1v2.52c-.32-.06-.65-.1-.99-.1-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5V3h3.5c.1 1.58 1.1 2.5 2.5 2.5V8.78z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["/services", "Services"],
              ["/products", "Products"],
              ["/case-studies", "Case Studies"],
              ["/about", "About"],
              ["/jobs", "Jobs"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-secondary transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Get in touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center justify-center gap-2 md:justify-start">
              <Phone className="h-4 w-4 text-secondary" /> +234 904 569 2072
            </li>
            <li className="flex items-center justify-center gap-2 md:justify-start">
              <Mail className="h-4 w-4 text-secondary" />
              <a
                href="mailto:info@juruanyatechnologies.com"
                className="hover:text-secondary transition-colors"
              >
                info@juruanyatechnologies.com
              </a>
            </li>
            <li className="flex items-center justify-center gap-2 md:justify-start">
              <Clock className="h-4 w-4 text-secondary" /> Mon – Fri, 8am – 5pm
            </li>
            <li className="flex items-start justify-center gap-2 md:justify-start">
              <MapPin className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
              <div className="space-y-2 text-center md:text-left">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=90%20Akanro%20Street%2C%20Ilasamaja%2C%20Lagos%2C%20Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-secondary transition-colors"
                >
                  <span className="block font-semibold text-white/90">Ilasamaja Office</span>
                  90 Akanro Street, Ilasamaja, Lagos, Nigeria
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Industrial%20Training%20Fund%20%28ITF%29%20House%2C%20Plot%2012%2C%20Funsho%20Williams%20Avenue%2C%20Iponri%2C%20Surulere%20%2F%20Costain%2C%20Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-secondary transition-colors"
                >
                  <span className="block font-semibold text-white/90">Costain Hub</span>
                  Industrial Training Fund (ITF) House, Plot 12, Funsho Williams Avenue, Iponri,
                  Surulere / Costain, Lagos
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-5 text-center text-xs text-white/55 flex flex-col gap-2 sm:flex-row sm:justify-between sm:text-left">
          <span>
            © {new Date().getFullYear()} Juruanya Technologies Limited. All rights reserved. (RC:
            9600871 · TIN: 2622426624523)
          </span>
          <span className="sm:text-right">Crafted with care in Lagos · Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
