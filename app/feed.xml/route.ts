import { profile } from '@/content/profile';

export async function GET() {
  const base = profile.siteUrl || 'https://omaromran.com';
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${profile.name} — Writing</title>
    <link>${base}</link>
    <description>${profile.defaultDescription}</description>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <!-- Add item entries here when you have blog posts -->
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
