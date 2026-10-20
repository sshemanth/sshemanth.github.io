import { MotionConfig } from 'framer-motion';
import { useCallback, useRef, useState } from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { About, BackToTop, Background, Contact, Footer, Now, Publications, Research, Toast, Vision } from './components/Sections';

export default function App() {
  const [toast, setToast] = useState('');
  const timer = useRef<number>();
  const notify = useCallback((msg: string) => {
    setToast(msg);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setToast(''), 1800);
  }, []);

  return (
    // reducedMotion="user" turns animations off for people who ask their OS for less motion
    <MotionConfig reducedMotion="user">
      <a className="skip" href="#about">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Vision />
        <Research />
        <Publications />
        <Now />
        <Background />
        <Contact onCopied={notify} />
      </main>
      <Footer />
      <BackToTop />
      <Toast msg={toast} />
    </MotionConfig>
  );
}
