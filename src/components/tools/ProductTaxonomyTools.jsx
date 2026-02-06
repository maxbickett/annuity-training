import { useMemo, useState } from 'react';

const PRODUCT_CARDS = [
  {
    id: 'spia',
    label: 'SPIA',
    fullName: 'Single Premium Immediate Annuity',
    timing: 'Immediate',
    marketExposure: 'None',
    mentalModel: 'Pension replacement',
    story: 'You get the same check every year, for life.',
    risk: { upside: 0, downside: 0, tradeoff: 'Liquidity' },
    bestFor: [
      'Income starts now or very soon',
      'Client wants to eliminate longevity risk for essentials',
      'Client can give up principal access for that income'
    ],
    watchOuts: [
      'Irreversible trade: liquidity is limited once annuitized',
      'Income options (period certain, cash refund, joint) reduce payout'
    ],
    x: 60,
    y: 90
  },
  {
    id: 'dia',
    label: 'DIA',
    fullName: 'Deferred Income Annuity (aka Longevity Annuity)',
    timing: 'Deferred',
    marketExposure: 'None',
    mentalModel: 'Longevity insurance (income later)',
    story: 'Nothing for years, then a bigger check than SPIA — because you waited.',
    risk: { upside: 0, downside: 0, tradeoff: 'Long wait + liquidity' },
    bestFor: [
      'Income starts later (often to hedge 80+ or 85+)',
      'Client wants a backstop if they live very long'
    ],
    watchOuts: [
      'Less flexible than liquid portfolios',
      'Deferral is the point; early access is limited'
    ],
    x: 140,
    y: 250
  },
  {
    id: 'myga',
    label: 'MYGA',
    fullName: 'Multi-Year Guaranteed Annuity',
    timing: 'Deferred',
    marketExposure: 'None',
    mentalModel: 'Bond/CD-like contract with surrender charges',
    story: 'Like a CD — you know the rate, you know the term.',
    risk: { upside: 1, downside: 0, tradeoff: 'Surrender charges' },
    bestFor: [
      'Client wants principal protection and a known rate',
      'Tax deferral is valuable (non-qualified) and liquidity needs are planned'
    ],
    watchOuts: [
      'Surrender charges restrict access during the term',
      'Renewal terms can change after the guarantee period'
    ],
    x: 260,
    y: 250
  },
  {
    id: 'fixed',
    label: 'Fixed',
    fullName: 'Traditional Fixed Deferred Annuity',
    timing: 'Deferred',
    marketExposure: 'None',
    mentalModel: 'Insurer-declared rate with floors/guarantees',
    story: 'Guaranteed floor, but the rate they pay you can change.',
    risk: { upside: 1, downside: 0, tradeoff: 'Rate renewal risk' },
    bestFor: [
      'Client wants principal protection',
      'Client wants flexibility vs a single term lock (product-dependent)'
    ],
    watchOuts: [
      'Initial rate and renewal rate can differ',
      'Surrender schedule still applies'
    ],
    x: 340,
    y: 250
  },
  {
    id: 'fia',
    label: 'FIA',
    fullName: 'Fixed Indexed Annuity',
    timing: 'Deferred',
    marketExposure: 'Limited (capped)',
    mentalModel: 'Upside-limited participation with principal protection',
    story: 'You get some of the upside, none of the downside.',
    risk: { upside: 2, downside: 0, tradeoff: 'Cap limits gains' },
    bestFor: [
      'Client cannot tolerate market losses in the contract value',
      'Client is OK with capped/limited upside for that protection'
    ],
    watchOuts: [
      'Crediting is not "market returns"; caps/spreads/participation matter',
      'Surrender charges and rider costs can apply'
    ],
    x: 440,
    y: 250
  },
  {
    id: 'rila',
    label: 'RILA',
    fullName: 'Registered Index-Linked Annuity (Buffered)',
    timing: 'Deferred',
    marketExposure: 'Partial (defined risk)',
    mentalModel: 'Defined-risk equity exposure in an annuity wrapper',
    story: 'More upside than FIA, but you take losses beyond the buffer.',
    risk: { upside: 3, downside: 2, tradeoff: 'Real loss possible' },
    bestFor: [
      'Client can accept some downside for higher upside potential vs FIA',
      'Client wants a defined loss profile (buffer/floor) within limits'
    ],
    watchOuts: [
      'RILAs are securities; disclosure/oversight differs vs fixed products',
      'Buffers/floors have limits; losses beyond buffer are real'
    ],
    x: 520,
    y: 250
  },
  {
    id: 'va',
    label: 'VA',
    fullName: 'Variable Annuity',
    timing: 'Deferred',
    marketExposure: 'Full',
    mentalModel: 'Tax-deferred investing with optional guarantees',
    story: 'Full market ride, minus fees — with optional safety nets at extra cost.',
    risk: { upside: 4, downside: 4, tradeoff: 'Fees + complexity' },
    bestFor: [
      'Client wants full market exposure inside an annuity wrapper',
      'Client values tax deferral and/or specific riders enough to justify costs'
    ],
    watchOuts: [
      'Total fee stack can be high; net returns matter',
      'Riders add cost and constraints; not free insurance'
    ],
    x: 600,
    y: 250
  }
];

