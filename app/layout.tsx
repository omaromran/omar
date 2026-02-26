import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Analytics } from '@/components/Analytics';
import { profile } from '@/content/profile';
import { media } from '@/content/media';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: profile.defaultTitle,
    template: `%s | ${profile.name}`,
  },
  description: profile.defaultDescription,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: profile.siteUrl,
    siteName: profile.siteName,
    title: profile.defaultTitle,
    description: profile.defaultDescription,
    images: [{ url: media.og, width: 1200, height: 630, alt: profile.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: profile.defaultTitle,
    description: profile.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-sans antialiased bg-bg text-ink">
        <div className="grain-overlay" aria-hidden />
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
