import { getFeaturedCaseStudies } from '@/lib/sanity/fetch';

import { PremiumBento } from './premium-bento';
import { PremiumCases } from './premium-cases';
import { PremiumCompare } from './premium-compare';
import PremiumEditorialSeo from './premium-editorial-seo';
import { PremiumFaq } from './premium-faq';
import { PremiumFinalCta } from './premium-final-cta';
import { PremiumHero } from './premium-hero';
import { PremiumIntro } from './premium-intro';
import { PremiumProcess } from './premium-process';
import { PremiumSitesAudience } from './premium-sites-audience';
import { PremiumSitesBreadcrumb } from './premium-sites-breadcrumb';
import { PremiumSitesTrustMarquee } from './premium-sites-trust-marquee';
import { PremiumStackMarquee } from './premium-stack-marquee';

/** Page pilier /sites-internet — layout premium (Sanity + FAQ unifiée + bloc SEO). */
export default async function SitesInternetPremiumPage() {
  const caseStudies = await getFeaturedCaseStudies();

  return (
    <main className="bg-black text-white">
      <PremiumSitesBreadcrumb />
      <PremiumHero />
      <PremiumSitesTrustMarquee />
      <PremiumIntro />
      <PremiumBento />
      <PremiumEditorialSeo />
      <PremiumSitesAudience />
      <PremiumCompare />
      <PremiumProcess />
      <PremiumStackMarquee />
      <PremiumCases caseStudies={caseStudies} />
      <PremiumFaq />
      <PremiumFinalCta />
    </main>
  );
}
