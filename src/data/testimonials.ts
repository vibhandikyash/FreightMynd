export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'CargoIQ replaced what would have taken us 6 months of internal development. The 4PL control tower system processes our 300-page document batches with near-zero failure — something we couldn\'t achieve manually.',
    author: 'Operations Director',
    role: 'Operations',
    company: 'Hellmann Worldwide Logistics',
  },
  {
    quote: 'The AI document filtering alone cut our processing costs in half. We went from hours of manual data entry to fully automated CargoWise integration in under 12 weeks.',
    author: 'IT Manager',
    role: 'Technology',
    company: 'Global Freight Forwarder',
  },
  {
    quote: 'What sets CargoIQ apart is that they built around our systems, not theirs. Our CargoWise instance, our supplier formats, our validation rules — all custom, all ours to own.',
    author: 'VP of Operations',
    role: 'Operations',
    company: 'Mid-Market 3PL Provider',
  },
];
