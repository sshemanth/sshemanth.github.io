import React from 'react';
import FadeIn from './FadeIn';
import HeroPortrait from './HeroPortrait';
import ContactButton from './ContactButton';
import SectionBackground from './SectionBackground';
import { MapPin, GraduationCap, ArrowUpRight, FileDown } from 'lucide-react';

interface HeroSectionProps {
  onOpenContact: () => void;
  onOpenBio: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  onOpenBio,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen w-full flex flex-col justify-between relative bg-[#0C0C0C] select-none pb-4 sm:pb-0">
      {/* Decorative AI Background */}
      <SectionBackground imageName="bg-hero.webp" position="right" theme="dark" priority={true} />

      {/* Top Container: Nav & Badges */}
      <div className="w-full z-30">
        {/* 1. Navbar Container */}
        <FadeIn delay={0} y={-20} className="w-full">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10 pt-6 md:pt-8">
            <nav
              aria-label="Main Navigation"
              className="w-full flex items-center justify-between text-[#E0E6ED] font-medium uppercase tracking-wider text-xs sm:text-base md:text-lg lg:text-[1.3rem]"
            >
              <button
                type="button"
                onClick={() => scrollTo('about')}
                className="hover:opacity-75 transition-opacity duration-200 cursor-pointer focus-visible:outline-none focus-visible:underline"
              >
                About
              </button>
              <button
                type="button"
                onClick={() => scrollTo('publications')}
                className="hover:opacity-75 transition-opacity duration-200 cursor-pointer focus-visible:outline-none focus-visible:underline"
              >
                Publications
              </button>
              <button
                type="button"
                onClick={() => scrollTo('interests')}
                className="hover:opacity-75 transition-opacity duration-200 cursor-pointer focus-visible:outline-none focus-visible:underline"
              >
                Interests
              </button>
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="hover:opacity-75 transition-opacity duration-200 cursor-pointer focus-visible:outline-none focus-visible:underline"
              >
                Projects
              </button>
              <button
                type="button"
                onClick={onOpenContact}
                className="hover:opacity-75 transition-opacity duration-200 cursor-pointer focus-visible:outline-none focus-visible:underline"
              >
                Contact
              </button>
            </nav>
          </div>
        </FadeIn>

        {/* Top Status & Location Badges */}
        <div className="w-full mt-3">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-wrap items-center justify-between gap-3 text-[13px] uppercase tracking-wider text-[#c4c4cc]">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#B600A8]" />
              <span>Sydney, Australia</span>
              <span className="text-white/20">·</span>
              <span>UTS Master of AI</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span className="font-medium">Seeking PhD positions in Medical AI · 2027</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Hero Heading */}
      <FadeIn delay={0.15} y={30} className="w-full z-20 my-auto py-6 sm:py-8">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-tight w-full text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Hi, I&apos;m Hemanth
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-light uppercase tracking-[0.25em] text-[#c4c4cc] mt-2">
            Medical AI Researcher
          </p>
        </div>
      </FadeIn>

      {/* 3. Hero Portrait with Magnet effect */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[240px] sm:w-[320px] md:w-[400px] lg:w-[470px] bottom-28 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.4} y={30} className="w-full h-full flex justify-center">
          <HeroPortrait initialImage="/images/hemanth.png" />
        </FadeIn>
      </div>

      {/* 4. Bottom bar */}
      <div className="w-full z-20 relative pt-4">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pb-6 sm:pb-8 md:pb-10">
          {/* Intro Text & Read Full Story Button on separate line */}
          <FadeIn delay={0.25} y={20}>
            <div className="max-w-md sm:max-w-lg">
              <p className="text-base sm:text-lg text-[#E0E6ED] font-light leading-relaxed">
                Developing trustworthy deep learning for medical imaging and clinical data, from detection and segmentation to learning from clinical reports.
              </p>
              <div className="mt-3.5">
                <button
                  type="button"
                  onClick={onOpenBio}
                  className="text-sm font-semibold uppercase tracking-wider text-[#D84ED2] hover:text-white inline-flex items-center gap-1.5 transition-colors cursor-pointer group py-1"
                >
                  <span>Read Full Story</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white" />
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Action Buttons: Download CV & Contact Me */}
          <FadeIn delay={0.35} y={20} className="shrink-0 flex flex-wrap items-center gap-4">
            <a
              href="./cv.pdf"
              download="Sri_Sai_Hemanth_Bollepalli_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-white/30 hover:border-white px-6 py-3.5 text-sm font-medium uppercase tracking-wider text-[#E0E6ED] hover:text-white hover:bg-white/10 transition-all flex items-center gap-2 cursor-pointer shadow-md whitespace-nowrap"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              <span>Download CV</span>
            </a>
            <ContactButton onClick={onOpenContact} label="Contact Me" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
