'use client';

import { motion } from 'framer-motion';
import { ImageWithPlaceholder } from '@/components/ImageWithPlaceholder';
import { media } from '@/content/media';
import type { Role } from '@/content/experience';

const COMPANY_IMAGE_KEY: Record<string, keyof typeof media.work> = {
  'Vibe Connect': 'vibe',
  'Six Flags Entertainment Corporation': 'sixflags',
  'Welbilt (Ali Group)': 'welbilt',
  'The Middleby Corporation': 'middleby',
};

interface WorkCaseCardProps {
  role: Role;
  index?: number;
}

export function WorkCaseCard({ role, index = 0 }: WorkCaseCardProps) {
  const imageKey = COMPANY_IMAGE_KEY[role.company];
  const imageSrc = imageKey ? media.work[imageKey] : undefined;
  const placeholderLabel = role.company;

  return (
    <motion.article
      className="rounded-2xl border border-border bg-surface overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
    >
      <div className="aspect-[2/1] w-full relative bg-teal-tint/30">
        <ImageWithPlaceholder
          src={imageSrc ?? ''}
          alt={role.company}
          fill
          placeholderLabel={placeholderLabel}
          placeholderIcon={role.company.charAt(0)}
          className="aspect-[2/1] w-full"
        />
      </div>
      <div className="p-6">
        <h2 className="font-heading text-xl font-semibold text-ink">{role.company}</h2>
        <p className="mt-1 text-sm text-teal">{role.title} · {role.dates}</p>
        <ul className="mt-4 space-y-2">
          {role.bullets.slice(0, 5).map((b, i) => (
            <li key={i} className="text-sm text-muted flex gap-2">
              <span className="text-teal shrink-0">●</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        {role.whatIBuilt && role.whatIBuilt.length > 0 && (
          <p className="mt-4 text-sm">
            <span className="font-medium text-ink">What I built: </span>
            <span className="text-muted">{role.whatIBuilt.join(' · ')}</span>
          </p>
        )}
      </div>
    </motion.article>
  );
}
