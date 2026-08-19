import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MetricsRibbon } from './components/MetricsRibbon';
import { ExperienceSection } from './components/ExperienceSection';
import { TechnicalSkillsSection } from './components/TechnicalSkillsSection';
import { RecruiterSnapshot } from './components/RecruiterSnapshot';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { CertificationsAwardsSection } from './components/CertificationsAwardsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrintResumeModal } from './components/PrintResumeModal';
import CareerDocuments from './components/CareerDocuments';
import PortfolioAnalyticsSetup from './components/PortfolioAnalyticsSetup';
import AnalyticsNotice from './components/AnalyticsNotice';

export default function App() {
  const [printModalOpen, setPrintModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 dark:text-slate-100 selection:bg-teal-500 selection:text-slate-100 font-sans antialiased">
        {/* Top Sticky Navigation */}
        <Navbar 
          onOpenPrintModal={() => setPrintModalOpen(true)}
        />

        {/* Main Content Sections */}
        <main id="main-content">
          <HeroSection 
            onOpenPrintModal={() => setPrintModalOpen(true)}
          />
          
          <MetricsRibbon />
          <RecruiterSnapshot />
          <ExperienceSection />
          <CaseStudiesSection />
          <TechnicalSkillsSection />
          
          <CertificationsAwardsSection />
          
          <EducationSection />
          
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer 
          onOpenPrintModal={() => setPrintModalOpen(true)}
        />

        {/* ATS-Formatted Print / Save Resume Modal */}
        <PrintResumeModal
          isOpen={printModalOpen}
          onClose={() => setPrintModalOpen(false)}
        />
      </div>
  );
}
