import { WebSiteJsonLd } from '@/components/seo/website-json-ld';
import { HomeFaqJsonLd } from '@/components/sections/home/home-faq-json-ld';
import HomePage from '@/components/sections/home/home-page';
import { HOME_FAQ_ITEMS } from '@/lib/constants/home-content';
import { getFeaturedCaseStudies, getLatestPosts } from '@/lib/sanity/fetch';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = listingPageMetadata({
  title: 'Accueil',
  description:
    'Développeur freelance Next.js, apps mobiles, IA, SEO & GEO, CRM et maintenance — David Rieu, Clickdev.',
  path: '/',
});

export default async function Page() {
  const [latestPosts, featuredCases] = await Promise.all([getLatestPosts(3), getFeaturedCaseStudies()]);

  return (
    <>
      <WebSiteJsonLd />
      <HomeFaqJsonLd items={HOME_FAQ_ITEMS} />
      <HomePage latestPosts={latestPosts} featuredCaseStudies={featuredCases} />
    </>
  );
}
