'use client';

import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  subtitle?: string;
  dates: string;
  children: React.ReactNode;
  index?: number;
}

export function TimelineItem({ title, subtitle, dates, children, index = 0 }: TimelineItemProps) {
  return (
    <motion.article
      className="relative pl-8 border-l-2 border-border last:pb-0"
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-teal border-2 border-bg" />
      <div className="pb-10">
        <div className="flex flex-wrap items-baseline gap-2">
          <h3 className="font-heading text-lg font-semibold text-ink">{title}</h3>
          {subtitle && <span className="text-sm text-muted">{subtitle}</span>}
        </div>
        <p className="mt-1 text-sm text-teal">{dates}</p>
        <div className="mt-4 space-y-2 text-sm text-muted">{children}</div>
      </div>
    </motion.article>
  );
}
