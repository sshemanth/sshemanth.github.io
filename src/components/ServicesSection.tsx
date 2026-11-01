import React from 'react';
import FadeIn from './FadeIn';
import { ResearchFocusItem } from '../types';
import { ArrowUpRight, Mail, GraduationCap } from 'lucide-react';

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
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20 relative z-0"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <div className="text-center mb-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B600A8] bg-[#B600A8]/10 px-3 py-1 rounded-full">
              Areas of Specialization
            </span>
          </div>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-8 sm:mb-12 md:mb-14"
            style={{ fontSize: 'clamp(2.4rem, 8vw, 120px)' }}
          >
            Research Interests
          </h2>
        </FadeIn>

        {/* 5 Research Interest Items (01 - 05) */}
        <div className="w-full">
          {RESEARCH_INTERESTS.map((item, index) => (
            <FadeIn
              key={item.id}
              delay={index * 0.08}
              y={25}
              className={`py-5 sm:py-6 md:py-7 border-t border-[rgba(12,12,12,0.15)] ${
                index === RESEARCH_INTERESTS.length - 1 ? 'border-b' : ''
              }`}
            >
              <div
                onClick={() => onSelectFocus && onSelectFocus(item.name)}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-8 md:gap-12 group cursor-pointer"
              >
                {/* Number on left */}
                <div
                  className="font-black text-[#0C0C0C] leading-none shrink-0 transition-transform duration-300 group-hover:translate-x-2 select-none"
                  style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
                >
                  {item.number}
                </div>

                {/* Name + description stacked vertically on right */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#B600A8] font-bold">
                      {item.tag}
                    </span>
                  </div>
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] mb-1.5 transition-colors duration-200 group-hover:text-[#B600A8]"
                    style={{ fontSize: 'clamp(1rem, 2vw, 1.8rem)' }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed max-w-2xl opacity-80 text-[#0C0C0C]"
                    style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.15rem)' }}
                  >
                    {item.description}
                  </p>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                  <div className="p-3 rounded-full bg-[#0C0C0C]/5 text-[#0C0C0C]">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Open to PhD Positions & Research Collaborations Box */}
        <FadeIn delay={0.3} y={25} className="mt-10 sm:mt-14">
          <div className="bg-[#0C0C0C] text-[#D7E2EA] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 border border-[#272932] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#B600A8]/20 via-[#7621B0]/10 to-transparent blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B600A8]/20 border border-[#B600A8]/40 text-[#D7E2EA] text-xs font-semibold uppercase tracking-wider mb-3">
                  <GraduationCap className="w-3.5 h-3.5 text-[#B600A8]" />
                  <span>Doctoral Opportunities</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                  Open to PhD Positions &amp; Research Collaborations
                </h3>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/85 font-light mt-2.5 leading-relaxed">
                  I am seeking a PhD in Medical AI starting in 2027 and welcome research collaborations. If your lab explores medical imaging segmentation, clinical NLP weak supervision, or robust multimodal architectures, I would be glad to connect.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="rounded-full px-7 py-3 text-xs sm:text-sm font-medium uppercase tracking-widest text-white flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-105 active:scale-95"
                  style={{
                    background:
                      'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                    outline: '2px solid white',
                    outlineOffset: '-3px',
                  }}
                >
                  <Mail className="w-4 h-4" />
                  <span>Get in Touch</span>
                </button>
                <a
                  href="mailto:sshemanthofficial@gmail.com"
                  className="text-xs text-center text-[#D7E2EA]/60 hover:text-white transition-colors"
                >
                  sshemanthofficial@gmail.com
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ServicesSection;
