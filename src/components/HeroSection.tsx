import React from 'react';
import FadeIn from './FadeIn';
import HeroPortrait from './HeroPortrait';
import ContactButton from './ContactButton';
import { MapPin, GraduationCap, ArrowUpRight } from 'lucide-react';

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
    <section className="h-screen w-full flex flex-col justify-between overflow-x-clip relative bg-[#0C0C0C] select-none">
      {/* 1. Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-30">
        <nav
          aria-label="Main Navigation"
          className="w-full flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]"
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
      </FadeIn>

      {/* Top Status & Location Badges */}
      <div className="w-full px-6 md:px-10 flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-widest text-[#D7E2EA]/60 z-20">
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

      {/* 2. Hero Heading */}
      <FadeIn delay={0.15} y={40} className="w-full overflow-hidden text-center z-20">
        <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[12.5vw] sm:text-[14vw] md:text-[15.5vw] lg:text-[17vw] mt-4 sm:mt-2 md:-mt-4">
          Hi, I&apos;m Hemanth
        </h1>
        <p className="text-xs sm:text-sm md:text-base font-light uppercase tracking-[0.3em] text-[#BBCCD7]/70 mt-1">
          Medical AI Researcher
        </p>
      </FadeIn>

      {/* 3. Hero Portrait with Magnet effect & Photo Selection */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[270px] sm:w-[350px] md:w-[430px] lg:w-[490px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30} className="w-full h-full flex justify-center">
          <HeroPortrait initialImage="/assets/aistudio/IMG_0981.JPG_c43143f4.jpeg" />
        </FadeIn>
      </div>

      {/* 4. Bottom bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 relative w-full">
        <FadeIn delay={0.35} y={20}>
          <div className="space-y-1 max-w-[220px] sm:max-w-[300px] md:max-w-[380px]">
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

        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onOpenContact} label="Contact Me" />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
