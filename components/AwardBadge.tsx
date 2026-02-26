'use client';

import { motion } from 'framer-motion';

interface AwardBadgeProps {
  name: string;
  description?: string;
  year?: string | null;
  highlight?: boolean;
}

export function AwardBadge({ name, description, year, highlight }: AwardBadgeProps) {
  return (
    <motion.div
      className={`rounded-xl border p-4 transition-all hover:shadow-md ${
        highlight
          ? 'border-teal/40 bg-gradient-to-br from-teal-tint/60 to-teal-tint/30'
          : 'border-amber-200/40 bg-gradient-to-br from-gold-tint/25 to-surface'
      }`}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-heading font-semibold text-ink">{name}</span>
        {year && (
          <span className="text-xs font-medium text-teal px-2 py-0.5 rounded-full bg-teal-tint">
            {year}
          </span>
        )}
      </div>
      {description && (
        <p className="mt-2 text-sm text-muted">{description}</p>
      )}
    </motion.div>
  );
}
