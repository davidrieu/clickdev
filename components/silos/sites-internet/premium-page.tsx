import { MarketingAmbientBackdrop } from '@/components/marketing/marketing-ambient-backdrop';

import { PremiumBento } from './premium-bento';
import { PremiumBudgetFaq } from './premium-budget-faq';
import { PremiumCases } from './premium-cases';
import { PremiumCompare } from './premium-compare';
import { PremiumFinalCta } from './premium-final-cta';
import { PremiumHero } from './premium-hero';
import { PremiumIntro } from './premium-intro';
import { PremiumProcess } from './premium-process';
import { PremiumQuotes } from './premium-quotes';
import { PremiumStackMarquee } from './premium-stack-marquee';
import { PremiumTechFaq } from './premium-tech-faq';

/** Page pilier /sites-internet — layout premium 11 sections. */
export default function SitesInternetPremiumPage() {
  return (
    <main className="bg-black text-white">
      <MarketingAmbientBackdrop />
      <PremiumHero />
      <PremiumIntro />
      <PremiumBento />
      <PremiumProcess />
      <PremiumStackMarquee />
      <PremiumCompare />
      <PremiumCases />
      <PremiumBudgetFaq />
      <PremiumQuotes />
      <PremiumTechFaq />
      <PremiumFinalCta />
    </main>
  );
}
