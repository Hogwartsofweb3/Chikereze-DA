import React from 'react';
import { 
  GraduationCap, 
  Award, 
  MapPin, 
  Cpu, 
  HelpCircle, 
  ShieldCheck, 
  TrendingUp,
  FileText,
  Briefcase,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export const AboutBento: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              <span>01 // BACKGROUND</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              About Timothy John Chikereze
            </h2>
            <p className="mt-3 text-slate-400 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
              Computer Science graduate from FUTO with 3+ years across data analytics, operational administration, and executive reporting.
            </p>
          </div>

          <a
            href="/Timothy_John_Chikereze_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 text-xs font-mono font-semibold transition-all self-start sm:self-auto"
            title="Open official CV in new tab"
          >
            <FileText size={15} />
            <span>Open Complete CV (PDF)</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {/* 3-Pillar Methodology Banner (Aditya Ranjan Inspiration) */}
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
                <span>DATA &amp; OPERATIONS PHILOSOPHY</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-snug">
                Turning Operational Data into Actionable Commercial Insights
              </h3>
              <p className="text-slate-400 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                I am a Computer Science graduate from the <strong className="text-cyan-400 font-semibold">Federal University of Technology, Owerri (FUTO)</strong>, with hands-on experience in data analysis, stakeholder administration, and operations.
              </p>
              <p className="text-slate-400 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                During my <strong className="text-teal-400 font-semibold">TechBridge 30-Day Intensive Data Analytics Internship</strong>, I tackled real-world relational data challenges—from auditing ₦42M+ in retail transactions to diagnosing employee retention trends across 11,990+ workforce records. Additionally, at <strong className="text-cyan-400 font-semibold">Yiaga Africa</strong>, I processed and verified electoral data for 50,000+ votes into the Election Result Analysis Dashboard (ERAD).
              </p>
            </div>

            {/* Experience Track Record Chips */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>TechBridge DA Intern (30-Day Intensive)</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 size={15} className="text-teal-400 shrink-0 mt-0.5" />
                <span>Yiaga Africa (50,000+ Votes ERAD)</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>NECA &amp; NNPC Operations</span>
              </div>
            </div>
          </div>

          {/* Education & Credentials Card (Spans 4 cols) */}
          <div className="md:col-span-4 p-7 rounded-3xl bg-dark-surface/90 dark:bg-dark-surface/90 bg-white border border-slate-800 dark:border-slate-800 border-slate-200 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4">
                <GraduationCap size={16} />
                <span>EDUCATION &amp; PEDIGREE</span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    Federal University of Technology, Owerri (FUTO)
                  </div>
                  <div className="text-xs text-cyan-400 font-mono mt-0.5">
                    B.Tech in Computer Science (2016 – 2021)
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Relevant Coursework: Data Mining, Info Systems, Decision Theory, Statistics.
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white mb-1.5">
                    <Award size={14} className="text-amber-400" />
                    <span>Key Certifications</span>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-400 font-mono">
                    <li>• Google (Coursera) Data Analytics</li>
                    <li>• TSAcademy Data Analytics</li>
                    <li>• ALX Africa Virtual Assistance</li>
                    <li>• McKinsey Academy Leadership</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">Degree Status</span>
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[11px] font-semibold border border-cyan-500/20">
                Verified FUTO Alum
              </span>
            </div>
          </div>

          {/* Metric Stats Banner (Spans 12 cols) */}
          <div className="md:col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-dark-surface/80 dark:bg-dark-surface/80 bg-white border border-slate-800 dark:border-slate-800 border-slate-200 flex flex-col items-center justify-center text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono mb-1">
                50,000+
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                Election Records Verified
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
                11,990+
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                Workforce Records Modeled
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-dark-surface/80 dark:bg-dark-surface/80 bg-white border border-slate-800 dark:border-slate-800 border-slate-200 flex flex-col items-center justify-center text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 font-mono mb-1">
                3+ Years
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                Operations &amp; Analytics
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