function clamp01(n) {
  if (Number.isNaN(n)) return 0;
  return Math.max(0, Math.min(1, n));
}

function percent(n) {
  const num = Number(n);
  if (!Number.isFinite(num)) return '0%';
  return `${num.toFixed(2)}%`;
}

// ── Risk / Reward Bar ─────────────────────────────────────────
const RISK_LABELS = ['None', 'Minimal', 'Limited', 'Partial', 'Full'];

function RiskRewardBar({ risk }) {
  const maxW = 4;
  const upPct = (risk.upside / maxW) * 100;
  const downPct = (risk.downside / maxW) * 100;

  return (
    <div className="space-y-2">
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider">Upside potential</span>
          <span className="text-xs text-emerald-400 font-medium">{RISK_LABELS[risk.upside]}</span>
        </div>
        <div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden">
          <div className="h-full rounded-full bg-emerald-500 transition-all" style={{ width: `${Math.max(upPct, 3)}%` }} />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider">Downside exposure</span>
          <span className="text-xs text-red-400 font-medium">{RISK_LABELS[risk.downside]}</span>
        </div>
        <div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden">
          <div className="h-full rounded-full bg-red-500 transition-all" style={{ width: `${Math.max(downPct, 3)}%` }} />
        </div>
      </div>
      <div className="text-[10px] text-slate-500">
        Trade-off: <span className="text-slate-400">{risk.tradeoff}</span>
      </div>
    </div>
  );
}

// ── Product Infographic Charts ─────────────────────────────────
// All charts share a 320×140 viewBox. Each product gets a distinct visual shape.

// Deterministic market-like returns for FIA/RILA/VA charts
const MARKET_RETURNS = [0.12, -0.08, 0.18, 0.05, -0.15, 0.22, -0.03, 0.14, 0.09, -0.12];

function chartMarketLine(returns) {
  let val = 100;
  const pts = [val];
  for (const r of returns) {
    val = val * (1 + r);
    pts.push(val);
  }
  return pts;
}

function ChartSpia() {
  // 10 years of flat income bars
  const BAR_H = 55;
  const years = 10;
  const barW = 24;
  const gap = 4;
  const startX = 30;
  const baseY = 120;

  return (
    <>
      {Array.from({ length: years }, (_, i) => (
        <rect
          key={i}
          x={startX + i * (barW + gap)}
          y={baseY - BAR_H}
          width={barW}
          height={BAR_H}
          rx="2"
          fill="#10b981"
          opacity="0.7"
        />
      ))}
      {/* Continuation arrow */}
      <text x={startX + years * (barW + gap) + 2} y={baseY - BAR_H / 2 + 4} fill="#10b981" fontSize="16">...</text>
      {/* Baseline */}
      <line x1={startX - 5} y1={baseY} x2={310} y2={baseY} stroke="#475569" strokeWidth="1" />
      <text x={startX - 5} y={baseY + 12} fill="#64748b" fontSize="9">Yr 1</text>
      <text x={startX + 9 * (barW + gap)} y={baseY + 12} fill="#64748b" fontSize="9" textAnchor="middle">Yr 10</text>
      <text x={160} y={20} textAnchor="middle" fill="#94a3b8" fontSize="10">Annual Income</text>
    </>
  );
}

