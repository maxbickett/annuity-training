export const module6 = {
  id: 6,
  track: 2,
  title: 'FIA Deep Dive',
  description: 'Fixed Indexed Annuities - upside potential with downside protection',
  duration: '55 min',
  difficulty: 3,
  objectives: [
    'Understand index crediting mechanics (caps, spreads, participation rates)',
    'Calculate realistic FIA returns under various scenarios',
    'Explain why FIAs don\'t match index returns',
    'Evaluate FIA suitability for different clients'
  ],
  content: `
    <h2>FIA: The "Have Your Cake and Eat It Too" Illusion</h2>
    <p>Fixed Indexed Annuities promise an appealing story: market upside with zero downside. The reality is more nuanced. Understanding how FIAs actually work is crucial for setting appropriate expectations.</p>

    <h3>The Basic Proposition</h3>
    <ul>
      <li><strong>Principal protection:</strong> Your account value can never go below your premium (minus withdrawals)</li>
      <li><strong>Index-linked growth:</strong> Interest is credited based on index performance (S&P 500 most common)</li>
      <li><strong>No direct investment:</strong> You don't own stocks—the carrier uses options to create the return pattern</li>
    </ul>

    <h3>How Index Crediting REALLY Works</h3>
    <p>Insurance companies don't give you full index returns. They use several mechanisms to limit upside:</p>

    <h4>1. Cap Rate</h4>
    <p>Maximum return you can earn in a crediting period.</p>
    <ul>
      <li>Example: 10% cap, S&P up 25% → You get 10%</li>
      <li>S&P up 8% → You get 8%</li>
      <li>S&P down 15% → You get 0%</li>
    </ul>

    <h4>2. Participation Rate</h4>
    <p>Percentage of index gain you receive.</p>
    <ul>
      <li>Example: 50% participation, S&P up 20% → You get 10%</li>
      <li>Often combined with caps</li>
    </ul>

    <h4>3. Spread (Margin)</h4>
    <p>Amount subtracted from index return before crediting.</p>
    <ul>
      <li>Example: 3% spread, S&P up 12% → You get 9%</li>
      <li>S&P up 2% → You get 0% (can't go negative)</li>
    </ul>

    <h3>Crediting Strategies (Indexes)</h3>
    <p>Modern FIAs offer many index options beyond S&P 500:</p>
    <ul>
      <li><strong>S&P 500 (point-to-point):</strong> Most common, compares start and end values</li>
      <li><strong>Monthly sum/averaging:</strong> Averages monthly returns (usually lower but more consistent)</li>
      <li><strong>Volatility-controlled indexes:</strong> Custom indexes that reduce volatility (often better illustrated rates)</li>
      <li><strong>Hybrid indexes:</strong> Mix of equities and fixed income</li>
    </ul>

    <div class="callout callout-warning">
      <strong>Warning:</strong> Illustrated rates on volatility-controlled and hybrid indexes are often higher than S&P 500 options. But these are newer indexes with limited track records. Be skeptical of backtested performance.
    </div>

    <h3>Realistic Return Expectations</h3>
    <p>Based on historical analysis of actual FIA performance:</p>
    <table>
      <tr><th>Timeframe</th><th>Realistic FIA Returns</th><th>S&P 500 Returns</th></tr>
      <tr><td>Bull markets</td><td>4-7%</td><td>15-25%</td></tr>
      <tr><td>Flat/choppy markets</td><td>3-5%</td><td>0-5%</td></tr>
      <tr><td>Bear markets</td><td>0-2%</td><td>-20% to -40%</td></tr>
      <tr><td>Long-term average</td><td>4-6%</td><td>9-10%</td></tr>
    </table>

    <p><strong>Key insight:</strong> FIAs typically capture 30-50% of market upside over time. The trade-off is you never experience the downside.</p>

    <h3>The Hidden Value: Behavioral Protection</h3>
    <p>Here's what the math doesn't capture: FIA owners don't panic sell during crashes.</p>
    <ul>
      <li>Average investor returns lag fund returns by 2-4% annually due to behavioral mistakes</li>
      <li>FIA prevents the "sell low, buy high" cycle</li>
      <li>Psychological peace of mind has real value</li>
    </ul>
    <p>For certain clients, the 4-6% FIA return may actually BEAT what they'd earn in the market after accounting for their behavior.</p>

    <h3>Rate Changes and Renewals</h3>
    <p><strong>Critical point:</strong> Caps, participation rates, and spreads can change annually (though there's usually a guaranteed minimum).</p>
    <ul>
      <li>Low interest rate environments → Lower caps</li>
      <li>High volatility → Potentially lower caps</li>
      <li>Carrier profitability concerns → Rate reductions</li>
    </ul>
    <p>What's illustrated at sale may not persist. Check the guaranteed minimums in the contract.</p>

    <h3>Living Benefit Riders on FIAs</h3>
    <p>Many FIAs offer GLWB (Guaranteed Lifetime Withdrawal Benefit) riders:</p>
    <ul>
      <li>Provide guaranteed income regardless of account value</li>
      <li>Cost: 0.75-1.25% annually</li>
      <li>Turn FIA into a hybrid accumulation/income product</li>
    </ul>
    <p>This can make sense for clients who want growth potential AND guaranteed income later.</p>

    <h3>When FIAs Make Sense</h3>
    <ul>
      <li>Client cannot stomach any market losses</li>
      <li>Client wants more growth potential than MYGA/CDs</li>
      <li>Client is a behavioral investor (would panic sell)</li>
      <li>Client has realistic expectations (4-6%, not index returns)</li>
      <li>Long time horizon (5-10+ years)</li>
    </ul>

    <h3>When FIAs Don't Make Sense</h3>
    <ul>
      <li>Client expects full market returns</li>
      <li>Client needs liquidity</li>
      <li>Client is a disciplined investor who can stay the course</li>
      <li>Client is chasing the highest illustrated rate (usually disappointed)</li>
      <li>Client doesn't understand the product (suitability issue)</li>
    </ul>

    <div class="callout">
      <strong>The Right Framing:</strong> An FIA is NOT a stock market investment with protection. It's a conservative savings vehicle with potential bonus interest linked to market performance. Set expectations accordingly.
    </div>
  `,
  keyTakeaways: [
    'FIAs use caps, participation rates, and spreads to limit upside—you don\'t get full index returns',
    'Realistic long-term returns: 4-6%, capturing 30-50% of market upside',
    'Principal is protected—account value can\'t go below premium',
    'Rates can change annually; check guaranteed minimums',
    'Behavioral protection may be the real value for panic-prone investors',
    'Not for clients expecting market returns or needing liquidity'
  ]
};
