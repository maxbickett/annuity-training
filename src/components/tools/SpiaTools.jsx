import { useMemo, useState } from 'react';

const PAYOUT_OPTIONS = [
  {
    id: 'life_only',
    label: 'Life Only',
    incomeIndex: 100,
    legacyIndex: 10,
    notes: [
      'Highest income.',
      'Stops at death.',
      'Best when goal is maximum lifetime income and other assets cover legacy/liquidity.'
    ]
  },
  {
    id: 'life_period_10',
    label: 'Life + 10-Year Certain',
    incomeIndex: 92,
    legacyIndex: 55,
    notes: [
      'Guarantees at least 10 years of payments (to you or beneficiaries).',
      'Lower income than life-only due to beneficiary protection.'
    ]
  },
  {
    id: 'life_period_20',
    label: 'Life + 20-Year Certain',
    incomeIndex: 84,
    legacyIndex: 75,
    notes: [
      'More beneficiary protection than 10-year certain.',
      'Lower income than shorter certain period.'
    ]
  },
  {
    id: 'cash_refund',
    label: 'Cash Refund',
    incomeIndex: 90,
    legacyIndex: 65,
    notes: [
      'If you die early, beneficiary receives remaining premium not yet paid out (conceptually).',
      'Often reduces income vs life-only.'
    ]
  },
  {
    id: 'joint_100',
    label: 'Joint & Survivor (100%)',
    incomeIndex: 78,
    legacyIndex: 70,
    notes: [
      'Income continues for surviving spouse at the same level.',
      'Lower income than single life because expected payment period is longer.'
    ]
  },
  {
    id: 'joint_50',
    label: 'Joint & Survivor (50%)',
    incomeIndex: 86,
    legacyIndex: 62,
    notes: [
      'Income continues for surviving spouse at a reduced level.',
      'Higher income than 100% survivor, less survivor protection.'
    ]
  }
];

function clampPercent(n) {
  const num = Number(n);
  if (!Number.isFinite(num)) return 0;
  return Math.max(0, Math.min(100, num));
}