function ChartDia() {
  // 5 years waiting, then 5 years of higher income bars
  const BAR_H = 65;
  const years = 10;
  const barW = 24;
  const gap = 4;
  const startX = 30;
  const baseY = 120;
  const deferralYears = 5;

  return (
    <>
      {/* Deferral zone */}
      <rect x={startX - 5} y={15} width={deferralYears * (barW + gap)} height={baseY - 10} fill="#334155" opacity="0.3" rx="4" />
      <text x={startX + (deferralYears * (barW + gap)) / 2 - 5} y={baseY - 15} textAnchor="middle" fill="#64748b" fontSize="10">Waiting</text>
      {/* Income bars */}
      {Array.from({ length: years - deferralYears }, (_, i) => (
        <rect
          key={i}
          x={startX + (deferralYears + i) * (barW + gap)}
          y={baseY - BAR_H}
          width={barW}
          height={BAR_H}
          rx="2"
          fill="#10b981"
          opacity="0.7"
        />
      ))}
      <text x={startX + years * (barW + gap) + 2} y={baseY - BAR_H / 2 + 4} fill="#10b981" fontSize="16">...</text>
      <line x1={startX - 5} y1={baseY} x2={310} y2={baseY} stroke="#475569" strokeWidth="1" />
      <text x={startX - 5} y={baseY + 12} fill="#64748b" fontSize="9">Yr 1</text>
      <text x={startX + 9 * (barW + gap)} y={baseY + 12} fill="#64748b" fontSize="9" textAnchor="middle">Yr 10</text>
      <text x={160} y={20} textAnchor="middle" fill="#94a3b8" fontSize="10">Annual Income</text>
    </>
  );
}

function ChartMyga() {
  // Flat guaranteed rate for 5 years, then dotted "?" for renewal
  const startX = 30;
  const baseY = 120;
  const rateY = 50;
  const midX = 170;

  return (
    <>
      {/* Guaranteed period */}
      <line x1={startX} y1={rateY} x2={midX} y2={rateY} stroke="#10b981" strokeWidth="2.5" />
      <rect x={startX} y={rateY - 2} width={6} height={4} rx="2" fill="#10b981" />
      <text x={(startX + midX) / 2} y={rateY - 10} textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="600">4.5% guaranteed</text>
      {/* Renewal uncertainty */}
      <line x1={midX} y1={rateY} x2={290} y2={rateY} stroke="#f59e0b" strokeWidth="2" strokeDasharray="6 4" />
      <text x={(midX + 290) / 2} y={rateY - 10} textAnchor="middle" fill="#f59e0b" fontSize="10">Renewal rate?</text>
      {/* Vertical divider */}
      <line x1={midX} y1={25} x2={midX} y2={baseY} stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
      <text x={midX} y={baseY + 12} textAnchor="middle" fill="#64748b" fontSize="9">Term ends</text>
      {/* Principal line */}
      <line x1={startX} y1={baseY} x2={290} y2={baseY} stroke="#475569" strokeWidth="1" />
      <text x={startX} y={baseY + 12} fill="#64748b" fontSize="9">Yr 1</text>
      <text x={160} y={20} textAnchor="middle" fill="#94a3b8" fontSize="10">Account Value Growth</text>
      {/* Principal safe zone */}
      <text x={160} y={baseY - 5} textAnchor="middle" fill="#64748b" fontSize="9">Principal protected</text>
    </>
  );
}

function ChartFixed() {
  // Flat initial rate, then a range band showing renewal uncertainty
  const startX = 30;
  const baseY = 120;
  const rateY = 55;
  const midX = 140;
  const bandTop = 40;
  const bandBot = 75;

  return (
    <>
      {/* Initial rate */}
      <line x1={startX} y1={rateY} x2={midX} y2={rateY} stroke="#10b981" strokeWidth="2.5" />
      <text x={(startX + midX) / 2} y={rateY - 10} textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="600">Declared rate</text>
      {/* Range band for renewal */}
      <polygon
        points={`${midX},${rateY} ${290},${bandTop} ${290},${bandBot} ${midX},${rateY}`}
        fill="#f59e0b"
        opacity="0.15"
      />
      <line x1={midX} y1={rateY} x2={290} y2={bandTop} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1={midX} y1={rateY} x2={290} y2={bandBot} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x={(midX + 290) / 2} y={bandTop - 5} textAnchor="middle" fill="#f59e0b" fontSize="9">Range of renewal rates</text>
      {/* Floor line */}
      <line x1={startX} y1={baseY - 10} x2={290} y2={baseY - 10} stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />
      <text x={290} y={baseY - 13} textAnchor="end" fill="#64748b" fontSize="8">Minimum guarantee</text>
      {/* Baseline */}
      <line x1={startX} y1={baseY} x2={290} y2={baseY} stroke="#475569" strokeWidth="1" />
      <text x={startX} y={baseY + 12} fill="#64748b" fontSize="9">Yr 1</text>
      <text x={160} y={20} textAnchor="middle" fill="#94a3b8" fontSize="10">Credited Rate Over Time</text>
    </>
  );
}

