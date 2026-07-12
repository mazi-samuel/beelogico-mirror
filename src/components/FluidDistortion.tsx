import { useEffect, useRef } from "react";

export function FluidDistortion() {
  const mapRef = useRef<SVGFEDisplacementMapElement>(null);
  const turbRef = useRef<SVGFETurbulenceElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let time = 0;

    // Track displacement scale dynamics
    let currentScale = 1.5; // Starts near static (idle text remains sharp)
    let targetScale = 1.5;
    const baseScale = 1.5;

    // Track mouse speed
    let lastX = 0;
    let lastY = 0;
    let hasMoved = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!hasMoved) {
        lastX = e.clientX;
        lastY = e.clientY;
        hasMoved = true;
        return;
      }

      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const speed = Math.hypot(dx, dy);

      // Increase target scale based on cursor speed (cap at 22 for visual readability)
      targetScale = Math.min(22, targetScale + speed * 0.18);

      lastX = e.clientX;
      lastY = e.clientY;
    };

    const handleClick = () => {
      // Spike the distortion scale on mouse click for a ripple wave splash effect!
      targetScale = 40;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    const animate = () => {
      time += 0.005;

      // Slowly decay target scale back to base idle float level
      targetScale += (baseScale - targetScale) * 0.06;

      // Smoothly interpolate current scale to target scale (lerp)
      currentScale += (targetScale - currentScale) * 0.12;

      // Modulate frequency to simulate organic flowing current
      const freqX = 0.012 + Math.sin(time * 0.8) * 0.003;
      const freqY = 0.025 + Math.cos(time * 0.5) * 0.005;

      // Mutate DOM elements directly for maximum hardware-accelerated performance
      if (mapRef.current) {
        mapRef.current.setAttribute("scale", currentScale.toFixed(2));
      }
      if (turbRef.current) {
        turbRef.current.setAttribute("baseFrequency", `${freqX.toFixed(5)} ${freqY.toFixed(5)}`);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <svg className="absolute w-0 h-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
      <defs>
        <filter id="water-displace" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            ref={turbRef}
            type="fractalNoise"
            baseFrequency="0.012 0.025"
            numOctaves="1" // Fast rendering performance
            result="noise"
          />
          <feDisplacementMap
            ref={mapRef}
            in="SourceGraphic"
            in2="noise"
            scale="1.5"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
