'use client';

import { useState } from 'react';
import { submitContact } from './actions';

const inputClass =
  'mt-2 block w-full rounded-lg border border-border bg-surface px-4 py-3 text-ink placeholder-muted2 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus('loading');
    try {
      const result = await submitContact(formData);
      if (result?.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setMessage(result?.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputClass}
          placeholder="Your name"
          disabled={status === 'loading'}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
          placeholder="you@example.com"
          disabled={status === 'loading'}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={`${inputClass} resize-none`}
          placeholder="How can I help?"
          disabled={status === 'loading'}
        />
      </div>
      {status === 'success' && (
        <p className="text-sm text-teal">Thanks. I&apos;ll get back to you soon.</p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-600">{message}</p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-lg bg-gold px-4 py-3 text-sm font-medium text-white hover:bg-gold-hover disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-bg transition-colors"
      >
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
