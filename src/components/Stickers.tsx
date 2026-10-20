import { motion } from 'framer-motion';
import type { CSSProperties, ReactElement } from 'react';

/* Original sticker illustrations (64×64), one for each research theme. */
const S = { stroke: '#1b1f3a', strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' } as const;

export const icons: Record<string, ReactElement> = {
  brain: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M31 11c-3-3-10-3-12 2-6 0-9 5-7 10-4 3-4 10 1 12-1 6 4 10 10 8 2 4 6 6 8 3z" fill="#c9b8ff" />
      <path d="M33 11c3-3 10-3 12 2 6 0 9 5 7 10 4 3 4 10-1 12 1 6-4 10-10 8-2 4-6 6-8 3z" fill="#ffc4d6" />
      <path {...S} d="M31 11c-3-3-10-3-12 2-6 0-9 5-7 10-4 3-4 10 1 12-1 6 4 10 10 8 2 4 6 6 8 3zM33 11c3-3 10-3 12 2 6 0 9 5 7 10 4 3 4 10-1 12 1 6-4 10-10 8-2 4-6 6-8 3zM32 11v35M20 21c3 0 5 2 5 5M15 33c4-1 7 1 8 4M44 21c-3 0-5 2-5 5M49 33c-4-1-7 1-8 4M24 46c1-3 4-4 7-3M40 46c-1-3-4-4-7-3" />
      <circle cx="44" cy="30" r="3.4" fill="#ff6b6b" stroke="#1b1f3a" strokeWidth="2" />
    </svg>
  ),
  mri: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="8" y="12" width="48" height="36" rx="12" fill="#a8ecea" />
      <circle cx="32" cy="30" r="11" fill="#fff" />
      <rect x="4" y="44" width="56" height="6" rx="3" fill="#ffe2a8" />
      <g {...S}><rect x="8" y="12" width="48" height="36" rx="12" /><circle cx="32" cy="30" r="11" /><circle cx="32" cy="30" r="5" /><rect x="4" y="44" width="56" height="6" rx="3" /><path d="M16 20h4M44 20h4" /></g>
    </svg>
  ),
  knee: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M24 6h16v14c4 2 6 6 4 10H20c-2-4 0-8 4-10z" fill="#fff4df" />
      <path d="M20 36h24c2 4 0 8-4 10v12H24V46c-4-2-6-6-4-10z" fill="#fff4df" />
      <circle cx="46" cy="33" r="5" fill="#a8ecea" />
      <g {...S}><path d="M24 6h16v14c4 2 6 6 4 10H20c-2-4 0-8 4-10zM20 36h24c2 4 0 8-4 10v12H24V46c-4-2-6-6-4-10z" /><circle cx="46" cy="33" r="5" /></g>
      <path d="M22 33h20" stroke="#0aa5a0" strokeWidth="2.4" strokeDasharray="3 3" />
    </svg>
  ),
  skin: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="27" cy="27" r="17" fill="#ffecea" />
      <path d="M22 22c4-4 10-2 11 3 2 5-3 9-7 8-5-1-7-7-4-11z" fill="#c97b5a" />
      <circle cx="31" cy="24" r="2" fill="#7b4a3a" />
      <g {...S}><circle cx="27" cy="27" r="17" /><path d="M39 39l14 14" strokeWidth="5" /><path d="M22 22c4-4 10-2 11 3 2 5-3 9-7 8-5-1-7-7-4-11z" /></g>
    </svg>
  ),
  molecule: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <g {...S}><path d="M20 20l12 12 14-8M32 32l-4 16M32 32l14 12" /></g>
      <circle cx="20" cy="20" r="7" fill="#bfd6ff" stroke="#1b1f3a" strokeWidth="2.4" />
      <circle cx="32" cy="32" r="8" fill="#c9b8ff" stroke="#1b1f3a" strokeWidth="2.4" />
      <circle cx="46" cy="24" r="6" fill="#a8ecea" stroke="#1b1f3a" strokeWidth="2.4" />
      <circle cx="28" cy="49" r="6" fill="#ffc4d6" stroke="#1b1f3a" strokeWidth="2.4" />
      <circle cx="46" cy="44" r="5" fill="#ffe2a8" stroke="#1b1f3a" strokeWidth="2.4" />
    </svg>
  ),
  network: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <g stroke="#1b1f3a" strokeWidth="1.6" opacity="0.55">
        {[14, 32, 50].map((y1) => [22, 42].map((y2) => <path key={`${y1}-${y2}`} d={`M12 ${y1}L32 ${y2}`} />))}
        {[22, 42].map((y1) => <path key={`o${y1}`} d={`M32 ${y1}L52 32`} />)}
      </g>
      {[14, 32, 50].map((y) => <circle key={y} cx="12" cy={y} r="5" fill="#bfd6ff" stroke="#1b1f3a" strokeWidth="2.2" />)}
      {[22, 42].map((y) => <circle key={y} cx="32" cy={y} r="5.5" fill="#c9b8ff" stroke="#1b1f3a" strokeWidth="2.2" />)}
      <circle cx="52" cy="32" r="6" fill="#ffc4d6" stroke="#1b1f3a" strokeWidth="2.2" />
    </svg>
  ),
  dna: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M22 6c0 14 20 16 20 26S22 46 22 58" stroke="#6d4aff" strokeWidth="3.4" fill="none" strokeLinecap="round" />
      <path d="M42 6c0 14-20 16-20 26s20 14 20 26" stroke="#ec4899" strokeWidth="3.4" fill="none" strokeLinecap="round" />
      <g stroke="#1b1f3a" strokeWidth="2" strokeLinecap="round"><path d="M25 13h14M30 21h4M26 43h12M30 51h4M24 32h16" /></g>
    </svg>
  ),
  microscope: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="26" y="8" width="10" height="24" rx="3" transform="rotate(-20 31 20)" fill="#a8ecea" />
      <path d="M14 54h36" stroke="#1b1f3a" strokeWidth="3" strokeLinecap="round" />
      <g {...S}><rect x="26" y="8" width="10" height="24" rx="3" transform="rotate(-20 31 20)" /><path d="M36 30c10 2 12 14 4 20H24M22 44h12M30 38v6" /></g>
      <circle cx="30" cy="34" r="3" fill="#ffe2a8" stroke="#1b1f3a" strokeWidth="2" />
    </svg>
  ),
  cap: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 14L6 26l26 12 26-12z" fill="#c9b8ff" />
      <path d="M18 32v10c4 5 24 5 28 0V32L32 38z" fill="#6d4aff" />
      <g {...S}><path d="M32 14L6 26l26 12 26-12zM18 32v10c4 5 24 5 28 0V32M52 29v14" /></g>
      <circle cx="52" cy="45" r="3.2" fill="#f5a524" stroke="#1b1f3a" strokeWidth="2" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="8" y="10" width="48" height="44" rx="10" fill="#fff" />
      <rect x="16" y="34" width="7" height="12" rx="2" fill="#bfd6ff" />
      <rect x="28" y="26" width="7" height="20" rx="2" fill="#c9b8ff" />
      <rect x="40" y="18" width="7" height="28" rx="2" fill="#ffc4d6" />
      <g {...S}><rect x="8" y="10" width="48" height="44" rx="10" /><path d="M16 46h32" /></g>
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 6c2 14 6 18 20 20-14 2-18 6-20 20-2-14-6-18-20-20 14-2 18-6 20-20z" fill="#ffe2a8" stroke="#1b1f3a" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M50 42c1 5 3 7 8 8-5 1-7 3-8 8-1-5-3-7-8-8 5-1 7-3 8-8z" fill="#ffc4d6" stroke="#1b1f3a" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  ),
};

