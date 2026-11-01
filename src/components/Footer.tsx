import React from 'react';
import ContactButton from './ContactButton';
import { ArrowUp, Mail, Linkedin, Github, GraduationCap } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
  onOpenBio: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onOpenBio }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#080808] border-t border-white/10 text-[#D7E2EA] py-16 sm:py-20 relative z-20 select-none">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-between gap-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B600A8] mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Seeking PhD Positions in Medical AI · 2027</span>
            </div>
            <h3 className="hero-heading font-black uppercase text-3xl sm:text-5xl md:text-6xl tracking-tight mt-1">
              Let&apos;s Collaborate
            </h3>
            <p className="text-sm sm:text-base text-[#D7E2EA]/80 max-w-xl mt-3 font-light leading-relaxed">
              I am seeking PhD opportunities and research collaborations in Medical AI. If my research aligns with your group, I would be glad to connect.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-[#D7E2EA]">
              <a
                href="mailto:sshemanthofficial@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#B600A8]" />
                <span className="font-mono text-xs sm:text-sm">sshemanthofficial@gmail.com</span>
              </a>
              <span className="text-white/20">·</span>
              <a
                href="https://linkedin.com/in/sshemanth"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors text-xs sm:text-sm"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>linkedin.com/in/sshemanth</span>
              </a>
              <span className="text-white/20">·</span>
              <a
                href="https://github.com/sshemanth"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors text-xs sm:text-sm"
              >
                <Github className="w-4 h-4 text-purple-400" />
                <span>github.com/sshemanth</span>
              </a>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-4">
            <ContactButton onClick={onOpenContact} label="Get in Touch" />
            <button
              type="button"
              onClick={scrollToTop}
              className="p-3.5 rounded-full border border-white/20 hover:border-white text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#D7E2EA]/50 font-light">
          <div className="flex flex-wrap items-center gap-6 uppercase tracking-wider">
            <button
              onClick={() => {
                const el = document.getElementById('about');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={onOpenBio}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Credentials
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('interests');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Interests
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('projects');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={onOpenContact}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          <div>
            © 2026 Sri Sai Hemanth Bollepalli · Sydney, Australia
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
