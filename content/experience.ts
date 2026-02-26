export interface Role {
  company: string;
  title: string;
  location: string;
  dates: string;
  bullets: string[];
  whatIBuilt?: string[];
  url?: string;
}

export const experience: Role[] = [
  {
    company: 'Vibe Connect',
    title: 'Chief Executive Officer',
    location: 'Tampa, FL',
    dates: 'Apr 2025 – Present',
    url: 'https://vibeconnect.social',
    bullets: [
      'Founded and led Vibe, the first community social platform and MIT startup designed to bring social back to social media by centering real-life activities, events, and meaningful community connections.',
      'Launched on Feb 9th, 2026, at MIT with 75% first-week retention and a very high rate of positive testimonials.',
      'Designed Vibe for any kind of community worldwide—expanding to university campuses, retirement communities, HOAs, and businesses before opening for all communities.',
      'Content creators with a cumulative 17M followers have joined the platform.',
    ],
    whatIBuilt: ['Community-first social platform', 'MIT-backed startup', 'Multi-community expansion'],
  },
  {
    company: 'Six Flags Entertainment Corporation',
    title: 'Chief Technology Officer',
    location: 'Arlington, TX',
    dates: 'Aug 2022 – Aug 2024',
    bullets: [
      'Oversaw all technology functions across 27 parks, accountable for $1.5B in revenue systems.',
      'Led a technology organization of 55 FTEs, 100 seasonal staff, and 100 full-time contractors.',
      'Generated $100M in incremental net profit through digital transformation (growth + efficiency).',
      'Developed and executed the company’s 3-year digital roadmap, aligning guest-facing and backend platforms to business priorities.',
      'Positioned Six Flags as the most advanced AI-powered park system in the industry.',
      'Launched AI Concierge across web and mobile automating 30% of guest services; featured in the Google Next Keynote (1 of 7 global use cases).',
      'Deployed AI-powered trip planner, upsell engine, and real-time guest flow optimization—boosting app ratings from 4.0 to 4.6 on iOS.',
      'Implemented AI drowning prevention systems across all waterparks—world’s most comprehensive solution in its category.',
      'Founded the largest digital alliance in the theme park industry, with Google, Dell, Snowflake, HCLTech, Pure Imagination, and Fueled.',
      'Launched self-serve kiosks responsible for 40% of restaurant transactions and 29% of upsell revenue.',
      'Rebuilt sixflags.com (50M+ users/year) with improved UX, personalization, and mobile performance.',
      'Rolled out the first computer vision-based tollbooth system in the industry for license plate recognition, adopted by 10M+ cars.',
    ],
    whatIBuilt: [
      'AI Concierge (web + mobile)',
      '3-year digital roadmap',
      'Largest theme park digital alliance',
      'Six Flags Metaverse',
      'E-sports initiative (amusement parks)',
    ],
  },
  {
    company: 'Welbilt (Ali Group)',
    title: 'VP Digital Transformation & Managing Director, KitchenConnect',
    location: 'Tampa, FL',
    dates: 'Feb 2022 – Aug 2022',
    bullets: [
      'Led digital transformation across all brands and functions; created a 3-year technology roadmap.',
      'Scaled KitchenConnect into the world’s largest smart restaurant ecosystem with partners like Microsoft, AT&T, HCL, and TeamViewer.',
      'Rebuilt the org (65-person team) into a full business unit covering engineering, sales, marketing, and support.',
      'Delivered $100M in connected equipment sales; made KitchenConnect the first fully open-source, OEM-agnostic IoT platform in the food service industry.',
    ],
    whatIBuilt: ['World’s largest foodservice IoT platform', 'Open-source OEM-agnostic platform', '65-person business unit'],
  },
  {
    company: 'Welbilt (Ali Group)',
    title: 'Sr. Director, KitchenConnect',
    location: 'Tampa, FL',
    dates: 'Jan 2021 – Jan 2022',
    bullets: [
      'Managed KitchenConnect with 60 staff; grew it into the largest global foodservice IoT platform.',
      'Generated $75M in equipment sales and launched a channel partner program.',
      'Opened platform to all OEMs and developers, transforming it into an ecosystem product.',
      'Led onboarding of all Welbilt brands and expanded into non-Welbilt partners.',
    ],
    whatIBuilt: ['Channel partner program', 'Multi-OEM ecosystem'],
  },
  {
    company: 'Welbilt (Ali Group)',
    title: 'Sr. Manager, Digital Solutions',
    location: 'Tampa, FL',
    dates: 'Sep 2019 – Dec 2020',
    bullets: [
      'Built an $18M strategic partnership with HCL to accelerate KitchenConnect development.',
      'Designed the Equipment-as-a-Service model for smart kitchen technology subscriptions.',
      'Authored next-generation commercial kitchen equipment APIs, cookbook structure, and multi-brand onboarding strategy—running on 1M+ equipment across the largest restaurant chains globally.',
    ],
    whatIBuilt: ['Equipment-as-a-Service model', 'Commercial kitchen APIs', 'Multi-brand onboarding'],
  },
  {
    company: 'The Middleby Corporation',
    title: 'Manager of Technology',
    location: 'Elgin, IL / Paris, France',
    dates: 'Jul 2016 – Aug 2019',
    bullets: [
      'Led technology strategy across all 110 Middleby brands, overseeing enterprise platforms and digital innovation globally.',
      'Founded and scaled Middleby Connect™, the company’s IoT platform unifying equipment from all brands into one cloud-based solution—adopted by leading global restaurant chains.',
      'Built one of the largest smart kitchen platforms in the foodservice industry: predictive maintenance, OTA updates, analytics, and remote diagnostics.',
      'Transitioned Middleby into a SaaS and connected services model, enabling recurring revenue and cloud-based service offerings.',
      'Recognized with the Rising Star Award, given to only 24 out of 10,000+ employees for top performance and impact.',
    ],
    whatIBuilt: ['Middleby Connect™', 'Open Kitchen (early cloud platform)', 'SaaS & connected services model'],
  },
  {
    company: 'Risk Ops AI',
    title: 'Advisory Board Member & Tech Consultant',
    location: 'San Diego, CA (Remote)',
    dates: 'Aug 2022 – Aug 2024',
    bullets: [
      'Advised one of the fastest-growing cybersecurity companies globally on scalability, digital transformation, and creation of a cybersecurity alliance.',
      'Led full redesign and rebuild of the company website and launched a fully automated self-service "No Obligation Risk Assessment" platform for continuous cybersecurity risk compliance with zero manual intervention.',
    ],
    whatIBuilt: ['Self-service risk assessment platform', 'Website redesign'],
  },
  {
    company: 'Live Love, Inc.',
    title: 'Co-Founder, CTO',
    location: 'Beirut, Lebanon',
    dates: 'Feb 2014 – Jul 2016',
    bullets: [
      'Co-led one of the Middle East’s largest social media enterprises (2M+ followers), incubated by Idealab & Caltech.',
      'Scaled the campaign to 60+ cities with 120 ambassadors; raised Lebanon’s tourism by 21%.',
      'Developed the #1 Lebanese iOS app and 200K+ impressions/month website.',
    ],
    whatIBuilt: ['#1 Lebanese iOS app', '60+ cities, 120 ambassadors'],
  },
  {
    company: 'Teranotes, Inc.',
    title: 'Co-Founder, President',
    location: 'Paris, France',
    dates: 'Feb 2014 – Jul 2016',
    bullets: [
      'Built a social learning platform—accepted for the final interview at Y Combinator (top 2% of applicants).',
      'Designed and launched the platform across France’s top six business schools, supporting 600+ concurrent users with average daily usage of 1h30 mins.',
    ],
    whatIBuilt: ['Social learning platform', 'France’s top six business schools'],
  },
  {
    company: 'Virtual Software, LLC',
    title: 'Co-Founder, President',
    location: 'Beirut, Lebanon',
    dates: 'Aug 2010 – Jan 2013',
    bullets: [
      'Built Lebanon’s first mobile app development company.',
      'Created official iOS apps for Viking Range, Middleby, UC Berkeley Official Dormitories (I-House), Lebanese American University, and other institutions.',
    ],
    whatIBuilt: ['Lebanon’s first mobile app company', 'Official iOS apps for major brands'],
  },
];

export const alliancesPartners = [
  { name: 'Google', context: 'Six Flags digital alliance, AI Concierge' },
  { name: 'Dell', context: 'Theme park digital alliance' },
  { name: 'Snowflake', context: 'Data platform, 85% boost in real-time insight access' },
  { name: 'HCLTech', context: 'Six Flags & Welbilt KitchenConnect' },
  { name: 'Microsoft', context: 'Welbilt KitchenConnect, Azure' },
  { name: 'AT&T', context: 'KitchenConnect ecosystem' },
  { name: 'TeamViewer', context: 'KitchenConnect ecosystem' },
  { name: 'Pure Imagination', context: 'Six Flags alliance' },
  { name: 'Fueled', context: 'Six Flags alliance' },
];
