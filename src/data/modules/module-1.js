export const module1 = {
  id: 1,
  track: 1,
  title: 'The Fundamental Problem',
  description: 'What annuities actually are, the retirement risks they solve, and when they do (and don\'t) make sense',
  duration: '45 min',
  difficulty: 1,
  objectives: [
    'Explain what an annuity is in plain language',
    'Define longevity risk and sequence of returns risk without jargon',
    'Describe what a safe withdrawal rate is and what it assumes',
    'Explain (at a high level) how annuities pool longevity risk',
    'Identify the trade-offs clients make when they buy guarantees'
  ],
  content: `
    <h2>First Things First: What Is an Annuity?</h2>

    <div class="key-insight">
      <p><strong>An annuity is a deal you make with an insurance company.</strong> You hand them a chunk of money. In return, they promise to pay you back over time — often for the rest of your life, no matter how long you live. That's it. Everything else in this course is details about <em>when</em> the payments start, <em>how much</em> you get, and <em>what guarantees</em> come with the deal.</p>
    </div>

    <p>Think of it like this: you know how car insurance protects you from a huge unexpected repair bill? An annuity protects you from a huge unexpected problem too — running out of money because you lived longer than you planned for.</p>

    <p>There are many flavors of annuities (we'll meet them all in Module 2), but they all share this DNA: <strong>you trade some money and flexibility now for some kind of guarantee later.</strong></p>

    <p>Before we look at the different types, though, we need to understand the problem they solve. Because annuities aren't magic — they're a tool, and like any tool, they're great for some jobs and wrong for others.</p>

    <h2>The Retirement Problem Nobody Wants to Face</h2>

    <p>Every retiree faces the same question: <strong>"How do I make sure I don't run out of money before I die?"</strong></p>

    <p>This sounds simple, but it's actually an impossible math problem because of one unknown variable: <em>how long will you live?</em> If you knew you'd live to exactly 85, you could divide your savings by 20 years and be done. But nobody gets that memo.</p>

    <p>This uncertainty creates three risks that can wreck a retirement plan. Let's take them one at a time.</p>

    <h2>Risk #1: Living Longer Than Your Money (Longevity Risk)</h2>

    <p><strong>Longevity risk</strong> simply means: you might outlive your savings. And the odds of living a very long time are higher than most people think.</p>

    <div class="example-box">
      <p><strong>The numbers might surprise you:</strong></p>
      <ul>
        <li>Average life expectancy at 65 is about 20 years (NCHS, 2024 data). But that's the <em>average</em> — half of people live longer.</li>
        <li>A 67-year-old retiree has roughly a 25% chance of reaching 95, and nearly a 10% chance of reaching 100 (TIAA longevity research).</li>
        <li>For a married couple both age 65, there's a 50% chance at least one of them lives past 92.</li>
      </ul>
    </div>

    <div class="mental-model">
      <p><strong>ELI10:</strong> Imagine you have a big jar of M&Ms that has to last your whole summer vacation — but nobody will tell you when summer ends. It could be 6 weeks. It could be 12. How many do you eat per day? That's longevity risk.</p>
    </div>

    <div class="warning-box">
      <p><strong>The key trap:</strong> "Average life expectancy" is a terrible planning number. Retirement plans don't fail because of average outcomes — they fail in the <em>tail</em>, when someone lives much longer than expected. You need to plan for the possibility, not the average.</p>
    </div>

    <h2>Risk #2: Bad Timing in the Market (Sequence of Returns Risk)</h2>

    <p>This one is less intuitive, so let's build up to it.</p>

    <p>When you're <em>saving</em> for retirement, a bad year early on and a bad year late are basically the same — you have decades for the market to recover. But when you're <em>spending</em> in retirement, a bad year early is devastating. Why?</p>

    <p>Because you're pulling money out at the same time the market is dropping. You're selling shares at low prices, and those shares can never participate in the recovery. The damage is permanent.</p>

    <div class="mental-model">
      <p><strong>Mental Model:</strong> Think of your retirement portfolio as a bucket with a hole in the bottom (your withdrawals). If someone also punches a big hole in the side early on (a market crash), the bucket drains much faster than if the side-punch comes later when there's less water left to lose.</p>
    </div>

    <p>Here's the formula in action:</p>
    <p><code>Next year's balance = (Current balance − Withdrawal) × (1 + return)</code></p>

    <div class="example-box">
      <p><strong>Worked Example:</strong> You have $1,000,000 and withdraw $50,000 per year.</p>
      <ul>
        <li><strong>Bad year first:</strong> ($1,000,000 − $50,000) × 0.80 = <strong>$760,000</strong></li>
        <li><strong>Good year first:</strong> ($1,000,000 − $50,000) × 1.20 = <strong>$1,140,000</strong></li>
      </ul>
      <p>Same 20% swing. But after just one year, there's a <strong>$380,000 gap</strong> between these two retirees. The one who got unlucky early starts year two with a much smaller base, and it compounds from there.</p>
    </div>

    <p><strong>Here's why that gap matters in real life.</strong> The unlucky retiree now faces a brutal choice:</p>
    <ul>
      <li><strong>Keep spending $50,000/year</strong> and run out of money roughly <strong>7 years sooner</strong> than the lucky retiree — potentially hitting zero in their early 80s instead of their late 80s.</li>
      <li><strong>Cut spending immediately</strong> — to something like $38,000–$40,000/year — to get back on track for the same longevity target. That's a 20%+ pay cut in retirement, permanently.</li>
    </ul>
    <p>Neither option is good. And this is from <em>one</em> bad year at the start. Two or three bad years in a row (like 2000–2002 or 2007–2009) can be catastrophic.</p>

    <p>This is called <strong>sequence of returns risk</strong> — the risk that the <em>order</em> of your returns matters just as much as the <em>average</em>, once you start withdrawing money.</p>

    <h2>Risk #3: Your Money Buys Less Over Time (Inflation Risk)</h2>

    <p>A dollar today won't buy the same groceries in 20 years. At 3% average inflation, $50,000 per year in today's dollars has the purchasing power of roughly $27,000 in 20 years. Healthcare costs tend to rise even faster than general inflation.</p>

    <p>We'll come back to inflation throughout the course. For now, just keep it in the back of your mind: any "guaranteed" payment that doesn't adjust for inflation gets quietly smaller every year.</p>

    <h2>The Most Common Self-Managed Solution: The "4% Rule"</h2>

    <p>Before annuities enter the picture, most retirement planning starts with a simple idea: withdraw a small percentage of your savings each year and hope it lasts.</p>

    <p>The most famous version is the <strong>"4% rule"</strong>: withdraw 4% of your portfolio in year one, then adjust that dollar amount for inflation each year. Historical backtesting showed this had a high probability of lasting 30 years.</p>

    <p>It's a useful starting point, but it has real problems:</p>

    <ul>
      <li><strong>It assumes a 30-year retirement.</strong> What if you retire at 60 and live to 100? That's 40 years.</li>
      <li><strong>It was built on historical US market data</strong> during an unusually strong period for stocks and bonds.</li>
      <li><strong>It doesn't handle sequence risk well.</strong> A bad crash in years 1-3 can sink the whole plan.</li>
      <li><strong>Many researchers now suggest 3-3.5% is safer,</strong> which means less income from the same savings.</li>
      <li><strong>It requires iron discipline.</strong> When the market drops 30%, are you really going to keep spending the same amount? Most people can't.</li>
    </ul>

    <div class="key-insight">
      <p><strong>Key distinction:</strong> A withdrawal-rate rule is a <em>portfolio strategy</em> — you're managing the risk yourself. An annuity is a <em>risk-transfer strategy</em> — you're paying an insurance company to manage the risk for you. They solve different parts of the retirement problem.</p>
    </div>

    <h2>Enter the Annuity: How Risk Transfer Works</h2>

    <p>Now we can see why annuities exist. They solve the "impossible math problem" by doing something an individual can't: <strong>pooling thousands of people together.</strong></p>

    <p>Here's how it works. Imagine 1,000 people, all age 65, each put $500,000 into a pool. The insurance company doesn't know which individuals will die at 70 and which will live to 100 — but the <em>math of the group</em> is very predictable. Actuaries (the math specialists insurance companies employ) can estimate with high confidence how many people will still be alive at each age.</p>

    <p>The money from those who die earlier gets redistributed to keep paying those who live longer. This is called <strong>mortality pooling</strong>, and the extra income each surviving person gets from this redistribution is called a <strong>mortality credit</strong>.</p>

    <div class="mental-model">
      <p><strong>ELI10:</strong> Imagine 100 kids pool their lunch money. They know some kids will go home sick and not eat lunch. The kids who stay get more food than if everyone had kept their own money. That "extra" food is the mortality credit.</p>
    </div>

    <p>This is why an annuity can pay you significantly more income than you could safely generate on your own:</p>

    <table>
      <tr><th>Strategy</th><th>$500K at Age 65</th><th>Annual Income</th></tr>
      <tr><td>4% withdrawal rate</td><td>Self-managed</td><td>$20,000</td></tr>
      <tr><td>3.5% withdrawal rate (safer)</td><td>Self-managed</td><td>$17,500</td></tr>
      <tr><td>Lifetime income annuity</td><td>Guaranteed for life</td><td>$32,000–$38,000</td></tr>
    </table>

    <p>That's 60–90% more income from the same money. The "extra" doesn't come from better investments — it comes from mortality credits and the fact that the insurance company doesn't have to plan for you individually living to 110.</p>

    <p>How can insurance companies make these promises? A few things working together:</p>
    <ul>
      <li><strong>Mortality pooling:</strong> The math of large groups is predictable even when individuals aren't.</li>
      <li><strong>Professional management:</strong> Actuaries and investment teams manage the assets backing the guarantees.</li>
      <li><strong>Regulatory reserves:</strong> Insurance companies are legally required to hold reserves to back their promises.</li>
      <li><strong>State guaranty associations:</strong> If an insurer goes bankrupt, each state has a safety-net fund that covers policyholders (typically up to $250K–$500K depending on the state). This is <em>not</em> the same as FDIC insurance — it's a different system with different rules.</li>
    </ul>

    <h2>The Other Side of the Deal: What You Give Up</h2>

    <div class="warning-box">
      <p><strong>Every guarantee has a price.</strong> When you buy an annuity, you're typically giving up some combination of: liquidity (easy access to your money), upside potential (market gains), and flexibility (ability to change your mind). Different types of annuities trade off different things — we'll map this out in Module 2.</p>
    </div>

    <p>Annuities are often inappropriate when:</p>
    <ul>
      <li><strong>Someone has limited savings:</strong> They may need that money accessible for emergencies, not locked up.</li>
      <li><strong>Someone already has a pension:</strong> They already have guaranteed income — adding more may not help.</li>
      <li><strong>Someone is very wealthy:</strong> They can absorb longevity risk on their own without paying for a guarantee.</li>
      <li><strong>Someone has serious health issues:</strong> They're unlikely to live long enough to benefit from mortality credits.</li>
      <li><strong>Leaving an inheritance is the top priority:</strong> Most annuities reduce or eliminate what's passed to heirs.</li>
    </ul>

    <div class="key-insight">
      <p><strong>The bottom line:</strong> Annuities are about risk transfer, not investment returns. You're paying for certainty. Whether that trade is worth it depends entirely on the person's situation — their income needs, their other assets, their health, and what keeps them up at night.</p>
    </div>

    <h2>What's Next</h2>
    <p>Now you understand the <em>problem</em> annuities solve and the basic idea of how they work. In Module 2, we'll meet the actual product types. There are really only a few, and they all sit on two simple axes: <strong>when does income start?</strong> and <strong>who carries the market risk?</strong> Once you have that mental map, you can classify any annuity you'll ever encounter.</p>

    <h2>Quick Check</h2>
    <details>
      <summary><strong>1) In one sentence, what is an annuity?</strong></summary>
      <p>A contract where you give an insurance company money and they promise to pay you back over time, often for life — transferring risk from you to them.</p>
    </details>
    <details>
      <summary><strong>2) Define sequence of returns risk in one sentence.</strong></summary>
      <p>The risk that poor market returns early in retirement — while you're withdrawing money — permanently damage your portfolio, even if long-run average returns are fine.</p>
    </details>
    <details>
      <summary><strong>3) Why is "average life expectancy" a bad number to plan around?</strong></summary>
      <p>Because half of people live longer than the average. Retirement plans fail in the tail — when someone lives much longer than expected while also facing bad markets.</p>
    </details>
    <details>
      <summary><strong>4) Where does the "extra" income from an annuity come from?</strong></summary>
      <p>Mortality credits — the money from people in the pool who die earlier is redistributed to keep paying those who live longer. It's not from better investments.</p>
    </details>
    <details>
      <summary><strong>5) Name two situations where an annuity is likely a bad fit.</strong></summary>
      <p>When someone has limited savings and needs liquidity for emergencies, or when someone has serious health issues and is unlikely to benefit from mortality credits. (Other valid answers: already has a pension, very wealthy, strong inheritance priority.)</p>
    </details>

    <h2>Sources</h2>
    <ul>
      <li><a href="https://www.cdc.gov/nchs/products/databriefs/db548.htm" target="_blank" rel="noreferrer">NCHS Data Brief 548 (Jan 2026): Mortality in the United States, 2024 (life expectancy at age 65)</a></li>
      <li><a href="https://www.tiaa.org/public/institute/publication/2023/longevity-literacy-preparing-for-100-year-lives" target="_blank" rel="noreferrer">TIAA Institute (2023): Longevity literacy: Preparing for 100-year lives</a></li>
      <li><a href="https://www.forbes.com/sites/wadepfau/2016/08/02/weighing-sequence-of-returns-risk-for-retirees/" target="_blank" rel="noreferrer">Wade Pfau (2016): Weighing sequence of returns risk for retirees</a></li>
      <li><a href="https://blogs.cfainstitute.org/investor/2018/08/28/rethinking-the-4-5-rule/" target="_blank" rel="noreferrer">CFA Institute (2018): Rethinking retirement withdrawal guidelines (sequence risk framing)</a></li>
      <li><a href="https://www.nber.org/papers/w9714" target="_blank" rel="noreferrer">NBER Working Paper 9714 (2003): Annuities and Individual Welfare (Davidoff, Brown, Diamond)</a></li>
      <li><a href="https://nolhga.com/policyholders/frequently-asked-questions/" target="_blank" rel="noreferrer">NOLHGA: Guaranty association FAQs (coverage is state-law limited; annuity limits often expressed in present value)</a></li>
    </ul>
  `,
  keyTakeaways: [
    'An annuity is a contract: you give an insurance company money, they guarantee payments — often for life',
    'Longevity risk and sequence risk are the two core retirement risks annuities address',
    'Withdrawals make return timing matter; early losses permanently damage a retirement plan',
    'The 4% rule is a useful starting point but not a guarantee — it has real limitations',
    'Mortality credits (pooling risk across many people) are what let annuities pay 60-90% more than safe withdrawal rates',
    'Every guarantee has a price: liquidity, upside, flexibility — annuities are not right for everyone'
  ]
};
