export type ProjectCategory = 'all' | 'bi' | 'sql' | 'financial' | 'quality';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  role: string;
  year: string;
  category: 'bi' | 'sql' | 'financial' | 'quality';
  featured: boolean;
  accent: string;
  summary: string;
  description: string[];
  highlights: string[];
  metrics: ProjectMetric[];
  stack: string[];
  links: {
    live?: string;
    github?: string;
    drive?: string;
    report?: string;
    kaggle?: string;
  };
  image?: string;
  sqlSnippet?: string;
  daxSnippet?: string;
  businessImpact: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  proof: string;
  stack: string[];
  tint: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  rating: number;
  message: string;
}

export interface SqlSampleResult {
  columns: string[];
  rows: (string | number)[][];
}
