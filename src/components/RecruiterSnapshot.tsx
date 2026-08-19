import React from 'react';
import { BriefcaseBusiness, Database, BarChart3, Code2, Cloud, MapPin, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { trackPortfolioEvent } from '../lib/portfolioAnalytics';

export const RecruiterSnapshot: React.FC = () => {
  const items = [
    { label: 'Experience', value: '8.5+', detail: 'Years in US Healthcare IT', icon: BriefcaseBusiness },
    { label: 'Core', value: 'SQL + ETL', detail: 'Data extraction & troubleshooting', icon: Database },
    { label: 'Analytics', value: 'Power BI + Tableau', detail: 'Dashboard & data storytelling', icon: BarChart3 },
    { label: 'Programming', value: 'Python', detail: 'Foundational data analysis', icon: Code2 },
    { label: 'Cloud', value: 'GCP', detail: 'Cloud data platform exposure', icon: Cloud },
    { label: 'Location', value: 'India', detail: 'Open to remote/global roles', icon: MapPin },
  ];

  return (
    <section id="snapshot" className="py-16 bg-slate-950 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-400 mb-2">Recruiter Snapshot</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">A 10-second view of what I bring.</h2>
          </div>
          <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" onClick={() => trackPortfolioEvent('linkedin_click')} className="inline-flex items-center gap-2 text-sm font-semibold text-teal-300 hover:text-teal-200 transition">
            Verify my professional profile <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {items.map(({ label, value, detail, icon: Icon }) => (
            <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 hover:border-teal-500/40 transition">
              <Icon className="w-4 h-4 text-teal-400 mb-4" />
              <div className="text-base sm:text-lg font-extrabold text-white leading-tight">{value}</div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-300 mt-1">{label}</div>
              <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
