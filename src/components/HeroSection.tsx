import React from 'react';
import { ArrowRight, Download, Linkedin, Mail, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroSectionProps { onOpenPrintModal: () => void; }

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPrintModal }) => (
  <section id="top" className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden bg-slate-950">
    <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-teal-500/10 via-teal-500/5 to-transparent pointer-events-none" />
    <div className="absolute -top-24 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/25 text-teal-300 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" /> Open to new opportunities
          </div>

          <p className="text-sm font-semibold text-teal-300 mb-3 tracking-wide">HEALTHCARE DATA • SQL • ETL • ANALYTICS</p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.02] mb-6">
            Pradnesh Mohite
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200 leading-tight max-w-3xl">
            Healthcare Data & Analytics Professional
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl">
            6.5+ years in US healthcare IT, combining hands-on SQL, data extraction, ETL troubleshooting and clinical application knowledge with growing expertise in Power BI, Tableau, Python, GCP and AI-driven analytics.
          </p>

          <div className="flex flex-wrap gap-2.5 mt-7 text-xs">
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300"><MapPin className="w-3.5 h-3.5 text-teal-400" /> India</span>
            <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:border-teal-500/40 hover:text-white transition"><Mail className="w-3.5 h-3.5 text-teal-400" /> Email me</a>
            <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:border-teal-500/40 hover:text-white transition"><Linkedin className="w-3.5 h-3.5 text-teal-400" /> LinkedIn</a>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a href="#case-studies" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition hover:-translate-y-0.5 shadow-lg shadow-teal-950/40">
              View my work <ArrowRight className="w-4 h-4" />
            </a>
            <button onClick={onOpenPrintModal} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-950 hover:bg-slate-100 font-bold text-sm transition">
              <Download className="w-4 h-4" /> Download resume
            </button>
          </div>

          <div id="summary" className="mt-10 p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/60">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">Professional summary</p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{PORTFOLIO_DATA.personal.summary}</p>
          </div>
        </div>

        <div className="relative max-w-sm lg:justify-self-end w-full">
          <div className="absolute -inset-3 rounded-[2rem] bg-teal-500/10 blur-2xl" />
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl">
            <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Pradnesh Mohite" className="w-full h-full object-cover object-top" />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl bg-slate-900 border border-slate-700 px-4 py-3 shadow-xl">
            <div className="text-2xl font-extrabold text-white">6.5+</div>
            <div className="text-[10px] uppercase tracking-wider font-bold text-teal-300">Years in healthcare IT</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
