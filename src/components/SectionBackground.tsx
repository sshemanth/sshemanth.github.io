import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

const BASE = import.meta.env.BASE_URL || '/';
const normalizePath = (path: string) => {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE}${clean}`;
};

export interface SectionBackgroundProps {
  /** Relative filename inside /images/bg/, e.g. "bg-hero.webp" or "bg-hero.png" */
  imageName: string;
  /** Positioning: 'right' (default) or 'center' */
  position?: 'right' | 'center';
  /** 'dark' for dark sections (#0C0C0C), 'light' for white Research Interests section (#FFFFFF) */
  theme?: 'dark' | 'light';
  /** If true, loads eagerly (used for Hero). Otherwise lazy loads when entering viewport. */
  priority?: boolean;
  /** Custom opacity class if needed. Defaults to soft 40-55% desktop, 15-25% mobile */
  opacityClassName?: string;
  /** Custom parallax distance range in pixels. Defaults to [-30, 30] */
  parallaxOffset?: number;
}

export const SectionBackground: React.FC<SectionBackgroundProps> = ({
  imageName,
  position = 'right',
  theme = 'dark',
  priority = false,
  opacityClassName,
  parallaxOffset = 30,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(priority);
  const prefersReducedMotion = useReducedMotion();

  // Lazy loading observer for non-priority backgrounds
  useEffect(() => {
    if (priority || isLoaded) return;

    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '300px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [priority, isLoaded]);

  // Parallax scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-parallaxOffset, parallaxOffset]
  );

  const fullImagePath = normalizePath(`images/bg/${imageName}`);

  // Base soft opacities: soft on desktop (40-55%), lower on mobile (15-25%)
  const defaultOpacity =
    opacityClassName ||
    (theme === 'light'
      ? 'opacity-25 sm:opacity-35 md:opacity-45'
      : 'opacity-20 sm:opacity-40 md:opacity-55');

  // Gradient overlay from left to right to protect text legibility
  const gradientOverlay =
    theme === 'light'
      ? 'bg-gradient-to-r from-white via-white/85 to-white/20'
      : position === 'center'
      ? 'bg-gradient-to-b from-[#0C0C0C]/80 via-transparent to-[#0C0C0C]/80'
      : 'bg-gradient-to-r from-[#0C0C0C] via-[#0C0C0C]/85 to-transparent';

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
    >
      {/* Background Image Layer with Parallax */}
      {isLoaded && (
        <motion.div
          style={{
            backgroundImage: `url("${fullImagePath}")`,
            backgroundSize: 'cover',
            backgroundPosition: position === 'center' ? 'center center' : 'right center',
            backgroundRepeat: 'no-repeat',
            y,
          }}
          className={`absolute -top-10 -bottom-10 left-0 right-0 w-full h-[calc(100%+80px)] transition-opacity duration-700 ${defaultOpacity}`}
        />
      )}

      {/* Gradient Overlay from left (solid) to right (transparent) for text contrast */}
      <div className={`absolute inset-0 ${gradientOverlay}`} />
    </div>
  );
};

export default SectionBackground;
