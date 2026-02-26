'use client';

import Link from 'next/link';
import { profile } from '@/content/profile';

const nav = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Awards', href: '/awards' },
  { label: 'Press', href: '/publications' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'Contact', href: '/contact' },
  { label: 'Press Kit', href: '/press-kit' },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-heading font-semibold text-ink">{profile.name}</p>
            <p className="mt-1 text-sm text-muted">{profile.tagline}</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-2 inline-block text-sm text-teal hover:text-teal-hover transition-colors"
            >
              {profile.email}
            </a>
          </div>
          <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-teal"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          {profile.social.linkedin && (
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-muted2 hover:text-teal transition-colors">LinkedIn</a>
          )}
          {profile.social.twitter && (
            <a href={profile.social.twitter} target="_blank" rel="noopener noreferrer" className="text-sm text-muted2 hover:text-teal transition-colors">Twitter</a>
          )}
          {profile.social.youtube && (
            <a href={profile.social.youtube} target="_blank" rel="noopener noreferrer" className="text-sm text-muted2 hover:text-teal transition-colors">YouTube</a>
          )}
        </div>
        <p className="mt-8 text-xs text-muted2">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
