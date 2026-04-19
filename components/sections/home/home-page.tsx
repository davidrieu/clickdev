'use client';

import type { SanityPostTeaser } from '@/types/sanity-post';
import type { SanityCaseStudyTeaser } from '@/types/sanity-case-study';

import { HomePremiumView } from '@/components/home-premium/home-premium-view';

type HomePageProps = {
  latestPosts: SanityPostTeaser[];
  featuredCaseStudies: SanityCaseStudyTeaser[];
};

/** Accueil premium — même ADN visuel que la page pilier /sites-internet, plus complet (conversion). */
export default function HomePage({ latestPosts, featuredCaseStudies }: HomePageProps) {
  return <HomePremiumView latestPosts={latestPosts} featuredCaseStudies={featuredCaseStudies} />;
}
