import { useMemo, useState } from 'react';

function formatMoney(n) {
  const num = Number(n);
  if (!Number.isFinite(num)) return '$0';
  return num.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

function Slider({ label, value, onChange, min, max, step, format }) {
  return (
    <label className="block">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-slate-400">{label}</span>
        <span className="text-sm text-white font-medium">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer bg-slate-700 accent-blue-500"
      />
      <div className="flex justify-between mt-1">
        <span className="text-[10px] text-slate-500">{format(min)}</span>
        <span className="text-[10px] text-slate-500">{format(max)}</span>
      </div>
    </label>
  );
}

// Generate a realistic-looking sequence of annual returns.
// Includes one crash year and one boom year, with the rest wobbling around the average.
// Returns are deterministic (no randomness) so the chart is stable when sliders move.
function buildReturnSequence(avgReturn, crashReturn, years) {
  const y = years;
  const returns = [];

  // Year 0 slot = the crash year
  // Year (y-1) slot = the best year
  // Middle years = deterministic wobble around avg

  // First, build the middle years (indices 1 through y-2)
  const middleCount = y - 2;
  const middleReturns = [];
  for (let i = 0; i < middleCount; i++) {
    // Deterministic wobble: looks realistic, repeatable
    const wobble = Math.sin(i * 2.1 + 0.7) * 0.04 + Math.sin(i * 0.8 + 1.3) * 0.025;
    middleReturns.push(avgReturn + wobble);
  }

  // Now figure out what the boom year needs to be so the whole sequence averages to avgReturn.
  // avg = (crash + sum(middle) + boom) / y
  // boom = avg * y - crash - sum(middle)
  const middleSum = middleReturns.reduce((s, r) => s + r, 0);
  const boomReturn = avgReturn * y - crashReturn - middleSum;

  // Assemble: crash first, then middle, then boom last
  // This is the "base" sequence — we'll reorder it for lucky/unlucky
  returns.push(crashReturn);
  returns.push(...middleReturns);
  returns.push(boomReturn);

  return returns;
}

function simulatePortfolio(startBalance, annualWithdrawal, returnSequence) {
  const balances = [startBalance];
  let balance = startBalance;
  for (let i = 0; i < returnSequence.length; i++) {
    balance = Math.max(0, (balance - annualWithdrawal) * (1 + returnSequence[i]));
    balances.push(balance);
  }
  return balances;
}

function findRuinYear(balances) {
  for (let i = 0; i < balances.length; i++) {
    if (balances[i] <= 0) return i;
  }
  return null;
}

function findRequiredCut(startBalance, returnSequence, targetSurvivalYears) {
  let lo = 0;
  let hi = startBalance;
  for (let iter = 0; iter < 50; iter++) {
    const mid = (lo + hi) / 2;
    const balances = simulatePortfolio(startBalance, mid, returnSequence);
    const ruin = findRuinYear(balances);
    if (ruin === null || ruin >= targetSurvivalYears) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return Math.floor(lo / 100) * 100;
}

function SequenceRiskSimulator() {
  const [portfolio, setPortfolio] = useState(1000000);
  const [withdrawal, setWithdrawal] = useState(50000);
  const [avgReturnPct, setAvgReturnPct] = useState(7);
  const [crashPct, setCrashPct] = useState(-25);
  const [years, setYears] = useState(25);

  const sim = useMemo(() => {
    const avg = avgReturnPct / 100;
    const crash = crashPct / 100;
    const y = Math.max(5, Math.min(40, years));

    // Build ONE set of returns: crash, middle years, boom
    const baseSeq = buildReturnSequence(avg, crash, y);

    // UNLUCKY: crash is year 1 (index 0) — this IS the base sequence already
    // (crash first, boom last)
    const unluckySeq = [...baseSeq];

    // LUCKY: exact same returns, but reversed — boom first, crash last
    const luckySeq = [...baseSeq].reverse();

    // Verify averages match (they will by construction)
    const unluckyAvg = unluckySeq.reduce((s, r) => s + r, 0) / y;
    const luckyAvg = luckySeq.reduce((s, r) => s + r, 0) / y;

    const unlucky = simulatePortfolio(portfolio, withdrawal, unluckySeq);
    const lucky = simulatePortfolio(portfolio, withdrawal, luckySeq);

    const unluckyRuin = findRuinYear(unlucky);
    const luckyRuin = findRuinYear(lucky);

    const luckyTarget = luckyRuin !== null ? luckyRuin : y;
    const requiredCut = unluckyRuin !== null && unluckyRuin < luckyTarget
      ? findRequiredCut(portfolio, unluckySeq, luckyTarget)
      : null;

    const cutPercent = requiredCut !== null
      ? Math.round((1 - requiredCut / withdrawal) * 100)
      : null;

    const allBalances = [...lucky, ...unlucky];
    const maxBalance = Math.max(...allBalances, 1);

    return {
      lucky, unlucky, unluckyRuin, luckyRuin,
      avgReturn: avg, maxBalance, requiredCut, cutPercent,
      unluckySeq, luckySeq, y
    };
  }, [portfolio, withdrawal, avgReturnPct, crashPct, years]);

  const SVG_W = 640;
  const SVG_H = 300;
  const PAD_L = 55;
  const PAD_R = 20;
  const PAD_T = 20;
  const PAD_B = 40;
  const plotW = SVG_W - PAD_L - PAD_R;
  const plotH = SVG_H - PAD_T - PAD_B;

  const mapX = (yr) => PAD_L + (yr / sim.y) * plotW;
  const mapY = (bal) => PAD_T + plotH - (bal / sim.maxBalance) * plotH;

  const luckyPath = sim.lucky
    .map((b, i) => `${i === 0 ? 'M' : 'L'} ${mapX(i).toFixed(1)} ${mapY(b).toFixed(1)}`)
    .join(' ');
  const unluckyPath = sim.unlucky
    .map((b, i) => `${i === 0 ? 'M' : 'L'} ${mapX(i).toFixed(1)} ${mapY(b).toFixed(1)}`)
    .join(' ');

  const yTicks = [0, 0.25, 0.5, 0.75, 1].map(frac => Math.round(sim.maxBalance * frac));
  const xTicks = [];
  const xStep = sim.y <= 15 ? 5 : 10;
  for (let i = 0; i <= sim.y; i += xStep) xTicks.push(i);
  if (xTicks[xTicks.length - 1] !== sim.y) xTicks.push(sim.y);

  // For the strip table: show which years to display
  // If > 15 years, abbreviate with ellipsis
  const showAllYears = sim.y <= 15;
  const stripYears = showAllYears
    ? Array.from({ length: sim.y }, (_, i) => i)
    : [...Array.from({ length: 5 }, (_, i) => i), -1, ...Array.from({ length: 5 }, (_, i) => sim.y - 5 + i)];

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <h3 className="text-white font-semibold mb-1">Sequence Risk Simulator</h3>
      <p className="text-slate-400 text-sm mb-5">
        Two retirees with <strong className="text-slate-200">identical returns</strong> over {sim.y} years
        — just in <strong className="text-slate-200">different order</strong>.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 mb-6">
        <Slider
          label="Starting Portfolio"
          value={portfolio}
          onChange={setPortfolio}
          min={200000}
          max={3000000}
          step={50000}
          format={formatMoney}
        />
        <Slider
          label="Annual Withdrawal"
          value={withdrawal}
          onChange={setWithdrawal}
          min={10000}
          max={200000}
          step={5000}
          format={formatMoney}
        />
        <Slider
          label="Average Market Return"
          value={avgReturnPct}
          onChange={setAvgReturnPct}
          min={2}
          max={12}
          step={1}
          format={(v) => `${v}%`}
        />
        <Slider
          label="Worst Year Return"
          value={crashPct}
          onChange={setCrashPct}
          min={-40}
          max={-5}
          step={1}
          format={(v) => `${v}%`}
        />
        <Slider
          label="Time Horizon (years)"
          value={years}
          onChange={setYears}
          min={10}
          max={40}
          step={1}
          format={(v) => `${v} yrs`}
        />
        <div className="flex items-end pb-1">
          <div className="rounded-lg bg-slate-900/40 border border-slate-700 px-4 py-3 w-full">
            <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Avg. Return</div>
            <div className="text-white font-mono text-lg font-semibold">{avgReturnPct}%</div>
            <div className="text-[10px] text-slate-500 mt-0.5">
              Identical — only the order differs
            </div>
          </div>
        </div>
      </div>

      {/* Year-by-Year Returns Strip Table */}
      <div className="mb-4 overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr>
              <td className="text-slate-500 pr-2 py-1 font-medium whitespace-nowrap sticky left-0 bg-slate-800">Year</td>
              {stripYears.map((yr, i) =>
                yr === -1 ? (
                  <td key={`gap-${i}`} className="text-center text-slate-600 px-1 py-1">…</td>
                ) : (
                  <td key={yr} className="text-center text-slate-500 px-1 py-1 font-mono">{yr + 1}</td>
                )
              )}
              <td className="text-center text-slate-400 pl-2 py-1 font-medium">Avg</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-emerald-400 pr-2 py-1 font-medium whitespace-nowrap sticky left-0 bg-slate-800">Lucky</td>
              {stripYears.map((yr, i) =>
                yr === -1 ? (
                  <td key={`gap-${i}`} className="text-center text-slate-600 px-1 py-1">…</td>
                ) : (
                  <td key={yr} className={`text-center px-1 py-1 font-mono ${
                    sim.luckySeq[yr] >= 0 ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    {(sim.luckySeq[yr] * 100).toFixed(1)}%
                  </td>
                )
              )}
              <td className="text-center text-white pl-2 py-1 font-mono font-semibold">
                {(sim.avgReturn * 100).toFixed(1)}%
              </td>
            </tr>
            <tr>
              <td className="text-amber-400 pr-2 py-1 font-medium whitespace-nowrap sticky left-0 bg-slate-800">Unlucky</td>
              {stripYears.map((yr, i) =>
                yr === -1 ? (
                  <td key={`gap-${i}`} className="text-center text-slate-600 px-1 py-1">…</td>
                ) : (
                  <td key={yr} className={`text-center px-1 py-1 font-mono ${
                    sim.unluckySeq[yr] >= 0 ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    {(sim.unluckySeq[yr] * 100).toFixed(1)}%
                  </td>
                )
              )}
              <td className="text-center text-white pl-2 py-1 font-mono font-semibold">
                {(sim.avgReturn * 100).toFixed(1)}%
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Chart */}
      <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} className="w-full h-auto rounded-lg bg-slate-900/40 border border-slate-700 mb-4">
        {/* Grid lines */}
        {yTicks.map(val => (
          <g key={`y-${val}`}>
            <line
              x1={PAD_L} y1={mapY(val)} x2={SVG_W - PAD_R} y2={mapY(val)}
              stroke="#334155" strokeWidth="1" strokeDasharray={val === 0 ? "none" : "4 4"}
            />
            <text x={PAD_L - 8} y={mapY(val) + 4} textAnchor="end" fill="#64748b" fontSize="10">
              {val >= 1000000 ? `$${(val / 1000000).toFixed(1)}M` : val >= 1000 ? `$${Math.round(val / 1000)}K` : '$0'}
            </text>
          </g>
        ))}
        {xTicks.map(yr => (
          <text key={`x-${yr}`} x={mapX(yr)} y={SVG_H - 10} textAnchor="middle" fill="#64748b" fontSize="10">
            Yr {yr}
          </text>
        ))}

        {/* Zero line (ruin threshold) */}
        <line
          x1={PAD_L} y1={mapY(0)} x2={SVG_W - PAD_R} y2={mapY(0)}
          stroke="#ef4444" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.5"
        />

        {/* Lucky path */}
        <path d={luckyPath} fill="none" stroke="#10b981" strokeWidth="2.5" />
        {/* Unlucky path */}
        <path d={unluckyPath} fill="none" stroke="#f59e0b" strokeWidth="2.5" />

        {/* Ruin markers */}
        {sim.unluckyRuin !== null && (
          <g>
            <circle cx={mapX(sim.unluckyRuin)} cy={mapY(0)} r="5" fill="#f59e0b" />
            <text x={mapX(sim.unluckyRuin)} y={mapY(0) - 10} textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="600">
              Yr {sim.unluckyRuin}
            </text>
          </g>
        )}
        {sim.luckyRuin !== null && (
          <g>
            <circle cx={mapX(sim.luckyRuin)} cy={mapY(0)} r="5" fill="#10b981" />
            <text x={mapX(sim.luckyRuin)} y={mapY(0) - 10} textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="600">
              Yr {sim.luckyRuin}
            </text>
          </g>
        )}

        {/* Legend */}
        <rect x={PAD_L + 10} y={PAD_T + 5} width="12" height="3" rx="1.5" fill="#10b981" />
        <text x={PAD_L + 26} y={PAD_T + 10} fill="#94a3b8" fontSize="11">Lucky (best years first)</text>
        <rect x={PAD_L + 10} y={PAD_T + 20} width="12" height="3" rx="1.5" fill="#f59e0b" />
        <text x={PAD_L + 26} y={PAD_T + 25} fill="#94a3b8" fontSize="11">Unlucky (worst year first)</text>
      </svg>

      {/* Impact Panel */}
      <div className="grid sm:grid-cols-2 gap-3 mb-3">
        <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-4">
          <div className="text-emerald-400 text-xs font-medium uppercase tracking-wider mb-1">Lucky Retiree</div>
          {sim.luckyRuin !== null ? (
            <div className="text-white font-semibold">Runs out in year {sim.luckyRuin}</div>
          ) : (
            <div className="text-white font-semibold">
              Still has {formatMoney(sim.lucky[sim.lucky.length - 1])} at year {sim.y}
            </div>
          )}
        </div>
        <div className="rounded-lg bg-amber-500/10 border border-amber-500/30 p-4">
          <div className="text-amber-400 text-xs font-medium uppercase tracking-wider mb-1">Unlucky Retiree</div>
          {sim.unluckyRuin !== null ? (
            <div className="text-white font-semibold">Runs out in year {sim.unluckyRuin}</div>
          ) : (
            <div className="text-white font-semibold">
              Still has {formatMoney(sim.unlucky[sim.unlucky.length - 1])} at year {sim.y}
            </div>
          )}
        </div>
      </div>

      {/* The Brutal Choice */}
      {sim.requiredCut !== null && sim.cutPercent > 0 && (
        <div className="rounded-lg bg-red-500/10 border border-red-500/30 p-4">
          <div className="text-red-400 text-xs font-medium uppercase tracking-wider mb-1">The Brutal Choice</div>
          <p className="text-white text-sm">
            To survive as long as the lucky retiree, the unlucky one must
            <strong> immediately cut spending to {formatMoney(sim.requiredCut)}/year</strong> — a
            <strong> {sim.cutPercent}% permanent pay cut</strong> in retirement.
          </p>
          <p className="text-slate-400 text-xs mt-2">
            Same returns. Same portfolio. Just different order.
          </p>
        </div>
      )}

      {sim.requiredCut === null && sim.unluckyRuin === null && (
        <div className="rounded-lg bg-slate-700/50 border border-slate-600 p-4">
          <p className="text-slate-300 text-sm">
            At this withdrawal rate, both scenarios survive the full {sim.y} years. Try increasing the withdrawal
            or making the crash more severe to see where sequence risk bites.
          </p>
        </div>
      )}

      <p className="text-slate-500 text-xs mt-4">
        Illustrative model, not a financial plan. Both retirees experience the exact same set of
        annual returns — the only difference is the order. The lucky retiree gets the good years
        early; the unlucky one gets the bad year first.
      </p>
    </div>
  );
}

export function SequenceRiskTools() {
  return (
    <div className="space-y-4">
      <SequenceRiskSimulator />
    </div>
  );
}
