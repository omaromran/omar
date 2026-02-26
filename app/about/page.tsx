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
    "Prior to that, he served as VP of Digital Transformation at Welbilt, where he scaled KitchenConnect into the world's largest foodservice IoT platform. At Middleby, he founded Open Kitchen, one of the earliest cloud platforms in the industry.",
    'A serial entrepreneur, Omar also built AI-driven malaria detection software and co-founded multiple tech startups.',
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <SectionHeader
        title="About"
        subtitle="Tech executive & founder — outcomes-driven leadership."
        className="mb-14"
      />

      {/* 2-column: headshot + bio */}
      <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-16 items-start">
        <div className="relative mx-auto md:mx-0 w-56 h-56 md:w-full md:aspect-square max-w-[280px] rounded-2xl border border-border bg-surface overflow-hidden shadow-lg ring-2 ring-teal/10">
          <ImageWithPlaceholder
            src={media.headshot.primary}
            alt={profile.name}
            fill
            placeholderLabel="Headshot"
            placeholderIcon="O"
            className="rounded-2xl"
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
            <h2 className="font-heading text-xl font-semibold text-ink">Values & leadership</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Omar focuses on building high-impact technology organizations and
              platforms that scale—from theme parks and food service to community
              and AI. He combines strategic vision with hands-on execution:
              founding industry alliances, shipping AI and IoT at scale, and
              delivering measurable business results. Leadership highlights include
              elected roles on the Six Flags DEI Committee, President of the ACM
              chapter during undergrad, and 1st Place in the MIT EMBA Negotiation
              Competition.
            </p>
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
        <p className="mt-2 text-muted">{profile.tagline}</p>
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
