import React from 'react';
import { SqlPlayground } from './SqlPlayground';
import { KpiScenarioSimulator } from './KpiScenarioSimulator';
import { FlaskConical } from 'lucide-react';

export const DataLabSection: React.FC = () => {
  return (
    <section id="lab" className="py-24 relative bg-dark-bg/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <FlaskConical size={14} />
            <span>04 // INTERACTIVE LAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The Data Analytics Laboratory
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Experience live data modeling in the browser. Run live SQL queries across Timothy&apos;s retail &amp; workforce datasets and test scenario simulations.
          </p>
        </div>

        {/* Lab Grid */}
        <div className="space-y-10">
          <SqlPlayground />
          <KpiScenarioSimulator />
        </div>

      </div>
    </section>
  );
};
