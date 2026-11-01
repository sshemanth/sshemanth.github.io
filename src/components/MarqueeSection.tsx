import React from 'react';
import FadeIn from './FadeIn';

interface GalleryCardItem {
  id: string;
  src: string;
  caption: string;
}

const BASE = import.meta.env.BASE_URL || '/';
const normalizePath = (path: string) => {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE}${clean}`;
};

const TOP_GALLERY_CARDS: GalleryCardItem[] = [
  {
    id: 'card-brain-ai',
    src: normalizePath('images/card-brain-ai.png'),
    caption: 'MICCAI 2026 · Brain Metastasis Segmentation',
  },
  {
    id: 'card-knee-ai',
    src: normalizePath('images/card-knee-ai.png'),
    caption: '0.88 Macro AUC · Knee MRI Multi-Label Detection',
  },
  {
    id: 'card-skin-ai',
    src: normalizePath('images/card-skin-ai.png'),
    caption: '0.515 ISIC Balanced Accuracy · Skin Lesion Classification',
  },
  {
    id: 'card-compare-ai',
    src: normalizePath('images/card-compare-ai.png'),
    caption: 'nnU-Net vs Primus · BraTS-METS Comparison',
  },
];

export const MarqueeSection: React.FC = () => {
  return (
    <section
      aria-label="Top Gallery"
      className="w-full bg-[#0C0C0C] py-12 sm:py-16 md:py-20 select-none relative"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/75">
              Top Gallery · Key Research Artifacts
            </span>
          </div>
          <span className="text-xs font-mono text-[#D7E2EA]/40 hidden sm:inline">
            01 — 04 Core Milestones
          </span>
        </div>

        {/* 4 Cards Grid: 4 columns desktop (lg), 2 columns tablet (sm), 1 column mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {TOP_GALLERY_CARDS.map((card, idx) => (
            <FadeIn key={card.id} delay={idx * 0.08} y={20} className="w-full flex flex-col">
              <div className="group relative w-full aspect-square rounded-[28px] sm:rounded-[32px] overflow-hidden bg-[#16171B] border border-white/10 hover:border-white/30 shadow-2xl transition-all duration-300">
                <img
                  src={card.src}
                  alt={card.caption}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 block"
                />
              </div>
              <p className="text-xs sm:text-sm font-medium text-[#D7E2EA]/90 mt-3 text-center leading-snug">
                {card.caption}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
