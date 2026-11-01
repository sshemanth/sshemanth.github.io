import React from 'react';
import FadeIn from './FadeIn';
import { FileText, ExternalLink, Github, BookOpen } from 'lucide-react';

const BASE = import.meta.env.BASE_URL || '/';
const normalizePath = (path: string) => {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE}${clean}`;
};

export const PublicationsSection: React.FC = () => {
  return (
    <section
      id="publications"
      className="w-full bg-transparent text-[#D7E2EA] py-16 sm:py-20 md:py-24 select-none relative z-10 border-t border-white/5"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-[#B600A8]" />
            <span className="text-[13px] uppercase tracking-widest font-semibold text-[#D84ED2]">
              Peer-Reviewed &amp; Conference Research
            </span>
          </div>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight mb-8 sm:mb-12 text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Publications
          </h2>
        </FadeIn>

        {/* Publication Cards */}
        <div className="space-y-6">
          <FadeIn delay={0.1} y={20}>
            <div className="bg-[#121318] border border-[#272932] hover:border-white/20 rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 md:p-10 shadow-2xl transition-all duration-300 relative overflow-hidden group">
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                {/* Left Text & Actions */}
                <div className="space-y-4 max-w-2xl flex-1">
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#B600A8] shadow-sm">
                      Accepted
                    </span>
                    <span className="px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-cyan-300 bg-cyan-950/60 border border-cyan-800/50">
                      MICCAI 2026 BraTS-METS Challenge
                    </span>
                  </div>

                  {/* Paper Title */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-white leading-snug">
                    Region-Aware Residual Encoder nnU-Net for Multi-Region Brain Metastasis Segmentation
                  </h3>

                  {/* Author */}
                  <p className="text-base font-medium text-white/95">
                    Sri Sai Hemanth Bollepalli
                  </p>

                  {/* Venue Details */}
                  <p className="text-sm sm:text-base text-[#c4c4cc] font-light leading-relaxed">
                    MICCAI 2026 BraTS-METS Challenge · Accepted, to appear in the Springer Lecture Notes in Computer Science (LNCS) proceedings.
                  </p>

                  {/* Action Buttons */}
                  <div className="shrink-0 flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href="https://openreview.net/forum?noteId=swAAtfR82q"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0C0C0C] hover:bg-[#D7E2EA] text-sm font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md hover:scale-105"
                    >
                      <FileText className="w-4 h-4 text-[#B600A8]" />
                      <span>Paper</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#0C0C0C]/60" />
                    </a>

                    <a
                      href="https://github.com/sshemanth/brain-tumor-segmentation"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                      <ExternalLink className="w-3.5 h-3.5 text-white/60" />
                    </a>
                  </div>
                </div>

                {/* Right Image Container - Neatly Cropped Brain Image */}
                <div className="w-full lg:w-[360px] xl:w-[420px] shrink-0">
                  <div className="relative aspect-[4/3] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-[#0C0C0C] group-hover:border-cyan-500/40 transition-colors shadow-2xl">
                    <img
                      src={normalizePath('images/brain-visual.png')}
                      alt="Brain Metastasis Segmentation Visual"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 block"
                    />
                    <div className="absolute bottom-2.5 right-2.5 z-10 pointer-events-none">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-300 bg-black/75 px-2.5 py-1 rounded-full border border-white/10">
                        BraTS-METS Visual
                      </span>
                    </div>
                  </div>
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
