import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HandHeart, Cpu, ListChecks, Sparkles, Star, ShieldCheck } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { HexBackground } from "@/components/HexBackground";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — BeeLogic" },
      { name: "description", content: "Web development, mobile apps, UI/UX design, and software testing — built for performance and scale." },
      { property: "og:title", content: "Services — BeeLogic" },
      { property: "og:description", content: "Web development, mobile apps, UI/UX design, and software testing — built for performance and scale." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    id: "web",
    n: "Service 1",
    title: "Web Development",
    tagline: "Web solutions that are quick, secure, and scalable.",
    body: "We create portals, dynamic websites, and backend systems using modern frameworks and clean architecture. From advanced platforms to corporate websites, our team formulates solid, easy-to-maintain, and scalable solutions tailored for your business.",
    cards: [
      { icon: HandHeart, title: "What We Offer", items: ["Custom Web Applications", "Backend & API Development", "CMS Integration", "E-commerce Solutions", "Admin Panels & Dashboards"] },
      { icon: Cpu, title: "Technologies We Use", body: "React, Angular, Node.js, Laravel, PHP, MySQL, PostgreSQL, MongoDB, and more." },
      { icon: ListChecks, title: "Why Choose Us", items: ["Scalable architecture", "Clean, maintainable code", "SEO-optimized development", "Agile workflows & transparent process"] },
    ],
  },
  {
    id: "mobile",
    n: "Service 2",
    title: "Mobile Application Development",
    tagline: "Your business in every pocket.",
    body: "We build high-performance native and cross-platform apps that deliver intuitive mobile experiences. Whether it's iOS, Android, or both, we develop apps that are responsive, feature-rich, and aligned with your business goals.",
    cards: [
      { icon: HandHeart, title: "What We Offer", items: ["Android & iOS Development", "Flutter & Cross-Platform Solutions", "UI/UX Optimized Interfaces", "Integration with Web Systems", "App Maintenance & Updates"] },
      { icon: Star, title: "Perfect For", body: "Startups, service-based apps, loyalty platforms, attendance systems, internal operations, and more." },
    ],
  },
  {
    id: "design",
    n: "Service 3",
    title: "Web Design & UI/UX",
    tagline: "Designs that drive engagement.",
    body: "Our creative team merges aesthetics with usability to create interfaces that feel right to use. We focus on clear navigation, responsive layouts, and brand-aligned visuals to deliver excellent digital experiences.",
    cards: [
      { icon: HandHeart, title: "What We Offer", items: ["Responsive Websites", "User Interface (UI) Design", "User Experience (UX) Design", "Branding & Visual Identity", "Prototype & Wireframing"] },
      { icon: Sparkles, title: "Our Approach", items: ["User-first design thinking", "Clean, responsive layouts", "Collaborative iterations", "Brand-aligned visuals"] },
    ],
  },
  {
    id: "testing",
    n: "Service 4",
    title: "Software Testing & QA",
    tagline: "Reliable software begins with rigorous testing.",
    body: "Through structured testing processes, we make sure your application behaves well across devices and platforms. Our QA team weeds out bugs, optimizes performance, and ensures stability before release.",
    cards: [
      { icon: HandHeart, title: "What We Offer", items: ["Manual & Automated Testing", "Functional Testing", "Performance & Load Testing", "Security Testing", "Cross-Device & Browser Testing", "Bug Reporting & Documentation"] },
      { icon: ShieldCheck, title: "Benefits", items: ["Reduced downtime & support costs", "Better product stability", "Seamless user experience", "Accelerated development cycles"] },
    ],
  },
] as const;

function ServicesPage() {
  return (
    <>
      <section className="relative bg-soft py-16">
        <HexBackground />
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From idea to launch, BeeLogic delivers across the full software lifecycle.
          </p>
        </div>
      </section>

      {SERVICES.map((s, idx) => (
        <section key={s.id} id={s.id} className={`py-20 ${idx % 2 ? "bg-white" : "bg-soft"} relative scroll-mt-32`}>
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <p className="text-primary font-semibold tracking-wider uppercase text-sm">{s.n}</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold">{s.title}</h2>
              <p className="mt-4 text-lg font-semibold text-foreground/85">{s.tagline}</p>
              <p className="mt-3 text-muted-foreground max-w-3xl mx-auto leading-relaxed">{s.body}</p>
            </motion.div>

            <div className={`grid gap-6 ${s.cards.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
              {s.cards.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative rounded-2xl p-7 border transition hover:-translate-y-1 ${
                    i === 1 ? "bg-primary text-primary-foreground border-primary shadow-xl" : "bg-card border-border/60 hover:border-primary/40 hover:shadow-lg"
                  }`}
                >
                  <div className={`h-12 w-12 grid place-items-center hex-pointy ${i === 1 ? "bg-white/15 text-white" : "bg-primary/10 text-primary"}`}>
                    <c.icon className="h-6 w-6" />
                  </div>
                  <h3 className={`mt-4 text-lg font-bold ${i === 1 ? "text-white" : ""}`}>{c.title}</h3>
                  {"items" in c && c.items ? (
                    <ul className="mt-3 space-y-2 text-sm">
                      {c.items.map((it) => (
                        <li key={it} className="flex items-start gap-2">
                          <span className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${i === 1 ? "bg-white" : "bg-primary"}`} />
                          <span className={i === 1 ? "text-white/90" : "text-foreground/80"}>{it}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className={`mt-3 text-sm leading-relaxed ${i === 1 ? "text-white/90" : "text-foreground/80"}`}>{c.body}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-[var(--ink)] text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to start your project?</h2>
          <p className="mt-4 text-white/70">Let's discuss how we can help you build it right.</p>
          <Link to="/contact" className="mt-8 inline-flex px-7 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-[var(--primary-deep)] transition">Contact Sales</Link>
        </div>
      </section>
    </>
  );
}