function ChartFia() {
  // Market line (gray) with FIA credited line (green) — capped on up, 0% floor on down
  const pts = chartMarketLine(MARKET_RETURNS);
  const capRate = 0.08;

  // FIA: year-by-year crediting — cap on gains, 0% floor on losses
  let fiaVal = 100;
  const fiaPts = [fiaVal];
  for (const r of MARKET_RETURNS) {
    const credited = Math.max(0, Math.min(r, capRate));
    fiaVal = fiaVal * (1 + credited);
    fiaPts.push(fiaVal);
  }

  const allVals = [...pts, ...fiaPts];
  const minV = Math.min(...allVals) * 0.95;
  const maxV = Math.max(...allVals) * 1.05;
  const startX = 30;
  const endX = 300;
  const topY = 25;
  const botY = 120;

  const mapX = (i) => startX + (i / 10) * (endX - startX);
  const mapY = (v) => topY + (botY - topY) * (1 - (v - minV) / (maxV - minV));

  const marketPath = pts.map((v, i) => `${i === 0 ? 'M' : 'L'} ${mapX(i).toFixed(1)} ${mapY(v).toFixed(1)}`).join(' ');
  const fiaPath = fiaPts.map((v, i) => `${i === 0 ? 'M' : 'L'} ${mapX(i).toFixed(1)} ${mapY(v).toFixed(1)}`).join(' ');

  return (
    <>
      <text x={160} y={15} textAnchor="middle" fill="#94a3b8" fontSize="10">Market vs. FIA Value</text>
      {/* 0% floor annotation */}
      <line x1={startX} y1={mapY(100)} x2={endX} y2={mapY(100)} stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
      <text x={endX + 2} y={mapY(100) + 3} fill="#64748b" fontSize="8">Start</text>
      {/* Market line */}
      <path d={marketPath} fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" />
      {/* FIA line */}
      <path d={fiaPath} fill="none" stroke="#10b981" strokeWidth="2.5" />
      {/* Legend */}
      <line x1={startX} y1={botY + 12} x2={startX + 15} y2={botY + 12} stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x={startX + 18} y={botY + 15} fill="#64748b" fontSize="8">Market</text>
      <line x1={startX + 65} y1={botY + 12} x2={startX + 80} y2={botY + 12} stroke="#10b981" strokeWidth="2.5" />
      <text x={startX + 83} y={botY + 15} fill="#10b981" fontSize="8">FIA (8% cap, 0% floor)</text>
    </>
  );
}

function ChartRila() {
  // Market line with RILA — higher cap (15%), but 10% buffer on downside
  const pts = chartMarketLine(MARKET_RETURNS);
  const rilaCap = 0.15;
  const buffer = 0.10;

  let rilaVal = 100;
  const rilaPts = [rilaVal];
  for (const r of MARKET_RETURNS) {
    let credited;
    if (r >= 0) {
      credited = Math.min(r, rilaCap);
    } else {
      // Buffer absorbs first 10% of loss
      credited = Math.min(0, r + buffer);
    }
    rilaVal = rilaVal * (1 + credited);
    rilaPts.push(rilaVal);
  }

  const allVals = [...pts, ...rilaPts];
  const minV = Math.min(...allVals) * 0.95;
  const maxV = Math.max(...allVals) * 1.05;
  const startX = 30;
  const endX = 300;
  const topY = 25;
  const botY = 120;

  const mapX = (i) => startX + (i / 10) * (endX - startX);
  const mapY = (v) => topY + (botY - topY) * (1 - (v - minV) / (maxV - minV));

  const marketPath = pts.map((v, i) => `${i === 0 ? 'M' : 'L'} ${mapX(i).toFixed(1)} ${mapY(v).toFixed(1)}`).join(' ');
  const rilaPath = rilaPts.map((v, i) => `${i === 0 ? 'M' : 'L'} ${mapX(i).toFixed(1)} ${mapY(v).toFixed(1)}`).join(' ');

  return (
    <>
      <text x={160} y={15} textAnchor="middle" fill="#94a3b8" fontSize="10">Market vs. RILA Value</text>
      <line x1={startX} y1={mapY(100)} x2={endX} y2={mapY(100)} stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
      {/* Buffer zone shading on down years */}
      {MARKET_RETURNS.map((r, i) => {
        if (r >= 0) return null;
        const x1 = mapX(i);
        const x2 = mapX(i + 1);
        const y1 = mapY(pts[i]);
        const bufferedY = mapY(pts[i] * (1 + Math.min(0, r + buffer)));
        return (
          <rect key={i} x={x1} y={Math.min(y1, bufferedY)} width={x2 - x1} height={Math.abs(bufferedY - y1) || 2} fill="#3b82f6" opacity="0.15" />
        );
      })}
      <path d={marketPath} fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" />
      <path d={rilaPath} fill="none" stroke="#3b82f6" strokeWidth="2.5" />
      {/* Legend */}
      <line x1={startX} y1={botY + 12} x2={startX + 15} y2={botY + 12} stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x={startX + 18} y={botY + 15} fill="#64748b" fontSize="8">Market</text>
      <line x1={startX + 65} y1={botY + 12} x2={startX + 80} y2={botY + 12} stroke="#3b82f6" strokeWidth="2.5" />
      <text x={startX + 83} y={botY + 15} fill="#3b82f6" fontSize="8">RILA (15% cap, 10% buffer)</text>
    </>
  );
}

