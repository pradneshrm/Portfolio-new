import React from 'react';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => (
  <section id="experience" className="py-20 bg-slate-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-400 mb-2">Career + impact</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Professional Experience</h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-3xl">A healthcare-first career built around data extraction, SQL, troubleshooting, reporting and production support.</p>
      </div>

      <div className="space-y-5">
        {PORTFOLIO_DATA.experiences.map((exp) => (
          <article key={exp.id} className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 hover:border-teal-500/30 transition">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{exp.role}</h3>
                  {exp.isCurrent && <span className="px-2.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[10px] font-bold uppercase tracking-wider text-teal-300">Current</span>}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-400">
                  <span className="inline-flex items-center gap-1.5 text-teal-300 font-semibold"><Building2 className="w-4 h-4" />{exp.company}</span>
                  <span className="inline-flex items-center gap-1.5"><Calendar className="w-4 h-4" />{exp.period}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4" />{exp.location}</span>
                </div>
                <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed">{exp.summary}</p>
              </div>

              <div className="flex flex-wrap lg:max-w-xs lg:justify-end gap-2">
                {exp.metrics.slice(0, 3).map((m) => (
                  <div key={m.label} className="rounded-2xl bg-slate-950 border border-slate-800 px-3.5 py-2.5 min-w-[105px]">
                    <div className="text-lg font-extrabold text-white">{m.value}</div>
                    <div className="text-[10px] uppercase tracking-wider text-teal-300 font-bold">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 pt-6 border-t border-slate-800">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 mb-4">Selected contributions</h4>
              <ul className="grid md:grid-cols-2 gap-3">
                {exp.highlights.map((bullet, i) => <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed"><CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />{bullet}</li>)}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {exp.techStack.map((tech) => <span key={tech} className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-400">{tech}</span>)}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
