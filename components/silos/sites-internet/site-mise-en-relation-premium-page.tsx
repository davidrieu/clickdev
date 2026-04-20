import Link from 'next/link';

import { PremiumChildEditorialShell } from '@/components/silos/sites-internet/premium-child-editorial-shell';
import { PremiumFinalCta } from '@/components/silos/sites-internet/premium-final-cta';
import { PremiumCases } from '@/components/silos/sites-internet/premium-cases';
import { PremiumSitesChildBreadcrumb } from '@/components/silos/sites-internet/premium-sites-child-breadcrumb';
import { PremiumSitesChildHero } from '@/components/silos/sites-internet/premium-sites-child-hero';
import { PremiumSitesTestimonials } from '@/components/silos/sites-internet/premium-sites-testimonials';
import { PremiumSitesTrustMarquee } from '@/components/silos/sites-internet/premium-sites-trust-marquee';
import { SiteMiseEnRelationEditorialContent } from '@/components/silos/sites-internet/site-mise-en-relation-editorial-content';
import {
  SiteEcommerceAudienceSection,
  SiteEcommerceBenefitsSection,
  SiteEcommerceCompareSection,
  SiteEcommerceFaqSection,
  SiteEcommerceProcessSection,
  SiteEcommerceStackSection,
} from '@/components/silos/sites-internet/site-ecommerce-blocks';
import {
  SITE_MISE_EN_RELATION_AUDIENCE,
  SITE_MISE_EN_RELATION_BENEFITS,
  SITE_MISE_EN_RELATION_CASES,
  SITE_MISE_EN_RELATION_COMPARE,
  SITE_MISE_EN_RELATION_EDITORIAL,
  SITE_MISE_EN_RELATION_FAQ,
  SITE_MISE_EN_RELATION_FAQ_ITEMS,
  SITE_MISE_EN_RELATION_FINAL_CTA,
  SITE_MISE_EN_RELATION_HERO,
  SITE_MISE_EN_RELATION_PROCESS,
  SITE_MISE_EN_RELATION_STACK,
} from '@/lib/constants/site-mise-en-relation-page';
import { prioritizeMiseEnRelationCaseStudies } from '@/lib/content/site-mise-en-relation-cases';
import { getRecentWebCaseStudies } from '@/lib/sanity/fetch';

/** Page fille premium `/sites-internet/site-mise-en-relation`. */
export default async function SiteMiseEnRelationPremiumPage() {
  const raw = await getRecentWebCaseStudies();
  const caseStudies = prioritizeMiseEnRelationCaseStudies(raw);

  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {SITE_MISE_EN_RELATION_CASES.intro}{' '}
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
          { label: 'Site de mise en relation' },
        ]}
      />
      <PremiumSitesChildHero
        chapter={SITE_MISE_EN_RELATION_HERO.chapter}
        subline={SITE_MISE_EN_RELATION_HERO.subline}
        h1={SITE_MISE_EN_RELATION_HERO.h1}
        lead={SITE_MISE_EN_RELATION_HERO.lead}
        primaryCta={SITE_MISE_EN_RELATION_HERO.primaryCta}
        secondaryCta={SITE_MISE_EN_RELATION_HERO.secondaryCta}
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={SITE_MISE_EN_RELATION_BENEFITS.kicker}
        title={SITE_MISE_EN_RELATION_BENEFITS.title}
        subtitle={SITE_MISE_EN_RELATION_BENEFITS.subtitle}
        items={SITE_MISE_EN_RELATION_BENEFITS.items}
      />
      <PremiumChildEditorialShell
        kicker={SITE_MISE_EN_RELATION_EDITORIAL.kicker}
        title={SITE_MISE_EN_RELATION_EDITORIAL.title}
      >
        <SiteMiseEnRelationEditorialContent />
      </PremiumChildEditorialShell>
      <SiteEcommerceAudienceSection
        kicker={SITE_MISE_EN_RELATION_AUDIENCE.kicker}
        title={SITE_MISE_EN_RELATION_AUDIENCE.title}
        subtitle={SITE_MISE_EN_RELATION_AUDIENCE.subtitle}
        cards={SITE_MISE_EN_RELATION_AUDIENCE.cards}
      />
      <SiteEcommerceCompareSection
        kicker={SITE_MISE_EN_RELATION_COMPARE.kicker}
        title={SITE_MISE_EN_RELATION_COMPARE.title}
        subtitle={SITE_MISE_EN_RELATION_COMPARE.subtitle}
        columns={SITE_MISE_EN_RELATION_COMPARE.columns}
        rows={SITE_MISE_EN_RELATION_COMPARE.rows}
      />
      <SiteEcommerceProcessSection
        kicker={SITE_MISE_EN_RELATION_PROCESS.kicker}
        title={SITE_MISE_EN_RELATION_PROCESS.title}
        steps={SITE_MISE_EN_RELATION_PROCESS.steps}
      />
      <SiteEcommerceStackSection
        kicker={SITE_MISE_EN_RELATION_STACK.kicker}
        title={SITE_MISE_EN_RELATION_STACK.title}
        body={SITE_MISE_EN_RELATION_STACK.body}
        labels={SITE_MISE_EN_RELATION_STACK.labels}
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={SITE_MISE_EN_RELATION_CASES.kicker}
        title={SITE_MISE_EN_RELATION_CASES.title}
        intro={casesIntro}
      />
      <PremiumSitesTestimonials />
      <SiteEcommerceFaqSection
        kicker={SITE_MISE_EN_RELATION_FAQ.kicker}
        title={SITE_MISE_EN_RELATION_FAQ.title}
        subtitle={SITE_MISE_EN_RELATION_FAQ.subtitle}
        items={SITE_MISE_EN_RELATION_FAQ_ITEMS}
      />
      <PremiumFinalCta
        title={SITE_MISE_EN_RELATION_FINAL_CTA.title}
        primaryHref={SITE_MISE_EN_RELATION_FINAL_CTA.primaryHref}
        primaryLabel={SITE_MISE_EN_RELATION_FINAL_CTA.primaryLabel}
        secondaryHref={SITE_MISE_EN_RELATION_FINAL_CTA.secondaryHref}
        secondaryLabel={SITE_MISE_EN_RELATION_FINAL_CTA.secondaryLabel}
      />
    </main>
  );
}
