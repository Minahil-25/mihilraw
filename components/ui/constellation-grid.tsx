'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  radius: number;
  label: string;
  pulse: number;
  colorType: 'yellow' | 'blue';
}

interface ConstellationGridProps {
  className?: string;
  showOverlayText?: boolean;
  transparentBackground?: boolean;
}

export default function ConstellationGrid({
  className = '',
  showOverlayText = true,
  transparentBackground = false
}: ConstellationGridProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  // Sync theme preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Mouse velocity & inertial tracking
    const mouse = {
      x: -1000,
      y: -1000,
      prevX: -1000,
      prevY: -1000,
      vx: 0,
      vy: 0,
      radius: 220,
    };

    let nodes: Node[] = [];

    const initNodes = (w: number, h: number) => {
      nodes = [];
      const spacing = 48; // Crisp, balanced grid spacing
      const startX = -spacing;
      const startY = -spacing;
      const endX = w + spacing * 2;
      const endY = h + spacing * 2;

      let colIdx = 0;
      for (let x = startX; x <= endX; x += spacing) {
        let rowIdx = 0;
        for (let y = startY; y <= endY; y += spacing) {
          nodes.push({
            x,
            y,
            vx: 0,
            vy: 0,
            baseX: x,
            baseY: y,
            radius: Math.random() * 1.3 + 1.2,
            label: `${(colIdx * 7).toString(16).toUpperCase()}:${(rowIdx * 11).toString(16).toUpperCase()}`,
            pulse: Math.random() * Math.PI * 2,
            colorType: (colIdx + rowIdx) % 3 === 0 ? 'yellow' : 'blue',
          });
          rowIdx++;
        }
        colIdx++;
      }
    };

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(container.clientWidth || 0, window.innerWidth);
      height = Math.max(container.clientHeight || 0, container.offsetHeight || 0, 700);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      initNodes(width, height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    handleResize();

    const ro = new ResizeObserver(() => {
      handleResize();
    });
    ro.observe(container);
    if (container.parentElement) {
      ro.observe(container.parentElement);
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    let lastTime = performance.now();

    const render = (now: number) => {
      // Normalize dt across high-refresh displays
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      // Mouse velocity calculation
      mouse.vx = (mouse.x - mouse.prevX) / (dt * 1000 || 1);
      mouse.vy = (mouse.y - mouse.prevY) / (dt * 1000 || 1);
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;

      const speed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy);

      const nodeColor = isDarkMode ? '240, 240, 245' : '15, 23, 42';
      const yellowAccent = '245, 197, 24'; // mihilraw Yellow Accent
      const lightBlueAccent = '56, 189, 248'; // Sky Light Blue Accent

      if (transparentBackground) {
        ctx.clearRect(0, 0, width, height);
      } else {
        const bgColor = isDarkMode ? '#0a0a0b' : '#f8fafc';
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, width, height);
      }

      // Node Physics Engine (Hooke's Law Spring-Mass-Damping system)
      const SPRING_K = 18; // Spring stiffness
      const DAMPING = 0.82; // Velocity resistance

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.pulse += dt * 3;

        // Mouse distance vectors
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Dynamic shockwave repulsion based on cursor speed
        if (dist < mouse.radius && dist > 0) {
          const power = 1 - dist / mouse.radius;
          const force = power * (1500 + speed * 150);
          const angle = Math.atan2(dy, dx);

          // Impulse force pushing node away from cursor
          n.vx -= Math.cos(angle) * force * dt;
          n.vy -= Math.sin(angle) * force * dt;
        }

        // Calculate restoring force back to home anchor point (baseX, baseY)
        const homeDx = n.baseX - n.x;
        const homeDy = n.baseY - n.y;

        n.vx += homeDx * SPRING_K * dt;
        n.vy += homeDy * SPRING_K * dt;

        // Apply Damping
        n.vx *= DAMPING;
        n.vy *= DAMPING;

        // Integrate position
        n.x += n.vx * dt * 60;
        n.y += n.vy * dt * 60;
      }

      // Draw Connections (Optimized Distance Culling)
      const MAX_CONN_DIST = 75;
      const MAX_CONN_DIST_SQ = MAX_CONN_DIST * MAX_CONN_DIST;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const ndx = n.x - n2.x;
          const ndy = n.y - n2.y;
          const distSq = ndx * ndx + ndy * ndy;

          if (distSq < MAX_CONN_DIST_SQ) {
            const nDist = Math.sqrt(distSq);
            const baseConnAlpha = transparentBackground ? 0.35 : 0.22;
            const alpha = (1 - nDist / MAX_CONN_DIST) * (isDarkMode ? baseConnAlpha : 0.12);

            // Subtle colored connection tinting between yellow and light blue
            const connColor = n.colorType === 'yellow' ? yellowAccent : lightBlueAccent;
            ctx.strokeStyle = `rgba(${connColor}, ${alpha})`;
            ctx.lineWidth = transparentBackground ? 0.85 : 0.7;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      // Render Node Points & Interactive Highlights
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const isNear = dist < mouse.radius;

        const currentAccent = n.colorType === 'yellow' ? yellowAccent : lightBlueAccent;

        // Node base opacity pulse
        const minAlpha = transparentBackground ? 0.4 : 0.28;
        const baseAlpha = isNear ? 0.98 : minAlpha + Math.sin(n.pulse) * 0.15;

        ctx.fillStyle = isNear
          ? `rgba(${currentAccent}, ${baseAlpha})`
          : `rgba(${currentAccent}, ${baseAlpha * 0.65})`;

        const currentRadius = isNear
          ? n.radius * 2.2
          : n.radius + Math.sin(n.pulse) * 0.3;

        ctx.beginPath();
        ctx.arc(n.x, n.y, Math.max(0.5, currentRadius), 0, Math.PI * 2);
        ctx.fill();

        // High-tech Spatial Radar Rings on active proximity
        if (dist < 90) {
          const pulseRing = ((n.pulse * 20) % 30) + 4;
          const ringAlpha = (1 - pulseRing / 34) * 0.45;

          ctx.strokeStyle = `rgba(${currentAccent}, ${ringAlpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(n.x, n.y, pulseRing, 0, Math.PI * 2);
          ctx.stroke();

          // Hex Coordinate Readout
          ctx.font = '8px ui-monospace, SFMono-Regular, Consolas, monospace';
          ctx.fillStyle = `rgba(${currentAccent}, 0.85)`;
          ctx.fillText(n.label, n.x + 10, n.y - 10);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      ro.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDarkMode]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full ${transparentBackground ? 'min-h-0 bg-transparent' : 'min-h-[400px] bg-[#0a0a0b]'} overflow-hidden select-none ${className}`}
      style={{ isolation: 'isolate' }}
    >
      <canvas ref={canvasRef} className={`absolute inset-0 block ${transparentBackground ? 'cursor-default' : 'cursor-crosshair'} w-full h-full`} />

      {showOverlayText && (
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pointer-events-none mix-blend-difference text-white py-20">
          <h1 className="font-mono text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
            Constellation
          </h1>
          <p className="mt-4 font-mono text-xs md:text-sm max-w-lg opacity-70">
            High-velocity dynamic mesh. Sweep your cursor quickly across the grid to unleash kinetic shockwaves.
          </p>
        </div>
      )}
    </div>
  );
}
