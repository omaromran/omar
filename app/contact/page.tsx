import { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';
import { profile } from '@/content/profile';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Omar Jacques Omran for speaking, advisory, or investing.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl px-6 py-16 md:py-24">
      <SectionHeader
        title="Contact"
        subtitle="For speaking, advisory, investing, or press."
        className="mb-12"
      />

      <ContactForm />

      <div className="mt-10 border-t border-border pt-10">
        <p className="text-sm text-muted">Or reach out directly:</p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-2 inline-block text-teal hover:text-teal-hover transition-colors"
        >
          {profile.email}
        </a>
      </div>
    </div>
  );
}
