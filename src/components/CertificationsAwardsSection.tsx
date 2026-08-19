import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  BadgeCheck, 
  Star, 
  Trophy, 
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CertificationsAwardsSection: React.FC = () => {
  return (
    <section id="certifications-awards" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-600/30 dark:border-teal-500/30 text-teal-700 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" /> Validation & Accolades
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications & Recognition
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Industry-standard database credentials, IT service management certifications, and corporate peer recognitions.
          </p>
        </div>

        
        {/* Credly Badges */}
        {PORTFOLIO_DATA.credlyBadges && PORTFOLIO_DATA.credlyBadges.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800 mb-6">
              <Award className="w-5 h-5 text-teal-700 dark:text-teal-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Digital Badges
              </h3>
            </div>
            <div className="flex flex-wrap gap-6">
              {PORTFOLIO_DATA.credlyBadges.map((badge, idx) => (
                <a
                  key={idx}
                  href={badge.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-teal-600/40 dark:hover:border-teal-500/40 transition hover:-translate-y-1"
                  title={badge.title}
                >
                  <div className="w-32 h-32 flex items-center justify-center">
                    <img
                      src={badge.image}
                      alt={badge.title}
                      className="max-w-full max-h-full object-contain filter drop-shadow-md group-hover:drop-shadow-xl transition-all duration-300"
                    />
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-sm border border-slate-200 dark:border-slate-700">
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <span>View my verified credentials on</span>
              <a href="https://www.credly.com/users/pradnesh-mohite/badges/credly" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-600 dark:text-teal-400 hover:underline">
                Credly
              </a>
            </p>
          </div>
        )}

        {/* 2-Column Split: Left = Certifications, Right = Awards */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications Block */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
              <BadgeCheck className="w-5 h-5 text-teal-700 dark:text-teal-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Certifications & Training
              </h3>
            </div>

            <div className="space-y-4">
              {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  id={`cert-card-${idx}`}
                  className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-teal-600/40 dark:border-teal-500/40 transition group"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 block mb-1">
                        {cert.issuer} {cert.examCode ? `• ${cert.examCode}` : ''}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-300 transition">
                        {cert.title}
                      </h4>
                    </div>
                    <span className="p-2 rounded-xl bg-teal-500/10 text-teal-700 dark:text-teal-400 border border-teal-600/20 dark:border-teal-500/20 shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-950 text-[10px] font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Recognition Block */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
              <Trophy className="w-5 h-5 text-amber-700 dark:text-amber-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Awards & Professional Recognition
              </h3>
            </div>

            <div className="space-y-4">
              {PORTFOLIO_DATA.awards.map((award, idx) => (
                <div
                  key={idx}
                  id={`award-card-${idx}`}
                  className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-amber-600/40 dark:border-amber-500/40 transition group"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                          {award.organization}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="text-[10px] font-semibold text-slate-600 dark:text-slate-400">
                          {award.type}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-300 transition">
                        {award.title}
                      </h4>
                    </div>
                    <span className="p-2 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-600/20 dark:border-amber-500/20 shrink-0">
                      <Star className="w-4 h-4 fill-amber-400/30" />
                    </span>
                  </div>

                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                    {award.description}
                  </p>

                  <div className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-950/80 border border-slate-200/80 dark:border-slate-800/80 text-[11px] text-teal-700 dark:text-teal-300 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400 shrink-0" />
                    <span><strong className="text-slate-800 dark:text-slate-200">Impact:</strong> {award.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
