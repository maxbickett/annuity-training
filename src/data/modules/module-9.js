export const module9 = {
  id: 9,
  track: 3,
  title: 'Riders & Guarantees',
  description: 'Living benefits, death benefits, and rider economics',
  duration: '50 min',
  difficulty: 3,
  objectives: [
    'Understand all major rider types and their mechanics',
    'Calculate rider costs and break-even points',
    'Evaluate when riders add value vs. when they\'re unnecessary',
    'Compare riders across carriers'
  ],
  content: `
    <h2>Riders: Paying for Guarantees</h2>
    <p>Riders are optional add-ons that provide additional guarantees. They cost money—typically 0.5% to 1.5% annually. Understanding when they're worth it (and when they're not) is essential.</p>

    <h3>Living Benefit Riders</h3>
    <p>Living benefits protect you while you're alive. They've become the main reason many people buy VAs and FIAs.</p>

    <h4>GLWB - Guaranteed Lifetime Withdrawal Benefit</h4>
    <p><strong>How it works:</strong></p>
    <ul>
      <li><strong>Benefit Base:</strong> Starting value (usually = premium)</li>
      <li><strong>Roll-up:</strong> Benefit base may grow at guaranteed rate (e.g., 5-7% simple/compound) before withdrawals</li>
      <li><strong>Step-up:</strong> Benefit base may lock in gains periodically</li>
      <li><strong>Withdrawal Rate:</strong> Percentage of benefit base you can withdraw for life (4-6% depending on age)</li>
    </ul>

    <p><strong>Example:</strong></p>
    <ul>
      <li>$400,000 premium at age 60</li>
      <li>7% simple roll-up for 10 years</li>
      <li>Benefit base at 70: $400K + ($400K × 7% × 10) = $680,000</li>
      <li>5.5% withdrawal rate at 70 = $37,400/year guaranteed for life</li>
    </ul>

    <p><strong>The guarantee:</strong> Even if account value crashes to $0, you get $37,400/year until death.</p>

    <h4>GMWB - Guaranteed Minimum Withdrawal Benefit</h4>
    <p>Similar to GLWB but withdrawals may NOT be for life—just until benefit base is exhausted.</p>
    <ul>
      <li>Less common now</li>
      <li>Generally inferior to GLWB</li>
    </ul>

    <h4>GMIB - Guaranteed Minimum Income Benefit</h4>
    <p>Guarantees future annuitization rate (not withdrawal rate).</p>
    <ul>
      <li>Must annuitize to access guarantee</li>
      <li>Less flexibility than GLWB</li>
      <li>Complex—often misunderstood</li>
    </ul>

    <h4>GMAB - Guaranteed Minimum Accumulation Benefit</h4>
    <p>Guarantees minimum account value after waiting period.</p>
    <ul>
      <li>Example: After 10 years, account is at least equal to premium</li>
      <li>Protection against prolonged bear market</li>
      <li>Less popular today</li>
    </ul>

    <h3>Death Benefit Riders</h3>

    <h4>Standard Death Benefit</h4>
    <p>Included in most VAs at no extra cost:</p>
    <ul>
      <li>Greater of account value or premium (minus withdrawals)</li>
      <li>Guarantees heirs don't get less than you put in</li>
    </ul>

    <h4>Enhanced Death Benefit</h4>
    <p>For additional cost (0.25-0.75%):</p>
    <ul>
      <li>Ratchet: Locks in gains periodically (e.g., annual high-water mark)</li>
      <li>Roll-up: Grows at guaranteed rate regardless of market</li>
      <li>Return of premium plus: Premium plus some growth</li>
    </ul>

    <h3>Rider Economics: When They Make Sense</h3>

    <h4>GLWB Break-Even Analysis</h4>
    <p><strong>Example:</strong></p>
    <ul>
      <li>Rider cost: 1% annually</li>
      <li>$500,000 account</li>
      <li>Annual rider cost: $5,000</li>
      <li>After 20 years: $100,000 paid in rider fees</li>
    </ul>
    <p>The guarantee is worth $100K+ only if you NEED it—i.e., if markets crash and you'd otherwise run out of money.</p>

    <p><strong>When GLWB pays off:</strong></p>
    <ul>
      <li>Prolonged bear market in early withdrawal years</li>
      <li>Client lives significantly longer than expected</li>
      <li>Combination of bad markets + long life</li>
    </ul>

    <p><strong>When GLWB doesn't pay off:</strong></p>
    <ul>
      <li>Markets do reasonably well</li>
      <li>Client dies before depleting assets</li>
      <li>Client never takes withdrawals</li>
    </ul>

    <h3>Common Rider Mistakes</h3>

    <h4>1. Confusing Benefit Base with Account Value</h4>
    <p>The benefit base is NOT money you can access—it's just the calculation basis for your guaranteed withdrawal.</p>
    <ul>
      <li>Benefit base: $700,000 (after roll-ups)</li>
      <li>Account value: $450,000 (what you can actually withdraw)</li>
      <li>If you surrender, you get $450,000, not $700,000</li>
    </ul>

    <h4>2. Over-withdrawing</h4>
    <p>Exceeding the guaranteed withdrawal amount can reduce or eliminate the guarantee.</p>
    <ul>
      <li>Guaranteed withdrawal: $25,000/year</li>
      <li>Client takes $40,000 → Guarantee may be proportionally reduced</li>
      <li>Read the contract carefully</li>
    </ul>

    <h4>3. Not Understanding Step-Ups</h4>
    <p>Step-ups lock in gains but may reset the withdrawal rate waiting period.</p>

    <h3>Comparing Riders Across Carriers</h3>
    <p>Not all GLWBs are equal. Compare:</p>
    <ul>
      <li>Roll-up rate and duration</li>
      <li>Withdrawal rates by age</li>
      <li>Step-up provisions</li>
      <li>Excess withdrawal rules</li>
      <li>Spousal continuation</li>
      <li>Total cost (rider fee + M&E + fund expenses)</li>
    </ul>

    <div class="callout">
      <strong>Key Question:</strong> "Is the client buying this for the guarantee, or for investment returns?" If for the guarantee, the rider makes sense. If for returns, they probably shouldn't be in a VA at all.
    </div>
  `,
  keyTakeaways: [
    'GLWB is the most important rider—guarantees lifetime income regardless of account value',
    'Benefit base ≠ account value; clients often confuse these',
    'Riders cost 0.5-1.5% annually—must justify with genuine need for guarantees',
    'Rider pays off in bad markets + long life; doesn\'t pay off in good markets or early death',
    'Exceeding guaranteed withdrawal amount can void or reduce the guarantee',
    'Always compare rider terms across carriers—significant differences exist'
  ]
};
