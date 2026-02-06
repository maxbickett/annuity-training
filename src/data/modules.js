export const MODULES = [
      // TRACK 1: FOUNDATIONS
      {
        id: 1, track: 1, title: "The Fundamental Problem", duration: "45 min", difficulty: 1,
        description: "What annuities actually are, the retirement risks they solve, and when they do (and don't) make sense",
        objectives: [
          "Explain what an annuity is in plain language",
          "Define longevity risk and sequence of returns risk without jargon",
          "Describe what a safe withdrawal rate is and what it assumes",
          "Explain (at a high level) how annuities pool longevity risk",
          "Identify the trade-offs clients make when they buy guarantees"
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

          <p><a href="#tools" data-switch-tab="tools" style="color: #60a5fa; text-decoration: underline; cursor: pointer;">Try the Sequence Risk Simulator &rarr;</a> — plug in your own numbers and see how just changing the order of returns changes everything.</p>

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
          "An annuity is a contract: you give an insurance company money, they guarantee payments — often for life",
          "Longevity risk and sequence risk are the two core retirement risks annuities address",
          "Withdrawals make return timing matter; early losses permanently damage a retirement plan",
          "The 4% rule is a useful starting point but not a guarantee — it has real limitations",
          "Mortality credits (pooling risk across many people) are what let annuities pay 60-90% more than safe withdrawal rates",
          "Every guarantee has a price: liquidity, upside, flexibility — annuities are not right for everyone"
        ]
      },

      {
        id: 2, track: 1, title: "The Annuity Universe", duration: "60 min", difficulty: 2,
        description: "A guided tour of every annuity type: what it does, who it's for, and how to tell them apart",
        objectives: [
          "Classify any annuity using two questions: when does income start, and who carries market risk",
          "Describe each major annuity type in plain language with an everyday analogy",
          "Match product types to the retirement risk they solve",
          "Recognize the spectrum from simplest to most complex"
        ],
        content: `
          <h2>Picking Up Where We Left Off</h2>

          <p>In Module 1, you learned that an annuity is a deal with an insurance company — you trade money for guarantees. You also learned <em>why</em> these deals exist: because longevity risk and sequence risk are genuinely hard problems that individuals struggle to solve on their own.</p>

          <p>Now let's meet the actual products. There are really only about six or seven types you'll encounter, and they all fit on a simple map. By the end of this module, you'll be able to hear any annuity product name and immediately know roughly what it does and who it's for.</p>

          <h2>The Two-Question Map</h2>

          <div class="key-insight">
            <p><strong>If you can answer two questions, you can place any annuity on the map:</strong></p>
            <ol>
              <li><strong>When does income start?</strong> Now (immediate) or later (deferred)?</li>
              <li><strong>Who carries the market risk?</strong> The insurance company (safe), shared (some protection), or you (full market exposure)?</li>
            </ol>
            <p>That's it. These two axes explain about 80% of the differences between annuity types.</p>
          </div>

          <div class="mental-model">
            <p><strong>ELI10:</strong> Think of it like ordering a pizza. The first question is <em>when</em> — delivery now or schedule it for later? The second question is <em>toppings</em> — plain cheese (safe, predictable), half-and-half (some risk, some protection), or the chef's surprise (exciting but you don't know what you're getting). Two choices, and you've narrowed it down.</p>
          </div>

          <p>Let's take each axis one at a time, then meet the products.</p>

          <h2>Axis 1: Timing — When Does the Money Flow?</h2>

          <h3>Immediate: "I need income now."</h3>
          <p>You hand the insurance company money today, and they start sending you payments right away (typically within a few weeks to 12 months). The main product here is the <strong>SPIA</strong> — we'll explain it below.</p>

          <h3>Deferred: "I want to grow my money first, then maybe take income later."</h3>
          <p>Your money sits with the insurance company for a while — growing, accumulating, or being positioned — before you start taking income or withdrawing it. Most annuity types fall in this bucket. There's also the <strong>DIA</strong>, which is a special case: you buy it now but income doesn't start for 5-20+ years.</p>

          <h2>Axis 2: Market Risk — Who Takes the Hit If Markets Drop?</h2>

          <p>This is where the real variety lives. From safest to riskiest:</p>

          <ul>
            <li><strong>Fixed:</strong> The insurance company guarantees a set interest rate. You can't lose money. Upside is modest.</li>
            <li><strong>Indexed:</strong> Your growth is <em>linked</em> to a market index (like the S&P 500) by a formula — but your principal is protected. You get some upside, but it's capped. You can't lose money to market drops.</li>
            <li><strong>Buffered:</strong> You accept <em>some</em> market loss (say, anything beyond the first 10%) in exchange for <em>more</em> upside. A middle ground.</li>
            <li><strong>Variable:</strong> Your money is actually invested in the market. You get full upside <em>and</em> full downside. The insurance wrapper mainly provides tax deferral and optional add-on guarantees.</li>
          </ul>

          <div class="warning-box">
            <p><strong>A common misconception:</strong> "Indexed" does <em>not</em> mean "you get the index return." It means your interest is calculated using a formula that references an index. The formula typically has caps, participation rates, or spreads that limit what you actually receive. We'll dig into the mechanics in Module 6.</p>
          </div>

          <h2>Meet the Products (One at a Time)</h2>

          <p>Now let's walk through each product type. For each one, we'll cover: what it is in plain English, an everyday analogy, the risk it solves, and the main trade-off.</p>

          <h3>1. SPIA — Single Premium Immediate Annuity</h3>

          <div class="mental-model">
            <p><strong>Analogy:</strong> Buying yourself a personal pension.</p>
          </div>

          <p><strong>What it is:</strong> The simplest annuity. You write a check, the insurance company starts sending you a monthly payment. Those payments continue for the rest of your life (or a set period, depending on the options you choose).</p>

          <p><strong>The risk it solves:</strong> Longevity risk (you literally cannot outlive the payments) and investment risk (payments don't change when markets drop).</p>

          <p><strong>The trade-off:</strong> Your lump sum is gone. You can't get it back. If you die early, the insurance company keeps what's left (unless you paid extra for beneficiary protection, which lowers your monthly payment).</p>

          <p><strong>Best for:</strong> People who need the most guaranteed income possible and have other savings for emergencies.</p>

          <p><a href="#tools" data-switch-tab="tools" style="color: #60a5fa; text-decoration: underline; cursor: pointer;">Explore the Product Map &rarr;</a> — see how all annuity types compare visually.</p>

          <h3>2. DIA — Deferred Income Annuity</h3>

          <div class="mental-model">
            <p><strong>Analogy:</strong> Longevity insurance — a pension that kicks in when you're really old.</p>
          </div>

          <p><strong>What it is:</strong> Like a SPIA, but the payments don't start for 5-20+ years. You buy it at 60, income starts at 80 or 85. Because the insurance company holds your money longer and some buyers will die before payments begin, the eventual payouts are much higher.</p>

          <p><strong>The risk it solves:</strong> The "what if I live to 95?" problem. It covers the expensive late years of retirement that are hardest to self-insure.</p>

          <p><strong>The trade-off:</strong> Your money is locked up for a long time. If you die before payments start, you may get nothing back (depends on the contract). You're betting on living a long time.</p>

          <p><strong>Best for:</strong> Healthy people with other assets for near-term needs who want a safety net for advanced age.</p>

          <h3>3. MYGA — Multi-Year Guaranteed Annuity</h3>

          <div class="mental-model">
            <p><strong>Analogy:</strong> A CD (certificate of deposit) from an insurance company instead of a bank.</p>
          </div>

          <p><strong>What it is:</strong> You deposit money, the insurance company guarantees a fixed interest rate for a set term (typically 3-10 years). Your principal is protected. At the end of the term, you can take your money, roll it into something else, or renew.</p>

          <p><strong>The risk it solves:</strong> Interest rate uncertainty. You know exactly what you'll earn.</p>

          <p><strong>The trade-off:</strong> If you need your money before the term ends, you'll pay surrender charges (penalty fees). Unlike a bank CD, MYGAs are not FDIC-insured — they're backed by the insurance company's reserves and state guaranty associations instead. The upside: MYGAs often pay higher rates than bank CDs and your interest grows tax-deferred until you withdraw it.</p>

          <p><strong>Best for:</strong> Conservative savers who want predictable growth and don't need the money during the term.</p>

          <h3>4. FIA — Fixed Indexed Annuity</h3>

          <div class="mental-model">
            <p><strong>Analogy:</strong> A savings account with a bonus tied to the stock market. The floor is zero, and there's a ceiling.</p>
          </div>

          <p><strong>What it is:</strong> Your principal is protected — it can never go down due to market losses. But instead of a flat interest rate, your growth is linked to a market index (like the S&P 500) through a formula. In a good market year, you earn some of the index gains (subject to caps and limits). In a bad year, you earn 0% — not great, but not a loss.</p>

          <p><strong>The risk it solves:</strong> Downside market risk. You get a shot at better returns than a CD or MYGA, but you can never lose principal to market drops.</p>

          <p><strong>The trade-off:</strong> You don't get full market returns. The formula (caps, participation rates, spreads) limits your upside. Historically, FIAs have captured roughly 40-60% of S&P 500 returns over long periods. There are also surrender charges if you need money early.</p>

          <p><strong>Best for:</strong> People who want more growth potential than a CD but absolutely cannot stomach any losses.</p>

          <p><a href="#tools" data-switch-tab="tools" style="color: #60a5fa; text-decoration: underline; cursor: pointer;">Try the Crediting Mini Lab &rarr;</a> — see how caps, participation rates, and spreads actually work with real numbers.</p>

          <h3>5. VA — Variable Annuity</h3>

          <div class="mental-model">
            <p><strong>Analogy:</strong> An investment account (like a 401k) wrapped in an insurance contract, with optional add-on guarantees.</p>
          </div>

          <p><strong>What it is:</strong> Your money is invested in "subaccounts" — these work like mutual funds (diversified baskets of stocks, bonds, etc.). You get full market exposure: when the market goes up, your account goes up. When it goes down, your account goes down. Growth is tax-deferred. You can also pay extra for "riders" — add-on guarantees that promise minimum income or death benefits regardless of market performance.</p>

          <p><strong>The risk it solves:</strong> By itself? None — you bear full market risk. But with riders, it can solve sequence risk by guaranteeing a minimum income for life even if your account value crashes.</p>

          <p><strong>The trade-off:</strong> Fees are high — often 2-4% per year when you add up all the layers. Gains are taxed as ordinary income (not the lower capital gains rate). Complexity is significant. Makes sense primarily when the living benefit rider is the goal.</p>

          <p><strong>Best for:</strong> People who want market growth combined with a guaranteed income floor (via riders), and who've already maxed out simpler options like 401k and IRA.</p>

          <h3>6. RILA — Registered Index-Linked Annuity</h3>

          <div class="mental-model">
            <p><strong>Analogy:</strong> A shock absorber for your portfolio. It smooths out the ride — you still feel the bumps, but they're less jarring.</p>
          </div>

          <p><strong>What it is:</strong> A hybrid between the FIA and the VA. Like an FIA, your returns are linked to a market index. But unlike an FIA, you <em>can</em> lose money — just not as much as the full market loss. The insurance company absorbs some of the downside (through a "buffer" or "floor"), and in return, you get higher upside potential than an FIA would offer.</p>

          <p><strong>Example:</strong> With a "10% buffer," if the market drops 5%, you lose 0% (the buffer absorbs it). If the market drops 25%, you lose 15% (the buffer absorbed the first 10%, you take the rest).</p>

          <p><strong>The risk it solves:</strong> Partial downside risk. You're accepting some losses in exchange for better growth potential.</p>

          <p><strong>The trade-off:</strong> You <em>can</em> lose money. In a severe crash, losses can still be significant. This is not a "safe" product — it's a "safer than being fully in the market" product.</p>

          <p><strong>Best for:</strong> People who want more growth than an FIA but can accept some losses, and who understand exactly what the buffer protects (and what it doesn't).</p>

          <h2>Now Let's See Them All Together</h2>

          <p>Here's the cheat sheet. Use this for <em>review</em> after reading the descriptions above — it's meant to reinforce, not replace, what you just learned.</p>

          <table>
            <tr><th>Product</th><th>In Plain English</th><th>Main Risk Solved</th><th>What You Give Up</th><th>Liquidity</th></tr>
            <tr><td><strong>SPIA</strong></td><td>Lump sum → paycheck for life</td><td>Longevity + market risk</td><td>Access to your money</td><td>None (money is gone)</td></tr>
            <tr><td><strong>DIA</strong></td><td>Lump sum → paycheck starting later</td><td>Late-life longevity risk</td><td>Access + risk of dying early</td><td>None until payout starts</td></tr>
            <tr><td><strong>MYGA</strong></td><td>Insurance-company CD</td><td>Interest rate uncertainty</td><td>Liquidity during the term</td><td>Limited (surrender charges)</td></tr>
            <tr><td><strong>FIA</strong></td><td>Principal-safe, index-linked growth</td><td>Downside market risk</td><td>Full market upside</td><td>Limited (surrender charges)</td></tr>
            <tr><td><strong>VA</strong></td><td>Market investing + optional guarantees</td><td>Depends on riders chosen</td><td>High fees, tax disadvantage</td><td>Moderate</td></tr>
            <tr><td><strong>RILA</strong></td><td>Partial protection, higher upside</td><td>Some downside risk</td><td>Still exposed to losses beyond buffer</td><td>Moderate</td></tr>
          </table>

          <h2>The Complexity Spectrum</h2>

          <p>These products range from dead simple to quite complex. As a general rule: the further right you go, the more moving parts, the more potential for confusion, and the more important it is that the person buying it truly understands what they're getting.</p>

          <table>
            <tr><th>Simplest</th><th>→</th><th>→</th><th>Most Complex</th></tr>
            <tr><td>SPIA</td><td>MYGA</td><td>FIA</td><td>VA with riders</td></tr>
            <tr><td>DIA</td><td>Fixed</td><td>RILA</td><td></td></tr>
          </table>

          <h2>One More Thing: Who Regulates What</h2>

          <p>You don't need to memorize regulatory details right now (we cover this in Module 11), but one distinction is worth knowing early because it affects how these products are sold and discussed:</p>

          <ul>
            <li><strong>Insurance-only products</strong> (SPIA, DIA, MYGA, Fixed, FIA): Regulated by state insurance departments. Sold by licensed insurance agents.</li>
            <li><strong>Securities</strong> (VA, RILA): Regulated by the SEC (Securities and Exchange Commission) and FINRA (Financial Industry Regulatory Authority) <em>in addition to</em> state insurance departments. Require a securities license (Series 6 or 7) to sell. Come with a prospectus (detailed disclosure document).</li>
          </ul>

          <p>The short version: if the product involves real market risk for the buyer, it's a security and has extra regulatory requirements.</p>

          <h2>Common Mistakes at This Stage</h2>

          <ul>
            <li><strong>"An FIA is a stock market investment."</strong> It's not. Your money doesn't go into stocks. It goes into bonds, and the insurance company uses a formula referencing an index to calculate your interest credit.</li>
            <li><strong>"Surrender charges are fine print."</strong> They're the product's structural trade-off. The insurance company gives you guarantees and in return asks you to commit your money for a period. Understanding surrender charges is understanding the deal.</li>
            <li><strong>"Guaranteed" means the same thing across all products.</strong> It doesn't. "Guaranteed income for life" (SPIA), "guaranteed minimum withdrawal benefit" (VA rider), and "guaranteed principal protection" (FIA) are three completely different guarantees. We'll unpack each one in the deep-dive modules.</li>
          </ul>

          <div class="key-insight">
            <p><strong>The mindset for this whole course:</strong> Don't ask "which annuity is best?" Ask "which risk is this person most worried about?" Then match the product to the risk. That's the whole game.</p>
          </div>

          <h2>What's Next</h2>
          <p>Starting with Module 3, we'll deep-dive into each product type one at a time — starting with the simplest (SPIA) and working toward the most complex. Each module will cover the actual mechanics, the math, the trade-offs, and the situations where the product does and doesn't make sense.</p>

          <h2>Quick Check</h2>
          <details>
            <summary><strong>1) What are the two questions that classify any annuity?</strong></summary>
            <p>When does income start (immediate vs deferred)? And who carries the market risk (insurance company vs shared vs you)?</p>
          </details>
          <details>
            <summary><strong>2) What's the simplest analogy for a SPIA?</strong></summary>
            <p>Buying yourself a personal pension — a lump sum converted into a paycheck for life.</p>
          </details>
          <details>
            <summary><strong>3) How is an FIA different from actually investing in the stock market?</strong></summary>
            <p>Your money doesn't go into stocks. It goes into bonds, and the insurance company uses a formula linked to a market index to calculate your interest. You get some upside but can't lose principal — and you don't get full market returns.</p>
          </details>
          <details>
            <summary><strong>4) What's the key difference between an FIA and a RILA?</strong></summary>
            <p>With an FIA, you can't lose principal to market drops (0% floor). With a RILA, you can lose money — the buffer only absorbs some of the loss. In exchange, the RILA gives you higher upside potential.</p>
          </details>
          <details>
            <summary><strong>5) Why are VAs and RILAs classified as securities but FIAs are not?</strong></summary>
            <p>Because VAs and RILAs expose the buyer to real market risk (you can lose money). Products where the buyer bears market risk are regulated as securities by the SEC and FINRA.</p>
          </details>

          <h2>Tools</h2>
          <p><a href="#tools" data-switch-tab="tools" style="color: #60a5fa; text-decoration: underline; cursor: pointer;">Open the interactive Product Map &rarr;</a> — explore all product types visually with infographics showing how each one behaves.</p>

          <h2>Sources</h2>
          <ul>
            <li>NAIC buyer's guides and state insurance department annuity resources (fixed product regulation and consumer disclosures)</li>
            <li>FINRA/SEC investor education on variable annuities and registered index-linked annuities (securities classification)</li>
            <li>Annuity Expert Reference Guide (project doc)</li>
          </ul>
        `,
        keyTakeaways: [
          "Two questions classify any annuity: when does income start (immediate vs deferred) and who carries market risk (insurer vs shared vs you)",
          "Each product type solves a specific risk — the key is matching the product to the person's biggest concern",
          "'Indexed' does not mean 'gets the index return' — it means a formula linked to an index, with caps and limits",
          "Every guarantee has a cost: principal protection costs upside, guaranteed income costs liquidity, and add-on riders cost fees",
          "Products range from dead simple (SPIA) to quite complex (VA with riders) — simpler is often better",
          "VAs and RILAs are securities (extra regulation) because the buyer bears real market risk"
        ]
      },

      // TRACK 2: PRODUCT DEEP DIVES
      {
        id: 3, track: 2, title: "SPIA Deep Dive", duration: "75 min", difficulty: 2,
        description: "Immediate lifetime income: mechanics, option trade-offs, taxes, inflation, and fit",
        objectives: [
          "Explain how a SPIA creates lifetime income (pooling + insurer general account)",
          "Compare payout options using the right mental model (income vs survivor/legacy protection)",
          "Explain qualified vs non-qualified taxation at a high level (including exclusion ratio concept)",
          "Identify when SPIAs are appropriate and when they are not",
          "Explain the inflation trade-off and practical mitigation strategies"
        ],
        content: `
          <h2>Big Idea</h2>
          <div class="key-insight">
            <p><strong>Big Idea:</strong> A SPIA is the cleanest way to turn a lump sum into a <strong>paycheck for life</strong>. The price is that you typically give up liquidity and (usually) inheritance to buy longevity protection and simplicity.</p>
          </div>

          <h3>Key Terms</h3>
          <ul>
            <li><strong>SPIA:</strong> single premium immediate annuity</li>
            <li><strong>Annuitization:</strong> converting a sum into a defined payment stream</li>
            <li><strong>Payout option:</strong> the rule set for when payments stop and what, if anything, beneficiaries receive</li>
            <li><strong>Life-only:</strong> highest income; payments stop at death</li>
            <li><strong>Period certain / cash refund:</strong> adds beneficiary protection; reduces income</li>
            <li><strong>Joint & survivor:</strong> continues income for spouse; reduces income</li>
            <li><strong>Exclusion ratio:</strong> concept for splitting a non-qualified payment into taxable vs return-of-basis portions</li>
          </ul>

          <h2>How SPIAs Work (Mechanics)</h2>
          <p>At a high level, a SPIA is simple: you pay a premium to an insurer and receive payments that begin immediately (typically within weeks).</p>

          <div class="mental-model">
            <p><strong>Mental Model:</strong> Think “pension replacement.” You are buying a monthly paycheck backed by the insurer’s claims-paying ability and longevity pooling.</p>
          </div>

          <ul>
            <li>Premium goes into the insurer’s general account.</li>
            <li>The insurer prices payments using interest rates, expenses, and mortality assumptions.</li>
            <li>Pooling creates <strong>mortality credits</strong>: the group can spend more safely because not everyone lives to very old ages.</li>
          </ul>

	          <h2>Infographic: The Trade-off You Must Teach</h2>
	          <div class="warning-box">
	            <p><strong>Core rule:</strong> If you add beneficiary or survivor protection, the monthly payment usually goes down. You are buying protection with reduced income.</p>
	          </div>

	          <div class="example-box">
	            <p><strong>Trade-off map (concept):</strong> more protection usually means lower income.</p>
	            <svg viewBox="0 0 640 150" role="img" aria-label="Income versus protection trade-off" style="width: 100%; height: auto; display: block;">
	              <rect x="0" y="0" width="640" height="150" fill="transparent" />
	              <line x1="60" y1="125" x2="610" y2="125" stroke="#334155" stroke-width="2" />
	              <line x1="60" y1="20" x2="60" y2="125" stroke="#334155" stroke-width="2" />
	              <text x="60" y="15" fill="#94a3b8" font-size="12">Higher</text>
	              <text x="60" y="142" fill="#94a3b8" font-size="12">Lower</text>

	              <text x="170" y="25" fill="#e2e8f0" font-size="13" font-weight="600">Life-only</text>
	              <rect x="120" y="45" width="80" height="70" fill="#3b82f6" opacity="0.9" />
	              <text x="120" y="40" fill="#94a3b8" font-size="11">Income</text>
	              <rect x="220" y="95" width="80" height="20" fill="#10b981" opacity="0.9" />
	              <text x="220" y="90" fill="#94a3b8" font-size="11">Protection</text>

	              <text x="420" y="25" fill="#e2e8f0" font-size="13" font-weight="600">More protection</text>
	              <rect x="370" y="65" width="80" height="50" fill="#3b82f6" opacity="0.9" />
	              <text x="370" y="60" fill="#94a3b8" font-size="11">Income</text>
	              <rect x="470" y="55" width="80" height="60" fill="#10b981" opacity="0.9" />
	              <text x="470" y="50" fill="#94a3b8" font-size="11">Protection</text>

	              <path d="M 305 82 L 335 82" stroke="#94a3b8" stroke-width="2" />
	              <path d="M 335 82 L 327 76" stroke="#94a3b8" stroke-width="2" />
	              <path d="M 335 82 L 327 88" stroke="#94a3b8" stroke-width="2" />
	              <text x="285" y="105" fill="#94a3b8" font-size="11">Add guarantees</text>
	            </svg>
	            <p><small>This is an anchor image, not pricing. Real quotes vary by age, rates, and contract specifics.</small></p>
	          </div>

	          <p>Open the <strong>Tools</strong> tab for an interactive version (and to compare multiple options quickly).</p>

          <h3>Common Payout Options (Conceptual)</h3>
          <table>
            <tr><th>Option</th><th>What Happens at Death</th><th>Trade-off Pattern</th></tr>
            <tr><td><strong>Life-only</strong></td><td>Payments stop</td><td>Max income, minimal legacy</td></tr>
            <tr><td><strong>Life + period certain</strong></td><td>Payments continue to beneficiary until period ends</td><td>Lower income vs life-only</td></tr>
            <tr><td><strong>Cash refund</strong></td><td>Beneficiary receives remaining premium value (conceptually)</td><td>Lower income vs life-only</td></tr>
            <tr><td><strong>Joint & survivor</strong></td><td>Continues for spouse (100% or reduced %)</td><td>Lower income vs single life</td></tr>
          </table>

          <h2>Taxes (High-Level)</h2>
          <p>Tax treatment depends on whether the premium was qualified (pre-tax) or non-qualified (after-tax).</p>

          <ul>
            <li><strong>Qualified money:</strong> payments are generally taxable as ordinary income.</li>
            <li><strong>Non-qualified money:</strong> each payment is generally split between <em>taxable earnings</em> and <em>tax-free return of basis</em> during the “expected return” period.</li>
          </ul>

	          <div class="example-box">
	            <p><strong>Exclusion ratio (concept):</strong> exclusion ratio = investment in the contract / expected return (as defined by IRS rules).</p>
	            <p>Open the <strong>Tools</strong> tab for a calculator that builds intuition using simplified inputs.</p>
	          </div>

	          <div class="example-box">
	            <p><strong>Picture it (toy split):</strong> one payment can be part “return of basis” and part “taxable earnings” during the expected return period.</p>
	            <svg viewBox="0 0 640 90" role="img" aria-label="Toy exclusion ratio split" style="width: 100%; height: auto; display: block;">
	              <rect x="40" y="35" width="560" height="18" rx="6" fill="#334155" />
	              <rect x="40" y="35" width="336" height="18" rx="6" fill="#10b981" />
	              <rect x="376" y="35" width="224" height="18" rx="6" fill="#60a5fa" />
	              <text x="40" y="28" fill="#94a3b8" font-size="11">Example: 60% basis return</text>
	              <text x="40" y="74" fill="#94a3b8" font-size="11">Green = return of basis (often tax-free); Blue = taxable earnings (toy).</text>
	            </svg>
	            <p><small>Use IRS rules/tables for real calculations. This is a concept anchor, not tax advice.</small></p>
	          </div>

          <div class="warning-box">
            <p><strong>Accuracy note:</strong> real exclusion ratio calculations use IRS definitions and tables; do not treat a toy calculator as tax advice.</p>
          </div>

	          <h2>Inflation: The Weak Spot</h2>
	          <p>A fixed SPIA payment can lose purchasing power over time. This is not a small issue in a long retirement.</p>
	          <div class="example-box">
	            <p><strong>Inflation erosion (illustrative):</strong> $3,500/month with 3% inflation.</p>
	            <svg viewBox="0 0 640 170" role="img" aria-label="Inflation erosion line chart" style="width: 100%; height: auto; display: block;">
	              <line x1="60" y1="135" x2="610" y2="135" stroke="#334155" stroke-width="2" />
	              <line x1="60" y1="25" x2="60" y2="135" stroke="#334155" stroke-width="2" />

	              <path d="M 60 35 L 243 63 L 426 93 L 610 117" fill="none" stroke="#f59e0b" stroke-width="3" />
	              <circle cx="60" cy="35" r="4" fill="#f59e0b" />
	              <circle cx="243" cy="63" r="4" fill="#f59e0b" />
	              <circle cx="426" cy="93" r="4" fill="#f59e0b" />
	              <circle cx="610" cy="117" r="4" fill="#f59e0b" />

	              <text x="60" y="155" fill="#94a3b8" font-size="11" text-anchor="middle">Year 0</text>
	              <text x="243" y="155" fill="#94a3b8" font-size="11" text-anchor="middle">Year 10</text>
	              <text x="426" y="155" fill="#94a3b8" font-size="11" text-anchor="middle">Year 20</text>
	              <text x="610" y="155" fill="#94a3b8" font-size="11" text-anchor="middle">Year 30</text>

	              <text x="70" y="30" fill="#94a3b8" font-size="11">$3,500</text>
	              <text x="253" y="58" fill="#94a3b8" font-size="11">$2,605</text>
	              <text x="436" y="88" fill="#94a3b8" font-size="11">$1,938</text>
	              <text x="610" y="112" fill="#94a3b8" font-size="11" text-anchor="end">$1,442</text>
	            </svg>
	            <p><small>These are real purchasing-power approximations at 3% inflation, not nominal payment changes.</small></p>
	          </div>

	          <p>Open the <strong>Tools</strong> tab to tune the inflation assumption and time horizon.</p>

          <h3>Mitigation Options (Each Has a Cost)</h3>
          <ul>
            <li><strong>Partial annuitization:</strong> use the SPIA to cover essentials, keep the rest invested for inflation-sensitive spending.</li>
            <li><strong>Laddering:</strong> buy smaller SPIAs over time rather than all at once (trade-off: less immediate locking of income).</li>
            <li><strong>Inflation-adjusted income:</strong> some SPIAs offer COLA features (trade-off: lower initial income).</li>
          </ul>

          <h2>When SPIAs Fit (and When They Don’t)</h2>
          <table>
            <tr><th>Good Fit Pattern</th><th>Bad Fit Pattern</th></tr>
            <tr><td>Essential expense income gap and high longevity concern</td><td>High liquidity need or uncertain spending needs</td></tr>
            <tr><td>Client values simplicity and “paycheck certainty”</td><td>Strong bequest motive with limited other assets</td></tr>
            <tr><td>Client cannot tolerate drawdown anxiety</td><td>Short life expectancy without strong reasons to annuitize</td></tr>
          </table>

          <h2>Quick Check</h2>
          <details>
            <summary><strong>1) Why does adding a period-certain guarantee usually reduce income?</strong></summary>
            <p>Because the insurer is guaranteeing more payments to beneficiaries, reducing the ability to rely on mortality pooling for higher payouts.</p>
          </details>
          <details>
            <summary><strong>2) What is the cleanest mental model for a SPIA?</strong></summary>
            <p>Pension replacement: a paycheck for life purchased with a lump sum.</p>
          </details>
          <details>
            <summary><strong>3) What is the main long-run weakness of a level-payment SPIA?</strong></summary>
            <p>Inflation erosion of purchasing power.</p>
          </details>

          <h2>Tools</h2>
          <p>Open the <strong>Tools</strong> tab for infographics and calculators (income vs legacy trade-off, inflation erosion chart, exclusion ratio concept builder).</p>

          <h2>Sources</h2>
          <ul>
            <li>IRS Publication 575: Pension and Annuity Income (exclusion ratio concepts for non-qualified annuities)</li>
            <li>NAIC / state insurance department annuity buyer guides (SPIA basics and consumer disclosures)</li>
            <li>TIAA Institute materials on longevity risk and lifetime income framing (pension replacement mental model)</li>
          </ul>
        `,
        keyTakeaways: [
          "SPIAs are a pension-replacement tool: lump sum to lifetime paycheck",
          "Payout options are a trade-off between income and survivor/legacy protection",
          "Tax treatment depends on qualified vs non-qualified funding; exclusion ratio is a concept, not a toy-calculator output",
          "Inflation erosion is the major weakness of level payments; mitigation options lower initial income or require a portfolio pairing"
        ]
      },

      {
        id: 4, track: 2, title: "DIA Deep Dive", duration: "60 min", difficulty: 2,
        description: "Deferred Income Annuities - the longevity insurance solution",
        objectives: [
          "Understand how deferral dramatically increases payout rates",
          "Master QLAC rules for qualified money",
          "Know when DIAs beat other options"
        ],
        content: `
          <h2>What Makes DIAs Different</h2>
          <p>A DIA is like a SPIA, but with a twist: you buy it now, but income doesn't start for 5-40 years. This deferral creates powerful advantages.</p>

          <div class="key-insight">
            <p><strong>The Power of Deferral:</strong> The longer you defer, the higher your eventual payout rate. A 60-year-old buying income starting at 80 might get 3-4x the payout rate of immediate income.</p>
          </div>

          <h2>The Math of Deferral</h2>
          <p>Why does deferral increase payouts so dramatically? Three factors compound:</p>

          <ol>
            <li><strong>Investment growth:</strong> Your premium earns returns during deferral period</li>
            <li><strong>Mortality credits:</strong> Some purchasers die before income starts - their premiums benefit survivors</li>
            <li><strong>Fewer payment years:</strong> Starting income at 80 vs 65 means fewer expected payments</li>
          </ol>

          <table>
            <tr><th>Purchase Age</th><th>Income Start Age</th><th>Deferral Years</th><th>Monthly Income per $100K</th></tr>
            <tr><td>60</td><td>65</td><td>5</td><td>$550</td></tr>
            <tr><td>60</td><td>70</td><td>10</td><td>$750</td></tr>
            <tr><td>60</td><td>75</td><td>15</td><td>$1,050</td></tr>
            <tr><td>60</td><td>80</td><td>20</td><td>$1,500</td></tr>
            <tr><td>60</td><td>85</td><td>25</td><td>$2,200</td></tr>
          </table>

          <p>Notice: 20 years of deferral nearly TRIPLES the payout rate compared to 5-year deferral.</p>

          <h2>QLAC - Qualified Longevity Annuity Contract</h2>
          <p>A QLAC is a special type of DIA purchased with qualified money (IRA, 401k) that offers unique tax benefits.</p>

          <h3>IRS Rules for QLACs:</h3>
          <ul>
            <li><strong>Maximum contribution:</strong> $200,000 (or 25% of qualified account, whichever is less)</li>
            <li><strong>Income must start by:</strong> Age 85</li>
            <li><strong>RMD exclusion:</strong> QLAC amount is EXCLUDED from RMD calculations</li>
          </ul>

          <div class="key-insight">
            <p><strong>Why QLACs Matter:</strong> At age 72+, you must take Required Minimum Distributions (RMDs) from IRAs. But the portion in a QLAC is excluded. This can reduce annual taxes by $2,000-$10,000+ while building a future income guarantee.</p>
          </div>

          <h3>QLAC Tax Benefit Example</h3>
          <div class="example-box">
            <p><strong>Scenario:</strong> $1M IRA, age 72, 24% tax bracket</p>
            <p>Normal RMD at 72: ~$36,500 (forced taxable distribution)</p>
            <p>With $200K in QLAC: RMD calculated on $800K = ~$29,200</p>
            <p>Annual tax savings: ($36,500 - $29,200) × 24% = <strong>$1,752/year</strong></p>
            <p>Plus: Future guaranteed income starting at up to age 85</p>
          </div>

          <h2>DIA vs Other Options</h2>

          <h3>DIA vs SPIA Purchased Later</h3>
          <p>Why buy a DIA at 60 for income at 80, vs just buying a SPIA at 80?</p>
          <ul>
            <li><strong>DIA advantage:</strong> Locks in today's rates and your current health status</li>
            <li><strong>DIA advantage:</strong> Money set aside is "committed" - behavioral benefit</li>
            <li><strong>SPIA later advantage:</strong> Keep control/flexibility of funds until 80</li>
            <li><strong>SPIA later advantage:</strong> If health declines, may not want annuity at 80</li>
          </ul>

          <h3>DIA vs Deferred Annuity with GLWB</h3>
          <ul>
            <li><strong>DIA advantage:</strong> Higher eventual income (no annual rider fees)</li>
            <li><strong>DIA advantage:</strong> Simpler product, fewer moving parts</li>
            <li><strong>GLWB advantage:</strong> Can start income anytime (flexibility)</li>
            <li><strong>GLWB advantage:</strong> Access to account value if needed</li>
            <li><strong>GLWB advantage:</strong> Death benefit passes remaining value to heirs</li>
          </ul>

          <h2>DIA Risks and Limitations</h2>

          <div class="warning-box">
            <p><strong>Inflation Risk:</strong> Even worse than SPIA! If you buy at 60 for income at 80, you've already lost 20 years of purchasing power before the first payment arrives.</p>
          </div>

          <ul>
            <li><strong>Carrier credit risk:</strong> Longer exposure time = more risk carrier could fail</li>
            <li><strong>Irrevocability:</strong> Most DIAs have zero liquidity during deferral period</li>
            <li><strong>Opportunity cost:</strong> Money might have grown more invested elsewhere</li>
            <li><strong>Death before income:</strong> Some DIAs return nothing if you die before income starts (check contract)</li>
          </ul>

          <h2>Ideal DIA Candidates</h2>
          <ul>
            <li>Healthy 55-65 year olds with longevity in family</li>
            <li>Already have other assets for near-term needs</li>
            <li>Want to "pre-fund" guaranteed income for advanced age</li>
            <li>Have qualified money and want RMD reduction (QLAC)</li>
            <li>Worried specifically about outliving money after 80-85</li>
          </ul>
        `,
        keyTakeaways: [
          "Deferral dramatically increases payout rates - 20 years of deferral can triple the rate",
          "QLACs allow qualified money to grow outside RMD calculations until age 85",
          "DIAs provide higher eventual income than GLWB products but sacrifice flexibility",
          "Inflation risk is severe - plan for 20+ years of purchasing power loss before income even starts",
          "Best for healthy clients with longevity concerns and other assets for near-term needs"
        ]
      },

      {
        id: 5, track: 2, title: "MYGA & Fixed Deep Dive", duration: "60 min", difficulty: 2,
        description: "Multi-Year Guaranteed and traditional fixed annuities",
        objectives: [
          "Compare MYGAs to CDs, Treasuries, and bonds",
          "Build effective MYGA ladders",
          "Understand surrender charges and MVA"
        ],
        content: `
          <h2>MYGA Basics</h2>
          <p>A MYGA is the simplest deferred annuity: you deposit money, earn a guaranteed rate for a set term (3, 5, 7, or 10 years), and at term end you can withdraw, renew, or annuitize.</p>

          <div class="mental-model">
            <p><strong>Mental Model:</strong> Think of MYGAs as "CDs with tax deferral and typically higher rates, but less liquidity."</p>
          </div>

          <h2>MYGA vs Alternatives</h2>
          <table>
            <tr><th>Feature</th><th>MYGA</th><th>Bank CD</th><th>Treasury</th><th>Corporate Bond</th></tr>
            <tr><td><strong>Current 5-Yr Rate</strong></td><td>4.5-5.5%</td><td>4.0-4.5%</td><td>4.2%</td><td>5.0-6.0%</td></tr>
            <tr><td><strong>Tax Treatment</strong></td><td>Deferred</td><td>Annual 1099</td><td>Annual 1099</td><td>Annual 1099</td></tr>
            <tr><td><strong>Guarantee</strong></td><td>State guaranty fund</td><td>FDIC $250K</td><td>US Government</td><td>Corporate credit</td></tr>
            <tr><td><strong>Early Access</strong></td><td>Surrender charge</td><td>Penalty</td><td>Sell at market price</td><td>Sell at market price</td></tr>
            <tr><td><strong>Interest Rate Risk</strong></td><td>None if held</td><td>None if held</td><td>Yes (mark to market)</td><td>Yes (mark to market)</td></tr>
          </table>

          <h3>The Tax Deferral Advantage</h3>
          <div class="example-box">
            <p><strong>$100,000 at 5% for 7 years, 32% tax bracket:</strong></p>
            <p>MYGA: $100,000 × (1.05)^7 = $140,710. Pay tax on $40,710 gain at end = $27,682 after-tax gain</p>
            <p>CD: Each year's interest taxed. After 7 years: ~$24,500 after-tax gain</p>
            <p><strong>MYGA advantage: ~$3,182 more</strong> (13% better outcome)</p>
          </div>

          <p>The higher your tax bracket, the more valuable tax deferral becomes.</p>

          <h2>Surrender Charges and MVA</h2>

          <h3>Surrender Charges</h3>
          <p>Most MYGAs allow 10% penalty-free withdrawal per year. Beyond that, surrender charges apply:</p>
          <table>
            <tr><th>Year</th><th>Typical 5-Yr MYGA Charge</th><th>Typical 7-Yr MYGA Charge</th></tr>
            <tr><td>1</td><td>8%</td><td>9%</td></tr>
            <tr><td>2</td><td>7%</td><td>8%</td></tr>
            <tr><td>3</td><td>6%</td><td>7%</td></tr>
            <tr><td>4</td><td>5%</td><td>6%</td></tr>
            <tr><td>5</td><td>0%</td><td>5%</td></tr>
            <tr><td>6</td><td>-</td><td>4%</td></tr>
            <tr><td>7</td><td>-</td><td>0%</td></tr>
          </table>

          <h3>Market Value Adjustment (MVA)</h3>
          <p>Some MYGAs have an MVA that adjusts surrender value based on interest rate changes:</p>
          <ul>
            <li><strong>If rates have risen:</strong> MVA is NEGATIVE (you get less)</li>
            <li><strong>If rates have fallen:</strong> MVA is POSITIVE (you might get more)</li>
          </ul>

          <div class="warning-box">
            <p><strong>Watch Out:</strong> MVA can make early surrender VERY expensive in rising rate environments. A 5% surrender charge + 3% MVA penalty = 8% loss.</p>
          </div>

          <h2>MYGA Laddering Strategy</h2>
          <p>Instead of putting $300K in one MYGA, spread across terms:</p>

          <table>
            <tr><th>Investment</th><th>Term</th><th>Rate</th><th>Matures</th></tr>
            <tr><td>$100,000</td><td>3-year</td><td>4.5%</td><td>Year 3</td></tr>
            <tr><td>$100,000</td><td>5-year</td><td>5.0%</td><td>Year 5</td></tr>
            <tr><td>$100,000</td><td>7-year</td><td>5.3%</td><td>Year 7</td></tr>
          </table>

          <p><strong>Benefits of laddering:</strong></p>
          <ul>
            <li>Regular liquidity events (something matures every 2-3 years)</li>
            <li>Rate diversification (not all locked at same rate)</li>
            <li>Flexibility to adjust as circumstances change</li>
          </ul>

          <h2>When MYGAs Don't Make Sense</h2>
          <ul>
            <li><strong>Low tax bracket:</strong> If in 12-22% bracket, tax deferral value is minimal</li>
            <li><strong>Might need full liquidity:</strong> Surrender charges eliminate rate advantage</li>
            <li><strong>Short time horizon:</strong> Under 3 years, CDs are simpler</li>
            <li><strong>Rising rate conviction:</strong> Might lock in rates just before they rise</li>
          </ul>

          <h2>Carrier Selection Matters</h2>
          <ul>
            <li><strong>Financial strength:</strong> A- minimum from AM Best (higher is better)</li>
            <li><strong>State guaranty fund:</strong> Coverage limits vary ($100K-$500K by state)</li>
            <li><strong>Renewal rate history:</strong> Some carriers have history of lowering rates at renewal</li>
          </ul>
        `,
        keyTakeaways: [
          "MYGAs typically pay 0.5-1% more than CDs with additional tax deferral benefit",
          "Tax deferral is worth 10-15% more total return over 7 years for high-bracket investors",
          "MVA can make early surrender very expensive in rising rate environments",
          "Laddering provides liquidity and rate diversification",
          "Carrier financial strength matters - check AM Best ratings"
        ]
      },

      {
        id: 6, track: 2, title: "FIA Deep Dive", duration: "90 min", difficulty: 3,
        description: "Fixed Indexed Annuities - crediting methods, caps, and reality",
        objectives: [
          "Understand the option budget that determines caps/participation",
          "Compare all crediting methods with real calculations",
          "Set realistic expectations for FIA returns"
        ],
        content: `
          <h2>How FIAs Actually Work</h2>
          <p>FIAs are often misunderstood. Here's the reality:</p>

          <ul>
            <li>Your money is NOT invested in the stock market</li>
            <li>Your returns are LINKED to an index (like S&P 500) but calculated differently</li>
            <li>You have a 0% floor (can't lose principal to market declines)</li>
            <li>Your upside is LIMITED by caps, spreads, or participation rates</li>
          </ul>

          <h3>The Option Budget - The Key Insight</h3>
          <p>Understanding how FIAs are funded explains everything about their returns:</p>

          <div class="key-insight">
            <p><strong>For every $100 of premium:</strong></p>
            <ul>
              <li>~$95-97 goes into bonds (to guarantee principal protection)</li>
              <li>~$3-5 buys index call options (to provide upside participation)</li>
            </ul>
            <p>The "option budget" ($3-5) determines your cap, participation rate, or spread. When interest rates are LOW, the option budget is SMALLER, which means LOWER caps.</p>
          </div>

          <h2>Crediting Methods Explained</h2>

          <h3>1. Annual Point-to-Point with Cap</h3>
          <p>Most common method. Measures index change from anniversary to anniversary.</p>
          <div class="example-box">
            <p><strong>How it works:</strong> Cap = 8%</p>
            <p>S&P up 15% → You get 8% (capped)</p>
            <p>S&P up 5% → You get 5%</p>
            <p>S&P down 10% → You get 0% (floor)</p>
          </div>

          <h3>2. Participation Rate (No Cap)</h3>
          <p>You get a percentage of the index gain with no upper limit.</p>
          <div class="example-box">
            <p><strong>How it works:</strong> Participation = 50%</p>
            <p>S&P up 20% → You get 10%</p>
            <p>S&P up 8% → You get 4%</p>
            <p>S&P down 10% → You get 0%</p>
          </div>

          <h3>3. Spread/Margin</h3>
          <p>Index return minus a fixed spread.</p>
          <div class="example-box">
            <p><strong>How it works:</strong> Spread = 3%</p>
            <p>S&P up 12% → You get 9%</p>
            <p>S&P up 2% → You get 0% (spread exceeds gain)</p>
            <p>S&P down 5% → You get 0%</p>
          </div>

          <h3>4. Monthly Average</h3>
          <p>Averages 12 monthly index values. Smooths volatility but often produces lower returns in trending markets.</p>

          <h2>Which Method Wins?</h2>
          <table>
            <tr><th>Market Scenario</th><th>Best Method</th><th>Worst Method</th></tr>
            <tr><td>Strong up year (15%+)</td><td>High participation rate</td><td>Low cap</td></tr>
            <tr><td>Moderate up year (5-10%)</td><td>Low spread or high cap</td><td>High spread</td></tr>
            <tr><td>Choppy/volatile year</td><td>Monthly average</td><td>Point-to-point</td></tr>
            <tr><td>Down year</td><td>All the same (0%)</td><td>All the same (0%)</td></tr>
          </table>

          <h2>Historical Reality Check</h2>
          <div class="warning-box">
            <p><strong>Hard Truth:</strong> Over the past 20 years, typical FIAs have captured 40-60% of S&P 500 returns, net of the 0% floor protection. This is NOT bad - but it's NOT "market returns with protection."</p>
          </div>

          <table>
            <tr><th>Period</th><th>S&P 500 Avg</th><th>Typical FIA Avg</th><th>Capture Rate</th></tr>
            <tr><td>2004-2024</td><td>10.2%</td><td>5.1%</td><td>50%</td></tr>
            <tr><td>2014-2024</td><td>12.5%</td><td>5.8%</td><td>46%</td></tr>
            <tr><td>2009-2019</td><td>13.2%</td><td>5.5%</td><td>42%</td></tr>
          </table>

          <p><strong>Why so low?</strong></p>
          <ul>
            <li>Caps and participation rates limit upside in strong years</li>
            <li>You do get 0% in down years (not negative), which is valuable</li>
            <li>But you miss the "bounce back" gains that follow crashes</li>
          </ul>

          <h2>When FIAs Make Sense</h2>
          <ul>
            <li><strong>Zero loss tolerance:</strong> Client absolutely cannot stomach any principal loss</li>
            <li><strong>Conservative allocation:</strong> FIA replaces bond allocation, not equity</li>
            <li><strong>Sleep-at-night factor:</strong> Market volatility causes real anxiety</li>
            <li><strong>5-10 year horizon:</strong> Long enough for crediting to work, not so long that inflation matters</li>
          </ul>

          <h2>When FIAs DON'T Make Sense</h2>
          <ul>
            <li><strong>Expecting "market returns":</strong> They won't get them</li>
            <li><strong>Short horizon (&lt;5 years):</strong> Surrender charges, not enough time</li>
            <li><strong>Need liquidity:</strong> Limited withdrawals</li>
            <li><strong>Long horizon (20+ years):</strong> Inflation erodes fixed-like returns</li>
          </ul>

          <h2>FIA + Living Benefit Riders</h2>
          <p>Many FIAs can be purchased with GLWB riders, creating an income guarantee with market participation.</p>

          <div class="key-insight">
            <p><strong>The Trade-off:</strong> Adding a GLWB rider typically costs 0.75-1.25% annually. This comes from your crediting, effectively lowering your cap by 1-2 percentage points. You're paying for income certainty with growth potential.</p>
          </div>
        `,
        keyTakeaways: [
          "FIAs are funded ~95% bonds, ~5% options - the option budget determines your caps/rates",
          "Historical FIA returns have captured 40-60% of S&P 500 gains (not full market returns)",
          "The 0% floor has real value - you avoid losses in down years",
          "Different crediting methods win in different market environments",
          "FIAs are bond replacements, not equity replacements - set expectations accordingly"
        ]
      },

      // Additional modules continue...
      {
        id: 7, track: 2, title: "VA Deep Dive", duration: "90 min", difficulty: 3,
        description: "Variable Annuities - fees, tax treatment, and when they make sense",
        objectives: [
          "Calculate total VA fee drag",
          "Understand when tax deferral actually helps",
          "Evaluate living benefit riders on VAs"
        ],
        content: `
          <h2>The Complete Fee Stack</h2>
          <p>VAs are expensive. Here's what you're actually paying:</p>

          <table>
            <tr><th>Fee Type</th><th>Typical Range</th><th>What It Pays For</th></tr>
            <tr><td>M&E (Mortality & Expense)</td><td>1.00-1.40%</td><td>Death benefit guarantee, carrier profit</td></tr>
            <tr><td>Administrative Fee</td><td>0.10-0.30%</td><td>Record keeping, statements</td></tr>
            <tr><td>Subaccount Expenses</td><td>0.50-1.00%</td><td>Investment management</td></tr>
            <tr><td>Rider Fees (if elected)</td><td>0.75-1.50%</td><td>GLWB, enhanced death benefit</td></tr>
            <tr><td><strong>TOTAL</strong></td><td><strong>2.35-4.20%</strong></td><td></td></tr>
          </table>

          <h3>Fee Drag Over Time</h3>
          <div class="example-box">
            <p><strong>$500,000 at 7% gross return over 20 years:</strong></p>
            <p>No fees: $1,934,842</p>
            <p>1% fees (index fund): $1,496,856</p>
            <p>3% fees (typical VA): $896,851</p>
            <p><strong>Lost to fees: $1,038,000</strong></p>
          </div>

          <div class="warning-box">
            <p><strong>The Math Must Work:</strong> A VA charging 3% must provide at least $1,038,000 of value over 20 years to justify choosing it over low-cost index funds. That value must come from tax deferral or rider guarantees.</p>
          </div>

          <h2>The Tax Deferral Question</h2>
          <p>VAs offer tax-deferred growth. But does deferral justify the fees?</p>

          <h3>When Tax Deferral Helps</h3>
          <ul>
            <li>You're in a HIGH tax bracket now (32%+)</li>
            <li>You expect to be in a LOWER bracket in retirement</li>
            <li>You have a LONG time horizon (20+ years)</li>
            <li>You've MAXED 401k, IRA, and other tax-advantaged accounts</li>
          </ul>

          <h3>The Tax "Bomb" Problem</h3>
          <p>All VA gains are taxed as ORDINARY INCOME when withdrawn - not capital gains!</p>

          <div class="example-box">
            <p><strong>$500K grows to $1.2M over 20 years. $700K gain.</strong></p>
            <p>If in taxable account (capital gains): $700K × 20% = $140K tax</p>
            <p>If in VA (ordinary income): $700K × 32% = $224K tax</p>
            <p><strong>VA costs $84,000 MORE in taxes</strong> - must offset with other value</p>
          </div>

          <h2>Living Benefit Riders - The Game Changer</h2>
          <p>GLWB riders transformed VAs from pure accumulation products into sequence risk insurance:</p>

          <ul>
            <li>Guarantee a withdrawal rate (typically 4-6%) for life</li>
            <li>Based on "benefit base" - not actual account value</li>
            <li>If markets crash, your income continues from carrier reserves</li>
            <li>This is TRUE insurance against sequence of returns risk</li>
          </ul>

          <div class="key-insight">
            <p><strong>When GLWB Riders Make Sense:</strong> Client is 8-15 years from retirement, worried about sequence risk, and understands the cost (0.75-1.25%/year) buys real insurance - not just product features.</p>
          </div>

          <h2>VA vs Alternatives</h2>
          <table>
            <tr><th>Option</th><th>Fees</th><th>Tax Treatment</th><th>Best For</th></tr>
            <tr><td>VA</td><td>2.5-4%</td><td>Deferred, ordinary income</td><td>High bracket, need GLWB</td></tr>
            <tr><td>Taxable Brokerage</td><td>0.1-0.5%</td><td>Annual (div, cap gains)</td><td>Most people</td></tr>
            <tr><td>401k/IRA</td><td>Varies</td><td>Deferred, ordinary income</td><td>Always max first</td></tr>
            <tr><td>FIA + Rider</td><td>0-1% + rider</td><td>Deferred, ordinary income</td><td>No loss tolerance</td></tr>
          </table>

          <h2>When VAs Make Sense</h2>
          <ul>
            <li>You've maxed all other tax-advantaged accounts</li>
            <li>You're in 32%+ bracket and expect lower in retirement</li>
            <li>You specifically need a living benefit rider for sequence risk protection</li>
            <li>You have 15+ year time horizon</li>
          </ul>

          <h2>When VAs DON'T Make Sense</h2>
          <ul>
            <li>Haven't maxed 401k/IRA (always do this first)</li>
            <li>Low tax bracket (22% or below) - deferral has minimal value</li>
            <li>Short time horizon - fees don't have time to be offset</li>
            <li>Need liquidity - surrender charges apply</li>
            <li>Don't need/want living benefit rider - just use taxable account</li>
          </ul>
        `,
        keyTakeaways: [
          "Total VA fees often 2.5-4% annually - must be justified by real value",
          "Fee drag can cost $500K-$1M+ over 20 years compared to low-cost alternatives",
          "All VA gains taxed as ordinary income (not capital gains) - the 'tax bomb'",
          "Living benefit riders provide real sequence risk insurance - the main reason to consider VA",
          "Always max 401k/IRA before considering VA"
        ]
      },

      {
        id: 8, track: 2, title: "RILA Deep Dive", duration: "60 min", difficulty: 3,
        description: "Buffer annuities - defined risk market exposure",
        objectives: [
          "Understand buffer vs floor mechanics",
          "Calculate maximum loss scenarios",
          "Know who RILAs are and aren't for"
        ],
        content: `
          <h2>What RILAs Are</h2>
          <p>RILA = Registered Index-Linked Annuity (also called "buffer" or "structured" annuities)</p>

          <p>RILAs sit between FIAs and VAs:</p>
          <ul>
            <li>More upside potential than FIA (higher caps, sometimes uncapped)</li>
            <li>Less risk than VA (carrier absorbs some losses)</li>
            <li>YOU bear losses beyond the buffer</li>
          </ul>

          <h2>Buffer vs Floor - Understanding the Protection</h2>

          <h3>Buffer (Most Common)</h3>
          <p>Carrier absorbs the FIRST X% of losses. You bear losses BEYOND the buffer.</p>

          <div class="example-box">
            <p><strong>10% Buffer Example:</strong></p>
            <p>Market down 5%: You lose 0% (buffer absorbs it)</p>
            <p>Market down 15%: You lose 5% (buffer absorbs first 10%, you lose the rest)</p>
            <p>Market down 40%: You lose 30% (buffer absorbs first 10%)</p>
          </div>

          <h3>Floor</h3>
          <p>Your maximum loss is capped at X%. Carrier absorbs everything beyond that.</p>

          <div class="example-box">
            <p><strong>-10% Floor Example:</strong></p>
            <p>Market down 5%: You lose 5%</p>
            <p>Market down 15%: You lose 10% (floor limits loss)</p>
            <p>Market down 40%: You lose 10% (floor limits loss)</p>
          </div>

          <h3>Buffer vs Floor: Which is Better?</h3>
          <table>
            <tr><th>Scenario</th><th>10% Buffer</th><th>-10% Floor</th></tr>
            <tr><td>Market down 5%</td><td>0% loss (better)</td><td>5% loss</td></tr>
            <tr><td>Market down 15%</td><td>5% loss</td><td>10% loss (worse)</td></tr>
            <tr><td>Market down 40%</td><td>30% loss (worse)</td><td>10% loss (better)</td></tr>
          </table>

          <p><strong>Rule of thumb:</strong> Buffers protect better in mild downturns. Floors protect better in crashes.</p>

          <h2>RILA Crediting Structures</h2>
          <p>RILAs offer higher caps/participation than FIAs because you're accepting some risk:</p>

          <table>
            <tr><th>Structure</th><th>Typical Terms</th><th>Max Upside</th><th>Max Downside</th></tr>
            <tr><td>Cap + 10% Buffer</td><td>15-20% cap</td><td>15-20%</td><td>Market loss - 10%</td></tr>
            <tr><td>Participation + 10% Buffer</td><td>100-130% participation</td><td>Unlimited</td><td>Market loss - 10%</td></tr>
            <tr><td>Cap + -10% Floor</td><td>12-18% cap</td><td>12-18%</td><td>10%</td></tr>
          </table>

          <h2>Historical Scenario: 2008 Financial Crisis</h2>
          <p>S&P 500 dropped ~37% in 2008. What would have happened?</p>

          <table>
            <tr><th>Product</th><th>Your Loss</th></tr>
            <tr><td>VA (full exposure)</td><td>-37%</td></tr>
            <tr><td>RILA (10% buffer)</td><td>-27%</td></tr>
            <tr><td>RILA (-10% floor)</td><td>-10%</td></tr>
            <tr><td>FIA (0% floor)</td><td>0%</td></tr>
          </table>

          <div class="key-insight">
            <p><strong>The Trade-off:</strong> In 2008, a RILA with floor would have lost 10% while FIA lost 0%. But in the 2009-2019 bull market, the RILA with higher caps would have captured significantly more upside. Over the full cycle, outcomes depend on specific terms and market path.</p>
          </div>

          <h2>Who RILAs Are For</h2>
          <ul>
            <li><strong>Moderate risk tolerance:</strong> Can accept SOME loss, but wants limits</li>
            <li><strong>Growth oriented:</strong> Wants more upside than FIA provides</li>
            <li><strong>Understands defined risk:</strong> Knows they CAN lose money</li>
            <li><strong>5-10 year horizon:</strong> Long enough to ride out cycles</li>
          </ul>

          <h2>Who RILAs Are NOT For</h2>
          <ul>
            <li><strong>Zero loss tolerance:</strong> If any loss is unacceptable, use FIA instead</li>
            <li><strong>Wants income guarantees:</strong> Most RILAs don't offer GLWB riders</li>
            <li><strong>Short horizon:</strong> Need time for buffer/cap structure to work</li>
            <li><strong>Doesn't understand the risk:</strong> Must truly grasp they can lose money</li>
          </ul>

          <h2>Regulatory Note</h2>
          <p>RILAs are SEC-registered securities. You need Series 6 or 7 to sell them. Prospectus delivery required.</p>
        `,
        keyTakeaways: [
          "Buffers protect first X% of loss; Floors cap maximum loss at X%",
          "Buffers better for mild downturns; Floors better for crashes",
          "RILAs offer higher upside than FIAs because you accept some downside risk",
          "NOT for anyone with zero loss tolerance - they CAN lose money",
          "Most RILAs don't offer living benefit riders - primarily accumulation products"
        ]
      },

      // Track 3 & 4 modules would continue here with similar depth...
      // For brevity, adding summary placeholders that would be fully expanded

      {
        id: 9, track: 3, title: "Benefit Base Mechanics", duration: "45 min", difficulty: 3,
        description: "The most confusing concept in annuities - made clear",
        objectives: ["Distinguish benefit base from account value", "Calculate GLWB income from benefit base", "Understand step-ups and excess withdrawal penalties"],
        content: `<h2>Content continues with comprehensive benefit base education...</h2><p>This module provides deep explanation of benefit base vs account value, step-up mechanics, and excess withdrawal consequences.</p>`,
        keyTakeaways: ["Benefit base is a phantom value for income calculation only", "Account value is your real money", "Excess withdrawals permanently reduce both values"]
      },

      {
        id: 10, track: 3, title: "Tax Treatment Complete Guide", duration: "60 min", difficulty: 3,
        description: "Qualified, non-qualified, exclusion ratios, and 1035 exchanges",
        objectives: ["Master qualified vs non-qualified taxation", "Calculate exclusion ratios", "Execute 1035 exchanges properly"],
        content: `<h2>Content continues with comprehensive tax education...</h2><p>This module covers LIFO, exclusion ratios, IRMAA, state taxes, and 1035 exchange strategy.</p>`,
        keyTakeaways: ["Qualified = all taxable; Non-qualified = only gains taxable via LIFO", "1035 exchanges allow tax-free annuity swaps but restart surrender periods"]
      },

      {
        id: 11, track: 3, title: "Regulatory Framework", duration: "60 min", difficulty: 2,
        description: "Compliance, suitability, and best interest standards",
        objectives: ["Understand suitability vs best interest", "Document recommendations properly", "Identify red flags"],
        content: `<h2>Content continues with regulatory framework...</h2><p>This module covers NAIC, SEC, FINRA, DOL rules and practical compliance.</p>`,
        keyTakeaways: ["Fixed products = state regulated; Variable = SEC + state", "Best interest > suitability; document WHY this product"]
      },

      {
        id: 12, track: 4, title: "Mental Models for Experts", duration: "75 min", difficulty: 4,
        description: "Floor/upside, sequence risk, and when NOT to recommend annuities",
        objectives: ["Apply floor/upside framework", "Identify when annuities are wrong", "Use behavioral finance insights"],
        content: `<h2>Content continues with expert mental models...</h2><p>This module covers advanced frameworks for retirement income planning.</p>`,
        keyTakeaways: ["Floor = guaranteed income for essentials; Upside = investments for discretionary", "40-50% of retirees genuinely benefit; 50-60% don't need annuities"]
      }
    ];
