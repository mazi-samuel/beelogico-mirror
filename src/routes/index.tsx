import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Cpu, Smartphone, Palette, ShieldAlert } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { HexBackground } from "@/components/HexBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jụ̀rụ̀ ányá Technologies Limited — JTL" },
      { name: "description", content: "Lagos-based technology company building software, platforms & digital products that astonish. Innovate | Astonish | Transform" },
      { property: "og:title", content: "Jụ̀rụ̀ ányá Technologies Limited — JTL" },
      { property: "og:description", content: "Lagos-based technology company building software, platforms & digital products that astonish." },
    ],
  }),
  component: Home,
});

const COLLAGE = [
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
  "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
];

const SERVICES = [
  { icon: Code2, title: "Software Development", desc: "Custom web applications and backend systems engineered for scalability and speed.", anchor: "web" },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native and cross-platform iOS and Android apps built with intuitive user journeys.", anchor: "mobile" },
  { icon: Palette, title: "UI/UX & Branding", desc: "Human-centered design systems combining premium aesthetics with functionality.", anchor: "design" },
  { icon: Cpu, title: "Hardware & IoT", desc: "Physical technology hardware prototyping, electronic devices, and product assembly.", anchor: "hardware" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-soft">
        <HexBackground />
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              <span className="text-gradient">Technology Built</span>{" "}
              <span className="text-foreground">To</span>{" "}
              <span className="text-gradient">Astonish</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
              We design and build premium software, SaaS platforms, and hardware electronics. 
              Our Igbo name, <strong>Jụ̀rụ̀ ányá</strong>, translates to "astonished eyes" — representing technology that is astonishing, amazing, surprising, breathtaking, and mind-blowing (delivering a true "wow!" experience).
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[var(--ink)] text-white font-semibold hover:bg-secondary hover:-translate-y-0.5 hover:shadow-lg shadow-black/10 transition-all"
              >
                Our Capabilities <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all"
              >
                Product Pipeline
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative aspect-square max-w-[420px] ml-auto w-full mt-16 lg:mt-0"
          >
            <HexCollage images={COLLAGE} />
          </motion.div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="relative py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle>Our Core Services</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-card rounded-2xl p-7 border border-border/60 hover:border-secondary/40 hover:shadow-[0_20px_60px_-20px_rgba(232,119,34,0.15)] transition-all hover:-translate-y-1"
              >
                <div className="h-14 w-14 grid place-items-center hex-pointy bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link
                  to="/services"
                  hash={s.anchor}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-secondary group-hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle>Target Sectors & Partners</SectionTitle>
          <p className="text-center max-w-3xl mx-auto text-muted-foreground">
            As an early-stage startup, we build foundational technology infrastructure tailored for high-growth sectors and forward-looking partners across Africa.
          </p>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {["Logistics & Fleet", "SMEs & Retail", "Construction", "EdTech", "Hardware & IoT", "SaaS Systems"].map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="grid place-items-center h-20 rounded-lg border border-border/60 text-foreground/75 font-mono text-xs font-semibold px-4 text-center hover:text-secondary hover:border-secondary/40 transition-colors"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SPOTLIGHT */}
      <section className="py-20 bg-soft relative overflow-hidden">
        <HexBackground />
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle>Stealth Product Pipeline</SectionTitle>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/20 grid place-items-center overflow-hidden"
            >
              <div className="text-center px-8 flex flex-col items-center">
                <ShieldAlert className="h-16 w-16 text-secondary mb-4 animate-pulse" />
                <div className="font-display text-4xl font-extrabold text-gradient">Stealth Lab</div>
                <p className="mt-3 text-sm text-foreground/70 max-w-xs">
                  SaaS business tools & physical tech hardware currently in development.
                </p>
              </div>
              <Outline className="absolute -right-10 -bottom-10 h-56 w-56 text-primary/10" />
              <Outline className="absolute -left-8 -top-8 h-40 w-40 text-secondary/15" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-3xl font-bold">
                <span className="text-gradient">Innovating at the Edge</span>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We are actively building proprietary products pitched to early-stage investors, targeting key infrastructure gaps in the African digital economy.
              </p>
              <h4 className="mt-6 font-mono text-xs uppercase tracking-wider text-secondary font-semibold">Active Development Sectors:</h4>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  "SaaS platforms for business productivity & automation",
                  "Geofencing & operations tracking mobile systems",
                  "Digital messaging infrastructure (Bulk SMS, Push APIs)",
                  "Custom IoT hardware and smart physical devices",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/products"
                className="mt-7 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-white font-semibold hover:bg-primary-deep transition-colors"
              >
                View Product Strategy <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CASE REFS */}
      <section className="py-20 bg-[var(--ink)] text-white relative overflow-hidden">
        <Outline className="absolute right-10 top-10 h-40 w-40 text-white/5" />
        <Outline className="absolute left-10 bottom-10 h-56 w-56 text-secondary/10" />
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle light>Reference Implementations</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Operations & Fleet Tracking Portal", desc: "Custom operational software designed to help logistics managers keep full control over hardware assets, real-time driver schedules, and automated reporting systems." },
              { title: "Supplier Procurement Ecosystem", desc: "A secure framework designed to streamline quote verification, order cycles, and financial audits for complex physical supply chains." },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-7 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-secondary/50 transition"
              >
                <div className="h-12 w-12 grid place-items-center hex-pointy bg-secondary/20 text-secondary">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{c.title}</h3>
                <p className="mt-2 text-white/65 text-sm leading-relaxed">{c.desc}</p>
                <Link to="/case-studies" className="mt-4 inline-flex items-center gap-1 text-secondary font-semibold text-sm group-hover:gap-2 transition-all">
                  Details <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT STORY BRIEF */}
      <section className="py-20 bg-soft relative">
        <HexBackground />
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle>About Jụ̀rụ̀ ányá</SectionTitle>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-2xl font-display font-semibold text-gradient">Innovate · Astonish · Transform</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Juruanya Technologies Limited (JTL) was incorporated under Nigerian law in 2026. 
              Our mission is to build software and hardware technology that is so thoughtful, impact-driven, and remarkable that it leaves people wide-eyed with amazement.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              { t: "Our Vision", d: "To become Africa's most innovative technology company — building products and platforms that astonish users, empower businesses, and transform communities." },
              { t: "Our Mission", d: "To design and deliver world-class software solutions, digital platforms, and technology experiences rooted in African ingenuity and driven by a relentless commitment to excellence." },
            ].map((b) => (
              <div key={b.t} className="bg-card rounded-2xl p-7 border border-border/60 shadow-sm">
                <h3 className="text-xl font-bold text-secondary">{b.t}</h3>
                <p className="mt-2 text-foreground/75 text-sm leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-16 text-center text-2xl font-bold">Why JTL?</h3>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              "relentless curiosity and commitment to bold ideas",
              "engineering excellence in every line of code & hardware part",
              "transparent, accountable, and integrity-driven relationships",
              "measuring success by tangible impact on businesses & individuals",
            ].map((e, i) => (
              <div key={e} className="relative bg-card rounded-2xl p-6 border border-border/60 hover:border-secondary/40 transition group">
                <div className="text-5xl font-mono font-extrabold text-secondary/15 group-hover:text-secondary/35 transition">{`0${i + 1}`}</div>
                <p className="mt-3 text-sm font-medium text-foreground/85 leading-relaxed">{e}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Let's build something <span className="text-gradient">remarkable</span></h2>
          <p className="mt-4 text-muted-foreground">Get in touch to discuss custom engineering, consulting, or investor opportunities.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-[var(--ink)] text-white font-semibold hover:bg-secondary hover:-translate-y-0.5 transition-all">
            Connect With Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

/** Honeycomb-like eye shape collage. */
function HexCollage({ images }: { images: string[] }) {
  const cells = [
    { top: "0%", left: "25%" },
    { top: "0%", left: "75%", img: 1 },
    { top: "25%", left: "0%", img: 2 },
    { top: "25%", left: "50%", img: 3 },
    { top: "25%", left: "100%", img: 4 },
    { top: "50%", left: "25%", img: 5 },
    { top: "50%", left: "75%", img: 6 },
    { top: "75%", left: "0%", img: 7 },
    { top: "75%", left: "50%", img: 0 },
  ];
  return (
    <div className="absolute inset-0">
      {cells.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.05 * i, ease: "easeOut" }}
          className="absolute w-[33%] aspect-[1/1] -translate-x-1/2 -translate-y-1/2 hex-pointy overflow-hidden shadow-xl"
          style={{ top: c.top, left: c.left }}
        >
          <img
            src={images[c.img ?? i % images.length]}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}

function Outline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M50,10 C50,40 60,50 90,50 C60,50 50,60 50,90 C50,60 40,50 10,50 C40,50 50,40 50,10 Z" />
    </svg>
  );
}
