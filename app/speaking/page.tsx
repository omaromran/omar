import { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';
import { CTAButton } from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'TEDx talk and book Omar for keynotes on digital transformation, AI, and community.',
};

const tedxVideoId = 'CedcZlS9ms4';
const tedxEmbedUrl = `https://www.youtube.com/embed/${tedxVideoId}?rel=0`;

export default function SpeakingPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <SectionHeader
        title="Speaking"
        subtitle="Keynotes and talks on digital transformation, AI, and community."
        className="mb-14"
      />

      <section className="rounded-xl border border-border bg-surface overflow-hidden shadow-sm">
        <div className="aspect-video w-full">
          <iframe
            src={tedxEmbedUrl}
            title="TED Talk: Building up your resilience even if the odds are against you."
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
        <div className="p-6">
          <h2 className="font-heading text-xl font-semibold text-ink">
            TED Talk: Building up your resilience even if the odds are against you.
          </h2>
          <p className="mt-2 text-muted">
            Steps and example on how to achieve &quot;naive&quot; goals.
          </p>
          <a
            href="https://www.youtube.com/watch?v=CedcZlS9ms4"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-teal hover:text-teal-hover transition-colors"
          >
            Watch on YouTube →
          </a>
        </div>
      </section>

      <section className="mt-16 rounded-xl border border-border bg-surface p-8 text-center">
        <h2 className="font-heading text-xl font-semibold text-ink">
          Book me to speak
        </h2>
        <p className="mt-3 text-muted max-w-xl mx-auto">
          For keynotes on digital transformation, AI in entertainment and
          food service, IoT platforms, or building community-first products.
        </p>
        <div className="mt-6">
          <CTAButton href="/contact" variant="primary">Get in touch</CTAButton>
        </div>
      </section>
    </div>
  );
}
