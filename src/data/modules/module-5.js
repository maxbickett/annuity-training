export const module5 = {
  id: 5,
  track: 2,
  title: 'MYGA & Fixed Annuities',
  description: 'Guaranteed interest products - the annuity CD',
  duration: '35 min',
  difficulty: 1,
  objectives: [
    'Understand MYGA mechanics and rate structures',
    'Compare MYGAs to CDs and bonds',
    'Explain surrender charges and free withdrawal provisions',
    'Identify appropriate MYGA candidates'
  ],
  content: `
    <h2>MYGA: The Annuity World's CD</h2>
    <p>Multi-Year Guaranteed Annuities are the simplest deferred annuity. You deposit money, lock in a guaranteed interest rate for a fixed period, and your money grows tax-deferred.</p>

    <h3>How MYGAs Work</h3>
    <ul>
      <li><strong>Guaranteed rate:</strong> Locked in for the entire term (3, 5, 7, or 10 years typical)</li>
      <li><strong>Tax deferral:</strong> No taxes until withdrawal</li>
      <li><strong>Principal protection:</strong> Guaranteed by insurance company (not FDIC)</li>
      <li><strong>Surrender charges:</strong> Penalties for early withdrawal (typically match term length)</li>
    </ul>

    <h3>Current Rate Environment (2024)</h3>
    <table>
      <tr><th>Term</th><th>Typical MYGA Rate</th><th>Comparable CD Rate</th></tr>
      <tr><td>3 years</td><td>5.0-5.5%</td><td>4.5-5.0%</td></tr>
      <tr><td>5 years</td><td>5.2-5.7%</td><td>4.3-4.8%</td></tr>
      <tr><td>7 years</td><td>5.3-5.8%</td><td>4.0-4.5%</td></tr>
      <tr><td>10 years</td><td>5.5-6.0%</td><td>4.0-4.5%</td></tr>
    </table>
    <p><em>Rates change frequently. Always get current quotes.</em></p>

    <h3>MYGA vs. CD: The Real Comparison</h3>

    <h4>MYGA Advantages</h4>
    <ul>
      <li><strong>Higher rates:</strong> Often 0.5-1% better than comparable CDs</li>
      <li><strong>Tax deferral:</strong> Interest compounds without annual tax drag</li>
      <li><strong>No contribution limits:</strong> Unlike retirement accounts</li>
      <li><strong>Multi-state creditor protection:</strong> Protected from creditors in many states</li>
    </ul>

    <h4>MYGA Disadvantages</h4>
    <ul>
      <li><strong>No FDIC insurance:</strong> Backed by insurance company and state guaranty associations</li>
      <li><strong>Surrender charges:</strong> Less flexible than CDs</li>
      <li><strong>Ordinary income taxation:</strong> Interest taxed as ordinary income when withdrawn</li>
      <li><strong>Age 59½ rule:</strong> 10% IRS penalty for withdrawals before 59½</li>
    </ul>

    <h3>Traditional Fixed Annuities</h3>
    <p>Traditional fixed annuities differ from MYGAs in one key way: the rate can change after an initial guarantee period.</p>
    <ul>
      <li><strong>Initial rate:</strong> Guaranteed for 1-3 years</li>
      <li><strong>Renewal rate:</strong> Carrier declares new rate annually</li>
      <li><strong>Minimum guarantee:</strong> Contract specifies a floor (often 1-2%)</li>
    </ul>
    <p>This introduces rate risk—your rate could drop after the initial period. MYGAs are generally more transparent and predictable.</p>

    <h3>Surrender Charges Explained</h3>
    <p><strong>Example: 5-Year MYGA Surrender Schedule</strong></p>
    <table>
      <tr><th>Year</th><th>Surrender Charge</th></tr>
      <tr><td>1</td><td>8%</td></tr>
      <tr><td>2</td><td>7%</td></tr>
      <tr><td>3</td><td>6%</td></tr>
      <tr><td>4</td><td>5%</td></tr>
      <tr><td>5</td><td>4%</td></tr>
      <tr><td>After 5</td><td>0%</td></tr>
    </table>

    <h4>Free Withdrawal Provisions</h4>
    <p>Most MYGAs allow some penalty-free withdrawals:</p>
    <ul>
      <li><strong>10% free withdrawal:</strong> Can withdraw up to 10% of value annually without penalty</li>
      <li><strong>Interest-only withdrawal:</strong> Some allow withdrawing just the interest</li>
      <li><strong>Hardship provisions:</strong> Terminal illness, nursing home may waive charges</li>
    </ul>

    <h3>Laddering Strategy</h3>
    <p>Instead of putting $500K into one 5-year MYGA, consider laddering:</p>
    <table>
      <tr><th>Amount</th><th>Term</th><th>Matures</th></tr>
      <tr><td>$100K</td><td>1 year</td><td>2025</td></tr>
      <tr><td>$100K</td><td>2 years</td><td>2026</td></tr>
      <tr><td>$100K</td><td>3 years</td><td>2027</td></tr>
      <tr><td>$100K</td><td>4 years</td><td>2028</td></tr>
      <tr><td>$100K</td><td>5 years</td><td>2029</td></tr>
    </table>
    <p>Benefits:</p>
    <ul>
      <li>Annual liquidity access</li>
      <li>Interest rate diversification</li>
      <li>Flexibility to adjust strategy</li>
    </ul>

    <h3>When MYGAs Make Sense</h3>
    <ul>
      <li>Client wants safety and predictability</li>
      <li>Client doesn't need the money during the term</li>
      <li>Client wants tax deferral (especially high earners)</li>
      <li>Client is shopping rates and MYGA beats CDs</li>
      <li>Client values simplicity</li>
    </ul>

    <h3>When MYGAs Don't Make Sense</h3>
    <ul>
      <li>Client needs liquidity</li>
      <li>Client is under 59½ and might need funds</li>
      <li>Client doesn't trust insurance company backing (prefers FDIC)</li>
      <li>Client is in a low tax bracket (tax deferral less valuable)</li>
      <li>Client expects to need nursing home care (potential Medicaid issues)</li>
    </ul>

    <div class="callout">
      <strong>Suitability Note:</strong> MYGAs are often most appropriate for clients in their 50s-70s with conservative savings goals. They're generally NOT suitable as someone's only liquid asset.
    </div>
  `,
  keyTakeaways: [
    'MYGAs offer guaranteed rates for fixed terms, like CDs but with tax deferral',
    'Typically 0.5-1% better rates than bank CDs',
    'No FDIC insurance—backed by insurance company reserves and state guaranty associations',
    'Surrender charges apply for early withdrawal; most allow 10% annual free withdrawal',
    'Laddering provides liquidity and rate diversification',
    'Best for conservative savers who don\'t need the money during the term'
  ]
};
