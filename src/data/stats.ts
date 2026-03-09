export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export const heroStats: Stat[] = [
  { value: '60', label: 'Freight processing time reduction', suffix: '%' },
  { value: '50', label: 'AI cost reduction via smart filtering', suffix: '%' },
  { value: '300', label: 'Document batches processed at near-zero failure', suffix: 'pg' },
  { value: '6', label: 'Domain AI engineering depth', suffix: 'yr' },
];
