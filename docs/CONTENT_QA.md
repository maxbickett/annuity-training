# Content QA Checklist (Annuity Training)

This repo is a training product. Treat content like code: it needs specs, tests, and source control.

## Accuracy Bar

- Claims with numbers (rates, probabilities, limits, adoption counts) must be:
  - Stated with a date qualifier (`as of 2026`, `historically`, `typical ranges`) OR framed as an illustrative example.
  - Tied to a primary/authoritative source (regulator, academic paper, insurer filing, NOLHGA/NAIC, SSA, IRS, etc.).
- Avoid false precision:
  - Prefer ranges and "about" language unless the source provides a specific figure.
  - Do not present product pricing (caps, payout rates, rider fees) as universal.
- Compliance hygiene:
  - Separate "what is legally required" vs "common practice".
  - Do not imply state guaranty association coverage is "insurance" or a selling point.
  - For regulations, include jurisdiction + date and expect change.

## Educational Design Bar

- Start with a single "Big Idea" (1–2 sentences).
- Chunk into 3–6 sections max.
- Each section includes:
  - A definition.
  - A worked example or concrete scenario.
  - One common misconception + correction.
- Use retrieval practice:
  - 3–5 "Check Your Understanding" prompts inside the lesson.
  - A quiz bank that targets common failure modes.
- Reduce cognitive load:
  - Avoid long paragraphs.
  - Prefer tables for comparisons and bullet lists for procedures.
  - Keep jargon to a minimum; define terms at first use.
- Make transfer explicit:
  - Include "Advisor Translation" (what to say, what not to say, what to document).

## UX/Presentation Bar

- Consistent headings:
  - `Big Idea`, `Key Terms`, `Why This Matters`, `Worked Example`, `Common Mistakes`, `Quick Check`, `Key Takeaways`, `Sources`.
- Visual callouts use the existing CSS classes:
  - `key-insight`, `warning-box`, `example-box`, `mental-model`.
- Sources list:
  - 3–8 items, prioritized by authority.
  - Link text is descriptive; no raw URLs.

