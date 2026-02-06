export const module10 = {
  id: 10,
  track: 3,
  title: 'Taxation & Regulation',
  description: 'Tax treatment, suitability rules, and compliance',
  duration: '55 min',
  difficulty: 3,
  objectives: [
    'Explain annuity taxation for different account types',
    'Understand the exclusion ratio for immediate annuities',
    'Navigate suitability and best interest standards',
    'Identify key compliance requirements'
  ],
  content: `
    <h2>Annuity Taxation: More Complex Than It Looks</h2>
    <p>Annuity taxation depends on account type, whether it's qualified or non-qualified, and the type of distribution. Getting this wrong creates problems for clients.</p>

    <h3>Qualified vs. Non-Qualified</h3>

    <h4>Qualified Annuities</h4>
    <p>Purchased inside retirement accounts (IRA, 401k, 403b, etc.)</p>
    <ul>
      <li>Pre-tax money goes in</li>
      <li>ALL withdrawals taxed as ordinary income</li>
      <li>Subject to RMD rules</li>
      <li>No additional tax benefit from annuity wrapper</li>
    </ul>

    <h4>Non-Qualified Annuities</h4>
    <p>Purchased with after-tax dollars</p>
    <ul>
      <li>After-tax money goes in</li>
      <li>Only GAINS are taxed (as ordinary income)</li>
      <li>No RMDs</li>
      <li>LIFO taxation: gains come out first</li>
    </ul>

    <h3>LIFO Taxation Explained</h3>
    <p>For non-qualified deferred annuities, gains come out before principal (Last In, First Out).</p>
    <p><strong>Example:</strong></p>
    <ul>
      <li>Invested: $200,000 (cost basis)</li>
      <li>Current value: $300,000</li>
      <li>Gain: $100,000</li>
      <li>First $100,000 withdrawn = 100% taxable</li>
      <li>Next $200,000 withdrawn = tax-free return of principal</li>
    </ul>

    <h3>Exclusion Ratio for Immediate Annuities</h3>
    <p>SPIAs and DIAs get more favorable tax treatment—a portion of each payment is tax-free return of principal.</p>
    <p><strong>Formula:</strong> Exclusion Ratio = Investment / Expected Return</p>
    <p><strong>Example:</strong></p>
    <ul>
      <li>Investment: $200,000</li>
      <li>Life expectancy: 20 years</li>
      <li>Annual payment: $15,000</li>
      <li>Expected return: $15,000 × 20 = $300,000</li>
      <li>Exclusion ratio: $200,000 / $300,000 = 66.7%</li>
      <li>Tax-free portion of each payment: $15,000 × 66.7% = $10,000</li>
      <li>Taxable portion: $5,000</li>
    </ul>
    <p>After life expectancy, entire payment becomes taxable.</p>

    <h3>10% Early Withdrawal Penalty</h3>
    <p>Applies to gains withdrawn before age 59½ (like IRAs).</p>
    <ul>
      <li>Penalty is on the taxable portion only</li>
      <li>Exceptions: death, disability, substantially equal periodic payments (72t)</li>
    </ul>

    <h3>Death and Inheritance</h3>

    <h4>Spousal Beneficiary</h4>
    <ul>
      <li>Can continue the contract as owner</li>
      <li>Defers all taxes</li>
      <li>Most favorable treatment</li>
    </ul>

    <h4>Non-Spousal Beneficiary</h4>
    <ul>
      <li>Must take distributions within 5 years OR over life expectancy</li>
      <li>All gains taxed as ordinary income</li>
      <li>No step-up in basis (unlike stocks/mutual funds)</li>
    </ul>

    <h3>Regulatory Framework</h3>

    <h4>Insurance-Only Products (Fixed, FIA, SPIA, DIA, MYGA)</h4>
    <ul>
      <li>Regulated by state insurance departments</li>
      <li>Suitability standard</li>
      <li>Insurance license required</li>
      <li>NAIC Suitability in Annuity Transactions Model Regulation</li>
    </ul>

    <h4>Securities Products (VA, RILA)</h4>
    <ul>
      <li>Regulated by SEC and FINRA</li>
      <li>Reg BI (Best Interest) standard for broker-dealers</li>
      <li>Fiduciary standard for RIAs</li>
      <li>Series 6 or 7 license required</li>
    </ul>

    <h3>Suitability Requirements</h3>
    <p>For all annuity sales, you must document:</p>
    <ul>
      <li>Client's financial situation (assets, income, tax status)</li>
      <li>Investment objectives and risk tolerance</li>
      <li>Intended use of the annuity</li>
      <li>Time horizon</li>
      <li>Existing annuity coverage</li>
      <li>Liquidity needs</li>
    </ul>

    <h3>Reg BI (Best Interest) for Securities Annuities</h3>
    <p>Higher standard than suitability. Must:</p>
    <ul>
      <li>Disclose all material facts about the recommendation</li>
      <li>Exercise reasonable diligence, care, and skill</li>
      <li>Identify and disclose conflicts of interest</li>
      <li>Have policies to eliminate or mitigate conflicts</li>
    </ul>

    <h3>1035 Exchanges</h3>
    <p>Tax-free exchange of one annuity for another (or life insurance to annuity).</p>
    <ul>
      <li>Defers all gains</li>
      <li>Must be done properly—direct transfer between carriers</li>
      <li>New surrender period typically starts</li>
      <li>Must be suitable—not just for generating commission</li>
    </ul>

    <div class="callout callout-warning">
      <strong>Compliance Red Flag:</strong> 1035 exchanges are heavily scrutinized. Document clearly why the exchange benefits the client. If the only reason is "better illustrated rate," that's probably not sufficient.
    </div>

    <h3>State Guaranty Associations</h3>
    <p>If an insurance company fails, state guaranty associations provide protection.</p>
    <ul>
      <li>Typical coverage: $250,000-$500,000 per owner per company</li>
      <li>Varies by state</li>
      <li>NOT the same as FDIC—different mechanism, different limits</li>
      <li>Consider when placing large amounts with single carrier</li>
    </ul>
  `,
  keyTakeaways: [
    'Qualified annuities: all distributions taxed as ordinary income',
    'Non-qualified: LIFO taxation—gains come out first',
    'Immediate annuities get exclusion ratio treatment—partly tax-free',
    '10% penalty on gains before 59½ (with exceptions)',
    'No step-up in basis at death—unlike stocks',
    '1035 exchanges are tax-free but heavily scrutinized—document the benefit to client'
  ]
};
