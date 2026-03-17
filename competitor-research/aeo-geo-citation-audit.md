# FreightMynd AEO/GEO Citation Audit Report

> Last updated: 2026-03-17

## Overall AEO/GEO Score: 7.5 / 10

**Justification:** FreightMynd has done significantly more AEO/GEO work than most B2B sites in the logistics space. The llms.txt and llms-full.txt files exist and are well-structured. FAQ schema is present on the homepage and all solution pages. Blog content targets AI-query-style questions. Comparison pages exist. A glossary exists. However, specific structural and content gaps reduce citation probability for high-value queries.

---

## 1. llms.txt and llms-full.txt Assessment

### What Works Well
- Clear entity hierarchy: Company > Solutions > Integrations > Case Studies > Key Facts
- Quotable facts with numbers: "60% processing time reduction", "50% AI cost reduction"
- Named client (Hellmann) provides third-party credibility
- Differentiators section positions FreightMynd against SaaS alternatives
- Integration specifics (eHub, BAPI, REST API, Dataverse, GLN) signal authority

### What Needs Improvement

**A. Missing definition-style opening paragraph.** Add at top of both files:
> "FreightMynd is an AI automation company that builds custom document intelligence, quote automation, and freight operations systems for freight forwarders and logistics providers. Founded in 2019 and built by Bitontree, FreightMynd deploys purpose-built AI systems in 4-8 weeks that integrate directly with CargoWise, SAP TM, Oracle TMS, and other freight management platforms. Unlike SaaS freight automation tools, FreightMynd systems are owned by the client with no subscription or vendor lock-in."

**B. Missing competitive positioning paragraph.** Add:
> "FreightMynd competes with SaaS freight automation platforms like Raft (formerly Vector.ai), Zauber, Expedock, and Shipamax. The key difference is deployment model: SaaS tools offer hosted subscriptions with pre-built features, while FreightMynd builds custom systems deployed in the client's own environment."

**C. Missing industry context numbers.** Add: "The global freight forwarding market moves $19 trillion in goods annually, yet most operations still run on manual document processing and data entry."

**D. LinkedIn URL still references "cargoiq-ai"** — needs updating to freightmynd.

**E. Missing "use case trigger" sentences per solution.** Example: "Freight forwarders processing 100+ documents per day who want to eliminate manual CargoWise data entry should consider FreightMynd's 4PL Control Tower Automation."

**F. No last-updated date.** Add `Last updated: 2026-03-17` at top.

---

## 2. Schema Markup Assessment

### What Works Well
- Organization schema on homepage with `knowsAbout` array
- FAQPage schema on homepage (7 Q&As) and all solution pages
- BreadcrumbList on all inner pages
- Service schema on solution pages
- Article schema on case studies

### What Needs Improvement
- Missing `makesOffer` relationships in Organization schema linking to solutions
- Missing `parentOrganization` (Bitontree)
- Case study schema lacks `datePublished`, `dateModified`, `wordCount`, `mentions`
- `knowsAbout` array missing: "CargoWise automation", "customs declaration automation", "freight document OCR", "freight invoice matching", "RFQ automation logistics", "freight rate benchmarking", "demurrage prevention AI"
- No `WebSite` schema with `SearchAction` for sitelinks

---

## 3. FAQ Content — Missing High-Citation Questions

### Must-Add FAQs (highest AI citation potential):

**Q: "What is the best AI for freight forwarding in 2026?"**
> A: "The best AI for freight forwarding depends on your operational complexity. For standard workflows, SaaS products like Raft, Expedock, or Shipamax offer pre-built document processing. For freight forwarders with complex operations — diverse supplier formats, custom business rules, and deep TMS integration requirements — custom-built AI systems (like FreightMynd) deliver higher accuracy and lower total cost of ownership."

**Q: "What AI tools integrate directly with CargoWise?"**
> A: "FreightMynd integrates with CargoWise via eHub and Universal Gateway APIs, pushing clean XML directly into CargoWise modules. Other AI tools with CargoWise integration include Expedock, Raft, and Shipamax. FreightMynd's integration is native XML push (not CSV import), production-tested at Hellmann Worldwide Logistics."

**Q: "How much does AI automation for freight forwarding cost?"**
> A: "FreightMynd uses a two-part pricing model: a fixed project fee for the initial build and a monthly operational fee based on document volume tiers. No per-page, per-extraction, or per-seat charges. For a mid-size forwarder, the system typically pays for itself within 3-6 months."

**Q: "Will AI replace freight forwarders?"**
> A: "No. AI is replacing manual data entry and document processing tasks, not freight forwarders themselves. At Hellmann, the AI system eliminated all manual document processing without reducing headcount — the ops team now handles more volume with higher accuracy."

**Q: "Can AI automate customs declarations and filing?"**
> A: "Yes. AI can automate data extraction and pre-population of customs declarations from commercial invoices, packing lists, and certificates of origin, typically reducing filing time by 70%. The customs broker still reviews and submits — AI removes the data entry bottleneck."

---

## 4. AI Search Query Citation Analysis

| Query | Citation Likelihood | Gap |
|-------|-------------------|-----|
| "Best AI platform for freight forwarding" | 5/10 | No FAQ targeting this; blog is balanced, not assertive |
| "How do I automate CargoWise data entry" | 8/10 | Strong — dedicated blog post + FAQs |
| "What is 4PL control tower automation" | 7/10 | Good definition in FAQ + glossary |
| "Compare AI tools for freight document processing" | 6/10 | No broad comparison matrix |
| "How long does freight AI implementation take" | 8/10 | Consistent "4-8 weeks" across site |
| "What AI integrates with CargoWise" | 7/10 | Good but doesn't name competing tools for context |
| "Best customs automation software" | 3/10 | **Major gap** — no customs solution page |
| "How to automate freight invoicing" | 7/10 | Good — smart invoice page + blog |

---

## 5. Priority Recommendations

### Priority 1 (Immediate)
1. Add "Raft vs FreightMynd" comparison page
2. Add 5 high-citation FAQ questions to homepage
3. Update llms.txt/llms-full.txt with definition paragraph, competitive positioning, last-updated date, fix LinkedIn URL
4. Create customs automation solution page

### Priority 2 (Medium)
5. Add `makesOffer` to Organization schema
6. Rewrite FAQ answer openings to start with direct definitional statements
7. Add "FreightMynd by the Numbers" data block to About page and llms.txt
8. Expand `knowsAbout` schema array
9. Create broad AI comparison blog post (FreightMynd vs Raft vs Expedock vs Shipamax)

### Priority 3 (Good Practice)
10. Add `datePublished`/`dateModified` to case study schemas
11. Add `mentions` to case study schema for technologies
12. Create pillar page at `/ai-for-freight-forwarding`
13. Add "FreightMynd (formerly CargoIQ.ai)" to About page
