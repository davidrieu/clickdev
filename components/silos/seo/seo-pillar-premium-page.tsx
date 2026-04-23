import Link from 'next/link';

import { SeoPillarEditorialContent } from '@/components/silos/seo/seo-pillar-editorial-content';
import { SeoPremiumBento } from '@/components/silos/seo/seo-premium-bento';
import { PremiumChildEditorialShell } from '@/components/silos/sites-internet/premium-child-editorial-shell';
import { PremiumFinalCta } from '@/components/silos/sites-internet/premium-final-cta';
import { PremiumCases } from '@/components/silos/sites-internet/premium-cases';
import { PremiumSitesChildBreadcrumb } from '@/components/silos/sites-internet/premium-sites-child-breadcrumb';
import { PremiumSitesChildHero } from '@/components/silos/sites-internet/premium-sites-child-hero';
import { PremiumSitesTrustMarquee } from '@/components/silos/sites-internet/premium-sites-trust-marquee';
import {
  SiteEcommerceAudienceSection,
  SiteEcommerceBenefitsSection,
  SiteEcommerceCompareSection,
  SiteEcommerceFaqSection,
  SiteEcommerceProcessSection,
  SiteEcommerceStackSection,
} from '@/components/silos/sites-internet/site-ecommerce-blocks';
import {
  SEO_PILLAR_AUDIENCE,
  SEO_PILLAR_BENEFITS,
  SEO_PILLAR_CASES,
  SEO_PILLAR_COMPARE,
  SEO_PILLAR_EDITORIAL,
  SEO_PILLAR_FAQ,
  SEO_PILLAR_FAQ_ITEMS,
  SEO_PILLAR_FINAL_CTA,
  SEO_PILLAR_HERO,
  SEO_PILLAR_PROCESS,
  SEO_PILLAR_STACK,
} from '@/lib/constants/seo-pillar-premium';
import { getFeaturedCaseStudies } from '@/lib/sanity/fetch';

export default async function SeoPillarPremiumPage() {
  const caseStudies = await getFeaturedCaseStudies();

  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {SEO_PILLAR_CASES.intro}{' '}
      <Link href="/realisations" className="text-white/70 underline-offset-4 transition hover:text-white hover:underline">
        Voir les réalisations
      </Link>
      .
    </p>
  );

  return (
    <main className="bg-black text-white">
      <PremiumSitesChildBreadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'SEO' }]} />
      <PremiumSitesChildHero
        chapter={SEO_PILLAR_HERO.chapter}
        subline={SEO_PILLAR_HERO.subline}
        h1={SEO_PILLAR_HERO.h1}
        lead={SEO_PILLAR_HERO.lead}
        primaryCta={SEO_PILLAR_HERO.primaryCta}
        secondaryCta={SEO_PILLAR_HERO.secondaryCta}
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={SEO_PILLAR_BENEFITS.kicker}
        title={SEO_PILLAR_BENEFITS.title}
        subtitle={SEO_PILLAR_BENEFITS.subtitle}
        items={SEO_PILLAR_BENEFITS.items}
      />
      <SeoPremiumBento />
      <PremiumChildEditorialShell kicker={SEO_PILLAR_EDITORIAL.kicker} title={SEO_PILLAR_EDITORIAL.title}>
        <SeoPillarEditorialContent />
      </PremiumChildEditorialShell>
      <SiteEcommerceAudienceSection
        kicker={SEO_PILLAR_AUDIENCE.kicker}
        title={SEO_PILLAR_AUDIENCE.title}
        subtitle={SEO_PILLAR_AUDIENCE.subtitle}
        cards={SEO_PILLAR_AUDIENCE.cards}
      />
      <SiteEcommerceCompareSection
        kicker={SEO_PILLAR_COMPARE.kicker}
        title={SEO_PILLAR_COMPARE.title}
        subtitle={SEO_PILLAR_COMPARE.subtitle}
        columns={SEO_PILLAR_COMPARE.columns}
        rows={SEO_PILLAR_COMPARE.rows}
      />
      <SiteEcommerceProcessSection
        kicker={SEO_PILLAR_PROCESS.kicker}
        title={SEO_PILLAR_PROCESS.title}
        steps={SEO_PILLAR_PROCESS.steps}
      />
      <SiteEcommerceStackSection
        kicker={SEO_PILLAR_STACK.kicker}
        title={SEO_PILLAR_STACK.title}
        body={SEO_PILLAR_STACK.body}
        labels={SEO_PILLAR_STACK.labels}
        pillarHref="/"
        pillarLabel="l'accueil"
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={SEO_PILLAR_CASES.kicker}
        title={SEO_PILLAR_CASES.title}
        intro={casesIntro}
      />
      <SiteEcommerceFaqSection
        kicker={SEO_PILLAR_FAQ.kicker}
        title={SEO_PILLAR_FAQ.title}
        subtitle={SEO_PILLAR_FAQ.subtitle}
        items={SEO_PILLAR_FAQ_ITEMS}
      />
      <PremiumFinalCta
        title={SEO_PILLAR_FINAL_CTA.title}
        primaryHref={SEO_PILLAR_FINAL_CTA.primaryHref}
        primaryLabel={SEO_PILLAR_FINAL_CTA.primaryLabel}
        secondaryHref={SEO_PILLAR_FINAL_CTA.secondaryHref}
        secondaryLabel={SEO_PILLAR_FINAL_CTA.secondaryLabel}
      />
    </main>
  );
}