function ChartVa() {
  // Market and VA nearly identical — VA slightly below due to fees
  const pts = chartMarketLine(MARKET_RETURNS);
  const feeRate = 0.02; // 2% annual fee drag

  let vaVal = 100;
  const vaPts = [vaVal];
  for (const r of MARKET_RETURNS) {
    vaVal = vaVal * (1 + r - feeRate);
    vaPts.push(vaVal);
  }

  const allVals = [...pts, ...vaPts];
  const minV = Math.min(...allVals) * 0.95;
  const maxV = Math.max(...allVals) * 1.05;
  const startX = 30;
  const endX = 300;
  const topY = 25;
  const botY = 120;

  const mapX = (i) => startX + (i / 10) * (endX - startX);
  const mapY = (v) => topY + (botY - topY) * (1 - (v - minV) / (maxV - minV));

  const marketPath = pts.map((v, i) => `${i === 0 ? 'M' : 'L'} ${mapX(i).toFixed(1)} ${mapY(v).toFixed(1)}`).join(' ');
  const vaPath = vaPts.map((v, i) => `${i === 0 ? 'M' : 'L'} ${mapX(i).toFixed(1)} ${mapY(v).toFixed(1)}`).join(' ');

  // Fee drag annotation — bracket between the two lines at the end
  const endMarket = mapY(pts[10]);
  const endVa = mapY(vaPts[10]);

  return (
    <>
      <text x={160} y={15} textAnchor="middle" fill="#94a3b8" fontSize="10">Market vs. VA Value</text>
      <line x1={startX} y1={mapY(100)} x2={endX} y2={mapY(100)} stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
      <path d={marketPath} fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" />
      <path d={vaPath} fill="none" stroke="#8b5cf6" strokeWidth="2.5" />
      {/* Fee drag bracket */}
      <line x1={endX + 5} y1={endMarket} x2={endX + 5} y2={endVa} stroke="#f59e0b" strokeWidth="1.5" />
      <line x1={endX + 2} y1={endMarket} x2={endX + 8} y2={endMarket} stroke="#f59e0b" strokeWidth="1" />
      <line x1={endX + 2} y1={endVa} x2={endX + 8} y2={endVa} stroke="#f59e0b" strokeWidth="1" />
      <text x={endX + 12} y={(endMarket + endVa) / 2 + 3} fill="#f59e0b" fontSize="8">Fees</text>
      {/* Legend */}
      <line x1={startX} y1={botY + 12} x2={startX + 15} y2={botY + 12} stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x={startX + 18} y={botY + 15} fill="#64748b" fontSize="8">Market</text>
      <line x1={startX + 65} y1={botY + 12} x2={startX + 80} y2={botY + 12} stroke="#8b5cf6" strokeWidth="2.5" />
      <text x={startX + 83} y={botY + 15} fill="#8b5cf6" fontSize="8">VA (after ~2% fees)</text>
    </>
  );
}

function ProductInfoGraphic({ product }) {
  const CHARTS = {
    spia: ChartSpia,
    dia: ChartDia,
    myga: ChartMyga,
    fixed: ChartFixed,
    fia: ChartFia,
    rila: ChartRila,
    va: ChartVa,
  };

  const Chart = CHARTS[product.id];
  if (!Chart) return null;

  return (
    <div className="space-y-3">
      <svg viewBox="0 0 320 140" className="w-full h-auto rounded-lg bg-slate-900/40 border border-slate-700">
        <Chart />
      </svg>
      <p className="text-slate-300 text-sm italic">{product.story}</p>
      <RiskRewardBar risk={product.risk} />
    </div>
  );
}

