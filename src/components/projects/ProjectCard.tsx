import React from 'react';
import { Project } from '../../types';
import { ArrowUpRight, BarChart, Database, FileSpreadsheet, ShieldCheck } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'bi':
        return <BarChart size={14} className="text-cyan-400" />;
      case 'sql':
        return <Database size={14} className="text-teal-400" />;
      case 'financial':
        return <ShieldCheck size={14} className="text-emerald-400" />;
      default:
        return <FileSpreadsheet size={14} className="text-blue-400" />;
    }
  };

  return (
    <div
      onClick={() => onOpenModal(project)}
      className="group relative p-6 sm:p-7 rounded-3xl bg-dark-surface/90 dark:bg-dark-surface/90 bg-white border border-slate-800 dark:border-slate-800 border-slate-200 hover:border-cyan-500/50 shadow-xl transition-all duration-300 hover:shadow-cyan-glow cursor-pointer flex flex-col justify-between"
    >
      {/* Top Meta Header */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[11px] font-mono font-medium border border-cyan-500/20">
            {getCategoryIcon(project.category)}
            <span className="uppercase">{project.category}</span>
          </div>
          <span className="text-xs font-mono text-slate-500">{project.year}</span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors mb-2">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-300 line-clamp-2 mb-5 leading-relaxed">
          {project.summary}
        </p>

        {/* Highlight Metrics Grid */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {project.metrics.slice(0, 2).map((m, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded-xl bg-dark-bg/60 dark:bg-dark-bg/60 bg-slate-50 border border-slate-800/80"
            >
              <div className="text-[10px] uppercase font-mono text-slate-500">{m.label}</div>
              <div className="text-sm font-bold text-cyan-400 font-mono mt-0.5">{m.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer: Tech Stack + Open Button */}
      <div>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 text-[10px] font-mono"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-teal-300 transition-colors">
          <span>Read Full Case Study</span>
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
};
