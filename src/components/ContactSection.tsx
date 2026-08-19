import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles, 
  Calendar, 
  ArrowUpRight,
  ShieldCheck,
  Building,
  CheckCircle2
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { trackPortfolioEvent } from '../lib/portfolioAnalytics';

/**
 * Formspree endpoint (https://formspree.io). Sign up free, create a form
 * pointed at your inbox email, and paste its endpoint ID below in place of
 * 'YOUR_FORM_ID'. This lets the form send real email directly from the
 * static site, with no backend server required.
 */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

export const ContactSection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  
  // Interactive Message Builder
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('Senior Healthcare Data Engineering Role');
  const [customNotes, setCustomNotes] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const templates = [
    {
      label: "Senior Engineer Role",
      type: "Full-Time Senior Healthcare Data Engineer Opportunity",
      defaultText: "Hi Pradnesh, we reviewed your healthcare data and SQL background and would love to discuss a role with our team."
    },
    {
      label: "ETL & SQL Consultation",
      type: "Healthcare ETL Architecture & SQL Tuning Discussion",
      defaultText: "Hi Pradnesh, we have ongoing clinical data pipeline and query performance challenges and would like to explore your expertise."
    },
    {
      label: "Technical Interview / Screening",
      type: "Technical Screening Invitation",
      defaultText: "Hi Pradnesh, your healthcare IT, SQL and data experience aligns strongly with our hiring needs. Are you available for a 30-min intro chat?"
    }
  ];

  const handleApplyTemplate = (tpl: typeof templates[0]) => {
    setInquiryType(tpl.type);
    setCustomNotes(tpl.defaultText);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendError(null);
    setIsSending(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: senderName,
          organization: senderOrg,
          email: senderEmail,
          inquiryType,
          message: customNotes,
          _subject: `[Portfolio Inquiry] ${inquiryType} - from ${senderName || 'Hiring Lead'}`,
        }),
      });

      if (!response.ok) throw new Error('Request failed');

      trackPortfolioEvent('contact_click', { inquiry_type: inquiryType });
      setIsSent(true);
      setSenderName('');
      setSenderOrg('');
      setSenderEmail('');
      setCustomNotes('');
      setTimeout(() => setIsSent(false), 5000);
    } catch {
      setSendError(
        "Something went wrong sending your message. Please try again, or email me directly at " +
          PORTFOLIO_DATA.personal.email
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-600/30 dark:border-teal-500/30 text-teal-700 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" /> Direct Contact & Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Connect with Me
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Interested in Data Analyst, Healthcare Data, Data Engineering, BI, or related roles? I would be happy to discuss how my healthcare-domain experience can help your team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-slate-50/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-teal-600/40 dark:border-teal-500/40 transition group shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <Mail className="w-4 h-4 text-teal-700 dark:text-teal-400" /> Primary Email
                </span>
                <button
                  id="contact-copy-email-btn"
                  onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.email, 'email')}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-300 dark:border-slate-700 transition flex items-center gap-1"
                >
                  {copiedType === 'email' ? <Check className="w-3 h-3 text-emerald-700 dark:text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  {copiedType === 'email' ? 'Copied' : 'Copy'}
                </button>
              </div>
              <a
                id="contact-email-direct-link"
                href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=Healthcare%20Data%20Engineering%20Opportunity`}
                onClick={() => trackPortfolioEvent('email_click')}
                className="text-base sm:text-lg font-mono font-bold text-slate-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-300 transition flex items-center gap-2 break-all"
              >
                <span>{PORTFOLIO_DATA.personal.email}</span>
                <ArrowUpRight className="w-4 h-4 text-teal-700 dark:text-teal-400 opacity-0 group-hover:opacity-100 transition shrink-0" />
              </a>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                For opportunities, projects, or technical conversations, email is the fastest way to reach me.
              </p>
            </div>

            {/* LinkedIn Card */}
            <div className="p-6 rounded-2xl bg-slate-50/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-[#0077b5]/50 transition group shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-teal-300 uppercase tracking-wider flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-teal-300" /> LinkedIn Profile
                </span>
                <a
                  id="contact-linkedin-direct-link"
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackPortfolioEvent('linkedin_click')}
                  className="px-2.5 py-1 rounded-lg bg-[#0077b5]/20 hover:bg-teal-500/10 text-teal-300 text-xs font-medium border border-teal-500/30 transition flex items-center gap-1"
                >
                  <span>Connect</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
              <div className="text-sm sm:text-base font-mono text-slate-800 dark:text-slate-200 group-hover:text-teal-300 transition">
                {PORTFOLIO_DATA.personal.linkedinDisplay}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Verified professional profile with career endorsements & certifications.
              </p>
            </div>

            {/* Location & Availability Card */}
            <div className="p-6 rounded-2xl bg-slate-50/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-3 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-teal-700 dark:text-teal-400" />
                <span>Base Location: {PORTFOLIO_DATA.personal.location}</span>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
                <span>Available for Remote, Hybrid, or Global Relocation opportunities.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Message Dispatcher */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-teal-700 dark:text-teal-400" />
                  Quick Inquiry & Message Dispatcher
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Select a template or compose a direct message. Submitting sends it straight to my inbox — no email app required.
                </p>
              </div>

              {/* Template Quick Select */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Quick Subject Templates:</label>
                <div className="flex flex-wrap gap-2">
                  {templates.map(tpl => (
                    <button
                      key={tpl.label}
                      type="button"
                      onClick={() => handleApplyTemplate(tpl)}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-medium border border-slate-300 dark:border-slate-700 transition"
                    >
                      {tpl.label}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block mb-1">Your Name</label>
                    <input
                      id="contact-sender-name"
                      type="text"
                      required
                      value={senderName}
                      onChange={e => setSenderName(e.target.value)}
                      placeholder="e.g., Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:border-teal-600 dark:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block mb-1">Company / Organization</label>
                    <input
                      id="contact-sender-org"
                      type="text"
                      value={senderOrg}
                      onChange={e => setSenderOrg(e.target.value)}
                      placeholder="e.g., HealthTech Systems Inc."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:border-teal-600 dark:border-teal-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block mb-1">Your Email</label>
                    <input
                      id="contact-sender-email"
                      type="email"
                      required
                      value={senderEmail}
                      onChange={e => setSenderEmail(e.target.value)}
                      placeholder="sarah@healthtech.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:border-teal-600 dark:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block mb-1">Inquiry Topic</label>
                    <input
                      id="contact-inquiry-type"
                      type="text"
                      value={inquiryType}
                      onChange={e => setInquiryType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:border-teal-600 dark:border-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block mb-1">Message Details</label>
                  <textarea
                    id="contact-sender-message"
                    required
                    rows={4}
                    value={customNotes}
                    onChange={e => setCustomNotes(e.target.value)}
                    placeholder="Provide role requirements, interview availability, or pipeline technical context..."
                    className="w-full p-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:border-teal-600 dark:border-teal-500 leading-relaxed"
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-teal-900/40 flex items-center justify-center gap-2 transition"
                >
                  <Send className="w-4 h-4 fill-slate-950" />
                  <span>{isSending ? 'Sending…' : 'Send Message'}</span>
                </button>
              </form>

              {isSent && (
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-600/40 dark:border-emerald-500/40 text-xs text-emerald-700 dark:text-emerald-300 flex items-center gap-2 animate-fade-in">
                  <Check className="w-4 h-4" />
                  <span>Message sent! I'll get back to you soon.</span>
                </div>
              )}

              {sendError && (
                <div className="p-3 rounded-xl bg-red-500/20 border border-red-600/40 dark:border-red-500/40 text-xs text-red-700 dark:text-red-300 flex items-center gap-2 animate-fade-in">
                  <span>{sendError}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
