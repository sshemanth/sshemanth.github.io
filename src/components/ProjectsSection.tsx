import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';
import { ProjectItem } from '../types';
import { ImageOff, Sparkles } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenProject: (project: ProjectItem) => void;
}

const BASE = import.meta.env.BASE_URL || '/';
const normalizePath = (path: string) => {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE}${clean}`;
};

export const RESEARCH_PROJECTS: ProjectItem[] = [
  {
    id: 'brats-mets-segmentation',
    number: '01',
    title: 'A Deep Learning Framework for Robust Brain Metastasis Segmentation and Small-Lesion Detection',
    category: 'Research · MICCAI 2026 BraTS-METS Challenge · Accepted Paper',
    tag: 'MICCAI 2026 · BRAIN METASTASIS',
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
    col2Image: normalizePath('images/brain-framework.png'),
    col2Label: 'Segmentation Framework Overview',
  },
  {
    id: 'knee-mri-weak-supervision',
    number: '02',
    title: 'Multi-Label Knee MRI Abnormality Detection Using Report-Derived Weak Supervision',
    category: 'Research · RSNA Knee MRI Dataset · Target Venue: MIDL 2027',
    tag: '0.88 MACRO AUC · WEAK SUPERVISION',
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
    col2Image: normalizePath('images/knee-pipeline.png'),
    col2Label: 'Report-to-Label Pipeline',
  },
  {
    id: 'ham10000-skin-classification',
    number: '03',
    title: 'Skin Lesion Classification Under Class Imbalance (HAM10000)',
    category: 'Applied Research · Dermatology Imaging · CONVNEXT + EFFICIENTNET',
    tag: 'CONVNEXT + EFFICIENTNET',
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
    col2Image: normalizePath('images/skin-model-comparison.png'),
    col2Label: 'Model Comparison Results',
    col1Image1: normalizePath('images/skin-classes.png'),
    col1Label1: '7 Dermoscopic Lesion Classes',
  },
];

interface ProjectImageProps {
  src: string;
  label: string;
  badgeText?: string;
  onClick: () => void;
  className?: string;
}

const ProjectImageFrame: React.FC<ProjectImageProps> = ({
  src,
  label,
  badgeText,
  onClick,
  className = '',
}) => {
  const [error, setError] = useState(false);

  return (
    <div
      onClick={onClick}
      className={`relative w-full overflow-hidden rounded-[24px] sm:rounded-[32px] md:rounded-[40px] cursor-pointer group bg-[#121318] border border-white/10 hover:border-white/25 transition-all duration-300 flex items-center justify-center p-2 sm:p-3 ${className}`}
    >
      {error ? (
        <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-[#121318]">
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2.5 text-[#D7E2EA]/40">
            <ImageOff className="w-5 h-5 text-cyan-400" />
          </div>
          <p className="text-xs sm:text-sm font-medium text-white/90 max-w-sm">
            {label}
          </p>
        </div>
      ) : (
        <>
          <img
            src={src}
            alt={label}
            loading="lazy"
            onError={() => setError(true)}
            className="w-full h-full object-contain rounded-[18px] sm:rounded-[26px] md:rounded-[32px] transition-transform duration-500 group-hover:scale-[1.02]"
          />
          {/* Subtle bottom caption pill */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none">
            <div className="bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 flex items-center gap-2 max-w-[90%]">
              {badgeText && (
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-semibold shrink-0">
                  {badgeText}
                </span>
              )}
              <span className="text-xs text-white font-medium truncate">
                {label}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

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

  const hasDetailImage = Boolean(project.col1Image1);

  return (
    <div
      ref={cardContainerRef}
      className="h-[88vh] sticky flex items-start justify-center w-full"
      style={{
        top: `calc(4.5rem + ${index * 26}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full rounded-[36px] sm:rounded-[46px] md:rounded-[56px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-7 md:p-9 flex flex-col justify-between shadow-2xl overflow-hidden"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 sm:pb-5 border-b border-[#D7E2EA]/15 mb-3 sm:mb-4 w-full">
          <div className="flex items-center gap-3 sm:gap-6 md:gap-8 min-w-0 flex-1">
            {/* Number */}
            <div
              className="font-black text-[#D7E2EA] leading-none shrink-0"
              style={{ fontSize: 'clamp(2.4rem, 7vw, 96px)' }}
            >
              {project.number}
            </div>

            <div className="flex flex-col min-w-0 pr-2">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#B600A8] truncate mb-1">
                {project.tag || project.category}
              </span>
              {/* Project title allows wrapping onto 2 lines naturally */}
              <h3 className="font-medium uppercase tracking-tight text-white text-base sm:text-xl md:text-2xl lg:text-3xl line-clamp-2 leading-tight">
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

        {/* Bottom row: Clean 16:9 aspect-ratio showcase using full centered width */}
        <div className="flex-1 min-h-0 flex flex-col justify-center w-full">
          {hasDetailImage ? (
            /* Project 03 layout: Main image + 1 Detail image side-by-side */
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 h-full min-h-[240px] sm:min-h-[300px] md:min-h-[380px] w-full">
              {/* Main Image: Model Comparison Results (approx 62% width) */}
              <div className="md:col-span-7 h-full min-h-[200px]">
                <ProjectImageFrame
                  src={project.col2Image}
                  label={project.col2Label || 'Model Comparison Results'}
                  badgeText="Primary"
                  onClick={() => onOpenProject(project)}
                  className="h-full aspect-[16/9] md:aspect-auto"
                />
              </div>

              {/* Detail Image: 7 Dermoscopic Lesion Classes (approx 38% width) */}
              <div className="md:col-span-5 h-full min-h-[160px]">
                <ProjectImageFrame
                  src={project.col1Image1!}
                  label={project.col1Label1 || '7 Dermoscopic Lesion Classes'}
                  badgeText="Detail"
                  onClick={() => onOpenProject(project)}
                  className="h-full aspect-[16/9] md:aspect-auto"
                />
              </div>
            </div>
          ) : (
            /* Project 01 & 02: Full-width tall 16:9 main image with no detail boxes */
            <div className="w-full h-full min-h-[240px] sm:min-h-[320px] md:min-h-[400px]">
              <ProjectImageFrame
                src={project.col2Image}
                label={project.col2Label || 'Architecture Framework'}
                badgeText="Pipeline"
                onClick={() => onOpenProject(project)}
                className="h-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/8]"
              />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenProject }) => {
  return (
    <section
      id="projects"
      className="w-full bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-6 sm:-mt-8 z-10 relative py-16 sm:py-20 md:py-24"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Heading */}
        <FadeIn delay={0} y={30} className="text-center pt-2 sm:pt-4 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B600A8]">
              Selected Works &amp; Publications
            </span>
          </div>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.6rem, 10vw, 130px)' }}
          >
            Featured Projects
          </h2>
        </FadeIn>

        {/* 3 Sticky-Stacking Project Cards spanning full centered width */}
        <div className="relative pb-16 space-y-8 sm:space-y-12 w-full">
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
