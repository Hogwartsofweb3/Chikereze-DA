import React, { useEffect, useRef } from 'react';

interface Point3D {
  x: number;
  y: number;
  z: number;
  radius: number;
}

interface DataSphereCanvasProps {
  isDark?: boolean;
}

export const DataSphereCanvas: React.FC<DataSphereCanvasProps> = ({ isDark = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Handle high-DPI displays
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = container.clientWidth;
      height = container.clientHeight || width;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    // Generate 3D sphere points (Fibonacci Sphere algorithm)
    const numPoints = 85;
    const points: Point3D[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      points.push({
        x,
        y,
        z,
        radius: Math.random() * 1.5 + 2,
      });
    }

    let angleX = 0;
    let angleY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / width - 0.5) * 2;
      const ny = ((e.clientY - rect.top) / height - 0.5) * 2;
      mousePos.current.targetX = nx * 0.4;
      mousePos.current.targetY = ny * 0.4;
    };

    window.addEventListener('mousemove', handlePointerMove);

    // Animation Loop
    const render = () => {
      // Smooth mouse interpolation
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.05;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.05;

      angleY += 0.004 + mousePos.current.x * 0.02;
      angleX += 0.002 + mousePos.current.y * 0.015;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const sphereRadius = Math.min(width, height) * 0.38;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      // Project points to 2D
      const projected = points.map((p) => {
        // Rotate around Y
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;

        // Rotate around X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        // Perspective projection
        const fov = 350;
        const distance = fov / (fov + z2 * sphereRadius);
        const px = cx + x1 * sphereRadius * distance;
        const py = cy + y2 * sphereRadius * distance;
        const scale = distance;
        const alpha = Math.max(0.15, Math.min(1, (z2 + 1) / 2));

        return { px, py, z: z2, scale, alpha, radius: p.radius * scale };
      });

      // Draw connection lines between nearby points
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < sphereRadius * 0.38) {
            const edgeAlpha = (1 - dist / (sphereRadius * 0.38)) * Math.min(p1.alpha, p2.alpha) * 0.35;
            ctx.strokeStyle = isDark
              ? `rgba(6, 182, 212, ${edgeAlpha})` // Cyan glow
              : `rgba(14, 116, 144, ${edgeAlpha * 0.8})`;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      projected.sort((a, b) => a.z - b.z); // Render back-to-front
      for (const p of projected) {
        ctx.beginPath();
        ctx.arc(p.px, p.py, p.radius, 0, Math.PI * 2);

        if (p.z > 0.4) {
          // Highlight prominent front nodes with teal glow
          ctx.fillStyle = isDark
            ? `rgba(45, 212, 191, ${p.alpha})`
            : `rgba(13, 148, 136, ${p.alpha})`;
          ctx.shadowColor = 'rgba(6, 182, 212, 0.7)';
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = isDark
            ? `rgba(6, 182, 212, ${p.alpha * 0.8})`
            : `rgba(8, 145, 178, ${p.alpha * 0.7})`;
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      }

      // Subtle center ring
      ctx.beginPath();
      ctx.arc(cx, cy, sphereRadius * 0.2, 0, Math.PI * 2);
      ctx.strokeStyle = isDark ? 'rgba(6, 182, 212, 0.08)' : 'rgba(8, 145, 178, 0.08)';
      ctx.lineWidth = 1;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handlePointerMove);
    };
  }, [isDark]);

  return (
    <div ref={containerRef} className="relative w-full aspect-square max-w-[540px] mx-auto select-none">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};
