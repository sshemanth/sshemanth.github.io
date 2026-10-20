import { animate, motion, useInView, useMotionValue, useTransform, type Variants } from 'framer-motion';
import { useEffect, useRef, type ReactNode } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

/** Fades and lifts its children into view once, when scrolled to. */
export function Reveal({ children, delay = 0, y = 28, className, as = 'div' }: { children: ReactNode; delay?: number; y?: number; className?: string; as?: 'div' | 'li' | 'article' }) {
  const C = motion[as];
  return (
    <C
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.75, ease, delay }}
    >
      {children}
    </C>
  );
}

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
export const rise: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

/** Counts a number up from 0 when it scrolls into view. */
export function CountUp({ value, decimals, className }: { value: number; decimals: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0 });
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => v.toFixed(decimals));
  useEffect(() => {
    if (!inView) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { mv.set(value); return; }
    const c = animate(mv, value, { duration: 1.6, ease });
    return () => c.stop();
  }, [inView, value, mv]);
  return <motion.span ref={ref} className={className}>{text}</motion.span>;
}
