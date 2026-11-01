import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: (planName: string) => void;
}

const TIERS = [
  {
    name: '3D Asset & Modeling',
    price: '$2,500',
    unit: 'per asset / scene',
    description: 'Detailed object or character model with clean topology, UV unwrapping, and export to game/production engines.',
    features: [
      'Custom sub-d or low-poly topology',
      '4K PBR material setup (Albedo, Roughness, Normal)',
      'FBX, OBJ, USDZ, GLTF deliverable formats',
      '2 revision rounds included',
      'Turnaround: 5-7 business days',
    ],
    popular: false,
  },
  {
    name: 'Hero Visual & Rendering',
    price: '$4,800',
    unit: 'per hero package',
    description: 'Bespoke photorealistic scenes crafted for marketing, product launch campaigns, and high-impact key visuals.',
    features: [
      'Art-directed studio & cinematic lighting',
      'High-res renders up to 8K resolution',
      'Transparent PNG cutouts + depth passes',
      'Post-production color grading in Photoshop/DaVinci',
      'Commercial broadcast usage rights',
      'Turnaround: 7-10 business days',
    ],
    popular: true,
  },
  {
    name: 'Brand & Motion System',
    price: '$9,500',
    unit: 'per campaign',
    description: 'Full-spectrum 3D motion package combining kinetic animation, branded visual language, and interactive assets.',
    features: [
      '15s - 30s 3D motion reel (4K 60fps)',
      'Sound design & timing synchronization',
      'Web-optimized loop animations & Lottie/GIF',
      'Complete 3D brand guidelines & styleframes',
      'Direct creative consultation with Jack',
      'Turnaround: 2-3 weeks',
    ],
    popular: false,
  },
];

export const PricingModal: React.FC<PricingModalProps> = ({
  isOpen,
  onClose,
  onSelectPlan,
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-[#121214] border border-[#26282E] rounded-[36px] p-6 sm:p-10 shadow-2xl z-10 my-auto text-[#D7E2EA] max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full text-[#D7E2EA]/60 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-widest text-[#B600A8] font-semibold">
                Investment & Packages
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white mt-1">
                Transparent Rates
              </h3>
              <p className="text-sm text-[#D7E2EA]/70 mt-2">
                Every project is executed directly by Jack with obsessively crafted topology, lighting, and motion fidelity. Custom scope quotes also available.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 ${
                    tier.popular
                      ? 'bg-[#18191E] border-2 border-[#B600A8]/80 shadow-[0_0_30px_rgba(182,0,168,0.2)]'
                      : 'bg-[#15161A] border border-[#26282E] hover:border-[#3E424C]'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-tight text-white">
                      {tier.name}
                    </h4>
                    <p className="text-xs text-[#D7E2EA]/60 mt-1 min-h-[36px]">
                      {tier.description}
                    </p>

                    <div className="mt-5 mb-6 pb-5 border-b border-[#26282E]">
                      <span className="text-3xl font-black text-white">{tier.price}</span>
                      <span className="text-xs text-[#D7E2EA]/50 ml-1.5">{tier.unit}</span>
                    </div>

                    <ul className="space-y-2.5 mb-6 text-xs text-[#D7E2EA]/80">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#B600A8] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onSelectPlan(tier.name);
                    }}
                    className={`w-full py-2.5 px-4 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer ${
                      tier.popular
                        ? 'bg-white text-[#0C0C0C] hover:bg-[#D7E2EA]'
                        : 'border border-[#D7E2EA]/40 text-[#D7E2EA] hover:border-white hover:bg-white/5'
                    }`}
                  >
                    <span>Book This Tier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center text-xs text-[#D7E2EA]/60">
              Need a bespoke enterprise contract or ongoing monthly retainer?{' '}
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onSelectPlan('Custom Scope');
                }}
                className="text-[#B600A8] hover:underline font-semibold ml-1 cursor-pointer"
              >
                Inquire for custom retainer
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PricingModal;
