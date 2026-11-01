export interface ResearchFocusItem {
  id: string;
  number: string;
  name: string;
  description: string;
  tag?: string;
}

export interface BenchmarkRow {
  model: string;
  externalData: string;
  localOOF: string;
  officialTest: string;
  isBest?: boolean;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  supervisor?: string;
  overview: string;
  whatIDid: string[];
  benchmarkTable?: BenchmarkRow[];
  result?: string;
  next?: string;
  tools: string[];
  links?: { label: string; url: string }[];
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  col1Label1?: string;
  col1Label2?: string;
  col2Label?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}
