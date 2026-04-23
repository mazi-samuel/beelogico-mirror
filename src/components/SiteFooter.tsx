import { Link } from "@tanstack/react-router";
import { Mail, Phone, Clock, Facebook, Linkedin, Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 bg-[oklch(0.18_0.04_230)] text-white/80">
      <div className="absolute inset-x-0 -top-px h-24 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-10 w-10 items-center justify-center">
              <span className="absolute inset-0 hex-pointy bg-primary/25" />
              <span className="absolute inset-[18%] hex-pointy bg-primary" />
              <span className="absolute inset-[34%] hex-pointy bg-[oklch(0.18_0.04_230)]" />
            </span>
            <span className="font-display text-2xl font-semibold tracking-tight text-white">
              <span className="text-primary">Bee</span>Logic
            </span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65">
            Custom software that fits your business. We design and develop intuitive,
            scalable web and mobile applications that simplify operations and drive growth.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:bg-primary hover:border-primary transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
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
                <Link to={to} className="hover:text-primary transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Get in touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +202 27516364</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> info@proserv-eg.com</li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Sun – Thu, 8am – 5pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-white/55 flex flex-col sm:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} BeeLogic. All rights reserved.</span>
          <span>Crafted with care in Cairo · Egypt</span>
        </div>
      </div>
    </footer>
  );
}