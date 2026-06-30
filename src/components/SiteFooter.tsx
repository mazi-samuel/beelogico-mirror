import { Link } from "@tanstack/react-router";
import { Mail, Phone, Clock, Facebook, Linkedin, Instagram, MapPin } from "lucide-react";
import { JTLLogo } from "./JTLLogo";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 bg-[oklch(0.18_0.04_254)] text-white/80">
      <div className="absolute inset-x-0 -top-px h-24 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <JTLLogo className="h-20 brightness-0 invert" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65">
            Juruanya Technologies Limited (JTL) is a Lagos-based technology startup building 
            innovative software solutions, digital platforms, SaaS products, AI/ML, and technology 
            hardware products that astonish.
          </p>
          <div className="mt-6 flex gap-3">
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
              href="#"
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
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-secondary" /> +234 904 569 2072</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-secondary" /> info@juruanyatechnologies.com</li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-secondary" /> Mon – Fri, 8am – 5pm</li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
              <span>90 Akanro Street, Ilasamaja, Lagos, Nigeria</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-white/55 flex flex-col sm:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} Juruanya Technologies Limited. All rights reserved. (RC: 9600871 · TIN: 2622426624523)</span>
          <span>Crafted with care in Lagos · Nigeria</span>
        </div>
      </div>
    </footer>
  );
}