import React from 'react';
import { TrendingUp, Users, Database } from 'lucide-react';

interface Floating3DCardsProps {
  parallaxOffset: { x: number; y: number };
}

export const Floating3DCards: React.FC<Floating3DCardsProps> = ({ parallaxOffset }) => {
  return (
    <>
      {/* Card 1 - Top Left */}
      <div
        className="absolute -left-4 top-10 sm:left-2 sm:top-14 z-20 transition-transform duration-300 ease-out pointer-events-none"
        style={{
          transform: `translate3d(${parallaxOffset.x * 28}px, ${parallaxOffset.y * 22}px, 60px)`,
        }}
      >
        <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-white/95 dark:bg-dark-surface/90 backdrop-blur-md border border-slate-200 dark:border-cyan-500/30 shadow-lg dark:shadow-cyan-glow">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold">
            <TrendingUp size={18} />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-800 dark:text-slate-100">
              ₦42.0M+ Audited
            </div>
            <div className="text-[10px] text-cyan-600 dark:text-cyan-400 font-medium">Retail Capstone • SQL</div>
          </div>
        </div>
      </div>

      {/* Card 2 - Top Right */}
      <div
        className="absolute -right-2 top-4 sm:right-2 sm:top-8 z-20 transition-transform duration-300 ease-out pointer-events-none"
        style={{
          transform: `translate3d(${parallaxOffset.x * -24}px, ${parallaxOffset.y * 26}px, 90px)`,
        }}
      >
        <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-white/95 dark:bg-dark-surface/90 backdrop-blur-md border border-slate-200 dark:border-teal-500/30 shadow-lg dark:shadow-teal-glow">
          <div className="w-9 h-9 rounded-xl bg-teal-500/10 dark:bg-teal-500/15 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
            <Users size={18} />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-800 dark:text-slate-100">
              11,990+ Employees
            </div>
            <div className="text-[10px] text-teal-600 dark:text-teal-400 font-medium">HR Churn • Power BI</div>
          </div>
        </div>
      </div>

      {/* Card 3 - Bottom Right */}
      <div
        className="absolute right-0 bottom-12 sm:right-6 sm:bottom-16 z-20 transition-transform duration-300 ease-out pointer-events-none hidden sm:block"
        style={{
          transform: `translate3d(${parallaxOffset.x * 20}px, ${parallaxOffset.y * -20}px, 45px)`,
        }}
      >
        <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-white/95 dark:bg-dark-surface/90 backdrop-blur-md border border-slate-200 dark:border-cyan-500/20 shadow-lg">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold">
            <Database size={18} />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-800 dark:text-slate-100">
              8,000 Customers
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">20 Global Markets</div>
          </div>
        </div>
      </div>
    </>
  );
};
