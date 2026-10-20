// All text on the site lives in this file. Edit here; the layout updates itself.

export const profile = {
  name: 'Sri Sai Hemanth Bollepalli',
  first: 'Sri Sai Hemanth',
  last: 'Bollepalli',
  status: 'Open to PhD positions and research collaborations',
  lead: 'I build and evaluate deep learning models for medical AI, from 3D MRI segmentation to multimodal diagnosis, with a focus on results clinicians can trust.',
  meta: 'Medical AI Researcher · Master of Artificial Intelligence, University of Technology Sydney · Sydney, Australia',
  email: 'srisaihemanth.bollepalli@student.uts.edu.au',
  cv: './Sri_Sai_Hemanth_Bollepalli_CV.pdf',
  links: {
    github: 'https://github.com/sshemanth',
    linkedin: 'https://www.linkedin.com/in/sshemanth/',
    // Add these when you have them, e.g. 'https://orcid.org/0000-0002-1234-5678'
    orcid: '',
    scholar: '',
  },
  // Add the line once your supervisor agrees, e.g. 'Supervised by A/Prof. Steve Ling, University of Technology Sydney'
  supervisor: '',
};

export const interests = [
  'Medical AI',
  'Medical image analysis',
  'Multimodal clinical data',
  'Learning from limited labels',
  'Uncertainty and calibration',
  'Trustworthy machine learning',
];

export type Highlight = { value: number; to?: number; decimals: number; label: string; color: string };
export const highlights: Highlight[] = [
  { value: 0.715, decimals: 3, label: 'Tumour core Dice, BraTS-METS 2026 hidden test set', color: 'var(--violet)' },
  { value: 0.18, to: 0.5, decimals: 2, label: 'Resection cavity Dice after my Primus follow-up', color: 'var(--pink)' },
  { value: 0.88, decimals: 2, label: 'Macro AUC, knee MRI abnormality detection', color: 'var(--teal)' },
  { value: 0.912, decimals: 3, label: 'External AUROC, TRUST-ADMET', color: 'var(--blue)' },
];

export const about = [
  'I build and evaluate deep learning models for medical AI. My work spans brain MRI segmentation for the MICCAI 2026 BraTS-METS Challenge (where I also served as a manuscript reviewer), knee MRI abnormality detection, multimodal skin lesion diagnosis and trustworthy drug property prediction.',
  'I care about careful validation: testing models on hard cases, understanding where they fail, and reporting results others can reproduce.',
  'I am looking for a PhD position or research collaboration in medical AI, across medical imaging, multimodal clinical data or trustworthy machine learning for healthcare.',
];

export const principles = [
  { title: 'Test the hard cases', text: 'Small lesions, rare classes and data from new sources.', color: 'var(--violet)', soft: 'var(--violet-soft)' },
  { title: 'Look for failure', text: 'Error analysis shows what to fix next, not just the average score.', color: 'var(--coral)', soft: 'var(--coral-soft)' },
  { title: 'Keep the data honest', text: 'Patient-grouped splits and external test sets.', color: 'var(--teal)', soft: 'var(--teal-soft)' },
  { title: 'Make it reproducible', text: 'Public code and Docker containers.', color: 'var(--blue)', soft: 'var(--blue-soft)' },
];

export const vision = {
  intro:
    'Medical AI often works well in the lab but struggles in the clinic. Expert labels are scarce, patient data come in many forms, and models rarely say when they are unsure. In my PhD I want to build medical AI that learns from limited labels, combines different kinds of patient data, and reports how much to trust each result. My experience covers brain MRI, knee MRI, skin images and drug discovery, and I am open to projects across medical imaging and clinical AI.',
  questions: [
    { icon: 'microscope', q: 'How can medical AI learn from limited labels?', a: 'Using radiology reports, language models and weak labels to train models when expert annotation is scarce.', color: 'var(--violet)', soft: 'var(--violet-soft)' },
    { icon: 'network', q: 'How do we combine images with other patient data?', a: 'Multimodal models that fuse scans, clinical photos, reports and metadata, and stay robust when one is missing.', color: 'var(--coral)', soft: 'var(--coral-soft)' },
    { icon: 'chart', q: 'When should a clinician not trust the output?', a: 'Calibrated uncertainty, failure detection and validation on data from new hospitals and patient groups.', color: 'var(--blue)', soft: 'var(--blue-soft)' },
  ],
};