function CreditingMiniLab() {
  const [indexReturn, setIndexReturn] = useState(12);
  const [cap, setCap] = useState(8);
  const [participation, setParticipation] = useState(55);
  const [spread, setSpread] = useState(3);

  const r = Number(indexReturn);
  const capNum = Number(cap);
  const part = clamp01(Number(participation) / 100);
  const spreadNum = Number(spread);

  const full = r;
  const capMethod = Math.max(0, Math.min(r, capNum));
  const participationMethod = Math.max(0, r * part);
  const spreadMethod = Math.max(0, r - spreadNum);

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <h3 className="text-white font-semibold mb-2">Mini Lab: Why “Indexed” ≠ “Market Returns”</h3>
      <p className="text-slate-400 text-sm mb-5">
        FIAs often credit interest using caps, participation rates, or spreads. This is a toy model to build intuition,
        not a carrier illustration.
      </p>

      <div className="grid sm:grid-cols-4 gap-3 mb-5">
        <label className="block">
          <div className="text-xs text-slate-400 mb-1">Index Return</div>
          <input
            type="number"
            value={indexReturn}
            onChange={(e) => setIndexReturn(e.target.value)}
            className="w-full rounded-lg bg-slate-700 border border-slate-600 px-3 py-2 text-white"
          />
        </label>
        <label className="block">
          <div className="text-xs text-slate-400 mb-1">Cap</div>
          <input
            type="number"
            value={cap}
            onChange={(e) => setCap(e.target.value)}
            className="w-full rounded-lg bg-slate-700 border border-slate-600 px-3 py-2 text-white"
          />
        </label>
        <label className="block">
          <div className="text-xs text-slate-400 mb-1">Participation %</div>
          <input
            type="number"
            value={participation}
            onChange={(e) => setParticipation(e.target.value)}
            className="w-full rounded-lg bg-slate-700 border border-slate-600 px-3 py-2 text-white"
          />
        </label>
        <label className="block">
          <div className="text-xs text-slate-400 mb-1">Spread</div>
          <input
            type="number"
            value={spread}
            onChange={(e) => setSpread(e.target.value)}
            className="w-full rounded-lg bg-slate-700 border border-slate-600 px-3 py-2 text-white"
          />
        </label>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-slate-400 border-b border-slate-700">
              <th className="py-2 pr-3 font-medium">Crediting Method</th>
              <th className="py-2 pr-3 font-medium">Simple Rule</th>
              <th className="py-2 font-medium">Credited</th>
            </tr>
          </thead>
          <tbody className="text-slate-200">
            <tr className="border-b border-slate-700/60">
              <td className="py-2 pr-3">Full Index (baseline)</td>
              <td className="py-2 pr-3">return</td>
              <td className="py-2">{percent(full)}</td>
            </tr>
            <tr className="border-b border-slate-700/60">
              <td className="py-2 pr-3">Cap</td>
              <td className="py-2 pr-3">max(0, min(return, cap))</td>
              <td className="py-2">{percent(capMethod)}</td>
            </tr>
            <tr className="border-b border-slate-700/60">
              <td className="py-2 pr-3">Participation</td>
              <td className="py-2 pr-3">max(0, return × participation)</td>
              <td className="py-2">{percent(participationMethod)}</td>
            </tr>
            <tr>
              <td className="py-2 pr-3">Spread</td>
              <td className="py-2 pr-3">max(0, return − spread)</td>
              <td className="py-2">{percent(spreadMethod)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-xs text-slate-400">
        Tip: try a negative index return (e.g., `-12`). Notice the floor effect in the simplified rules.
      </div>
    </div>
  );
}

