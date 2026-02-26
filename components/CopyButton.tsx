'use client';

import { useState } from 'react';

export function CopyButton({ text, label = 'Copy to clipboard' }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="mt-4 text-sm text-teal hover:text-teal-hover transition-colors"
    >
      {copied ? 'Copied!' : label}
    </button>
  );
}
