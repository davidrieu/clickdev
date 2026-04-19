import { HomeFaqJsonLd } from '@/components/sections/home/home-faq-json-ld';
import HomePage from '@/components/sections/home/home-page';
import { HOME_FAQ_ITEMS } from '@/lib/constants/home-content';
import { getLatestPosts } from '@/lib/sanity/fetch';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accueil',
  description:
    'Développeur freelance Next.js, apps mobiles, IA, SEO & GEO, CRM et maintenance — David Rieu, Clickdev.',
};

export default async function Page() {
  const latestPosts = await getLatestPosts(3);

  return (
    <>
      <HomeFaqJsonLd items={HOME_FAQ_ITEMS} />
      <HomePage latestPosts={latestPosts} />
    </>
  );
}
