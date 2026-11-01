import React, { useRef, useEffect, useState } from 'react';

const MEDICAL_IMAGES_ROW1 = [
  {
    src: '/src/assets/images/project1_brain_mri_1793506815501.jpg',
    title: 'BraTS Brain Metastasis Segmentation',
    tag: 'MICCAI 2026',
  },
  {
    src: '/src/assets/images/about_3d_brain_neuro_1793506817199.jpg',
    title: '3D Neural Connectome Representation',
    tag: 'Deep Learning',
  },
  {
    src: '/src/assets/images/project2_knee_mri_1793506815732.jpg',
    title: 'Knee MRI Multi-Label Attention Heatmap',
    tag: '0.88 Macro AUC',
  },
  {
    src: '/src/assets/images/mri_lesion_detail_1793506834836.jpg',
    title: 'Micro-Lesion & Resection Cavity Zoom',
    tag: 'nnU-Net ResEnc-L',
  },
  {
    src: 'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
    title: 'Volumetric 3D Medical Scan Projection',
    tag: 'Volumetric AI',
  },
  {
    src: '/src/assets/images/dna_helix_3d_1793506836583.jpg',
    title: 'Biomolecular Latent Structure',
    tag: 'Computational Bio',
  },
  {
    src: 'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
    title: 'Neural Latent Space Traversal',
    tag: 'Transformer Graph',
  },
  {
    src: '/src/assets/images/neural_nodes_3d_1793506835615.jpg',
    title: 'Interconnected Clinical Feature Graph',
    tag: 'Graph Neural Nets',
  },
];

const MEDICAL_IMAGES_ROW2 = [
  {
    src: '/src/assets/images/knee_pipeline_diagram_1793506835541.jpg',
    title: 'Radiology Report Weak Supervision Pipeline',
    tag: 'MedGemma + Qwen',
  },
  {
    src: '/src/assets/images/project3_skin_lesion_1793506816496.jpg',
    title: 'HAM10000 7-Class Skin Lesion Dermoscopy',
    tag: 'ResNet18 / Vision',
  },
  {
    src: 'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
    title: 'Volumetric Voxel Reconstructions',
    tag: 'Voxel Flow',
  },
  {
    src: '/src/assets/images/project1_brain_mri_1793506815501.jpg',
    title: 'MICCAI BraTS-METS Axial Slice Grid',
    tag: 'nnU-Net vs Primus',
  },
  {
    src: 'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
    title: 'Dynamic Sensor Array Simulation',
    tag: 'Clinical Sensors',
  },
  {
    src: '/src/assets/images/project2_knee_mri_1793506815732.jpg',
    title: 'Grad-CAM Saliency for ACL Tears',
    tag: 'RSNA Knee Dataset',
  },
  {
    src: 'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
    title: 'High-Throughput Feature Extraction',
    tag: 'A100 GPU Cluster',
  },
  {
    src: '/src/assets/images/mri_lesion_detail_1793506834836.jpg',
    title: 'Surgical Cavity Boundary Delineation',
    tag: 'Five-Fold CV',
  },
];

// Tripled lists for seamless horizontal movement
const TRIPLED_ROW_1 = [...MEDICAL_IMAGES_ROW1, ...MEDICAL_IMAGES_ROW1, ...MEDICAL_IMAGES_ROW1];
const TRIPLED_ROW_2 = [...MEDICAL_IMAGES_ROW2, ...MEDICAL_IMAGES_ROW2, ...MEDICAL_IMAGES_ROW2];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const row1Ref = useRef<HTMLDivElement | null>(null);
  const row2Ref = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const calcOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      animationFrameId = requestAnimationFrame(() => {
        setOffset(calcOffset);
        if (row1Ref.current) {
          row1Ref.current.style.transform = `translateX(${calcOffset - 200}px)`;
        }
        if (row2Ref.current) {
          row2Ref.current.style.transform = `translateX(${-(calcOffset - 200)}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden relative select-none"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1: moves RIGHT on scroll */}
        <div
          ref={row1Ref}
          className="flex gap-3 w-max"
          style={{
            willChange: 'transform',
            transform: `translateX(${offset - 200}px)`,
          }}
        >
          {TRIPLED_ROW_1.map((item, idx) => (
            <div
              key={`r1-${idx}`}
              className="w-[420px] h-[270px] shrink-0 rounded-2xl overflow-hidden bg-[#16171B] border border-white/10 shadow-lg group relative"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 pointer-events-none">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-2 py-0.5 rounded">
                  {item.tag}
                </span>
                <p className="text-xs font-medium text-white mt-1 truncate">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: moves LEFT on scroll */}
        <div
          ref={row2Ref}
          className="flex gap-3 w-max"
          style={{
            willChange: 'transform',
            transform: `translateX(${-(offset - 200)}px)`,
          }}
        >
          {TRIPLED_ROW_2.map((item, idx) => (
            <div
              key={`r2-${idx}`}
              className="w-[420px] h-[270px] shrink-0 rounded-2xl overflow-hidden bg-[#16171B] border border-white/10 shadow-lg group relative"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 pointer-events-none">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#B600A8] bg-[#B600A8]/20 border border-[#B600A8]/40 px-2 py-0.5 rounded">
                  {item.tag}
                </span>
                <p className="text-xs font-medium text-white mt-1 truncate">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
