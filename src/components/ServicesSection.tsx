import React from 'react';
import FadeIn from './FadeIn';
import SectionBackground from './SectionBackground';
import { ResearchFocusItem } from '../types';
import { ArrowUpRight, Mail, GraduationCap, Send, FileDown } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContact: () => void;
  onSelectFocus?: (name: string) => void;
}

const RESEARCH_INTERESTS: ResearchFocusItem[] = [
  {
    id: 'image-analysis',
    number: '01',
    name: 'Medical Image Analysis',
    description:
      'Segmentation, detection and classification across MRI, dermoscopy and other imaging types, with emphasis on clinical fidelity and diagnostic interpretability.',
    tag: 'MRI · Dermoscopy · Segmentation',
  },
  {
    id: 'limited-labels',
    number: '02',
    name: 'Learning with Limited Labels',
    description:
      'Weak supervision from clinical reports, so models need less manual annotation from radiologists and pathologists.',
    tag: 'Weak Supervision · Report Mining',
  },
  {
    id: 'clinical-llms',
    number: '03',
    name: 'Clinical Language Models',
    description:
      'Using LLMs such as MedGemma and Qwen to extract structured information, diagnostic labels, and anatomical descriptors from narrative medical text.',
    tag: 'MedGemma · Qwen · Clinical NLP',
  },
  {
    id: 'robust-ai',
    number: '04',
    name: 'Robust & Trustworthy AI',
    description:
      'Handling class imbalance, rare findings, small lesions and overfitting, ensuring models hold up in out-of-distribution real clinical data.',
    tag: 'Class Imbalance · Out-of-Distribution',
  },
  {
    id: 'architectures',
    number: '05',
    name: 'Model Architectures for Healthcare',
    description:
      'Systematically comparing CNNs (nnU-Net, ConvNeXt, EfficientNet) and Vision Transformers (Primus, Swin), and ensembling them for reliable performance.',
    tag: 'CNNs vs Transformers · Ensembles',
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenContact,
  onSelectFocus,
}) => {
  return (
    <section
      id="interests"
      className="w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] py-16 sm:py-20 md:py-24 relative overflow-hidden z-0"
    >
      {/* Decorative AI Background (Light Theme Wireframe Scan Lines on Right) */}
      <SectionBackground
        imageName="bg-research.webp"
        position="right"
        theme="light"
        priority={false}
      />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <div className="text-center mb-2">
            <span className="text-[13px] uppercase tracking-widest font-semibold text-[#B600A8] bg-[#B600A8]/10 px-3.5 py-1.5 rounded-full">
              Areas of Specialization
            </span>
          </div>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-10 sm:mb-14 text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Research Interests
          </h2>
        </FadeIn>

        {/* 5 Research Interest Items (Full Centered Width) */}
        <div className="w-full">
          {RESEARCH_INTERESTS.map((item, index) => (
            <FadeIn
              key={item.id}
              delay={index * 0.08}
              y={25}
              className={`py-6 sm:py-7 md:py-8 border-t border-[rgba(12,12,12,0.15)] ${
                index === RESEARCH_INTERESTS.length - 1 ? 'border-b' : ''
              }`}
            >
              <div
                onClick={() => onSelectFocus && onSelectFocus(item.name)}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-8 md:gap-12 group cursor-pointer"
              >
                {/* Number on left */}
                <div
                  className="font-black text-[#0C0C0C] leading-none shrink-0 transition-transform duration-300 group-hover:translate-x-2 select-none text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
                >
                  {item.number}
                </div>

                {/* Name, Tag, Description */}
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#0C0C0C] group-hover:text-[#B600A8] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <span className="text-[13px] font-mono uppercase tracking-wider text-[#B600A8] bg-[#B600A8]/10 px-2.5 py-0.5 rounded-full font-semibold">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-base sm:text-lg text-[#333339] font-light leading-relaxed max-w-3xl">
                    {item.description}
                  </p>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity hidden md:block shrink-0">
                  <div className="p-3.5 rounded-full bg-[#0C0C0C]/5 text-[#0C0C0C] group-hover:bg-[#B600A8] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Evenly Shared Full Width Boxes: Open to PhD Box & Pink Get in Touch Box */}
        <FadeIn delay={0.3} y={25} className="mt-12 sm:mt-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full items-stretch">
            {/* Box 1: Open to PhD Positions & Research Collaborations */}
            <div className="bg-[#0C0C0C] text-[#D7E2EA] rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-9 border border-[#272932] shadow-2xl relative overflow-hidden flex flex-col justify-between gap-5 sm:gap-6 h-full">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#B600A8]/20 via-[#7621B0]/10 to-transparent blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-3.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B600A8]/20 border border-[#B600A8]/40 text-[#D7E2EA] text-[13px] font-semibold uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4 text-[#B600A8]" />
                  <span>Doctoral Opportunities</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                  Open to PhD Positions &amp; Research Collaborations
                </h3>
                <p className="text-base text-[#c4c4cc] font-light leading-relaxed">
                  I am seeking a PhD in Medical AI starting in 2027 and welcome research collaborations. If your lab explores medical imaging segmentation, clinical NLP weak supervision, or robust multimodal architectures, I would be glad to connect.
                </p>
              </div>

              {/* Bottom tags: fitted within content and shifted slightly to the right side */}
              <div className="relative z-10 pt-4 mt-2 border-t border-white/10 flex flex-wrap items-center gap-2.5 text-[13px] font-mono text-[#D7E2EA] pl-3 sm:pl-5">
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15">
                  Target: 2027 Admission
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15">
                  AIVision Nexus Lab, UTS
                </span>
              </div>
            </div>

            {/* Box 2: Pink Gradient Get in Touch Box */}
            <div
              className="rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-9 text-white shadow-2xl relative flex flex-col justify-between gap-5 sm:gap-6 h-full"
              style={{
                background:
                  'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                boxShadow:
                  '0px 6px 20px rgba(181, 1, 167, 0.35)',
                border: '2px solid rgba(255, 255, 255, 0.9)',
              }}
            >
              <div className="space-y-3.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-[13px] font-semibold uppercase tracking-wider">
                  <Send className="w-3.5 h-3.5 text-white" />
                  <span>Direct Inquiry</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                  Get in Touch
                </h3>
                <p className="text-base text-white/95 font-light leading-relaxed">
                  Interested in discussing potential PhD supervision, research topics, preprints, or dataset access? Send a direct message, email, or download my academic CV.
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-white/20 flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={onOpenContact}
                    className="rounded-full bg-white text-[#0C0C0C] hover:bg-[#D7E2EA] px-7 py-3 text-sm font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-transform hover:scale-105 active:scale-95 shadow-xl"
                  >
                    <Mail className="w-4 h-4 text-[#B600A8]" />
                    <span>Get in Touch</span>
                  </button>

                  <a
                    href="./cv.pdf"
                    download="Sri_Sai_Hemanth_Bollepalli_CV.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-black/40 hover:bg-black/60 border border-white/35 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2 transition-all cursor-pointer shadow-md"
                  >
                    <FileDown className="w-4 h-4 text-cyan-300" />
                    <span>Download CV</span>
                  </a>
                </div>

                {/* Full email clearly displayed, fitted within content and shifted slightly to the right side */}
                <div className="pt-0.5 pl-3 sm:pl-5">
                  <a
                    href="mailto:sshemanthofficial@gmail.com"
                    className="text-sm sm:text-base font-mono text-white/95 hover:text-white underline underline-offset-4 transition-colors break-all inline-block font-medium py-0.5"
                  >
                    sshemanthofficial@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ServicesSection;
