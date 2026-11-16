import React from 'react';
import { testimonials } from '../../data/testimonials';
import { Star, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2">
            <span>05 // SOCIAL PROOF</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Endorsements &amp; Peer Reviews
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
            Feedback from evaluators, fellow data practitioners, and academic supervisors on technical rigor and business impact.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-3xl bg-white dark:bg-dark-surface/90 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-lg dark:shadow-xl hover:border-cyan-400/40 dark:hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                  &ldquo;{t.message}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-cyan-600 dark:text-cyan-400 font-mono">
                    {t.role}
                  </div>
                  <div className="text-[10px] text-slate-500">
                    {t.organization}
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-200 dark:border-transparent">
                  <CheckCircle size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
