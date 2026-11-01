import React from 'react';
import FadeIn from './FadeIn';
import { FileText, ExternalLink, Github, BookOpen } from 'lucide-react';

export const PublicationsSection: React.FC = () => {
  return (
    <section
      id="publications"
      className="w-full bg-[#0C0C0C] text-[#D7E2EA] py-16 sm:py-20 md:py-24 select-none relative border-t border-white/5"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-[#B600A8]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B600A8]">
              Peer-Reviewed &amp; Conference Research
            </span>
          </div>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight mb-8 sm:mb-12"
            style={{ fontSize: 'clamp(2.4rem, 8vw, 120px)' }}
          >
            Publications
          </h2>
        </FadeIn>

        {/* Publication Cards */}
        <div className="space-y-6">
          <FadeIn delay={0.1} y={20}>
            <div className="bg-[#121318] border border-[#272932] hover:border-white/20 rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 md:p-10 shadow-2xl transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#B600A8]/15 via-transparent to-transparent blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="space-y-3 max-w-3xl">
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider text-white bg-[#B600A8] shadow-sm">
                      Accepted
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider text-cyan-300 bg-cyan-950/60 border border-cyan-800/50">
                      MICCAI 2026 BraTS-METS Challenge
                    </span>
                  </div>

                  {/* Paper Title */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-white leading-tight">
                    Region-Aware Residual Encoder nnU-Net for Multi-Region Brain Metastasis Segmentation
                  </h3>

                  {/* Author */}
                  <p className="text-sm sm:text-base font-medium text-white/90">
                    Sri Sai Hemanth Bollepalli
                  </p>

                  {/* Venue Details */}
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light leading-relaxed">
                    MICCAI 2026 BraTS-METS Challenge · Accepted, to appear in the Springer Lecture Notes in Computer Science (LNCS) proceedings.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="shrink-0 flex flex-wrap items-center gap-3 pt-2 md:pt-0">
                  <a
                    href="https://openreview.net/forum?noteId=swAAtfR82q"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0C0C0C] hover:bg-[#D7E2EA] text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md hover:scale-105"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#B600A8]" />
                    <span>Paper</span>
                    <ExternalLink className="w-3 h-3 text-[#0C0C0C]/60" />
                  </a>

                  <a
                    href="https://github.com/sshemanth/brain-tumor-segmentation"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer hover:scale-105"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Code</span>
                    <ExternalLink className="w-3 h-3 text-white/60" />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
