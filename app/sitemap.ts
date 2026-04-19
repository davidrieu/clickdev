import { SITE_URL } from '@/lib/constants/site';
import { getCaseStudySlugs, getPostSlugs } from '@/lib/sanity/fetch';
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

  const [postSlugs, caseSlugs] = await Promise.all([getPostSlugs(), getCaseStudySlugs()]);

  const blogEntries: MetadataRoute.Sitemap = postSlugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.55,
  }));

  const caseEntries: MetadataRoute.Sitemap = caseSlugs.map((slug) => ({
    url: `${base}/realisations/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries, ...caseEntries];
}
