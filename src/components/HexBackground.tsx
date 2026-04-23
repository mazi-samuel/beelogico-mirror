/** Floating decorative hex outlines used across the site. */
export function HexBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      <Outline className="left-[-60px] top-24 h-56 w-56 text-primary/15 animate-[spin_60s_linear_infinite]" />
      <Outline className="left-[3%] top-[60%] h-40 w-40 text-primary/20" />
      <Outline className="right-[-40px] top-[40%] h-72 w-72 text-accent/30" />
      <Outline className="right-[10%] bottom-10 h-32 w-32 text-primary/25" />
    </div>
  );
}

function Outline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={`absolute ${className}`} fill="none" stroke="currentColor" strokeWidth="1">
      <polygon points="50,3 95,27 95,73 50,97 5,73 5,27" />
    </svg>
  );
}