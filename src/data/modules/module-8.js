export const module8 = {
  id: 8,
  track: 2,
  title: 'RILA Deep Dive',
  description: 'Registered Index-Linked Annuities - the buffer product',
  duration: '45 min',
  difficulty: 3,
  objectives: [
    'Understand buffer vs. floor protection mechanisms',
    'Compare RILAs to FIAs and VAs',
    'Evaluate trade-offs between protection levels and upside',
    'Identify ideal RILA candidates'
  ],
  content: `
    <h2>RILA: The Middle Ground</h2>
    <p>Registered Index-Linked Annuities (also called "buffer annuities" or "structured annuities") sit between FIAs and VAs. They offer more upside than FIAs but accept some downside risk in exchange.</p>

    <h3>The Basic Concept</h3>
    <ul>
      <li><strong>Index-linked:</strong> Returns based on index performance (like FIA)</li>
      <li><strong>Partial protection:</strong> Absorb first X% of losses OR limit losses to X%</li>
      <li><strong>Higher caps/participation:</strong> More upside than FIA because you accept some risk</li>
      <li><strong>Securities product:</strong> Regulated by SEC, requires Series 6/7</li>
    </ul>

    <h3>Protection Mechanisms Explained</h3>

    <h4>Buffer (Most Common)</h4>
    <p>Insurance company absorbs the first X% of losses. You absorb everything beyond.</p>
    <p><strong>Example: 10% Buffer</strong></p>
    <table>
      <tr><th>Index Return</th><th>Your Return</th><th>Explanation</th></tr>
      <tr><td>+20%</td><td>+15% (if 15% cap)</td><td>Gain capped at 15%</td></tr>
      <tr><td>+8%</td><td>+8%</td><td>Full gain under cap</td></tr>
      <tr><td>-5%</td><td>0%</td><td>Buffer absorbs loss</td></tr>
      <tr><td>-10%</td><td>0%</td><td>Buffer absorbs loss</td></tr>
      <tr><td>-15%</td><td>-5%</td><td>You absorb 5% beyond buffer</td></tr>
      <tr><td>-30%</td><td>-20%</td><td>You absorb 20% beyond buffer</td></tr>
    </table>

    <h4>Floor</h4>
    <p>Your maximum loss is capped at X%, regardless of how far the market falls.</p>
    <p><strong>Example: -10% Floor</strong></p>
    <table>
      <tr><th>Index Return</th><th>Your Return</th><th>Explanation</th></tr>
      <tr><td>+20%</td><td>+12% (if 12% cap)</td><td>Gain capped</td></tr>
      <tr><td>-5%</td><td>-5%</td><td>You take the loss</td></tr>
      <tr><td>-10%</td><td>-10%</td><td>Loss equals floor</td></tr>
      <tr><td>-30%</td><td>-10%</td><td>Loss capped at floor</td></tr>
    </table>

    <h3>Buffer vs. Floor: Which Is Better?</h3>
    <table>
      <tr><th>Factor</th><th>Buffer</th><th>Floor</th></tr>
      <tr><td>Small losses</td><td>Protected</td><td>NOT protected</td></tr>
      <tr><td>Large losses</td><td>Exposed (beyond buffer)</td><td>Protected (at floor)</td></tr>
      <tr><td>Upside potential</td><td>Higher caps</td><td>Lower caps</td></tr>
      <tr><td>Best for</td><td>Moderate declines expected</td><td>Crash protection priority</td></tr>
    </table>

    <h3>RILA vs. FIA vs. VA: The Spectrum</h3>
    <table>
      <tr><th>Feature</th><th>FIA</th><th>RILA</th><th>VA</th></tr>
      <tr><td>Downside protection</td><td>100%</td><td>Partial</td><td>None*</td></tr>
      <tr><td>Upside potential</td><td>Limited</td><td>Moderate</td><td>Full</td></tr>
      <tr><td>Realistic returns</td><td>4-6%</td><td>5-8%</td><td>Market minus fees</td></tr>
      <tr><td>Fees</td><td>None explicit</td><td>Low (0-0.5%)</td><td>High (2-4%)</td></tr>
      <tr><td>Registration</td><td>Insurance only</td><td>SEC registered</td><td>SEC registered</td></tr>
    </table>
    <p><em>*Without living benefit riders</em></p>

    <h3>Common RILA Structures</h3>

    <h4>1-Year Term with Buffer</h4>
    <ul>
      <li>Most common structure</li>
      <li>Index measured over 1 year</li>
      <li>Caps reset annually based on market conditions</li>
      <li>Example: 10% buffer, 15% cap</li>
    </ul>

    <h4>6-Year Term with Buffer</h4>
    <ul>
      <li>Longer measurement period</li>
      <li>Higher caps (often 100%+)</li>
      <li>Less liquidity</li>
      <li>Smooths out short-term volatility</li>
    </ul>

    <h4>Step-Up Options</h4>
    <ul>
      <li>Some RILAs lock in gains periodically</li>
      <li>Can't lose previous gains in future downturns</li>
      <li>Lower caps than standard options</li>
    </ul>

    <h3>When RILAs Make Sense</h3>
    <ul>
      <li>Client wants more growth than FIA but isn't comfortable with full VA risk</li>
      <li>Client understands they CAN lose money (critical for suitability)</li>
      <li>Client has medium risk tolerance, not ultra-conservative</li>
      <li>Client wants to participate in bull markets more than FIA allows</li>
      <li>Client is okay with 5-7 year time horizon</li>
    </ul>

    <h3>When RILAs Don't Make Sense</h3>
    <ul>
      <li>Client can't accept ANY losses → Use FIA</li>
      <li>Client wants maximum growth and can handle volatility → Use low-cost index funds</li>
      <li>Client doesn't understand the buffer concept</li>
      <li>Client needs liquidity</li>
      <li>Client thinks buffer means "no risk"</li>
    </ul>

    <h3>The Buffer Misconception</h3>
    <p>Common client misunderstanding: "I have a 10% buffer so I'm safe."</p>
    <p>Reality in 2008-2009:</p>
    <ul>
      <li>S&P 500 dropped ~55%</li>
      <li>With 10% buffer, you'd still lose 45%</li>
      <li>Buffer helps in normal corrections, not crashes</li>
    </ul>

    <div class="callout callout-warning">
      <strong>Critical Disclosure:</strong> RILAs can lose money. The buffer reduces but does not eliminate market risk. Ensure clients understand this BEFORE purchase. Document their understanding.
    </div>

    <h3>Popular RILA Providers</h3>
    <ul>
      <li>Allianz Index Advantage</li>
      <li>Brighthouse Shield</li>
      <li>Lincoln Level Advantage</li>
      <li>Equitable Structured Capital Strategies</li>
      <li>Prudential FlexGuard</li>
    </ul>
  `,
  keyTakeaways: [
    'RILAs accept partial downside risk in exchange for higher upside than FIAs',
    'Buffer absorbs first X% of losses; Floor caps maximum loss at X%',
    'Realistic returns: 5-8%, between FIA (4-6%) and full market',
    'Securities product—requires Series 6/7 license',
    'Buffer does NOT eliminate risk—2008 would still hurt significantly',
    'Only suitable for clients who understand and accept they CAN lose money'
  ]
};
