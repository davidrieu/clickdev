import { JsonLdHome } from '@/components/seo/json-ld-home';
import { WebSiteJsonLd } from '@/components/seo/website-json-ld';
import HomePage from '@/components/sections/home/home-page';
import { SITE_URL } from '@/lib/constants/site';
import { getFeaturedCaseStudies, getLatestPosts } from '@/lib/sanity/fetch';
import type { Metadata } from 'next';

const ogImagePath = '/assets/web-app-manifest-512x512.png';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Développeur web freelance — Sites, apps, SEO & IA | Clickdev',
  description:
    'Développeur freelance depuis 10 ans. Je conçois sites web, applications mobiles, outils métiers et intégrations IA pour TPE, PME et grandes marques. Accor, Greenweez, Spreadshirt me font confiance.',
  keywords: [
    'développeur web freelance',
    'création site internet',
    'freelance Next.js',
    'développeur WordPress',
    'développeur Shopify',
    'application mobile',
    'SEO',
    'intégration IA',
    'freelance développement web',
    'développeur sur mesure',
  ],
  authors: [{ name: 'David Rieu', url: `${SITE_URL.replace(/\/$/, '')}/a-propos` }],
  creator: 'David Rieu',
  publisher: 'Clickdev',
  alternates: {
    canonical: SITE_URL.replace(/\/$/, ''),
  },
  openGraph: {
    title: 'Clickdev — Développeur web freelance',
    description:
      'Sites, apps, SEO, IA : je construis les outils digitaux dont votre activité a besoin — en freelance, partout en France et à distance.',
    url: SITE_URL.replace(/\/$/, ''),
    siteName: 'Clickdev',
    images: [
      {
        url: ogImagePath,
        width: 512,
        height: 512,
        alt: 'Clickdev — David Rieu, développeur web freelance',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clickdev — Développeur web freelance',
    description: 'Sites, apps, SEO, IA : je construis les outils digitaux dont votre activité a besoin.',
    images: [ogImagePath],
    creator: '@david_rieu',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export default async function Page() {
  const [latestPosts, featuredCases] = await Promise.all([getLatestPosts(3), getFeaturedCaseStudies()]);

  return (
    <>
      <WebSiteJsonLd />
      <JsonLdHome />
      <HomePage latestPosts={latestPosts} featuredCaseStudies={featuredCases} />
    </>
  );
}
