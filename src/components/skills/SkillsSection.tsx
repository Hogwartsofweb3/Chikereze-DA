import React, { useState } from 'react';
import { skillCategories } from '../../data/skills';
import { InteractiveSkillCloud } from './InteractiveSkillCloud';
import { CompetencyRadar } from './CompetencyRadar';
import { DataPipelineDiagram } from '../common/DataPipelineDiagram';
import { Database, BarChart2, FileSpreadsheet, LineChart, Globe, Radar } from 'lucide-react';

interface SkillsSectionProps {
  isDark?: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ isDark = true }) => {
  const [visualMode, setVisualMode] = useState<'radar' | 'sphere'>('radar');

  const getIcon = (id: string) => {
    switch (id) {
      case 'sql':
        return <Database size={20} className="text-cyan-400" />;
      case 'bi':
        return <BarChart2 size={20} className="text-teal-400" />;
      case 'excel':
        return <FileSpreadsheet size={20} className="text-emerald-400" />;
      default:
        return <LineChart size={20} className="text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-dark-bg/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <span>02 // CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Skill Matrix &amp; Radar
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Battle-tested analytical competencies backed by verified project proofs, capstone audits, and data models.
          </p>
        </div>

        {/* 2-Column Layout: Grid of Categories + Radar / 3D Tag Sphere */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 4 Core Category Cards (Spans 7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {skillCategories.map((category) => (
              <div
                key={category.id}
                className="p-6 rounded-2xl bg-dark-surface/90 dark:bg-dark-surface/90 bg-white border border-slate-800 dark:border-slate-800 border-slate-200 shadow-lg flex flex-col justify-between hover:border-cyan-500/40 transition-all hover:scale-[1.01]"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4">
                    {getIcon(category.id)}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-300 leading-relaxed mb-4">
                    {category.description}
                  </p>
                </div>

                <div>
                  {/* Proof pill */}
                  <div className="p-2.5 rounded-xl bg-dark-bg/60 dark:bg-dark-bg/60 bg-slate-50 border border-slate-800/80 mb-3 text-[11px] text-slate-400 leading-snug">
                    <span className="text-cyan-400 font-semibold">Proof: </span>
                    {category.proof}
                  </div>

                  {/* Stack pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {category.stack.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 text-[10px] font-mono border border-cyan-500/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Toggleable Visuals (Radar Chart vs 3D Tag Sphere) */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-dark-surface/90 dark:bg-dark-surface/90 bg-white border border-slate-800 dark:border-slate-800 border-slate-200 shadow-xl flex flex-col items-center">
            
            {/* View Switcher Header */}
            <div className="w-full flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Visual Analytics
              </span>

              <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-900 border border-slate-800">
                <button
                  onClick={() => setVisualMode('radar')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                    visualMode === 'radar'
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Radar size={13} />
                  <span>Competency Radar</span>
                </button>
                <button
                  onClick={() => setVisualMode('sphere')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                    visualMode === 'sphere'
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Globe size={13} />
                  <span>3D Tag Sphere</span>
                </button>
              </div>
            </div>

            {/* Display Visual */}
            {visualMode === 'radar' ? (
              <CompetencyRadar />
            ) : (
              <InteractiveSkillCloud isDark={isDark} />
            )}

            <div className="w-full pt-4 border-t border-slate-800/80 text-center">
              <p className="text-xs text-slate-400">
                Balanced between relational database querying, statistical cleaning, and executive Power BI storytelling.
              </p>
            </div>
          </div>

        </div>

        {/* End-to-End Pipeline Lineage Architecture */}
        <DataPipelineDiagram />

      </div>
    </section>
  );
};
