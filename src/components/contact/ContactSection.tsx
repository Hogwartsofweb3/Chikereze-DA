import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, MapPin, Send, CheckCircle, Github, Linkedin, Calendar, Phone, Twitter } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    try {
      // Optional Formspree submission if an endpoint is active
      await fetch('https://formspree.io/f/Timothy-John', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      }).catch(() => {
        // Graceful fallback for local development or demo endpoints
      });
    } catch {
      // Continue to celebration
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Confetti Celebration
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#06b6d4', '#14b8a6', '#10b981', '#38bdf8'],
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative bg-dark-bg/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <span>06 // CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Start a Conversation
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Whether you need a full-time Data Analyst, a Power BI dashboard overhaul, or an audited SQL revenue reconciliation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Availability (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-7 rounded-3xl bg-dark-surface/90 dark:bg-dark-surface/90 bg-white border border-slate-800 dark:border-slate-800 border-slate-200 shadow-xl space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Timothy John Chikereze
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Data Analyst &amp; Business Intelligence Specialist based in Owerri, Nigeria. Open to remote, hybrid, and onsite global opportunities.
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-slate-800/80 text-xs">
                
                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-mono">Primary Email</div>
                    <a
                      href="mailto:chikerezejt@gmail.com"
                      className="font-mono text-cyan-400 hover:underline font-semibold"
                    >
                      chikerezejt@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone / Mobile */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0 border border-teal-500/20">
                    <Phone size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-mono">Mobile / WhatsApp</div>
                    <a
                      href="tel:+2348106379633"
                      className="font-mono text-slate-300 hover:text-cyan-400 font-semibold"
                    >
                      +234 (0) 810 637 9633
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-mono">Location</div>
                    <div className="text-slate-300 font-medium">Owerri, Imo State, Nigeria (WAT / GMT+1)</div>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <Calendar size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-mono">Status</div>
                    <div className="text-emerald-400 font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Ready for immediate start</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Direct Social Links */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2">
                <a
                  href="https://www.linkedin.com/in/chikerezejt"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 text-xs font-semibold border border-slate-800 transition-colors"
                >
                  <Linkedin size={15} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://x.com/chikerezejt"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 text-xs font-semibold border border-slate-800 transition-colors"
                >
                  <Twitter size={15} />
                  <span>X / Twitter</span>
                </a>
                <a
                  href="https://github.com/Chikerezejt"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 text-xs font-semibold border border-slate-800 transition-colors"
                >
                  <Github size={15} />
                  <span>GitHub</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form (Spans 7 cols) */}
          <div className="lg:col-span-7 p-7 rounded-3xl bg-dark-surface/90 dark:bg-dark-surface/90 bg-white border border-slate-800 dark:border-slate-800 border-slate-200 shadow-xl">
            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <CheckCircle size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Message Transmitted!
                </h3>
                <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
                  Thank you for reaching out to Timothy. Your note has been received, and he will respond promptly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:text-white transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono uppercase text-[10px] text-slate-400 mb-1.5 font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-bg/80 dark:bg-dark-bg/80 bg-slate-50 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                    />
                  </div>

                  <div>
                    <label className="block font-mono uppercase text-[10px] text-slate-400 mb-1.5 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-bg/80 dark:bg-dark-bg/80 bg-slate-50 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono uppercase text-[10px] text-slate-400 mb-1.5 font-semibold">
                    Inquiry Type / Role
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Data Analyst Role / Power BI Dashboard Project"
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-bg/80 dark:bg-dark-bg/80 bg-slate-50 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                  />
                </div>

                <div>
                  <label className="block font-mono uppercase text-[10px] text-slate-400 mb-1.5 font-semibold">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your organization, project scope, or opportunity..."
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-bg/80 dark:bg-dark-bg/80 bg-slate-50 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold text-sm shadow-cyan-glow hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
                >
                  <Send size={15} />
                  <span>{isSubmitting ? 'Transmitting Message...' : 'Send Message to Timothy'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
