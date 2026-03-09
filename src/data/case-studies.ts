export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  description: string;
  keyword: string;
  headline: string;
  heroMetric: { value: string; label: string };
  results: Array<{ value: string; label: string }>;
  stack: string[];
  challenge: string;
  whatWeBuilt: string[];
  color: 'brand' | 'accent';
  icon: string;
  featured: boolean;
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
    results: [
      { value: '60%', label: 'Processing time reduction' },
      { value: '50%', label: 'AI cost reduction via smart filtering' },
      { value: '0', label: 'Manual TMS data entry' },
      { value: '≈0%', label: 'Failure rate on 300-page batches' },
    ],
    stack: ['Python', 'LangGraph', 'Azure Document Intelligence', 'n8n', 'CargoWise API', 'OpenAI GPT-4o', 'Custom OCR'],
    challenge: 'Hellmann\'s 4PL control tower operations received daily document bundles from suppliers — commercial invoices, airway bills, packing lists, customs compliance forms — often packaged as PDFs of 200–300 pages per batch. Operators spent significant portions of each morning manually downloading, splitting, reading, and re-keying data into spreadsheets before it could be entered into CargoWise.',
    whatWeBuilt: [
      'Email monitoring agent — monitors the ops inbox, detects supplier document emails, auto-downloads attachments',
      'AI document filter — lightweight classifier removes irrelevant pages (cover sheets, blank pages, duplicates), reducing AI processing costs by 50%',
      'Extraction engine — LangGraph-orchestrated AI pipeline extracts structured fields from invoices, AWBs, packing lists, and compliance documents',
      'Validation layer — extracted data checked against business rules before any data moves downstream',
      'CargoWise XML push — validated data formatted as CargoWise-compatible XML and pushed directly into TMS via API',
      'Excel report generation — formatted compliance reports auto-generated for the ops team',
      'Self-learning supplier onboarding — new supplier formats mapped automatically with no engineering effort',
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
      { value: '85%', label: 'Faster quote turnaround' },
      { value: '3x', label: 'More quotes processed per person' },
      { value: '0', label: 'Missed RFQ deadlines' },
    ],
    stack: ['Python', 'LangGraph', 'Azure', 'n8n', 'OpenAI'],
    challenge: 'Incoming RFQ emails arrived in unstructured formats with inconsistent information, missing fields, and scattered across inboxes. Operators spent hours manually parsing emails, chasing customers for missing details, and re-keying data into pricing tools — leading to slow quote turnaround and missed deadlines.',
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
    title: 'AI-Powered Historical Email Intelligence System',
    client: 'Global Logistics Provider',
    description: 'The "Optimization Mesh" — converts years of historical operational email into structured decision intelligence, capturing institutional knowledge and enabling data-driven operational optimization.',
    keyword: 'AI historical email intelligence logistics optimization',
    headline: 'Turning Years of Operational Email into Queryable Decision Intelligence',
    heroMetric: { value: '100%', label: 'Institutional knowledge captured' },
    results: [
      { value: '100%', label: 'Institutional knowledge captured from email history' },
      { value: 'Reduced', label: 'Dependency on individual expertise' },
      { value: 'Enabled', label: 'Data-driven operational optimization' },
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
    title: 'AI-Powered Shipping & News Intelligence Agent',
    client: 'International Freight Forwarder',
    description: 'Combines multi-carrier shipment tracking with real-time news intelligence and AI voice agents for proactive risk detection and faster operational response.',
    keyword: 'AI shipping intelligence risk detection freight',
    headline: 'Proactive Risk Detection with Real-Time Shipping & News Intelligence',
    heroMetric: { value: 'Proactive', label: 'Risk detection before impact' },
    results: [
      { value: 'Proactive', label: 'Risk detection across active shipments' },
      { value: 'Faster', label: 'Operational response to disruptions' },
      { value: 'Reduced', label: 'Manual monitoring and check-call workload' },
    ],
    stack: ['Python', 'Azure', 'OpenAI', 'Carrier APIs', 'Voice AI', 'News APIs'],
    challenge: 'Operations teams relied on manual check-calls to ports and terminals, reactive disruption management, and fragmented carrier tracking portals. By the time a delay or disruption was identified, the impact had already cascaded through downstream operations.',
    whatWeBuilt: [
      'Multi-carrier shipment tracking — unified tracking across ocean, air, and road carriers via API integrations',
      'Real-time news intelligence — monitors shipping news, port updates, and geopolitical events for route-relevant risks',
      'Route-based risk correlation — maps active shipments against live disruption data to flag at-risk cargo proactively',
      'AI voice agents — auto-call ports and terminals for real-time status updates, eliminating manual check-call cycles',
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
    description: 'End-to-end RFQ lifecycle automation from email monitoring through vendor selection, distribution, quotation capture, and HITL negotiation — reducing manual workload and improving vendor response rates.',
    keyword: 'AI RFQ automation freight forwarder vendor management',
    headline: 'End-to-End RFQ Lifecycle Automation — From Inbox to Vendor Negotiation',
    heroMetric: { value: 'End-to-End', label: 'RFQ lifecycle automated' },
    results: [
      { value: 'Reduced', label: 'Manual workload across RFQ lifecycle' },
      { value: 'Faster', label: 'RFQ processing and vendor distribution' },
      { value: 'Structured', label: 'Vendor comparison and selection' },
      { value: 'Improved', label: 'Vendor response rates via automated follow-ups' },
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
