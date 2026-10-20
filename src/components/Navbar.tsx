import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { nav, profile } from '../data/content';

/** Sticky top bar: scroll progress, active-section pill, mobile drawer. */
export function Navbar() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    nav.forEach((n) => { const el = document.getElementById(n.id); if (el) io.observe(el); });
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect(); };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <motion.div className="progress" style={{ scaleX: progress }} aria-hidden="true" />
      <header className={'bar' + (scrolled ? ' scrolled' : '')}>
        <div className="wrap">
          <a className="mark" href="#top">{profile.name}</a>
          <nav className="menu" aria-label="Sections">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className={active === n.id ? 'active' : ''} aria-current={active === n.id ? 'true' : undefined}>
                {active === n.id && <motion.span layoutId="navpill" className="pill" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
                {n.label}
              </a>
            ))}
          </nav>
          <a className="say" href="#contact">Get in touch</a>
          <button className="burger" type="button" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            <span />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="drawer"
            aria-label="Sections"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22 }}
          >
            {[...nav, { id: 'contact', label: 'Contact' }].map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>{n.label}</a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
