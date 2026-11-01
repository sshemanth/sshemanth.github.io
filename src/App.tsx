/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import PublicationsSection from './components/PublicationsSection';
import EducationSection from './components/EducationSection';
import NewsSection from './components/NewsSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import BioModal from './components/BioModal';
import ProjectModal from './components/ProjectModal';
import { ProjectItem } from './types';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isBioOpen, setIsBioOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  const handleOpenBio = () => {
    setIsBioOpen(true);
  };

  const handleOpenProject = (project: ProjectItem) => {
    setActiveProject(project);
  };

  const handleSelectFocus = (_name: string) => {
    setIsContactOpen(true);
  };

  return (
    <div
      className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-['Kanit',sans-serif] selection:bg-[#B600A8]/30 selection:text-white"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. HeroSection */}
      <HeroSection
        onOpenContact={handleOpenContact}
        onOpenBio={handleOpenBio}
      />

      {/* 2. Top Gallery (4 Milestone Cards) */}
      <MarqueeSection />

      {/* 3. AboutSection */}
      <AboutSection
        onOpenContact={handleOpenContact}
        onOpenBio={handleOpenBio}
      />

      {/* 4. PublicationsSection (MICCAI 2026 Accepted Paper & Links) */}
      <PublicationsSection />

      {/* 5. EducationSection (UTS Master of AI & JNTU Kakinada B.Tech) */}
      <EducationSection />

      {/* 6. NewsSection (Timeline of recent milestones) */}
      <NewsSection />

      {/* 7. Research Focus Section (5 research areas + evenly shared PhD & contact boxes) */}
      <ServicesSection
        onOpenContact={handleOpenContact}
        onSelectFocus={handleSelectFocus}
      />

      {/* 8. Projects Section (BraTS-METS, Knee MRI, HAM10000 Skin Lesions) */}
      <ProjectsSection onOpenProject={handleOpenProject} />

      {/* 9. Footer */}
      <Footer
        onOpenContact={handleOpenContact}
        onOpenBio={handleOpenBio}
      />

      {/* Modals & Overlays */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <BioModal
        isOpen={isBioOpen}
        onClose={() => setIsBioOpen(false)}
        onOpenContact={handleOpenContact}
      />

      <ProjectModal
        project={activeProject}
        isOpen={activeProject !== null}
        onClose={() => setActiveProject(null)}
        onOpenContact={handleOpenContact}
      />
    </div>
  );
}
