import { MetadataRoute } from 'next';
import { profile } from '@/content/profile';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.siteUrl || 'https://omaromran.com';
  const routes = [
    '',
    '/about',
    '/work',
    '/awards',
    '/publications',
    '/speaking',
    '/contact',
    '/press-kit',
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
