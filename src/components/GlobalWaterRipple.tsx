import { useEffect, useRef } from "react";
import { useTheme } from "../hooks/useTheme";

export function GlobalWaterRipple() {
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
      // Coordinates map directly to viewport pixels since canvas is fixed inset-0
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (!mouse.active) {
        mouse.lastX = mouse.x;
        mouse.lastY = mouse.y;
        mouse.active = true;
      }

      const dist = Math.hypot(mouse.x - mouse.lastX, mouse.y - mouse.lastY);
      if (dist > 15) { // Trigger ripples on mouse movement
        ripples.push({
          x: mouse.x,
          y: mouse.y,
          radius: 2,
          maxRadius: Math.random() * 40 + 35,
          opacity: 0.6,
          speed: 1.2 + Math.random() * 0.8,
        });
        mouse.lastX = mouse.x;
        mouse.lastY = mouse.y;
      }
    };

    const handleClick = (e: MouseEvent) => {
      // Spawn 3 concentric ripples on click
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 3,
        maxRadius: Math.random() * 90 + 90,
        opacity: 0.8,
        speed: 1.8,
      });
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 10,
        maxRadius: Math.random() * 70 + 70,
        opacity: 0.7,
        speed: 1.4,
      });
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 20,
        maxRadius: Math.random() * 50 + 50,
        opacity: 0.5,
        speed: 1.0,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.005;

      const isDark = theme === "dark";

      // Draw flowing wave strokes at the very bottom of the viewport
      const waveColor = isDark ? "rgba(0, 212, 255, 0.06)" : "rgba(13, 45, 107, 0.04)";
      const waveStroke = isDark ? "rgba(0, 212, 255, 0.12)" : "rgba(13, 45, 107, 0.08)";

      ctx.fillStyle = waveColor;
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x += 15) {
        const y = height - 45 + Math.sin(x * 0.004 + time * 1.5) * 15 + Math.cos(x * 0.002 + time * 0.8) * 8;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = waveStroke;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      for (let x = 0; x <= width; x += 15) {
        const y = height - 45 + Math.sin(x * 0.004 + time * 1.5) * 15 + Math.cos(x * 0.002 + time * 0.8) * 8;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Update and draw ripples
      ripples = ripples.filter((r) => {
        r.radius += r.speed;
        r.opacity -= 0.008;

        if (r.opacity <= 0) return false;

        // Draw primary ring
        ctx.strokeStyle = isDark
          ? `rgba(0, 212, 255, ${r.opacity * 0.7})`
          : `rgba(13, 45, 107, ${r.opacity * 0.6})`;
        ctx.lineWidth = 2.0;
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
          ctx.arc(r.x, r.y, r.radius - 10, 0, Math.PI * 2);
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
      className="pointer-events-none fixed inset-0 w-screen h-screen z-40 block"
    />
  );
}
