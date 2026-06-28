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
      <Sparkle small light={light} />
      <h2
        className={`text-3xl sm:text-4xl font-bold tracking-tight ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {children}
      </h2>
      <Sparkle small light={light} />
    </motion.div>
  );
}

function Sparkle({ small, light }: { small?: boolean; light?: boolean }) {
  const size = small ? "h-5 w-5" : "h-6 w-6";
  return (
    <span className={`relative ${size} flex-shrink-0 animate-[pulse_3s_ease-in-out_infinite]`}>
      <svg
        viewBox="0 0 24 24"
        className={`absolute inset-0 ${light ? "text-white/80" : "text-secondary"}`}
        fill="currentColor"
      >
        <path d="M12,2 C12,9 15,12 22,12 C15,12 12,15 12,22 C12,15 9,12 2,12 C9,12 12,9 12,2 Z" />
      </svg>
    </span>
  );
}