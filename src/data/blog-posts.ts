export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  author: string;
  category: string;
  tags: string[];
  featured: boolean;
  readingTime: string;
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: 'complete-guide-ai-automation-freight-forwarding-2026',
    title: 'The Complete Guide to AI Automation for Freight Forwarding in 2026',
    description: 'Everything freight forwarders need to know about AI automation — 4PL systems, quote management, document intelligence, and pricing AI. With real deployment examples.',
    publishDate: '2026-03-15',
    author: 'FreightMynd Team',
    category: 'Guides',
    tags: ['AI', 'freight forwarding', 'automation', '4PL'],
    featured: true,
    readingTime: '18 min read',
  },
  {
    slug: 'cargowise-ai-integration-guide',
    title: 'How to Integrate AI with CargoWise: A Technical Guide for Freight Forwarders',
    description: 'Step-by-step guide to building AI automation on top of CargoWise One — eHub integration, XML data push, document intelligence, and zero-touch TMS operations.',
    publishDate: '2026-03-01',
    author: 'FreightMynd Team',
    category: 'Technical',
    tags: ['CargoWise', 'integration', 'AI', 'TMS'],
    featured: false,
    readingTime: '12 min read',
  },
];
