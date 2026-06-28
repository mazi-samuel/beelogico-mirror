import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Code2, Smartphone, Cpu, MessageSquare, Palette, GraduationCap, ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { HexBackground } from "@/components/HexBackground";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Capabilities & Services — JTL" },
      { name: "description", content: "Explore the 14 core technology capabilities of Juruanya Technologies Limited, from software and SaaS to AI solutions and hardware engineering." },
      { property: "og:title", content: "Capabilities & Services — JTL" },
      { property: "og:description", content: "World-class engineering capabilities from Lagos, Nigeria." },
    ],
  }),
  component: ServicesPage,
});

type ServiceCard = { icon: any; title: string; items?: string[]; body?: string };
type Service = { id: string; n: string; title: string; tagline: string; body: string; cards: ServiceCard[] };

const SERVICES: Service[] = [
  {
    id: "web",
    n: "Pillar 1",
    title: "Software & Platform Engineering",
    tagline: "High-performance code built for scale, reliability, and security.",
    body: "We design, develop, and deploy scalable applications across web and mobile ecosystems. From custom business dashboards to complex multi-tenant cloud architectures, we deliver products that accelerate operations.",
    cards: [
      { icon: Code2, title: "Custom Web & SaaS Systems", items: ["Enterprise SaaS Platforms", "Scalable REST & GraphQL APIs", "Custom Dashboards & Database Systems", "Secure Cloud Deployments"] },
      { icon: Smartphone, title: "Mobile & VAS Platforms", items: ["Native iOS & Android Apps", "Flutter Cross-Platform Code", "Value Added Services (VAS) Infrastructure", "Digital Platforms & Marketplaces"] },
    ],
  },
  {
    id: "ai",
    n: "Pillar 2",
    title: "Artificial Intelligence & Data Science",
    tagline: "Transforming operations through intelligent automation and analytics.",
    body: "We integrate custom machine learning models and data pipelines into products, helping businesses turn messy data into smart recommendations, automated tasks, and predictive intelligence.",
    cards: [
      { icon: Cpu, title: "AI & Machine Learning", items: ["Intelligent Automation Engines", "Predictive Analytics Models", "Smart Recommendation Systems", "Natural Language Processing"] },
      { icon: Code2, title: "Data Science & Audits", items: ["Custom Data Pipelines", "Operational Metrics Tracking", "Business Intelligence Analytics", "Database Query Optimization"] },
    ],
  },
  {
    id: "hardware",
    n: "Pillar 3",
    title: "Hardware & Electronic Devices",
    tagline: "Bridging the gap between software logic and physical hardware.",
    body: "We research, design, and prototype physical technology hardware and electronic devices. We handle the full product cycle from concept and PCB layout to physical prototyping and assembly coordinates.",
    cards: [
      { icon: Cpu, title: "Hardware Prototyping", items: ["Electronic Device Design", "Sensors & Controller Integration", "Physical Product Assembly Plans", "IoT Device Orchestration"] },
      { icon: Code2, title: "Intellectual Property", items: ["Hardware Firmware Development", "Device Patent Consulting", "Licensing & Commercialization Support", "Physical Product Logistics Setup"] },
    ],
  },
  {
    id: "messaging",
    n: "Pillar 4",
    title: "Messaging & Messaging Infrastructure",
    tagline: "Enabling high-throughput communication channels at scale.",
    body: "We build and operate custom bulk messaging portals, email triggers, and push notifications pipelines. Ideal for customer notifications, transactional messaging, and security OTP channels.",
    cards: [
      { icon: MessageSquare, title: "Core Channels", items: ["Bulk SMS Services", "Push Notifications Engines", "Email Marketing Workflows", "Transactional Alert Triggers"] },
    ],
  },
  {
    id: "design",
    n: "Pillar 5",
    title: "UI/UX Design & Branding",
    tagline: "Stunning designs backed by robust user research and systems.",
    body: "Our design approach combines high-end visual aesthetics with absolute functionality. We create design tokens, wireframes, and branding guidelines that keep user journeys fast, frictionless, and memorable.",
    cards: [
      { icon: Palette, title: "Design Systems", items: ["User Interface (UI) Design", "User Experience (UX) Engineering", "Interactive Web Mockups", "Brand Visual Guidelines", "Typography & Color Systems"] },
    ],
  },
  {
    id: "consulting",
    n: "Pillar 6",
    title: "Strategy, E-Commerce & Training",
    tagline: "Consulting and digital systems designed to solve real business goals.",
    body: "We provide expert technology consulting to align code base choices with target growth, integrate robust online shopping and payment setups, and host professional coding bootcamps/training to build tech capacity.",
    cards: [
      { icon: GraduationCap, title: "Consulting & Training", items: ["Technology Architecture Audits", "Coding Workshops & Bootcamps", "E-Commerce System Setup", "Digital Visibility & SEO Audits"] },
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="relative bg-soft py-16">
        <HexBackground />
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Our Core <span className="text-gradient">Capabilities</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From SaaS development and AI systems to custom hardware prototyping, JTL designs solutions that astonish.
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
              <p className="text-secondary font-mono text-xs uppercase tracking-wider font-semibold">{s.n}</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-primary">{s.title}</h2>
              <p className="mt-4 text-base font-semibold text-foreground/85">{s.tagline}</p>
              <p className="mt-3 text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">{s.body}</p>
            </motion.div>

            <div className={`grid gap-6 ${s.cards.length === 1 ? "max-w-xl mx-auto" : "lg:grid-cols-2"}`}>
              {s.cards.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative rounded-2xl p-7 border transition hover:-translate-y-1 ${
                    i === 0 && s.cards.length > 1
                      ? "bg-primary text-white border-primary shadow-xl"
                      : "bg-card border-border/60 hover:border-secondary/40 hover:shadow-lg"
                  }`}
                >
                  <div className={`h-12 w-12 grid place-items-center hex-pointy ${i === 0 && s.cards.length > 1 ? "bg-white/15 text-white" : "bg-secondary/10 text-secondary"}`}>
                    <c.icon className="h-6 w-6" />
                  </div>
                  <h3 className={`mt-4 text-lg font-bold ${i === 0 && s.cards.length > 1 ? "text-white" : "text-primary"}`}>{c.title}</h3>
                  {"items" in c && c.items ? (
                    <ul className="mt-3 space-y-2 text-sm">
                      {c.items.map((it) => (
                        <li key={it} className="flex items-start gap-2">
                          <span className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${i === 0 && s.cards.length > 1 ? "bg-secondary" : "bg-primary"}`} />
                          <span className={i === 0 && s.cards.length > 1 ? "text-white/90" : "text-foreground/80"}>{it}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className={`mt-3 text-sm leading-relaxed ${i === 0 && s.cards.length > 1 ? "text-white/90" : "text-foreground/80"}`}>{c.body}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-[var(--ink)] text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to build something astonishing?</h2>
          <p className="mt-4 text-white/70">Let's discuss how we can help you build it right.</p>
          <Link to="/contact" className="mt-8 inline-flex px-7 py-3.5 rounded-md bg-secondary text-white font-semibold hover:bg-orange-600 transition">Contact Engineering</Link>
        </div>
      </section>
    </>
  );
}