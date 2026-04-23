import { motion } from "framer-motion";

export function SectionTitle({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-center gap-4 mb-12"
    >
      <Hex small light={light} />
      <h2
        className={`text-3xl sm:text-4xl font-bold tracking-tight ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {children}
      </h2>
      <Hex small light={light} />
    </motion.div>
  );
}

function Hex({ small, light }: { small?: boolean; light?: boolean }) {
  const size = small ? "h-5 w-5" : "h-6 w-6";
  return (
    <span className={`relative ${size} flex-shrink-0`}>
      <span
        className={`absolute inset-0 hex-pointy border-2 ${
          light ? "border-white/70" : "border-primary/70"
        }`}
        style={{ clipPath: "none", borderRadius: 0 }}
      />
      <svg viewBox="0 0 24 24" className={`absolute inset-0 ${light ? "text-white/80" : "text-primary"}`} fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" />
      </svg>
    </span>
  );
}