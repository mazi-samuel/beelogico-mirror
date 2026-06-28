import React from "react";

export function JTLLogo({
  className = "h-12",
  showText = true,
  variant = "horizontal",
  useImage = true,
}: {
  className?: string;
  showText?: boolean;
  variant?: "horizontal" | "vertical" | "icon";
  useImage?: boolean;
}) {
  if (useImage) {
    return (
      <img
        src="/logo.jpg"
        alt="Jụ̀rụ̀ ányá Technologies Limited"
        className={`${className} object-contain mix-blend-multiply dark:mix-blend-screen dark:invert`}
      />
    );
  }
  return (
    <div className={`flex items-center gap-3 select-none ${variant === "vertical" ? "flex-col text-center" : "flex-row"}`}>
      {/* Detailed representation of the logo */}
      <svg
        viewBox="0 0 100 70"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Eyebrow: Deep Navy Blue */}
        <path
          d="M 28 17 C 36 9, 64 9, 72 17 C 62 13, 38 13, 28 17 Z"
          fill="var(--primary, #0d2d6b)"
        />

        {/* Orange Accent Arch */}
        <path
          d="M 33 21 C 45 15, 60 17, 72 26 C 75 28.5, 77 31.5, 79.5, 34 C 77.5, 32.5, 74.5, 30.5, 72.5, 29 C 64 22.5, 48 20.5, 33 21 Z"
          fill="var(--secondary, #e87722)"
        />

        {/* Outer Eyelid: Deep Navy Blue */}
        <path
          d="M 17 38 C 24 28, 76 28, 83 38 C 84 39, 85 40, 86.5, 41.5 C 75 51, 25 51, 17 38 Z"
          fill="var(--primary, #0d2d6b)"
          opacity="0.1"
        />
        <path
          d="M 17 38 C 30 24, 70 24, 83 38"
          stroke="var(--primary, #0d2d6b)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 17 38 C 30 52, 70 52, 83 38"
          stroke="var(--primary, #0d2d6b)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Iris & Digital Pattern */}
        {/* Outer Iris Circle */}
        <circle cx="50" cy="38" r="18" fill="#0b3b8c" />
        {/* Iris Gradient Inner */}
        <circle cx="50" cy="38" r="17" fill="url(#irisGrad)" />

        {/* Digital Circuit Lines / Radiating Sparkles inside Iris */}
        <g stroke="var(--accent, #00d4ff)" strokeWidth="0.8" opacity="0.8">
          <line x1="50" y1="38" x2="59" y2="29" />
          <line x1="50" y1="38" x2="41" y2="47" />
          <line x1="50" y1="38" x2="38" y2="38" />
          <line x1="50" y1="38" x2="62" y2="38" />
          <line x1="50" y1="38" x2="50" y2="23" />
          <line x1="50" y1="38" x2="50" y2="53" />
          <line x1="50" y1="38" x2="41" y2="29" />
          <line x1="50" y1="38" x2="59" y2="47" />
        </g>
        
        {/* Circuit nodes (small circles) */}
        <circle cx="59" cy="29" r="1.2" fill="var(--accent, #00d4ff)" />
        <circle cx="41" cy="47" r="1.2" fill="var(--accent, #00d4ff)" />
        <circle cx="38" cy="38" r="1.2" fill="var(--accent, #00d4ff)" />
        <circle cx="62" cy="38" r="1.2" fill="var(--accent, #00d4ff)" />
        <circle cx="50" cy="23" r="1.2" fill="var(--accent, #00d4ff)" />
        <circle cx="41" cy="29" r="1.2" fill="var(--accent, #00d4ff)" />
        <circle cx="59" cy="47" r="1.2" fill="var(--accent, #00d4ff)" />

        {/* Glowing Center Ring */}
        <circle cx="50" cy="38" r="9" fill="none" stroke="var(--accent, #00d4ff)" strokeWidth="1.2" />

        {/* Pupil (Dark core) */}
        <circle cx="50" cy="38" r="6" fill="#03112c" />

        {/* Light Reflection/Sparkle Circle */}
        <circle cx="45" cy="33" r="3.5" fill="white" />
        <circle cx="48" cy="30" r="1.2" fill="white" opacity="0.7" />

        {/* Gradients */}
        <defs>
          <radialGradient
            id="irisGrad"
            cx="50"
            cy="38"
            r="17"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#00d4ff" />
            <stop offset="40%" stopColor="#0077c8" />
            <stop offset="100%" stopColor="#0d2d6b" />
          </radialGradient>
        </defs>
      </svg>

      {showText && (
        <div className={`flex flex-col select-none ${variant === "vertical" ? "items-center" : "items-start"}`}>
          <span className="font-display text-xl font-bold tracking-tight text-[#0d2d6b] dark:text-white leading-[1.1] relative">
            Jụ̀rụ̀ ányá
          </span>
          <span className="font-mono text-[9px] tracking-wider text-[#0d2d6b]/70 dark:text-white/60 uppercase font-semibold">
            Technologies Limited
          </span>
          {variant === "vertical" && (
            <span className="text-[10px] text-muted-foreground mt-1 font-medium font-sans">
              Innovate | Astonish | Transform
            </span>
          )}
        </div>
      )}
    </div>
  );
}
