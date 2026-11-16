import React, { useState } from 'react';
import { AlertTriangle, CheckCircle2, ArrowRightLeft, Sparkles } from 'lucide-react';

export const BeforeAfterDataDiff: React.FC = () => {
  const [viewState, setViewState] = useState<'before' | 'after'>('after');

  const rawSampleRows = [
    {
      id: 'T0120',
      customer: 'C014',
      product: 'P001 (Laptop)',
      qty: '-2 (Negative Anomaly!)',
      price: '₦450,000',
      total: '-₦900,000 (Corrupted Sales!)',
      status: 'error',
      note: 'Quantity = -2. Distorts computing category revenue by ₦900,000.',
    },
    {
      id: 'T0089',
      customer: 'C999 (Invalid Key)',
      product: 'P004 (Headphones)',
      qty: '1',
      price: '₦35,000',
      total: '₦35,000',
      status: 'error',
      note: 'CustomerID C999 does not exist in Customers table.',
    },
    {
      id: 'T0094',
      customer: 'C008',
      product: 'P999 (Invalid Key)',
      qty: '3',
      price: 'Unknown',
      total: 'Unknown',
      status: 'error',
      note: 'ProductID P999 does not exist in Products table.',
    },
    {
      id: 'EMP-104',
      customer: 'Dept: IT_Lagos',
      product: 'Age: 3 yrs',
      qty: 'Salary: N/A',
      price: 'Dept Mean Imputation',
      total: 'Skew Risk',
      status: 'error',
      note: 'Typo in Age (3 years) & missing salary cell.',
    },
  ];

  const cleanedSampleRows = [
    {
      id: 'T0120',
      customer: 'C014',
      product: 'P001 (Laptop)',
      qty: 'Flagged & Quarantined',
      price: '₦450,000',
      total: 'Excluded from Revenue',
      status: 'clean',
      note: 'Removed from final ledger. Prevented ₦900,000 false deduction.',
    },
    {
      id: 'T0089',
      customer: 'Orphan Dropped',
      product: 'P004 (Headphones)',
      qty: 'Filtered Out',
      price: '₦35,000',
      total: 'Integrity Restored',
      status: 'clean',
      note: 'Unmatched customer record dropped to maintain strict referential integrity.',
    },
    {
      id: 'T0094',
      customer: 'C008',
      product: 'Orphan Dropped',
      qty: 'Filtered Out',
      price: 'N/A',
      total: 'Integrity Restored',
      status: 'clean',
      note: 'Unmatched product record dropped to prevent null join multiplication.',
    },
    {
      id: 'EMP-104',
      customer: 'Dept: IT | Region: Lagos',
      product: 'Age: 29.4 (Imputed)',
      qty: 'Salary: ₦385,000',
      price: 'Normalized Column',
      total: 'Clean Record',
      status: 'clean',
      note: 'Compound column parsed into atomic fields; age & salary imputed with IT mean.',
    },
  ];

  const activeRows = viewState === 'before' ? rawSampleRows : cleanedSampleRows;

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/80 p-5 overflow-hidden shadow-sm dark:shadow-none">
      {/* Toggle Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <ArrowRightLeft size={16} className="text-cyan-600 dark:text-cyan-400" />
          <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">
            Data Quality &amp; Referential Audit Diff
          </span>
        </div>

        <div className="flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 self-start sm:self-auto">
          <button
            onClick={() => setViewState('before')}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-colors ${
              viewState === 'before'
                ? 'bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/30 font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            Raw Corrupted State (Before)
          </button>
          <button
            onClick={() => setViewState('after')}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-colors ${
              viewState === 'after'
                ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            Cleaned &amp; Reconciled State (After)
          </button>
        </div>
      </div>

      {/* Status Alert Banner */}
      <div
        className={`p-3 rounded-xl mb-4 text-xs font-mono flex items-center gap-2.5 ${
          viewState === 'before'
            ? 'bg-rose-500/10 border border-rose-500/20 text-rose-700 dark:text-rose-300'
            : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300'
        }`}
      >
        {viewState === 'before' ? (
          <>
            <AlertTriangle size={15} className="shrink-0 text-rose-600 dark:text-rose-400" />
            <span>Unchecked dirty entries would cause severe downstream reporting errors and false deficits.</span>
          </>
        ) : (
          <>
            <CheckCircle2 size={15} className="shrink-0 text-emerald-600 dark:text-emerald-400" />
            <span>100% normalized referential integrity achieved. Verified gross revenue: ₦42,013,200.00.</span>
          </>
        )}
      </div>

      {/* Diff Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
        <table className="w-full text-left text-xs font-mono">
          <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
            <tr>
              <th className="px-3.5 py-2 font-bold uppercase tracking-wider text-[10px]">Record ID</th>
              <th className="px-3.5 py-2 font-bold uppercase tracking-wider text-[10px]">Customer / Entity</th>
              <th className="px-3.5 py-2 font-bold uppercase tracking-wider text-[10px]">Product / Metric</th>
              <th className="px-3.5 py-2 font-bold uppercase tracking-wider text-[10px]">Recorded Value</th>
              <th className="px-3.5 py-2 font-bold uppercase tracking-wider text-[10px]">Audit Resolution</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800/60">
            {activeRows.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                <td className="px-3.5 py-2.5 font-bold text-slate-800 dark:text-slate-300">{row.id}</td>
                <td className="px-3.5 py-2.5 text-slate-700 dark:text-slate-300">{row.customer}</td>
                <td className="px-3.5 py-2.5 text-slate-700 dark:text-slate-300">{row.product}</td>
                <td className="px-3.5 py-2.5">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                      row.status === 'error'
                        ? 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30'
                        : 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30'
                    }`}
                  >
                    {row.qty}
                  </span>
                </td>
                <td className="px-3.5 py-2.5 text-[11px] text-slate-600 dark:text-slate-400">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
