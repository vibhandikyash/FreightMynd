/**
 * Condensed solutions and integrations knowledge for the chatbot system prompt.
 * Keep this compact — it's injected into every API call as part of the system prompt.
 */

export interface SolutionKB {
  slug: string;
  name: string;
  oneLiner: string;
  capabilities: string[];
  metrics: string[];
  url: string;
}

export interface IntegrationKB {
  slug: string;
  name: string;
  oneLiner: string;
  url: string;
}

export const solutions: SolutionKB[] = [
  {
    slug: '4pl-control-tower-automation',
    name: '4PL Control Tower Automation',
    oneLiner: 'Full document intelligence pipeline — email monitoring to CargoWise XML with zero manual entry.',
    capabilities: [
      'Intelligent email monitoring & auto document ingestion',
      'AI document filtering — cuts AI processing costs 50%',
      '200–300 page batch processing at near-zero failure rate',
      'Structured data extraction from invoices, AWBs, packing lists',
      'Direct CargoWise XML integration — zero manual TMS entry',
      'Self-learning supplier onboarding — no engineering per new supplier',
    ],
    metrics: [
      '60% processing time reduction',
      '50% AI cost reduction via smart filtering',
      '0 manual TMS data entry',
      '≈0% failure rate on 300-page batches',
    ],
    url: '/solutions/4pl-control-tower-automation',
  },
  {
    slug: 'autonomous-quote-management',
    name: 'Autonomous Quote Management',
    oneLiner: 'AI-powered quoting that handles RFQ intake, rate comparison, margin optimization, and quote generation.',
    capabilities: [
      'Automated RFQ intake from email, portals, and web forms',
      'AI-powered rate comparison across carriers and rate sources',
      'Dynamic margin optimization per customer, lane, and volume',
      'Auto-generated quote documents with your branding',
      'Intelligent follow-up and expiry tracking',
    ],
    metrics: [
      '85% faster quote turnaround',
      '3x more quotes handled per person',
      '40% higher quote-to-book conversion',
      '0 missed quote deadlines',
    ],
    url: '/solutions/autonomous-quote-management',
  },
  {
    slug: 'document-intelligence',
    name: 'Document Intelligence',
    oneLiner: 'AI-powered extraction, classification, and validation of freight documents — invoices, AWBs, BLs, packing lists.',
    capabilities: [
      'Multi-format document classification and routing',
      'High-accuracy field extraction from structured and unstructured docs',
      'Cross-document validation and reconciliation',
      'Automated exception detection and flagging',
      'Direct TMS and customs system integration',
    ],
    metrics: [
      '99%+ extraction accuracy',
      '70% processing time reduction',
      '90% reduction in manual data entry',
      '24/7 processing availability',
    ],
    url: '/solutions/document-intelligence',
  },
  {
    slug: 'freight-pricing-ai',
    name: 'Freight Pricing AI',
    oneLiner: 'Dynamic pricing optimization — real-time benchmarking, margin analysis, and competitive intelligence.',
    capabilities: [
      'Real-time market rate benchmarking',
      'Dynamic pricing optimization by lane, customer, and volume',
      'Margin analysis and protection alerts',
      'Carrier rate comparison and normalization',
      'Historical trend analysis and rate forecasting',
    ],
    metrics: [
      '12% average margin improvement',
      '25% better win rates on target lanes',
      '60% faster rate analysis',
      '0 below-cost quotes sent',
    ],
    url: '/solutions/freight-pricing-ai',
  },
  {
    slug: 'sea-freight-automation',
    name: 'Sea Freight Operations Automation',
    oneLiner: 'End-to-end sea freight automation — booking, BL processing, tracking, customs docs, and carrier management.',
    capabilities: [
      'Automated booking confirmation and carrier communication',
      'BL processing, validation, and amendment management',
      'Real-time container tracking with proactive exception alerting',
      'Automated customs documentation preparation',
      'Demurrage and detention tracking with proactive intervention',
    ],
    metrics: [
      '65% reduction in manual touchpoints',
      '80% faster document processing',
      '45% fewer shipment exceptions',
      '99.5% documentation accuracy',
    ],
    url: '/solutions/sea-freight-automation',
  },
  {
    slug: 'air-freight-automation',
    name: 'Air Freight Operations Automation',
    oneLiner: 'AI-powered air freight ops — AWB processing, carrier booking, flight tracking, and compliance documentation.',
    capabilities: [
      'Automated AWB processing and validation',
      'AI-powered carrier rate comparison and booking',
      'Real-time flight tracking and milestone updates',
      'Automated customs and security documentation',
      'ULD optimization and space allocation',
    ],
    metrics: [
      '70% faster AWB processing',
      '50% reduction in booking errors',
      '35% better capacity utilization',
      '90% on-time documentation completion',
    ],
    url: '/solutions/air-freight-automation',
  },
  {
    slug: '3pl-4pl-operations',
    name: '3PL & 4PL Operations Automation',
    oneLiner: 'Multi-client workflow orchestration — SLA monitoring, exception management, and client-specific reporting.',
    capabilities: [
      'Multi-client workflow orchestration',
      'Automated SLA monitoring and alerting',
      'Cross-client exception management',
      'Automated client reporting in client-specific formats',
      'Client-specific rule engine configuration',
    ],
    metrics: [
      '40% more clients per ops person',
      '99.2% SLA compliance rate',
      '55% reduction in ops overhead per client',
      '3x faster client onboarding',
    ],
    url: '/solutions/3pl-4pl-operations',
  },
  {
    slug: 'smart-invoice-processing',
    name: 'Smart Invoice Processing',
    oneLiner: 'Automated freight invoice extraction, 3-way matching, carrier rate audit, and overcharge detection.',
    capabilities: [
      'Multi-format invoice data extraction',
      'Automated 3-way matching (PO/booking, receipt, invoice)',
      'Carrier rate audit and overcharge detection',
      'Discrepancy detection and dispute management',
      'Direct ERP and accounting system integration',
    ],
    metrics: [
      '80% reduction in manual AP processing',
      '95% first-pass match rate',
      '4.2% average overcharge detection rate',
      '60% faster invoice cycle time',
    ],
    url: '/solutions/smart-invoice-processing',
  },
];

export const integrations: IntegrationKB[] = [
  {
    slug: 'cargowise',
    name: 'CargoWise',
    oneLiner: 'Deep integration via eHub/Universal Gateway — automated XML data push, document processing, and cargo intelligence.',
    url: '/integrations/cargowise',
  },
  {
    slug: 'sap-tm',
    name: 'SAP TM',
    oneLiner: 'Classic SAP TM and S/4HANA integration via APIs, BAPIs, and RFC calls.',
    url: '/integrations/sap-tm',
  },
  {
    slug: 'oracle-tms',
    name: 'Oracle TMS',
    oneLiner: 'Oracle OTM Cloud and on-premise integration via REST APIs.',
    url: '/integrations/oracle-tms',
  },
  {
    slug: 'microsoft-dynamics',
    name: 'Microsoft Dynamics 365',
    oneLiner: 'Dynamics 365 Finance/Supply Chain integration — Azure-native with Power Automate.',
    url: '/integrations/microsoft-dynamics',
  },
  {
    slug: 'descartes',
    name: 'Descartes',
    oneLiner: 'Customs and compliance integration — GLN APIs, EDI messaging, compliance workflows.',
    url: '/integrations/descartes',
  },
];
