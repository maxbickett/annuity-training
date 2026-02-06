export const module4 = {
  id: 4,
  track: 2,
  title: 'DIA Deep Dive',
  description: 'Deferred Income Annuities - longevity insurance mechanics',
  duration: '40 min',
  difficulty: 2,
  objectives: [
    'Understand how DIAs differ from SPIAs',
    'Calculate the leverage effect of deferral',
    'Explain QLAC rules and benefits',
    'Identify ideal DIA candidates'
  ],
  content: `
    <h2>DIA: Insurance Against Living Too Long</h2>
    <p>A Deferred Income Annuity is like a SPIA with a delay. You pay now, but income starts later—often 10, 15, or 20 years in the future. This makes them powerful tools for late-retirement planning.</p>

    <h3>The Power of Deferral</h3>
    <p>The longer you wait for payments to start, the higher they'll be. This is due to:</p>
    <ol>
      <li><strong>Interest accumulation:</strong> Your premium grows during the deferral period</li>
      <li><strong>Mortality credits:</strong> Some buyers will die before payments start, subsidizing survivors</li>
    </ol>

    <h4>The Numbers Are Dramatic</h4>
    <p><strong>Example:</strong> $100,000 premium at age 60</p>
    <table>
      <tr><th>Income Start Age</th><th>Monthly Income</th><th>Annual Payout Rate</th></tr>
      <tr><td>65 (5-year deferral)</td><td>$650</td><td>7.8%</td></tr>
      <tr><td>70 (10-year deferral)</td><td>$950</td><td>11.4%</td></tr>
      <tr><td>75 (15-year deferral)</td><td>$1,400</td><td>16.8%</td></tr>
      <tr><td>80 (20-year deferral)</td><td>$2,100</td><td>25.2%</td></tr>
      <tr><td>85 (25-year deferral)</td><td>$3,400</td><td>40.8%</td></tr>
    </table>
    <p><em>Rates are illustrative and vary by carrier, gender, and market conditions.</em></p>

    <p>Notice how the payout rate at 85 is over 40%! This is mortality credits at work—many people who bought at 60 won't make it to 85, and their premiums subsidize those who do.</p>

    <h3>Strategic Use Cases</h3>

    <h4>1. The "Pension Gap" Strategy</h4>
    <p>Client plans to retire at 60 but Social Security doesn't start until 67-70. Buy a DIA at 55 with income starting at 60 to bridge the gap.</p>

    <h4>2. The "Late Life Insurance" Strategy</h4>
    <p>Client is 65, worried about money lasting past 85. Buy a DIA with income starting at 85. If they live that long, payments kick in when they need them most.</p>
    <p>Cost: Relatively small premium can generate substantial late-life income.</p>

    <h4>3. The "RMD Reduction" Strategy (QLAC)</h4>
    <p>A Qualified Longevity Annuity Contract (QLAC) is a DIA purchased inside a traditional IRA or 401(k). Special rules apply:</p>
    <ul>
      <li>Up to $200,000 (increased from $145,000 in 2023) can be placed in a QLAC</li>
      <li>QLAC amount is excluded from RMD calculations</li>
      <li>Income must start by age 85</li>
      <li>Reduces RMDs, potentially keeping client in lower tax brackets</li>
    </ul>

    <h3>DIA Options and Trade-offs</h3>

    <h4>Return of Premium (ROP) Rider</h4>
    <ul>
      <li>If you die before income starts, beneficiaries get premium back</li>
      <li>Eliminates the "die early, lose everything" risk</li>
      <li>Cost: 10-20% lower income payments</li>
      <li>Consideration: Reduces mortality credit benefit, making DIA less efficient</li>
    </ul>

    <h4>Cash Refund at Death</h4>
    <ul>
      <li>If you die after income starts but before receiving all premium back, heirs get the rest</li>
      <li>Similar to SPIA cash refund option</li>
    </ul>

    <h4>Inflation Adjustment</h4>
    <ul>
      <li>Payments increase annually (fixed % or CPI-linked)</li>
      <li>Trade-off: Starting payment significantly lower (often 25-40% less)</li>
      <li>May make sense for very long deferral periods</li>
    </ul>

    <h3>When DIAs Work Best</h3>
    <ul>
      <li>Client has longevity in their family history</li>
      <li>Client wants to guarantee late-retirement income without giving up all flexibility today</li>
      <li>Client has other assets for early retirement</li>
      <li>Client is comfortable with the possibility of not receiving benefits (dies before start date)</li>
    </ul>

    <h3>When DIAs Don't Make Sense</h3>
    <ul>
      <li>Client has health issues that reduce life expectancy</li>
      <li>Client has strong bequest motive and can't accept possibility of zero benefit</li>
      <li>Client needs guaranteed income NOW (use SPIA instead)</li>
      <li>Client can't emotionally handle "losing the bet" if they die early</li>
    </ul>

    <h3>DIA vs. SPIA: Which to Choose?</h3>
    <table>
      <tr><th>Factor</th><th>Choose DIA</th><th>Choose SPIA</th></tr>
      <tr><td>Need income now</td><td></td><td>✓</td></tr>
      <tr><td>Planning for late retirement</td><td>✓</td><td></td></tr>
      <tr><td>Maximizing late-life payout</td><td>✓</td><td></td></tr>
      <tr><td>Simplicity</td><td></td><td>✓</td></tr>
      <tr><td>RMD reduction (QLAC)</td><td>✓</td><td></td></tr>
    </table>

    <div class="callout">
      <strong>Key Insight:</strong> DIAs are "longevity insurance" in the truest sense. They protect against the specific risk of living longer than your assets can support, at the lowest possible cost.
    </div>
  `,
  keyTakeaways: [
    'DIAs provide dramatically higher payouts due to longer mortality credit accumulation',
    'Deferring to age 85 can yield 40%+ annual payout rates',
    'QLACs allow IRA/401k funds to be used, reducing RMDs',
    'ROP riders reduce "lose it all" risk but also reduce efficiency',
    'Best for clients with longevity in their family and other assets for early retirement',
    'Client must be emotionally comfortable with possibility of dying before payments start'
  ]
};
