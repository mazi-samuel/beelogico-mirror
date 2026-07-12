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
      return;
    }

    let animationFrameId: number;
    let time = 0;

    const baseScale = 12; // Constant underwater waving scale when idle
    let currentScale = baseScale;
    let targetScale = baseScale;

    let lastX = 0;
    let lastY = 0;
    let hasMoved = false;
    let isScrolling = false;
    let scrollTimeout: number;

    // Track cursor speed to increase wave intensity
    const handleMouseMove = (e: MouseEvent) => {
      if (isScrolling) return;

      if (!hasMoved) {
        lastX = e.clientX;
        lastY = e.clientY;
        hasMoved = true;
        return;
      }

      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const speed = Math.hypot(dx, dy);

      // Increase target scale based on speed (cap at 24)
      targetScale = Math.min(24, targetScale + speed * 0.15);

      lastX = e.clientX;
      lastY = e.clientY;
    };

    const handleClick = () => {
      if (isScrolling) return;
      // Spike the scale on click
      targetScale = 40;
    };

    // Scroll performance listener:
    // Temporarily turn down displacement to 0 during scroll to maintain 60 FPS page scrolling,
    // and restore the wavy underwater float immediately when scrolling stops.
    const handleScroll = () => {
      isScrolling = true;
      targetScale = 0;

      window.clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        isScrolling = false;
        targetScale = baseScale;
      }, 120); // Restore waves 120ms after scroll stops
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    const animate = () => {
      time += 0.005;

      if (!isScrolling) {
        // Slowly decay target scale back to constant float level (12)
        targetScale += (baseScale - targetScale) * 0.05;
      }

      // Lerp currentScale towards targetScale
      currentScale += (targetScale - currentScale) * 0.12;

      // Dynamic Performance Optimization:
      // Turn filter off completely (none) when scale is tiny to avoid CPU/GPU overhead
      if (mainEl) {
        if (currentScale > 1.5) {
          mainEl.style.filter = "url(#water-displace)";
          mainEl.style.transform = "translate3d(0,0,0)"; // GPU layer promotion
        } else {
          mainEl.style.filter = "none";
          mainEl.style.transform = "none";
        }
      }

      // Modulate frequency to simulate organic flowing current
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
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(scrollTimeout);
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
            scale="12"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
