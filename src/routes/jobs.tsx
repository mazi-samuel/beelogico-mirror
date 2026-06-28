import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Briefcase } from "lucide-react";
import { HexBackground } from "@/components/HexBackground";

export const Route = createFileRoute("/jobs")({
  head: () => ({
    meta: [
      { title: "Careers & Internships — JTL" },
      { name: "description", content: "Join Juruanya Technologies Limited (JTL). Actively recruiting interns and NYSC corps members in Lagos." },
      { property: "og:title", content: "Careers & Internships — JTL" },
      { property: "og:description", content: "Join a Lagos-based startup building astonishing tech." },
    ],
  }),
  component: JobsPage,
});

function JobsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const placement = formData.get("placement") as string;
    const reason = formData.get("reason") as string;

    const subject = encodeURIComponent(`JTL Job Application - ${placement} (${name})`);
    const body = encodeURIComponent(
      `Juruanya Technologies Limited Job Application\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Placement Type: ${placement}\n\n` +
      `Why I want to build astonishing tech:\n${reason}`
    );

    window.location.href = `mailto:info@juruanyatechnologies.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative bg-soft py-20">
        <HexBackground />
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary">
              Build the future <span className="text-gradient">with us</span>
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed text-sm">
              At JTL, we build software systems, cloud-based SaaS, and electronic hardware solutions. 
              We are currently an early-stage startup led by our founder Mazi Nwakaeze. 
              We are actively recruiting passionate <strong>tech interns</strong> and <strong>NYSC corps members</strong> in Lagos who want to get hands-on experience shipping products that astonish.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative aspect-square max-w-md ml-auto w-full grid place-items-center"
          >
            <div className="relative h-72 w-72">
              <div className="absolute inset-0 hex-pointy bg-gradient-to-br from-primary to-secondary grid place-items-center">
                <Briefcase className="h-24 w-24 text-white" />
              </div>
              <div className="absolute -top-6 -left-6 h-20 w-20 hex-pointy bg-secondary" />
              <div className="absolute -bottom-6 -right-6 h-16 w-16 hex-pointy bg-accent/30" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary">Apply Now</h2>
          <p className="mt-3 text-center text-muted-foreground">
            Whether you are a developer, designer, hardware enthusiast, or looking for an NYSC placement, fill out the form below.
          </p>

          {submitted ? (
            <div className="mt-10 p-8 rounded-2xl bg-card border border-secondary/40 text-center">
              <p className="text-xl font-bold text-secondary">Thanks for applying!</p>
              <p className="mt-2 text-muted-foreground">We will review your profile and reach out shortly.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-5 p-8 rounded-2xl bg-card border border-border/60 shadow-sm"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone Number" name="phone" required />
                <Field label="Placement Type (e.g. Intern, NYSC, Full-time)" name="placement" required />
              </div>
              <Field label="Tell us why you want to build astonishing tech" name="reason" required textarea />

              <div>
                <label className="block text-sm font-semibold mb-2">Upload Your CV</label>
                <label className="flex flex-col items-center justify-center gap-2 p-8 rounded-xl border-2 border-dashed border-border hover:border-secondary/50 cursor-pointer transition">
                  <Upload className="h-7 w-7 text-secondary" />
                  <span className="text-sm text-muted-foreground">Click to upload (PDF, DOC, DOCX)</span>
                  <input type="file" className="sr-only" accept=".pdf,.doc,.docx" />
                </label>
              </div>

              <button type="submit" className="w-full py-3.5 rounded-md bg-secondary text-white font-semibold hover:bg-orange-600 transition">
                Apply Now
              </button>
            </form>
          )}
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
      {textarea ? <textarea name={name} required={required} rows={5} className={cls} /> : <input name={name} type={type} required={required} className={cls} />}
    </div>
  );
}