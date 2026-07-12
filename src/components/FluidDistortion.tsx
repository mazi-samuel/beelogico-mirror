import { useEffect, useState } from "react";

export function FluidDistortion() {
  const [frequency, setFrequency] = useState(0.014);

  useEffect(() => {
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 0.004;
      // Slowly modulate base frequency of displacement map to simulate organic water currents
      setFrequency(0.012 + Math.sin(time) * 0.003);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <svg className="absolute w-0 h-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
      <defs>
        <filter id="water-displace" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={`${frequency} 0.025`}
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="15"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
