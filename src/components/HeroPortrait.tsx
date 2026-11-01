import React, { useState, useRef, useEffect } from 'react';
import Magnet from './Magnet';
import { Camera, Upload, RotateCcw, Image as ImageIcon } from 'lucide-react';

interface HeroPortraitProps {
  initialImage?: string;
}

const DEFAULT_PORTRAIT = '/images/hemanth-portrait.jpg';
const BACKUP_PORTRAIT = '/images/hemanth-portrait.jpg';

export const HeroPortrait: React.FC<HeroPortraitProps> = ({
  initialImage = DEFAULT_PORTRAIT,
}) => {
  const [currentImage, setCurrentImage] = useState<string>(() => {
    return localStorage.getItem('hemanth_portfolio_portrait') || initialImage;
  });
  const [showControls, setShowControls] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCurrentImage(result);
          try {
            localStorage.setItem('hemanth_portfolio_portrait', result);
          } catch {
            // LocalStorage quota might be exceeded for large files
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetToDefault = () => {
    setCurrentImage(DEFAULT_PORTRAIT);
    localStorage.removeItem('hemanth_portfolio_portrait');
  };

  const handleSelectStudioAvatar = () => {
    setCurrentImage(BACKUP_PORTRAIT);
    try {
      localStorage.setItem('hemanth_portfolio_portrait', BACKUP_PORTRAIT);
    } catch {
      // ignore
    }
  };

  return (
    <div
      className="relative group w-full flex flex-col items-center"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="image/*"
        className="hidden"
      />

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
            src={currentImage}
            alt="Sri Sai Hemanth Bollepalli - Medical AI Researcher Portrait"
            className="w-full h-auto object-cover block select-none pointer-events-none transition-all duration-300"
            referrerPolicy="no-referrer"
            loading="eager"
            onError={(e) => {
              // Fallback to backup portrait if direct path resolution fails
              if (currentImage !== BACKUP_PORTRAIT) {
                setCurrentImage(BACKUP_PORTRAIT);
              }
            }}
          />

          {/* Seamless gradient fade at bottom to blend into #0C0C0C */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/10 to-transparent pointer-events-none" />

          {/* Active Preset Tag */}
          <div className="absolute top-4 left-4 z-20 pointer-events-none">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
              Sri Sai Hemanth Bollepalli
            </span>
          </div>
        </div>
      </Magnet>

      {/* Floating Portrait Controls / Upload Toolbar */}
      <div
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-30 transition-all duration-300 flex items-center gap-1.5 p-1.5 rounded-full bg-[#14151A]/90 backdrop-blur-md border border-white/15 shadow-2xl ${
          showControls ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          title="Upload your own portrait photo"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors cursor-pointer"
        >
          <Upload className="w-3.5 h-3.5 text-cyan-400" />
          <span>Upload Photo</span>
        </button>

        <button
          type="button"
          onClick={handleSelectStudioAvatar}
          title="Switch to AI Studio Portrait"
          className={`px-2.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
            currentImage === BACKUP_PORTRAIT
              ? 'bg-[#B600A8] text-white'
              : 'text-[#D7E2EA]/70 hover:text-white hover:bg-white/5'
          }`}
        >
          <ImageIcon className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={handleResetToDefault}
          title="Reset to uploaded photo"
          className={`px-2.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
            currentImage === DEFAULT_PORTRAIT
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
              : 'text-[#D7E2EA]/70 hover:text-white hover:bg-white/5'
          }`}
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Subtle hint when not hovering on mobile */}
      <div className="sm:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap z-20">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="text-[11px] text-[#D7E2EA]/50 hover:text-white flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded-full"
        >
          <Camera className="w-3 h-3 text-[#B600A8]" />
          <span>Change Photo</span>
        </button>
      </div>
    </div>
  );
};

export default HeroPortrait;
