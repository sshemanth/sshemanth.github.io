import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onOpenProject: (project: ProjectItem) => void;
}

export const RESEARCH_PROJECTS: ProjectItem[] = [
  {
    id: 'brats-mets-segmentation',
    number: '01',
    title: 'A Deep Learning Framework for Robust Brain Metastasis Segmentation and Small-Lesion Detection',
    category: 'Research · MICCAI 2026 BraTS-METS Challenge · Accepted Paper',
    supervisor: 'A/Prof. Steve Ling, AIVision Nexus Laboratory, UTS',
    overview:
      'Brain metastases are often small and easy to miss on MRI, yet early detection is key for treatment planning. This work develops a segmentation framework that improves the detection of small lesions and post-surgical resection cavities.',
    whatIDid: [
      'Developed a five-fold nnU-Net ResEnc-L pipeline for the MICCAI 2026 BraTS-METS Challenge (team Core_Neuro_AI)',
      'Benchmarked CNN-based nnU-Net ResEnc-L against the Primus transformer',
      'Built an ensemble of both models with tuned decision thresholds',
      'Focused on two clinically hard cases: small lesions and resection cavities',
      'Served as a reviewer for the challenge (3 manuscripts)',
    ],
    result: 'Paper accepted at the MICCAI 2026 BraTS-METS Challenge (to appear in the Springer proceedings).',
    next: 'Full cross-validation and ablation studies towards a journal publication.',
    tools: ['Python', 'PyTorch', 'nnU-Net', 'Primus', 'A100 GPU computing (RunPod)'],
    links: [
      { label: 'Challenge Code', url: 'https://github.com/sshemanth/brats2026' },
      { label: 'Primus Study', url: 'https://github.com/sshemanth/brats-mets-primus-rc' },
    ],
    col2Image: '/src/assets/images/project1_brain_mri_1793506815501.jpg',
    col2Label: 'Axial Brain MRI Slice with Multi-Class Tumour Overlays',
    col1Image1: '/src/assets/images/mri_lesion_detail_1793506834836.jpg',
    col1Label1: 'Small-Lesion & Resection Cavity Close-up',
    col1Image2: '/src/assets/images/about_3d_brain_neuro_1793506817199.jpg',
    col1Label2: 'Framework Feature Architecture & Connectome',
  },
  {
    id: 'knee-mri-weak-supervision',
    number: '02',
    title: 'Multi-Label Knee MRI Abnormality Detection Using Report-Derived Weak Supervision',
    category: 'Research · RSNA Knee MRI Dataset · Target Venue: MIDL 2027',
    overview:
      'Expert annotation of medical scans is slow and costly. This project uses existing radiology reports as a source of labels, allowing a model to learn to detect 12 knee abnormalities from MRI without manual image labelling.',
    whatIDid: [
      'Designed a report-to-label pipeline combining rule-based extraction with the MedGemma clinical language model',
      'Validated an open-source LLM (Qwen) for labelling on 58 gold-standard reports, matching the MedGemma pipeline',
      'Trained a multi-label MRI classifier across 12 abnormalities',
      'Built an efficient, reproducible pipeline with preprocessed scan caching',
    ],
    result: '0.88 macro AUC across 12 abnormalities without pixel annotations.',
    next: 'Scaling backbone architectures and preparing full submission for MIDL 2027.',
    tools: ['Python', 'PyTorch', 'MedGemma', 'Qwen', 'Kaggle', 'Google Cloud Storage'],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/sshemanth' },
    ],
    col2Image: '/src/assets/images/project2_knee_mri_1793506815732.jpg',
    col2Label: 'Sagittal Knee MRI with Grad-CAM Attention Heatmap',
    col1Image1: '/src/assets/images/knee_pipeline_diagram_1793506835541.jpg',
    col1Label1: 'Report-to-Label Extraction Pipeline',
    col1Image2: '/src/assets/images/neural_nodes_3d_1793506835615.jpg',
    col1Label2: '12-Abnormality Saliency & Correlation Network',
  },
  {
    id: 'ham10000-skin-classification',
    number: '03',
    title: 'Skin Lesion Classification Under Class Imbalance (HAM10000)',
    category: 'Applied Research · Dermatology Imaging',
    overview:
      'Early detection of skin cancer improves outcomes, but real dermatology datasets are highly imbalanced, with rare and dangerous lesion types under-represented. This project classifies dermoscopy images into 7 lesion types with a focus on rare classes.',
    whatIDid: [
      'Built a five-fold EfficientNet-B0 baseline',
      'Applied rare-class oversampling with ConvNeXt-Base to improve rare-lesion learning',
      'Developed a ConvNeXt + EfficientNet ensemble for the best performance',
      'Found that models using external pretraining (Swin-Base) scored higher in validation but overfit on the official test set, and chose the more robust model instead',
    ],
    benchmarkTable: [
      {
        model: 'EfficientNet-B0, 5-fold (baseline)',
        externalData: 'No',
        localOOF: '0.452',
        officialTest: '0.464',
      },
      {
        model: 'ConvNeXt-Base + Rare-OS, 5-fold',
        externalData: 'No',
        localOOF: '0.491',
        officialTest: '0.500',
      },
      {
        model: 'ConvNeXt-Base + EfficientNet-B0 ensemble',
        externalData: 'No',
        localOOF: '0.504',
        officialTest: '0.515',
        isBest: true,
      },
      {
        model: 'Swin-Base / external pretrained ensembles',
        externalData: 'Yes',
        localOOF: 'Higher',
        officialTest: 'Lower (overfit)',
      },
    ],
    result: 'Best official test score of 0.515 Macro F1, an 11% gain over the baseline, using no external data.',
    next: 'Extending to multi-modal clinical metadata integration.',
    tools: ['Python', 'PyTorch', 'EfficientNet', 'ConvNeXt', 'Swin Transformer'],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/sshemanth' },
    ],
    col2Image: '/src/assets/images/project3_skin_lesion_1793506816496.jpg',
    col2Label: 'Sample Image Grid Across 7 Dermoscopic Lesion Classes',
    col1Image1: '/src/assets/images/dna_helix_3d_1793506836583.jpg',
    col1Label1: 'Biomolecular Latent Subtype Manifold',
    col1Image2: '/src/assets/images/heartbeat_ecg_3d_1793508382436.jpg',
    col1Label2: 'Diagnostic Decision Robustness Profile',
  },
];

