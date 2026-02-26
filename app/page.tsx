import Link from 'next/link';
import { profile } from '@/content/profile';
import { impactStats } from '@/content/stats';
import { experience } from '@/content/experience';
import { awards } from '@/content/awards';
import { press } from '@/content/press';
import { media } from '@/content/media';
import { SectionHeader } from '@/components/SectionHeader';
import { StatCard } from '@/components/StatCard';
import { FeatureCard } from '@/components/FeatureCard';
import { PressCard } from '@/components/PressCard';
import { AwardBadge } from '@/components/AwardBadge';
import { CTAButton } from '@/components/CTAButton';
import { ImageWithPlaceholder } from '@/components/ImageWithPlaceholder';

const featuredRoles = [
  experience[0],
  experience[1],
  experience[2],
  experience[5],
];

const featuredPress = press.filter((p) => p.featured).slice(0, 6);
const awardsPreview = awards.slice(0, 4);

export default function HomePage() {
  return (
    <>
      {/* Hero: gradient blob + optional background image + headshot */}
      <section
        id="hero"
        className="relative overflow-hidden border-b border-border bg-bg px-6 pt-20 pb-24 md:pt-28 md:pb-32"
      >
        {/* Layered hero background: image (if present) + gradient blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
            style={{ backgroundImage: `url('${media.heroBg}')` }}
          />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background: 'var(--gradient-teal-cyan)',
              filter: 'blur(120px)',
              transform: 'scale(1.5) translateY(-20%)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-1/2 opacity-20"
            style={{
              background: 'linear-gradient(to top, var(--goldTint), transparent)',
            }}
          />
        </div>
        <div className="relative mx-auto max-w-5xl flex flex-col md:flex-row md:items-center md:gap-16">
          <div className="flex justify-center md:order-2 md:shrink-0">
            <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full border-2 border-border bg-surface p-1 shadow-xl ring-2 ring-teal/10 overflow-hidden">
              <ImageWithPlaceholder
                src={media.headshot.primary}
                alt={profile.name}
                fill
                placeholderLabel="Headshot"
                placeholderIcon="O"
                className="rounded-full aspect-square w-full h-full"
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left mt-10 md:mt-0 md:order-1">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-ink md:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 font-heading text-xl text-teal md:text-2xl font-medium">
              Tech executive & founder building the first community social media platform, Vibe{' '}
              <a href={profile.vibeUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                vibeconnect.social
              </a>
            </p>
            <p className="mx-auto md:mx-0 mt-6 max-w-2xl text-base text-muted md:text-lg">
              {profile.shortBio}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <CTAButton href="/contact" variant="primary">
                Contact
              </CTAButton>
              <CTAButton href="/speaking" variant="secondary">
                Press / Speaking
              </CTAButton>
            </div>
            <nav className="mt-8 flex flex-wrap justify-center md:justify-start gap-3 text-sm text-muted" aria-label="Page sections">
              <a href="#impact" className="rounded-full border border-border px-4 py-2 hover:bg-border/50 hover:text-ink transition-colors">
                Impact
              </a>
              <a href="#featured" className="rounded-full border border-border px-4 py-2 hover:bg-border/50 hover:text-ink transition-colors">
                Featured
              </a>
              <a href="#press" className="rounded-full border border-border px-4 py-2 hover:bg-border/50 hover:text-ink transition-colors">
                Press
              </a>
              <a href="#awards" className="rounded-full border border-border px-4 py-2 hover:bg-border/50 hover:text-ink transition-colors">
                Awards
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* Impact: impact stats */}
      <section
        id="impact"
        className="border-b border-border bg-teal-tint/40 px-6 py-16 md:py-20"
        aria-label="Impact at a glance"
      >
        <div className="section-strip-teal h-1 w-full shrink-0" aria-hidden />
        <div className="mx-auto max-w-6xl mt-8">
          <SectionHeader
            title="Impact at a glance"
            subtitle="Delivered across three publicly traded companies and industry-leading platforms."
            align="center"
            className="mb-12"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {impactStats.map((stat, i) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                source={stat.source}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured experience */}
      <section id="featured" className="border-b border-border bg-gold-tint/30 px-6 py-16 md:py-20">
        <div className="section-strip-gold h-1 w-full shrink-0" aria-hidden />
        <div className="mx-auto max-w-6xl mt-8">
          <SectionHeader
            title="Featured experience"
            subtitle="Leadership and innovation across theme parks, food service, and community tech."
            className="mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredRoles.map((role, i) => (
              <FeatureCard
                key={`${role.company}-${role.dates}`}
                title={role.company}
                subtitle={`${role.title} · ${role.dates}`}
                bullets={role.bullets}
                url={role.url}
                index={i}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton href="/work" variant="secondary">
              View full work history
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section id="press" className="border-b border-border bg-teal-tint/40 px-6 py-16 md:py-20" aria-label="Featured in">
        <div className="section-strip-teal h-1 w-full shrink-0" aria-hidden />
        <div className="mx-auto max-w-6xl mt-8">
          <SectionHeader
            title="Featured in"
            subtitle="Press, keynotes, and industry recognition."
            className="mb-12"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPress.map((item, i) => (
              <PressCard key={item.url} item={item} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/publications" className="text-sm font-medium text-teal hover:text-teal-hover transition-colors">
              View all publications & press →
            </Link>
          </div>
        </div>
      </section>

      {/* Awards preview */}
      <section id="awards" className="border-b border-border bg-gold-tint/30 px-6 py-16 md:py-20" aria-label="Awards and recognition">
        <div className="section-strip-gold h-1 w-full shrink-0" aria-hidden />
        <div className="mx-auto max-w-6xl mt-8">
          <SectionHeader
            title="Awards & recognition"
            subtitle="Industry and academic recognition for innovation and leadership."
            className="mb-12"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {awardsPreview.map((a) => (
              <AwardBadge
                key={a.name}
                name={a.name}
                description={a.description}
                year={a.year}
                highlight={a.highlight}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton href="/awards" variant="secondary">
              View all awards
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Final CTA: gold buttons */}
      <section className="relative px-6 py-24 md:py-32 bg-gradient-to-b from-teal-tint/50 via-gold-tint/20 to-teal-tint/40 overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-48 pointer-events-none opacity-30"
          style={{ background: 'var(--gradient-teal-cyan)', filter: 'blur(80px)' }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-24 pointer-events-none opacity-20"
          style={{ background: 'linear-gradient(to bottom, var(--goldTint), transparent)' }}
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-semibold text-ink md:text-3xl">
            Let&apos;s connect
          </h2>
          <p className="mt-4 text-muted">
            For speaking, advisory, or investing opportunities.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CTAButton href="/contact" variant="primary">
              Get in touch
            </CTAButton>
            <CTAButton href="/speaking" variant="primary">
              Book a talk
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
