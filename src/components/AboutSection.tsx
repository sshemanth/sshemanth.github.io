import React from 'react';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';
import SectionBackground from './SectionBackground';
import { BookOpen, Sparkles, Award, GraduationCap } from 'lucide-react';

interface AboutSectionProps {
  onOpenContact: () => void;
  onOpenBio: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenContact,
  onOpenBio,
}) => {
  const shortBio =
    "I'm Hemanth, a Medical AI researcher and Master of Artificial Intelligence student at the University of Technology Sydney. I develop deep learning methods for medical imaging and clinical data, with a focus on reliable, clinically useful AI. My work has been accepted at the MICCAI 2026 BraTS-METS Challenge.";

  return (
    <section
      id="about"
      className="min-h-[80vh] relative flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 overflow-hidden bg-[#0C0C0C]"
    >
      {/* Decorative AI Background */}
      <SectionBackground imageName="bg-about.webp" position="right" theme="dark" priority={false} />

      {/* Centered container with w-full max-w-7xl mx-auto px-6 md:px-10 */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 relative z-10 flex flex-col items-center justify-center text-center">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B600A8] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile &amp; Focus</span>
          </div>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.8rem, 11vw, 150px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading & text */}
        <div className="h-6 sm:h-10 md:h-12" />

        {/* Animated paragraph: character-by-character scroll-driven */}
        <div className="max-w-4xl mx-auto">
          <AnimatedText text={shortBio} />
        </div>

        {/* Highlights Strip */}
        <FadeIn delay={0.2} y={20} className="w-full mt-8 sm:mt-10 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="bg-[#14151A] border border-[#272932] rounded-2xl p-5 flex items-start gap-3.5">
              <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-[13px] uppercase tracking-wider text-[#c4c4cc] font-semibold">
                  MICCAI 2026 BraTS-METS
                </p>
                <p className="text-base font-medium text-white mt-0.5">
                  Accepted paper &amp; invited reviewer (3 manuscripts)
                </p>
              </div>
            </div>

            <div className="bg-[#14151A] border border-[#272932] rounded-2xl p-5 flex items-start gap-3.5">
              <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-[13px] uppercase tracking-wider text-[#c4c4cc] font-semibold">
                  UTS Sydney · AIVision Nexus Lab
                </p>
                <p className="text-base font-medium text-white mt-0.5">
                  Supervised by A/Prof. Steve Ling
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Gap between highlights & action buttons */}
        <div className="h-8 sm:h-10 md:h-12" />

        {/* Action Buttons: Contact Me + Read Full Story */}
        <FadeIn delay={0.3} y={20} className="flex flex-wrap items-center justify-center gap-4">
          <ContactButton onClick={onOpenContact} label="Contact Me" />
          <button
            type="button"
            onClick={onOpenBio}
            className="rounded-full border-2 border-white/30 hover:border-white px-7 py-3.5 sm:px-9 sm:py-4 text-sm font-semibold uppercase tracking-wider text-[#E0E6ED] hover:text-white hover:bg-white/5 transition-all cursor-pointer flex items-center gap-2 shadow-md"
          >
            <BookOpen className="w-4 h-4" />
            <span>Read Long Bio &amp; Credentials</span>
          </button>
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
