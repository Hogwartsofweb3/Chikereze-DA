import React, { useState } from 'react';
import { Database, ShieldCheck, Cpu, BarChart3, TrendingUp, ChevronRight } from 'lucide-react';

interface PipelineStage {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  details: string[];
  deliverable: string;
}

const STAGES: PipelineStage[] = [
  {
    id: 'ingestion',
    stepNumber: '01',
    title: 'Raw Data Ingestion',
    subtitle: 'Multi-table spreadsheets & databases',
    icon: <Database size={18} className="text-cyan-400" />,
    details: [
      'Ingesting messy transactional exports & HR personnel rosters (12,000+ rows).',
      'Auditing schema constraints, column formats, and character encoding.',
    ],
    deliverable: 'Raw staging tables with schema validation check.',
  },
  {
    id: 'cleansing',
    stepNumber: '02',
    title: 'Data Cleansing & Imputation',
    subtitle: 'Statistical imputation & anomaly resolution',
    icon: <ShieldCheck size={18} className="text-teal-400" />,
    details: [
      'Intercepting -2 quantity anomaly on T0120 saving ₦900,000 discrepancy.',
      'Imputing 211 missing ages & 24 null salaries with departmental averages.',
      'Purging unmatched foreign keys (C999, P999).',
    ],
    deliverable: 'Pristine, normalized dataset with 99.8% quality score.',
  },
  {
    id: 'modeling',
    stepNumber: '03',
    title: 'Relational SQL Modeling',
    subtitle: 'Star schemas & query optimization',
    icon: <Cpu size={18} className="text-emerald-400" />,
    details: [
      'Structuring normalized entity relationships between Customers, Products & Transactions.',
      'Crafting CTEs, window functions, and regional aggregation queries.',
    ],
    deliverable: 'Relational data model ready for high-performance querying.',
  },
  {
    id: 'bi',
    stepNumber: '04',
    title: 'Power BI & DAX Metrics',
    subtitle: 'Executive KPIs & interactive slicers',
    icon: <BarChart3 size={18} className="text-blue-400" />,
    details: [
      'Formulating dynamic DAX measures for Attrition Rate % and Net Sales NGN.',
      'Building department drill-downs and turnover risk heatmaps.',
    ],
    deliverable: 'Interactive Power BI Executive Dashboard.',
  },
  {
    id: 'impact',
    stepNumber: '05',
    title: 'Commercial Decision & Impact',
    subtitle: 'Actionable executive memos & ROI',
    icon: <TrendingUp size={18} className="text-amber-400" />,
    details: [
      'Reconciling ₦42,013,200 total verified revenue across 147 orders.',
      'Providing early-warning churn signals to reduce costly employee burnout.',
    ],
    deliverable: 'Strategic leadership memos & resource reallocation.',
  },
];

export const DataPipelineDiagram: React.FC = () => {
  const [activeStage, setActiveStage] = useState<string>('cleansing');
  const currentStage = STAGES.find((s) => s.id === activeStage) || STAGES[1];

  return (
    <div className="rounded-3xl bg-dark-surface/90 dark:bg-dark-surface/90 bg-white border border-slate-800 dark:border-slate-800 border-slate-200 shadow-xl p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
            End-to-End Methodology
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            Data Lineage &amp; Transformation Architecture
          </h3>
        </div>
        <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 self-start sm:self-auto">
          Click any phase to inspect
        </span>
      </div>

      {/* Interactive Step Timeline */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
        {STAGES.map((stage, idx) => {
          const isActive = stage.id === activeStage;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStage(stage.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                isActive
                  ? 'bg-dark-bg border-cyan-500 shadow-cyan-glow'
                  : 'bg-dark-surface/60 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-bold text-slate-500">{stage.stepNumber}</span>
                <div className={`p-1.5 rounded-lg ${isActive ? 'bg-cyan-500/20' : 'bg-slate-900'}`}>
                  {stage.icon}
                </div>
              </div>
              <div>
                <div
                  className={`text-xs font-bold leading-tight ${
                    isActive ? 'text-cyan-400' : 'text-slate-300'
                  }`}
                >
                  {stage.title}
                </div>
                <div className="text-[10px] text-slate-500 mt-1 line-clamp-1">{stage.subtitle}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Deep-Dive Banner */}
      <div className="p-5 rounded-2xl bg-dark-bg/80 border border-slate-800/90 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-cyan-400">
              PHASE {currentStage.stepNumber} //
            </span>
            <span className="text-sm font-bold text-white">{currentStage.title}</span>
          </div>
          <ul className="space-y-1.5 text-xs text-slate-300">
            {currentStage.details.map((detail, dIdx) => (
              <li key={dIdx} className="flex items-start gap-2">
                <ChevronRight size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 shrink-0 md:max-w-xs">
          <div className="text-[10px] uppercase font-mono text-cyan-400 font-bold mb-1">
            Verified Deliverable
          </div>
          <div className="text-xs text-slate-300 font-medium">
            {currentStage.deliverable}
          </div>
        </div>
      </div>
    </div>
  );
};
