import { useEffect, useRef } from "react";

export function FluidDistortion() {
  const mapRef = useRef<SVGFEDisplacementMapElement>(null);
  const turbRef = useRef<SVGFETurbulenceElement>(null);

  useEffect(() => {
    // Check if device is mobile or has coarse touch pointer (touch screen)
    const isMobile =
      typeof window !== "undefined" &&
      (window.innerWidth <= 768 || window.matchMedia("(pointer: coarse)").matches);

    // If mobile, completely bypass filter on <main> to save battery and ensure 100% scrolling fluidity
    const mainEl = document.querySelector("main");
    if (isMobile && mainEl) {
      mainEl.style.filter = "none";
      mainEl.style.transform = "none";
      return; // Stop execution here
    }

    let animationFrameId: number;
    let time = 0;

    let currentScale = 1.5;
    let targetScale = 1.5;
    const baseScale = 1.5;

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

      // Increase target scale based on speed (cap at 22 for visual readability)
      targetScale = Math.min(22, targetScale + speed * 0.18);

      lastX = e.clientX;
      lastY = e.clientY;
    };

    const handleClick = () => {
      targetScale = 40;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    const animate = () => {
      time += 0.005;

      // Slowly decay target scale back to base idle float level
      targetScale += (baseScale - targetScale) * 0.06;

      // Lerp
      currentScale += (targetScale - currentScale) * 0.12;

      // Dynamic Performance Optimization:
      // Turn filter off completely (none) when scale is at baseline to avoid repainting during scroll!
      if (mainEl) {
        if (currentScale > 1.55) {
          mainEl.style.filter = "url(#water-displace)";
          mainEl.style.transform = "translate3d(0,0,0)"; // GPU acceleration promotion
        } else {
          mainEl.style.filter = "none";
          mainEl.style.transform = "none";
        }
      }

      const freqX = 0.012 + Math.sin(time * 0.8) * 0.003;
      const freqY = 0.025 + Math.cos(time * 0.5) * 0.005;

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
      if (mainEl) {
        mainEl.style.filter = "none";
        mainEl.style.transform = "none";
      }
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
            numOctaves="1"
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
