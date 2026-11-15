import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Command, 
  Sun, 
  Moon, 
  ArrowUpRight
} from 'lucide-react';
import { scrollToSection } from '../../lib/utils';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  toggleTheme: () => void;
  isDark: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommandPalette,
  toggleTheme,
  isDark,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Data Lab', id: 'lab' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-bg/85 dark:bg-dark-bg/85 bg-white/85 backdrop-blur-md border-b border-slate-800/80 dark:border-slate-800/80 border-slate-200/80 shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 group text-left"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 p-[1.5px] shadow-cyan-glow">
              <div className="w-full h-full rounded-[10px] bg-dark-bg dark:bg-dark-bg bg-white flex items-center justify-center font-mono font-black text-cyan-400 group-hover:text-teal-300 transition-colors">
                TJ
              </div>
            </div>
            <div>
              <div className="text-sm font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                <span>Timothy John</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-pulse" />
              </div>
              <div className="text-[10px] font-mono text-cyan-400/80 uppercase tracking-widest">
                Data Analyst
              </div>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-dark-surface/70 dark:bg-dark-surface/70 bg-slate-100/80 border border-slate-800/80 dark:border-slate-800/80 border-slate-200/80 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-400 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Icons & Command Palette Trigger */}
          <div className="flex items-center gap-2.5">
            {/* Quick Cmd+K Button */}
            <button
              onClick={onOpenCommandPalette}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-dark-surface dark:bg-dark-surface bg-slate-100 border border-slate-800 dark:border-slate-800 border-slate-200 text-xs text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              title="Quick Search (Ctrl + K)"
            >
              <Command size={13} className="text-cyan-400" />
              <span className="font-mono text-[11px]">⌘K</span>
            </button>

            {/* Dark / Light Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-dark-surface dark:bg-dark-surface bg-slate-100 border border-slate-800 dark:border-slate-800 border-slate-200 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-cyan-500" />}
            </button>

            {/* Get In Touch CTA */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden lg:flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/25 text-xs font-semibold transition-all"
            >
              <span>Hire Timothy</span>
              <ArrowUpRight size={14} />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-dark-surface/95 dark:bg-dark-surface/95 bg-white/95 border border-slate-800 backdrop-blur-xl space-y-2 shadow-2xl animate-in slide-in-from-top-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-xl text-sm font-medium text-slate-300 dark:text-slate-300 text-slate-700 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => {
                  onOpenCommandPalette();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-xs text-cyan-400"
              >
                <Command size={14} />
                <span>Open Command Palette (⌘K)</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
