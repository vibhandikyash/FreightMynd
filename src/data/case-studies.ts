export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  description: string;
  keyword: string;
  headline: string;
  heroMetric: { value: string; label: string };
  results: Array<{ value: string; label: string; context?: string }>;
  stack: string[];
  challenge: string;
  whatWeBuilt: string[];
  color: 'brand' | 'accent';
  icon: string;
  featured: boolean;
  metaTitle?: string;
  metaDescription?: string;
  clientOverview?: string;
  architecture?: string[];
  keyLearnings?: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'hellmann-4pl-control-tower',
    title: 'AI-Powered 4PL Control Tower Automation',
    client: 'Hellmann Worldwide Logistics',
    description: 'How Hellmann Worldwide Logistics automated their 4PL control tower operations with AI — achieving 60% processing time reduction, 50% AI cost reduction, and zero manual TMS entry.',
    keyword: 'Hellmann 4PL control tower automation case study',
    headline: 'How Hellmann Automated Their 4PL Control Tower with AI',
    heroMetric: { value: '60%', label: 'Processing time reduction' },
    metaTitle: 'How Hellmann Worldwide Logistics Automated Their 4PL Control Tower with AI | CargoIQ.ai',
    metaDescription: 'Case study: How Hellmann Worldwide Logistics eliminated manual document processing with AI — 60% processing time reduction, 50% AI cost reduction, and zero manual CargoWise data entry.',
    clientOverview: 'Hellmann Worldwide Logistics is a global freight forwarder headquartered in Osnabrück, Germany, with 500+ offices across 170+ countries and more than 13,000 employees. Hellmann operates sea freight, air freight, road, and rail services worldwide, handling millions of shipments annually. Their 4PL control tower function manages complex multi-modal supply chains for enterprise clients, requiring high-volume, accurate document processing as the operational foundation.',
    results: [
      { value: '60%', label: 'Processing time reduction', context: '2–3 hour manual morning workflow reduced to under 30 minutes of exception review' },
      { value: '50%', label: 'AI cost reduction via smart filtering', context: 'Pre-filtering removes ~50% of pages before LLM extraction, halving token consumption' },
      { value: '0', label: 'Manual TMS data entry', context: 'All validated data pushed directly via CargoWise eHub XML — ops team never opens CargoWise for routine document data' },
      { value: '≈0%', label: 'Failure rate on 300-page batches', context: 'Stress-tested on production batches of 300+ pages with no dropped or partially processed documents' },
    ],
    stack: ['Python', 'LangGraph', 'Azure Document Intelligence', 'n8n', 'CargoWise API', 'OpenAI GPT-4o', 'Custom OCR'],
    challenge: 'Hellmann\'s 4PL control tower operations received daily document bundles from suppliers — commercial invoices, airway bills, packing lists, customs compliance forms — often packaged as PDFs of 200–300 pages per batch. Two operators each spent 2–3 hours per morning manually downloading, splitting, reading, and re-keying data into spreadsheets before it could be entered into CargoWise. The manual process followed a rigid sequence: download email attachments, split multi-hundred-page PDFs into individual documents, identify document type, extract relevant fields, enter data into spreadsheets, and finally re-key everything into CargoWise. New suppliers required 1–3 weeks of engineering effort to map their document formats into the existing workflow. During peak season, document processing backlogs regularly exceeded 24+ hours, delaying downstream operations and creating compliance risk. The entire process lacked any audit trail — there was no systematic record of what was processed, when, or by whom, making error investigation and compliance reporting extremely difficult.',
    whatWeBuilt: [
      'Email monitoring agent — monitors the ops inbox, detects supplier document emails, auto-downloads attachments',
      'AI document filter — lightweight classifier removes irrelevant pages (cover sheets, blank pages, duplicates), reducing AI processing costs by 50%',
      'Extraction engine — LangGraph-orchestrated AI pipeline extracts structured fields from invoices, AWBs, packing lists, and compliance documents',
      'Validation layer — extracted data checked against business rules before any data moves downstream',
      'CargoWise XML push — validated data formatted as CargoWise-compatible XML and pushed directly into TMS via API',
      'Excel report generation — formatted compliance reports auto-generated for the ops team',
      'Self-learning supplier onboarding — new supplier formats mapped automatically with no engineering effort',
    ],
    architecture: [
      'Email Inbox monitoring via IMAP/Microsoft 365 connector',
      'Email Monitor Agent — detects supplier document emails, auto-downloads attachments',
      'PDF Splitter — separates multi-hundred-page PDFs into individual documents',
      'AI Document Filter — lightweight classifier removes irrelevant pages (cover sheets, blanks, duplicates), reducing AI processing costs by 50%',
      'Extraction Engine — LangGraph-orchestrated pipeline combining Azure Document Intelligence, custom OCR, and GPT-4o for structured field extraction',
      'Validation Layer — extracted data checked against Hellmann business rules (required fields, value ranges, supplier whitelist, cross-document consistency)',
      'CargoWise XML Push — validated data formatted as CW1-compliant XML and pushed via eHub API',
      'Excel Report Generator — formatted compliance reports auto-generated for ops team records',
      'Ops Dashboard — real-time processing status, confidence scores, and exception queue',
    ],
    keyLearnings: [
      'Self-learning supplier onboarding eliminated the engineering backlog entirely — new suppliers mapped automatically without developer intervention',
      'Pre-filtering was the highest-ROI single feature — removing irrelevant pages before LLM extraction cut AI costs by 50%, which was not obvious during the design phase',
      'The parallel run period (4 weeks of automated and manual processing side-by-side) was essential for building ops team confidence and catching edge cases',
      'Confidence scoring at field level (not document level) was the right granularity for human review — operators review specific uncertain fields, not entire documents',
    ],
    color: 'brand',
    icon: '🏗️',
    featured: true,
  },
  {
    slug: 'rfq-email-intelligence',
    title: 'AI-Powered RFQ Email Intelligence & Completion System',
    client: 'Enterprise Freight Forwarder',
    description: 'Enterprise-grade RFQ email intelligence system that monitors incoming RFQ emails, classifies them, detects missing info, auto-sends clarification emails, and delivers structured ready-to-price RFQs — achieving 85% faster quote turnaround.',
    keyword: 'AI RFQ email intelligence freight forwarding',
    headline: 'From Inbox Chaos to Structured, Ready-to-Price RFQs — Automatically',
    heroMetric: { value: '85%', label: 'Faster quote turnaround' },
    results: [
      { value: '85%', label: 'Faster quote turnaround', context: 'Average time from RFQ receipt to structured, ready-to-price output dropped from 4.5 hours to 40 minutes' },
      { value: '3x', label: 'More quotes processed per person', context: 'Sales reps handle 3x the RFQ volume without additional hires' },
      { value: '< 5 min', label: 'Auto-clarification cycle time', context: 'Missing information detected and clarification emails sent within 5 minutes of RFQ receipt' },
    ],
    stack: ['Python', 'LangGraph', 'Azure', 'n8n', 'OpenAI'],
    challenge: 'The sell-side quoting process was drowning in unstructured email. RFQ emails arrived from customers in every conceivable format — free-text emails, PDF attachments, Excel rate request templates, forwarded chains with critical details buried three replies deep, and even scanned handwritten notes. Each RFQ required a different set of fields depending on mode (ocean FCL, LCL, air, road), trade lane, and commodity type, but customers rarely provided complete information upfront. Sales representatives spent an average of 45 minutes per RFQ just parsing the email, identifying what shipment details were present, determining what was missing, and composing clarification emails back to the customer. The back-and-forth clarification cycle typically added 2–4 hours to quote turnaround, with some RFQs bouncing back and forth for days before all required fields were captured. During this time, the RFQ sat in a personal inbox with no visibility to the wider team — if the rep was out sick or on leave, the RFQ simply stalled. There was no standardised intake format, no tracking of clarification status, and no way to measure how long each stage of the quoting process actually took. The result: slow quote turnaround, inconsistent win rates, and a sales team that spent more time on email administration than on actual pricing and customer relationships.',
    whatWeBuilt: [
      'RFQ email monitoring and classification — automatically detects and categorises incoming RFQ emails across inboxes',
      'Missing information detection — AI identifies incomplete fields and gaps in RFQ data',
      'Auto-clarification engine — generates and sends contextual clarification emails to customers, continuing the conversation until complete',
      'Structured RFQ delivery — delivers fully structured, ready-to-price RFQs to operators with all required fields populated',
      'Auto-quotation response generation — creates quotation responses based on structured RFQ data and pricing rules',
    ],
    color: 'brand',
    icon: '📧',
    featured: true,
  },
  {
    slug: 'historical-email-intelligence',
    title: 'AI Institutional Knowledge Capture from Operational Email',
    client: 'Global Logistics Provider',
    description: 'The "Optimization Mesh" — converts years of historical operational email into structured decision intelligence, capturing institutional knowledge and enabling data-driven operational optimization.',
    keyword: 'AI historical email intelligence logistics optimization',
    headline: 'Turning Years of Operational Email into Queryable Decision Intelligence',
    heroMetric: { value: '50K+', label: 'Email threads processed' },
    results: [
      { value: '50K+', label: 'Email threads processed and structured', context: 'Years of operational email converted into queryable decision intelligence' },
      { value: '< 30s', label: 'Query response time', context: 'Natural language queries answered in under 30 seconds, versus hours of manual email search' },
      { value: '0', label: 'Knowledge lost to staff turnover', context: 'Institutional knowledge preserved regardless of personnel changes' },
    ],
    stack: ['Python', 'LangGraph', 'Azure', 'OpenAI', 'Vector DB'],
    challenge: 'Critical operational knowledge — past decisions, route preferences, supplier constraints, exception handling patterns — was trapped inside years of email threads. When experienced staff left or were unavailable, institutional knowledge walked out the door, leaving teams to re-learn lessons from scratch.',
    whatWeBuilt: [
      'Historical email ingestion pipeline — processes years of operational email threads at scale',
      'Entity and decision extraction — AI identifies requests, constraints, actions, and outcomes from email conversations',
      'Queryable decision model — structured knowledge base that operators can search and query in natural language',
      'Path feasibility intelligence — leverages historical decisions to assess route and operational feasibility',
      'Continuous learning — model improves as new operational emails are processed and outcomes are tracked',
    ],
    color: 'accent',
    icon: '🧠',
    featured: false,
  },
  {
    slug: 'shipping-news-intelligence',
    title: 'Proactive Freight Risk Detection — AI Shipment Tracking & Live Disruption Intelligence',
    client: 'International Freight Forwarder',
    description: 'Combines multi-carrier shipment tracking with real-time news intelligence and AI voice agents for proactive risk detection and faster operational response.',
    keyword: 'AI shipping intelligence risk detection freight',
    headline: 'Proactive Risk Detection with Real-Time Shipping & News Intelligence',
    heroMetric: { value: '< 15 min', label: 'Risk detection to alert time' },
    results: [
      { value: '< 15 min', label: 'Risk detection to alert time', context: 'Disruptions detected and matched to affected shipments within 15 minutes of event occurrence' },
      { value: '60%', label: 'Reduction in manual monitoring workload', context: 'Automated tracking and check-calls replace manual carrier portal monitoring and phone calls' },
      { value: '40%', label: 'Fewer disruption-related delays', context: 'Proactive detection enables intervention before impact cascades to downstream operations' },
    ],
    stack: ['Python', 'Azure', 'OpenAI', 'Carrier APIs', 'Voice AI', 'News APIs'],
    challenge: 'Operations teams relied on manual check-calls to ports and terminals, reactive disruption management, and fragmented carrier tracking portals. By the time a delay or disruption was identified, the impact had already cascaded through downstream operations.',
    whatWeBuilt: [
      'AI voice agents — auto-call ports and terminals for real-time status updates, eliminating manual check-call cycles',
      'Multi-carrier shipment tracking — unified tracking across ocean, air, and road carriers via API integrations',
      'Real-time news intelligence — monitors shipping news, port updates, and geopolitical events for route-relevant risks',
      'Route-based risk correlation — maps active shipments against live disruption data to flag at-risk cargo proactively',
      'Unified risk dashboard — single view of all active shipments with risk scoring and recommended actions',
    ],
    color: 'brand',
    icon: '🛰️',
    featured: false,
  },
  {
    slug: 'rfq-email-automation',
    title: 'AI-Powered RFQ & Email Automation System',
    client: 'Mid-Market Freight Forwarder',
    description: 'End-to-end procurement-side RFQ lifecycle automation — from incoming RFQ intake through vendor selection, distribution, quotation capture, and HITL negotiation. Unlike sell-side RFQ intelligence (customer-facing quote completion), this system automates the buy-side vendor management workflow.',
    keyword: 'AI RFQ automation freight forwarder vendor management',
    headline: 'End-to-End RFQ Lifecycle Automation — From Inbox to Vendor Negotiation',
    heroMetric: { value: '70%', label: 'Reduction in manual RFQ processing time' },
    results: [
      { value: '70%', label: 'Reduction in manual RFQ processing time', context: 'End-to-end RFQ lifecycle from intake to vendor selection automated' },
      { value: '4x', label: 'Faster vendor distribution', context: 'RFQs distributed to qualified vendors within minutes, not hours' },
      { value: '95%', label: 'Vendor response rate', context: 'Automated follow-ups ensure near-complete vendor participation' },
      { value: '50%', label: 'Faster time to best price', context: 'Structured comparison eliminates manual rate compilation' },
    ],
    stack: ['Python', 'LangGraph', 'Azure', 'n8n', 'OpenAI'],
    challenge: 'The full RFQ lifecycle — from initial email intake through vendor selection, rate collection, and negotiation — was managed through a patchwork of manual email threads, spreadsheets, and phone calls. Each step required human coordination, leading to slow turnaround, inconsistent vendor evaluation, and dropped follow-ups.',
    whatWeBuilt: [
      'Email monitoring and classification — detects and categorises RFQ-related emails across the operations inbox',
      'Intelligent data extraction — pulls structured RFQ fields from unstructured email content and attachments',
      'Automated RFQ creation — generates standardised RFQ records from extracted data',
      'Vendor selection engine — matches RFQ requirements against vendor capabilities, past performance, and lane coverage',
      'Automated RFQ distribution — sends structured RFQ requests to selected vendors via email',
      'Quotation capture — parses vendor responses and extracts rate data into a structured comparison format',
      'Automated follow-ups — tracks vendor response status and sends timed follow-up reminders',
      'Human-in-the-loop negotiation — surfaces structured vendor comparisons for operators to make final negotiation decisions',
    ],
    color: 'accent',
    icon: '🔄',
    featured: true,
  },
];
