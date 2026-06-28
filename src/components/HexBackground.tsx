/** Floating decorative sparkle outlines used across the site. */
export function HexBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      <Outline className="left-[-60px] top-24 h-56 w-56 text-primary/10 animate-[spin_80s_linear_infinite]" />
      <Outline className="left-[3%] top-[60%] h-40 w-40 text-secondary/15 animate-[pulse_6s_ease-in-out_infinite]" />
      <Outline className="right-[-40px] top-[40%] h-72 w-72 text-accent/20 animate-[spin_120s_linear_infinite]" />
      <Outline className="right-[10%] bottom-10 h-32 w-32 text-primary/15" />
    </div>
  );
}

function Outline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={`absolute ${className}`} fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M50,10 C50,40 60,50 90,50 C60,50 50,60 50,90 C50,60 40,50 10,50 C40,50 50,40 50,10 Z" />
    </svg>
  );
}