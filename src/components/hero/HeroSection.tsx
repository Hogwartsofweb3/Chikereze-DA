import React, { useState } from 'react';
import { TypewriterText } from './TypewriterText';
import { DataSphereCanvas } from './DataSphereCanvas';
import { Floating3DCards } from './Floating3DCards';
import { 
  ArrowRight, 
  Download, 
  Terminal, 
  MapPin, 
  Github, 
  Linkedin, 
  Mail,
  FlaskConical
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block -ml-3" />
              <span>Available for Data Analyst &amp; BI Roles</span>
            </div>

            {/* Terminal prompt vibe */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
              <Terminal size={14} className="text-cyan-400" />
              <span>~/chikereze/analytics</span>
              <span className="text-slate-600 dark:text-slate-500">function</span>
              <span className="text-teal-400">solve_business_impact()</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
              Timothy John <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Chikereze
              </span>
            </h1>

            {/* Dynamic Typewriter Title */}
            <div className="text-xl sm:text-2xl mb-5 h-8 flex items-center">
              <TypewriterText />
            </div>

            {/* Triad Badges & Location */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-dark-surface/60 dark:bg-dark-surface/60 bg-slate-100 border border-cyan-500/20 text-xs font-medium text-slate-300 dark:text-slate-300 text-slate-700">
                <span className="text-cyan-400">#</span> SQL
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-dark-surface/60 dark:bg-dark-surface/60 bg-slate-100 border border-teal-500/20 text-xs font-medium text-slate-300 dark:text-slate-300 text-slate-700">
                <span className="text-teal-400">#</span> Analytics
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-dark-surface/60 dark:bg-dark-surface/60 bg-slate-100 border border-emerald-500/20 text-xs font-medium text-slate-300 dark:text-slate-300 text-slate-700">
                <span className="text-emerald-400">#</span> Business Impact
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 ml-1">
                <MapPin size={13} className="text-cyan-400" />
                <span>Owerri, Imo State, Nigeria</span>
              </div>
            </div>

            {/* Subtitle / Pitch */}
            <p className="text-base sm:text-lg text-slate-400 dark:text-slate-300 mb-8 max-w-xl leading-relaxed">
              Transforming messy relational datasets into executive clarity, interactive Power BI dashboards, and commercial revenue insights. FUTO Computer Science graduate &amp; TechBridge Fellow.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold text-sm shadow-cyan-glow hover:shadow-cyan-glow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore Case Studies</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('lab')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-dark-surface/80 dark:bg-dark-surface/80 bg-white border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FlaskConical size={16} />
                <span>Interactive Data Lab</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-700/60 dark:border-slate-700/60 text-slate-300 hover:text-white hover:border-slate-500 text-sm font-medium transition-all"
              >
                <Download size={15} />
                <span>Resume / CV</span>
              </a>
            </div>

            {/* Social handles bar */}
            <div className="flex items-center gap-4 text-slate-400">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-500">Connect:</span>
              <a
                href="https://github.com/Chikerezejt"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-dark-surface/80 dark:bg-dark-surface/80 bg-slate-100 hover:text-cyan-400 hover:border-cyan-500/40 border border-slate-800 transition-colors"
                title="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-dark-surface/80 dark:bg-dark-surface/80 bg-slate-100 hover:text-cyan-400 hover:border-cyan-500/40 border border-slate-800 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:chikerezejt@gmail.com"
                className="p-2 rounded-lg bg-dark-surface/80 dark:bg-dark-surface/80 bg-slate-100 hover:text-cyan-400 hover:border-cyan-500/40 border border-slate-800 transition-colors"
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