function ProductSelectorWizard({ onSelect }) {
  const [incomeSoon, setIncomeSoon] = useState('unknown');
  const [wantsGuarantee, setWantsGuarantee] = useState('unknown');
  const [needsPrincipalProtection, setNeedsPrincipalProtection] = useState('unknown');
  const [acceptLosses, setAcceptLosses] = useState('unknown');

  const result = useMemo(() => {
    // This is a taxonomy tool, not advice. Keep outputs high level.
    const notes = [];

    if (incomeSoon === 'yes') {
      notes.push({ pick: 'SPIA', why: 'Income needed now; immediate lifetime income is the core pattern.' });
    }

    if (incomeSoon === 'no' && wantsGuarantee === 'yes') {
      notes.push({ pick: 'DIA', why: 'Income later; DIA is the clean “longevity insurance” form.' });
    }

    if (incomeSoon === 'no' && needsPrincipalProtection === 'yes') {
      notes.push({ pick: 'MYGA / Fixed / FIA', why: 'Deferred accumulation with principal protection; choose based on liquidity and crediting preference.' });
    }

    if (incomeSoon === 'no' && needsPrincipalProtection === 'no' && acceptLosses === 'yes') {
      notes.push({ pick: 'VA / RILA', why: 'Client accepts market risk (full or defined); these are securities with different disclosure rules.' });
    }

    if (incomeSoon === 'no' && needsPrincipalProtection === 'no' && acceptLosses === 'no') {
      notes.push({ pick: 'FIA', why: 'Client wants downside protection in contract value; upside will be limited by the crediting method.' });
    }

    if (notes.length === 0) {
      return { summary: 'Answer a few prompts to see the taxonomy mapping.', picks: [] };
    }

    return { summary: 'Likely categories to explore (taxonomy, not advice):', picks: notes };
  }, [incomeSoon, wantsGuarantee, needsPrincipalProtection, acceptLosses]);

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <h3 className="text-white font-semibold mb-2">Simulator: Product Selector (Taxonomy)</h3>
      <p className="text-slate-400 text-sm mb-5">
        This wizard is for classification and mental models. It does not determine suitability or recommend a carrier.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <div className="text-sm text-slate-300 mb-2">Do you need income within ~12 months?</div>
          <div className="flex gap-2">
            {['yes', 'no', 'unknown'].map((v) => (
              <button
                key={v}
                onClick={() => setIncomeSoon(v)}
                className={`px-3 py-2 rounded-lg text-sm border ${
                  incomeSoon === v ? 'bg-blue-600 text-white border-blue-500' : 'bg-slate-700 text-slate-300 border-slate-600 hover:bg-slate-600'
                }`}
              >
                {v.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm text-slate-300 mb-2">Is a lifetime guarantee a primary goal?</div>
          <div className="flex gap-2">
            {['yes', 'no', 'unknown'].map((v) => (
              <button
                key={v}
                onClick={() => setWantsGuarantee(v)}
                className={`px-3 py-2 rounded-lg text-sm border ${
                  wantsGuarantee === v ? 'bg-blue-600 text-white border-blue-500' : 'bg-slate-700 text-slate-300 border-slate-600 hover:bg-slate-600'
                }`}
              >
                {v.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm text-slate-300 mb-2">Must the contract value never go down due to markets?</div>
          <div className="flex gap-2">
            {['yes', 'no', 'unknown'].map((v) => (
              <button
                key={v}
                onClick={() => setNeedsPrincipalProtection(v)}
                className={`px-3 py-2 rounded-lg text-sm border ${
                  needsPrincipalProtection === v ? 'bg-blue-600 text-white border-blue-500' : 'bg-slate-700 text-slate-300 border-slate-600 hover:bg-slate-600'
                }`}
              >
                {v.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm text-slate-300 mb-2">Can the client accept losses for more upside?</div>
          <div className="flex gap-2">
            {['yes', 'no', 'unknown'].map((v) => (
              <button
                key={v}
                onClick={() => setAcceptLosses(v)}
                className={`px-3 py-2 rounded-lg text-sm border ${
                  acceptLosses === v ? 'bg-blue-600 text-white border-blue-500' : 'bg-slate-700 text-slate-300 border-slate-600 hover:bg-slate-600'
                }`}
              >
                {v.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-slate-900/40 border border-slate-700 p-4">
        <div className="text-slate-200 font-medium mb-2">{result.summary}</div>
        {result.picks.length === 0 ? (
          <div className="text-slate-400 text-sm">Try: income within 12 months = YES, or principal protection = YES.</div>
        ) : (
          <ul className="space-y-2">
            {result.picks.map((p, idx) => (
              <li key={idx} className="text-sm text-slate-300 flex items-start justify-between gap-3">
                <span>
                  <span className="text-white font-semibold">{p.pick}</span>
                  <span className="text-slate-400"> — {p.why}</span>
                </span>
                <button
                  onClick={() => onSelect?.(p.pick)}
                  className="px-2 py-1 text-xs rounded-md bg-slate-700 text-slate-200 border border-slate-600 hover:bg-slate-600"
                >
                  Highlight
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function ProductMap({ selectedId, onSelect }) {
  const selected = PRODUCT_CARDS.find((p) => p.id === selectedId) || PRODUCT_CARDS[0];

  const highlighted = useMemo(() => {
    if (!selectedId) return null;
    const id = selectedId.toLowerCase();
    return PRODUCT_CARDS.find((p) => p.id === id) || null;
  }, [selectedId]);

  const active = highlighted || selected;

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
        <div className="text-white font-semibold mb-1">Product Map</div>
        <div className="text-slate-400 text-sm mb-3">A mental model: income timing vs market exposure.</div>

        <svg viewBox="0 0 640 360" className="w-full h-auto rounded-lg bg-slate-900/40 border border-slate-700">
          <defs>
            <linearGradient id="axis" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>

          <line x1="70" y1="300" x2="610" y2="300" stroke="url(#axis)" strokeWidth="2" />
          <line x1="70" y1="55" x2="70" y2="300" stroke="url(#axis)" strokeWidth="2" />
          <rect x="70" y="55" width="540" height="70" fill="#0f172a" opacity="0.22" />
          <rect x="70" y="185" width="540" height="115" fill="#0f172a" opacity="0.08" />
          <line x1="70" y1="170" x2="610" y2="170" stroke="#334155" strokeDasharray="5 5" strokeWidth="1.5" />

          <text x="340" y="340" textAnchor="middle" fill="#94a3b8" fontSize="12">
            Market Exposure (none → full)
          </text>
          <text x="18" y="180" textAnchor="middle" fill="#94a3b8" fontSize="12" transform="rotate(-90 18 180)">
            Timing (top = immediate, bottom = deferred)
          </text>
          <text x="82" y="76" textAnchor="start" fill="#94a3b8" fontSize="11">
            Immediate
          </text>
          <text x="82" y="202" textAnchor="start" fill="#94a3b8" fontSize="11">
            Deferred
          </text>
          <path d="M 52 70 L 52 290" stroke="#64748b" strokeWidth="2" />
          <path d="M 52 290 L 47 282" stroke="#64748b" strokeWidth="2" />
          <path d="M 52 290 L 57 282" stroke="#64748b" strokeWidth="2" />

          {PRODUCT_CARDS.map((p) => {
            const isActive = p.id === active.id;
            return (
              <g key={p.id} onClick={() => onSelect(p.id)} style={{ cursor: 'pointer' }}>
                <circle cx={p.x} cy={p.y} r={isActive ? 12 : 9} fill={isActive ? '#3b82f6' : '#64748b'} />
                <circle cx={p.x} cy={p.y} r={isActive ? 18 : 15} fill="transparent" stroke={isActive ? '#60a5fa' : '#334155'} />
                <text x={p.x + 16} y={p.y + 4} fill={isActive ? '#e2e8f0' : '#94a3b8'} fontSize="12">
                  {p.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
        <div className="flex items-baseline justify-between gap-3 mb-3">
          <div>
            <div className="text-white font-semibold text-lg">{active.label}</div>
            <div className="text-slate-400 text-sm">{active.fullName}</div>
          </div>
          <div className="text-xs text-slate-400">
            Timing: <span className="text-slate-200">{active.timing}</span>
            <span className="mx-2 text-slate-600">|</span>
            Exposure: <span className="text-slate-200">{active.marketExposure}</span>
          </div>
        </div>

        <div className="mb-4">
          <ProductInfoGraphic product={active} />
        </div>

        <div className="rounded-lg bg-slate-900/40 border border-slate-700 p-4 mb-4">
          <div className="text-slate-300 text-sm mb-1">Mental Model</div>
          <div className="text-white font-semibold">{active.mentalModel}</div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <div className="text-slate-300 text-sm font-medium mb-2">Best For</div>
            <ul className="space-y-1 text-sm text-slate-300">
              {active.bestFor.map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-slate-300 text-sm font-medium mb-2">Watch Outs</div>
            <ul className="space-y-1 text-sm text-slate-300">
              {active.watchOuts.map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="text-amber-400">•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-5 text-xs text-slate-400">
          This map is taxonomy only. Suitability depends on client cash flow, liquidity plan, tax status, and product-specific terms.
        </div>
      </div>
    </div>
  );
}

export function ProductTaxonomyTools() {
  const [selected, setSelected] = useState('spia');

  return (
    <div className="space-y-4">
      <ProductMap selectedId={selected} onSelect={setSelected} />
      <ProductSelectorWizard
        onSelect={(pick) => {
          const normalized = String(pick || '').toLowerCase();
          const match = PRODUCT_CARDS.find((p) => p.label.toLowerCase() === normalized || p.id === normalized);
          if (match) setSelected(match.id);
        }}
      />
      <CreditingMiniLab />
    </div>
  );
}