type StickerProps = { name: keyof typeof icons | string; size?: number; rotate?: number; bg?: string; className?: string; style?: CSSProperties; float?: number; drag?: boolean; label?: string };

/** A die-cut style sticker: white border, soft shadow, gentle float, draggable. */
export function Sticker({ name, size = 96, rotate = 0, bg = '#fff', className = '', style, float = 0, drag = true, label }: StickerProps) {
  return (
    <motion.div
      className={'sticker ' + className}
      style={{ width: size, height: size, background: bg, ...style }}
      initial={{ opacity: 0, scale: 0.6, rotate: rotate - 12 }}
      animate={{ opacity: 1, scale: 1, rotate, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.5, delay: 0.3 + float * 0.12 },
        scale: { type: 'spring', stiffness: 220, damping: 14, delay: 0.3 + float * 0.12 },
        rotate: { type: 'spring', stiffness: 180, damping: 14, delay: 0.3 + float * 0.12 },
        y: { duration: 5 + float, repeat: Infinity, ease: 'easeInOut', delay: float * 0.4 },
      }}
      drag={drag}
      dragSnapToOrigin
      dragElastic={0.6}
      whileHover={{ scale: 1.08, rotate: rotate + 6 }}
      whileDrag={{ scale: 1.12, cursor: 'grabbing', zIndex: 5 }}
      title={label}
      aria-label={label}
      role={label ? 'img' : undefined}
    >
      {icons[name]}
    </motion.div>
  );
}

/** The sticker collage that fills the right side of the hero on wide screens. */
export function StickerBoard() {
  const items: StickerProps[] = [
    { name: 'brain', size: 150, rotate: -8, bg: '#f4efff', style: { left: '30%', top: '4%' }, float: 0, label: 'Brain MRI' },
    { name: 'mri', size: 116, rotate: 7, bg: '#e8fbf9', style: { left: '2%', top: '26%' }, float: 1, label: 'MRI scanner' },
    { name: 'knee', size: 104, rotate: -6, bg: '#fff8ea', style: { left: '70%', top: '24%' }, float: 2, label: 'Knee MRI' },
    { name: 'network', size: 112, rotate: 5, bg: '#eef3ff', style: { left: '36%', top: '42%' }, float: 3, label: 'Neural network' },
    { name: 'skin', size: 96, rotate: 10, bg: '#fff0ee', style: { left: '6%', top: '62%' }, float: 4, label: 'Skin lesion diagnosis' },
    { name: 'molecule', size: 104, rotate: -10, bg: '#f4efff', style: { left: '66%', top: '60%' }, float: 1.5, label: 'Drug molecules' },
    { name: 'cap', size: 92, rotate: -4, bg: '#f1ecff', style: { left: '38%', top: '76%' }, float: 2.5, label: 'PhD' },
    { name: 'spark', size: 64, rotate: 12, bg: '#fffbe9', style: { left: '84%', top: '4%' }, float: 3.5 },
    { name: 'dna', size: 70, rotate: 14, bg: '#fff', style: { left: '2%', top: '2%' }, float: 4.5, label: 'DNA' },
  ];
  return (
    <div className="board" aria-label="Research themes">
      {items.map((it) => <Sticker key={it.name} {...it} />)}
      <span className="board-hint" aria-hidden="true">drag the stickers</span>
    </div>
  );
}
