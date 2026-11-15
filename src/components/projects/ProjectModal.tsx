import React, { useState } from 'react';
import { Project } from '../../types';
import { BeforeAfterDataDiff } from '../common/BeforeAfterDataDiff';
import { 
  X, 
  Github, 
  Terminal, 
  CheckCircle2, 
  Copy, 
  Check, 
  TrendingUp, 
  BarChart3,
  FileText,
  Code2,
  Award
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

type TabType = 'context' | 'pipeline' | 'deliverables';

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<TabType>('context');
  const [copiedCode, setCopiedCode] = useState(false);

  if (!project) return null;

  const copySnippet = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 1500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] rounded-3xl bg-dark-surface dark:bg-dark-surface bg-white border border-cyan-500/30 shadow-2xl overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-dark-surface/90 dark:bg-dark-surface/90 bg-white/90 backdrop-blur-md border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono font-medium border border-cyan-500/20 uppercase">
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">• {project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Header Title */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-2">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-cyan-400 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Screenshot Preview */}
          {project.image && (
            <div className="rounded-2xl border border-slate-800 overflow-hidden bg-slate-950 shadow-lg">
              <div className="px-4 py-2 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <BarChart3 size={14} className="text-cyan-400" />
                  <span>Executive Power BI Dashboard • Final View</span>
                </div>
                <span className="text-[10px] text-teal-400 font-semibold">11,991 Records</span>
              </div>
              <img
                src={project.image}
                alt={`${project.title} Dashboard`}
                className="w-full h-auto object-cover max-h-[360px]"
              />
            </div>
          )}

          {/* 3-Phase Navigation Tabs (Shaun Lin Inspiration) */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-950 border border-slate-800">
            <button
              onClick={() => setActiveTab('context')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeTab === 'context'
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText size={14} />
              <span>Phase 1: Context</span>
            </button>
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeTab === 'pipeline'
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code2 size={14} />
              <span>Phase 2: Technical Pipeline</span>
            </button>
            <button
              onClick={() => setActiveTab('deliverables')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeTab === 'deliverables'
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Award size={14} />
              <span>Phase 3: Impact &amp; ROI</span>
            </button>
          </div>

          {/* TAB 1: Business Context & Discovery */}
          {activeTab === 'context' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Key Metrics Banner */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-dark-bg dark:bg-dark-bg bg-slate-50 border border-slate-800/80 text-center"
                  >
                    <div className="text-[10px] uppercase font-mono text-slate-500">{m.label}</div>
                    <div className="text-base sm:text-lg font-bold text-cyan-400 font-mono mt-0.5">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Methodology Paragraphs */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Problem Framing &amp; Objective
                </h4>
                {project.description.map((p, idx) => (
                  <p key={idx} className="text-sm text-slate-300 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Discovery Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Initial Hypothesis &amp; Findings
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {project.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Technical Pipeline, SQL/DAX & Data Diff */}
          {activeTab === 'pipeline' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Interactive Before/After Data Diff */}
              <BeforeAfterDataDiff />

              {/* Technical Query / DAX Measure Snippet */}
              {(project.sqlSnippet || project.daxSnippet) && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                      <Terminal size={14} />
                      <span>{project.sqlSnippet ? 'Relational SQL Query' : 'DAX Measure Specification'}</span>
                    </span>
                    <button
                      onClick={() => copySnippet(project.sqlSnippet || project.daxSnippet || '')}
                      className="flex items-center gap-1 text-[11px] hover:text-cyan-400 transition-colors"
                    >
                      {copiedCode ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                      <span>{copiedCode ? 'Copied' : 'Copy Query'}</span>
                    </button>
                  </div>

                  <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300 overflow-x-auto leading-relaxed">
                    <code>{project.sqlSnippet || project.daxSnippet}</code>
                  </pre>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Deliverables & ROI Impact */}
          {activeTab === 'deliverables' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Commercial Impact Callout */}
              <div className="p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <TrendingUp size={18} />
                  <span>Executive &amp; Commercial ROI</span>
                </div>
                <p className="leading-relaxed text-sm">{project.businessImpact}</p>
              </div>

              {/* Technologies */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Full Technology Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-dark-bg text-cyan-300 text-xs font-mono border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950/70 border-t border-slate-800 flex items-center justify-between">
          <a
            href={project.links.github || 'https://github.com/Hogwartsofweb3/Chikereze-DA'}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-slate-200 hover:text-cyan-400 hover:bg-slate-700 text-xs font-semibold transition-colors"
          >
            <Github size={15} />
            <span>View Source on GitHub</span>
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
};
