import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Copy, Check, Send, Sparkles, Linkedin, Github, GraduationCap, FileDown } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'PhD Position / Academic Advising',
    institution: '',
    message: '',
  });

  const email = 'sshemanthofficial@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2400);
  };

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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-[#121215] border border-[#26282E] rounded-[32px] p-6 sm:p-8 shadow-2xl z-10 my-auto text-[#D7E2EA]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-[#D7E2EA]/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#B600A8] font-semibold mb-1">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Seeking PhD positions in Medical AI · 2027</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                Let&apos;s Collaborate
              </h3>
              <p className="text-sm text-[#D7E2EA]/75 mt-1">
                I am seeking PhD opportunities and research collaborations in Medical AI. If my research aligns with your group, I would be glad to connect.
              </p>
            </div>

            {/* Direct Email & CV Pill */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-[#18191E] border border-[#2D3038] mb-6">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-full bg-[#B600A8]/20 flex items-center justify-center text-[#B600A8] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-[#D7E2EA]/60 uppercase tracking-wider">Direct Contact</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-sm font-medium text-white hover:underline truncate block"
                  >
                    {email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs text-[#D7E2EA] font-medium border border-white/10 transition-colors shrink-0 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href="./cv.pdf"
                  download="Sri_Sai_Hemanth_Bollepalli_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs text-white font-medium border border-white/20 transition-colors shrink-0 cursor-pointer"
                >
                  <FileDown className="w-3.5 h-3.5 text-cyan-400" />
                  <span>CV</span>
                </a>
              </div>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-10 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-white uppercase tracking-tight">
                  Message Dispatched!
                </h4>
                <p className="text-sm text-[#D7E2EA]/70 mt-2 max-w-sm mx-auto">
                  Thank you for connecting. Hemanth will review your note and respond promptly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5">
                      Your Name / Role
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Prof. David Miller"
                      className="w-full bg-[#18191E] border border-[#2D3038] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="david@lab.edu.au"
                      className="w-full bg-[#18191E] border border-[#2D3038] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5">
                      Topic
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full bg-[#18191E] border border-[#2D3038] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#B600A8] transition-colors"
                    >
                      <option value="PhD Position / Academic Advising">PhD Opportunity (2027)</option>
                      <option value="Research Collaboration">Research Collaboration</option>
                      <option value="Medical AI Paper Inquiries">BraTS-METS / MIDL Discussion</option>
                      <option value="General Academic Connection">General Academic Connection</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5">
                      Institution / Lab
                    </label>
                    <input
                      type="text"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      placeholder="e.g. University / Hospital"
                      className="w-full bg-[#18191E] border border-[#2D3038] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your research focus, lab opening, or collaboration interest..."
                    className="w-full bg-[#18191E] border border-[#2D3038] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full text-white font-medium uppercase tracking-wider text-sm transition-transform active:scale-95 cursor-pointer"
                  style={{
                    background:
                      'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                    outline: '2px solid white',
                    outlineOffset: '-3px',
                  }}
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Hemanth</span>
                </button>
              </form>
            )}

            <div className="mt-6 pt-4 border-t border-[#26282E] flex flex-wrap items-center justify-between text-xs text-[#D7E2EA]/60">
              <span>Location: Sydney, Australia</span>
              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com/in/sshemanth"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
                <span>·</span>
                <a
                  href="https://github.com/sshemanth"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <Github className="w-3.5 h-3.5 text-purple-400" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
