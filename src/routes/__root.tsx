import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect } from "react";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-32 pb-20 bg-soft flex items-center justify-center px-6">
        <div className="max-w-lg text-center">
          <div className="flex justify-center gap-3 text-9xl font-display font-bold">
            <span className="text-primary">4</span>
            <span className="text-foreground">0</span>
            <span className="text-primary">4</span>
          </div>
          <h1 className="mt-6 text-3xl font-bold">Oops! Page Not Found</h1>
          <p className="mt-3 text-muted-foreground">
            The page you're looking for seems to have flown away like a busy bee!
          </p>
          <div className="mt-8 flex gap-3 justify-center">
            <Link to="/" className="px-6 py-3 rounded-md bg-[var(--ink)] text-white font-semibold hover:bg-primary transition-colors">Go Home</Link>
            <Link to="/contact" className="px-6 py-3 rounded-md border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors">Contact Us</Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jụ̀rụ̀ ányá Technologies Limited — JTL" },
      { name: "description", content: "Lagos-based technology company building software, platforms & digital products that astonish. Innovate | Astonish | Transform" },
      { name: "author", content: "JTL" },
      { property: "og:title", content: "Jụ̀rụ̀ ányá Technologies Limited — JTL" },
      { property: "og:description", content: "Lagos-based technology company building software, platforms & digital products that astonish." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Prevent context menu (right click)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Prevent inspection hotkeys (F12, Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+Shift+J, Ctrl+U, Ctrl+S)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "C" || e.key === "J")) ||
        (e.ctrlKey && e.key === "u") ||
        (e.ctrlKey && e.key === "s")
      ) {
        e.preventDefault();
      }
    };

    // Prevent dragging images (helps protect logo and graphics assets)
    const handleDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === "IMG") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return (
    <div className="select-none">
      <SiteHeader />
      <main className="pt-24 select-text"> {/* Allow select-text for normal copy-pastable main sections if desired, or override select-none inside routes */}
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
