'use client';

import type { SanityPostTeaser } from '@/types/sanity-post';

import HomeAboutTestimonials from './home-about-testimonials';
import HomeBlogCta from './home-blog-cta';
import HomeCases from './home-cases';
import HomeFaq from './home-faq';
import HomeHero from './home-hero';
import HomeStackProcess from './home-stack-process';
import HomeTrustServices from './home-trust-services';
import { HOME_FAQ_ITEMS } from '@/lib/constants/home-content';

export default function HomePage({ latestPosts }: { latestPosts: SanityPostTeaser[] }) {
  return (
    <main className="px-4 pb-16 md:px-8 lg:mx-auto lg:max-w-6xl lg:px-6">
      <HomeHero />
      <HomeTrustServices />
      <HomeCases />
      <HomeStackProcess />
      <HomeAboutTestimonials />
      <HomeFaq items={HOME_FAQ_ITEMS} />
      <HomeBlogCta posts={latestPosts} />
    </main>
  );
}
