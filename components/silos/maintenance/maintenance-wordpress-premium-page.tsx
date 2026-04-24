import Link from 'next/link';

import { PremiumChildEditorialShell } from '@/components/silos/sites-internet/premium-child-editorial-shell';
import { PremiumFinalCta } from '@/components/silos/sites-internet/premium-final-cta';
import { PremiumCases } from '@/components/silos/sites-internet/premium-cases';
import { PremiumSitesChildBreadcrumb } from '@/components/silos/sites-internet/premium-sites-child-breadcrumb';
import { PremiumSitesChildHero } from '@/components/silos/sites-internet/premium-sites-child-hero';
import { PremiumSitesTrustMarquee } from '@/components/silos/sites-internet/premium-sites-trust-marquee';
import { MaintenanceWordpressEditorialContent } from '@/components/silos/maintenance/maintenance-wordpress-editorial-content';
import {
  SiteEcommerceAudienceSection,
  SiteEcommerceBenefitsSection,
  SiteEcommerceCompareSection,
  SiteEcommerceFaqSection,
  SiteEcommerceProcessSection,
  SiteEcommerceStackSection,
} from '@/components/silos/sites-internet/site-ecommerce-blocks';
import {
  MAINTENANCE_WORDPRESS_AUDIENCE,
  MAINTENANCE_WORDPRESS_BENEFITS,
  MAINTENANCE_WORDPRESS_CASES,
  MAINTENANCE_WORDPRESS_COMPARE,
  MAINTENANCE_WORDPRESS_EDITORIAL,
  MAINTENANCE_WORDPRESS_FAQ,
  MAINTENANCE_WORDPRESS_FAQ_ITEMS,
  MAINTENANCE_WORDPRESS_FINAL_CTA,
  MAINTENANCE_WORDPRESS_HERO,
  MAINTENANCE_WORDPRESS_PROCESS,
  MAINTENANCE_WORDPRESS_STACK,
} from '@/lib/constants/maintenance-wordpress-page';
import { getFeaturedCaseStudies } from '@/lib/sanity/fetch';

export default async function MaintenanceWordpressPremiumPage() {
const caseStudies = await getFeaturedCaseStudies();
  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {MAINTENANCE_WORDPRESS_CASES.intro}{' '}
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
          { label: 'Maintenance', href: '/maintenance' },
          { label: 'Maintenance WordPress' },
        ]}
      />
      <PremiumSitesChildHero
        chapter={MAINTENANCE_WORDPRESS_HERO.chapter}
        subline={MAINTENANCE_WORDPRESS_HERO.subline}
        h1={MAINTENANCE_WORDPRESS_HERO.h1}
        lead={MAINTENANCE_WORDPRESS_HERO.lead}
        primaryCta={MAINTENANCE_WORDPRESS_HERO.primaryCta}
        secondaryCta={MAINTENANCE_WORDPRESS_HERO.secondaryCta}
        mockupId="maintenance"
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={MAINTENANCE_WORDPRESS_BENEFITS.kicker}
        title={MAINTENANCE_WORDPRESS_BENEFITS.title}
        subtitle={MAINTENANCE_WORDPRESS_BENEFITS.subtitle}
        items={MAINTENANCE_WORDPRESS_BENEFITS.items}
      />
      <PremiumChildEditorialShell
        kicker={MAINTENANCE_WORDPRESS_EDITORIAL.kicker}
        title={MAINTENANCE_WORDPRESS_EDITORIAL.title}
      >
        <MaintenanceWordpressEditorialContent />
      </PremiumChildEditorialShell>
      <SiteEcommerceAudienceSection
        kicker={MAINTENANCE_WORDPRESS_AUDIENCE.kicker}
        title={MAINTENANCE_WORDPRESS_AUDIENCE.title}
        subtitle={MAINTENANCE_WORDPRESS_AUDIENCE.subtitle}
        cards={MAINTENANCE_WORDPRESS_AUDIENCE.cards}
      />
      <SiteEcommerceCompareSection
        kicker={MAINTENANCE_WORDPRESS_COMPARE.kicker}
        title={MAINTENANCE_WORDPRESS_COMPARE.title}
        subtitle={MAINTENANCE_WORDPRESS_COMPARE.subtitle}
        columns={MAINTENANCE_WORDPRESS_COMPARE.columns}
        rows={MAINTENANCE_WORDPRESS_COMPARE.rows}
      />
      <SiteEcommerceProcessSection
        kicker={MAINTENANCE_WORDPRESS_PROCESS.kicker}
        title={MAINTENANCE_WORDPRESS_PROCESS.title}
        steps={MAINTENANCE_WORDPRESS_PROCESS.steps}
      />
      <SiteEcommerceStackSection
        kicker={MAINTENANCE_WORDPRESS_STACK.kicker}
        title={MAINTENANCE_WORDPRESS_STACK.title}
        body={MAINTENANCE_WORDPRESS_STACK.body}
        labels={MAINTENANCE_WORDPRESS_STACK.labels}
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={MAINTENANCE_WORDPRESS_CASES.kicker}
        title={MAINTENANCE_WORDPRESS_CASES.title}
        intro={casesIntro}
      />
      <SiteEcommerceFaqSection
        kicker={MAINTENANCE_WORDPRESS_FAQ.kicker}
        title={MAINTENANCE_WORDPRESS_FAQ.title}
        subtitle={MAINTENANCE_WORDPRESS_FAQ.subtitle}
        items={MAINTENANCE_WORDPRESS_FAQ_ITEMS}
      />
      <PremiumFinalCta
        title={MAINTENANCE_WORDPRESS_FINAL_CTA.title}
        primaryHref={MAINTENANCE_WORDPRESS_FINAL_CTA.primaryHref}
        primaryLabel={MAINTENANCE_WORDPRESS_FINAL_CTA.primaryLabel}
        secondaryHref={MAINTENANCE_WORDPRESS_FINAL_CTA.secondaryHref}
        secondaryLabel={MAINTENANCE_WORDPRESS_FINAL_CTA.secondaryLabel}
      />
    </main>
  );
}
