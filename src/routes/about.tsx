import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Eye, Target, HardHat, Factory, Newspaper, Truck, Briefcase, ShoppingBag } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { HexBackground } from "@/components/HexBackground";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — BeeLogic" },
      { name: "description", content: "Smart Solutions. Real Results. We are your co-creator in smart, lean and scalable software for businesses of all sizes." },
      { property: "og:title", content: "About — BeeLogic" },
      { property: "og:description", content: "Smart Solutions. Real Results." },
    ],
  }),
  component: AboutPage,
});

const INDUSTRIES = [
  { icon: HardHat, name: "Construction" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Newspaper, name: "Media & Publishing" },
  { icon: Truck, name: "Logistics & Transportation" },
  { icon: Briefcase, name: "Professional Services" },
  { icon: ShoppingBag, name: "Retail & Marketing" },
];

const EDGE = [
  "Tailor-made solutions for real business needs",
  "Agile and experienced development team",
  "Data-driven systems for better decision-making",
  "Strong client partnerships, secure and scalable infrastructure",
];

function AboutPage() {
  return (
    <>
      <section className="relative bg-soft py-20">
        <HexBackground />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            About <span className="text-gradient">BeeLogic</span>
          </h1>
          <p className="mt-6 text-2xl font-display font-semibold text-gradient">Smart Solutions. Real Results.</p>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We are your co-creator in all manner of smart, lean, and scalable solutions for businesses of all sizes.
            We specialize in offshore software and hardware development services at really cost-efficient prices,
            adapted to every particular business need.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-6">
          {[
            { icon: Eye, title: "Our Vision", body: "To be the global partner of choice for digital transformation through smart software, agile thinking, and lasting partnerships." },
            { icon: Target, title: "Our Mission", body: "To create smart, simple, and reliable technology that drives business success in the fast-changing digital world." },
          ].map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-8 bg-soft border border-border/60 hover:border-primary/40 transition"
            >
              <div className="h-14 w-14 grid place-items-center hex-pointy bg-primary text-white">
                <b.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-primary">{b.title}</h3>
              <p className="mt-3 text-foreground/80 leading-relaxed">{b.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-soft">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle>Our Edge</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {EDGE.map((e, i) => (
              <motion.div
                key={e}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative bg-card rounded-2xl p-6 border border-border/60 hover:border-primary/40 transition group"
              >
                <div className="text-6xl font-display font-extrabold text-primary/20 group-hover:text-primary/50 transition">{i + 1}</div>
                <p className="mt-3 text-sm font-medium text-foreground/85">{e}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle>Industries Empowered by BeeLogic</SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex flex-col items-center gap-3 p-5 rounded-xl bg-soft border border-border/60 hover:border-primary/40 hover:-translate-y-1 transition"
              >
                <div className="h-12 w-12 grid place-items-center hex-pointy bg-primary/10 text-primary">
                  <ind.icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-foreground/85 text-center">{ind.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--ink)] text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Want to work with us?</h2>
          <Link to="/contact" className="mt-8 inline-flex px-7 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-[var(--primary-deep)] transition">Get in touch</Link>
        </div>
      </section>
    </>
  );
}