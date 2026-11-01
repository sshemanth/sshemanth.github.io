import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import SectionBackground from './SectionBackground';
import { ProjectItem } from '../types';
import { ExternalLink, FileText, Github, Sparkles } from 'lucide-react';

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
    summary:
      'A deep learning framework for brain metastasis segmentation, comparing nnU-Net ResEnc-L with the Primus transformer and focusing on small lesions and resection cavities.',
    keyResult: 'Paper accepted · MICCAI 2026 BraTS-METS',
    overview:
      'Brain metastases are often small and easy to miss on MRI, yet early detection is key for treatment planning. This work develops a segmentation framework that improves the detection of small lesions and post-surgical resection cavities.',
    whatIDid: [
      'Developed a five-fold nnU-Net ResEnc-L pipeline for the MICCAI 2026 BraTS-METS Challenge (team Core_Neuro_AI)',
      'Benchmarked CNN-based nnU-Net ResEnc-L against the Primus transformer',
      'Built an ensemble of both models with tuned decision thresholds',
      'Focused on two clinically hard cases: small lesions and resection cavities',
      'Served as a reviewer for the challenge (3 manuscripts)',
    ],
    result: 'Paper accepted at the MICCAI 2026 BraTS-METS Challenge (to appear in Springer proceedings).',
    next: 'Full cross-validation and ablation studies towards a journal publication.',
    tools: ['Python', 'PyTorch', 'nnU-Net', 'Primus', 'A100 GPU computing (RunPod)'],
    links: [
      { label: 'Paper', url: 'https://openreview.net/forum?noteId=swAAtfR82q' },
      { label: 'View Project', url: 'https://github.com/sshemanth/brats2026' },
      { label: 'Follow-up work', url: 'https://github.com/sshemanth/brats-mets-primus-rc' },
    ],
    col2Image: normalizePath('images/brain-visual.png'),
    col2Label: 'Illustrative image',
  },
  {
    id: 'knee-mri-weak-supervision',
    number: '02',
    title: 'Multi-Label Knee MRI Abnormality Detection Using Report-Derived Weak Supervision',
    category: 'Research · RSNA Knee MRI Dataset · Target Venue: MIDL 2027',
    tag: '0.88 MACRO AUC · WEAK SUPERVISION',
    summary:
      'Detects 12 knee abnormalities from MRI, using labels extracted from radiology reports with regex and MedGemma instead of manual annotation.',
    keyResult: '0.88 macro AUC',
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
      { label: 'View Project', url: 'https://github.com/sshemanth' },
    ],
    col2Image: normalizePath('images/knee-visual.png'),
    col2Label: 'Illustrative image',
  },
  {
    id: 'ham10000-skin-classification',
    number: '03',
    title: 'Skin Lesion Classification Under Class Imbalance (HAM10000)',
    category: 'Applied Research · Dermatology Imaging · CONVNEXT + EFFICIENTNET',
    tag: 'CONVNEXT + EFFICIENTNET',
    summary:
      'Classifies 7 skin lesion types under heavy class imbalance, using a ConvNeXt + EfficientNet ensemble with rare-class oversampling.',
    keyResult: '0.515 balanced accuracy (ISIC 2018 metric)',
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
        officialTest: '0.515 balanced multi-class accuracy (ISIC 2018 Task 3 metric)',
        isBest: true,
      },
      {
        model: 'Swin-Base / external pretrained ensembles',
        externalData: 'Yes',
        localOOF: 'Higher',
        officialTest: 'Lower (overfit)',
      },
    ],
    result: 'Best official test score of 0.515 balanced multi-class accuracy (ISIC 2018 Task 3 metric), an 11% gain over the baseline, using no external data.',
    next: 'Extending to multi-modal clinical metadata integration.',
    tools: ['Python', 'PyTorch', 'EfficientNet', 'ConvNeXt', 'Swin Transformer'],
    links: [
      { label: 'View Project', url: 'https://github.com/sshemanth' },
    ],
    col2Image: normalizePath('images/skin-visual.png'),
    col2Label: 'Illustrative image',
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

  const targetScale = 1 - (totalCards - 1 - index) * 0.02;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  // Alternate sides:
  // Project 01 (index 0): image left, text right
  // Project 02 (index 1): image right, text left
  // Project 03 (index 2): image left, text right
  const isImageRight = index % 2 === 1;

  return (
    <div
      ref={cardContainerRef}
      className="sticky flex items-start justify-center w-full pb-8 sm:pb-12"
      style={{
        top: `calc(4.5rem + ${index * 24}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full rounded-[28px] sm:rounded-[36px] md:rounded-[44px] border border-white/20 bg-[#101116] p-5 sm:p-7 md:p-8 shadow-2xl overflow-hidden min-h-[420px] lg:h-[460px] flex flex-col justify-center"
      >
        <div
          className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-8 w-full h-full ${
            isImageRight ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Image side (45% width on desktop): aspect-ratio 4/3, max-height 380px, object-fit cover */}
          <div className="w-full lg:w-[45%] shrink-0 flex flex-col justify-center">
            <div
              onClick={() => onOpenProject(project)}
              className="w-full aspect-[4/3] max-h-[380px] rounded-[20px] sm:rounded-[26px] overflow-hidden bg-[#16171B] border border-white/10 hover:border-white/30 cursor-pointer group relative shadow-xl transition-all duration-300"
            >
              <img
                src={project.col2Image}
                alt={`${project.title} - Illustrative image`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 block"
              />
              <div className="absolute bottom-2.5 right-2.5 z-10 pointer-events-none">
                <span className="text-[12px] font-mono uppercase tracking-wider text-[#D7E2EA] bg-black/75 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/15">
                  Illustrative image
                </span>
              </div>
            </div>
          </div>

          {/* Text side (55% width on desktop): number, tag, title, 2-3 line summary, highlighted key result, buttons */}
          <div className="w-full lg:w-[55%] flex flex-col justify-between py-1 sm:py-2 text-left h-full">
            <div>
              {/* Number & Tag */}
              <div className="flex items-center gap-3 mb-2">
                <span className="font-black text-[#D7E2EA] text-2xl sm:text-3xl md:text-4xl leading-none">
                  {project.number}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B600A8]" />
                <span className="text-[13px] font-semibold uppercase tracking-wider text-[#D84ED2]">
                  {project.tag || project.category}
                </span>
              </div>

              {/* Title: wraps 2-3 lines naturally without cutting */}
              <h3 className="font-bold uppercase tracking-tight text-white text-lg sm:text-xl md:text-2xl leading-snug">
                {project.title}
              </h3>

              {/* 2-3 line summary */}
              <p className="text-base text-[#c4c4cc] font-light leading-relaxed mt-2.5 line-clamp-3">
                {project.summary}
              </p>

              {/* Highlighted Key Result */}
              {project.keyResult && (
                <div className="mt-3.5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-cyan-950/50 border border-cyan-500/35">
                  <span className="text-[12px] uppercase font-bold tracking-wider text-cyan-400">
                    Key Result:
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {project.keyResult}
                  </span>
                </div>
              )}
            </div>

            {/* Action Buttons: Paper, View Project, Details */}
            <div className="pt-5 mt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
              {project.id === 'brats-mets-segmentation' && (
                <a
                  href="https://openreview.net/forum?noteId=swAAtfR82q"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/25 flex items-center gap-1.5 transition-all cursor-pointer shadow-sm hover:scale-105"
                >
                  <FileText className="w-4 h-4 text-pink-400" />
                  <span>Paper</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/60" />
                </a>
              )}

              <a
                href={project.links?.[1]?.url || 'https://github.com/sshemanth'}
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-6 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
                style={{
                  background:
                    'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  boxShadow: '0 3px 12px rgba(182, 0, 168, 0.4)',
                  border: '1.5px solid rgba(255, 255, 255, 0.85)',
                }}
              >
                <Github className="w-4 h-4" />
                <span>View Project</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/80" />
              </a>

              {/* DETAILS Button (fully visible with clear contrast) */}
              <button
                type="button"
                onClick={() => onOpenProject(project)}
                className="rounded-full px-5 py-2.5 border-2 border-white/30 hover:border-white text-white hover:bg-white/10 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
              >
                Details
              </button>
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
      className="w-full bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-6 sm:-mt-8 z-10 relative py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      {/* Decorative AI Background */}
      <SectionBackground
        imageName="bg-projects.webp"
        position="center"
        theme="dark"
        priority={false}
        opacityClassName="opacity-15 sm:opacity-25 md:opacity-35"
        parallaxOffset={40}
      />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Heading */}
        <FadeIn delay={0} y={30} className="text-center pt-2 sm:pt-4 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
            <span className="text-[13px] uppercase tracking-widest font-semibold text-[#D84ED2]">
              Selected Works &amp; Publications
            </span>
          </div>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Featured Projects
          </h2>
        </FadeIn>

        {/* 3 Two-Column Project Cards spanning full centered width */}
        <div className="relative pb-16 space-y-6 sm:space-y-8 w-full">
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
