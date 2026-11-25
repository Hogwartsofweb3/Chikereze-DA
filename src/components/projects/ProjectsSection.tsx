import React, { useState } from 'react';
import { projects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';
import { GitHubRepos } from './GitHubRepos';
import { Project, ProjectCategory } from '../../types';
import { Github } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'All Case Studies', value: 'all' },
    { label: 'Power BI Dashboards', value: 'bi' },
    { label: 'SQL & Relational', value: 'sql' },
    { label: 'Financial & Revenue', value: 'financial' },
    { label: 'Data Quality & Wrangling', value: 'quality' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2">
              <span>03 // PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Case Studies &amp; Dashboards
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
              Real business intelligence systems, relational query suites, and audited revenue reconciliations.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-dark-surface/90 border border-slate-200 dark:border-slate-800 shadow-sm self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === cat.value
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold shadow-sm dark:shadow-cyan-glow'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={onSelectProject}
            />
          ))}
        </div>

        {/* GitHub Live Repos — auto-updates when Tim pushes */}
        <div className="mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2">
                <Github size={13} />
                <span>Live from GitHub</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">
                More Work on GitHub
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 max-w-md">
                All public repositories, pulled live. Updates automatically whenever a new project is pushed.
              </p>
            </div>
            <a
              href="https://github.com/Chikerezejt"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 dark:bg-slate-700 text-slate-200 hover:text-cyan-400 hover:bg-slate-700 dark:hover:bg-slate-600 text-xs font-semibold transition-colors self-start sm:self-auto shrink-0"
            >
              <Github size={14} />
              View Full Profile
            </a>
          </div>
          <GitHubRepos />
        </div>

      </div>
    </section>
  );
};
