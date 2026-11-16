import React, { useState } from 'react';
import { Sliders, DollarSign } from 'lucide-react';

export const KpiScenarioSimulator: React.FC = () => {
  const [satisfaction, setSatisfaction] = useState(0.55); // 0.1 to 1.0
  const [workloadProjects, setWorkloadProjects] = useState(5); // 2 to 9

  // Mathematical projection model based on Timothy's Task 7 findings:
  // Base turnover is 16.6%.
  // Lower satisfaction drives exponential churn.
  // Workload > 7 projects accelerates burnout by 40%.
  const satisfactionImpact = Math.pow(1 - satisfaction, 1.8) * 32;
  const burnoutPenalty = workloadProjects > 6 ? (workloadProjects - 6) * 3.5 : 0;
  const projectedTurnover = Math.max(4.5, Math.min(38.0, satisfactionImpact + burnoutPenalty));

  // Baseline was 16.6% (1,991 exits on 11,991 headcount)
  const baselineExits = 1991;
  const simulatedExits = Math.round((projectedTurnover / 100) * 11991);
  const exitsPrevented = Math.max(0, baselineExits - simulatedExits);
  const costPerExitNGN = 1500000; // estimated replacement cost ₦1.5M per employee
  const projectedSavingsNGN = exitsPrevented * costPerExitNGN;

  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-dark-surface/90 border border-slate-200 dark:border-slate-800 shadow-md">
      
      {/* Simulator Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <Sliders size={18} className="text-teal-500 dark:text-teal-400" />
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Predictive Retention Scenario Modeler
          </h3>
        </div>
        <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 px-2.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20">
          Simulated on 11,991 Headcount
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Sliders Controls (Spans 6 cols) */}
        <div className="md:col-span-6 space-y-6">
          
          {/* Slider 1: Satisfaction */}
          <div>
            <div className="flex items-center justify-between text-xs font-mono mb-2">
              <span className="text-slate-700 dark:text-slate-300">Target Satisfaction Score:</span>
              <span className="text-cyan-600 dark:text-cyan-400 font-bold">{(satisfaction * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="0.95"
              step="0.05"
              value={satisfaction}
              onChange={(e) => setSatisfaction(parseFloat(e.target.value))}
              className="w-full accent-cyan-500 dark:accent-cyan-400 bg-slate-200 dark:bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
              <span>Severe Dissatisfaction (10%)</span>
              <span>High Engagement (95%)</span>
            </div>
          </div>

          {/* Slider 2: Project Workload */}
          <div>
            <div className="flex items-center justify-between text-xs font-mono mb-2">
              <span className="text-teal-600 dark:text-teal-400 font-bold">{workloadProjects} Projects</span>
              <span className="text-slate-700 dark:text-slate-300">Max Projects Per Employee:</span>
            </div>
            <input
              type="range"
              min="2"
              max="9"
              step="1"
              value={workloadProjects}
              onChange={(e) => setWorkloadProjects(parseInt(e.target.value, 10))}
              className="w-full accent-teal-500 dark:accent-teal-400 bg-slate-200 dark:bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
              <span>Balanced (2)</span>
              <span>Critical Burnout Threshold (9+)</span>
            </div>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-2">
            *Based on Timothy&apos;s regression model isolating the employee satisfaction inflection threshold (&lt;0.4) and excessive workload burnout parameters.
          </p>
        </div>

        {/* Dynamic Model Output Cards (Spans 6 cols) */}
        <div className="md:col-span-6 grid grid-cols-2 gap-3">
          
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-bg/80 border border-slate-200 dark:border-slate-800 text-center">
            <div className="text-[10px] uppercase font-mono text-slate-500 mb-1">
              Projected Turnover
            </div>
            <div className="text-2xl font-extrabold text-cyan-600 dark:text-cyan-400 font-mono">
              {projectedTurnover.toFixed(1)}%
            </div>
            <div className="text-[10px] text-slate-400 mt-1">
              vs 16.6% Baseline
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-bg/80 border border-slate-200 dark:border-slate-800 text-center">
            <div className="text-[10px] uppercase font-mono text-slate-500 mb-1">
              Estimated Exits
            </div>
            <div className="text-2xl font-extrabold text-teal-600 dark:text-teal-400 font-mono">
              {simulatedExits.toLocaleString()}
            </div>
            <div className="text-[10px] text-slate-400 mt-1">
              Personnel / Year
            </div>
          </div>

          <div className="col-span-2 p-4 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-400/30 dark:border-cyan-500/30">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-bold">
                Projected Recruiting Cost Savings
              </span>
              <DollarSign size={16} className="text-emerald-500 dark:text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
              ₦{(projectedSavingsNGN / 1000000).toFixed(1)} Million
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {exitsPrevented > 0
                ? `Safeguarding ~${exitsPrevented} employees from preventable burnout.`
                : 'Increase satisfaction or reduce workload to unlock enterprise savings.'}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
