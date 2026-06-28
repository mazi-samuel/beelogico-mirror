import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layers, ShieldCheck, Zap, Server, Sliders, Smartphone, Orbit, CalendarRange, Clock } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { HexBackground } from "@/components/HexBackground";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Stealth Product Lab & Roadmap — JTL" },
      { name: "description", content: "Explore Juruanya Technologies Limited's active SaaS and mobile product pipeline and our development roadmap." },
      { property: "og:title", content: "Stealth Product Lab & Roadmap — JTL" },
      { property: "og:description", content: "SaaS tools, geofenced mobile trackers, and messaging infrastructure in active development." },
    ],
  }),
  component: ProductsPage,
});

const PIPELINE = [
  {
    icon: Layers,
    title: "SaaS Productivity Suite",
    desc: "A cloud-based SaaS platform focused on business automation. Integrates daily workforce logs, task distribution, and operations approval flows in a single multi-tenant workspace.",
    status: "In Development",
    tech: "React · Node.js · PostgreSQL",
  },
  {
    icon: Smartphone,
    title: "Geofenced Mobile Operations",
    desc: "A native and cross-platform mobile tracker for field teams. Implements geofenced check-ins, automated time-frame triggers, and direct manager notifications with zero time-tampering.",
    status: "Private Beta",
    tech: "Flutter · Geofencing API",
  },
  {
    icon: Server,
    title: "High-Throughput Messaging API",
    desc: "Messaging gateway infrastructure enabling companies to trigger bulk SMS alerts, push notifications, and security OTP authentication codes via clean, developers-friendly REST APIs.",
    status: "Internal Testing",
    tech: "Go · Redis · SMPP",
  },
];

const MILESTONES = [
  { date: "June 9, 2026", title: "Incorporation", desc: "Juruanya Technologies Limited officially registered with CAC, RC: 9600871." },
  { date: "Q3 2026", title: "Product Prototyping", desc: "Developing stealth SaaS dashboards and geofenced mobile beta architectures." },
  { date: "Q4 2026", title: "Early Investor Pitching", desc: "Presenting active software suites and hardware blueprints to early-stage investors." },
  { date: "Q1 2027", title: "Developer Beta Launch", desc: "Opening beta testing for our messaging APIs and geofenced operations tracker." },
];

function ProductsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-soft py-20">
        <HexBackground />
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Stealth Lab & Roadmap</p>
          <h1 className="mt-3 text-5xl sm:text-6xl font-bold text-gradient">Product Pipeline</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We are actively developing proprietary software suites, cloud solutions, and technology hardware. 
            Below is a preview of the projects currently in JTL's development pipeline.
          </p>
        </div>
      </section>

      {/* PIPELINE CARDS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle>Stealth Projects</SectionTitle>
          <div className="grid md:grid-cols-3 gap-6">
            {PIPELINE.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl bg-soft border border-border/60 p-7 hover:border-secondary/40 hover:shadow-xl transition-all"
              >
                <div className="flex justify-between items-start">
                  <div className="h-12 w-12 grid place-items-center hex-pointy bg-secondary/10 text-secondary">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/10">
                    {p.status}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-primary">{p.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-muted-foreground">Tech Stack:</span>
                  <span className="text-[10px] font-mono font-bold text-foreground">{p.tech}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP TIMELINE */}
      <section className="py-20 bg-soft relative">
        <HexBackground />
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle>Our Roadmap</SectionTitle>
          <div className="relative border-l-2 border-primary/20 max-w-3xl mx-auto pl-8 space-y-12 py-4">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Node indicator */}
                <div className="absolute -left-[41px] top-1.5 h-6 w-6 rounded-full bg-white border-4 border-primary flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-secondary" />
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-secondary uppercase tracking-wider flex items-center gap-1.5">
                    <CalendarRange className="h-3.5 w-3.5" />
                    {m.date}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-primary">{m.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGIC CAPABILITIES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle>Platform Ecosystem</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Orbit, t: "Connected APIs", d: "Unified triggers for multi-channel developer access." },
              { icon: Sliders, t: "Modular Layouts", d: "Easily configured dashboards for customizable operations." },
              { icon: ShieldCheck, t: "Zero-Trust Auditing", d: "Cryptographic validation for logs and transactions." },
              { icon: Zap, t: "Optimized Performance", d: "High concurrency handlers for instant message queues." },
            ].map((tech) => (
              <div key={tech.t} className="p-6 rounded-2xl bg-soft border border-border/60 hover:border-secondary/40 transition">
                <tech.icon className="h-8 w-8 text-secondary" />
                <h3 className="mt-3 font-bold text-primary">{tech.t}</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{tech.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--ink)] text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Request a Strategic Briefing</h2>
          <p className="mt-4 text-white/70">
            For investor inquiries or prospective platform partnerships, contact us for access to our technical whitepapers and private beta demos.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-7 py-3.5 rounded-md bg-secondary text-white font-semibold hover:bg-orange-600 transition">Request Details</Link>
            <Link to="/contact" className="px-7 py-3.5 rounded-md border-2 border-secondary text-secondary font-semibold hover:bg-secondary hover:text-white transition">Contact Leadership</Link>
          </div>
        </div>
      </section>
    </>
  );
}