import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, GraduationCap, Award, Brain, CheckCircle, Sparkles } from 'lucide-react';

interface BioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const BioModal: React.FC<BioModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

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
            className="relative w-full max-w-4xl bg-[#121215] border border-[#2B2E37] rounded-[36px] overflow-hidden shadow-2xl z-10 my-auto text-[#D7E2EA] flex flex-col max-h-[92vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#252832] bg-[#0E0F12] shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#B600A8]/20 flex items-center justify-center text-[#B600A8]">
                  <Brain className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-white">
                    Sri Sai Hemanth Bollepalli
                  </h3>
                  <p className="text-xs text-[#D7E2EA]/60">
                    Medical AI Researcher · Sydney, Australia
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full text-[#D7E2EA]/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
              {/* Narrative Bio */}
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#B600A8] font-bold">
                  Biography &amp; Research Statement
                </span>
                <div className="text-sm sm:text-base leading-relaxed text-[#D7E2EA]/85 font-light space-y-3">
                  <p>
                    I&apos;m Sri Sai Hemanth Bollepalli, a Master of Artificial Intelligence student at the University of Technology Sydney (2025–2027), with a B.Tech in Computer Science from JNTU Kakinada (2020–2024).
                  </p>
                  <p>
                    My research sits at the meeting point of deep learning and healthcare. I work across several imaging types, including MRI and dermoscopy, and on clinical text such as radiology reports. My projects cover segmentation, multi-label disease detection, classification, and weak supervision with large language models.
                  </p>
                  <p>
                    My research is supervised by <strong className="text-white font-medium">A/Prof. Steve Ling</strong>, Head of the <strong className="text-cyan-300 font-medium">AIVision Nexus Laboratory</strong> at UTS. I am a co-author of an accepted paper at the <span className="text-white font-medium">MICCAI 2026 BraTS-METS Challenge</span> and served as a reviewer for the same challenge.
                  </p>
                  <p>
                    I am seeking a PhD in medical AI, where I can build trustworthy and clinically deployable AI systems that support diagnosis and decision-making.
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-[#252832]">
                <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold block mb-4">
                  Research Highlights
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-[#181920] border border-[#2B2E37] p-3.5 rounded-2xl">
                    <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider block mb-1">
                      Accepted Paper
                    </span>
                    <p className="text-xs text-white font-medium">
                      MICCAI 2026 BraTS-METS Challenge (to appear in Springer LNCS)
                    </p>
                  </div>

                  <div className="bg-[#181920] border border-[#2B2E37] p-3.5 rounded-2xl">
                    <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider block mb-1">
                      Reviewer
                    </span>
                    <p className="text-xs text-white font-medium">
                      MICCAI 2026 BraTS-METS Challenge (3 manuscripts reviewed)
                    </p>
                  </div>

                  <div className="bg-[#181920] border border-[#2B2E37] p-3.5 rounded-2xl">
                    <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider block mb-1">
                      0.88 Macro AUC
                    </span>
                    <p className="text-xs text-white font-medium">
                      Multi-label knee MRI detection across 12 abnormalities
                    </p>
                  </div>

                  <div className="bg-[#181920] border border-[#2B2E37] p-3.5 rounded-2xl">
                    <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider block mb-1">
                      Upcoming
                    </span>
                    <p className="text-xs text-white font-medium">
                      Brain metastasis journal extension &amp; MIDL 2027 submission
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="pt-4 border-t border-[#252832]">
                <span className="text-xs uppercase tracking-widest text-[#B600A8] font-bold block mb-4">
                  Education
                </span>
                <div className="space-y-3">
                  <div className="bg-[#16171E] border border-[#272933] p-4 rounded-2xl flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-tight">
                        Master of Artificial Intelligence
                      </h4>
                      <p className="text-xs text-[#D7E2EA]/70 mt-0.5">
                        University of Technology Sydney (UTS), Australia · 2025 – 2027
                      </p>
                      <p className="text-xs text-cyan-300 font-medium mt-1">
                        Research supervisor: A/Prof. Steve Ling, AIVision Nexus Laboratory
                      </p>
                      <p className="text-xs text-[#D7E2EA]/60 font-light mt-0.5">
                        Relevant subjects: Machine Learning, Reinforcement Learning, Medical Imaging Research Project
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#16171E] border border-[#272933] p-4 rounded-2xl flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-tight">
                        B.Tech in Computer Science
                      </h4>
                      <p className="text-xs text-[#D7E2EA]/70 mt-0.5">
                        JNTU Kakinada, India · 2020 – 2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="pt-4 border-t border-[#252832]">
                <span className="text-xs uppercase tracking-widest text-white/70 font-bold block mb-3">
                  Technical Skills
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                  <div className="bg-[#16171E] p-3 rounded-xl border border-white/5">
                    <span className="text-[10px] text-cyan-400 uppercase font-semibold block mb-1">
                      Medical AI
                    </span>
                    <p className="text-[#D7E2EA]/80 font-mono text-[11px] leading-relaxed">
                      Segmentation, multi-label classification, weak supervision, class imbalance
                    </p>
                  </div>
                  <div className="bg-[#16171E] p-3 rounded-xl border border-white/5">
                    <span className="text-[10px] text-[#B600A8] uppercase font-semibold block mb-1">
                      Deep Learning &amp; Models
                    </span>
                    <p className="text-[#D7E2EA]/80 font-mono text-[11px] leading-relaxed">
                      PyTorch, CNNs, Vision Transformers, ensembling, nnU-Net, Primus, ConvNeXt, EfficientNet, Swin
                    </p>
                  </div>
                  <div className="bg-[#16171E] p-3 rounded-xl border border-white/5">
                    <span className="text-[10px] text-emerald-400 uppercase font-semibold block mb-1">
                      Clinical NLP &amp; LLMs
                    </span>
                    <p className="text-[#D7E2EA]/80 font-mono text-[11px] leading-relaxed">
                      MedGemma, Qwen, Gemma, Ollama (local inference)
                    </p>
                  </div>
                  <div className="bg-[#16171E] p-3 rounded-xl border border-white/5">
                    <span className="text-[10px] text-purple-400 uppercase font-semibold block mb-1">
                      Computing &amp; Web
                    </span>
                    <p className="text-[#D7E2EA]/80 font-mono text-[11px] leading-relaxed">
                      Google Cloud, RunPod (A100 GPUs), Kaggle, Python, Git/GitHub, Next.js, Tailwind, Three.js
                    </p>
                  </div>
                </div>
              </div>

              {/* Current Research */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#B600A8]/20 via-[#7621B0]/20 to-cyan-500/10 border border-[#B600A8]/40 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#B600A8] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-white font-bold">
                    Current Research
                  </h4>
                  <ul className="text-xs text-[#D7E2EA]/90 mt-1 space-y-1 font-light">
                    <li>• Journal extension of brain metastasis segmentation, under the supervision of A/Prof. Steve Ling</li>
                    <li>• Knee MRI weak supervision paper for MIDL 2027</li>
                    <li>• 3D neural rendering from brain MRI</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-[#252832] bg-[#0E0F12] shrink-0">
              <span className="text-xs text-[#D7E2EA]/60">
                Email: sshemanthofficial@gmail.com
              </span>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white cursor-pointer"
                style={{
                  background:
                    'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25)',
                  outline: '2px solid white',
                  outlineOffset: '-3px',
                }}
              >
                Get In Touch
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BioModal;
