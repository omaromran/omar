export interface PressItem {
  title: string;
  source: string;
  url: string;
  year: string;
  relevance: string;
  featured?: boolean;
}

export const press: PressItem[] = [
  {
    title: 'TEDx: Shyness is a Bacteria, Not a Parasite',
    source: 'YouTube / TEDx',
    url: 'https://www.youtube.com/watch?v=CedcZlS9ms4',
    year: '—',
    relevance: 'Keynote on reframing shyness through community and connection.',
    featured: true,
  },
  {
    title: 'BT150 Spotlight: Omar Jacques Omran — Innovation & Teamwork',
    source: 'Constellation Research',
    url: 'https://www.constellationr.com/insights/news/bt150-spotlight-omar-jacques-omran-innovation-teamwork',
    year: '2024',
    relevance: 'Spotlight profile as Top 150 Global Innovator.',
    featured: true,
  },
  {
    title: 'Business Transformation 150 Program',
    source: 'Constellation Research',
    url: 'https://www.constellationr.com/communities/business-transformation-150',
    year: '—',
    relevance: 'BT150 program overview.',
  },
  {
    title: 'BT150 Executives 2024–2025',
    source: 'Constellation Research',
    url: 'https://www.constellationr.com/communities/business-transformation-150/bt150-executives/2024-2025',
    year: '2024–2025',
    relevance: 'Official list including Omar Jacques Omran.',
  },
  {
    title: 'Six Flags to Accelerate Digital Transformation with Google Cloud Generative AI',
    source: 'PR Newswire',
    url: 'https://www.prnewswire.com/news-releases/six-flags-to-accelerate-digital-transformation-in-amusement-park-industry-and-launch-a-cutting-edge-virtual-assistant-powered-by-google-clouds-generative-ai-301912136.html',
    year: '—',
    relevance: 'AI virtual assistant and digital transformation partnership.',
    featured: true,
  },
  {
    title: 'Six Flags’ generative AI digital makeover for its app and website',
    source: 'Fast Company',
    url: 'https://www.fastcompany.com/91115050/six-flags-generative-ai-digital-makeover-app-website',
    year: '—',
    relevance: 'AI concierge and digital guest experience.',
    featured: true,
  },
  {
    title: 'Six Flags, Google Cloud partnership',
    source: 'Yahoo Finance',
    url: 'https://finance.yahoo.com/news/six-flags-six-google-cloud-161300443.html',
    year: '—',
    relevance: 'Six Flags and Google Cloud alliance.',
  },
  {
    title: 'Welbilt KitchenConnect and HCL Technologies',
    source: 'Welbilt Official',
    url: 'https://www.welbilt.com/News/News/2021/November/Welbilt-KitchenConnect-and-HCL-Technologies',
    year: '2021',
    relevance: 'Strategic partnership to scale KitchenConnect.',
  },
  {
    title: 'Welbilt upgrade: cloud solution through HCL and Microsoft Azure',
    source: 'FSR Magazine',
    url: 'https://www.fsrmagazine.com/industry-news/welbilt-upgrade-cloud-solution-through-hcl-technologies-and-microsoft-azure/',
    year: '—',
    relevance: 'Cloud and IoT platform upgrade.',
  },
  {
    title: 'Welbilt loads Microsoft to improve security of connected equipment',
    source: 'Foodservice Equipment Journal',
    url: 'https://www.foodserviceequipmentjournal.com/welbilt-loads-microsoft-to-improve-security-of-connected-equipment/',
    year: '—',
    relevance: 'Azure Sphere and connected equipment security.',
  },
];
