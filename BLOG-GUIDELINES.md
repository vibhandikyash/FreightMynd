# FreightMynd Blog Writing Guidelines

> Standard operating procedure for every blog post published on freightmynd.com.
> Follow these guidelines exactly. No exceptions unless explicitly approved.

---

## 1. Content Strategy Rules

### What to Write

- **Bottom-of-funnel first.** "How we automated X" posts convert 10-25x better than "what is X" posts. Prioritize implementation guides, comparison posts, and case study breakdowns over awareness content.
- **One post, one keyword.** Every post targets exactly one primary keyword. No post should compete with another post or a solution page for the same keyword.
- **Cluster architecture.** Every post belongs to a topic cluster (e.g., "customs automation") and must link to its pillar page (the solution page) and 2-3 sibling posts in the same cluster.
- **Original data wins.** Include proprietary data from real deployments (processing times, accuracy rates, cost reductions). Original research earns 67% more top-10 rankings than posts that summarize others' work.

### What NOT to Write

- Generic "what is freight forwarding" awareness posts with no differentiation
- Posts that cannibalize an existing solution page's primary keyword
- Thin posts under 1,500 words (they don't rank and they dilute authority)
- Posts without a clear search intent match (informational, commercial, or transactional)

---

## 2. Post Types and Word Counts

| Type | Word Count | Purpose | Example |
|------|-----------|---------|---------|
| **Pillar Guide** | 3,000-4,500 | Comprehensive coverage of a major topic. Ranks for head terms. | "Complete Guide to AI Automation for Freight Forwarding" |
| **How-To / Technical** | 1,800-2,500 | Step-by-step implementation or process explanation. Ranks for long-tail queries. | "How to Automate CargoWise Data Entry with AI" |
| **Comparison** | 1,500-2,000 | Honest evaluation of tools or approaches. Captures commercial intent. | "Best AI Tools for Freight Forwarders in 2026" |
| **Case Study Breakdown** | 1,500-2,000 | Deep dive into a specific deployment with real numbers. | "How a 4PL Control Tower Processes 300-Page Batches" |
| **Data/Benchmark** | 1,200-1,800 | Original research or benchmark data. Earns backlinks. | "Freight Document OCR Accuracy Benchmarks 2026" |

**Every word must earn its place.** Never pad for length. If you can say it in 1,800 words, don't write 3,000.

---

## 3. Frontmatter (Required Fields)

Every `.mdx` file must include this exact frontmatter structure:

```yaml
---
title: "Primary Keyword: Compelling Qualifier (Year)"  # Under 60 chars
description: "140-155 chars. Primary keyword + specific benefit + why read this."
publishDate: 2026-04-02
modifiedDate: 2026-04-02  # Update every time content is refreshed
author: "FreightMynd Team"
category: "Guides" | "Technical" | "Comparison" | "Case Study" | "Data"
tags: ["keyword1", "keyword2", "keyword3"]  # 3-6 tags
featured: true | false
readingTime: "X min read"  # Calculate: word count / 200
wordCount: XXXX
faq:
  - q: "Question phrased exactly as a user would type it?"
    a: "Direct answer in first sentence. Supporting detail after. Under 100 words."
  - q: "..."
    a: "..."
  # Minimum 5 FAQs per post
relatedSolutions:
  - "solution-slug-1"
  - "solution-slug-2"
  # 2-6 related solution slugs
relatedCaseStudies:
  - "case-study-slug"
  # 0-2 case study slugs
relatedIntegrations:
  - "integration-slug"
  # 0-2 integration slugs
---
```

### Title Rules
- Primary keyword appears in the first half of the title
- Under 60 characters (including `| FreightMynd` suffix added by Seo.astro)
- Includes a year qualifier where relevant (2026)
- No clickbait. No "you won't believe" or "shocking" language. Write for VP-level operations leaders.

### Meta Description Rules
- 140-155 characters. Not one character more.
- Primary keyword in the first 60 characters
- Includes a specific number or benefit ("60% time reduction", "zero manual entry")
- Ends with a reason to click, not a period trailing into nothing

---

## 4. Post Structure (Follow This Exactly)

Every blog post follows this structure in order:

### 4.1 Key Takeaways Box (Required)
Immediately after the frontmatter, before any body content:

```html
<div class="summary-box">
<strong>Key Takeaways</strong>
<ul>
<li>First and most important takeaway — lead with the headline finding</li>
<li>Second takeaway — specific number or metric</li>
<li>Third takeaway — actionable insight</li>
<li>Fourth takeaway (optional)</li>
<li>Fifth takeaway (optional)</li>
</ul>
</div>
```

- 3-5 bullet points. No more.
- Each bullet is one sentence. Concrete, specific, no fluff.
- This box serves two purposes: helps scanners decide to read AND provides an extractable summary for AI engines.

### 4.2 Introduction (100-150 words)
- Hook: Open with a pain point, surprising stat, or provocative statement
- Context: Why this matters now
- Primary keyword: Must appear naturally in the first 100 words
- Promise: What the reader will learn
- No "In this article, we will discuss..." preamble. Start with the substance.

### 4.3 Body Sections
- **H2 headings** for major sections. 4-8 H2s per post.
- **H3 headings** for subsections within an H2. Use sparingly.
- **One concept per section.** Each H2 section covers one idea completely in 200-400 words.
- **Short paragraphs.** 2-4 sentences maximum. Break complex ideas into digestible chunks.
- **Visual break every 300-400 words.** Use one of: bullet list, numbered list, comparison table, callout box, code block, or data table.

### 4.4 FAQ Section (Required)
At the bottom of the body, before the conclusion:

```markdown
---

## Frequently Asked Questions

### Question phrased as the user would type it?

Direct answer in the first sentence. Supporting detail follows. Keep each answer under 100 words. The first sentence must be a complete, standalone answer that works as a featured snippet.

### Next question?

Direct answer first. Then context.
```

- Minimum 5 questions per post
- Questions must match real PAA (People Also Ask) queries — check Google before writing
- First sentence of each answer must be a complete answer in under 50 words
- FAQ schema is generated automatically from frontmatter `faq` field

### 4.5 Conclusion (No Heading Needed)
- Do NOT use a "Conclusion" heading — it's wasted space
- Summarize the one key action the reader should take
- Transition naturally into the CTA
- The CTA section is rendered automatically by BlogPost.astro — do not add manual CTAs

---

## 5. Writing Rules

### Voice and Tone
- **Authoritative but not arrogant.** Write like someone who has built these systems, not someone selling them.
- **Specific, never vague.** "60% processing time reduction" not "significant improvement." "15-25 minutes per document" not "a long time."
- **Honest about limitations.** Acknowledge what doesn't work yet. Readers trust writers who are transparent about boundaries. One honest limitation builds more credibility than ten unsupported claims.
- **No marketing fluff.** No "revolutionary," "game-changing," "cutting-edge," "best-in-class," "synergy," "leverage." If you can delete a word without changing the meaning, delete it.
- **Second person.** Write "your operations team" not "the operations team." Address the reader directly.

### Formatting Consistency
- **Em-dashes (—)** for parenthetical clauses. Not hyphens (-), not double hyphens (--), not spaced hyphens ( - ).
- **Curly quotes** are fine (Astro handles this). No manual quote escaping needed.
- **Numbers:** Spell out one through nine. Use numerals for 10+. Always use numerals for metrics, percentages, and dollar amounts ($12, 60%, 3 FTEs).
- **Acronyms:** Define on first use: "transport management system (TMS)." After that, use the acronym.
- **Oxford comma.** Always. "Documents, emails, and spreadsheets" not "documents, emails and spreadsheets."

### What NOT to Do
- Do not start consecutive sentences with the same word
- Do not use "In conclusion," "To summarize," "As mentioned above"
- Do not use "it's important to note that" — just state the thing
- Do not write "This article will cover" or "In this section, we discuss"
- Do not add emojis unless explicitly asked
- Do not use exclamation marks in body copy

---

## 6. SEO Checklist (Every Post)

Run through this before publishing. Every item is mandatory.

### On-Page SEO
- [ ] Primary keyword in title tag (first half)
- [ ] Primary keyword in H1
- [ ] Primary keyword in URL slug
- [ ] Primary keyword in meta description (first 60 chars)
- [ ] Primary keyword in first 100 words of body
- [ ] Primary keyword (or close variant) in at least one H2
- [ ] Primary keyword in at least one image alt text
- [ ] Meta title under 60 characters (with ` | FreightMynd` suffix)
- [ ] Meta description 140-155 characters
- [ ] URL slug: short, lowercase, hyphenated, keyword-rich

### Internal Linking
- [ ] 2-5 internal links per 1,000 words
- [ ] At least 1 link to a solution page
- [ ] At least 1 link to a case study or integration page
- [ ] At least 1 link to /contact (naturally, not forced)
- [ ] Links use descriptive anchor text (not "click here" or "read more")
- [ ] No broken internal links

### Schema and Structured Data
- [ ] `faq` frontmatter has 5+ questions (auto-generates FAQPage schema)
- [ ] `relatedSolutions` has 2-6 slugs
- [ ] `wordCount` is accurate
- [ ] `readingTime` is accurate (wordCount / 200, rounded up)
- [ ] `publishDate` and `modifiedDate` are set correctly

### Content Quality
- [ ] Key Takeaways box present at top
- [ ] No paragraphs longer than 4 sentences
- [ ] Visual break every 300-400 words (list, table, callout, or code block)
- [ ] All claims backed by specific numbers or cited sources
- [ ] All external sources are cited with publication year
- [ ] No marketing fluff words
- [ ] Consistent em-dash usage throughout

### AEO (Answer Engine Optimization)
- [ ] Each H2 section starts with a 40-60 word direct answer paragraph
- [ ] At least one specific data point per 200 words
- [ ] Brand name "FreightMynd" used (not "we" or "our company") at least 2-3 times for entity attribution
- [ ] FAQ answers start with a direct, standalone answer in the first sentence

---

## 7. Internal Linking Strategy

### Every Blog Post Must Link To:

1. **Its pillar solution page** — the solution most closely related to the post's topic
2. **2-3 sibling blog posts** — other posts in the same topic cluster
3. **1 case study** — the most relevant proof point
4. **1 integration page** — if TMS-specific content is discussed
5. **/contact** — naturally, where a CTA fits (e.g., "book a free audit")

### Anchor Text Rules
- Use descriptive, varied anchor text
- Do NOT use exact-match keyword anchors repeatedly (Google penalizes this)
- Do NOT use "click here," "read more," "learn more"
- Good: "our [4PL control tower automation system](/solutions/4pl-control-tower-automation)"
- Good: "the [Hellmann case study](/case-studies/hellmann-4pl-control-tower) demonstrated this at scale"
- Bad: "[4PL control tower automation](/solutions/4pl-control-tower-automation)" used 5 times in one post

---

## 8. Image Guidelines

- Use the Astro `<Image>` component from `astro:assets` — never raw `<img>` tags
- Every image must have descriptive `alt` text (include the primary keyword once, naturally)
- Format: WebP. Quality: 85.
- Above-fold images: `loading="eager"` and `fetchpriority="high"`
- Below-fold images: `loading="lazy"` (Astro default)
- Prefer diagrams, architecture flows, and data tables over stock photos
- No stock photos of people shaking hands, pointing at screens, or standing in warehouses
- If no meaningful image exists for a section, don't force one

---

## 9. Content Refresh Protocol

### When to Refresh
- Every quarter for posts ranking in positions 5-20 (high potential)
- Immediately if a post drops 10+ positions
- When new data, product features, or competitor changes make content outdated

### How to Refresh
1. Update `modifiedDate` in frontmatter
2. Add new data points, examples, or sections
3. Update any outdated claims or statistics
4. Add internal links to any new solution pages published since the original post
5. Re-submit the URL in Google Search Console after refresh

### Never Do on Refresh
- Don't change the URL slug (breaks existing links and rankings)
- Don't change the primary keyword target
- Don't remove content that is ranking — add to it

---

## 10. Pre-Publish Quality Gate

Before any post goes live, answer these three questions:

1. **Would a VP of Operations at a mid-size freight forwarder read this all the way through?**
   If not, it's too generic, too fluffy, or too surface-level. Rewrite.

2. **Does this post contain at least one thing the reader cannot find on any competitor's blog?**
   Original data, proprietary insight, or a unique perspective from building real systems. If not, it's commodity content.

3. **If an AI assistant was asked about this topic, would it cite this post?**
   Check: Does it have specific numbers? Named examples? Direct answers to common questions? FAQPage schema? If not, optimize for citation.

---

## 11. Category Definitions

| Category | Use When | Examples |
|----------|----------|---------|
| **Guides** | Comprehensive topic coverage, pillar content | "Complete Guide to AI Automation for Freight Forwarding" |
| **Technical** | Implementation details, architecture, how-it-works | "How to Automate CargoWise Data Entry with AI" |
| **Comparison** | Tool evaluation, framework comparison, vs. content | "Best AI Tools for Freight Forwarders in 2026" |
| **Case Study** | Deep dive into a specific deployment | "How a 4PL Processes 300-Page Document Batches" |
| **Data** | Benchmarks, original research, industry analysis | "Freight Document OCR Accuracy Benchmarks 2026" |

---

## 12. Benchmarks We Track

| Metric | Target | Measurement |
|--------|--------|-------------|
| Avg position of blog posts | < 20 (page 2 or better) | Google Search Console |
| Blog-to-contact conversion rate | > 1% | Analytics |
| Avg time on page | > 2 minutes | Analytics |
| Internal navigation rate | > 25% continue to another page | Analytics |
| FAQ schema validation | Zero errors | Google Rich Results Test |
| Organic traffic growth | > 10% month-over-month | Search Console |
| AI citation rate | Track mentions in ChatGPT/Claude/Perplexity | Manual monitoring |

---

*Last updated: 2026-04-02*
*These guidelines apply to all blog content on freightmynd.com. No exceptions unless explicitly approved by the content owner.*
