import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Eye, Target, Award, Shield, Zap, Sparkles, Building, Landmark } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { HexBackground } from "@/components/HexBackground";
import { JTLLogo } from "@/components/JTLLogo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — JTL" },
      { name: "description", content: "Learn about Juruanya Technologies Limited (JTL), our brand story, Igbo name meaning, core values, and team." },
      { property: "og:title", content: "About Us — JTL" },
      { property: "og:description", content: "Technology built to evoke astonishment." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Sparkles, name: "Innovation", desc: "We are relentlessly curious and committed to building things that push the boundaries of what technology can do." },
  { icon: Award, name: "Excellence", desc: "We hold ourselves to the highest standard in every line of code, every design pixel, and every product we ship." },
  { icon: Shield, name: "Integrity", desc: "We are honest, transparent, and accountable — to our clients, our team, and our partners." },
  { icon: Zap, name: "Impact", desc: "We measure our success by the tangible, positive change our technology creates for the people we serve." },
  { icon: Eye, name: "Boldness", desc: "We embrace ambitious ideas and attempt what has not been done. We build to astonish." },
];

function AboutPage() {
  return (
    <>
      {/* HERO / STORY */}
      <section className="relative bg-soft py-20">
        <HexBackground />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Our Brand <span className="text-gradient">Story</span>
          </h1>
          <p className="mt-6 text-2xl font-display font-semibold text-gradient">Jụ̀rụ̀ ányá Technologies Limited</p>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-3xl mx-auto text-base sm:text-lg">
            The name <strong>"Jụ̀rụ̀ ányá"</strong> is an Igbo phrase translating to <strong>"astonished eyes"</strong> or 
            <strong>"wide-eyed with amazement"</strong> — evoking a feeling of absolute awe: <strong>astonishing, amazing, surprising, 
            breathtaking, and mind-blowing</strong>. That instant <strong>"wow!"</strong> reaction is the standard we set for 
            our work, creating technology that leaves people genuinely astonished.
          </p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-6">
          {[
            { icon: Eye, title: "Our Vision", body: "To become Africa's most innovative technology company — building products and platforms that astonish users, empower businesses, and transform communities across the continent and beyond." },
            { icon: Target, title: "Our Mission", body: "To design and deliver world-class software solutions, digital platforms, and technology experiences that solve real problems for individuals and businesses — rooted in African ingenuity." },
          ].map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-8 bg-soft border border-border/60 hover:border-secondary/40 transition"
            >
              <div className="h-14 w-14 grid place-items-center hex-pointy bg-primary text-white">
                <b.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-primary">{b.title}</h3>
              <p className="mt-3 text-foreground/80 leading-relaxed text-sm">{b.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-soft">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle>Our Core Values</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {VALUES.map((val, i) => (
              <motion.div
                key={val.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative bg-card rounded-2xl p-6 border border-border/60 hover:border-secondary/40 transition group"
              >
                <div className="h-12 w-12 grid place-items-center rounded-xl bg-secondary/10 text-secondary mb-4 group-hover:bg-secondary group-hover:text-white transition">
                  <val.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-primary">{val.name}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORPORATE PROFILE & LEGAL */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle>Corporate Context</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-primary">Juruanya Technologies Limited</h3>
              <p className="text-muted-foreground leading-relaxed">
                JTL is an early-stage, founder-led technology startup incorporated under the Companies and Allied Matters Act (CAMA) 2020. 
                Based in Lagos, Nigeria, the company operates as a sole-director private limited company focused on building advanced software and hardware platforms.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-border/60 bg-soft">
                  <div className="text-xs text-muted-foreground font-mono">Incorporated</div>
                  <div className="text-sm font-bold text-foreground">June 9, 2026</div>
                </div>
                <div className="p-4 rounded-xl border border-border/60 bg-soft">
                  <div className="text-xs text-muted-foreground font-mono">Registered Office</div>
                  <div className="text-sm font-bold text-foreground">Lagos, Nigeria</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl border border-border/60 bg-soft space-y-4 font-mono text-xs"
            >
              <div className="flex items-center gap-2 pb-2 border-b border-border">
                <Building className="h-4 w-4 text-secondary" />
                <span className="font-bold text-foreground uppercase tracking-wider">Legal Profile</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Type:</span>
                <span className="font-semibold text-foreground">Private Company Limited by Shares</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">RC Number:</span>
                <span className="font-semibold text-foreground">9600871</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">TIN:</span>
                <span className="font-semibold text-foreground">2622426624523</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Share Capital:</span>
                <span className="font-semibold text-foreground">₦10,000,000 (Ord. Shares)</span>
              </div>
              <div className="flex items-center gap-2 pt-4 pb-2 border-b border-border">
                <Landmark className="h-4 w-4 text-secondary" />
                <span className="font-bold text-foreground uppercase tracking-wider">Leadership</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Founder & CEO:</span>
                <span className="font-semibold text-foreground">Mazi Nwakaeze</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--ink)] text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Interested in partnering with us?</h2>
          <p className="mt-4 text-white/70">Connect with our leadership team for investor pitches, product demos, or partnership opportunities.</p>
          <Link to="/contact" className="mt-8 inline-flex px-7 py-3.5 rounded-md bg-secondary text-white font-semibold hover:bg-orange-600 transition">Get in touch</Link>
        </div>
      </section>
    </>
  );
}