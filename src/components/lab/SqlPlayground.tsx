import React, { useState } from 'react';
import { Terminal, Play, Table } from 'lucide-react';

interface PrebuiltQuery {
  id: string;
  name: string;
  sql: string;
  columns: string[];
  rows: (string | number)[][];
}

const PREBUILT_QUERIES: PrebuiltQuery[] = [
  {
    id: 'dept-attrition',
    name: 'Department Churn Ranking',
    sql: `SELECT 
    department, 
    COUNT(*) AS total_exits,
    ROUND(COUNT(*) * 100.0 / 1991, 1) AS share_of_turnover_pct
FROM employees 
WHERE employee_status = 'Left' 
GROUP BY department 
ORDER BY total_exits DESC;`,
    columns: ['department', 'total_exits', 'share_of_turnover_pct'],
    rows: [
      ['Sales', 550, '27.6%'],
      ['Technical', 421, '21.1%'],
      ['Support', 312, '15.7%'],
      ['IT', 158, '7.9%'],
      ['Product Design', 115, '5.8%'],
      ['Marketing', 98, '4.9%'],
      ['Management', 52, '2.6%'],
    ],
  },
  {
    id: 'category-revenue',
    name: 'Retail Revenue by Category',
    sql: `SELECT 
    p.Category,
    COUNT(t.TransactionID) AS total_orders,
    SUM(t.Quantity) AS units_sold,
    CONCAT('₦', FORMAT(SUM(t.Quantity * p.UnitPrice * (1 - t.Discount)), 2)) AS net_revenue
FROM Transactions t
JOIN Products p ON t.ProductID = p.ProductID
WHERE t.CustomerID <> 'C999'
GROUP BY p.Category
ORDER BY SUM(t.Quantity * p.UnitPrice * (1 - t.Discount)) DESC;`,
    columns: ['Category', 'total_orders', 'units_sold', 'net_revenue'],
    rows: [
      ['Laptops & Computing', 48, 112, '₦18,450,000.00'],
      ['Smartphones & Tablets', 52, 185, '₦14,210,000.00'],
      ['Audio & Peripherals', 32, 94, '₦5,840,000.00'],
      ['Accessories & Cables', 15, 56, '₦3,513,200.00'],
    ],
  },
  {
    id: 'satisfaction-churn',
    name: 'Turnover vs Satisfaction Tier',
    sql: `SELECT 
    satisfaction_category,
    COUNT(*) AS employee_exits,
    ROUND(COUNT(*) * 100.0 / 1991, 1) AS pct_of_total_turnover
FROM employees
WHERE employee_status = 'Left'
GROUP BY satisfaction_category
ORDER BY employee_exits DESC;`,
    columns: ['satisfaction_category', 'employee_exits', 'pct_of_total_turnover'],
    rows: [
      ['Low (< 0.40)', 871, '43.7%'],
      ['Medium (0.40 - 0.70)', 685, '34.4%'],
      ['High (> 0.70)', 435, '21.8%'],
    ],
  },
];

export const SqlPlayground: React.FC = () => {
  const [selectedQuery, setSelectedQuery] = useState<PrebuiltQuery>(PREBUILT_QUERIES[0]);
  const [queryText, setQueryText] = useState(PREBUILT_QUERIES[0].sql);
  const [activeResults, setActiveResults] = useState<PrebuiltQuery>(PREBUILT_QUERIES[0]);
  const [isRunning, setIsRunning] = useState(false);

  const handleSelectPrebuilt = (q: PrebuiltQuery) => {
    setSelectedQuery(q);
    setQueryText(q.sql);
    setActiveResults(q);
  };

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      const match = PREBUILT_QUERIES.find((q) => q.id === selectedQuery.id) || PREBUILT_QUERIES[0];
      setActiveResults(match);
      setIsRunning(false);
    }, 280);
  };

  return (
    <div className="rounded-3xl bg-dark-surface/90 dark:bg-dark-surface/90 bg-white border border-slate-800 dark:border-slate-800 border-slate-200 shadow-xl overflow-hidden">
      
      {/* Playground Header */}
      <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Terminal size={17} className="text-cyan-400" />
          <span className="text-sm font-bold text-slate-100 font-mono">
            Interactive SQL Query Engine
          </span>
        </div>

        {/* Prebuilt queries dropdown/tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto">
          {PREBUILT_QUERIES.map((q) => (
            <button
              key={q.id}
              onClick={() => handleSelectPrebuilt(q)}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors whitespace-nowrap ${
                selectedQuery.id === q.id
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {q.name}
            </button>
          ))}
        </div>
      </div>

      {/* Code Editor Window */}
      <div className="p-4 sm:p-6 bg-slate-950 font-mono text-xs">
        <div className="flex items-center justify-between mb-2 text-[11px] text-slate-500">
          <span>QUERY CONSOLE (READ-ONLY DEMO)</span>
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold hover:scale-[1.02] transition-transform active:scale-[0.98]"
          >
            <Play size={12} className="fill-current" />
            <span>{isRunning ? 'Executing...' : 'Run Query'}</span>
          </button>
        </div>

        <textarea
          value={queryText}
          onChange={(e) => setQueryText(e.target.value)}
          rows={7}
          className="w-full bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-cyan-300 font-mono focus:outline-none focus:border-cyan-500/50 resize-none leading-relaxed"
        />
      </div>

      {/* Results Table */}
      <div className="p-4 sm:p-6 border-t border-slate-800/80">
        <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Table size={14} className="text-cyan-400" />
            <span>Query Results ({activeResults.rows.length} rows returned)</span>
          </div>
          <span className="text-[10px] text-emerald-400">Execution time: 0.008s</span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-slate-900 text-slate-300 border-b border-slate-800">
              <tr>
                {activeResults.columns.map((col, idx) => (
                  <th key={idx} className="px-4 py-2.5 font-bold uppercase tracking-wider text-[11px]">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {activeResults.rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-cyan-500/5 transition-colors">
                  {row.map((val, cIdx) => (
                    <td key={cIdx} className="px-4 py-2 text-slate-300">
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
