import { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';
import { PressCard } from '@/components/PressCard';
import { press } from '@/content/press';

export const metadata: Metadata = {
  title: 'Publications & Press',
  description:
    'BT150 Spotlight, TEDx, Six Flags and Welbilt press, and industry coverage.',
};

export default function PublicationsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <SectionHeader
        title="Publications & press"
        subtitle="Interviews, keynotes, and industry coverage."
        className="mb-14"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {press.map((item, i) => (
          <PressCard key={item.url} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}
