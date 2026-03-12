export interface GlossaryTerm {
  slug: string;
  term: string;
  definition: string;
  longDescription: string;
  relatedSolutions: string[];
  relatedTerms: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: '3pl',
    term: 'Third-Party Logistics (3PL)',
    definition: 'A third-party logistics provider manages outsourced logistics operations including warehousing, transportation, and fulfilment on behalf of shippers.',
    longDescription: `Third-party logistics (3PL) refers to the outsourcing of supply chain and logistics operations to a specialised provider. A 3PL company typically handles warehousing, transportation management, order fulfilment, freight consolidation, and customs brokerage on behalf of shippers who lack the infrastructure or expertise to manage these functions in-house. The 3PL model allows manufacturers, retailers, and e-commerce businesses to focus on their core products while relying on logistics specialists to move goods efficiently.

For freight forwarders operating as or alongside 3PL providers, the challenge lies in coordinating a high volume of shipments across multiple carriers, modes, and geographies — often using manual processes that don't scale. Operations teams spend hours on data entry, document handling, and status updates that could be automated. The complexity multiplies when a 3PL serves dozens of clients, each with unique routing requirements, carrier preferences, and compliance rules.

AI automation transforms 3PL operations by eliminating repetitive manual work across the logistics chain. CargoIQ's <a href="/solutions/3pl-4pl-operations" class="text-brand hover:underline">3PL & 4PL operations solution</a> automates shipment booking, document processing, and status tracking — reducing processing time and error rates while enabling 3PL providers to handle more volume without adding headcount. Intelligent systems can match shipments to optimal carriers, auto-generate compliance documents, and push structured data directly into the TMS, replacing the spreadsheets and email chains that slow operations down.`,
    relatedSolutions: ['3pl-4pl-operations'],
    relatedTerms: ['4pl-control-tower', 'tms', 'freight-forwarding'],
  },
  {
    slug: '4pl-control-tower',
    term: '4PL Control Tower',
    definition: 'A centralised command centre that provides end-to-end visibility and orchestration across all logistics providers, carriers, and supply chain partners.',
    longDescription: `A 4PL (fourth-party logistics) control tower is a centralised operations hub that manages and coordinates the entire supply chain on behalf of a client — including oversight of multiple 3PL providers, carriers, and logistics partners. Unlike a 3PL that executes specific logistics functions, a 4PL control tower takes a strategic, orchestrating role: monitoring shipments across all modes and geographies, managing exceptions, ensuring compliance, and providing unified visibility into the entire freight operation from a single platform.

In practice, 4PL control towers receive massive volumes of documents daily — commercial invoices, airway bills, packing lists, and customs forms — often arriving as PDF batches of 200 to 300 pages from dozens of suppliers. Operators must manually download, split, read, and re-key this data into their TMS before shipments can proceed. This manual bottleneck creates delays, introduces errors, and limits how many shipments a team can process each day. The problem compounds with every new supplier, since each has different document formats and data structures.

AI-powered <a href="/solutions/4pl-control-tower-automation" class="text-brand hover:underline">4PL control tower automation</a> replaces this manual pipeline entirely. CargoIQ builds document intelligence systems that monitor inboxes, auto-download attachments, filter irrelevant pages, extract structured data using AI, validate it against business rules, and push clean XML directly into <a href="/glossary/cargowise" class="text-brand hover:underline">CargoWise</a> or other TMS platforms — with zero manual entry. This is exactly what we built and deployed for Hellmann Worldwide Logistics, achieving a 60% reduction in processing time and near-zero failure rates on 300-page document batches.`,
    relatedSolutions: ['4pl-control-tower-automation'],
    relatedTerms: ['3pl', 'tms', 'cargowise', 'freight-forwarding'],
  },
  {
    slug: 'airway-bill',
    term: 'Airway Bill (AWB)',
    definition: 'A transport document issued by an air carrier or freight forwarder that serves as a contract of carriage, receipt of goods, and freight bill for air cargo shipments.',
    longDescription: `An airway bill (AWB) is the primary transport document used in air freight. It serves three critical functions: it acts as a contract of carriage between the shipper and the airline, a receipt confirming that the carrier has accepted the goods, and a freight bill detailing charges. There are two types — a master airway bill (MAWB) issued by the airline, and a house airway bill (HAWB) issued by the freight forwarder to the shipper. Each AWB contains essential shipment data including origin, destination, weight, dimensions, number of pieces, commodity description, and handling instructions.

For freight forwarders, AWBs are central to daily operations but also a significant source of manual work. Operators must extract data from AWBs to populate their TMS, match them against booking confirmations, reconcile them with invoices, and ensure they comply with carrier and customs requirements. When AWBs arrive as part of large document bundles — mixed in with invoices, packing lists, and other paperwork — the extraction process becomes even more time-consuming. A single data entry error on an AWB can cause shipment delays, customs holds, or billing disputes.

CargoIQ's <a href="/solutions/air-freight-automation" class="text-brand hover:underline">air freight automation</a> and <a href="/solutions/document-intelligence" class="text-brand hover:underline">document intelligence</a> systems automate AWB processing end to end. AI extraction engines identify AWBs within mixed document batches, extract all structured fields (shipper, consignee, routing, weights, charges), validate them against booking data, and push the clean data directly into the TMS. This eliminates manual keying, reduces errors, and accelerates the air freight operations cycle from hours to minutes.`,
    relatedSolutions: ['air-freight-automation', 'document-intelligence'],
    relatedTerms: ['bill-of-lading', 'freight-forwarding', 'hs-code'],
  },
  {
    slug: 'bill-of-lading',
    term: 'Bill of Lading (BL)',
    definition: 'A legal document issued by a sea carrier or their agent that serves as a contract of carriage, receipt of goods, and document of title for ocean freight shipments.',
    longDescription: `A bill of lading (BL or B/L) is the most important document in sea freight. It serves three legal functions simultaneously: a contract of carriage between the shipper and the ocean carrier, a receipt confirming that specified goods have been loaded aboard the vessel, and a document of title that can be used to transfer ownership of the goods. Bills of lading contain critical shipment details — vessel name, port of loading, port of discharge, container numbers, seal numbers, commodity descriptions, weights, and terms of shipment. There are several types including a master bill of lading (MBL), house bill of lading (HBL), and switch bills used in complex routing scenarios.

For freight forwarders handling sea freight, bills of lading are processed in high volumes daily. Each BL must be carefully reviewed, its data extracted and entered into the TMS, cross-referenced with booking confirmations and shipping instructions, and filed for compliance purposes. The manual processing of BLs is one of the most labour-intensive tasks in ocean freight operations — particularly when forwarders handle hundreds of shipments per week across multiple shipping lines, each with slightly different BL formats and data structures.

AI-powered <a href="/solutions/sea-freight-automation" class="text-brand hover:underline">sea freight automation</a> eliminates the manual handling of bills of lading. CargoIQ's <a href="/solutions/document-intelligence" class="text-brand hover:underline">document intelligence</a> pipeline extracts structured data from BLs regardless of format or shipping line, validates the data against booking records and business rules, and pushes it directly into the TMS. The system handles format variations across carriers automatically, meaning no engineering effort is required when a new shipping line is added. This transforms BL processing from a bottleneck into a fully automated step in the ocean freight workflow.`,
    relatedSolutions: ['sea-freight-automation', 'document-intelligence'],
    relatedTerms: ['airway-bill', 'freight-forwarding', 'hs-code'],
  },
  {
    slug: 'cargowise',
    term: 'CargoWise',
    definition: 'A global logistics execution platform developed by WiseTech Global, widely used by freight forwarders for managing shipments, customs, accounting, and operations across all transport modes.',
    longDescription: `CargoWise is the leading logistics execution platform built by WiseTech Global, used by thousands of freight forwarders, customs brokers, and logistics providers worldwide. It provides an integrated suite covering freight management, customs and compliance, warehouse management, tracking and visibility, accounting, and business intelligence — all within a single database architecture. CargoWise supports all transport modes (sea, air, road, and rail) and is particularly dominant among mid-to-large freight forwarders who need a unified platform to manage complex, multi-modal operations across multiple countries.

Despite its comprehensive functionality, CargoWise still depends on humans to feed it data. Operators spend significant time manually entering shipment details, document data, and supplier information into the platform. When documents arrive as email attachments — often in batches of hundreds of pages — someone must read, interpret, and re-key that data into CargoWise before operations can proceed. This manual data entry is the single biggest bottleneck in most freight forwarding operations that run on CargoWise, and it's where the highest error rates occur.

CargoIQ specialises in building AI systems that integrate directly with CargoWise via its API and XML interfaces. Our <a href="/solutions/4pl-control-tower-automation" class="text-brand hover:underline">4PL control tower automation</a> pushes validated, structured data as CargoWise-compatible XML — eliminating manual entry entirely. The system we built for Hellmann Worldwide Logistics processes 200-300 page document batches and pushes clean data into their CargoWise instance with zero manual intervention. Whether you run CargoWise One or a legacy version, we build the AI pipeline that turns your documents into clean TMS data automatically.`,
    relatedSolutions: ['4pl-control-tower-automation'],
    relatedTerms: ['tms', '4pl-control-tower', 'freight-forwarding'],
  },
  {
    slug: 'freight-forwarding',
    term: 'Freight Forwarding',
    definition: 'The coordination and arrangement of cargo transportation on behalf of shippers, including booking carriers, preparing documentation, managing customs clearance, and tracking shipments across all modes of transport.',
    longDescription: `Freight forwarding is the business of organising the shipment of goods from one point to another on behalf of shippers. A freight forwarder acts as an intermediary between the shipper and the various transportation carriers (ocean lines, airlines, trucking companies, rail operators), handling the complex logistics of moving cargo across borders and through multiple transport modes. Core freight forwarding activities include carrier selection and booking, documentation preparation, customs clearance, cargo insurance, consolidation, warehousing, and shipment tracking. Forwarders don't typically own transport assets — their value lies in their expertise, carrier relationships, and ability to orchestrate complex supply chains.

The freight forwarding industry processes an enormous volume of documents and data every day. Each shipment generates bills of lading, airway bills, commercial invoices, packing lists, customs declarations, certificates of origin, and more. For a mid-size forwarder handling thousands of shipments monthly, the manual processing of these documents represents hundreds of labour hours — time spent on data entry, cross-referencing, validation, and filing rather than on high-value activities like customer relationships and route optimisation.

AI automation is transforming freight forwarding by replacing the manual, repetitive work that consumes operations teams. CargoIQ builds custom AI systems for freight forwarders that automate <a href="/solutions/sea-freight-automation" class="text-brand hover:underline">sea freight</a> and <a href="/solutions/air-freight-automation" class="text-brand hover:underline">air freight</a> operations — from document processing and quote management to invoice matching and pricing intelligence. These systems integrate directly with your existing TMS, work with your specific suppliers and document formats, and deploy in 8-14 weeks. The result is faster processing, fewer errors, and operations teams freed to focus on growth rather than data entry.`,
    relatedSolutions: ['sea-freight-automation', 'air-freight-automation'],
    relatedTerms: ['3pl', '4pl-control-tower', 'tms', 'bill-of-lading', 'airway-bill'],
  },
  {
    slug: 'freight-invoice-matching',
    term: 'Freight Invoice Matching',
    definition: 'The process of verifying freight invoices by matching them against purchase orders and delivery receipts (three-way matching) to ensure charges are accurate before payment.',
    longDescription: `Freight invoice matching — commonly known as three-way matching — is the process of reconciling a carrier's freight invoice against the original purchase order (or rate agreement) and the proof of delivery or shipment confirmation. The goal is to verify that the charges billed match what was agreed, that the services were actually rendered, and that the quantities and weights align across all three documents. This process catches overcharges, duplicate invoices, incorrect surcharges, and billing errors that would otherwise go undetected and result in overpayment.

For freight forwarders, invoice matching is one of the most tedious and error-prone tasks in operations. A single shipment can generate multiple invoices from different carriers and service providers — ocean freight, drayage, customs brokerage, warehousing — each with different rate structures, surcharge codes, and billing formats. Operations or finance teams must manually compare each line item against contracted rates, check for accessorial charges, validate currency conversions, and flag discrepancies. At scale, this process consumes significant staff time and still misses errors, leading to revenue leakage that compounds over thousands of shipments.

CargoIQ's <a href="/solutions/smart-invoice-processing" class="text-brand hover:underline">smart invoice processing</a> system automates freight invoice matching end to end. AI extracts structured data from carrier invoices regardless of format, matches each line item against the corresponding rate agreement and shipment record, flags discrepancies with specific reasons, and routes exceptions for human review only when needed. The system learns from your rate structures and billing patterns, improving accuracy over time. Forwarders using automated invoice matching typically recover 2-5% of freight spend that was previously lost to billing errors and overcharges.`,
    relatedSolutions: ['smart-invoice-processing'],
    relatedTerms: ['rfq', 'freight-forwarding', 'tms'],
  },
  {
    slug: 'hs-code',
    term: 'HS Code (Harmonized System)',
    definition: 'An internationally standardised numerical classification system for traded products, used by customs authorities worldwide to identify goods, determine tariff rates, and enforce trade regulations.',
    longDescription: `The Harmonized System (HS) is a standardised numerical method of classifying traded products, maintained by the World Customs Organization (WCO). HS codes are used by customs authorities in over 200 countries to identify goods crossing borders, determine applicable tariff rates, collect trade statistics, and enforce trade regulations. The system uses a hierarchical structure: the first 6 digits are internationally standardised, while individual countries add additional digits for more granular classification. For example, the HS code 8471.30 covers portable digital computers, but a country might extend this to 8471.30.01 to distinguish laptops from tablets.

Correct HS code classification is critical for freight forwarders and their clients. An incorrect code can result in shipments being held at customs, goods being seized, penalties and fines, overpayment of duties, or denial of preferential trade agreement benefits. The classification process requires deep knowledge of both the product being shipped and the HS nomenclature — and the rules are complex, with thousands of headings and subheadings that are regularly updated. For forwarders handling diverse commodities, HS classification is a constant source of risk and manual effort, often requiring specialist staff or external consultants.

AI-powered <a href="/solutions/document-intelligence" class="text-brand hover:underline">document intelligence</a> systems can automate and improve HS code classification. CargoIQ builds systems that extract product descriptions from commercial invoices and shipping documents, suggest the most likely HS codes based on the commodity description, cross-reference against historical classifications for the same product, and flag high-risk classifications for human review. This reduces classification errors, speeds up customs documentation preparation, and helps forwarders avoid costly delays and penalties at the border.`,
    relatedSolutions: ['document-intelligence'],
    relatedTerms: ['bill-of-lading', 'airway-bill', 'freight-forwarding'],
  },
  {
    slug: 'rfq',
    term: 'Request for Quotation (RFQ)',
    definition: 'A formal request from a shipper to freight forwarders or carriers asking for pricing on a specific shipment, including rates, transit times, and service terms.',
    longDescription: `A Request for Quotation (RFQ) in freight forwarding is a formal inquiry from a shipper or their procurement team asking one or more forwarders to provide pricing for moving goods on a specific lane. An RFQ typically includes origin and destination details, commodity type and HS classification, cargo weight and dimensions, packaging type, required transit time, preferred transport mode (sea, air, or multimodal), and any special handling requirements. Forwarders respond with detailed quotes covering base freight rates, surcharges, customs fees, and total landed cost — often competing against multiple other forwarders for the same business.

For freight forwarders, the RFQ response process is a critical revenue driver but also a major operational bottleneck. Each incoming RFQ requires a pricing analyst to research current carrier rates, calculate surcharges, check space availability, factor in margin targets, and compile a professional quote document — a process that can take 30 minutes to several hours per quote depending on complexity. During peak seasons or tender periods, forwarders may receive hundreds of RFQs simultaneously, and the speed and accuracy of their response directly impacts win rates. Slow responses lose business. Inaccurate quotes lose money.

CargoIQ's <a href="/solutions/autonomous-quote-management" class="text-brand hover:underline">autonomous quote management</a> system transforms the RFQ response process. AI parses incoming RFQ emails and documents, extracts shipment requirements, matches them against your contracted carrier rates and historical pricing data, calculates optimal quotes including all applicable surcharges, and generates professional quote documents — all in minutes rather than hours. The system learns from your win/loss history to optimise pricing strategy over time, and routes complex or high-value RFQs to human specialists while handling routine quotes autonomously. Forwarders using AI-powered quoting see faster response times, higher win rates, and more consistent pricing across their teams.`,
    relatedSolutions: ['autonomous-quote-management'],
    relatedTerms: ['freight-forwarding', 'freight-invoice-matching'],
  },
  {
    slug: 'tms',
    term: 'Transportation Management System (TMS)',
    definition: 'A software platform used by freight forwarders and logistics companies to plan, execute, and optimise the movement of goods — managing shipments, carriers, documents, compliance, and billing in a centralised system.',
    longDescription: `A Transportation Management System (TMS) is the central software platform that freight forwarders and logistics companies use to manage their operations. A TMS handles shipment planning and booking, carrier selection and management, documentation and compliance, shipment tracking and visibility, invoicing and accounting, and reporting and analytics. Leading TMS platforms in the freight forwarding industry include CargoWise (by WiseTech Global), SAP Transportation Management, Oracle TMS, Microsoft Dynamics 365 Supply Chain Management, and Descartes. The TMS is the system of record for a forwarder's operations — every shipment, document, and financial transaction flows through it.

The problem with most TMS platforms is not the software itself — it's the data entry required to keep them fed. Despite their sophistication, TMS systems still rely heavily on humans to input data. Operators spend hours each day manually entering shipment details from emails, extracting data from PDF documents, re-keying information from carrier portals, and updating records as shipments progress. This manual data entry is the single biggest operational bottleneck for freight forwarders, and it's the primary source of errors that cascade through the operations chain — wrong weights, mismatched reference numbers, and incorrect charges that take hours to untangle.

CargoIQ builds AI systems that sit between your incoming data sources (emails, documents, carrier portals) and your TMS, automating the data entry and validation that currently consumes your operations team. Our <a href="/solutions/4pl-control-tower-automation" class="text-brand hover:underline">4PL control tower automation</a> integrates directly with your TMS via API — whether you run CargoWise, SAP TM, Oracle TMS, Microsoft Dynamics, or Descartes. The AI pipeline extracts structured data from documents, validates it against your business rules, and pushes clean, formatted data directly into your TMS. No middleware. No CSV exports. No manual re-entry. Your TMS stays your system of record — we just make sure it gets fed accurate data automatically.`,
    relatedSolutions: ['4pl-control-tower-automation'],
    relatedTerms: ['cargowise', '4pl-control-tower', '3pl', 'freight-forwarding'],
  },
];
