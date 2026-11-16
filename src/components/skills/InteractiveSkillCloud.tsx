import React, { useEffect, useRef, useState } from 'react';
import { allSkillTags } from '../../data/skills';

interface InteractiveSkillCloudProps {
  isDark?: boolean;
}

export const InteractiveSkillCloud: React.FC<InteractiveSkillCloudProps> = ({ isDark = true }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [tags, setTags] = useState<{ text: string; x: number; y: number; z: number }[]>([]);
  const rotationRef = useRef({ x: 0.003, y: 0.003 });
  const isDragging = useRef(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const count = allSkillTags.length;
    const initialTags = allSkillTags.map((text, i) => {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      return {
        text,
        x: Math.cos(theta) * Math.sin(phi),
        y: Math.sin(theta) * Math.sin(phi),
        z: Math.cos(phi),
      };
    });
    setTags(initialTags);
  }, []);

  useEffect(() => {
    let animId: number;

    const animate = () => {
      setTags((prevTags) =>
        prevTags.map((tag) => {
          const radX = rotationRef.current.x;
          const y1 = tag.y * Math.cos(radX) - tag.z * Math.sin(radX);
          const z1 = tag.z * Math.cos(radX) + tag.y * Math.sin(radX);

          const radY = rotationRef.current.y;
          const x2 = tag.x * Math.cos(radY) - z1 * Math.sin(radY);
          const z2 = z1 * Math.cos(radY) + tag.x * Math.sin(radY);

          return { ...tag, x: x2, y: y1, z: z2 };
        })
      );

      if (!isDragging.current) {
        rotationRef.current.x += (0.002 - rotationRef.current.x) * 0.05;
        rotationRef.current.y += (0.002 - rotationRef.current.y) * 0.05;
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - lastMousePos.current.x;
    const dy = e.clientY - lastMousePos.current.y;
    rotationRef.current.y = dx * 0.0006;
    rotationRef.current.x = -dy * 0.0006;
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const radius = 135;

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="relative w-full h-[360px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className={`w-56 h-56 rounded-full blur-2xl ${isDark ? 'bg-cyan-500/5' : 'bg-cyan-500/10'}`} />
      </div>

      <div className="relative w-full h-full flex items-center justify-center">
        {tags.map((tag, idx) => {
          const fov = 320;
          const scale = fov / (fov + tag.z * radius);
          const alpha = Math.max(0.2, (tag.z + 1) / 2);
          const px = tag.x * radius * scale;
          const py = tag.y * radius * scale;
          const isFront = tag.z > 0.2;

          return (
            <div
              key={idx}
              className={`absolute transition-transform duration-75 text-xs font-mono font-semibold px-2.5 py-1 rounded-full border ${
                isFront
                  ? 'bg-white dark:bg-dark-surface text-cyan-700 dark:text-cyan-400 border-cyan-400 dark:border-cyan-500/50 shadow-sm dark:shadow-cyan-glow'
                  : 'bg-slate-100/90 dark:bg-dark-surface/50 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800'
              }`}
              style={{
                transform: `translate3d(${px}px, ${py}px, 0) scale(${scale})`,
                opacity: alpha,
                zIndex: Math.round(scale * 100),
              }}
            >
              {tag.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};
