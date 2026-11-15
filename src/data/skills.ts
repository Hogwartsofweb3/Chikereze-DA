import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'sql',
    title: 'SQL & Relational Databases',
    description:
      'Writing performant, clean queries to extract, aggregate, and transform complex multi-table relational data into decision-ready insights.',
    proof: 'Queried 8,000+ international customer records and audited ₦42M+ in relational transactions.',
    stack: ['PostgreSQL', 'MySQL', 'Relational Schemas', 'CTEs & Joins', 'Window Functions', 'Query Optimization'],
    tint: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  },
  {
    id: 'bi',
    title: 'Power BI & Visual Dashboards',
    description:
      'Architecting intuitive, interactive visual dashboards that allow executives and department leads to monitor KPIs and drill into operational trends.',
    proof: 'Constructed an end-to-end Workforce Retention & Attrition Power BI dashboard for 11,990+ personnel.',
    stack: ['Power BI Desktop', 'DAX Measures', 'Power Query (M)', 'Star Schemas', 'Interactive Slicers', 'Executive KPIs'],
    tint: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
  },
  {
    id: 'excel',
    title: 'Advanced Excel & Data Wrangling',
    description:
      'Harnessing advanced functions, matrix lookups, and automated formulas to scrub dirty data, resolve discrepancies, and model business scenarios.',
    proof: 'Implemented statistical imputation and solved ₦900k inventory discrepancies across 150 transactions.',
    stack: ['XLOOKUP / INDEX-MATCH', 'Dynamic Arrays', 'Pivot Tables', 'Data Validation', 'Imputation Logic', 'Scenario Analysis'],
    tint: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    id: 'strategy',
    title: 'Business Analytics & Storytelling',
    description:
      'Bridging technical datasets with commercial strategy. Translating raw numbers into actionable growth recommendations and executive memos.',
    proof: 'Graduated TechBridge Data Analytics Fellowship; authored 8 comprehensive analytical capstone reports.',
    stack: ['Executive Reporting', 'Root Cause Analysis', 'Revenue Auditing', 'Cohort Analysis', 'KPI Frameworks'],
    tint: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  },
];

export const allSkillTags = [
  'SQL',
  'Power BI',
  'DAX',
  'PostgreSQL',
  'Advanced Excel',
  'Data Modeling',
  'MySQL',
  'Power Query',
  'XLOOKUP',
  'Pivot Tables',
  'Business Intelligence',
  'ETL Pipelines',
  'Statistical Imputation',
  'Revenue Analytics',
  'Workforce Analytics',
  'Data Wrangling',
  'FUTO CS',
  'TechBridge Fellow',
];
