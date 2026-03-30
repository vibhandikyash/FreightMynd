export interface Integration {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  logo: string;
  /** Opening paragraph about this TMS/platform */
  intro: string;
  /** How FreightMynd connects technically */
  architecture: {
    connectionMethod: string;
    supportedVersions: string;
    dataObjects: string[];
  };
  capabilities: Array<{ title: string; description: string }>;
  /** Optional proof block for Hellmann */
  proofBlock?: string;
  faq: Array<{ q: string; a: string }>;
  /** Solutions most relevant to this integration */
  relatedSolutions?: string[];
}

export const integrations: Integration[] = [
  {
    slug: 'cargowise',
    title: 'CargoWise AI Integration',
    shortTitle: 'CargoWise',
    keyword: 'CargoWise AI integration',
    description: 'Deep AI integration with CargoWise One — automated XML data push, document processing, and cargo data intelligence built on your existing CargoWise instance.',
    metaTitle: 'CargoWise AI Integration — Automated XML Push & Zero Manual TMS Entry | FreightMynd',
    metaDescription: 'CargoWise OCR, data entry automation, and document automation — AI-powered extraction, validation, and eHub XML push. Zero manual entry. Live for global freight operators.',
    logo: 'cargowise',
    intro: 'CargoWise One is the dominant TMS in freight forwarding, used by thousands of freight forwarders, customs brokers, and 3PLs worldwide. It is the operational backbone for companies ranging from mid-market forwarders to global enterprises like Hellmann Worldwide Logistics, Kuehne+Nagel, and DB Schenker. FreightMynd builds deep, native AI integration with CargoWise — not a surface-level connector, but a full CargoWise freight automation layer that pushes validated data directly into your CargoWise modules via eHub and Universal Gateway. Our CargoWise document processing pipeline handles invoices, AWBs, packing lists, and compliance documents end to end.',
    architecture: {
      connectionMethod: 'CargoWise eHub and Universal Gateway APIs',
      supportedVersions: 'CargoWise One (CW1), all current versions',
      dataObjects: [
        'Forwarding module shipment records',
        'Customs module declarations',
        'Accounting module charge codes and postings',
        'Rate module data synchronization',
        'Document management module attachments',
      ],
    },
    capabilities: [
      {
        title: 'Shipment record creation from extracted document data',
        description: 'Extracted fields from invoices, AWBs, and packing lists are mapped to CargoWise shipment record fields and pushed via XML. The system handles the complexity of CW1\'s XML schema — party data, reference numbers, charge codes, and module-specific field mappings — so your team never manually enters routine document data into CargoWise.',
      },
      {
        title: 'Document attachment and linking to shipment records',
        description: 'Source documents (PDFs, images) are automatically attached to the correct CargoWise shipment record, linked by reference number. Operators can access the original document directly from within CargoWise without searching email or shared drives.',
      },
      {
        title: 'Customs declaration pre-population',
        description: 'Extracted data from commercial invoices, packing lists, and certificates of origin is mapped to CargoWise customs module fields — HS codes, values, quantities, country of origin — pre-populating declarations and reducing customs processing time by 60-70%.',
      },
      {
        title: 'Rate module data synchronization',
        description: 'Carrier rate data extracted from rate sheets, contract PDFs, and carrier portal exports is structured and pushed into CargoWise\'s rate module, keeping your rate data current without manual rate card maintenance.',
      },
      {
        title: 'Accounting charge code mapping and posting',
        description: 'Invoice line items are mapped to your CargoWise chart of accounts and charge code structure, enabling automated cost posting that matches your existing accounting configuration.',
      },
      {
        title: 'Automated workflow triggers on CargoWise events',
        description: 'CargoWise events (shipment creation, milestone updates, document receipt) can trigger downstream FreightMynd processing — enabling bi-directional automation where CargoWise and the AI layer work in concert.',
      },
    ],
    proofBlock: 'We built and deployed this integration for Hellmann Worldwide Logistics — processing 200–300 page document batches with near-zero failure rate and zero manual TMS data entry. Every extracted, validated field goes directly into CargoWise via XML. No human ever touches the TMS for routine document data.',
    faq: [
      {
        q: 'How does FreightMynd integrate with CargoWise?',
        a: 'We use the CargoWise eHub and Universal Gateway APIs to push extracted, validated data directly into your CargoWise instance as XML. The integration covers the Forwarding module (shipment records, parties, references), Customs module (declaration pre-population), Accounting module (charge posting), and Document Management (PDF attachments). No manual entry, no CSV imports, no middleware layer.',
      },
      {
        q: 'Do we need to modify our CargoWise configuration?',
        a: 'Minimal changes. We work with your existing CargoWise setup — your module configuration, your charge code structure, your reference number conventions. The integration adapts to your CargoWise instance, not the other way around. Typically the only configuration required is enabling API access and providing authentication credentials.',
      },
      {
        q: 'Is data pushed in real-time?',
        a: 'Yes. Processed documents are pushed to CargoWise as soon as extraction and validation are complete, typically within seconds. For batch processing (e.g., large document bundles), records are pushed sequentially as each document completes validation, so CargoWise data is always current without waiting for the full batch.',
      },
      {
        q: 'Does it work with CargoWise multi-company environments?',
        a: 'Yes. We handle multi-company CargoWise environments by routing data to the correct company entity based on document content, reference numbers, or configurable routing rules. Each company\'s data isolation and access controls are respected.',
      },
      {
        q: 'Do you use the eHub or Universal Gateway?',
        a: 'Both, depending on your CargoWise configuration and the data being pushed. eHub is used for standard XML data push (shipment records, customs data, accounting entries). Universal Gateway is used for more complex integration scenarios including bi-directional data exchange and event-driven workflows. We recommend the optimal approach during our discovery phase.',
      },
      {
        q: 'What CargoWise modules does the integration cover?',
        a: 'Forwarding (shipment records, consol management), Customs (declaration pre-population, tariff data), Accounting (charge posting, cost allocation), Document Management (PDF attachment and linking), and Rate Management (rate card updates). We can extend to additional modules based on your specific workflow requirements.',
      },
      {
        q: 'Can it work alongside our existing CargoWise customizations?',
        a: 'Yes. We work within your existing CargoWise customization framework — custom fields, custom workflows, custom charge codes. During discovery, we map your specific customizations and ensure our integration respects and builds on them rather than conflicting with them.',
      },
    ],
    relatedSolutions: ['4pl-control-tower-automation', 'document-intelligence', 'smart-invoice-processing', 'autonomous-quote-management', 'sea-freight-automation', 'freight-revenue-recovery', 'freight-spend-analytics', 'freight-pricing-ai', 'air-freight-automation', 'customs-automation', 'freight-document-automation', 'tms-automation'],
  },
  {
    slug: 'sap-tm',
    title: 'SAP TM AI Integration',
    shortTitle: 'SAP TM',
    keyword: 'SAP TM AI integration',
    description: 'AI-powered automation layered on SAP Transportation Management — document processing, data enrichment, and operational intelligence.',
    metaTitle: 'SAP TM & S/4HANA AI Integration | FreightMynd',
    metaDescription: 'AI automation for SAP Transportation Management — freight order creation, document processing, and operational intelligence for classic SAP TM and S/4HANA.',
    logo: 'sap',
    intro: 'SAP Transportation Management is the TMS of choice for large shippers and logistics service providers running complex, high-volume freight operations. Whether you run classic SAP TM or the embedded Transportation Management module in S/4HANA, FreightMynd layers SAP logistics AI on top of your existing SAP environment — automating document processing, freight order creation, and operational intelligence without replacing or disrupting your SAP infrastructure.',
    architecture: {
      connectionMethod: 'SAP APIs, BAPIs, RFC calls, SAP Integration Suite (BTP optional)',
      supportedVersions: 'SAP TM classic, SAP S/4HANA embedded Transportation Management',
      dataObjects: [
        'Freight Order',
        'Freight Booking',
        'Transportation Request',
        'Carrier Invoice',
        'Shipment Document',
      ],
    },
    capabilities: [
      {
        title: 'Freight order creation from extracted shipment documents',
        description: 'Extracted data from shipping documents is mapped to SAP TM freight order structures and created via BAPI calls. Handles complex freight order hierarchies including multi-leg, multi-modal orders with proper stage and item structuring.',
      },
      {
        title: 'Automated document attachment to SAP TM objects',
        description: 'Source documents are attached to the corresponding SAP TM objects (freight orders, bookings, transportation requests) with proper document type classification, enabling operators to access originals directly from SAP.',
      },
      {
        title: 'Transportation request data enrichment',
        description: 'Incoming transportation requests are enriched with extracted document data — verified weights, dimensions, commodity details, and special handling requirements — reducing manual data completion and improving planning accuracy.',
      },
      {
        title: 'Carrier invoice processing and matching against freight orders',
        description: 'Carrier invoices are extracted, matched against the originating freight orders in SAP TM, audited for rate accuracy against contracted tariffs, and routed for approval or dispute — all within your existing SAP workflow.',
      },
      {
        title: 'Real-time shipment event updates from carrier APIs into SAP TM',
        description: 'Carrier tracking data and milestone events from external APIs are mapped to SAP TM event management, updating shipment status in real-time and triggering SAP-native alerts and workflows when exceptions occur.',
      },
    ],
    faq: [
      {
        q: 'How does FreightMynd work with SAP TM?',
        a: 'We integrate via SAP APIs, BAPIs, and RFC calls to automate document processing, freight order creation, and data enrichment within your existing SAP TM environment. The integration uses your existing SAP authorization model and respects your custom configurations. For S/4HANA environments, we also support OData services and CDS views.',
      },
      {
        q: 'Do we need SAP BTP?',
        a: 'Not required. We can integrate directly with your SAP TM instance via standard APIs, BAPIs, and RFC calls. SAP BTP (Business Technology Platform) and SAP Integration Suite can provide additional flexibility for complex integration scenarios — such as event-driven architectures or multi-system orchestration — but they are not prerequisites.',
      },
      {
        q: 'Can it handle SAP S/4HANA Transportation Management?',
        a: 'Yes. We support both classic SAP TM and the embedded Transportation Management module in S/4HANA. The integration approach adapts to your specific SAP landscape — using the appropriate APIs and data models for your version.',
      },
      {
        q: 'What SAP TM objects does FreightMynd write to?',
        a: 'Freight Orders, Freight Bookings, Transportation Requests, Shipment Documents, and Carrier Invoices. We also update custom fields and trigger SAP workflow events where configured. The specific objects depend on your operational workflow — we map these during the discovery phase.',
      },
      {
        q: 'Does it require SAP Integration Suite?',
        a: 'No. Direct API integration is the default approach. SAP Integration Suite (formerly SAP Cloud Platform Integration) is an option for companies that prefer a managed integration layer or need to orchestrate data flows across multiple SAP and non-SAP systems.',
      },
      {
        q: 'How does it handle SAP authorization and role management?',
        a: 'The integration uses a dedicated SAP service user with authorizations scoped to exactly the objects and operations required — no broader access than needed. All actions are logged under this service user for audit purposes. We work with your SAP Basis team during setup to define the appropriate authorization profile.',
      },
    ],
    relatedSolutions: ['4pl-control-tower-automation', 'freight-pricing-ai', '3pl-4pl-operations', 'autonomous-quote-management', 'freight-revenue-recovery', 'freight-spend-analytics', 'freight-document-automation', 'tms-automation'],
  },
  {
    slug: 'oracle-tms',
    title: 'Oracle TMS AI Integration',
    shortTitle: 'Oracle TMS',
    keyword: 'Oracle TMS AI integration',
    description: 'AI automation for Oracle Transportation Management — intelligent document processing, shipment automation, and operational analytics.',
    metaTitle: 'Oracle TMS AI Integration | FreightMynd',
    metaDescription: 'AI automation for Oracle Transportation Management Cloud and on-premise — document intelligence, shipment automation, and freight analytics.',
    logo: 'oracle',
    intro: 'Oracle Transportation Management (OTM) serves enterprise shippers, 3PLs, and global trade management operations with comprehensive transportation planning, execution, and settlement capabilities. Whether you run Oracle OTM Cloud or on-premise, FreightMynd integrates AI-powered document intelligence and operational automation via Oracle\'s REST APIs and web services — extending your OTM\'s capabilities without replacing or disrupting your existing Oracle infrastructure.',
    architecture: {
      connectionMethod: 'Oracle REST APIs and web services',
      supportedVersions: 'Oracle OTM Cloud, Oracle OTM on-premise, Oracle Global Trade Management (GTM)',
      dataObjects: [
        'Shipment',
        'Order Release',
        'Bill',
        'Document',
        'Rate Offering',
      ],
    },
    capabilities: [
      {
        title: 'Shipment creation and enrichment from extracted documents',
        description: 'Extracted data from freight documents is mapped to OTM shipment objects and created or updated via REST APIs. Handles complex multi-stop, multi-leg shipments with proper stop sequence, equipment, and service provider assignments.',
      },
      {
        title: 'Automated document attachment and classification',
        description: 'Source documents are classified by type and attached to the correct OTM shipment or order record, with metadata tags enabling Oracle\'s document search and retrieval capabilities.',
      },
      {
        title: 'Order release data population from commercial documents',
        description: 'Commercial invoices and purchase orders are extracted and mapped to OTM order releases, pre-populating item details, quantities, weights, and special handling requirements before planning runs.',
      },
      {
        title: 'Carrier invoice processing via Oracle Financials integration',
        description: 'Carrier invoices are extracted, matched against OTM shipment costs, audited for rate accuracy, and routed through Oracle\'s settlement workflow — catching overcharges and enabling automated or semi-automated payment processing.',
      },
      {
        title: 'Real-time event management from carrier tracking APIs',
        description: 'Carrier milestone data is mapped to OTM\'s event management framework, updating shipment status and triggering OTM-native exception management workflows when deviations are detected.',
      },
    ],
    faq: [
      {
        q: 'Which Oracle TMS versions are supported?',
        a: 'We support Oracle OTM Cloud, Oracle OTM on-premise (all actively maintained versions), and Oracle Global Trade Management (GTM). The integration approach adapts to your deployment model — cloud APIs for OTM Cloud, web services for on-premise — so you get the same automation capability regardless of your Oracle hosting choice.',
      },
      {
        q: 'How does data flow between FreightMynd and Oracle Transportation Management?',
        a: 'Via Oracle REST APIs and web services. Extracted document data is validated against your business rules, then pushed into Oracle OTM as shipment records, order releases, document attachments, or billing updates. The data flow is one-directional by default (FreightMynd to OTM), with optional bi-directional sync for event-driven workflows where OTM events trigger FreightMynd processing.',
      },
      {
        q: 'Can it work alongside existing Oracle integrations?',
        a: 'Yes. Our integration layer operates independently of your existing Oracle integration infrastructure — EDI connections, middleware, or other third-party integrations continue to function without interference. We use dedicated API credentials and can be scoped to specific OTM modules to avoid any overlap with existing data flows.',
      },
      {
        q: 'Does it integrate with Oracle Financials for invoice processing?',
        a: 'Yes. Carrier invoices extracted and validated by FreightMynd can be routed through Oracle\'s settlement and payment workflows. The integration maps invoice line items to OTM shipment costs, performs rate auditing against contracted tariffs, and posts approved charges to Oracle Financials — reducing manual invoice processing and catching billing discrepancies automatically.',
      },
      {
        q: 'How does FreightMynd handle Oracle OTM\'s complex shipment structures?',
        a: 'We map extracted document data to OTM\'s full shipment object model — including multi-stop shipments, multi-leg routes, equipment assignments, and service provider allocations. The integration handles the complexity of OTM\'s data model so your team receives fully structured shipment records without manual data assembly.',
      },
      {
        q: 'What is the implementation timeline for Oracle TMS integration?',
        a: 'Typically 10-16 weeks from kickoff to production, depending on the complexity of your Oracle environment and the number of document types being automated. We start with a discovery phase to map your OTM configuration, followed by integration development, testing in your environment, and phased production rollout.',
      },
    ],
    relatedSolutions: ['document-intelligence', 'sea-freight-automation', 'smart-invoice-processing', '3pl-4pl-operations', 'freight-document-automation', 'tms-automation'],
  },
  {
    slug: 'microsoft-dynamics',
    title: 'Microsoft Dynamics AI Integration',
    shortTitle: 'Microsoft Dynamics',
    keyword: 'Microsoft Dynamics freight AI integration',
    description: 'AI-powered freight automation for Microsoft Dynamics 365 — document intelligence, workflow automation, and operational analytics.',
    metaTitle: 'Dynamics 365 Freight AI Integration | FreightMynd',
    metaDescription: 'AI-powered freight automation for Microsoft Dynamics 365 — Azure-native deployment, Power Automate integration, and automated document processing.',
    logo: 'dynamics',
    intro: 'Microsoft Dynamics 365 serves mid-market to enterprise logistics operations with its Finance and Supply Chain Management modules, making Microsoft Dynamics TMS a popular choice for freight forwarders and 3PLs. Because Dynamics 365 runs natively on Azure — and FreightMynd deploys on Azure — the integration delivers native performance with no data leaving the Microsoft ecosystem. This simplifies security compliance, reduces latency, and enables direct access to Power Automate logistics workflows, Dataverse, and Azure services as part of the automation pipeline.',
    architecture: {
      connectionMethod: 'Dynamics 365 REST APIs, Dataverse, Power Automate flows',
      supportedVersions: 'Dynamics 365 Finance and Operations, Supply Chain Management',
      dataObjects: [
        'Sales Order',
        'Purchase Order',
        'Shipment',
        'Vendor Invoice',
        'Custom Dataverse entities',
      ],
    },
    capabilities: [
      {
        title: 'Automated freight document processing with Dynamics data push',
        description: 'Extracted data from freight documents is pushed directly into Dynamics 365 entities — sales orders, purchase orders, shipments, and vendor invoices — via the Dataverse API. Field mapping respects your Dynamics customizations and business logic.',
      },
      {
        title: 'Power Automate workflow integration',
        description: 'FreightMynd processing events trigger Power Automate flows for downstream actions — approval workflows, email notifications, Teams messages, or updates to connected systems. This integrates AI automation into your existing Microsoft workflow ecosystem.',
      },
      {
        title: 'Custom Dataverse entity creation and updates',
        description: 'For freight-specific data that doesn\'t map to standard Dynamics entities, we create custom Dataverse entities that store extracted shipment data, processing metadata, and audit information — accessible from within Dynamics and Power BI.',
      },
      {
        title: 'Azure-native deployment for optimal performance',
        description: 'Deployed within Azure in the same region as your Dynamics 365 tenant, minimising latency and keeping all data within the Microsoft cloud ecosystem. Uses Azure Active Directory for authentication and Azure Key Vault for secrets management.',
      },
      {
        title: 'Supply Chain Management module integration',
        description: 'Direct integration with Dynamics 365 Supply Chain Management for transportation management, warehouse operations, and inventory visibility — enriching these modules with AI-extracted document data and carrier tracking intelligence.',
      },
    ],
    faq: [
      {
        q: 'Does it work with Dynamics 365 Finance and Supply Chain?',
        a: 'Yes. We integrate with both Finance and Supply Chain Management modules, pushing extracted data into the relevant entities — sales orders, purchase orders, shipments, vendor invoices, and custom entities. The integration uses standard Dynamics 365 REST APIs and Dataverse, so it works with your existing security roles and business logic.',
      },
      {
        q: 'Can it use Power Automate for workflows?',
        a: 'Yes. FreightMynd processing events can trigger Power Automate flows for downstream actions — approval workflows, email notifications, Teams messages, SharePoint document storage, or updates to connected systems. This means your existing Power Automate infrastructure extends naturally to include AI-processed freight data.',
      },
      {
        q: 'Is Azure required?',
        a: 'Strongly recommended but not strictly required. Because Dynamics 365 runs natively on Azure, deploying FreightMynd on Azure in the same region delivers the best performance, lowest latency, and simplest security configuration. All data stays within the Microsoft ecosystem, which simplifies compliance. We can deploy on other cloud platforms if your architecture requires it, but Azure-native is the recommended approach.',
      },
      {
        q: 'How does authentication work with Dynamics 365?',
        a: 'The integration uses Azure Active Directory (Entra ID) for authentication with a dedicated application registration and service principal. Access is scoped to exactly the Dynamics 365 entities and operations required using your existing security roles. All API calls are authenticated via OAuth 2.0 client credentials flow with proper token management.',
      },
      {
        q: 'Can it write to custom Dynamics entities?',
        a: 'Yes. We create custom Dataverse entities for freight-specific data that doesn\'t fit standard Dynamics entities — shipment processing metadata, document extraction audit trails, and carrier tracking data. These custom entities are fully accessible from within Dynamics, Power BI, and Power Automate, giving your team visibility into the AI processing pipeline directly from their familiar tools.',
      },
      {
        q: 'Does it support multi-company Dynamics environments?',
        a: 'Yes. We handle multi-company (multi-legal-entity) Dynamics 365 environments by routing data to the correct legal entity based on document content, reference numbers, or configurable routing rules. Each entity\'s data isolation, security roles, and business logic are respected throughout the integration.',
      },
    ],
    relatedSolutions: ['3pl-4pl-operations', 'smart-invoice-processing', 'autonomous-quote-management', 'freight-document-automation', 'tms-automation'],
  },
  {
    slug: 'descartes',
    title: 'Descartes AI Integration',
    shortTitle: 'Descartes',
    keyword: 'Descartes logistics AI integration',
    description: 'AI automation for Descartes logistics platform — document intelligence, customs automation, and operational analytics.',
    metaTitle: 'Descartes AI Integration | FreightMynd',
    metaDescription: 'AI automation for the Descartes logistics platform — customs declaration automation, trade compliance data enrichment, and EDI processing.',
    logo: 'descartes',
    intro: 'Descartes is strongest in customs and trade compliance — and that\'s where FreightMynd\'s trade compliance AI and document extraction create the most value. By feeding AI-extracted data from commercial invoices, packing lists, and certificates of origin directly into Descartes customs workflows, we deliver customs declaration automation that removes the most time-consuming part of customs processing: the manual extraction and re-keying of declaration data from source documents.',
    architecture: {
      connectionMethod: 'Descartes Global Logistics Network (GLN), Descartes APIs, EDI messaging',
      supportedVersions: 'Descartes GLN, Customs & Regulatory Compliance, Descartes TMS',
      dataObjects: [
        'Customs Declaration',
        'EDI Message',
        'Shipment Record',
        'Compliance Screening Request',
        'Trade Document',
      ],
    },
    capabilities: [
      {
        title: 'AI extraction feeding Descartes customs declaration pre-population',
        description: 'Commercial invoices, packing lists, and certificates of origin are extracted by AI and mapped to Descartes customs declaration fields — commodity descriptions, HS codes, values, quantities, country of origin, and party data. This pre-populates declarations and reduces customs processing time by 60-70%.',
      },
      {
        title: 'HS code extraction and validation against Descartes tariff databases',
        description: 'AI extracts commodity descriptions and suggested HS codes from commercial documents, then validates them against Descartes tariff databases for accuracy and compliance. Uncertain classifications are flagged for customs broker review with the AI\'s suggested codes and confidence scores.',
      },
      {
        title: 'Denied party screening data enrichment via Descartes compliance modules',
        description: 'Party data extracted from shipping documents (shippers, consignees, notify parties) is automatically screened against Descartes compliance databases for denied parties, sanctioned entities, and restricted end-users — before the shipment progresses.',
      },
      {
        title: 'Automated EDI message generation from extracted document data',
        description: 'Extracted, validated data is formatted into properly structured EDI messages (EDIFACT, ANSI X12, or Descartes proprietary formats) and transmitted through your existing Descartes EDI infrastructure — eliminating manual EDI message creation.',
      },
      {
        title: 'Trade document classification for Descartes workflow routing',
        description: 'Incoming documents are classified by type (invoice, packing list, CoO, DG declaration, insurance certificate) and automatically routed to the appropriate Descartes workflow — customs, compliance, or trade management — based on configurable rules.',
      },
    ],
    faq: [
      {
        q: 'Which Descartes products are supported?',
        a: 'We integrate with the Descartes Global Logistics Network (GLN), Customs & Regulatory Compliance modules, and Descartes TMS. The integration focus is on customs declaration automation and trade compliance data enrichment — the areas where AI document extraction delivers the most operational value for Descartes users.',
      },
      {
        q: 'Can it handle Descartes customs filing?',
        a: 'Yes. AI-extracted data from commercial invoices, packing lists, and certificates of origin is mapped to Descartes customs declaration fields and pre-populated before filing. This includes commodity descriptions, HS codes, values, quantities, country of origin, and party data. The customs broker reviews pre-populated declarations rather than manually keying data from source documents.',
      },
      {
        q: 'How does EDI integration work?',
        a: 'Extracted, validated data is formatted into properly structured EDI messages — EDIFACT, ANSI X12, or Descartes proprietary formats depending on your configuration — and transmitted through your existing Descartes EDI infrastructure. This eliminates manual EDI message creation and reduces the risk of formatting errors that cause message rejections.',
      },
      {
        q: 'Does it support denied party screening?',
        a: 'Yes. Party data extracted from shipping documents (shippers, consignees, notify parties, and other involved parties) is automatically fed into Descartes compliance screening modules for denied party checks, sanctioned entity screening, and restricted end-user validation. Screening happens automatically as part of the document processing pipeline, before the shipment progresses.',
      },
      {
        q: 'How are HS codes validated?',
        a: 'AI extracts commodity descriptions and suggested HS codes from commercial documents. These are then validated against Descartes tariff databases for accuracy, checking that the code exists, matches the commodity description, and is current. Uncertain classifications are flagged for customs broker review with the AI\'s suggested codes and confidence scores, rather than being auto-submitted.',
      },
      {
        q: 'What document types can be processed for customs workflows?',
        a: 'Commercial invoices, packing lists, certificates of origin, dangerous goods declarations, insurance certificates, phytosanitary certificates, and other trade documents. Each document type is classified automatically and routed to the appropriate Descartes workflow — customs, compliance, or trade management — based on configurable rules that match your operational procedures.',
      },
    ],
    relatedSolutions: ['sea-freight-automation', 'air-freight-automation', 'document-intelligence', 'freight-document-automation', 'tms-automation', 'customs-automation'],
  },
];