interface CardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  onOpenProject: (project: ProjectItem) => void;
}

const ProjectCard: React.FC<CardProps> = ({
  project,
  index,
  totalCards,
  onOpenProject,
}) => {
  const cardContainerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: cardContainerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardContainerRef}
      className="h-[88vh] sticky flex items-start justify-center"
      style={{
        top: `calc(5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-2xl overflow-hidden"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 sm:pb-6 border-b border-[#D7E2EA]/15 mb-4 sm:mb-6">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 min-w-0">
            {/* Number */}
            <div
              className="font-black text-[#D7E2EA] leading-none shrink-0"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
            >
              {project.number}
            </div>

            <div className="flex flex-col min-w-0">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#B600A8] truncate">
                {project.category}
              </span>
              <h3 className="font-medium uppercase tracking-tight text-white text-base sm:text-xl md:text-2xl lg:text-3xl line-clamp-1">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <LiveProjectButton
              label="View Project"
              onClick={() => onOpenProject(project)}
            />
          </div>
        </div>

        {/* Bottom row: Two-column image grid */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-3 sm:gap-4 md:gap-6 flex-1 min-h-0">
          {/* Left column (40% width): 2 stacked images */}
          <div className="md:col-span-4 flex flex-col gap-3 sm:gap-4">
            {/* Col1 image 1 */}
            <div
              onClick={() => onOpenProject(project)}
              className="w-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] cursor-pointer group bg-[#16171B] border border-white/10 relative"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1Image1}
                alt={project.col1Label1 || 'Research detail view 1'}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-white bg-black/70 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                  {project.col1Label1 || 'Inspect Detail'}
                </span>
              </div>
            </div>

            {/* Col1 image 2 */}
            <div
              onClick={() => onOpenProject(project)}
              className="w-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] cursor-pointer group bg-[#16171B] border border-white/10 relative"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1Image2}
                alt={project.col1Label2 || 'Research detail view 2'}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-white bg-black/70 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                  {project.col1Label2 || 'Inspect Architecture'}
                </span>
              </div>
            </div>
          </div>

          {/* Right column (60% width): 1 tall image */}
          <div
            onClick={() => onOpenProject(project)}
            className="md:col-span-6 w-full h-[260px] sm:h-[320px] md:h-full min-h-[220px] sm:min-h-[280px] md:min-h-[380px] overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] cursor-pointer group bg-[#16171B] border border-white/10 relative"
          >
            <img
              src={project.col2Image}
              alt={project.col2Label || 'Primary medical AI visualization'}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                Primary Diagnostic Visualizer
              </span>
              <p className="text-sm font-medium text-white truncate">
                {project.col2Label}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenProject }) => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-4 sm:px-6 md:px-10 pb-32"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="text-center pt-16 sm:pt-20 md:pt-28 mb-12 sm:mb-16 md:mb-24">
          <div className="inline-block mb-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B600A8]">
              Selected Works &amp; Publications
            </span>
          </div>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.8rem, 11vw, 150px)' }}
          >
            Featured Projects
          </h2>
        </FadeIn>

        {/* 3 Sticky-Stacking Project Cards */}
        <div className="relative pb-24 space-y-12 sm:space-y-16">
          {RESEARCH_PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={RESEARCH_PROJECTS.length}
              onOpenProject={onOpenProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
