import React, { useEffect, useRef } from 'react';
import { useMediaQuery } from '@/hooks/use-media-query';

const COLORS = ['#0952BD', '#A5BFF0', '#118CD6', '#1AAEE8', '#F2E8C9'];
const PARTICLE_COUNT = 750;

class LightParticle {
  x: number;
  y: number;
  radius: number;
  color: string;

  constructor(x: number, y: number, radius: number, color: string) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw(c: CanvasRenderingContext2D) {
    c.save();
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.shadowColor = this.color;
    c.shadowBlur = 15;
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
    c.restore();
  }

  update(c: CanvasRenderingContext2D) {
    this.draw(c);
  }
}

export function GalacticCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lightParticles: LightParticle[] = [];
    let timer = 0;
    let opacity = 1;
    let speed = 0.0005;
    let isMouseDown = false;
    let logicalWidth = window.innerWidth;
    let logicalHeight = window.innerHeight;

    const mouse = { x: logicalWidth / 2, y: logicalHeight / 2 };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      logicalWidth = window.innerWidth;
      logicalHeight = window.innerHeight;

      canvas.width = logicalWidth * dpr;
      canvas.height = logicalHeight * dpr;

      canvas.style.width = `${logicalWidth}px`;
      canvas.style.height = `${logicalHeight}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform before scaling
      ctx.scale(dpr, dpr);

      initializeParticles();
    };

    const initializeParticles = () => {
      lightParticles = [];
      const size = Math.max(logicalWidth, logicalHeight);
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const randomColorIndex = Math.floor(Math.random() * COLORS.length);
        const randomRadius = Math.random() * 2;
        const x = Math.random() * (size + 200) - (size + 200) / 2;
        const y = Math.random() * (size + 200) - (size + 200) / 2;
        lightParticles.push(new LightParticle(x, y, randomRadius, COLORS[randomColorIndex]));
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      ctx.save();

      if (!prefersReducedMotion) {
        if (isMouseDown) {
          const desiredOpacity = 0.01;
          opacity += (desiredOpacity - opacity) * 0.03;
          const desiredSpeed = 0.012;
          speed += (desiredSpeed - speed) * 0.01;
        } else {
          const originalOpacity = 1;
          opacity += (originalOpacity - opacity) * 0.01;
          const originalSpeed = 0.00125;
          speed += (originalSpeed - speed) * 0.01;
        }
      } else {
        speed = 0;
        opacity = 1;
      }

      ctx.fillStyle = `rgba(10, 10, 10, ${opacity})`;
      ctx.fillRect(0, 0, logicalWidth, logicalHeight);

      ctx.translate(logicalWidth / 2, logicalHeight / 2);
      ctx.rotate(timer);
      timer += speed;

      lightParticles.forEach((particle) => particle.update(ctx));

      ctx.restore();
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX - logicalWidth / 2;
      mouse.y = event.clientY - logicalHeight / 2;
    };

    const handleMouseDown = () => (isMouseDown = true);
    const handleMouseUp = () => (isMouseDown = false);

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Touch support mapping for mobile parity
    window.addEventListener('touchstart', handleMouseDown, { passive: true });
    window.addEventListener('touchend', handleMouseUp, { passive: true });

    resizeCanvas();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchstart', handleMouseDown);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      id="galactic-canvas"
      className="fixed inset-0 block h-full w-full pointer-events-none select-none bg-[#0A0A0A]"
      style={{ zIndex: -1 }}
    />
  );
}
export default GalacticCanvas;
