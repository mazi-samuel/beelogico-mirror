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
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

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

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      // Get local coordinates relative to the viewport
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (!mouse.active) {
        mouse.lastX = mouse.x;
        mouse.lastY = mouse.y;
        mouse.active = true;
      }

      const dist = Math.hypot(mouse.x - mouse.lastX, mouse.y - mouse.lastY);
      if (dist > 25) {
        ripples.push({
          x: mouse.x,
          y: mouse.y,
          radius: 2,
          maxRadius: Math.random() * 50 + 40,
          opacity: 0.5,
          speed: 1.2 + Math.random() * 1.0,
        });
        mouse.lastX = mouse.x;
        mouse.lastY = mouse.y;
      }
    };

    const handleClick = (e: MouseEvent) => {
      // Spawn two concentric ripples for click
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 4,
        maxRadius: Math.random() * 120 + 130,
        opacity: 0.7,
        speed: 2.0,
      });
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 12,
        maxRadius: Math.random() * 100 + 100,
        opacity: 0.6,
        speed: 1.6,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.004;

      // Draw bottom flowing liquid wave layers
      const isDark = theme === "dark";
      const wave1Color = isDark ? "rgba(0, 212, 255, 0.03)" : "rgba(13, 45, 107, 0.02)";
      const wave2Color = isDark ? "rgba(232, 119, 34, 0.02)" : "rgba(232, 119, 34, 0.015)";

      // Wave 1
      ctx.fillStyle = wave1Color;
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x += 30) {
        const y = height - 140 + Math.sin(x * 0.0025 + time * 1.8) * 35 + Math.cos(x * 0.0012 + time * 0.9) * 15;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();

      // Wave 2
      ctx.fillStyle = wave2Color;
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x += 30) {
        const y = height - 100 + Math.sin(x * 0.0035 - time * 1.4) * 30 + Math.cos(x * 0.0018 - time * 0.7) * 10;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();

      // Update and draw ripples
      ripples = ripples.filter((r) => {
        r.radius += r.speed;
        r.opacity -= 0.008;

        if (r.opacity <= 0) return false;

        // Draw primary ring
        ctx.strokeStyle = isDark
          ? `rgba(0, 212, 255, ${r.opacity * 0.4})`
          : `rgba(13, 45, 107, ${r.opacity * 0.3})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Draw secondary ring
        if (r.radius > 20) {
          ctx.strokeStyle = isDark
            ? `rgba(232, 119, 34, ${r.opacity * 0.25})`
            : `rgba(232, 119, 34, ${r.opacity * 0.2})`;
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius - 15, 0, Math.PI * 2);
          ctx.stroke();
        }

        return true;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
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