function formatMoney(n) {
  const num = Number(n);
  if (!Number.isFinite(num)) return '$0';
  return num.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

function formatPct(n) {
  const num = Number(n);
  if (!Number.isFinite(num)) return '0%';
  return `${(num * 100).toFixed(1)}%`;
}

function TradeoffInfographic() {
  const [optionId, setOptionId] = useState('life_only');
  const option = PAYOUT_OPTIONS.find((o) => o.id === optionId) || PAYOUT_OPTIONS[0];

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <h3 className="text-white font-semibold mb-2">Infographic: Income vs Legacy Trade-off</h3>
      <p className="text-slate-400 text-sm mb-5">
        This is a mental model, not pricing. Real payouts depend on age, rates, carrier pricing, and contract options.
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {PAYOUT_OPTIONS.map((o) => (
          <button
            key={o.id}
            onClick={() => setOptionId(o.id)}
            className={`px-3 py-2 rounded-lg text-sm border ${
              optionId === o.id
                ? 'bg-blue-600 text-white border-blue-500'
                : 'bg-slate-700 text-slate-300 border-slate-600 hover:bg-slate-600'
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-lg bg-slate-900/40 border border-slate-700 p-4">
          <div className="text-slate-300 text-sm font-medium mb-2">Income (Relative Index)</div>
          <div className="h-3 rounded-full bg-slate-700 overflow-hidden">
            <div className="h-full bg-blue-500" style={{ width: `${option.incomeIndex}%` }} />
          </div>
          <div className="mt-2 text-xs text-slate-400">Life-only is set to 100.</div>
        </div>

        <div className="rounded-lg bg-slate-900/40 border border-slate-700 p-4">
          <div className="text-slate-300 text-sm font-medium mb-2">Legacy / Survivor Protection (Relative Index)</div>
          <div className="h-3 rounded-full bg-slate-700 overflow-hidden">
            <div className="h-full bg-emerald-500" style={{ width: `${option.legacyIndex}%` }} />
          </div>
          <div className="mt-2 text-xs text-slate-400">Higher means more protection features.</div>
        </div>
      </div>

      <div className="mt-4 text-sm text-slate-300">
        <div className="text-white font-semibold mb-1">{option.label}</div>
        <ul className="space-y-1">
          {option.notes.map((n) => (
            <li key={n} className="text-slate-300">
              • {n}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ExclusionRatioCalculator() {
  const [premium, setPremium] = useState(500000);
  const [monthlyPayment, setMonthlyPayment] = useState(3500);
  const [expectedYears, setExpectedYears] = useState(20);

  const calc = useMemo(() => {
    const p = Math.max(0, Number(premium) || 0);
    const m = Math.max(0, Number(monthlyPayment) || 0);
    const y = Math.max(0, Number(expectedYears) || 0);

    const expectedReturn = m * 12 * y;
    const exclusionRatioRaw = expectedReturn > 0 ? p / expectedReturn : 0;
    const exclusionRatio = Math.max(0, Math.min(1, exclusionRatioRaw));
    const taxFreeMonthly = m * exclusionRatio;
    const taxableMonthly = Math.max(0, m - taxFreeMonthly);
    const basisRecoveryYears = taxFreeMonthly > 0 ? p / (taxFreeMonthly * 12) : Infinity;

    return {
      p,
      m,
      y,
      expectedReturn,
      exclusionRatio,
      taxFreeMonthly,
      taxableMonthly,
      basisRecoveryYears
    };
  }, [premium, monthlyPayment, expectedYears]);

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <h3 className="text-white font-semibold mb-2">Calculator: Exclusion Ratio (Concept Builder)</h3>
      <p className="text-slate-400 text-sm mb-5">
        This is a simplified concept tool. IRS calculations depend on qualified vs non-qualified funds and life expectancy tables.
      </p>

      <div className="grid sm:grid-cols-3 gap-3 mb-5">
        <label className="block">
          <div className="text-xs text-slate-400 mb-1">Premium (after-tax cost basis)</div>
          <input
            type="number"
            value={premium}
            onChange={(e) => setPremium(e.target.value)}
            className="w-full rounded-lg bg-slate-700 border border-slate-600 px-3 py-2 text-white"
          />
        </label>
        <label className="block">
          <div className="text-xs text-slate-400 mb-1">Monthly Payment</div>
          <input
            type="number"
            value={monthlyPayment}
            onChange={(e) => setMonthlyPayment(e.target.value)}
            className="w-full rounded-lg bg-slate-700 border border-slate-600 px-3 py-2 text-white"
          />
        </label>
        <label className="block">
          <div className="text-xs text-slate-400 mb-1">Expected Years (toy input)</div>
          <input
            type="number"
            value={expectedYears}
            onChange={(e) => setExpectedYears(e.target.value)}
            className="w-full rounded-lg bg-slate-700 border border-slate-600 px-3 py-2 text-white"
          />
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-lg bg-slate-900/40 border border-slate-700 p-4">
          <div className="text-slate-300 text-sm font-medium mb-2">Outputs</div>
          <div className="space-y-1 text-sm text-slate-200">
            <div>Expected return (toy): {formatMoney(calc.expectedReturn)}</div>
            <div>Exclusion ratio (toy): {formatPct(calc.exclusionRatio)}</div>
            <div>Tax-free portion (monthly): {formatMoney(calc.taxFreeMonthly)}</div>
            <div>Taxable portion (monthly): {formatMoney(calc.taxableMonthly)}</div>
          </div>
        </div>

        <div className="rounded-lg bg-slate-900/40 border border-slate-700 p-4">
          <div className="text-slate-300 text-sm font-medium mb-2">Infographic</div>
          <div className="h-3 rounded-full bg-slate-700 overflow-hidden">
            <div className="h-full bg-emerald-500" style={{ width: `${clampPercent(calc.exclusionRatio * 100)}%` }} />
          </div>
          <div className="mt-2 text-xs text-slate-400">Green = tax-free basis return share (toy).</div>
          <div className="mt-3 text-xs text-slate-400">
            Basis recovery period (toy): {Number.isFinite(calc.basisRecoveryYears) ? `${calc.basisRecoveryYears.toFixed(1)} years` : 'n/a'}
          </div>
        </div>
      </div>
    </div>
  );
}

function InflationErosionChart() {
  const [monthlyPayment, setMonthlyPayment] = useState(3500);
  const [inflationRate, setInflationRate] = useState(3);
  const [years, setYears] = useState(30);

  const points = useMemo(() => {
    const m = Math.max(0, Number(monthlyPayment) || 0);
    const r = Math.max(0, Number(inflationRate) || 0) / 100;
    const y = Math.max(1, Math.min(60, Math.floor(Number(years) || 30)));

    const series = [];
    for (let i = 0; i <= y; i += 1) {
      const real = r === 0 ? m : m / Math.pow(1 + r, i);
      series.push({ year: i, real });
    }
    return series;
  }, [monthlyPayment, inflationRate, years]);

  const { path, yMin, yMax } = useMemo(() => {
    const xs = points.map((p) => p.year);
    const ys = points.map((p) => p.real);
    const xMin = Math.min(...xs);
    const xMax = Math.max(...xs);
    const min = Math.min(...ys);
    const max = Math.max(...ys);
    const pad = (max - min) * 0.08 || 1;
    const y0 = Math.max(0, min - pad);
    const y1 = max + pad;

    const mapX = (x) => 40 + ((x - xMin) / (xMax - xMin || 1)) * 560;
    const mapY = (y) => 250 - ((y - y0) / (y1 - y0 || 1)) * 190;

    const d = points
      .map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${mapX(p.year).toFixed(2)} ${mapY(p.real).toFixed(2)}`)
      .join(' ');

    return { path: d, yMin: y0, yMax: y1 };
  }, [points]);

  const realAtEnd = points.length ? points[points.length - 1].real : 0;

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <h3 className="text-white font-semibold mb-2">Infographic: Inflation Erodes Fixed Payments</h3>
      <p className="text-slate-400 text-sm mb-5">
        Fixed nominal income can shrink substantially in real purchasing power. This chart shows real monthly value in today’s dollars.
      </p>

      <div className="grid sm:grid-cols-3 gap-3 mb-5">
        <label className="block">
          <div className="text-xs text-slate-400 mb-1">Monthly Payment</div>
          <input
            type="number"
            value={monthlyPayment}
            onChange={(e) => setMonthlyPayment(e.target.value)}
            className="w-full rounded-lg bg-slate-700 border border-slate-600 px-3 py-2 text-white"
          />
        </label>
        <label className="block">
          <div className="text-xs text-slate-400 mb-1">Inflation Rate (%)</div>
          <input
            type="number"
            value={inflationRate}
            onChange={(e) => setInflationRate(e.target.value)}
            className="w-full rounded-lg bg-slate-700 border border-slate-600 px-3 py-2 text-white"
          />
        </label>
        <label className="block">
          <div className="text-xs text-slate-400 mb-1">Years</div>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full rounded-lg bg-slate-700 border border-slate-600 px-3 py-2 text-white"
          />
        </label>
      </div>

      <svg viewBox="0 0 640 280" className="w-full h-auto rounded-lg bg-slate-900/40 border border-slate-700">
        <line x1="40" y1="250" x2="600" y2="250" stroke="#334155" strokeWidth="2" />
        <line x1="40" y1="60" x2="40" y2="250" stroke="#334155" strokeWidth="2" />
        <path d={path} fill="none" stroke="#60a5fa" strokeWidth="3" />
        <text x="320" y="272" textAnchor="middle" fill="#94a3b8" fontSize="12">
          Years
        </text>
        <text x="18" y="160" textAnchor="middle" fill="#94a3b8" fontSize="12" transform="rotate(-90 18 160)">
          Real Monthly Value
        </text>
        <text x="600" y="70" textAnchor="end" fill="#94a3b8" fontSize="11">
          max {formatMoney(yMax)}
        </text>
        <text x="600" y="245" textAnchor="end" fill="#94a3b8" fontSize="11">
          min {formatMoney(yMin)}
        </text>
      </svg>

      <div className="mt-3 text-sm text-slate-300">
        Real value after {years} years: <span className="text-white font-semibold">{formatMoney(realAtEnd)}</span>
      </div>
    </div>
  );
}

export function SpiaTools() {
  return (
    <div className="space-y-4">
      <TradeoffInfographic />
      <InflationErosionChart />
      <ExclusionRatioCalculator />
    </div>
  );
}

