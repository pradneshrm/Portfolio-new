import React from 'react';
import { BarChart3, Database, FileBarChart, ShieldCheck, Terminal, Wrench } from 'lucide-react';

const metrics = [
  { value: '8.5+', label: 'Years', detail: 'US healthcare IT experience', icon: ShieldCheck },
  { value: 'SQL', label: 'Core strength', detail: 'T-SQL, SQL Server & troubleshooting', icon: Database },
  { value: 'ETL', label: 'Data focus', detail: 'Extraction, ingestion & data quality', icon: Terminal },
  { value: '100+', label: 'Reports', detail: 'Customized clinical reports/data views', icon: FileBarChart },
  { value: '40%', label: 'Optimization', detail: 'Reported query-performance improvement', icon: Wrench },
  { value: 'BI', label: 'Analytics', detail: 'Power BI, Tableau & Excel', icon: BarChart3 },
];

export const MetricsRibbon: React.FC = () => (
  <section className="py-8 bg-slate-950 border-y border-slate-800/80">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
      {metrics.map(({ value, label, detail, icon: Icon }) => (
        <div key={label} className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-teal-500/35 transition">
          <Icon className="w-4 h-4 text-teal-400 mb-4" />
          <div className="text-2xl font-extrabold text-white tracking-tight">{value}</div>
          <div className="text-[10px] uppercase tracking-wider font-bold text-teal-300 mt-1">{label}</div>
          <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">{detail}</p>
        </div>
      ))}
    </div>
  </section>
);
