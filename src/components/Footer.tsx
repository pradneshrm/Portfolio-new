import React from 'react';
import { 
  Mail, 
  Linkedin, 
  ArrowUp, 
  ShieldCheck, 
  FileText
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenPrintModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrintModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800/80">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 font-mono font-bold text-xs">
                PM
              </div>
              <span className="font-bold text-white text-base">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </div>
            <p className="text-slate-400 max-w-md text-xs leading-relaxed">
              Healthcare data and analytics professional with 8.5+ years in US healthcare IT, focused on SQL, data extraction, ETL, troubleshooting and analytics.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <button
                id="footer-resume-btn"
                onClick={onOpenPrintModal}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold transition shadow-md"
              >
                <FileText className="w-3.5 h-3.5 text-slate-950" />
                View & Print ATS Resume
              </button>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-2.5">
            <div className="font-bold text-white text-xs uppercase tracking-wider">
              Sections
            </div>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#summary" className="hover:text-teal-300 transition">Summary</a></li>
              <li><a href="#experience" className="hover:text-teal-300 transition">Professional Experience</a></li>
              <li><a href="#skills" className="hover:text-teal-300 transition">Technical Skills</a></li>
              <li><a href="#architecture-lab" className="hover:text-teal-300 transition">Selected Case Studies</a></li>
              <li><a href="#certifications-awards" className="hover:text-teal-300 transition">Certifications & Awards</a></li>
              <li><a href="#education" className="hover:text-teal-300 transition">Education</a></li>
              
              <li><a href="#contact" className="hover:text-teal-300 transition">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Workable Links */}
          <div className="space-y-2.5">
            <div className="font-bold text-white text-xs uppercase tracking-wider">
              Direct Contact
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  id="footer-email-link"
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="flex items-center gap-2 hover:text-teal-300 transition break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-teal-400" />
                  <span className="font-mono">{PORTFOLIO_DATA.personal.email}</span>
                </a>
              </li>
              <li>
                <a 
                  id="footer-linkedin-link"
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#38bdf8] transition"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
                  <span>{PORTFOLIO_DATA.personal.linkedinDisplay}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Pradnesh Rajeev Mohite. All rights reserved.</span>
            <span>•</span>
            <span className="text-emerald-400/90 font-medium">HIPAA Compliant Healthcare Data Architecture</span>
          </div>

          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-teal-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
