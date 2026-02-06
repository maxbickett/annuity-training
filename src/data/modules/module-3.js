export const module3 = {
  id: 3,
  track: 2,
  title: 'SPIA Deep Dive',
  description: 'Single Premium Immediate Annuities - mechanics, pricing, and use cases',
  duration: '50 min',
  difficulty: 2,
  objectives: [
    'Understand SPIA mechanics and payout calculations',
    'Explain how payout options affect income and inheritance',
    'Identify ideal SPIA candidates and red flags',
    'Compare SPIA quotes and evaluate carrier strength'
  ],
  content: `
    <h2>SPIA: The Purest Form of Annuity</h2>
    <p>The Single Premium Immediate Annuity is the simplest, most straightforward annuity. Understanding SPIAs deeply gives you a foundation for understanding all other products.</p>

    <h3>How SPIA Pricing Works</h3>
    <p>Insurance companies calculate SPIA payouts using three factors:</p>
    <ol>
      <li><strong>Mortality assumptions:</strong> How long they expect you to live (based on actuarial tables)</li>
      <li><strong>Interest rate assumptions:</strong> What they expect to earn on the premium</li>
      <li><strong>Profit/expense loading:</strong> Their margin</li>
    </ol>

    <h4>Current Rate Environment</h4>
    <p>As of 2024, typical SPIA payout rates for a 65-year-old:</p>
    <table>
      <tr><th>Age</th><th>Male</th><th>Female</th><th>Joint (both 65)</th></tr>
      <tr><td>65</td><td>6.8-7.5%</td><td>6.3-7.0%</td><td>5.8-6.4%</td></tr>
      <tr><td>70</td><td>7.5-8.3%</td><td>7.0-7.8%</td><td>6.5-7.2%</td></tr>
      <tr><td>75</td><td>8.5-9.5%</td><td>8.0-9.0%</td><td>7.3-8.2%</td></tr>
    </table>
    <p><em>These are approximate ranges and vary by carrier and market conditions.</em></p>

    <h3>Payout Options Explained</h3>

    <h4>Life Only (Straight Life)</h4>
    <ul>
      <li>Highest payout rate</li>
      <li>Payments stop when you die—nothing to heirs</li>
      <li>Best for: Single clients with no bequest motive, good health</li>
      <li>Risk: Die early, "lose" remaining premium</li>
    </ul>

    <h4>Life with Period Certain (10, 15, 20 years)</h4>
    <ul>
      <li>Payments for life OR the certain period, whichever is longer</li>
      <li>Example: Life with 20-year certain—if you die in year 5, heirs get 15 more years of payments</li>
      <li>Trade-off: Lower payout than life only (typically 5-15% less)</li>
      <li>Best for: Clients wanting some protection against early death</li>
    </ul>

    <h4>Cash Refund</h4>
    <ul>
      <li>If you die before receiving your premium back in payments, heirs get the difference</li>
      <li>Example: $200K premium, received $150K before death → heirs get $50K</li>
      <li>Trade-off: Lower payout than period certain</li>
      <li>Best for: Clients who can't stomach "losing" money to the insurance company</li>
    </ul>

    <h4>Joint and Survivor</h4>
    <ul>
      <li>Payments continue until BOTH annuitants die</li>
      <li>Options: 100% to survivor, 75%, 50%</li>
      <li>Significant payout reduction (20-35% less than single life)</li>
      <li>Best for: Married couples who need income security for survivor</li>
    </ul>

    <h3>The Real Math: Is SPIA Worth It?</h3>

    <h4>Breakeven Analysis</h4>
    <p><strong>Example:</strong> $300,000 premium, age 65 male, life only</p>
    <ul>
      <li>Monthly payment: $2,000 ($24,000/year)</li>
      <li>Payout rate: 8%</li>
      <li>Breakeven: $300,000 ÷ $24,000 = 12.5 years (age 77.5)</li>
    </ul>
    <p>If he lives past 77.5, he "wins." If he dies earlier, the insurance company "wins."</p>

    <h4>But This Misses the Point</h4>
    <p>The breakeven analysis is intellectually satisfying but practically irrelevant. The real question isn't "will I beat the insurance company?" It's "will I run out of money?"</p>
    <p>Compare:</p>
    <ul>
      <li><strong>Self-managed:</strong> $300K at 4% = $12,000/year (runs out at 25 years with real returns)</li>
      <li><strong>SPIA:</strong> $24,000/year guaranteed FOREVER</li>
    </ul>
    <p>You're paying for the guarantee, not trying to beat the house.</p>

    <h3>When SPIAs Excel</h3>
    <ul>
      <li><strong>Covering essential expenses:</strong> Social Security + pension + SPIA = baseline covered</li>
      <li><strong>Reducing sequence of returns risk:</strong> Guaranteed income means less portfolio pressure early in retirement</li>
      <li><strong>Simplifying retirement:</strong> One less thing to manage, one less thing to worry about</li>
      <li><strong>Longevity insurance:</strong> Can't outlive it, period</li>
    </ul>

    <h3>When SPIAs Don't Make Sense</h3>
    <ul>
      <li><strong>Client has serious health issues:</strong> Won't live long enough to benefit</li>
      <li><strong>Client needs liquidity:</strong> Principal is irrevocably gone</li>
      <li><strong>Client has strong bequest motive:</strong> Most SPIA options reduce inheritance significantly</li>
      <li><strong>Client already has substantial guaranteed income:</strong> Social Security + pension may be enough</li>
      <li><strong>Very low interest rate environments:</strong> Payout rates may not be competitive</li>
    </ul>

    <h3>Shopping for SPIAs</h3>

    <h4>Rate Comparison</h4>
    <p>SPIA rates vary significantly by carrier. Always get quotes from 5+ carriers. Use aggregators like:</p>
    <ul>
      <li>ImmediateAnnuities.com</li>
      <li>Blueprint Income</li>
      <li>CANNEX (for advisors)</li>
    </ul>

    <h4>Carrier Strength Matters</h4>
    <p>You're trusting this company to pay you for potentially 30+ years. Check:</p>
    <ul>
      <li>AM Best rating (A or better preferred)</li>
      <li>S&P and Moody's ratings</li>
      <li>Company size and history</li>
      <li>State guaranty association coverage limits</li>
    </ul>

    <h4>Laddering Strategy</h4>
    <p>Don't put everything in one SPIA. Consider:</p>
    <ul>
      <li>Splitting across 2-3 carriers (diversification)</li>
      <li>Buying over time (interest rate diversification)</li>
      <li>Staying under state guaranty limits per carrier</li>
    </ul>

    <div class="callout callout-warning">
      <strong>Critical Point:</strong> SPIAs are irrevocable. Once you buy, you cannot change your mind. Make sure the client fully understands this before purchasing. Document, document, document.
    </div>
  `,
  keyTakeaways: [
    'SPIA pricing is based on mortality, interest rates, and carrier margins',
    'Payout options trade income for inheritance protection—life only is highest',
    'Breakeven analysis misses the point—you\'re buying a guarantee, not trying to beat the house',
    'Best for covering essential expenses and clients with longevity in their family',
    'Always compare 5+ carriers and check financial strength ratings',
    'SPIAs are irrevocable—ensure client fully understands before purchase'
  ]
};
