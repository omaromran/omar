'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  /** primary = gold (Contact, Book Speaking, Press Kit only); secondary = teal outline; ghost = muted */
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  external?: boolean;
}

export function CTAButton({
  href,
  children,
  variant = 'secondary',
  className = '',
  external = false,
}: CTAButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bg';
  const variants = {
    primary:
      'bg-gradient-to-r from-gold to-amber-500 text-white hover:from-gold-hover hover:to-amber-600 shadow-sm btn-glow-gold',
    secondary:
      'border-2 border-teal text-teal bg-teal-tint/60 hover:bg-teal-tint hover:border-teal-hover btn-glow-teal',
    ghost: 'text-muted2 hover:text-ink hover:bg-teal-tint/40 hover:text-teal',
  };

  const combined = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combined}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Link href={href} className={combined}>
        {children}
      </Link>
    </motion.span>
  );
}
