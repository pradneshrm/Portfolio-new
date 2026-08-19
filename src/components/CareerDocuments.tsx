import React from 'react';
import { trackPortfolioEvent } from '../lib/portfolioAnalytics';

const documents = [
  { title:'Resume', description:'Healthcare Data & Analytics resume.', href:'/portfolio-new/documents/resume.pdf', event:'resume_click' as const },
  { title:'Cover Letter', description:'General professional cover letter.', href:'/portfolio-new/documents/cover-letter.pdf', event:'cover_letter_click' as const },
  { title:'Letter of Recommendation', description:'Professional recommendation from a former manager.', href:'/portfolio-new/documents/lor-manager-1.pdf', event:'lor_click' as const },
];

export default function CareerDocuments() {
  return <section id="documents" className="py-20"><div className="mx-auto max-w-6xl px-6">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] opacity-60">Career Documents</p>
    <h2 className="text-3xl font-bold md:text-5xl">Evidence beyond the portfolio</h2>
    <p className="mt-5 max-w-2xl text-base leading-7 opacity-70">Resume, cover letter and professional recommendations are available for recruiters who want a deeper view of my background.</p>
    <div className="mt-10 grid gap-5 md:grid-cols-3">{documents.map(doc => <a key={doc.title} href={doc.href} target="_blank" rel="noreferrer" onClick={() => trackPortfolioEvent(doc.event)} className="group rounded-2xl border border-black/10 bg-white/5 p-6 transition hover:-translate-y-1"><h3 className="text-xl font-semibold">{doc.title}</h3><p className="mt-3 text-sm leading-6 opacity-65">{doc.description}</p><span className="mt-6 inline-block text-sm font-semibold">View PDF →</span></a>)}</div>
    <p className="mt-6 text-xs opacity-50">Publish recommendation letters only with the author's permission and redact confidential or personal information.</p>
  </div></section>;
}
