import React, { useState } from 'react';

interface Metric {
  name: string;
  value: number; // 0 to 100
  description: string;
}

const METRICS: Metric[] = [
  { name: 'SQL & Querying', value: 95, description: 'CTEs, window functions, complex joins, sub-millisecond aggregations.' },
  { name: 'Power BI & DAX', value: 92, description: 'Star schemas, calculated measures, interactive executive KPI slicers.' },
  { name: 'Data Cleaning', value: 96, description: 'Imputation logic, anomaly quarantine, referential integrity audits.' },
  { name: 'Advanced Excel', value: 94, description: 'XLOOKUP, nested matrix formulas, dynamic arrays, scenario planning.' },
  { name: 'Business Strategy', value: 88, description: 'Translating raw datasets into quantifiable revenue growth memos.' },
  { name: 'Relational Schemas', value: 90, description: 'Entity relationship modeling, normalization, foreign key consistency.' },
];

export const CompetencyRadar: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<Metric | null>(null);

  const size = 320;
  const center = size / 2;
  const radius = 105;
  const totalPoints = METRICS.length;

  // Compute vertices on polygon
  const getCoordinates = (value: number, index: number) => {
    const angle = (Math.PI * 2 / totalPoints) * index - Math.PI / 2;
    const r = (value / 100) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  // Background grid levels
  const levels = [25, 50, 75, 100];

  const polygonPath = METRICS.map((m, i) => {
    const { x, y } = getCoordinates(m.value, i);
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ') + ' Z';

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="w-full h-full overflow-visible select-none"
        >
          {/* Background Concentric Rings */}
          {levels.map((lvl, lIdx) => {
            const levelPoints = METRICS.map((_, i) => {
              const { x, y } = getCoordinates(lvl, i);
              return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
            }).join(' ') + ' Z';

            return (
              <path
                key={lIdx}
                d={levelPoints}
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1"
              />
            );
          })}

          {/* Radial Spokes */}
          {METRICS.map((_, i) => {
            const { x, y } = getCoordinates(100, i);
            return (
              <line
                key={i}
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1"
              />
            );
          })}

          {/* Shaded Radar Area */}
          <path
            d={polygonPath}
            fill="rgba(6, 182, 212, 0.22)"
            stroke="#06b6d4"
            strokeWidth="2.5"
            className="transition-all duration-300 drop-shadow-[0_0_12px_rgba(6,182,212,0.5)]"
          />

          {/* Interactive Data Points */}
          {METRICS.map((m, i) => {
            const { x, y } = getCoordinates(m.value, i);
            const isHovered = activeMetric?.name === m.name;

            return (
              <g
                key={i}
                className="cursor-pointer"
                onMouseEnter={() => setActiveMetric(m)}
                onMouseLeave={() => setActiveMetric(null)}
              >
                <circle
                  cx={x}
                  cy={y}
                  r={isHovered ? 6 : 4}
                  fill={isHovered ? '#14b8a6' : '#06b6d4'}
                  stroke="#080a0f"
                  strokeWidth="2"
                  className="transition-all duration-200"
                />
              </g>
            );
          })}

          {/* Labels */}
          {METRICS.map((m, i) => {
            const labelCoord = getCoordinates(118, i);
            const isHovered = activeMetric?.name === m.name;

            return (
              <text
                key={i}
                x={labelCoord.x}
                y={labelCoord.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className={`text-[10px] font-mono transition-colors ${
                  isHovered ? 'fill-cyan-400 font-bold' : 'fill-slate-400'
                }`}
              >
                {m.name}
              </text>
            );
          })}
        </svg>
      </div>

      {/* Metric Tooltip Description */}
      <div className="w-full mt-2 p-3 rounded-xl bg-dark-bg/80 border border-slate-800 text-center min-h-[58px] flex flex-col justify-center">
        {activeMetric ? (
          <div>
            <div className="text-xs font-mono font-bold text-cyan-400">
              {activeMetric.name} // {activeMetric.value}% Proficiency
            </div>
            <div className="text-[11px] text-slate-300 mt-0.5">{activeMetric.description}</div>
          </div>
        ) : (
          <div className="text-[11px] text-slate-500 font-mono">
            Hover over any vertex to inspect core competency breakdown
          </div>
        )}
      </div>
    </div>
  );
};
