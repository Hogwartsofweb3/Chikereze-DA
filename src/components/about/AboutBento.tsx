import React from 'react';
import { 
  GraduationCap, 
  Award, 
  MapPin,
  Cpu,
  HelpCircle,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

export const AboutBento: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <span>01 // BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Timothy John Chikereze
          </h2>
          <p className="mt-3 text-slate-400 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
            Bridging rigorous computer science foundations with commercial analytics, SQL data modeling, and executive business intelligence.
          </p>
        </div>

        {/* 3-Pillar Methodology Banner (Aditya Ranjan / beingbrute.github.io Inspiration) */}
        <div className="p-6 rounded-3xl bg-dark-surface/60 dark:bg-dark-surface/60 bg-slate-100 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
              <HelpCircle size={18} />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-cyan-400 uppercase">Pillar 01</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Start with the Business Question</div>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Frame the commercial dilemma first: Why is churn occurring? Where is revenue leaking? What decisions hinge on the numbers?
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0 border border-teal-500/20">
              <ShieldCheck size={18} />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-teal-400 uppercase">Pillar 02</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Make the Numbers Trustworthy</div>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Relentlessly scrub dirty data: resolve orphan keys, intercept corrupt quantity entries, and impute missing values with statistical discipline.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-emerald-400 uppercase">Pillar 03</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Make the Insight Usable</div>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Build intuitive Power BI dashboards and write concise executive memos that enable leadership to make confident commercial bets.
              </p>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Story Card (Spans 8 cols) */}
          <div className="md:col-span-8 p-7 rounded-3xl bg-dark-surface/90 dark:bg-dark-surface/90 bg-white border border-slate-800 dark:border-slate-800 border-slate-200 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/15 transition-all duration-500" />

            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-teal-400 mb-4">
                <Cpu size={15} />
                <span>DATA PHILOSOPHY</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-snug">
                Turning Messy Records into Predictable Revenue &amp; Strategic Decisions
              </h3>
              <p className="text-slate-400 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                I am a Data Analyst and Computer Science graduate from the <strong className="text-cyan-400 font-semibold">Federal University of Technology, Owerri (FUTO)</strong>, based in Imo State, Nigeria. 
              </p>
              <p className="text-slate-400 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Through my intensive training at the <strong className="text-teal-400 font-semibold">TechBridge Data Analytics Fellowship</strong>, I developed a specialty in diagnosing high-stakes organizational challenges—from auditing multi-million naira retail transactional discrepancies to isolating the exact satisfaction inflection points causing employee turnover.
              </p>
            </div>
          </div>

          {/* Education & Credentials Card (Spans 4 cols) */}
          <div className="md:col-span-4 p-7 rounded-3xl bg-dark-surface/90 dark:bg-dark-surface/90 bg-white border border-slate-800 dark:border-slate-800 border-slate-200 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4">
                <GraduationCap size={16} />
                <span>CREDENTIALS</span>
              </div>
              <div className="space-y-5">
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    Federal University of Technology, Owerri (FUTO)
                  </div>
                  <div className="text-xs text-cyan-400 font-mono mt-0.5">
                    B.Tech in Computer Science
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-1">
                    <MapPin size={11} />
                    <span>Owerri, Imo State, Nigeria</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <Award size={14} className="text-amber-400" />
                    <span>TechBridge Data Analytics Fellow</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Completed 8 rigorous analytical tasks spanning relational SQL query suites, advanced Excel modeling, and Power BI capstone deployment.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">Degree Status</span>
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[11px] font-semibold border border-cyan-500/20">
                Verified Alum
              </span>
            </div>
          </div>

          {/* Metric Stats Banner (Spans 12 cols) */}
          <div className="md:col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-dark-surface/80 dark:bg-dark-surface/80 bg-white border border-slate-800 dark:border-slate-800 border-slate-200 flex flex-col items-center justify-center text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono mb-1">
                12,000+
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                Records Cleaned &amp; Modeled
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-dark-surface/80 dark:bg-dark-surface/80 bg-white border border-slate-800 dark:border-slate-800 border-slate-200 flex flex-col items-center justify-center text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-teal-400 font-mono mb-1">
                ₦42.01M
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                Retail Revenue Audited
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-dark-surface/80 dark:bg-dark-surface/80 bg-white border border-slate-800 dark:border-slate-800 border-slate-200 flex flex-col items-center justify-center text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono mb-1">
                20
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                Global Customer Markets Mapped
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-dark-surface/80 dark:bg-dark-surface/80 bg-white border border-slate-800 dark:border-slate-800 border-slate-200 flex flex-col items-center justify-center text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 font-mono mb-1">
                100%
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                Business Decision Focus
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
