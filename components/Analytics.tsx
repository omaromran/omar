'use client';

import Script from 'next/script';

/**
 * Analytics placeholder. Set env to enable Plausible:
 *   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
 * For PostHog, install posthog-js and add init in a separate client component.
 */
export function Analytics() {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  if (plausibleDomain) {
    return (
      <Script
        defer
        data-domain={plausibleDomain}
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
      />
    );
  }

  return null;
}
