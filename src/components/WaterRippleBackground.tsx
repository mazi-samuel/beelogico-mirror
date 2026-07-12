import { useEffect, useRef } from "react";
import { useTheme } from "../hooks/useTheme";

export function WaterRippleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width;
    let height = canvas.height;

    // Track ripples
    type Ripple = {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      opacity: number;
      speed: number;
    };
    let ripples: Ripple[] = [];

    // Track mouse speed and state
    const mouse = { x: 0, y: 0, lastX: 0, lastY: 0, active: false };

    // ResizeObserver to handle parent container sizes dynamically
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        width = canvas.width = w;
        height = canvas.height = h;
      }
    });

    resizeObserver.observe(canvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Only spawn ripples if cursor is inside the canvas element boundaries
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouse.x = x;
        mouse.y = y;

        if (!mouse.active) {
          mouse.lastX = mouse.x;
          mouse.lastY = mouse.y;
          mouse.active = true;
        }

        const dist = Math.hypot(mouse.x - mouse.lastX, mouse.y - mouse.lastY);
        if (dist > 12) { // More sensitive to spawn ripples on mouse move
          ripples.push({
            x: mouse.x,
            y: mouse.y,
            radius: 2,
            maxRadius: Math.random() * 40 + 35,
            opacity: 0.7, // Higher starting opacity
            speed: 1.0 + Math.random() * 0.8,
          });
          mouse.lastX = mouse.x;
          mouse.lastY = mouse.y;
        }
      }
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        // Spawn 3 concentric ripples for click to make it look astonishing
        ripples.push({
          x: x,
          y: y,
          radius: 3,
          maxRadius: Math.random() * 90 + 90,
          opacity: 0.9,
          speed: 1.6,
        });
        ripples.push({
          x: x,
          y: y,
          radius: 10,
          maxRadius: Math.random() * 70 + 70,
          opacity: 0.8,
          speed: 1.3,
        });
        ripples.push({
          x: x,
          y: y,
          radius: 20,
          maxRadius: Math.random() * 50 + 50,
          opacity: 0.6,
          speed: 1.0,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.005;

      const isDark = theme === "dark";
      
      // Increased opacity for waves to be clearly visible
      const wave1Color = isDark ? "rgba(0, 212, 255, 0.08)" : "rgba(13, 45, 107, 0.05)";
      const wave2Color = isDark ? "rgba(232, 119, 34, 0.05)" : "rgba(232, 119, 34, 0.04)";
      
      // Crisp outline color
      const stroke1Color = isDark ? "rgba(0, 212, 255, 0.15)" : "rgba(13, 45, 107, 0.1)";
      const stroke2Color = isDark ? "rgba(232, 119, 34, 0.1)" : "rgba(232, 119, 34, 0.08)";

      // Wave 1
      ctx.fillStyle = wave1Color;
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x += 15) {
        const y = height - 55 + Math.sin(x * 0.005 + time * 1.5) * 20 + Math.cos(x * 0.002 + time * 0.8) * 10;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();

      // Wave 1 outline stroke
      ctx.strokeStyle = stroke1Color;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let x = 0; x <= width; x += 15) {
        const y = height - 55 + Math.sin(x * 0.005 + time * 1.5) * 20 + Math.cos(x * 0.002 + time * 0.8) * 10;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Wave 2
      ctx.fillStyle = wave2Color;
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x += 15) {
        const y = height - 35 + Math.sin(x * 0.006 - time * 1.2) * 15 + Math.cos(x * 0.003 - time * 0.6) * 8;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();

      // Wave 2 outline stroke
      ctx.strokeStyle = stroke2Color;
      ctx.lineWidth = 1.0;
      ctx.beginPath();
      for (let x = 0; x <= width; x += 15) {
        const y = height - 35 + Math.sin(x * 0.006 - time * 1.2) * 15 + Math.cos(x * 0.003 - time * 0.6) * 8;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Update and draw ripples
      ripples = ripples.filter((r) => {
        r.radius += r.speed;
        r.opacity -= 0.007; // Fades out slightly slower (approx 2.5 seconds)

        if (r.opacity <= 0) return false;

        // Draw primary ring (higher contrast)
        ctx.strokeStyle = isDark
          ? `rgba(0, 212, 255, ${r.opacity * 0.7})`
          : `rgba(13, 45, 107, ${r.opacity * 0.6})`;
        ctx.lineWidth = 2.0; // Thicker ring lines
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Draw secondary ring
        if (r.radius > 15) {
          ctx.strokeStyle = isDark
            ? `rgba(232, 119, 34, ${r.opacity * 0.4})`
            : `rgba(232, 119, 34, ${r.opacity * 0.3})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius - 12, 0, Math.PI * 2);
          ctx.stroke();
        }

        return true;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 w-full h-full -z-10 block"
    />
  );
}
