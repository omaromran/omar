import { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';
import { profile } from '@/content/profile';
import { education } from '@/content/education';
import { media } from '@/content/media';
import { ImageWithPlaceholder } from '@/components/ImageWithPlaceholder';
import { CTAButton } from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Executive narrative, values, and education of Omar Jacques Omran — Tech executive and founder.',
};

export default function AboutPage() {
  const narrative = [
    'Omar Jacques Omran was named one of the Top 150 Global Innovators in 2024 for his leadership in technology and digital transformation across three publicly traded companies.',
    'He has delivered over $500M in cumulative net profit growth through large-scale innovations and by building the two largest technology alliances in the theme park and food service industries.',
    "As Chief Technology Officer at Six Flags, Omar led the company's largest digital transformation across 27 parks, managing $1.5B in revenue systems and generating $100M in incremental net profit.",
    "Prior to that, he served as VP of Digital Transformation at Welbilt, where he scaled KitchenConnect into the world's largest foodservice IoT platform. At Middleby, he founded Middleby Connect (known today as Open Kitchen), one of the earliest cloud platforms in the industry.",
    'A serial entrepreneur, Omar also built AI-driven malaria detection software in 2013 and co-founded multiple tech startups.',
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <SectionHeader
        title="About"
        subtitle="Tech executive & founder"
        className="mb-14"
      />

      {/* 2-column: headshot + bio */}
      <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-16 items-start">
        <div className="relative mx-auto md:mx-0 w-56 h-56 md:w-[280px] md:h-[280px] rounded-full border border-border bg-surface overflow-hidden shadow-lg ring-2 ring-teal/10">
          <ImageWithPlaceholder
            src={media.headshot.primary}
            alt={profile.name}
            fill
            placeholderLabel="Headshot"
            placeholderIcon="O"
            className="rounded-full"
          />
        </div>
        <div className="min-w-0">
          <section className="space-y-6 text-muted">
            {narrative.map((para, i) => (
              <p key={i} className="text-base leading-relaxed md:text-lg">
                {para}
              </p>
            ))}
          </section>

          <section className="mt-12">
            <h2 className="font-heading text-xl font-semibold text-ink">Goal</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Build one of the most impactful technology companies globally, dedicated to significantly improving people&apos;s lives.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="font-heading text-xl font-semibold text-ink">Values</h2>
            <ul className="mt-6 space-y-6">
              <li>
                <h3 className="font-heading font-medium text-ink">Respect</h3>
                <p className="mt-2 text-muted text-sm leading-relaxed">
                  Foster deep respect by consistently treating each other with dignity, empathy, and fairness in every interaction.
                </p>
              </li>
              <li>
                <h3 className="font-heading font-medium text-ink">Accountability</h3>
                <p className="mt-2 text-muted text-sm leading-relaxed">
                  Own our actions, deliver on commitments, and embrace responsibility for outcomes.
                </p>
              </li>
              <li>
                <h3 className="font-heading font-medium text-ink">Entrepreneurship</h3>
                <p className="mt-2 text-muted text-sm leading-relaxed">
                  Innovate boldly, act decisively, and proactively pursue opportunities to create meaningful impact.
                </p>
              </li>
              <li>
                <h3 className="font-heading font-medium text-ink">Humility</h3>
                <p className="mt-2 text-muted text-sm leading-relaxed">
                  Stay open, continuously learn, and seek growth through honest reflection.
                </p>
              </li>
              <li>
                <h3 className="font-heading font-medium text-ink">Integrity</h3>
                <p className="mt-2 text-muted text-sm leading-relaxed">
                  Act ethically and transparently, maintaining honesty even when no one is watching.
                </p>
              </li>
              <li>
                <h3 className="font-heading font-medium text-ink">Kindness</h3>
                <p className="mt-2 text-muted text-sm leading-relaxed">
                  Approach all interactions with compassion, empathy, and genuine care.
                </p>
              </li>
              <li>
                <h3 className="font-heading font-medium text-ink">Teamwork</h3>
                <p className="mt-2 text-muted text-sm leading-relaxed">
                  Collaborate effectively, support each other actively, and grow together toward shared success.
                </p>
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="font-heading text-xl font-semibold text-ink">Education</h2>
            <ul className="mt-6 space-y-6">
              {education.map((edu) => (
                <li key={edu.institution} className="border-l-2 border-teal/50 pl-6">
                  <h3 className="font-medium text-ink">{edu.institution}</h3>
                  <p className="text-sm text-teal">{edu.degree}</p>
                  <p className="text-sm text-muted2">{edu.location} · {edu.dates}</p>
                  {edu.note && <p className="mt-2 text-sm text-muted">{edu.note}</p>}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <section className="mt-16 rounded-xl border border-border bg-surface p-6">
        <h2 className="font-heading text-xl font-semibold text-ink">Contact</h2>
        <p className="mt-2 text-muted">
          Tech executive & founder building the first community social media platform, Vibe{' '}
          <a href={profile.vibeUrl} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">
            vibeconnect.social
          </a>
        </p>
        <a href={`mailto:${profile.email}`} className="mt-4 inline-block text-sm text-teal hover:text-teal-hover transition-colors">
          {profile.email}
        </a>
        <div className="mt-4">
          <CTAButton href="/contact" variant="primary">Get in touch</CTAButton>
        </div>
      </section>
    </div>
  );
}
