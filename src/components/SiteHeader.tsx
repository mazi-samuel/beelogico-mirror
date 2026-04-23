import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-3 sm:pt-5">
      <div
        className={`mx-auto max-w-6xl nav-pill transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)]"
            : "bg-white/70 backdrop-blur shadow-[0_4px_20px_-12px_rgba(0,0,0,0.1)]"
        }`}
      >
        <div className="flex items-center justify-between px-6 sm:px-10 py-3">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="relative flex h-9 w-9 items-center justify-center">
              <span className="absolute inset-0 hex-pointy bg-primary/15" />
              <span className="absolute inset-[18%] hex-pointy bg-primary" />
              <span className="absolute inset-[34%] hex-pointy bg-white" />
            </span>
            <span className="font-display text-xl font-semibold tracking-tight">
              <span className="text-primary">Bee</span>
              <span className="text-foreground">Logic</span>
            </span>
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
            className="lg:hidden p-2 -mr-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border/60 px-6 pb-4 pt-2 animate-fade-in">
            <div className="flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="py-2 text-sm font-medium text-foreground/80 hover:text-primary"
                  activeProps={{ className: "text-primary font-semibold" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}