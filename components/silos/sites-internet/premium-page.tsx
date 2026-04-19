import { MarketingAmbientBackdrop } from '@/components/marketing/marketing-ambient-backdrop';
import { getRecentWebCaseStudies } from '@/lib/sanity/fetch';

import { PremiumBento } from './premium-bento';
import { PremiumCases } from './premium-cases';
import { PremiumCompare } from './premium-compare';
import PremiumEditorialSeo from './premium-editorial-seo';
import { PremiumFaq } from './premium-faq';
import { PremiumFinalCta } from './premium-final-cta';
import { PremiumHero } from './premium-hero';
import { PremiumIntro } from './premium-intro';
import { PremiumProcess } from './premium-process';
import { PremiumQuotes } from './premium-quotes';
import { PremiumStackMarquee } from './premium-stack-marquee';

/** Page pilier /sites-internet — layout premium (Sanity + FAQ unifiée + bloc SEO). */
export default async function SitesInternetPremiumPage() {
  const caseStudies = await getRecentWebCaseStudies();

  return (
    <main className="bg-black text-white">
      <MarketingAmbientBackdrop />
      <PremiumHero />
      <PremiumIntro />
      <PremiumBento />
      <PremiumEditorialSeo />
      <PremiumCompare />
      <PremiumProcess />
      <PremiumStackMarquee />
      <PremiumCases caseStudies={caseStudies} />
      <PremiumQuotes />
      <PremiumFaq />
      <PremiumFinalCta />
    </main>
  );
}
