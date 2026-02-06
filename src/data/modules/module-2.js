export const module2 = {
  id: 2,
  track: 1,
  title: 'The Annuity Universe',
  description: 'A guided tour of every annuity type: what it does, who it\'s for, and how to tell them apart',
  duration: '60 min',
  difficulty: 2,
  objectives: [
    'Classify any annuity using two questions: when does income start, and who carries market risk',
    'Describe each major annuity type in plain language with an everyday analogy',
    'Match product types to the retirement risk they solve',
    'Recognize the spectrum from simplest to most complex'
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
    <p>Open the <strong>Tools</strong> tab for an interactive product map and a taxonomy selector wizard.</p>

    <h2>Sources</h2>
    <ul>
      <li>NAIC buyer's guides and state insurance department annuity resources (fixed product regulation and consumer disclosures)</li>
      <li>FINRA/SEC investor education on variable annuities and registered index-linked annuities (securities classification)</li>
      <li>Annuity Expert Reference Guide (project doc)</li>
    </ul>
  `,
  keyTakeaways: [
    'Two questions classify any annuity: when does income start (immediate vs deferred) and who carries market risk (insurer vs shared vs you)',
    'Each product type solves a specific risk — the key is matching the product to the person\'s biggest concern',
    '\'Indexed\' does not mean \'gets the index return\' — it means a formula linked to an index, with caps and limits',
    'Every guarantee has a cost: principal protection costs upside, guaranteed income costs liquidity, and add-on riders cost fees',
    'Products range from dead simple (SPIA) to quite complex (VA with riders) — simpler is often better',
    'VAs and RILAs are securities (extra regulation) because the buyer bears real market risk'
  ]
};
