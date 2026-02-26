import { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';
import { CopyButton } from '@/components/CopyButton';
import { CTAButton } from '@/components/CTAButton';
import { profile } from '@/content/profile';
import { media } from '@/content/media';
import { ImageWithPlaceholder } from '@/components/ImageWithPlaceholder';

export const metadata: Metadata = {
  title: 'Press Kit',
  description: 'Official bio, headshot, and media assets for Omar Jacques Omran.',
};

const bio100 =
  'Omar Jacques Omran was named one of the Top 150 Global Innovators in 2024. He has delivered over $500M in cumulative net profit growth and built the two largest technology alliances in the theme park and food service industries. Former CTO at Six Flags (27 parks, $1.5B revenue systems, $100M incremental net profit) and VP Digital Transformation at Welbilt, where he scaled KitchenConnect into the world\'s largest foodservice IoT platform. He holds an Executive MBA from MIT and a B.S. in Computer Science from the Lebanese American University.';

const bio250 =
  'Omar Jacques Omran was named one of the Top 150 Global Innovators in 2024 for his leadership in technology and digital transformation across three publicly traded companies. He has delivered over $500M in cumulative net profit growth through large-scale innovations and by building the two largest technology alliances in the theme park and food service industries. As Chief Technology Officer at Six Flags, Omar led the company\'s largest digital transformation across 27 parks, managing $1.5B in revenue systems and generating $100M in incremental net profit. Prior to that, he served as VP of Digital Transformation at Welbilt, where he scaled KitchenConnect into the world\'s largest foodservice IoT platform. At Middleby, he founded Open Kitchen, one of the earliest cloud platforms in the industry. A serial entrepreneur, Omar also built AI-driven malaria detection software and co-founded multiple tech startups. He holds an Executive MBA from MIT and a B.S. in Computer Science from the Lebanese American University. He is CEO and founder of Vibe Connect.';

export default function PressKitPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <SectionHeader
        title="Press kit"
        subtitle="Official bio and media assets."
        className="mb-14"
      />

      <section>
        <h2 className="font-heading text-lg font-semibold text-ink">Official bio (100 words)</h2>
        <p className="mt-3 text-muted leading-relaxed whitespace-pre-line">{bio100}</p>
        <CopyButton text={bio100} />
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-lg font-semibold text-ink">Official bio (250 words)</h2>
        <p className="mt-3 text-muted leading-relaxed whitespace-pre-line">{bio250}</p>
        <CopyButton text={bio250} />
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-lg font-semibold text-ink">Headshot</h2>
        <p className="mt-2 text-sm text-muted2">
          Add your headshot at <code className="rounded bg-border px-1 py-0.5 text-ink">public/images/headshot.jpg</code> (see README).
        </p>
        <div className="mt-4 relative w-48 aspect-[3/4] rounded-xl border border-border bg-surface overflow-hidden">
          <ImageWithPlaceholder
            src={media.headshot.primary}
            alt={profile.name}
            fill
            placeholderLabel="Headshot"
            placeholderIcon="O"
            className="rounded-xl"
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-lg font-semibold text-ink">Contact</h2>
        <p className="mt-2 text-muted2">{profile.email}</p>
        <div className="mt-4">
          <CTAButton href="/contact" variant="primary">Get in touch</CTAButton>
        </div>
      </section>
    </div>
  );
}
