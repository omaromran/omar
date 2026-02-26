'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Awards', href: '/awards' },
  { label: 'Press', href: '/publications' },
  { label: 'Speaking', href: '/speaking' },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Main navigation">
        <Link
          href="/"
          className="font-heading font-semibold text-ink transition-opacity hover:opacity-80"
        >
          Omar Jacques Omran
        </Link>

        <ul className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm transition-colors hover:text-teal ${
                  pathname === link.href ? 'text-ink font-medium' : 'text-muted'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="rounded-lg bg-gradient-to-r from-gold to-amber-500 px-4 py-2 text-sm font-medium text-white hover:from-gold-hover hover:to-amber-600 transition-colors shadow-sm"
            >
              Contact
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2 text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-5 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="md:hidden border-t border-border bg-surface"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2 text-muted hover:text-teal"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="block rounded-lg bg-gradient-to-r from-gold to-amber-500 py-2 text-center text-white font-medium hover:from-gold-hover hover:to-amber-600"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
