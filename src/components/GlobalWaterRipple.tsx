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
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (!mouse.active) {
        mouse.lastX = mouse.x;
        mouse.lastY = mouse.y;
        mouse.active = true;
      }

      const dist = Math.hypot(mouse.x - mouse.lastX, mouse.y - mouse.lastY);
      if (dist > 12) {
        ripples.push({
          x: mouse.x,
          y: mouse.y,
          radius: 2,
          maxRadius: Math.random() * 45 + 35,
          opacity: 0.7,
          speed: 1.2 + Math.random() * 0.8,
        });
        mouse.lastX = mouse.x;
        mouse.lastY = mouse.y;
      }
    };

    const handleClick = (e: MouseEvent) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 3,
        maxRadius: Math.random() * 100 + 100,
        opacity: 0.85,
        speed: 1.8,
      });
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 12,
        maxRadius: Math.random() * 80 + 80,
        opacity: 0.75,
        speed: 1.4,
      });
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 24,
        maxRadius: Math.random() * 60 + 60,
        opacity: 0.55,
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

      // Prominent, clearly visible bottom water waves (130px height)
      const waveColor1 = isDark ? "rgba(0, 212, 255, 0.08)" : "rgba(13, 45, 107, 0.05)";
      const waveColor2 = isDark ? "rgba(232, 119, 34, 0.05)" : "rgba(232, 119, 34, 0.035)";
      
      const strokeColor1 = isDark ? "rgba(0, 212, 255, 0.2)" : "rgba(13, 45, 107, 0.12)";
      const strokeColor2 = isDark ? "rgba(232, 119, 34, 0.12)" : "rgba(232, 119, 34, 0.08)";

      // Wave 1 (Deep Blue/Cyan Primary Wave)
      ctx.fillStyle = waveColor1;
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x += 15) {
        const y = height - 120 + Math.sin(x * 0.0035 + time * 1.3) * 22 + Math.cos(x * 0.0018 + time * 0.6) * 12;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = strokeColor1;
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      for (let x = 0; x <= width; x += 15) {
        const y = height - 120 + Math.sin(x * 0.0035 + time * 1.3) * 22 + Math.cos(x * 0.0018 + time * 0.6) * 12;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Wave 2 (Orange Accent Wave)
      ctx.fillStyle = waveColor2;
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x += 15) {
        const y = height - 90 + Math.sin(x * 0.0045 - time * 1.0) * 18 + Math.cos(x * 0.0022 - time * 0.5) * 8;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = strokeColor2;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      for (let x = 0; x <= width; x += 15) {
        const y = height - 90 + Math.sin(x * 0.0045 - time * 1.0) * 18 + Math.cos(x * 0.0022 - time * 0.5) * 8;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Update and draw ripples
      ripples = ripples.filter((r) => {
        r.radius += r.speed;
        r.opacity -= 0.006; // Fades out slowly (approx 3 seconds of persistence)

        if (r.opacity <= 0) return false;

        // Draw primary ring
        ctx.strokeStyle = isDark
          ? `rgba(0, 212, 255, ${r.opacity * 0.8})`
          : `rgba(13, 45, 107, ${r.opacity * 0.7})`;
        ctx.lineWidth = 2.0;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Draw secondary ring
        if (r.radius > 15) {
          ctx.strokeStyle = isDark
            ? `rgba(232, 119, 34, ${r.opacity * 0.45})`
            : `rgba(232, 119, 34, ${r.opacity * 0.35})`;
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
