import { SITE_URL } from '@/lib/constants/site';
import { getCaseStudySitemapEntries, getPostSitemapEntries } from '@/lib/sanity/fetch';
import { getAllStaticMarketingPaths } from '@/lib/seo/marketing-paths';
import type { MetadataRoute } from 'next';

function origin(): string {
  return SITE_URL.replace(/\/$/, '');
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = origin();
  const now = new Date();

  const skipInSitemap = new Set(['/mentions-legales', '/confidentialite']);

  const staticEntries: MetadataRoute.Sitemap = getAllStaticMarketingPaths()
    .filter((path) => !skipInSitemap.has(path))
    .map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: path === '/' ? ('weekly' as const) : ('monthly' as const),
      priority:
        path === '/'
          ? 1
          : path.startsWith('/sites-internet') || path.startsWith('/seo')
            ? 0.75
            : 0.65,
    }));

  const [postEntries, caseEntriesRaw] = await Promise.all([
    getPostSitemapEntries(),
    getCaseStudySitemapEntries(),
  ]);

  const blogEntries: MetadataRoute.Sitemap = postEntries.map((e) => ({
    url: `${base}/blog/${e.slug}`,
    lastModified: e.lastModified ? new Date(e.lastModified) : now,
    changeFrequency: 'weekly' as const,
    priority: 0.55,
  }));

  const caseEntries: MetadataRoute.Sitemap = caseEntriesRaw.map((e) => ({
    url: `${base}/realisations/${e.slug}`,
    lastModified: e.lastModified ? new Date(e.lastModified) : now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries, ...caseEntries];
}
