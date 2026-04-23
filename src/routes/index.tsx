import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Smartphone, Palette, Bug } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { HexBackground } from "@/components/HexBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BeeLogic — Custom Software That Fits Your Business" },
      { name: "description", content: "Web, mobile, design and QA — intuitive, scalable solutions that simplify operations and drive growth." },
      { property: "og:title", content: "BeeLogic — Custom Software That Fits Your Business" },
      { property: "og:description", content: "Web, mobile, design and QA — intuitive, scalable solutions that simplify operations and drive growth." },
    ],
  }),
  component: Home,
});

const COLLAGE = [
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
  "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
];

const SERVICES = [
  { icon: Code2, title: "Web Development", desc: "Scalable, secure and future-ready websites & platforms", anchor: "web" },
  { icon: Smartphone, title: "Mobile App Development", desc: "Android and iOS apps that engage and convert", anchor: "mobile" },
  { icon: Palette, title: "Web Design", desc: "User-centric designs for maximum impact", anchor: "design" },
  { icon: Bug, title: "Software Testing", desc: "Reliable QA to ensure smooth performance", anchor: "testing" },
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
              <span className="text-gradient">Custom Software</span>{" "}
              <span className="text-foreground">That</span>{" "}
              <span className="text-gradient">Fits</span>
              <br />
              <span className="text-foreground">Your Business</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
              At BeeLogic, we design and develop intuitive, scalable web and mobile
              applications that simplify operations and drive growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[var(--ink)] text-white font-semibold hover:bg-primary transition-all hover:-translate-y-0.5 hover:shadow-lg shadow-black/10"
              >
                Explore Our Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all hover:-translate-y-0.5"
              >
                See Our Work
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative aspect-square max-w-[520px] ml-auto w-full"
          >
            <HexCollage images={COLLAGE} />
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle>Our Services</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-card rounded-2xl p-7 border border-border/60 hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_rgba(0,183,212,0.35)] transition-all hover:-translate-y-1"
              >
                <div className="h-14 w-14 grid place-items-center hex-pointy bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link
                  to="/services"
                  hash={s.anchor}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle>Some of Our Clients</SectionTitle>
          <p className="text-center max-w-3xl mx-auto text-muted-foreground">
            We've had the privilege of working with forward-thinking companies and
            organizations that trust <strong className="text-foreground">BeeLogic</strong> to deliver reliable, scalable digital solutions.
          </p>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {["ProServ", "Conmix", "Mostlator", "Al Shorouk", "Dar", "Nexa"].map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="grid place-items-center h-20 rounded-lg border border-border/60 text-foreground/50 font-display font-bold text-lg hover:text-primary hover:border-primary/40 transition-colors"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-20 bg-soft relative overflow-hidden">
        <HexBackground />
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle>Our Products</SectionTitle>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/20 grid place-items-center overflow-hidden"
            >
              <div className="text-center px-8">
                <div className="font-display text-6xl font-extrabold text-gradient">Markn</div>
                <p className="mt-3 text-sm text-foreground/70">GPS Attendance · Real-Time Tracking</p>
              </div>
              <Outline className="absolute -right-10 -bottom-10 h-56 w-56 text-primary/20" />
              <Outline className="absolute -left-8 -top-8 h-40 w-40 text-accent/30" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-3xl font-bold">
                <span className="text-gradient">Markn</span>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                (GPS Attendance System — Real-Time Attendance Tracking for Today's Workforce)
              </p>
              <h4 className="mt-6 font-semibold">Some Core Features:</h4>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  "GPS Attendance with Adjustable Radius",
                  "Auto Calculation of Daily Working Hours",
                  "Absence Reports Generation",
                  "Vacation & Excuse Requests with Manager Notifications",
                  "Automatic Approval Notifications for Employees",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/products"
                className="mt-7 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-[var(--primary-deep)] transition-colors"
              >
                Explore More! <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 bg-[var(--ink)] text-white relative overflow-hidden">
        <Outline className="absolute right-10 top-10 h-40 w-40 text-white/5" />
        <Outline className="absolute left-10 bottom-10 h-56 w-56 text-primary/15" />
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle light>Our Case Studies</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Vehicle Management System", desc: "The Vehicle Management System by BeeLogic was developed to help businesses gain full control over their vehicle fleets…" },
              { title: "Construction Supplier Management Software", desc: "Designed to streamline the procurement process by centralizing supplier data and orders…" },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-7 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-primary/50 transition"
              >
                <div className="h-12 w-12 grid place-items-center hex-pointy bg-primary/20 text-primary">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{c.title}</h3>
                <p className="mt-2 text-white/65 text-sm leading-relaxed">{c.desc}</p>
                <Link to="/case-studies" className="mt-4 inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-soft relative">
        <HexBackground />
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle>About BeeLogic</SectionTitle>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-2xl font-display font-semibold text-gradient">Smart Solutions. Real Results.</p>
            <p className="mt-4 text-muted-foreground">
              We are your co-creator in all manner of smart, lean, and scalable solutions for businesses of all sizes.
              We specialize in offshore software and hardware development services at cost-efficient prices, adapted to every business need.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              { t: "Our Vision", d: "To be the global partner of choice for digital transformation through smart software, agile thinking, and lasting partnerships." },
              { t: "Our Mission", d: "To create smart, simple, and reliable technology that drives business success in the fast-changing digital world." },
            ].map((b) => (
              <div key={b.t} className="bg-card rounded-2xl p-7 border border-border/60 shadow-sm">
                <h3 className="text-xl font-bold text-primary">{b.t}</h3>
                <p className="mt-2 text-foreground/75 text-sm leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-16 text-center text-2xl font-bold">Our Edge</h3>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              "Tailor-made solutions for real business needs",
              "Agile and experienced development team",
              "Data-driven systems for better decision-making",
              "Strong client partnerships, secure infrastructure",
            ].map((e, i) => (
              <div key={e} className="relative bg-card rounded-2xl p-6 border border-border/60 hover:border-primary/40 transition group">
                <div className="text-5xl font-display font-extrabold text-primary/20 group-hover:text-primary/40 transition">{i + 1}</div>
                <p className="mt-3 text-sm font-medium text-foreground/85">{e}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-16 text-center text-2xl font-bold">Industries Empowered by BeeLogic</h3>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Construction", "Manufacturing", "Media & Publishing", "Logistics & Transport", "Professional Services", "Retail & Marketing"].map((ind) => (
              <div key={ind} className="grid place-items-center h-24 rounded-xl bg-card border border-border/60 text-center px-3 text-sm font-medium text-foreground/80 hover:text-primary hover:border-primary/40 transition">
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Let's build something <span className="text-gradient">remarkable</span></h2>
          <p className="mt-4 text-muted-foreground">Tell us about your idea and we'll get back to you within one business day.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-[var(--ink)] text-white font-semibold hover:bg-primary transition-all hover:-translate-y-0.5">
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

/** 7-cell honeycomb collage. */
function HexCollage({ images }: { images: string[] }) {
  // positions in % for a 3-column honeycomb
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
          className="absolute w-[33%] aspect-[1/1.15] -translate-x-1/2 -translate-y-1/2 hex-pointy overflow-hidden shadow-xl"
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
      <polygon points="50,3 95,27 95,73 50,97 5,73 5,27" />
    </svg>
  );
}
