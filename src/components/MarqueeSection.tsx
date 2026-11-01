import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';
import FadeIn from './FadeIn';

interface GalleryCardItem {
  id: string;
  src: string;
  caption: string;
  tag: string;
  title: string;
}

const TOP_GALLERY_CARDS: GalleryCardItem[] = [
  {
    id: 'card-brain',
    src: '/images/card-brain.png',
    caption: 'MICCAI 2026 · Brain Metastasis Segmentation',
    tag: 'MICCAI 2026',
    title: 'Brain Metastasis Segmentation',
  },
  {
    id: 'card-knee',
    src: '/images/card-knee.png',
    caption: '0.88 Macro AUC · Knee MRI Multi-Label Detection',
    tag: '0.88 Macro AUC',
    title: 'Knee MRI Multi-Label Detection',
  },
  {
    id: 'card-skin',
    src: '/images/card-skin.png',
    caption: '0.515 Test Score · Skin Lesion Classification',
    tag: '0.515 Test Score',
    title: 'Skin Lesion Classification',
  },
  {
    id: 'card-compare',
    src: '/images/card-compare.png',
    caption: 'nnU-Net vs Primus · BraTS-METS Comparison',
    tag: 'nnU-Net vs Primus',
    title: 'BraTS-METS Comparison',
  },
];

interface GalleryCardProps {
  card: GalleryCardItem;
  index: number;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ card, index }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <FadeIn delay={0.08 * index} y={25} className="w-full">
      <div className="group relative w-full aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-[#14151B] border border-white/10 hover:border-cyan-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between">
        {hasError ? (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-[#14151B] text-center">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2 text-[#D7E2EA]/40">
              <ImageOff className="w-5 h-5 text-cyan-400" />
            </div>
            <p className="text-xs font-medium text-[#D7E2EA]/85 leading-snug">
              {card.caption}
            </p>
          </div>
        ) : (
          <>
            <img
              src={card.src}
              alt={card.caption}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setHasError(true)}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none"
            />
            {/* Subtle gradient scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none transition-opacity duration-300" />

            {/* Bottom caption overlay */}
            <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 pointer-events-none flex flex-col justify-end">
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-cyan-300 font-semibold mb-1">
                {card.tag}
              </span>
              <p className="text-xs sm:text-sm font-medium text-white leading-tight">
                {card.caption}
              </p>
            </div>
          </>
        )}
      </div>
    </FadeIn>
  );
};

export const MarqueeSection: React.FC = () => {
  return (
    <section
      aria-label="Top Gallery"
      className="bg-[#0C0C0C] pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 md:px-10 overflow-hidden relative select-none"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/70">
              Top Gallery · Key Research Artifacts
            </span>
          </div>
          <span className="text-xs font-mono text-[#D7E2EA]/40 hidden sm:inline">
            4 Core Milestones
          </span>
        </div>

        {/* 4 Cards Grid - Exact order requested */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {TOP_GALLERY_CARDS.map((card, idx) => (
            <GalleryCard key={card.id} card={card} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
