export const module11 = {
  id: 11,
  track: 4,
  title: 'Client Scenarios',
  description: 'Real-world case studies and decision frameworks',
  duration: '60 min',
  difficulty: 4,
  objectives: [
    'Apply product knowledge to realistic client situations',
    'Develop a systematic approach to annuity recommendations',
    'Recognize when annuities are NOT appropriate',
    'Practice documenting suitability'
  ],
  content: `
    <h2>Putting It All Together</h2>
    <p>Theory is one thing—applying it to real clients is another. Let's work through scenarios that illustrate how to think about annuity recommendations.</p>

    <h3>Decision Framework</h3>
    <p>Before recommending any annuity, work through these questions:</p>
    <ol>
      <li><strong>What risk is the client trying to address?</strong> (Longevity? Sequence of returns? Market volatility?)</li>
      <li><strong>Do they have adequate liquidity?</strong> (Emergency fund? Other accessible assets?)</li>
      <li><strong>What's their income situation?</strong> (Social Security? Pension? Need for additional guaranteed income?)</li>
      <li><strong>What's their time horizon?</strong> (5 years? 20 years? Until death?)</li>
      <li><strong>What's their tax situation?</strong> (High bracket? Low bracket? Tax-advantaged accounts already maxed?)</li>
      <li><strong>What's their bequest motive?</strong> (Priority on leaving money to heirs?)</li>
    </ol>

    <h3>Scenario 1: The Worry-Free Retiree</h3>
    <p><strong>Client Profile:</strong></p>
    <ul>
      <li>Mary, 67, recently retired teacher</li>
      <li>$800,000 in 403(b) and IRA</li>
      <li>$2,400/month pension, $2,200/month Social Security</li>
      <li>Monthly expenses: $5,500</li>
      <li>Owns home outright</li>
      <li>No heirs she's concerned about</li>
      <li>Says she "can't sleep at night worrying about the market"</li>
    </ul>

    <p><strong>Analysis:</strong></p>
    <ul>
      <li>Current guaranteed income: $4,600/month</li>
      <li>Gap: $900/month ($10,800/year)</li>
      <li>She has longevity concern and can't handle volatility</li>
      <li>No strong bequest motive</li>
    </ul>

    <p><strong>Recommendation:</strong> SPIA for portion of assets</p>
    <ul>
      <li>$150,000 SPIA could provide ~$1,000/month life only</li>
      <li>Covers expense gap with buffer</li>
      <li>Remaining $650,000 in conservative mix for inflation/emergencies/extras</li>
      <li>She never has to worry about essential expenses</li>
    </ul>

    <p><strong>Why NOT other products:</strong></p>
    <ul>
      <li>VA: Doesn't need market growth, can't handle volatility</li>
      <li>FIA: More complexity than needed, she wants certainty</li>
      <li>DIA: Needs income now, not later</li>
    </ul>

    <h3>Scenario 2: The Late-Retirement Planner</h3>
    <p><strong>Client Profile:</strong></p>
    <ul>
      <li>Robert, 60, still working</li>
      <li>$1.5M in 401(k)</li>
      <li>Plans to retire at 65, delay Social Security to 70</li>
      <li>Worried about living too long—his parents both lived past 95</li>
      <li>Wants to leave estate to children</li>
    </ul>

    <p><strong>Analysis:</strong></p>
    <ul>
      <li>Strong longevity risk (family history)</li>
      <li>5+ years until retirement</li>
      <li>Bequest motive present but secondary to not running out</li>
      <li>Can take some risk with time horizon</li>
    </ul>

    <p><strong>Recommendation:</strong> DIA/QLAC for longevity insurance</p>
    <ul>
      <li>$200,000 QLAC inside 401(k), income starting at 85</li>
      <li>At 85, might pay $50,000+/year for life</li>
      <li>Reduces RMDs until then</li>
      <li>Rest of portfolio for earlier retirement years + estate</li>
    </ul>

    <p><strong>Why this works:</strong> Covers "tail risk" of extreme longevity without consuming entire portfolio. If he dies before 85, children get the rest.</p>

    <h3>Scenario 3: The Nervous Investor</h3>
    <p><strong>Client Profile:</strong></p>
    <ul>
      <li>David and Susan, both 58</li>
      <li>$600,000 in brokerage account</li>
      <li>$400,000 in IRAs</li>
      <li>Sold at the bottom in 2008 and 2020, bought back high</li>
      <li>"We know we should stay invested but we just can't"</li>
      <li>Want to retire at 65</li>
    </ul>

    <p><strong>Analysis:</strong></p>
    <ul>
      <li>Behavioral investors who panic sell</li>
      <li>7 years until retirement</li>
      <li>Their actual returns have been terrible due to behavior</li>
      <li>Need protection from themselves as much as markets</li>
    </ul>

    <p><strong>Recommendation:</strong> FIA for a portion</p>
    <ul>
      <li>$300,000 into FIA with GLWB rider</li>
      <li>Can't lose principal to market drops</li>
      <li>GLWB provides guaranteed income floor at retirement</li>
      <li>4-6% expected return beats their actual historical returns</li>
      <li>Keep remainder in diversified portfolio</li>
    </ul>

    <p><strong>Key point:</strong> For behavioral investors, the math is different. FIA's 4-6% may actually beat what they'd earn in the market after accounting for their panic selling.</p>

    <h3>Scenario 4: The Wrong Fit</h3>
    <p><strong>Client Profile:</strong></p>
    <ul>
      <li>Jennifer, 45</li>
      <li>$200,000 inheritance</li>
      <li>No retirement savings yet</li>
      <li>Unstable job situation</li>
      <li>"My friend got a great rate on an annuity"</li>
    </ul>

    <p><strong>Analysis:</strong></p>
    <ul>
      <li>Too young (10% penalty until 59½)</li>
      <li>Needs liquidity (unstable income)</li>
      <li>Should prioritize tax-advantaged accounts first</li>
      <li>$200K is too much of her net worth to lock up</li>
    </ul>

    <p><strong>Recommendation:</strong> NO ANNUITY</p>
    <ul>
      <li>Max 401(k) and IRA contributions first</li>
      <li>Build emergency fund (6+ months expenses)</li>
      <li>Invest remainder in taxable brokerage</li>
      <li>Revisit annuities in 15+ years</li>
    </ul>

    <p><strong>This is a suitability issue.</strong> Selling her an annuity would be inappropriate regardless of how good the product is.</p>

    <h3>Documenting Your Recommendation</h3>
    <p>For every annuity recommendation, document:</p>
    <ol>
      <li>Client's stated goals and concerns</li>
      <li>Financial situation summary</li>
      <li>Why this product addresses their specific needs</li>
      <li>Alternatives considered and why they were rejected</li>
      <li>Risks and trade-offs discussed</li>
      <li>Client's acknowledgment of understanding</li>
    </ol>

    <div class="callout">
      <strong>The Golden Rule:</strong> Would you recommend this same product to your own parent in this situation? If yes, proceed. If no, reconsider.
    </div>
  `,
  keyTakeaways: [
    'Start with the risk the client is trying to address, not the product',
    'Always verify liquidity—annuity should never be only liquid asset',
    'Match product to specific need: SPIA for income now, DIA for longevity, FIA for behavioral protection',
    'Sometimes the best recommendation is NO annuity',
    'Document your rationale—why this product for this client',
    'The "golden rule": Would you recommend this to your own family?'
  ]
};
