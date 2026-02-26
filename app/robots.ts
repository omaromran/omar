import { MetadataRoute } from 'next';
import { profile } from '@/content/profile';

export default function robots(): MetadataRoute.Robots {
  const base = profile.siteUrl || 'https://omaromran.com';
  return {
    rules: { userAgent: '*', allow: '/', disallow: [] },
    sitemap: `${base}/sitemap.xml`,
  };
}
