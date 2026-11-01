import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ChevronLeft, ChevronRight, Github, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  onOpenContact,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && project) {
        const count = 3;
        setActiveImageIndex((prev) => (prev + 1) % count);
      }
      if (e.key === 'ArrowLeft' && project) {
        const count = 3;
        setActiveImageIndex((prev) => (prev - 1 + count) % count);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, project, onClose]);

  if (!project) return null;

  const images = [
    { url: project.col2Image, label: project.col2Label || 'Illustrative image' },
    ...(project.col1Image1 ? [{ url: project.col1Image1, label: project.col1Label1 || 'Detail View' }] : []),
    ...(project.col1Image2 ? [{ url: project.col1Image2, label: project.col1Label2 || 'Architecture' }] : []),
  ];

  const currentImage = images[activeImageIndex] || images[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl bg-[#101012] border border-[#2D3038] rounded-[36px] overflow-hidden shadow-2xl z-10 my-auto text-[#D7E2EA] flex flex-col max-h-[92vh]"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#22252C] shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-xl sm:text-2xl font-black text-white">{project.number}</span>
                <span className="text-xs uppercase tracking-widest text-[#B600A8] font-bold truncate">
                  {project.tag || project.category}
                </span>
                <span className="text-[#D7E2EA]/40 hidden sm:inline">·</span>
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white truncate hidden md:block">
                  {project.title}
                </h3>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full text-[#D7E2EA]/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content body */}
            <div className="overflow-y-auto p-5 sm:p-8 space-y-6">
              {/* Main Media Showcase */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-3xl overflow-hidden bg-[#14151B] border border-[#26282E] p-2 flex items-center justify-center group">
                <img
                  src={currentImage.url}
                  alt={`${project.title} - ${currentImage.label}`}
                  className="w-full h-full object-contain rounded-2xl transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />

                {/* Image navigation controls (only if > 1 image) */}
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length)
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm transition-all opacity-80 hover:opacity-100 cursor-pointer"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImageIndex((prev) => (prev + 1) % images.length)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm transition-all opacity-80 hover:opacity-100 cursor-pointer"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Image caption badge */}
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs text-white border border-white/10">
                  {currentImage.label} {images.length > 1 ? `(${activeImageIndex + 1}/${images.length})` : ''}
                </div>
              </div>

              {/* Thumbnails (only if multiple images) */}
              {images.length > 1 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative aspect-[16/10] rounded-2xl overflow-hidden border-2 transition-all cursor-pointer bg-[#14151B] p-1 ${
                        activeImageIndex === idx
                          ? 'border-[#B600A8] ring-2 ring-[#B600A8]/30 scale-[1.02]'
                          : 'border-[#26282E] opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img.url}
                        alt={img.label}
                        className="w-full h-full object-contain rounded-xl"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Title, Supervisor & Overview */}
              <div>
                <h4 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-1">
                  {project.title}
                </h4>
                {project.supervisor && (
                  <p className="text-xs uppercase tracking-wider text-cyan-400 font-medium mb-3">
                    Supervised by: {project.supervisor}
                  </p>
                )}
                <p className="text-sm sm:text-base leading-relaxed text-[#D7E2EA]/85 font-light">
                  {project.overview}
                </p>
              </div>

              {/* Key Contributions */}
              <div className="pt-2">
                <h5 className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-3">
                  Key Contributions
                </h5>
                <ul className="space-y-2.5">
                  {project.whatIDid.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D7E2EA]/80 font-light">
                      <CheckCircle2 className="w-4 h-4 text-[#B600A8] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benchmark Results Table (if present) */}
              {project.benchmarkTable && project.benchmarkTable.length > 0 && (
                <div className="pt-2">
                  <h5 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-3">
                    Benchmark Results (HAM10000 7-Class Evaluation)
                  </h5>
                  <div className="overflow-x-auto rounded-2xl border border-[#2D3038] bg-[#16171E]">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-white/5 border-b border-[#2D3038] text-[#D7E2EA]/70 uppercase tracking-wider">
                        <tr>
                          <th className="py-2.5 px-4 font-semibold">Model Configuration</th>
                          <th className="py-2.5 px-4 font-semibold">External Data</th>
                          <th className="py-2.5 px-4 font-semibold">Local OOF</th>
                          <th className="py-2.5 px-4 font-semibold">Official Test</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {project.benchmarkTable.map((row, idx) => (
                          <tr
                            key={idx}
                            className={row.isBest ? 'bg-[#B600A8]/10 text-white font-medium' : 'text-[#D7E2EA]/80'}
                          >
                            <td className="py-2.5 px-4">
                              {row.isBest ? (
                                <span className="font-bold text-white flex items-center gap-1.5">
                                  <span>{row.model}</span>
                                  <span className="text-[10px] bg-[#B600A8] text-white px-1.5 py-0.2 rounded font-mono">
                                    BEST
                                  </span>
                                </span>
                              ) : (
                                row.model
                              )}
                            </td>
                            <td className="py-2.5 px-4 font-mono">{row.externalData}</td>
                            <td className="py-2.5 px-4 font-mono">{row.localOOF}</td>
                            <td className="py-2.5 px-4 font-mono font-bold text-white">{row.officialTest}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Results & Next Steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {project.result && (
                  <div className="bg-[#16171C] rounded-2xl p-4 border border-[#26282E]">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 block mb-1">
                      Outcome
                    </span>
                    <p className="text-xs sm:text-sm text-white font-medium">
                      {project.result}
                    </p>
                  </div>
                )}
                {project.next && (
                  <div className="bg-[#16171C] rounded-2xl p-4 border border-[#26282E]">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-400 block mb-1">
                      Ongoing &amp; Next Stage
                    </span>
                    <p className="text-xs sm:text-sm text-[#D7E2EA]/90 font-light">
                      {project.next}
                    </p>
                  </div>
                )}
              </div>

              {/* Tools & Links */}
              <div className="pt-4 border-t border-[#22252C] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 block mb-2">
                    Tools &amp; Compute Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-xs text-[#D7E2EA] font-mono"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {project.links && project.links.length > 0 && (
                  <div className="flex items-center gap-2">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold uppercase tracking-wider text-white transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>{link.label}</span>
                        <ExternalLink className="w-3 h-3 text-[#D7E2EA]/60" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Footer action bar */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-[#22252C] bg-[#0E0F12] shrink-0">
              <span className="text-xs text-[#D7E2EA]/50">
                Sri Sai Hemanth Bollepalli · Medical AI Researcher
              </span>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white cursor-pointer"
                style={{
                  background:
                    'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25)',
                  outline: '2px solid white',
                  outlineOffset: '-3px',
                }}
              >
                Discuss Research / PhD
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
