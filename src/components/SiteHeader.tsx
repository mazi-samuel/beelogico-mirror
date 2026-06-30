import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { JTLLogo } from "./JTLLogo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About" },
  { to: "/jobs", label: "Jobs" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-3 sm:pt-5">
        <div
          className={`mx-auto max-w-6xl nav-pill transition-all duration-300 ${
            scrolled
              ? "bg-white/90 backdrop-blur shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] dark:bg-black/90"
              : "bg-white/70 backdrop-blur shadow-[0_4px_20px_-12px_rgba(0,0,0,0.1)] dark:bg-black/70"
          }`}
        >
          <div className="flex items-center justify-between px-6 sm:px-10 py-3">
            <Link to="/" className="flex items-center gap-2 group">
              <JTLLogo className="h-16 md:h-20 py-0" />
            </Link>

            <nav className="hidden lg:flex items-center gap-7">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="relative text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                  activeProps={{ className: "text-foreground font-semibold" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden p-2 -mr-2 text-foreground relative z-50"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="aspect-square w-[90vw] max-w-[390px] rounded-full bg-white dark:bg-slate-900 shadow-2xl relative flex flex-col justify-center items-center p-8 border border-[#0d2d6b]/15 dark:border-[#00d4ff]/20 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Radial Glow Design in Background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.78_0.18_214)_0%,transparent_65%)] opacity-[0.05] dark:opacity-[0.08] pointer-events-none" />
              <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-[oklch(0.63_0.20_42)]/5 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-[oklch(0.78_0.18_214)]/5 blur-3xl pointer-events-none" />
              
              {/* Logo */}
              <JTLLogo className="h-10 mb-4" showText={true} />
              
              {/* Divider */}
              <div className="w-12 h-0.5 bg-gradient-to-r from-secondary to-accent rounded-full mb-5" />

              {/* Diamond Link Grid */}
              <div className="grid grid-cols-2 gap-x-3 gap-y-3 w-full px-2 max-w-[320px] justify-items-center items-center">
                {/* Home - spans 2 columns, centered */}
                <div className="col-span-2 w-full flex justify-center">
                  <Link
                    to="/"
                    className="w-2/3 text-center py-2 px-3 text-xs sm:text-sm font-medium rounded-full bg-slate-50 dark:bg-slate-800/30 text-foreground/80 border border-border/40 hover:bg-primary/10 hover:text-primary dark:hover:bg-accent/10 dark:hover:text-accent hover:border-primary/20 dark:hover:border-accent/20 transition-all duration-300"
                    activeProps={{ className: "bg-primary text-white hover:bg-primary hover:text-white dark:bg-accent dark:text-ink dark:hover:bg-accent dark:hover:text-ink font-semibold shadow-md" }}
                    activeOptions={{ exact: true }}
                  >
                    Home
                  </Link>
                </div>
                
                {/* Services & Products */}
                <Link
                  to="/services"
                  className="w-full text-center py-2 px-3 text-xs sm:text-sm font-medium rounded-full bg-slate-50 dark:bg-slate-800/30 text-foreground/80 border border-border/40 hover:bg-primary/10 hover:text-primary dark:hover:bg-accent/10 dark:hover:text-accent hover:border-primary/20 dark:hover:border-accent/20 transition-all duration-300"
                  activeProps={{ className: "bg-primary text-white hover:bg-primary hover:text-white dark:bg-accent dark:text-ink dark:hover:bg-accent dark:hover:text-ink font-semibold shadow-md" }}
                >
                  Services
                </Link>
                <Link
                  to="/products"
                  className="w-full text-center py-2 px-3 text-xs sm:text-sm font-medium rounded-full bg-slate-50 dark:bg-slate-800/30 text-foreground/80 border border-border/40 hover:bg-primary/10 hover:text-primary dark:hover:bg-accent/10 dark:hover:text-accent hover:border-primary/20 dark:hover:border-accent/20 transition-all duration-300"
                  activeProps={{ className: "bg-primary text-white hover:bg-primary hover:text-white dark:bg-accent dark:text-ink dark:hover:bg-accent dark:hover:text-ink font-semibold shadow-md" }}
                >
                  Products
                </Link>
                
                {/* Case Studies & About */}
                <Link
                  to="/case-studies"
                  className="w-full text-center py-2 px-3 text-xs sm:text-sm font-medium rounded-full bg-slate-50 dark:bg-slate-800/30 text-foreground/80 border border-border/40 hover:bg-primary/10 hover:text-primary dark:hover:bg-accent/10 dark:hover:text-accent hover:border-primary/20 dark:hover:border-accent/20 transition-all duration-300"
                  activeProps={{ className: "bg-primary text-white hover:bg-primary hover:text-white dark:bg-accent dark:text-ink dark:hover:bg-accent dark:hover:text-ink font-semibold shadow-md" }}
                >
                  Case Studies
                </Link>
                <Link
                  to="/about"
                  className="w-full text-center py-2 px-3 text-xs sm:text-sm font-medium rounded-full bg-slate-50 dark:bg-slate-800/30 text-foreground/80 border border-border/40 hover:bg-primary/10 hover:text-primary dark:hover:bg-accent/10 dark:hover:text-accent hover:border-primary/20 dark:hover:border-accent/20 transition-all duration-300"
                  activeProps={{ className: "bg-primary text-white hover:bg-primary hover:text-white dark:bg-accent dark:text-ink dark:hover:bg-accent dark:hover:text-ink font-semibold shadow-md" }}
                >
                  About
                </Link>
                
                {/* Jobs & Contact Us */}
                <Link
                  to="/jobs"
                  className="w-full text-center py-2 px-3 text-xs sm:text-sm font-medium rounded-full bg-slate-50 dark:bg-slate-800/30 text-foreground/80 border border-border/40 hover:bg-primary/10 hover:text-primary dark:hover:bg-accent/10 dark:hover:text-accent hover:border-primary/20 dark:hover:border-accent/20 transition-all duration-300"
                  activeProps={{ className: "bg-primary text-white hover:bg-primary hover:text-white dark:bg-accent dark:text-ink dark:hover:bg-accent dark:hover:text-ink font-semibold shadow-md" }}
                >
                  Jobs
                </Link>
                <Link
                  to="/contact"
                  className="w-full text-center py-2 px-3 text-xs sm:text-sm font-medium rounded-full bg-slate-50 dark:bg-slate-800/30 text-foreground/80 border border-border/40 hover:bg-primary/10 hover:text-primary dark:hover:bg-accent/10 dark:hover:text-accent hover:border-primary/20 dark:hover:border-accent/20 transition-all duration-300"
                  activeProps={{ className: "bg-primary text-white hover:bg-primary hover:text-white dark:bg-accent dark:text-ink dark:hover:bg-accent dark:hover:text-ink font-semibold shadow-md" }}
                >
                  Contact Us
                </Link>
              </div>

              {/* Social Media Links */}
              <div className="flex gap-4 mt-6 items-center justify-center">
                <a
                  href="https://www.facebook.com/share/1JH8YqWsLn/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-full bg-slate-50 dark:bg-slate-800/30 hover:bg-secondary hover:text-white border border-border/40 hover:border-secondary transition-all text-foreground/75 shadow-sm"
                  title="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/juruanyatech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-full bg-slate-50 dark:bg-slate-800/30 hover:bg-secondary hover:text-white border border-border/40 hover:border-secondary transition-all text-foreground/75 shadow-sm"
                  title="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}