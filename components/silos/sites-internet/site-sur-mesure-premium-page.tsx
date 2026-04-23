import Link from 'next/link';

import { PremiumChildEditorialShell } from '@/components/silos/sites-internet/premium-child-editorial-shell';
import { PremiumFinalCta } from '@/components/silos/sites-internet/premium-final-cta';
import { PremiumCases } from '@/components/silos/sites-internet/premium-cases';
import { PremiumSitesChildBreadcrumb } from '@/components/silos/sites-internet/premium-sites-child-breadcrumb';
import { PremiumSitesChildHero } from '@/components/silos/sites-internet/premium-sites-child-hero';
import { PremiumSitesTrustMarquee } from '@/components/silos/sites-internet/premium-sites-trust-marquee';
import { SiteSurMesureEditorialContent } from '@/components/silos/sites-internet/site-sur-mesure-editorial-content';
import {
  SiteEcommerceAudienceSection,
  SiteEcommerceBenefitsSection,
  SiteEcommerceCompareSection,
  SiteEcommerceFaqSection,
  SiteEcommerceProcessSection,
  SiteEcommerceStackSection,
} from '@/components/silos/sites-internet/site-ecommerce-blocks';
import {
  SITE_SUR_MESURE_AUDIENCE,
  SITE_SUR_MESURE_BENEFITS,
  SITE_SUR_MESURE_CASES,
  SITE_SUR_MESURE_COMPARE,
  SITE_SUR_MESURE_EDITORIAL,
  SITE_SUR_MESURE_FAQ,
  SITE_SUR_MESURE_FAQ_ITEMS,
  SITE_SUR_MESURE_FINAL_CTA,
  SITE_SUR_MESURE_HERO,
  SITE_SUR_MESURE_PROCESS,
  SITE_SUR_MESURE_STACK,
} from '@/lib/constants/site-sur-mesure-page';
import { getFeaturedCaseStudies } from '@/lib/sanity/fetch';

/** Page fille premium `/sites-internet/site-sur-mesure`. */
export default async function SiteSurMesurePremiumPage() {
  const caseStudies = await getFeaturedCaseStudies();

  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {SITE_SUR_MESURE_CASES.intro}{' '}
      <Link href="/realisations" className="text-white/70 underline-offset-4 transition hover:text-white hover:underline">
        Toutes les réalisations
      </Link>
      .
    </p>
  );

  return (
    <main className="bg-black text-white">
      <PremiumSitesChildBreadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Sites internet', href: '/sites-internet' },
          { label: 'Site sur mesure' },
        ]}
      />
      <PremiumSitesChildHero
        chapter={SITE_SUR_MESURE_HERO.chapter}
        subline={SITE_SUR_MESURE_HERO.subline}
        h1={SITE_SUR_MESURE_HERO.h1}
        lead={SITE_SUR_MESURE_HERO.lead}
        primaryCta={SITE_SUR_MESURE_HERO.primaryCta}
        secondaryCta={SITE_SUR_MESURE_HERO.secondaryCta}
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={SITE_SUR_MESURE_BENEFITS.kicker}
        title={SITE_SUR_MESURE_BENEFITS.title}
        subtitle={SITE_SUR_MESURE_BENEFITS.subtitle}
        items={SITE_SUR_MESURE_BENEFITS.items}
      />
      <PremiumChildEditorialShell kicker={SITE_SUR_MESURE_EDITORIAL.kicker} title={SITE_SUR_MESURE_EDITORIAL.title}>
        <SiteSurMesureEditorialContent />
      </PremiumChildEditorialShell>
      <SiteEcommerceAudienceSection
        kicker={SITE_SUR_MESURE_AUDIENCE.kicker}
        title={SITE_SUR_MESURE_AUDIENCE.title}
        subtitle={SITE_SUR_MESURE_AUDIENCE.subtitle}
        cards={SITE_SUR_MESURE_AUDIENCE.cards}
      />
      <SiteEcommerceCompareSection
        kicker={SITE_SUR_MESURE_COMPARE.kicker}
        title={SITE_SUR_MESURE_COMPARE.title}
        subtitle={SITE_SUR_MESURE_COMPARE.subtitle}
        columns={SITE_SUR_MESURE_COMPARE.columns}
        rows={SITE_SUR_MESURE_COMPARE.rows}
      />
      <SiteEcommerceProcessSection
        kicker={SITE_SUR_MESURE_PROCESS.kicker}
        title={SITE_SUR_MESURE_PROCESS.title}
        steps={SITE_SUR_MESURE_PROCESS.steps}
      />
      <SiteEcommerceStackSection
        kicker={SITE_SUR_MESURE_STACK.kicker}
        title={SITE_SUR_MESURE_STACK.title}
        body={SITE_SUR_MESURE_STACK.body}
        labels={SITE_SUR_MESURE_STACK.labels}
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={SITE_SUR_MESURE_CASES.kicker}
        title={SITE_SUR_MESURE_CASES.title}
        intro={casesIntro}
      />
      <SiteEcommerceFaqSection
        kicker={SITE_SUR_MESURE_FAQ.kicker}
        title={SITE_SUR_MESURE_FAQ.title}
        subtitle={SITE_SUR_MESURE_FAQ.subtitle}
        items={SITE_SUR_MESURE_FAQ_ITEMS}
      />
      <PremiumFinalCta
        title={SITE_SUR_MESURE_FINAL_CTA.title}
        primaryHref={SITE_SUR_MESURE_FINAL_CTA.primaryHref}
        primaryLabel={SITE_SUR_MESURE_FINAL_CTA.primaryLabel}
        secondaryHref={SITE_SUR_MESURE_FINAL_CTA.secondaryHref}
        secondaryLabel={SITE_SUR_MESURE_FINAL_CTA.secondaryLabel}
      />
    </main>
  );
}
