import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#020617] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-600/30 dark:border-teal-500/30 text-teal-700 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" /> Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Qualifications
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Postgraduate & undergraduate degrees in Computer Engineering from Mumbai University.
          </p>
        </div>

        {/* 2 Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <div
              key={idx}
              id={`edu-card-${idx}`}
              className="p-6 sm:p-8 rounded-2xl bg-slate-50/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-teal-600/40 dark:border-teal-500/40 transition shadow-xl space-y-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-teal-700 dark:text-teal-400 font-mono font-bold mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span>{edu.field}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                    {edu.institution}
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] font-mono font-bold text-teal-700 dark:text-teal-300 border border-slate-300 dark:border-slate-700 whitespace-nowrap">
                  {edu.gradDate}
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  {edu.location}
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  Conferred: {edu.gradDate}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-300">
                <span className="font-bold text-teal-700 dark:text-teal-300">Academic Core: </span>
                {edu.focus}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
