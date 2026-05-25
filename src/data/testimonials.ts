export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  context?: string;
  verified?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'FreightMynd replaced what would have taken us 6 months of internal development. The 4PL control tower system processes our 300-page document batches with near-zero failure — something we couldn\'t achieve manually.',
    author: 'Operations Director',
    role: 'Operations Director',
    company: 'Global Freight Forwarder',
    context: 'Processing 200+ documents daily via automated pipeline',
    verified: true,
  },
  {
    quote: 'The AI document filtering alone cut our processing costs in half. We went from hours of manual data entry to fully automated CargoWise integration in under 12 weeks.',
    author: 'IT Manager',
    role: 'IT Manager',
    company: 'European Freight Forwarder (500+ employees)',
    context: '12-week implementation, fully automated CargoWise integration',
  },
  {
    quote: 'What sets FreightMynd apart is that they built around our systems, not theirs. Our CargoWise instance, our supplier formats, our validation rules — all custom, all ours to own.',
    author: 'VP of Operations',
    role: 'VP of Operations',
    company: 'Mid-Market 3PL (3 warehouses, SAP TM)',
    context: 'Custom system deployed in client Azure tenant',
  },
];
