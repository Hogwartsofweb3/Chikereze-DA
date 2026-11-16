import React, { useState, useEffect } from 'react';
import { 
  Search, 
  X, 
  BarChart3, 
  Sun, 
  Moon, 
  Copy, 
  Check, 
  FlaskConical
} from 'lucide-react';
import { projects } from '../../data/projects';
import { scrollToSection } from '../../lib/utils';
import { Project } from '../../types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  toggleTheme: () => void;
  isDark: boolean;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectProject,
  toggleTheme,
  isDark,
}) => {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText('chikerezejt@gmail.com');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.stack.some((s) => s.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-xl rounded-2xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-cyan-500/30 shadow-2xl overflow-hidden flex flex-col max-h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
          <Search size={18} className="text-cyan-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search projects (e.g., SQL, Power BI, Capstone)..."
            className="w-full bg-transparent text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-3 space-y-4 text-xs font-sans">
          
          {/* Quick Actions */}
          <div>
            <div className="px-2 py-1 text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Quick Actions
            </div>
            <div className="space-y-1 mt-1">
              <button
                onClick={() => {
                  toggleTheme();
                  onClose();
                }}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 text-slate-700 dark:text-slate-300 transition-colors text-left"
              >
                <div className="flex items-center gap-2.5">
                  {isDark ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} className="text-cyan-400" />}
                  <span>Switch to {isDark ? 'Light' : 'Dark'} Mode</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">Theme</span>
              </button>

              <button
                onClick={copyEmail}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 text-slate-700 dark:text-slate-300 transition-colors text-left"
              >
                <div className="flex items-center gap-2.5">
                  {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                  <span>{copied ? 'Copied to clipboard!' : 'Copy Email Address'}</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">chikerezejt@gmail.com</span>
              </button>

              <button
                onClick={() => {
                  scrollToSection('lab');
                  onClose();
                }}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 text-slate-700 dark:text-slate-300 transition-colors text-left"
              >
                <div className="flex items-center gap-2.5">
                  <FlaskConical size={15} className="text-teal-400" />
                  <span>Launch Data Analytics Lab</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">SQL Runner</span>
              </button>
            </div>
          </div>

          {/* Projects & Case Studies */}
          <div>
            <div className="px-2 py-1 text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Case Studies &amp; Dashboards
            </div>
            <div className="space-y-1 mt-1">
              {filteredProjects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => {
                    onSelectProject(project);
                    onClose();
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 text-slate-700 dark:text-slate-300 transition-colors text-left"
                >
                  <div className="flex items-center gap-2.5">
                    <BarChart3 size={15} className="text-cyan-400 shrink-0" />
                    <div>
                      <div className="font-semibold">{project.title}</div>
                      <div className="text-[10px] text-slate-500">{project.tagline}</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 shrink-0">
                    {project.category.toUpperCase()}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Anchors */}
          <div>
            <div className="px-2 py-1 text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Jump To Section
            </div>
            <div className="grid grid-cols-2 gap-1 mt-1">
              {[
                { label: 'About & FUTO CS', id: 'about' },
                { label: 'Skills & Tools', id: 'skills' },
                { label: 'All Projects', id: 'projects' },
                { label: 'Data Lab', id: 'lab' },
                { label: 'Reviews', id: 'reviews' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    onClose();
                  }}
                  className="px-3 py-2 rounded-xl text-left hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 text-slate-500 dark:text-slate-400 transition-colors"
                >
                  # {item.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 py-2 bg-slate-100 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800 text-[10px] font-mono text-slate-500 flex items-center justify-between">
          <span>Press ESC to close</span>
          <span>Timothy John Chikereze • Portfolio</span>
        </div>
      </div>
    </div>
  );
};
