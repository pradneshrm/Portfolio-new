import React from 'react';
import { Database, HeartPulse, BarChart3, Wrench } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const evidence: Record<string, string> = {
  databases: 'Hands-on SQL work across extraction, configuration, reporting, troubleshooting and query tuning.',
  healthcare: '8.5+ years of US healthcare IT context across clinical applications, workflows and data.',
  data_eng: 'Experience connecting source data, transformation logic, validation and reporting outputs.',
  tools: 'Production troubleshooting, issue management and collaboration with engineering, QA and product teams.',
};

const icons: Record<string, React.ElementType> = { databases: Database, healthcare: HeartPulse, data_eng: BarChart3, tools: Wrench };

export const TechnicalSkillsSection: React.FC = () => (
  <section id="skills" className="py-20 bg-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-400 mb-2">Skills with context</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">What I can contribute.</h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-3xl">I have intentionally removed arbitrary percentage-based skill ratings. Real work, case studies and outcomes are stronger evidence than self-scored proficiency bars.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {PORTFOLIO_DATA.skills.map((category) => {
          const Icon = icons[category.id] || Database;
          return (
            <article key={category.id} className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center"><Icon className="w-5 h-5 text-teal-400" /></div>
                <div>
                  <h3 className="text-lg font-bold text-white">{category.category}</h3>
                  <p className="text-sm text-slate-500 mt-1">{evidence[category.id] || category.description}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {category.items.map((item) => <span key={item.name} title={item.description} className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:border-teal-500/30 hover:text-white transition">{item.name}</span>)}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);
