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
    author: 'CargoIQ Team',
    category: 'Guides',
    tags: ['AI', 'freight forwarding', 'automation', '4PL'],
    featured: true,
    readingTime: '18 min read',
  },
];
