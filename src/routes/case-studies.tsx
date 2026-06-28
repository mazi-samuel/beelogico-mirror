import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Truck, Building2, ShoppingCart, GraduationCap, ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { HexBackground } from "@/components/HexBackground";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — JTL" },
      { name: "description", content: "Explore selected reference implementations and software solutions built by Juruanya Technologies Limited." },
      { property: "og:title", content: "Case Studies — JTL" },
      { property: "og:description", content: "Real engineering outcomes for growth operations." },
    ],
  }),
  component: CaseStudiesPage,
});

const STUDIES = [
  {
    icon: Truck,
    title: "Vehicle & Operations Management System",
    sector: "Logistics",
    summary: "Built to help transport companies gain control over vehicle fleets. Tracks maintenance triggers, fuel budgets, geofenced driver check-ins, and automated trip reports in one dashboard.",
    results: ["30% reduction in vehicle idle time", "Centralized maintenance schedules", "Real-time geofenced check-ins"],
  },
  {
    icon: Building2,
    title: "Construction Procurement Software",
    sector: "Construction",
    summary: "Designed to streamline physical supply chains by centralizing supplier quotes, purchase order triggers, and providing audit-ready operational history.",
    results: ["Shorter procurement verification cycles", "Single source of truth for materials", "Full digital audit trail"],
  },
  {
    icon: ShoppingCart,
    title: "Omnichannel Loyalty Platform",
    sector: "Retail & SMEs",
    summary: "A unified system linking in-store and online customer checkouts for a retail network, delivering real-time analytics to marketing teams.",
    results: ["+22% repeat purchase rate", "Unified customer account profiles", "Instant SMS/Push marketing hooks"],
  },
  {
    icon: GraduationCap,
    title: "Network School Portal",
    sector: "Education",
    summary: "A modular portal handling administrative admissions, automated attendance, academic progress trackers, and direct notification streams for parents.",
    results: ["90% reduction in paper forms", "Instant attendance notifications", "Automated student dashboards"],
  },
];

function CaseStudiesPage() {
  return (
    <>
      <section className="relative bg-soft py-20">
        <HexBackground />
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Reference <span className="text-gradient">Implementations</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A glimpse of how we design custom architectures that solve real operational bottlenecks.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle>Selected Projects</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {STUDIES.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl bg-card border border-border/60 p-7 hover:border-secondary/40 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 grid place-items-center hex-pointy bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-secondary">{s.sector}</p>
                    <h3 className="text-xl font-bold text-primary">{s.title}</h3>
                  </div>
                </div>
                <p className="mt-5 text-xs text-muted-foreground leading-relaxed">{s.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.results.map((r) => (
                    <span key={r} className="text-[10px] font-mono font-medium px-3 py-1 rounded-full bg-secondary/10 text-secondary">{r}</span>
                  ))}
                </div>
                <button className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-secondary group-hover:gap-2 transition-all">
                  Read briefing <ArrowRight className="h-4 w-4" />
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--ink)] text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Have a project in mind?</h2>
          <p className="mt-4 text-white/70">Let's build a customized solution for your operations.</p>
          <Link to="/contact" className="mt-8 inline-flex px-7 py-3.5 rounded-md bg-secondary text-white font-semibold hover:bg-orange-600 transition">Start a conversation</Link>
        </div>
      </section>
    </>
  );
}