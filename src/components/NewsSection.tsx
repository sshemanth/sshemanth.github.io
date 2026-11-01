import React from 'react';
import FadeIn from './FadeIn';
import { Bell, Sparkles } from 'lucide-react';

interface NewsItem {
  date: string;
  badge?: string;
  content: string;
  highlight?: boolean;
}

const NEWS_ITEMS: NewsItem[] = [
  {
    date: 'Oct 2026',
    badge: 'MICCAI 2026',
    content: 'Paper accepted at the MICCAI 2026 BraTS-METS Challenge: "Region-Aware Residual Encoder nnU-Net for Multi-Region Brain Metastasis Segmentation".',
    highlight: true,
  },
  {
    date: 'Oct 2026',
    badge: 'Reviewer',
    content: 'Invited peer reviewer for the MICCAI 2026 BraTS-METS Challenge (reviewed 3 manuscripts).',
  },
  {
    date: 'Oct 2026',
    badge: 'Benchmark',
    content: 'Achieved 0.88 macro AUC on multi-label knee MRI abnormality detection using weak supervision from clinical radiology reports.',
  },
  {
    date: '2027',
    badge: 'PhD Seeking',
    content: 'Actively seeking PhD positions in Medical AI focusing on trustworthy multimodal deep learning and clinical translation.',
    highlight: true,
  },
];

export const NewsSection: React.FC = () => {
  return (
    <section
      id="news"
      className="w-full bg-transparent text-[#D7E2EA] py-16 sm:py-20 select-none relative z-10 border-t border-white/5"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <div className="flex items-center gap-2 mb-2">
            <Bell className="w-4 h-4 text-[#B600A8]" />
            <span className="text-[13px] uppercase tracking-widest font-semibold text-[#D84ED2]">
              Recent Updates &amp; Timeline
            </span>
          </div>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight mb-8 sm:mb-12 text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
          >
            News &amp; Updates
          </h2>
        </FadeIn>

        {/* Timeline list */}
        <div className="relative border-l border-white/15 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-6 sm:space-y-8">
          {NEWS_ITEMS.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.08} y={20} className="relative">
              {/* Timeline Bullet */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                  item.highlight
                    ? 'bg-[#B600A8] border-white shadow-[0_0_10px_rgba(182,0,168,0.8)]'
                    : 'bg-cyan-400 border-[#0C0C0C]'
                }`}
              />

              <div className="bg-[#121318] border border-[#272932] hover:border-white/20 rounded-2xl p-5 sm:p-6 shadow-md transition-all duration-200">
                <div className="flex flex-wrap items-center gap-3 mb-2.5">
                  <span className="text-[13px] font-mono font-semibold text-white bg-white/10 px-3 py-0.5 rounded-full">
                    {item.date}
                  </span>
                  {item.badge && (
                    <span
                      className={`text-[13px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded ${
                        item.highlight
                          ? 'text-pink-300 bg-pink-950/60 border border-pink-800/50'
                          : 'text-cyan-300 bg-cyan-950/60 border border-cyan-800/40'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                  {item.highlight && (
                    <span className="flex items-center gap-1 text-[13px] text-amber-400 font-mono">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Highlight</span>
                    </span>
                  )}
                </div>

                <p className="text-base text-[#E0E6ED] font-light leading-relaxed">
                  {item.content}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
