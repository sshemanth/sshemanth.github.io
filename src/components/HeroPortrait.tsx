import React from 'react';
import Magnet from './Magnet';

interface HeroPortraitProps {
  initialImage?: string;
}

const BASE = import.meta.env.BASE_URL || '/';
const normalizePath = (path: string) => {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE}${clean}`;
};

const DEFAULT_PORTRAIT = normalizePath('images/hemanth-portrait.jpg');

export const HeroPortrait: React.FC<HeroPortraitProps> = ({
  initialImage,
}) => {
  const portraitSrc = initialImage ? normalizePath(initialImage) : DEFAULT_PORTRAIT;

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Magnet Effect Wrapping Image */}
      <Magnet
        padding={150}
        strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
        className="w-full flex justify-center"
      >
        <div className="relative w-full overflow-hidden rounded-t-[40px] sm:rounded-t-[60px] shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
          <img
            src={portraitSrc}
            alt="Sri Sai Hemanth Bollepalli - Medical AI Researcher Portrait"
            className="w-full h-auto object-cover block select-none pointer-events-none transition-all duration-300"
            referrerPolicy="no-referrer"
            loading="eager"
          />

          {/* Seamless gradient fade at bottom to blend into #0C0C0C */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/10 to-transparent pointer-events-none" />

          {/* Identity Tag */}
          <div className="absolute top-4 left-4 z-20 pointer-events-none">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
              Sri Sai Hemanth Bollepalli
            </span>
          </div>
        </div>
      </Magnet>
    </div>
  );
};

export default HeroPortrait;
