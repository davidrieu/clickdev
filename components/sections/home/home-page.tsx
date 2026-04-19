'use client';

import type { HomeCasePreview } from '@/lib/constants/home-content';
import type { SanityPostTeaser } from '@/types/sanity-post';

import { HomePremiumView } from '@/components/home-premium/home-premium-view';

type HomePageProps = {
  latestPosts: SanityPostTeaser[];
  casePreviews: HomeCasePreview[];
  casesFromSanity: boolean;
};

/** Accueil premium — même ADN visuel que la page pilier /sites-internet, plus complet (conversion). */
export default function HomePage({ latestPosts, casePreviews, casesFromSanity }: HomePageProps) {
  return (
    <HomePremiumView latestPosts={latestPosts} casePreviews={casePreviews} casesFromSanity={casesFromSanity} />
  );
}
