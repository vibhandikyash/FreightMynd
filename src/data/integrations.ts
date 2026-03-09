export interface Integration {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  keyword: string;
  logo: string;
  capabilities: string[];
  faq: Array<{ q: string; a: string }>;
}

export const integrations: Integration[] = [
  {
    slug: 'cargowise',
    title: 'CargoWise AI Integration',
    shortTitle: 'CargoWise',
    keyword: 'CargoWise AI integration',
    description: 'Deep AI integration with CargoWise One — automated XML data push, document processing, and operations intelligence built on your existing CargoWise instance.',
    logo: 'cargowise',
    capabilities: [
      'Direct XML data push into CargoWise modules',
      'Automated document attachment and linking',
      'Real-time shipment data synchronization',
      'Custom workflow triggers based on CargoWise events',
      'Batch processing with error handling and retry logic',
    ],
    faq: [
      { q: 'How does CargoIQ integrate with CargoWise?', a: 'We use the CargoWise API and XML interface to push extracted and validated data directly into your CargoWise instance — no manual entry, no CSV imports.' },
      { q: 'Do we need to modify our CargoWise configuration?', a: 'Minimal configuration changes. We work with your existing CargoWise setup and adapt our integration to your specific module configuration.' },
      { q: 'Is data pushed in real-time?', a: 'Yes. Processed documents are pushed to CargoWise as soon as validation is complete, typically within seconds of extraction.' },
    ],
  },
  {
    slug: 'sap-tm',
    title: 'SAP TM AI Integration',
    shortTitle: 'SAP TM',
    keyword: 'SAP TM AI integration',
    description: 'AI-powered automation layered on SAP Transportation Management — document processing, data enrichment, and operational intelligence.',
    logo: 'sap',
    capabilities: [
      'SAP TM freight order automation',
      'Automated document processing and data entry',
      'Real-time shipment visibility enhancement',
      'Custom BAPI/RFC integration points',
      'Carrier communication automation via SAP TM',
    ],
    faq: [
      { q: 'How does CargoIQ work with SAP TM?', a: 'We integrate via SAP APIs, BAPIs, and RFC calls to automate document processing, freight order creation, and data enrichment within your existing SAP TM environment.' },
      { q: 'Do we need SAP BTP?', a: 'Not required. We can integrate directly with your SAP TM instance, though BTP can provide additional flexibility for complex integration scenarios.' },
      { q: 'Can it handle SAP S/4HANA Transportation Management?', a: 'Yes. We support both classic SAP TM and the embedded TM in S/4HANA.' },
    ],
  },
  {
    slug: 'oracle-tms',
    title: 'Oracle TMS AI Integration',
    shortTitle: 'Oracle TMS',
    keyword: 'Oracle TMS AI integration',
    description: 'AI automation for Oracle Transportation Management — intelligent document processing, shipment automation, and operational analytics.',
    logo: 'oracle',
    capabilities: [
      'Oracle OTM shipment automation',
      'Automated document processing and attachment',
      'Rate management integration',
      'Real-time visibility and event management',
      'Custom integration via Oracle REST APIs',
    ],
    faq: [
      { q: 'Which Oracle TMS versions are supported?', a: 'We support Oracle OTM Cloud and on-premise versions, including Oracle Transportation Management Cloud and Oracle Global Trade Management.' },
      { q: 'How does data flow between CargoIQ and Oracle TMS?', a: 'Via Oracle REST APIs and web services. Extracted document data is pushed into OTM as shipment updates, document attachments, or new order records.' },
      { q: 'Can it work alongside existing Oracle integrations?', a: 'Yes. Our integration layer works alongside your existing Oracle integration infrastructure without interference.' },
    ],
  },
  {
    slug: 'microsoft-dynamics',
    title: 'Microsoft Dynamics AI Integration',
    shortTitle: 'Microsoft Dynamics',
    keyword: 'Microsoft Dynamics freight AI integration',
    description: 'AI-powered freight automation for Microsoft Dynamics 365 — document intelligence, workflow automation, and operational analytics.',
    logo: 'dynamics',
    capabilities: [
      'Dynamics 365 Supply Chain Management integration',
      'Automated document processing with Dynamics data push',
      'Power Automate workflow integration',
      'Custom Dataverse entity creation and updates',
      'Azure-native deployment for optimal performance',
    ],
    faq: [
      { q: 'Does it work with Dynamics 365 Finance and Supply Chain?', a: 'Yes. We integrate with both Finance and Supply Chain Management modules, pushing extracted data into the relevant entities.' },
      { q: 'Can it use Power Automate for workflows?', a: 'Yes. We can trigger Power Automate flows from our processing pipeline, or integrate directly via Dynamics APIs — whichever fits your architecture.' },
      { q: 'Is Azure required?', a: 'Not strictly required, but recommended for optimal performance since Dynamics 365 runs on Azure. We can deploy on other cloud platforms if needed.' },
    ],
  },
  {
    slug: 'descartes',
    title: 'Descartes AI Integration',
    shortTitle: 'Descartes',
    keyword: 'Descartes logistics AI integration',
    description: 'AI automation for Descartes logistics platform — document intelligence, customs automation, and operational analytics.',
    logo: 'descartes',
    capabilities: [
      'Descartes GLN and customs automation integration',
      'Automated document processing for Descartes workflows',
      'Trade compliance data enrichment',
      'Shipment visibility enhancement',
      'EDI message generation and processing',
    ],
    faq: [
      { q: 'Which Descartes products are supported?', a: 'We integrate with Descartes Global Logistics Network, Customs & Regulatory Compliance, and Transportation Management products.' },
      { q: 'Can it handle Descartes customs filing?', a: 'Yes. Extracted document data can be automatically formatted and submitted for customs filing through the Descartes customs automation modules.' },
      { q: 'How does EDI integration work?', a: 'We generate properly formatted EDI messages from extracted document data and route them through your existing Descartes EDI infrastructure.' },
    ],
  },
];
