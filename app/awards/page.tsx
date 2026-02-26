import { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';
import { AwardBadge } from '@/components/AwardBadge';
import { awards, honors } from '@/content/awards';

export const metadata: Metadata = {
  title: 'Awards & Recognition',
  description:
    'BT150 Top 150 Global Innovators, MIT EMBA, Rising Star, Torch Award, and more.',
};

export default function AwardsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <SectionHeader
        title="Awards & recognition"
        subtitle="Industry and academic recognition for innovation, leadership, and impact."
        className="mb-14"
      />

      <section>
        <h2 className="font-heading text-lg font-semibold text-ink mb-6">Awards</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {awards.map((a) => (
            <AwardBadge
              key={a.name}
              name={a.name}
              description={a.description}
              year={a.year}
              highlight={a.highlight}
            />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-heading text-lg font-semibold text-ink mb-6">Honors</h2>
        <ul className="space-y-4">
          {honors.map((h) => (
            <li
              key={h.name}
              className="rounded-xl border border-border bg-surface p-4"
            >
              <span className="font-medium text-ink">{h.name}</span>
              {h.description && (
                <p className="mt-1 text-sm text-muted">{h.description}</p>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
