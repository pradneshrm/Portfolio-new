import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  FileText, 
  ExternalLink,
  Phone,
  Mail,
  Linkedin,
  MapPin
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface PrintResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintResumeModal: React.FC<PrintResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const plainTextResume = `
PRADNESH RAJEEV MOHITE
HEALTHCARE DATA & ANALYTICS PROFESSIONAL
Location: Gujarat, India | Email: pradneshmohite110@gmail.com | LinkedIn: linkedin.com/in/pradnesh-mohite

PROFESSIONAL SUMMARY
${PORTFOLIO_DATA.personal.summary}

TECHNICAL SKILLS & COMPETENCIES
- Databases & Querying: MS SQL Server, T-SQL Scripting, SQL Server Management Studio (SSMS), Stored Procedures, Advanced Indexing, Query Optimization, Performance Tuning
- Healthcare Systems: EMR/EHR Systems, Allscripts Professional EHR, Clinical Workflows, Output Manager, Patient Data Management, healthcare data standards familiarity
- Data Engineering: ETL Pipeline Development, Clinical Data Mining, Relational Schema Design, Data Validation, Analytics Reporting, Tableau, Power BI, Advanced Excel
- Tools & Frameworks: SQL Profiler, Extended Event Traces, ITIL Framework, ServiceNow, Jira, Service Level Agreement (SLA) Management, Microsoft Azure (Foundational)

PROFESSIONAL EXPERIENCE

Senior Software Engineer | MRO Corp | 2022 – Present | Pune, India
- Lead and architect strategic clinical data mining solutions across 50+ healthcare practices, ensuring complete structural data accuracy and strict HIPAA compliance at every phase of the ETL pipeline lifecycle.
- Develop and execute optimized T-SQL scripts for EMR map updates and clinical measure dashboards, consistently achieving a 40% reduction in average query response times via targeted structural indexing and query plan refactoring.
- Troubleshoot recurring healthcare data extraction, schema, mapping, and configuration issues and validate fixes through downstream results.
- Support SQL-driven extraction and ingestion workflows, improve maintainability, and remove hard-coded logic where appropriate.
- Work within healthcare application and data workflows while collaborating with engineering and QA teams on production fixes and data-quality issues.
- Collaborate with Product Managers, Software Developers, and QA Engineering teams to perform technical root-cause diagnostics on data pipeline anomalies, ensuring absolute adherence to strict corporate SLA deadlines.

Senior Support Consultant | Allscripts LLP | 2020 – 2022 | Pune, India
- Earned progressive professional promotions within 4 years due to top-tier technical delivery, technical data troubleshooting velocity, and client satisfaction rankings.
- Identified and eliminated severe relational database performance bottlenecks utilizing SQL Profiler, Extended Event Traces, and SSMS, accelerating average system troubleshooting and resolution speeds by 25%.
- Managed robust SLA compliance thresholds across 75+ active healthcare systems and enterprise accounts using ITIL-aligned issue tracking and technical escalation frameworks.

Support Consultant / Intern Consultant | Allscripts LLP | Dec 2017 – 2020 | Pune, India
- Engineered 100+ customized clinical patient data reports and data views, enabling advanced data-driven operational and clinical decision-making for healthcare providers and clinical administrators.
- Designed and deployed complex Output Manager print templates to regulate clinical printing and secure document faxing workflows across 30+ physical healthcare facilities.
- Conducted detailed system defect analysis and code reviews, resulting in the successful identification, documentation, and release of three confirmed core product hotfixes.

EDUCATION
- Master of Engineering (M.E.) in Computer Engineering | Mumbai University | Nov 2021 | Mumbai, India
- Bachelor of Engineering (B.E.) in Computer Engineering | Ratnagiri / Mumbai University | Aug 2015 | India

CERTIFICATIONS & TRAINING
- Microsoft SQL Server Certification: Querying (Exam 70-461)
- Microsoft SQL Server Certification: Administration (Exam 70-462)
- ITIL Foundation Certified – IT Service Management Framework
- Data Analytics Professional Credential – Accenture / Forage

AWARDS & PROFESSIONAL RECOGNITION
- Employee of the Month (MRO Corp)
- Beyond the Call of Duty Award (MRO Corp)
- Peer-to-Peer Recognition Award (MRO Corp)
- Multiple Client Appreciation Awards (Allscripts LLP)
`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(plainTextResume.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      id="print-resume-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in print:p-0 print:bg-white"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col print:max-h-none print:shadow-none print:rounded-none"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Floating Action Bar (Hidden when printing) */}
        <div className="bg-slate-900 px-6 py-3.5 flex items-center justify-between border-b border-slate-800 text-white print:hidden shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-teal-400" />
            <span className="text-sm font-bold">Standard Document Format • ATS Verified</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="copy-raw-resume-text-btn"
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 flex items-center gap-1.5 transition"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied Text' : 'Copy Text'}
            </button>

            <button
              id="print-resume-trigger-btn"
              onClick={handlePrint}
              className="px-4 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-md transition"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              id="close-resume-modal-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="p-8 sm:p-12 overflow-y-auto font-sans leading-relaxed space-y-6 text-slate-900 print:p-0 print:overflow-visible">
          {/* Header */}
          <div className="text-center pb-4 border-b-2 border-slate-900">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-1 font-serif">
              PRADNESH RAJEEV MOHITE
            </h1>
            <div className="text-xs sm:text-sm font-bold tracking-wide text-slate-700 uppercase mb-2">
              Senior Software Engineer • Healthcare Data Engineering
            </div>
            <div className="text-xs text-slate-600 flex items-center justify-center flex-wrap gap-x-3 gap-y-1">
              <span>Location: Gujarat, India</span>
              <span>•</span>
              <a href="mailto:pradneshmohite110@gmail.com" className="hover:underline text-teal-800 font-medium">
                Email: pradneshmohite110@gmail.com
              </a>
              <span>•</span>
              <a href="https://www.linkedin.com/in/pradnesh-mohite" target="_blank" rel="noopener noreferrer" className="hover:underline text-teal-800 font-medium">
                LinkedIn: linkedin.com/in/pradnesh-mohite
              </a>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-teal-800 inline-block"></span>
              Professional Summary
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-800 text-justify leading-normal">
              {PORTFOLIO_DATA.personal.summary}
            </p>
          </div>

          {/* Section: Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-teal-800 inline-block"></span>
              Technical Skills & Competencies
            </h2>
            <div className="text-xs sm:text-[13px] space-y-1.5 text-slate-800">
              <div>
                <strong>Databases & Querying:</strong> MS SQL Server, T-SQL Scripting, SQL Server Management Studio (SSMS), Stored Procedures, Advanced Indexing, Query Optimization, Performance Tuning
              </div>
              <div>
                <strong>Healthcare Systems:</strong> EMR/EHR Systems, Allscripts Professional EHR, Clinical Workflows, Output Manager, Patient Data Management, healthcare data standards familiarity
              </div>
              <div>
                <strong>Data Engineering:</strong> ETL Pipeline Development, Clinical Data Mining, Relational Schema Design, Data Validation, Analytics Reporting, Tableau, Power BI, Advanced Excel
              </div>
              <div>
                <strong>Tools & Frameworks:</strong> SQL Profiler, Extended Event Traces, ITIL Framework, ServiceNow, Jira, Service Level Agreement (SLA) Management, Microsoft Azure (Foundational)
              </div>
            </div>
          </div>

          {/* Section: Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-teal-800 inline-block"></span>
              Professional Experience
            </h2>

            {/* MRO Corp */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline text-xs sm:text-[13px]">
                <span className="font-bold text-slate-900">Senior Software Engineer</span>
                <span className="font-bold text-slate-700">2022 – Present</span>
              </div>
              <div className="flex justify-between items-baseline text-xs text-teal-800 font-semibold italic">
                <span>MRO Corp</span>
                <span>Pune, India</span>
              </div>
              <ul className="list-disc list-outside pl-4 text-xs sm:text-[12.5px] text-slate-800 space-y-1">
                <li>Lead and architect strategic clinical data mining solutions across 50+ healthcare practices, ensuring complete structural data accuracy and strict HIPAA compliance at every phase of the ETL pipeline lifecycle.</li>
                <li>Develop and execute optimized T-SQL scripts for EMR map updates and clinical measure dashboards, consistently achieving a 40% reduction in average query response times via targeted structural indexing and query plan refactoring.</li>
                <li>Troubleshoot recurring healthcare data extraction, schema, mapping, and configuration issues and validate fixes through downstream results.</li>
                <li>Support SQL-driven extraction and ingestion workflows, improve maintainability, and remove hard-coded logic where appropriate.</li>
                <li>Work within healthcare application and data workflows while collaborating with engineering and QA teams on production fixes and data-quality issues.</li>
                <li>Collaborate with Product Managers, Software Developers, and QA Engineering teams to perform technical root-cause diagnostics on data pipeline anomalies, ensuring absolute adherence to strict corporate SLA deadlines.</li>
              </ul>
            </div>

            {/* Senior Support Consultant - Allscripts */}
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between items-baseline text-xs sm:text-[13px]">
                <span className="font-bold text-slate-900">Senior Support Consultant</span>
                <span className="font-bold text-slate-700">2020 – 2022</span>
              </div>
              <div className="flex justify-between items-baseline text-xs text-teal-800 font-semibold italic">
                <span>Allscripts LLP</span>
                <span>Pune, India</span>
              </div>
              <ul className="list-disc list-outside pl-4 text-xs sm:text-[12.5px] text-slate-800 space-y-1">
                <li>Earned progressive professional promotions within 4 years due to top-tier technical delivery, technical data troubleshooting velocity, and client satisfaction rankings.</li>
                <li>Identified and eliminated severe relational database performance bottlenecks utilizing SQL Profiler, Extended Event Traces, and SSMS, accelerating average system troubleshooting and resolution speeds by 25%.</li>
                <li>Managed robust SLA compliance thresholds across 75+ active healthcare systems and enterprise accounts using ITIL-aligned issue tracking and technical escalation frameworks.</li>
              </ul>
            </div>

            {/* Support Consultant / Intern - Allscripts */}
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between items-baseline text-xs sm:text-[13px]">
                <span className="font-bold text-slate-900">Support Consultant / Intern Consultant</span>
                <span className="font-bold text-slate-700">Dec 2017 – 2020</span>
              </div>
              <div className="flex justify-between items-baseline text-xs text-teal-800 font-semibold italic">
                <span>Allscripts LLP</span>
                <span>Pune, India</span>
              </div>
              <ul className="list-disc list-outside pl-4 text-xs sm:text-[12.5px] text-slate-800 space-y-1">
                <li>Engineered 100+ customized clinical patient data reports and data views, enabling advanced data-driven operational and clinical decision-making for healthcare providers and clinical administrators.</li>
                <li>Designed and deployed complex Output Manager print templates to regulate clinical printing and secure document faxing workflows across 30+ physical healthcare facilities.</li>
                <li>Conducted detailed system defect analysis and code reviews, resulting in the successful identification, documentation, and release of three confirmed core product hotfixes.</li>
              </ul>
            </div>
          </div>

          {/* Section: Education */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-teal-800 inline-block"></span>
              Education
            </h2>
            <div className="space-y-2 text-xs sm:text-[13px]">
              <div className="flex justify-between">
                <div>
                  <span className="font-bold">Master of Engineering (M.E.) in Computer Engineering</span>
                  <div className="text-slate-600">Mumbai University</div>
                </div>
                <div className="text-right">
                  <span className="font-bold">Nov 2021</span>
                  <div className="text-slate-600">Mumbai, India</div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-bold">Bachelor of Engineering (B.E.) in Computer Engineering</span>
                  <div className="text-slate-600">Ratnagiri / Mumbai University</div>
                </div>
                <div className="text-right">
                  <span className="font-bold">Aug 2015</span>
                  <div className="text-slate-600">India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Certifications */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-teal-800 inline-block"></span>
              Certifications & Training
            </h2>
            <ul className="list-disc list-outside pl-4 text-xs sm:text-[12.5px] text-slate-800 space-y-1">
              <li>Microsoft SQL Server Certification: Querying (Exam 70-461)</li>
              <li>Microsoft SQL Server Certification: Administration (Exam 70-462)</li>
              <li>ITIL Foundation Certified – IT Service Management Framework</li>
              <li>Data Analytics Professional Credential – Accenture / Forage</li>
            </ul>
          </div>

          {/* Section: Awards & Recognition */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-teal-800 inline-block"></span>
              Awards & Professional Recognition
            </h2>
            <ul className="list-disc list-outside pl-4 text-xs sm:text-[12.5px] text-slate-800 space-y-1.5">
              <li>
                <strong>Employee of the Month (MRO Corp)</strong> – Voted for exceptional engineering performance and measurable client impact across concurrent healthcare data pipelines.
              </li>
              <li>
                <strong>Peer-to-Peer Recognition Award (MRO Corp)</strong> – Awarded by fellow software engineering colleagues for outstanding cross-functional collaboration and structural data technical contributions.
              </li>
              <li>
                <strong>Beyond the Call of Duty Award (MRO Corp)</strong> – Honored for single-handedly identifying and repairing a critical client data pipeline outage outside business hours, completely preventing a high-exposure corporate SLA breach.
              </li>
              <li>
                <strong>Multiple Client Appreciation Awards (Allscripts LLP)</strong> – Received continuous client commendations for exemplary technical database optimization and troubleshooting quality across a 4-year tenure.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