export type Project = {
  id: string;
  theme: 'brain' | 'knee' | 'skin' | 'admet';
  tagline: string;
  big: string;
  bigLabel: string;
  minis: [string, string][];
  title: string;
  where?: string;
  points: string[];
  tags: string[];
  links: { label: string; href: string }[];
  sticker: string;
};

export const projects: Project[] = [
  {
    id: 'brain',
    theme: 'brain',
    sticker: 'brain',
    tagline: 'Brain MRI · 3D segmentation',
    big: '0.715',
    bigLabel: 'Tumour core Dice, hidden test set (lesion-wise)',
    minis: [['Enhancing tumour', '0.691'], ['Whole tumour', '0.645'], ['Resection cavity', '0.567']],
    title: 'Brain Metastasis and Resection Cavity Segmentation',
    where: 'UTS research project',
    points: [
      'Built an end-to-end pipeline that segments whole tumour, tumour core, enhancing tumour and resection cavity from multi-modal 3D MRI (T1, T1c, T2, FLAIR).',
      'Trained customised nnU-Net v2 Residual Encoder models with a region-aware Tversky + BCE loss for rare regions.',
      'Compared a CNN (ResEnc-L) with a transformer (Primus) and ensembled both using per-region thresholds.',
      'Identified patient leakage in standard data splits and moved to patient-grouped cross-validation.',
      'Follow-up: a Primus model with cavity-focused sampling improved resection cavity Dice from 0.18 to 0.50 on 260 held-out cases. Next, I am using each patient’s prior scan to guide cavity segmentation.',
    ],
    tags: ['nnU-Net v2', 'Primus', 'PyTorch', 'Docker'],
    links: [
      { label: 'Challenge code', href: 'https://github.com/sshemanth/brats2026' },
      { label: 'Primus follow-up', href: 'https://github.com/sshemanth/brats-mets-primus-rc' },
    ],
  },
  {
    id: 'knee',
    theme: 'knee',
    sticker: 'knee',
    tagline: 'Knee MRI · detection',
    big: '0.88',
    bigLabel: 'Macro AUC across 12 abnormality types',
    minis: [['LLM report labeller', '0.858'], ['Gold-standard reports', '58']],
    title: 'Knee MRI Abnormality Detection (RSNA)',
    points: [
      'Developed a pipeline to detect 12 abnormality types from knee MRI, reaching 0.88 macro AUC.',
      'Built a radiology report labeller using a local Qwen LLM, achieving 0.858 macro AUC on 58 expert-labelled reports, on par with a regex + MedGemma baseline.',
      'Reduced compute cost to near zero by moving training to Kaggle with a cached, preprocessed scan store.',
    ],
    tags: ['Knee MRI', 'Qwen', 'MedGemma', 'Kaggle'],
    links: [],
  },
  {
    id: 'skin',
    theme: 'skin',
    sticker: 'skin',
    tagline: 'Dermatology · multimodal',
    big: '0.515',
    bigLabel: 'Official challenge test score',
    minis: [['Baseline', '0.464'], ['Lesion classes', '11']],
    title: 'Multimodal Skin Lesion Diagnosis',
    where: 'ISIC MILK10k Challenge',
    points: [
      'Combined clinical images, dermoscopic images and patient metadata to classify 11 lesion types.',
      'Improved rare-class recall through targeted oversampling and a ConvNeXt + EfficientNet ensemble.',
      'Found that higher local validation scores did not always carry over to the hidden test set, so chose simpler, regularised models.',
      'Packaged inference in Docker for reproducible, one-command use.',
    ],
    tags: ['ConvNeXt', 'EfficientNet', 'Multimodal fusion'],
    links: [{ label: 'Code', href: 'https://github.com/sshemanth/multimodal-lesion-diagnosis' }],
  },
  {
    id: 'admet',
    theme: 'admet',
    sticker: 'molecule',
    tagline: 'Drug discovery · open source',
    big: '0.912',
    bigLabel: 'AUROC on external B3DB data (6,482 molecules)',
    minis: [['Licence', 'MIT'], ['Archived', 'Zenodo']],
    title: 'TRUST-ADMET: Trustworthy Drug Property Prediction',
    where: 'Open-source software',
    points: [
      'Python framework combining classical ML, graph neural networks and molecular transformers.',
      'Adds calibration, applicability domain checks and conformal prediction, so users can see when a prediction should not be trusted.',
      'Released as a command-line tool, API, web demo and Docker image.',
    ],
    tags: ['RDKit', 'PyTorch Geometric', 'ChemBERTa'],
    links: [
      { label: 'Code', href: 'https://github.com/sshemanth/trust-admet' },
      { label: 'doi:10.5281/zenodo.20997792', href: 'https://doi.org/10.5281/zenodo.20997792' },
    ],
  },
];

