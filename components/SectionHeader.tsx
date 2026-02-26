'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({ title, subtitle, align = 'left', className = '' }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <motion.header
      className={`max-w-3xl ${alignClass} ${className}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight text-ink">
        <span className="inline-block pb-1 border-b-2 border-teal/50">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-2 text-base md:text-lg text-muted">
          {subtitle}
        </p>
      )}
    </motion.header>
  );
}
