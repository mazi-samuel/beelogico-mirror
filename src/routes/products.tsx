import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, MapPin, Clock, FileText, Bell, Megaphone, Repeat, MapPinned, Smartphone, Database, Shield, Cloud } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { HexBackground } from "@/components/HexBackground";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Markn — GPS Attendance | BeeLogic Products" },
      { name: "description", content: "Markn is a real-time GPS attendance system that prevents time fraud and streamlines HR work." },
      { property: "og:title", content: "Markn — GPS Attendance | BeeLogic Products" },
      { property: "og:description", content: "Real-time GPS attendance for on-site, remote, and field teams." },
    ],
  }),
  component: ProductsPage,
});

const BENEFITS = [
  "Accurate & Real-Time GPS Tracking",
  "Geofencing for Location Control",
  "Prevents Time Fraud",
  "Ideal for Remote & Field Staff",
  "Automated & Efficient",
  "Insights & Analytics",
  "HR & Payroll Integration",
  "Eco-Friendly & Paperless",
];

const FEATURES = [
  { icon: MapPin, title: "GPS Attendance with Adjustable Radius" },
  { icon: Clock, title: "Auto Calculation of Daily Working Hours" },
  { icon: FileText, title: "Absence Reports Generation" },
  { icon: Bell, title: "Vacation & Excuse Requests with Manager Notifications" },
  { icon: Repeat, title: "Automatic Approval Notifications for Employees" },
  { icon: Megaphone, title: "Admin Push Notifications for Announcements" },
  { icon: Repeat, title: "Automatic In/Out Logic Based on Time Frames" },
  { icon: MapPinned, title: "Location Management & Employee Assignment" },
];

const AUDIENCE = [
  "Remote Teams & Field Staff",
  "Delivery & Logistics Teams",
  "Healthcare & Facility Staff",
  "Construction & Site-Based Companies",
  "Small Businesses to Large Enterprises",
  "Schools & Universities",
];

function ProductsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-soft py-20">
        <HexBackground />
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm text-muted-foreground">Home › Products › <span className="text-primary">Markn</span></p>
            <h1 className="mt-3 text-5xl sm:text-6xl font-bold text-gradient">Markn App</h1>
            <p className="mt-4 text-foreground/80">(GPS Attendance System — Real-Time Attendance Tracking for Today's Workforce)</p>
            <h3 className="mt-8 text-xl font-bold text-primary border-b-2 border-primary inline-block">Why choose Markn?</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Typical attendance systems are often inaccurate, cumbersome, and easily manipulated. Whether your
              team is on-site, remote, or in the field, Markn provides your organization with real-time GPS attendance
              that guarantees accountability, prevents time cheating, and streamlines HR administrative work.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative grid place-items-center"
          >
            <div className="relative w-72 h-[36rem] rounded-[3rem] bg-[var(--ink)] p-3 shadow-2xl rotate-[-8deg] hover:rotate-0 transition-transform duration-700">
              <div className="h-full w-full rounded-[2.4rem] bg-gradient-to-br from-primary to-[var(--primary-deep)] p-6 flex flex-col items-center justify-center text-white">
                <Smartphone className="h-14 w-14" />
                <div className="mt-6 font-display text-4xl font-extrabold">MARK-N</div>
                <p className="mt-2 text-sm text-white/80">Tap to clock in</p>
                <div className="mt-8 h-32 w-32 rounded-full border-2 border-white/30 grid place-items-center">
                  <div className="h-24 w-24 rounded-full bg-white/15 grid place-items-center">
                    <MapPin className="h-10 w-10" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Download */}
        <div className="mx-auto max-w-6xl px-6 mt-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center justify-center gap-3">
            <span className="hex-pointy h-4 w-4 bg-primary inline-block" />
            Download Our App
            <span className="hex-pointy h-4 w-4 bg-primary inline-block" />
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href="https://apps.apple.com/eg/app/mark-n/id6752826107" className="px-6 py-3 rounded-lg bg-[var(--ink)] text-white font-semibold flex items-center gap-2 hover:scale-105 transition-transform">
              <span className="text-xs">Download on the</span> <span className="font-bold">App Store</span>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.beelogic.markno" className="px-6 py-3 rounded-lg bg-[var(--ink)] text-white font-semibold flex items-center gap-2 hover:scale-105 transition-transform">
              <span className="text-xs">Get it on</span> <span className="font-bold">Google Play</span>
            </a>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle>Key Benefits</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border/60 hover:border-primary/40 hover:shadow-md transition"
              >
                <div className="h-8 w-8 grid place-items-center rounded-full bg-primary text-white flex-shrink-0">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-foreground/85">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="py-20 bg-soft">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle>Core Features</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group p-6 rounded-2xl bg-card border border-border/60 hover:border-primary/40 hover:-translate-y-1 transition"
              >
                <div className="h-12 w-12 grid place-items-center hex-pointy bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                  <f.icon className="h-6 w-6" />
                </div>
                <p className="mt-4 text-sm font-medium text-foreground/85">{f.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle>Who is it for?</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AUDIENCE.map((a) => (
              <div key={a} className="p-5 rounded-xl bg-soft border border-border/60 text-center font-medium text-foreground/85 hover:border-primary/40 transition">
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-20 bg-soft">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle>Technologies</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Database, t: "Web Platform", d: "MySQL · Laravel" },
              { icon: Smartphone, t: "Mobile App", d: "Flutter (iOS & Android)" },
              { icon: Cloud, t: "Hosting", d: "Cloud-based deployment" },
              { icon: Shield, t: "Security", d: "End-to-end encryption + Audit trails" },
            ].map((tech) => (
              <div key={tech.t} className="p-6 rounded-2xl bg-card border border-border/60">
                <tech.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-3 font-bold">{tech.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{tech.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--ink)] text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Modernize Your Attendance System?</h2>
          <p className="mt-4 text-white/70">Let Markn streamline your operations with GPS-powered accuracy and automation.</p>
          <p className="mt-2 text-white font-semibold">Start a Free Demo or Request a custom Quote Today</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-7 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-[var(--primary-deep)] transition">Request a Demo</Link>
            <Link to="/contact" className="px-7 py-3.5 rounded-md border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition">Contact Sales</Link>
          </div>
        </div>
      </section>
    </>
  );
}