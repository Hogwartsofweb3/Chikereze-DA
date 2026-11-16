import React, { useState } from 'react';
import { TypewriterText } from './TypewriterText';
import { DataSphereCanvas } from './DataSphereCanvas';
import { Floating3DCards } from './Floating3DCards';
import { 
  ArrowRight, 
  FileText, 
  Terminal, 
  MapPin, 
  Github, 
  Linkedin, 
  Mail,
  FlaskConical,
  Twitter
} from 'lucide-react';
import { scrollToSection } from '../../lib/utils';

interface HeroSectionProps {
  isDark: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isDark }) => {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setParallax({ x, y });
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background radial cyan glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Core Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Terminal status pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-mono mb-6 shadow-sm dark:shadow-none">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block -ml-3" />
              <span>Available for Data Analyst &amp; BI Roles</span>
            </div>

            {/* Terminal prompt vibe */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
              <Terminal size={14} className="text-cyan-600 dark:text-cyan-400" />
              <span>~/chikereze/analytics</span>
              <span className="text-slate-400 dark:text-slate-500">function</span>
              <span className="text-teal-600 dark:text-teal-400">solve_business_impact()</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
              Timothy John <br />
              <span className="bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-600 dark:from-cyan-400 dark:via-teal-300 dark:to-emerald-400 bg-clip-text text-transparent">
                Chikereze
              </span>
            </h1>

            {/* Dynamic Typewriter Title */}
            <div className="text-xl sm:text-2xl mb-5 h-8 flex items-center">
              <TypewriterText />
            </div>

            {/* Triad Badges & Location */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-dark-surface/60 border border-slate-200 dark:border-cyan-500/20 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-sm dark:shadow-none">
                <span className="text-cyan-600 dark:text-cyan-400 font-bold">#</span> SQL
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-dark-surface/60 border border-slate-200 dark:border-teal-500/20 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-sm dark:shadow-none">
                <span className="text-teal-600 dark:text-teal-400 font-bold">#</span> Analytics
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-dark-surface/60 border border-slate-200 dark:border-emerald-500/20 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-sm dark:shadow-none">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">#</span> Business Impact
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 ml-1">
                <MapPin size={13} className="text-cyan-600 dark:text-cyan-400" />
                <span>Owerri, Imo State, Nigeria</span>
              </div>
            </div>

            {/* Subtitle / Pitch */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl leading-relaxed">
              Transforming messy relational datasets into executive clarity, interactive Power BI dashboards, and commercial revenue insights. FUTO Computer Science graduate &amp; TechBridge DA Fellow.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold text-sm shadow-md dark:shadow-cyan-glow hover:shadow-lg dark:hover:shadow-cyan-glow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore Case Studies</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('lab')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-dark-surface/80 border border-slate-200 dark:border-cyan-500/30 text-cyan-600 dark:text-cyan-400 hover:bg-slate-50 dark:hover:bg-cyan-500/10 text-sm font-semibold shadow-sm dark:shadow-none transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FlaskConical size={16} />
                <span>Interactive Data Lab</span>
              </button>

              {/* View CV in new tab without download */}
              <a
                href="/Timothy_John_Chikereze_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-transparent border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-white hover:border-cyan-400 dark:hover:border-slate-500 text-sm font-medium shadow-sm dark:shadow-none transition-all"
                title="Open Timothy's CV in new tab"
              >
                <FileText size={15} className="text-cyan-600 dark:text-cyan-400" />
                <span>View CV (PDF)</span>
              </a>
            </div>

            {/* Social handles bar */}
            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-400 dark:text-slate-500">Connect:</span>
              <a
                href="https://www.linkedin.com/in/chikerezejt"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-dark-surface/80 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://x.com/chikerezejt"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-dark-surface/80 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none transition-colors"
                title="X (Twitter) Profile"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://github.com/Chikerezejt"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-dark-surface/80 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none transition-colors"
                title="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:chikerezejt@gmail.com"
                className="p-2 rounded-lg bg-white dark:bg-dark-surface/80 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none transition-colors"
                title="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>

          </div>

          {/* Right Column: 3D Interactive Data Sphere with Floating Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center [perspective:1200px]">
            <div
              className="relative w-full max-w-[500px] transition-transform duration-300 ease-out [transform-style:preserve-3d]"
              style={{
                transform: `rotateX(${-parallax.y * 14}deg) rotateY(${parallax.x * 14}deg)`,
              }}
            >
              <DataSphereCanvas isDark={isDark} />
              <Floating3DCards parallaxOffset={parallax} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
