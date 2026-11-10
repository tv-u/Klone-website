import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  baseSize: number;
  color: string;
  vx: number;
  vy: number;
  alpha: number;
  alphaSpeed: number;
  glow: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  color: string;
  opacity: number;
  active: boolean;
}

export const ColorfulStarfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    const colors = [
      '#ff2e93', // Neon Pink
      '#00ff88', // Cyber Green
      '#ffe600', // Electric Yellow
      '#ff007f', // Deep Pink
      '#00f0ff', // Neon Cyan
      '#ffffff', // Crisp White
      '#ffd700', // Warm Gold
      '#26ffdf', // Mint Green
    ];

    let stars: Star[] = [];
    const STAR_COUNT = Math.min(180, Math.floor((width * height) / 8000));

    const initStars = () => {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 2 + 0.8;
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size,
          baseSize: size,
          color,
          vx: (Math.random() - 0.5) * 0.4 + 0.15, // Gentle drifting running motion
          vy: (Math.random() - 0.5) * 0.3 + 0.1,
          alpha: Math.random() * 0.7 + 0.3,
          alphaSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
          glow: Math.random() * 8 + 4,
        });
      }
    };

    // Shooting stars system
    let shootingStars: ShootingStar[] = [];
    const maybeSpawnShootingStar = () => {
      if (Math.random() < 0.03 && shootingStars.length < 3) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        shootingStars.push({
          x: Math.random() * width * 0.8,
          y: Math.random() * (height * 0.4),
          length: Math.random() * 120 + 70,
          speed: Math.random() * 8 + 7,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2, // ~45 degrees
          color,
          opacity: 1,
          active: true,
        });
      }
    };

    initStars();

    let mouseX = width / 2;
    let mouseY = height / 2;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.fillStyle = '#050508';
      ctx.fillRect(0, 0, width, height);

      // Render drifting and twinkling stars
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Move star (running drift)
        s.x += s.vx;
        s.y += s.vy;

        // Wrap around borders
        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        // Twinkle
        s.alpha += s.alphaSpeed;
        if (s.alpha > 0.95) {
          s.alpha = 0.95;
          s.alphaSpeed = -Math.abs(s.alphaSpeed);
        } else if (s.alpha < 0.2) {
          s.alpha = 0.2;
          s.alphaSpeed = Math.abs(s.alphaSpeed);
        }

        // Slight parallax interaction with mouse
        const dx = mouseX - s.x;
        const dy = mouseY - s.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let curSize = s.baseSize;
        if (dist < 120) {
          curSize = s.baseSize * (1 + (1 - dist / 120) * 0.8);
        }

        ctx.save();
        ctx.shadowBlur = s.glow;
        ctx.shadowColor = s.color;
        ctx.globalAlpha = s.alpha;
        ctx.fillStyle = s.color;

        ctx.beginPath();
        ctx.arc(s.x, s.y, curSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Render Shooting Stars
      maybeSpawnShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        if (!ss.active) {
          shootingStars.splice(i, 1);
          continue;
        }

        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.opacity -= 0.015;

        if (ss.opacity <= 0 || ss.x > width + 100 || ss.y > height + 100) {
          ss.active = false;
          continue;
        }

        ctx.save();
        ctx.globalAlpha = ss.opacity;
        ctx.shadowBlur = 12;
        ctx.shadowColor = ss.color;

        const grad = ctx.createLinearGradient(
          ss.x,
          ss.y,
          ss.x - Math.cos(ss.angle) * ss.length,
          ss.y - Math.sin(ss.angle) * ss.length
        );
        grad.addColorStop(0, ss.color);
        grad.addColorStop(1, 'transparent');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(
          ss.x - Math.cos(ss.angle) * ss.length,
          ss.y - Math.sin(ss.angle) * ss.length
        );
        ctx.stroke();

        // Bright star head
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="stars-canvas"
      aria-hidden="true"
    />
  );
};
