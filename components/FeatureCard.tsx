'use client';

import { motion } from 'framer-motion';

const COMPANY_INITIALS: Record<string, string> = {
  'Vibe Connect': 'V',
  'Six Flags Entertainment Corporation': '6',
  'GoodFood': 'G',
  'Welbilt (Ali Group)': 'W',
  'The Middleby Corporation': 'M',
};

interface FeatureCardProps {
  title: string;
  subtitle?: string;
  bullets: string[];
  url?: string;
  index?: number;
}

export function FeatureCard({ title, subtitle, bullets, url, index = 0 }: FeatureCardProps) {
  const initial = COMPANY_INITIALS[title] ?? title.charAt(0);
  const content = (
    <>
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-11 h-11 rounded-lg bg-teal-tint border border-teal/20 flex items-center justify-center text-lg font-heading font-bold text-teal">
          {initial}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-heading text-lg font-semibold text-ink">{title}</h3>
          {subtitle && <p className="mt-1 text-sm text-teal">{subtitle}</p>}
        </div>
      </div>
      <ul className="mt-4 space-y-2 pl-0">
        {bullets.slice(0, 2).map((b, i) => (
          <li key={i} className="text-sm text-muted flex gap-2">
            <span className="text-teal shrink-0 mt-0.5">●</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </>
  );

  const className =
    'block rounded-xl border border-amber-200/50 bg-gradient-to-br from-gold-tint/30 to-surface p-6 text-left shadow-sm transition-all hover:shadow-md hover:from-gold-tint/50';

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
    >
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
          {content}
        </a>
      ) : (
        <div className={className}>{content}</div>
      )}
    </motion.div>
  );
}
