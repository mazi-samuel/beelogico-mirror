import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Truck, Building2, ShoppingCart, GraduationCap, ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { HexBackground } from "@/components/HexBackground";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — BeeLogic" },
      { name: "description", content: "Selected projects from BeeLogic — fleet, procurement, retail, and education software solutions." },
      { property: "og:title", content: "Case Studies — BeeLogic" },
      { property: "og:description", content: "Real software outcomes for real businesses." },
    ],
  }),
  component: CaseStudiesPage,
});

const STUDIES = [
  {
    icon: Truck,
    title: "Vehicle Management System",
    sector: "Logistics",
    summary: "The Vehicle Management System by BeeLogic was developed to help businesses gain full control over their vehicle fleets — tracking maintenance, fuel, drivers, and trips in one unified platform.",
    results: ["30% reduction in idle time", "Centralized maintenance schedules", "Real-time driver assignment"],
  },
  {
    icon: Building2,
    title: "Construction Supplier Management Software",
    sector: "Construction",
    summary: "Designed to streamline the procurement process by centralizing supplier data, comparing quotes, and tracking purchase orders end-to-end.",
    results: ["Faster procurement cycles", "Single source of truth for suppliers", "Audit-ready reporting"],
  },
  {
    icon: ShoppingCart,
    title: "Retail Loyalty Platform",
    sector: "Retail",
    summary: "A points-and-rewards platform unifying online and in-store transactions for a multi-brand retail group, with real-time analytics for marketers.",
    results: ["+22% repeat purchases", "Unified customer profile", "Self-serve campaign tools"],
  },
  {
    icon: GraduationCap,
    title: "Campus Operations Suite",
    sector: "Education",
    summary: "A modular platform handling admissions, attendance, grading, and parent communication for a network of K-12 schools.",
    results: ["Less paperwork, faster admissions", "Live attendance for parents", "Custom report cards"],
  },
];

function CaseStudiesPage() {
  return (
    <>
      <section className="relative bg-soft py-20">
        <HexBackground />
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Our <span className="text-gradient">Case Studies</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A glimpse of how we partner with clients to ship software that actually moves the needle.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle>Selected Work</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {STUDIES.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl bg-card border border-border/60 p-7 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 grid place-items-center hex-pointy bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">{s.sector}</p>
                    <h3 className="text-xl font-bold">{s.title}</h3>
                  </div>
                </div>
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{s.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.results.map((r) => (
                    <span key={r} className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">{r}</span>
                  ))}
                </div>
                <button className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Read more <ArrowRight className="h-4 w-4" />
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--ink)] text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Have a project in mind?</h2>
          <p className="mt-4 text-white/70">We'd love to hear about it.</p>
          <Link to="/contact" className="mt-8 inline-flex px-7 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-[var(--primary-deep)] transition">Start a conversation</Link>
        </div>
      </section>
    </>
  );
}