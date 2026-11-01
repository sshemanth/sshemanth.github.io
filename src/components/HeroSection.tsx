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
    <section className="min-h-screen w-full flex flex-col justify-between overflow-x-clip relative bg-[#0C0C0C] select-none">
      {/* Decorative AI Background */}
      <SectionBackground imageName="bg-hero.webp" position="right" theme="dark" priority={true} />

      {/* 1. Navbar Container */}
      <FadeIn delay={0} y={-20} className="w-full z-30">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 pt-6 md:pt-8">
          <nav
            aria-label="Main Navigation"
            className="w-full flex items-center justify-between text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-base md:text-lg lg:text-[1.3rem]"
          >
            <button
              type="button"
              onClick={() => scrollTo('about')}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer focus-visible:outline-none focus-visible:underline"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => scrollTo('publications')}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer focus-visible:outline-none focus-visible:underline"
            >
              Publications
            </button>
            <button
              type="button"
              onClick={() => scrollTo('interests')}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer focus-visible:outline-none focus-visible:underline"
            >
              Interests
            </button>
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer focus-visible:outline-none focus-visible:underline"
            >
              Projects
            </button>
            <button
              type="button"
              onClick={onOpenContact}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer focus-visible:outline-none focus-visible:underline"
            >
              Contact
            </button>
          </nav>
        </div>
      </FadeIn>

      {/* Top Status & Location Badges */}
      <div className="w-full z-20">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 pt-3 flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-widest text-[#D7E2EA]/60">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#B600A8]" />
            <span>Sydney, Australia</span>
            <span className="text-white/20">·</span>
            <span>UTS Master of AI</span>
          </div>
          <div className="flex items-center gap-2 text-[#BBCCD7]">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-white font-medium">Seeking PhD positions in Medical AI · 2027</span>
          </div>
        </div>
      </div>

      {/* 2. Hero Heading (properly sized so full name fits comfortably on all screens) */}
      <FadeIn delay={0.15} y={40} className="w-full z-20">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 text-center overflow-hidden">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-tight whitespace-nowrap w-full text-[6.5vw] sm:text-[7.5vw] md:text-[9vw] lg:text-[10.5vw] mt-2 sm:mt-1 md:-mt-3">
            Hi, I&apos;m Hemanth
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-light uppercase tracking-[0.3em] text-[#BBCCD7]/70 mt-1">
            Medical AI Researcher
          </p>
        </div>
      </FadeIn>

      {/* 3. Hero Portrait with Magnet effect */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[270px] sm:w-[350px] md:w-[430px] lg:w-[490px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30} className="w-full h-full flex justify-center">
          <HeroPortrait initialImage="/images/hemanth-portrait.jpg" />
        </FadeIn>
      </div>

      {/* 4. Bottom bar */}
      <div className="w-full z-20 relative">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pb-7 sm:pb-8 md:pb-10">
          <FadeIn delay={0.35} y={20}>
            <div className="space-y-1 max-w-[240px] sm:max-w-[320px] md:max-w-[400px]">
              <p
                className="text-[#D7E2EA] font-light leading-snug"
                style={{ fontSize: 'clamp(0.75rem, 1.3vw, 1.25rem)' }}
              >
                Developing trustworthy deep learning for medical imaging and clinical data, from detection and segmentation to learning from clinical reports.
              </p>
              <button
                type="button"
                onClick={onOpenBio}
                className="text-xs uppercase tracking-wider text-[#B600A8] hover:text-white flex items-center gap-1 font-medium transition-colors pt-1 cursor-pointer"
              >
                <span>Read Full Story</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={0.5} y={20} className="shrink-0 flex flex-wrap items-center gap-3">
            <a
              href="./cv.pdf"
              download="Sri_Sai_Hemanth_Bollepalli_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/25 hover:border-white px-5 py-2.5 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-[#D7E2EA] hover:text-white hover:bg-white/10 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
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
