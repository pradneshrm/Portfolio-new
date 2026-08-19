import React from 'react';
import { ArrowUpRight, Database, Gauge, BarChart3, CheckCircle2 } from 'lucide-react';
import { useViewTracking } from '../lib/useViewTracking';

const cases = [
  {
    icon: Database,
    title: 'Healthcare Data Extraction & Quality',
    problem: 'Healthcare practices can fail downstream reporting when extraction settings, mappings, or SQL configuration are inconsistent.',
    work: 'Investigated extraction failures, corrected practice-level configuration, updated EMR mappings, validated results, and worked with engineering/QA teams on root-cause fixes.',
    stack: ['SQL', 'T-SQL', 'ETL', 'Healthcare Data', 'EMR/EHR'],
    outcome: 'Reliable, traceable data workflows and faster resolution of recurring extraction issues.',
  },
  {
    icon: Gauge,
    title: 'SQL Performance & Clinical Reporting',
    problem: 'Clinical measure dashboards depend on efficient SQL queries and correctly mapped source data.',
    work: 'Built and refined SQL logic, investigated execution behaviour, supported EMR map updates, and helped resolve issues affecting dashboard refreshes.',
    stack: ['MS SQL Server', 'T-SQL', 'SSMS', 'Query Tuning', 'Dashboards'],
    outcome: 'Improved query performance through SQL refinement, indexing analysis, and query-plan troubleshooting.',
  },
  {
    icon: BarChart3,
    title: 'Clinical Reporting & Data Analysis',
    problem: 'Healthcare teams need usable reporting layers on top of complex clinical application data.',
    work: 'Created customized clinical reports/data views and developed analytics capability across Power BI, Tableau, Excel, and Python.',
    stack: ['SQL', 'Power BI', 'Tableau', 'Excel', 'Python'],
    outcome: 'Turned complex source data into reporting-ready outputs and strengthened the path from engineering work to analytics.',
  },
];

export const CaseStudiesSection: React.FC = () => {
  const sectionRef = useViewTracking<HTMLElement>('case_study_view');

  return (
  <section id="case-studies" ref={sectionRef} className="py-20 bg-black relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <CheckCircle2 className="w-3.5 h-3.5" /> Selected Work
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">From responsibilities to evidence.</h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-3xl">These case studies translate day-to-day healthcare engineering work into the business problem, technical contribution, and outcome a hiring team actually needs to understand.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {cases.map(({ icon: Icon, title, problem, work, stack, outcome }) => (
          <article key={title} className="group rounded-3xl border border-slate-800 bg-slate-950/80 p-6 hover:border-teal-500/40 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-teal-400" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-teal-400 transition" />
            </div>
            <h3 className="text-xl font-bold text-white leading-tight">{title}</h3>
            <div className="mt-5 space-y-4 text-sm leading-relaxed">
              <div><span className="text-[10px] font-bold uppercase tracking-widest text-teal-400">Problem</span><p className="text-slate-400 mt-1">{problem}</p></div>
              <div><span className="text-[10px] font-bold uppercase tracking-widest text-teal-400">My contribution</span><p className="text-slate-300 mt-1">{work}</p></div>
              <div><span className="text-[10px] font-bold uppercase tracking-widest text-teal-400">Outcome</span><p className="text-slate-300 mt-1">{outcome}</p></div>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap gap-2">
              {stack.map(tag => <span key={tag} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300">{tag}</span>)}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
  );
};
