import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Briefcase } from "lucide-react";
import { HexBackground } from "@/components/HexBackground";

export const Route = createFileRoute("/jobs")({
  head: () => ({
    meta: [
      { title: "Careers — BeeLogic" },
      { name: "description", content: "Join BeeLogic. We're always looking for passionate, creative, and motivated people." },
      { property: "og:title", content: "Careers — BeeLogic" },
      { property: "og:description", content: "Join a team that ships meaningful software." },
    ],
  }),
  component: JobsPage,
});

function JobsPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section className="relative bg-soft py-20">
        <HexBackground />
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Ready to be part of <span className="text-gradient">our team?</span>
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              At BeeLogic, we develop smart, practical software solutions that help businesses work better.
              We're always looking for passionate, creative, and motivated people to join our growing team.
              Whether you're a developer, designer, tester, or someone who loves solving problems — we'd love to hear from you.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative aspect-square max-w-md ml-auto w-full grid place-items-center"
          >
            <div className="relative h-72 w-72">
              <div className="absolute inset-0 hex-pointy bg-gradient-to-br from-primary to-[var(--primary-deep)] grid place-items-center">
                <Briefcase className="h-24 w-24 text-white" />
              </div>
              <div className="absolute -top-6 -left-6 h-20 w-20 hex-pointy bg-accent" />
              <div className="absolute -bottom-6 -right-6 h-16 w-16 hex-pointy bg-primary/30" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">Apply Now</h2>
          <p className="mt-3 text-center text-muted-foreground">
            Fill out the form below and tell us a little about yourself. Don't forget to attach your CV and any relevant work samples.
          </p>

          {submitted ? (
            <div className="mt-10 p-8 rounded-2xl bg-card border border-primary/40 text-center">
              <p className="text-xl font-bold text-primary">Thanks for applying!</p>
              <p className="mt-2 text-muted-foreground">We'll be in touch shortly.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="mt-10 space-y-5 p-8 rounded-2xl bg-card border border-border/60 shadow-sm"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" required />
                <Field label="Email" type="email" required />
                <Field label="Phone Number" required />
                <Field label="Job Title" required />
              </div>
              <Field label="Cover Letter" required textarea />

              <div>
                <label className="block text-sm font-semibold mb-2">Upload Your CV</label>
                <label className="flex flex-col items-center justify-center gap-2 p-8 rounded-xl border-2 border-dashed border-border hover:border-primary/50 cursor-pointer transition">
                  <Upload className="h-7 w-7 text-primary" />
                  <span className="text-sm text-muted-foreground">Click to upload (PDF, DOC, DOCX)</span>
                  <input type="file" className="sr-only" accept=".pdf,.doc,.docx" />
                </label>
              </div>

              <button type="submit" className="w-full py-3.5 rounded-md bg-[var(--ink)] text-white font-semibold hover:bg-primary transition">
                Apply Now!
              </button>
            </form>
          )}
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
      {textarea ? <textarea required={required} rows={5} className={cls} /> : <input type={type} required={required} className={cls} />}
    </div>
  );
}