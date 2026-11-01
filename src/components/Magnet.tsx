import React, { useRef, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let isHoveringNear = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const isNear =
        e.clientX >= rect.left - padding &&
        e.clientX <= rect.right + padding &&
        e.clientY >= rect.top - padding &&
        e.clientY <= rect.bottom + padding;

      if (isNear) {
        isHoveringNear = true;
        const dx = (e.clientX - centerX) / strength;
        const dy = (e.clientY - centerY) / strength;
        element.style.transition = activeTransition;
        element.style.transform = `translate3d(${dx}px, ${dy}px, 0px)`;
      } else if (isHoveringNear) {
        isHoveringNear = false;
        element.style.transition = inactiveTransition;
        element.style.transform = 'translate3d(0px, 0px, 0px)';
      }
    };

    const handleMouseLeave = () => {
      if (element) {
        isHoveringNear = false;
        element.style.transition = inactiveTransition;
        element.style.transform = 'translate3d(0px, 0px, 0px)';
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div
      ref={ref}
      className={`inline-block ${className}`}
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  );
};

export default Magnet;
