import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  FileText, 
  Sun,
  Moon
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenPrintModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPrintModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Snapshot', href: '#snapshot' },
    { label: 'Experience', href: '#experience' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications-awards' },
    { label: 'Documents', href: '#documents' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navigation"
      className="fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 py-3 shadow-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Name */}
        <a 
          id="nav-brand-link"
          href="#top" 
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 p-0.5 flex items-center justify-center shadow-lg shadow-teal-500/20 group-hover:scale-105 transition">
            <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[10px] flex items-center justify-center">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-300 text-sm font-mono">
                PM
              </span>
            </div>
          </div>
          <div>
            <span className="text-sm font-bold text-slate-900 dark:text-white tracking-tight block group-hover:text-teal-700 dark:group-hover:text-teal-300 transition">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span className="text-[11px] text-teal-400/90 font-medium block">
              Healthcare Data & Analytics
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              href={link.href}
              className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-400 transition tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls & Visitor Badge */}
        <div className="hidden sm:flex items-center gap-3">


          {/* Print/View Resume */}
          <button
            id="nav-resume-btn"
            onClick={onOpenPrintModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold shadow-lg shadow-teal-900/30 transition transform hover:-translate-y-0.5"
            title="View & Print Resume"
          >
            <FileText className="w-3.5 h-3.5 text-slate-950" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 lg:hidden">


          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="lg:hidden bg-white/95 dark:bg-slate-950/95 border-b border-slate-200 dark:border-slate-800 px-6 py-5 space-y-4 backdrop-blur-xl animate-fade-in"
        >
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-400 border-b border-slate-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrintModal();
              }}
              className="w-full py-2.5 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
            >
              <FileText className="w-4 h-4 text-slate-950" />
              View & Print Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
