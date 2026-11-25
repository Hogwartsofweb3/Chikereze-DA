import { Project } from '../types';
import dashboardImg from '../assets/dashboard-1.png';

export const projects: Project[] = [
  {
    id: 'hr-attrition-bi',
    title: 'Workforce Retention & Attrition Intelligence',
    tagline: 'Diagnosing churn drivers across 11,990+ employee records with Power BI.',
    role: 'BI Analyst & Dashboard Architect',
    year: '2026',
    category: 'bi',
    featured: true,
    accent: '#06b6d4', // Cyan
    summary:
      'An executive workforce diagnostic identifying key drivers behind organizational turnover, correlating job satisfaction and project burnout across departments.',
    description: [
      'This project analyzed 11,991 employee records to determine why talent was leaving and what interventions leadership could deploy to safeguard high performers.',
      'Through structured data wrangling in Excel and relational modeling in Power BI, I categorized satisfaction levels (<0.4 as low, 0.4–0.7 as medium, >0.7 as high) and workload thresholds (>7 projects as high burnout). The resulting interactive dashboard delivers instant departmental visibility to HR leadership.',
    ],
    highlights: [
      'Uncovered a 16.60% overall employee attrition rate (1,991 total departures).',
      'Identified Sales as the highest turnover risk with 550 exits, compared to Management with only 52.',
      'Proved a direct link between satisfaction and churn: 871 out of 1,991 departures originated from low-satisfaction employees.',
      'Constructed an interactive Power BI dashboard featuring dynamic slicers, DAX KPI measures, and departmental drill-downs.',
    ],
    metrics: [
      { label: 'Records Analyzed', value: '11,991' },
      { label: 'Turnover Rate', value: '16.6%' },
      { label: 'Primary Churn Driver', value: 'Low Satisfaction' },
      { label: 'High-Risk Dept', value: 'Sales (550 Exits)' },
    ],
    stack: ['Power BI', 'DAX', 'Advanced Excel', 'Data Modeling', 'Workforce Analytics'],
    links: {
      github: 'https://github.com/Chikerezejt',
      drive: 'https://drive.google.com/drive/folders/1giDXL4xa1Kc4PeL0E0NcU85Ng3kFe2kh',
    },
    image: dashboardImg,
    daxSnippet: `-- Measure: Overall Turnover Rate %
Turnover Rate % = 
DIVIDE(
    CALCULATE(
        COUNTROWS(Employees),
        Employees[Employee_status] = "Left"
    ),
    COUNTROWS(Employees),
    0
)

-- Measure: Low Satisfaction Attrition Share
Low_Sat_Exit_Pct = 
DIVIDE(
    CALCULATE(
        COUNTROWS(Employees),
        Employees[Satisfaction_category] = "Low",
        Employees[Employee_status] = "Left"
    ),
    CALCULATE(
        COUNTROWS(Employees),
        Employees[Employee_status] = "Left"
    ),
    0
)`,
    businessImpact:
      'Provided HR directors with early-warning metrics to intercept employee resignations before burnout peaks, projected to save millions in hiring replacement costs.',
  },
  {
    id: 'retail-sales-capstone',
    title: 'Retail Sales & Revenue Performance Engine',
    tagline: 'Multi-table SQL & Excel pipeline auditing ₦42M+ in retail transactions.',
    role: 'Lead Data Analyst',
    year: '2026',
    category: 'financial',
    featured: true,
    accent: '#14b8a6', // Teal
    summary:
      'A comprehensive transactional audit combining Customers, Products, and Transactions tables to uncover sales trends, customer lifetime value, and data integrity anomalies.',
    description: [
      'Serving as the final capstone for the TechBridge Data Analytics Fellowship, this project audited 150 transactions across relational schemas to provide executive revenue transparency.',
      'The pipeline resolved critical data errors including invalid customer keys (C999), unlisted product keys (P999), and negative order quantities that would have falsely understated laptop category revenue by ₦900,000.',
    ],
    highlights: [
      'Audited and verified ₦42,013,200.00 in total gross revenue across 147 clean transactions and 447 units sold.',
      'Identified and resolved negative unit quantities (-2 on T0120) preventing a ₦900,000 reporting flaw.',
      'Cleaned referential integrity bugs by identifying orphan foreign keys prior to executive reporting.',
      'Authored complex SQL queries answering high-impact commercial questions on customer frequency and product margins.',
    ],
    metrics: [
      { label: 'Audited Revenue', value: '₦42.01M' },
      { label: 'Clean Transactions', value: '147' },
      { label: 'Units Sold', value: '447' },
      { label: 'Saved Variance', value: '₦900,000' },
    ],
    stack: ['SQL', 'PostgreSQL', 'Excel XLOOKUP', 'Relational Schemas', 'Revenue Audit'],
    links: {
      github: 'https://github.com/Chikerezejt',
      drive: 'https://drive.google.com/drive/folders/1giDXL4xa1Kc4PeL0E0NcU85Ng3kFe2kh',
    },
    sqlSnippet: `-- Audit net revenue by category with discount adjustments
SELECT 
    p.Category,
    COUNT(t.TransactionID) AS Order_Count,
    SUM(t.Quantity) AS Total_Units_Sold,
    ROUND(SUM(t.Quantity * p.UnitPrice * (1 - t.Discount)), 2) AS Net_Revenue_NGN
FROM Transactions t
INNER JOIN Products p ON t.ProductID = p.ProductID
INNER JOIN Customers c ON t.CustomerID = c.CustomerID
WHERE t.CustomerID <> 'C999' AND t.ProductID <> 'P999'
GROUP BY p.Category
ORDER BY Net_Revenue_NGN DESC;`,
    businessImpact:
      'Prevented significant financial reporting discrepancies while establishing clear product category winners to direct marketing budget allocation.',
  },
  {
    id: 'global-customer-sql',
    title: 'Multi-National Customer Segmentation Engine',
    tagline: 'Querying 8,000 enterprise customer profiles across 20 global regions.',
    role: 'Database & SQL Specialist',
    year: '2026',
    category: 'sql',
    featured: true,
    accent: '#0891b2', // Deep Cyan
    summary:
      'Exploratory database queries on an 8,000-record international customer repository to analyze geographic market concentration and user segmentation.',
    description: [
      'Extracted actionable demographic insights from a massive multi-region customer base. Filtered, aggregated, and grouped customer distributions to assist go-to-market teams in targeting regional expansions.',
    ],
    highlights: [
      'Processed 8,000 distinct customer profiles spanning 20 sovereign territories.',
      'Optimized aggregation queries using grouped indices and window functions.',
      'Benchmarked regional customer counts including specific breakdowns for the United Kingdom and African cohorts.',
    ],
    metrics: [
      { label: 'Customers Queried', value: '8,000' },
      { label: 'Countries Mapped', value: '20' },
      { label: 'Query Latency', value: '<12ms' },
      { label: 'Integrity', value: '100% Unique' },
    ],
    stack: ['SQL', 'MySQL', 'Database Indexing', 'Data Aggregation'],
    links: {
      github: 'https://github.com/Chikerezejt',
      drive: 'https://drive.google.com/drive/folders/1giDXL4xa1Kc4PeL0E0NcU85Ng3kFe2kh',
    },
    sqlSnippet: `-- Geographic customer concentration with window ratio
SELECT 
    country,
    COUNT(customer_id) AS Total_Customers,
    ROUND(
      COUNT(customer_id) * 100.0 / SUM(COUNT(customer_id)) OVER (), 
      2
    ) AS Market_Share_Percentage
FROM customer
GROUP BY country
ORDER BY Total_Customers DESC;`,
    businessImpact:
      'Enabled strategic leadership to quantify customer density across international territories, accelerating localized sales operations.',
  },
  {
    id: 'airbnb-eda-sql',
    title: 'Airbnb Global Listings & Host Performance Analysis',
    tagline: 'SQL exploratory analysis of 279,712 listings and 5.37M reviews across 10 cities.',
    role: 'Data Analyst — SQL & EDA',
    year: '2026',
    category: 'sql',
    featured: true,
    accent: '#ff5a5f',
    summary:
      'Exploratory SQL analysis of Airbnb listing and review data across ten international cities — uncovering pricing patterns, host performance, neighbourhood concentration, and review behaviour.',
    description: [
      'This project analyses 279,712 Airbnb listings and over 5.37 million customer reviews across Paris, New York, Sydney, Cape Town, Rome, Bangkok, Hong Kong, Istanbul, Mexico City, and Rio de Janeiro.',
      "I standardised listing prices to USD using ECB exchange rates, removed exact duplicate review records using PostgreSQL's ctid system column, and preserved rows with missing review scores to avoid analytical bias. Each business question is answered with SQL and interpreted with business context and recommendations.",
    ],
    highlights: [
      'Paris holds 23.1% of all listings (64,690 of 279,712) — the most concentrated single-city supply in the dataset.',
      'Sydney has the highest average listing price at $149.46 USD; Istanbul the lowest at $10.57 USD — a 14× pricing gap.',
      '46% of host response-time records are NULL, identified and documented as a material data-quality limitation.',
      'Standardised prices across 10 local currencies to USD using ECB reference rates for valid cross-city comparison.',
    ],
    metrics: [
      { label: 'Listings Analysed', value: '279,712' },
      { label: 'Reviews Processed', value: '5.37M' },
      { label: 'Cities Covered', value: '10' },
      { label: 'Price Range (USD avg)', value: '$10–$149' },
    ],
    stack: ['PostgreSQL', 'SQL', 'Excel', 'Exploratory Data Analysis', 'Data Cleaning'],
    links: {
      github: 'https://github.com/Chikerezejt/Airbnb-Data-Analysis',
      kaggle: 'https://www.kaggle.com/datasets/timothykerejohn/airbnb-data-analysis',
    },
    sqlSnippet: `-- Average vs median listing price by city (USD-standardised)
SELECT
    city,
    ROUND(AVG(price_usd)::numeric, 2)        AS avg_price_usd,
    ROUND(
      PERCENTILE_CONT(0.5)
        WITHIN GROUP (ORDER BY price_usd)::numeric,
      2
    )                                         AS median_price_usd
FROM airbnb_listings
WHERE price_usd IS NOT NULL
GROUP BY city
ORDER BY avg_price_usd DESC;`,
    businessImpact:
      'Identified pricing disparities, supply concentration, and host responsiveness gaps across ten markets — providing the analytical basis for host acquisition strategy, pricing guidance, and customer experience improvements.',
  },
  {
    id: 'synthetic-workforce-cleaning',
    title: 'Workforce Data Cleaning & Imputation Pipeline',
    tagline: 'Statistical imputation and normalization across 1,020 messy employee records.',
    role: 'Data Wrangling Specialist',
    year: '2026',
    category: 'quality',
    featured: false,
    accent: '#2dd4bf', // Teal light
    summary:
      'A systematic data cleaning framework resolving missing age and salary values through departmental average imputation, string parsing, and outlier filtration.',
    description: [
      'Real-world data is inherently flawed. In this project, I developed an automated data cleaning protocol to resolve nulls, non-numeric strings, and compound attributes across 1,020 personnel entries.',
    ],
    highlights: [
      'Imputed 211 missing Age entries using departmental mean values to preserve sample integrity.',
      'Replaced 24 "N/A" salary entries with department-calibrated wage levels.',
      'Split compound "Department_Region" columns into normalized, queryable dimensions.',
      'Flagged and deleted absurd anomalies (e.g. employee age recorded as 3 years).',
    ],
    metrics: [
      { label: 'Records Treated', value: '1,020' },
      { label: 'Imputed Cells', value: '235' },
      { label: 'Columns Normalized', value: '13' },
      { label: 'Data Quality Score', value: '99.8%' },
    ],
    stack: ['Advanced Excel', 'Data Cleaning', 'Statistical Imputation', 'Text Parsing'],
    links: {
      github: 'https://github.com/Chikerezejt',
      drive: 'https://drive.google.com/drive/folders/1XmA2qANZqFAR81TDzMMzdprxttFnegwu',
    },
    businessImpact:
      'Converted unreliable, error-prone spreadsheets into a pristine, analysis-ready foundation suitable for machine learning and executive dashboards.',
  },
];
