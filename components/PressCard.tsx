'use client';

import { motion } from 'framer-motion';
import type { PressItem } from '@/content/press';

interface PressCardProps {
  item: PressItem;
  index?: number;
}

export function PressCard({ item, index = 0 }: PressCardProps) {
  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-teal/20 bg-gradient-to-br from-teal-tint/30 to-surface p-5 shadow-sm transition-all hover:shadow-md hover:from-teal-tint/50"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: (index ?? 0) * 0.04 }}
    >
      <span className="text-xs font-semibold uppercase tracking-wider text-teal">
        {item.source}
      </span>
      {item.year && item.year !== '—' && (
        <span className="ml-2 text-xs text-muted2">{item.year}</span>
      )}
      <h3 className="mt-2 font-heading font-medium text-ink group-hover:text-teal transition-colors line-clamp-2">
        {item.title}
      </h3>
      {item.relevance && (
        <p className="mt-2 text-sm text-muted line-clamp-2">{item.relevance}</p>
      )}
    </motion.a>
  );
}
