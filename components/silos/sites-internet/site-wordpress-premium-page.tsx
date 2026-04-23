import Link from 'next/link';

import { PremiumChildEditorialShell } from '@/components/silos/sites-internet/premium-child-editorial-shell';
import { PremiumFinalCta } from '@/components/silos/sites-internet/premium-final-cta';
import { PremiumCases } from '@/components/silos/sites-internet/premium-cases';
import { PremiumSitesChildBreadcrumb } from '@/components/silos/sites-internet/premium-sites-child-breadcrumb';
import { PremiumSitesChildHero } from '@/components/silos/sites-internet/premium-sites-child-hero';
import { PremiumSitesTrustMarquee } from '@/components/silos/sites-internet/premium-sites-trust-marquee';
import { SiteWordpressEditorialContent } from '@/components/silos/sites-internet/site-wordpress-editorial-content';
import {
  SiteEcommerceAudienceSection,
  SiteEcommerceBenefitsSection,
  SiteEcommerceCompareSection,
  SiteEcommerceFaqSection,
  SiteEcommerceProcessSection,
  SiteEcommerceStackSection,
} from '@/components/silos/sites-internet/site-ecommerce-blocks';
import {
  SITE_WORDPRESS_AUDIENCE,
  SITE_WORDPRESS_BENEFITS,
  SITE_WORDPRESS_CASES,
  SITE_WORDPRESS_COMPARE,
  SITE_WORDPRESS_EDITORIAL,
  SITE_WORDPRESS_FAQ,
  SITE_WORDPRESS_FAQ_ITEMS,
  SITE_WORDPRESS_FINAL_CTA,
  SITE_WORDPRESS_HERO,
  SITE_WORDPRESS_PROCESS,
  SITE_WORDPRESS_STACK,
} from '@/lib/constants/site-wordpress-page';
import { getFeaturedCaseStudies } from '@/lib/sanity/fetch';

export default async function SiteWordpressPremiumPage() {
  const caseStudies = await getFeaturedCaseStudies();

  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {SITE_WORDPRESS_CASES.intro}{' '}
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
          { label: 'Site WordPress' },
        ]}
      />
      <PremiumSitesChildHero
        chapter={SITE_WORDPRESS_HERO.chapter}
        subline={SITE_WORDPRESS_HERO.subline}
        h1={SITE_WORDPRESS_HERO.h1}
        lead={SITE_WORDPRESS_HERO.lead}
        primaryCta={SITE_WORDPRESS_HERO.primaryCta}
        secondaryCta={SITE_WORDPRESS_HERO.secondaryCta}
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={SITE_WORDPRESS_BENEFITS.kicker}
        title={SITE_WORDPRESS_BENEFITS.title}
        subtitle={SITE_WORDPRESS_BENEFITS.subtitle}
        items={SITE_WORDPRESS_BENEFITS.items}
      />
      <PremiumChildEditorialShell kicker={SITE_WORDPRESS_EDITORIAL.kicker} title={SITE_WORDPRESS_EDITORIAL.title}>
        <SiteWordpressEditorialContent />
      </PremiumChildEditorialShell>
      <SiteEcommerceAudienceSection
        kicker={SITE_WORDPRESS_AUDIENCE.kicker}
        title={SITE_WORDPRESS_AUDIENCE.title}
        subtitle={SITE_WORDPRESS_AUDIENCE.subtitle}
        cards={SITE_WORDPRESS_AUDIENCE.cards}
      />
      <SiteEcommerceCompareSection
        kicker={SITE_WORDPRESS_COMPARE.kicker}
        title={SITE_WORDPRESS_COMPARE.title}
        subtitle={SITE_WORDPRESS_COMPARE.subtitle}
        columns={SITE_WORDPRESS_COMPARE.columns}
        rows={SITE_WORDPRESS_COMPARE.rows}
      />
      <SiteEcommerceProcessSection
        kicker={SITE_WORDPRESS_PROCESS.kicker}
        title={SITE_WORDPRESS_PROCESS.title}
        steps={SITE_WORDPRESS_PROCESS.steps}
      />
      <SiteEcommerceStackSection
        kicker={SITE_WORDPRESS_STACK.kicker}
        title={SITE_WORDPRESS_STACK.title}
        body={SITE_WORDPRESS_STACK.body}
        labels={SITE_WORDPRESS_STACK.labels}
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={SITE_WORDPRESS_CASES.kicker}
        title={SITE_WORDPRESS_CASES.title}
        intro={casesIntro}
      />
      <SiteEcommerceFaqSection
        kicker={SITE_WORDPRESS_FAQ.kicker}
        title={SITE_WORDPRESS_FAQ.title}
        subtitle={SITE_WORDPRESS_FAQ.subtitle}
        items={SITE_WORDPRESS_FAQ_ITEMS}
      />
      <PremiumFinalCta
        title={SITE_WORDPRESS_FINAL_CTA.title}
        primaryHref={SITE_WORDPRESS_FINAL_CTA.primaryHref}
        primaryLabel={SITE_WORDPRESS_FINAL_CTA.primaryLabel}
        secondaryHref={SITE_WORDPRESS_FINAL_CTA.secondaryHref}
        secondaryLabel={SITE_WORDPRESS_FINAL_CTA.secondaryLabel}
      />
    </main>
  );
}
