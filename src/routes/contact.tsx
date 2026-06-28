import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, Building } from "lucide-react";
import { HexBackground } from "@/components/HexBackground";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — JTL" },
      { name: "description", content: "Get in touch with Juruanya Technologies Limited (JTL). Phone: +234 904 569 2072, Address: Lagos, Nigeria." },
      { property: "og:title", content: "Contact Us — JTL" },
      { property: "og:description", content: "Connect with our engineering and leadership teams in Lagos." },
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
          <p className="mt-4 text-muted-foreground">
            We would love to hear about your project or partnership ideas. Drop us a line and our leadership team will respond within one business day.
          </p>
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
              { icon: Phone, label: "Phone", value: "+234 904 569 2072" },
              { icon: Mail, label: "Email", value: "info@juruanyatechnologies.com" },
              { icon: Clock, label: "Office Hours", value: "Mon – Fri · 8:00 am – 5:00 pm" },
              { icon: MapPin, label: "Office Address", value: "90 Akanro Street, Ilasamaja, Lagos, Nigeria" },
              { icon: Building, label: "Legal Info", value: "RC: 9600871 · TIN: 2622426624523" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/60">
                <div className="h-11 w-11 grid place-items-center hex-pointy bg-secondary text-white flex-shrink-0">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</p>
                  <p className="text-foreground text-sm font-medium leading-relaxed">{c.value}</p>
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
              <div className="p-10 rounded-2xl bg-card border border-secondary/40 text-center">
                <p className="text-2xl font-bold text-secondary">Message sent!</p>
                <p className="mt-2 text-muted-foreground">Thanks for reaching out — we'll be in touch shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get("name") as string;
                  const email = formData.get("email") as string;
                  const subjectVal = formData.get("subject") as string;
                  const message = formData.get("message") as string;

                  const mailSubject = encodeURIComponent(`JTL Contact: ${subjectVal} (${name})`);
                  const mailBody = encodeURIComponent(
                    `Juruanya Technologies Limited Contact Form Submission\n\n` +
                    `Name: ${name}\n` +
                    `Email: ${email}\n\n` +
                    `Message:\n${message}`
                  );

                  window.location.href = `mailto:info@juruanyatechnologies.com?subject=${mailSubject}&body=${mailBody}`;
                  setSent(true);
                }}
                className="p-8 rounded-2xl bg-card border border-border/60 shadow-sm space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <Field label="Subject" name="subject" required />
                <Field label="Message" name="message" required textarea />
                <button type="submit" className="w-full py-3.5 rounded-md bg-secondary text-white font-semibold hover:bg-orange-600 transition">
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

function Field({ label, name, type = "text", required, textarea }: { label: string; name: string; type?: string; required?: boolean; textarea?: boolean }) {
  const cls = "w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition";
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">{label} {required && <span className="text-secondary">*</span>}</label>
      {textarea ? <textarea name={name} required={required} rows={6} className={cls} /> : <input name={name} type={type} required={required} className={cls} />}
    </div>
  );
}