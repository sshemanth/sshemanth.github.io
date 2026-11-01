import React from 'react';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';
import { BookOpen, Sparkles, Award, GraduationCap, HeartPulse } from 'lucide-react';

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
      className="min-h-screen relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden bg-[#0C0C0C]"
    >
      {/* 5 Floating 3D Medical & Neural Objects: Brain, MRI Slice, DNA Helix, Heartbeat Line, Neural Nodes */}

      {/* 1. Top-Left: 3D Brain Mesh */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <div className="relative group">
            <img
              src="/src/assets/images/about_3d_brain_neuro_1793506817199.jpg"
              alt="3D Neural Brain Connectome"
              className="w-[110px] sm:w-[150px] md:w-[190px] h-auto rounded-full object-cover shadow-[0_0_40px_rgba(34,211,238,0.25)] border border-cyan-500/20"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#121318]/90 border border-cyan-500/30 px-2 py-0.5 rounded text-[10px] uppercase font-mono text-cyan-300 whitespace-nowrap hidden sm:block">
              Brain MRI Mesh
            </div>
          </div>
        </FadeIn>
      </div>

      {/* 2. Bottom-Left: 3D DNA Helix */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[8%] z-0 pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <div className="relative group">
            <img
              src="/src/assets/images/dna_helix_3d_1793506836583.jpg"
              alt="3D DNA Double Helix"
              className="w-[90px] sm:w-[130px] md:w-[170px] h-auto rounded-full object-cover shadow-[0_0_40px_rgba(182,0,168,0.25)] border border-[#B600A8]/30"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#121318]/90 border border-[#B600A8]/40 px-2 py-0.5 rounded text-[10px] uppercase font-mono text-[#D7E2EA] whitespace-nowrap hidden sm:block">
              DNA Helix
            </div>
          </div>
        </FadeIn>
      </div>

      {/* 3. Top-Right: 3D Neural Network Nodes */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <div className="relative group">
            <img
              src="/src/assets/images/neural_nodes_3d_1793506835615.jpg"
              alt="Neural Network Graph Nodes"
              className="w-[110px] sm:w-[150px] md:w-[190px] h-auto rounded-full object-cover shadow-[0_0_40px_rgba(182,0,168,0.3)] border border-[#B600A8]/20"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#121318]/90 border border-purple-500/30 px-2 py-0.5 rounded text-[10px] uppercase font-mono text-purple-300 whitespace-nowrap hidden sm:block">
              Neural Nodes
            </div>
          </div>
        </FadeIn>
      </div>

      {/* 4. Bottom-Right: 3D Heartbeat Pulse / ECG Line */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[8%] z-0 pointer-events-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <div className="relative group">
            <img
              src="/src/assets/images/heartbeat_ecg_3d_1793508382436.jpg"
              alt="3D Heartbeat ECG Pulse Line"
              className="w-[105px] sm:w-[145px] md:w-[185px] h-auto rounded-2xl object-cover shadow-[0_0_40px_rgba(34,211,238,0.3)] border border-cyan-400/20"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#121318]/90 border border-cyan-500/40 px-2 py-0.5 rounded text-[10px] uppercase font-mono text-cyan-300 whitespace-nowrap hidden sm:block">
              Heartbeat Line
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Center Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full">
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
        <div className="h-8 sm:h-12 md:h-14" />

        {/* Animated paragraph: character-by-character scroll-driven */}
        <AnimatedText text={shortBio} />

        {/* Highlights Strip */}
        <FadeIn delay={0.2} y={20} className="w-full mt-10 max-w-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <div className="bg-[#14151A] border border-[#272932] rounded-2xl p-4 flex items-start gap-3">
              <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-semibold">
                  MICCAI 2026 BraTS-METS
                </p>
                <p className="text-sm font-medium text-white">
                  Accepted paper &amp; invited reviewer (3 manuscripts)
                </p>
              </div>
            </div>

            <div className="bg-[#14151A] border border-[#272932] rounded-2xl p-4 flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-semibold">
                  UTS Sydney · AIVision Nexus Lab
                </p>
                <p className="text-sm font-medium text-white">
                  Supervised by A/Prof. Steve Ling
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Gap between highlights & action buttons */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Action Buttons: Contact Me + Read Full Story */}
        <FadeIn delay={0.3} y={20} className="flex flex-wrap items-center justify-center gap-4">
          <ContactButton onClick={onOpenContact} label="Contact Me" />
          <button
            type="button"
            onClick={onOpenBio}
            className="rounded-full border-2 border-[#D7E2EA]/40 hover:border-white px-8 py-3 sm:px-10 sm:py-3.5 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA] hover:text-white hover:bg-white/5 transition-all cursor-pointer flex items-center gap-2"
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
