import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { HexBackground } from "@/components/HexBackground";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — BeeLogic" },
      { name: "description", content: "Get in touch with BeeLogic. We'll respond within one business day." },
      { property: "og:title", content: "Contact — BeeLogic" },
      { property: "og:description", content: "Get in touch with BeeLogic." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="relative bg-soft py-20">
        <HexBackground />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="mt-4 text-muted-foreground">We'd love to hear about your project. Drop us a line and we'll get back to you within one business day.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: Phone, label: "Call us", value: "+202 27516364" },
              { icon: Mail, label: "Email", value: "info@proserv-eg.com" },
              { icon: Clock, label: "Hours", value: "Sun – Thu · 8:00 am – 5:00 pm" },
              { icon: MapPin, label: "Office", value: "Cairo, Egypt" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/60">
                <div className="h-11 w-11 grid place-items-center hex-pointy bg-primary text-white flex-shrink-0">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</p>
                  <p className="text-foreground font-medium">{c.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <div className="p-10 rounded-2xl bg-card border border-primary/40 text-center">
                <p className="text-2xl font-bold text-primary">Message sent!</p>
                <p className="mt-2 text-muted-foreground">Thanks for reaching out — we'll be in touch shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="p-8 rounded-2xl bg-card border border-border/60 shadow-sm space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" required />
                  <Field label="Email" type="email" required />
                </div>
                <Field label="Subject" required />
                <Field label="Message" required textarea />
                <button type="submit" className="w-full py-3.5 rounded-md bg-[var(--ink)] text-white font-semibold hover:bg-primary transition">
                  Send message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Field({ label, type = "text", required, textarea }: { label: string; type?: string; required?: boolean; textarea?: boolean }) {
  const cls = "w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition";
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">{label} {required && <span className="text-primary">*</span>}</label>
      {textarea ? <textarea required={required} rows={6} className={cls} /> : <input type={type} required={required} className={cls} />}
    </div>
  );
}