export type Publication = { status: string; title: string; authors: string; color: string; links: { label: string; href: string }[] };
export const publications: Publication[] = [
  {
    status: 'Challenge paper',
    title: 'Region-Aware Residual Encoder nnU-Net for Multi-Region Brain Metastasis Segmentation',
    authors: 'Sri Sai Hemanth Bollepalli · MICCAI 2026 BraTS-METS Challenge',
    color: 'var(--violet)',
    links: [{ label: 'Code', href: 'https://github.com/sshemanth/brats2026' }],
  },
  {
    status: 'In preparation',
    title: 'Knee MRI abnormality detection with LLM-derived report labels',
    authors: 'Sri Sai Hemanth Bollepalli and co-author · working title',
    color: 'var(--teal)',
    links: [],
  },
  {
    status: 'Technical report and code',
    title: 'Primus with cavity-focused sampling for resection cavity segmentation in brain metastasis MRI',
    authors: 'Sri Sai Hemanth Bollepalli · 2026',
    color: 'var(--pink)',
    links: [{ label: 'Code', href: 'https://github.com/sshemanth/brats-mets-primus-rc' }],
  },
  {
    status: 'Software',
    title: 'TRUST-ADMET: a trustworthy AI framework for ADMET prediction',
    authors: 'Sri Sai Hemanth Bollepalli · 2026 · Zenodo',
    color: 'var(--blue)',
    links: [
      { label: 'doi:10.5281/zenodo.20997792', href: 'https://doi.org/10.5281/zenodo.20997792' },
      { label: 'Code', href: 'https://github.com/sshemanth/trust-admet' },
    ],
  },
];

export const now = [
  'Using each patient’s earlier MRI scan to guide resection cavity segmentation.',
  'Running the remaining cross-validation folds and new experiments for the Primus model.',
  'Preparing the knee MRI work for publication.',
];

export const education = [
  { when: '2025 – 2027', title: 'Master of Artificial Intelligence', where: 'University of Technology Sydney', color: 'var(--violet)' },
  { when: '2020 – 2024', title: 'Bachelor of Technology, Computer Science', where: 'Jawaharlal Nehru Technological University Kakinada', color: 'var(--pink)' },
];

export const certifications = [
  { title: 'Microsoft Certified: Azure Fundamentals', where: 'Microsoft · 2023', color: 'var(--amber)' },
  { title: 'Google Cloud Architect Specialization', where: 'Coursera · 2022', color: 'var(--teal)' },
];

export const skills = [
  { group: 'Medical imaging', items: ['nnU-Net v2', 'MONAI', 'SimpleITK', 'NiBabel', 'Multi-modal MRI'], tone: 'violet' },
  { group: 'Machine learning', items: ['PyTorch', 'Computer vision', 'LLM-based labelling', 'Model evaluation', 'Uncertainty'], tone: 'teal' },
  { group: 'Engineering', items: ['Python', 'Linux', 'CUDA', 'HPC', 'Docker', 'Google Cloud', 'Weights & Biases'], tone: 'blue' },
  { group: 'Research', items: ['Experimental design', 'Scientific writing', 'Peer review', 'Reproducible research'], tone: 'coral' },
] as const;

export const otherProjects = [
  { label: 'Metal surface defect detection', href: 'https://github.com/sshemanth/metal-surface-defect-detection', note: 'with YOLOv8' },
  { label: 'Abalone age classification', href: 'https://github.com/sshemanth/abalone-age-classification', note: 'with neuro-fuzzy and ensemble models' },
];

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'vision', label: 'Vision' },
  { id: 'research', label: 'Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'background', label: 'Background' },
];
