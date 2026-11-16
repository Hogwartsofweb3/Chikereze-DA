import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { scrollToSection } from '../../lib/utils';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-dark-bg text-slate-500 dark:text-slate-400 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Tagline */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 font-mono text-cyan-600 dark:text-cyan-400 font-bold">
            <Terminal size={15} />
            <span>Timothy John Chikereze</span>
          </div>
          <span className="hidden sm:inline text-slate-300 dark:text-slate-600">•</span>
          <span className="text-slate-500">SQL, Analytics &amp; Business Impact</span>
        </div>

        {/* Center: Tech stats pill */}
        <div className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
          <span>Built with React, Vite &amp; Data Canvas</span>
        </div>

        {/* Right: Back to top */}
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors border border-slate-200 dark:border-transparent"
        >
          <span>Back to top</span>
          <ArrowUp size={14} />
        </button>

      </div>
    </footer>
  );
};
