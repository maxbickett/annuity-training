export const module7 = {
  id: 7,
  track: 2,
  title: 'Variable Annuity Deep Dive',
  description: 'Full market exposure with optional guarantees',
  duration: '60 min',
  difficulty: 3,
  objectives: [
    'Understand VA fee structures and their impact',
    'Explain living benefit riders (GLWB, GMIB, GMAB)',
    'Calculate fee drag over time',
    'Determine when VA features justify the costs'
  ],
  content: `
    <h2>Variable Annuities: When Guarantees Justify the Cost</h2>
    <p>Variable annuities get a bad reputation—often deservedly. High fees, complexity, and aggressive sales tactics have created many unhappy clients. But there are legitimate use cases. Understanding both the pitfalls and the value is essential.</p>

    <h3>How VAs Work</h3>
    <ul>
      <li><strong>Subaccounts:</strong> Investment options similar to mutual funds</li>
      <li><strong>Full market exposure:</strong> Gains AND losses pass through to you</li>
      <li><strong>Tax deferral:</strong> No taxes until withdrawal</li>
      <li><strong>Death benefit:</strong> Minimum guarantee to beneficiaries (usually premium)</li>
      <li><strong>Optional riders:</strong> Living benefits for additional cost</li>
    </ul>

    <h3>The Fee Stack: Why VAs Are Expensive</h3>
    <table>
      <tr><th>Fee Type</th><th>Purpose</th><th>Typical Range</th></tr>
      <tr><td>M&E (Mortality & Expense)</td><td>Death benefit, profit margin</td><td>1.0-1.4%</td></tr>
      <tr><td>Administrative</td><td>Record keeping, statements</td><td>0.10-0.30%</td></tr>
      <tr><td>Subaccount expenses</td><td>Fund management</td><td>0.50-1.00%</td></tr>
      <tr><td>Living benefit rider</td><td>GLWB, GMIB, etc.</td><td>0.75-1.50%</td></tr>
      <tr><th>TOTAL</th><th></th><th>2.35-4.20%</th></tr>
    </table>

    <h3>Fee Drag: The Real Cost</h3>
    <p><strong>Example: $500,000 investment, 7% gross returns, 20 years</strong></p>
    <table>
      <tr><th>Scenario</th><th>Annual Fee</th><th>Value at 20 Years</th><th>Lost to Fees</th></tr>
      <tr><td>Low-cost index fund</td><td>0.10%</td><td>$1,897,000</td><td>$37,000</td></tr>
      <tr><td>Typical mutual fund</td><td>1.00%</td><td>$1,612,000</td><td>$322,000</td></tr>
      <tr><td>VA without rider</td><td>2.00%</td><td>$1,349,000</td><td>$585,000</td></tr>
      <tr><td>VA with GLWB rider</td><td>3.00%</td><td>$1,127,000</td><td>$807,000</td></tr>
    </table>
    <p><strong>$807,000 in fees</strong> over 20 years. This is why VAs must provide substantial value to be appropriate.</p>

    <h3>Living Benefit Riders Explained</h3>

    <h4>GLWB - Guaranteed Lifetime Withdrawal Benefit</h4>
    <p>The most popular rider. Guarantees you can withdraw a percentage of your "benefit base" for life.</p>
    <ul>
      <li><strong>Benefit base:</strong> Usually starts at premium, may grow with bonuses or roll-ups</li>
      <li><strong>Withdrawal rate:</strong> 4-6% depending on age at first withdrawal</li>
      <li><strong>Guarantee:</strong> Even if account value hits $0, withdrawals continue for life</li>
    </ul>
    <p><strong>Example:</strong></p>
    <ul>
      <li>$500,000 premium</li>
      <li>5% GLWB rate at age 65</li>
      <li>= $25,000/year guaranteed for life</li>
      <li>If market crashes and account goes to $0, you still get $25,000/year</li>
    </ul>

    <h4>GMIB - Guaranteed Minimum Income Benefit</h4>
    <p>Guarantees future annuitization rate.</p>
    <ul>
      <li>Benefit base grows (often 5-7% annually)</li>
      <li>After waiting period, can annuitize at guaranteed rate</li>
      <li>Less popular now due to complexity</li>
    </ul>

    <h4>GMAB - Guaranteed Minimum Accumulation Benefit</h4>
    <p>Guarantees minimum account value after a waiting period (usually 10 years).</p>
    <ul>
      <li>If market tanks, you get at least your premium back after 10 years</li>
      <li>Less common today</li>
    </ul>

    <h3>When VAs Make Sense</h3>
    <ol>
      <li><strong>Client wants market growth + guaranteed income floor</strong>
        <ul>
          <li>GLWB provides both upside potential and guaranteed lifetime income</li>
          <li>Good for clients who worry about both outliving money AND missing market gains</li>
        </ul>
      </li>
      <li><strong>Client has maxed other tax-advantaged accounts</strong>
        <ul>
          <li>Already maxing 401(k), IRA, HSA</li>
          <li>Tax deferral has value for high earners</li>
          <li>Wants additional tax-deferred growth</li>
        </ul>
      </li>
      <li><strong>Client needs creditor protection</strong>
        <ul>
          <li>Annuities are protected from creditors in many states</li>
          <li>May benefit professionals with liability exposure</li>
        </ul>
      </li>
    </ol>

    <h3>When VAs Don't Make Sense</h3>
    <ul>
      <li><strong>Client hasn't maxed retirement accounts:</strong> Use 401(k)/IRA first</li>
      <li><strong>Client is in low tax bracket:</strong> Tax deferral has limited value</li>
      <li><strong>Client doesn't need the guarantees:</strong> Why pay for features you won't use?</li>
      <li><strong>Client is buying for "investment returns":</strong> Fees destroy returns; use low-cost funds instead</li>
      <li><strong>Client doesn't understand the product:</strong> Complexity breeds complaints</li>
    </ul>

    <h3>The Tax Reality</h3>
    <p>VA gains are taxed as ordinary income when withdrawn—NOT as capital gains.</p>
    <ul>
      <li>Long-term capital gains rate: 0-20%</li>
      <li>Ordinary income rate: 10-37%</li>
    </ul>
    <p>For high-income clients, this can mean paying 37% instead of 20% on gains. The tax deferral must be long enough to overcome this disadvantage.</p>

    <h3>Surrender Charges</h3>
    <p>Most VAs have surrender periods (5-8 years typical), declining each year. Plan for long-term ownership.</p>

    <div class="callout callout-warning">
      <strong>Suitability Warning:</strong> VAs are the most complained-about annuity product. They're often sold based on illustrations that don't materialize, or to clients who don't need the features. Document WHY the features are appropriate for this specific client.
    </div>
  `,
  keyTakeaways: [
    'VA fees typically total 2.35-4.2% annually—must justify with features',
    'Fee drag can cost hundreds of thousands over time',
    'GLWB is the most popular rider—guarantees lifetime income regardless of account value',
    'Only appropriate if client needs the guarantees AND has maxed other tax-advantaged options',
    'Gains taxed as ordinary income, not capital gains—may be tax disadvantage',
    'Most complained-about product—document suitability carefully'
  ]
};
