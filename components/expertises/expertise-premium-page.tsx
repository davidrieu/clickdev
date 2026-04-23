import Link from 'next/link';

import { ExpertiseEditorialProse } from '@/components/expertises/expertise-editorial-prose';
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
import { getExpertisePremiumPage } from '@/lib/constants/expertise-premium/registry';
import { loadCaseStudiesForExpertise } from '@/lib/content/expertise-premium-cases';
import type { ExpertiseSlug } from '@/lib/constants/sitemap';

type Props = { slug: ExpertiseSlug; breadcrumbLabel: string };

export default async function ExpertisePremiumPage({ slug, breadcrumbLabel }: Props) {
  const doc = getExpertisePremiumPage(slug);
  const caseStudies = await loadCaseStudiesForExpertise(slug);

  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {doc.cases.intro}{' '}
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
          { label: 'Expertises', href: '/expertises' },
          { label: breadcrumbLabel },
        ]}
      />
      <PremiumSitesChildHero
        chapter={doc.hero.chapter}
        subline={doc.hero.subline}
        h1={doc.hero.h1}
        lead={doc.hero.lead}
        primaryCta={doc.hero.primaryCta}
        secondaryCta={doc.hero.secondaryCta}
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={doc.benefits.kicker}
        title={doc.benefits.title}
        subtitle={doc.benefits.subtitle}
        items={doc.benefits.items}
      />
      <PremiumChildEditorialShell kicker={doc.editorial.kicker} title={doc.editorial.title}>
        <ExpertiseEditorialProse paragraphs={doc.editorial.paragraphs} />
      </PremiumChildEditorialShell>
      <SiteEcommerceAudienceSection
        kicker={doc.audience.kicker}
        title={doc.audience.title}
        subtitle={doc.audience.subtitle}
        cards={doc.audience.cards}
      />
      <SiteEcommerceCompareSection
        kicker={doc.compare.kicker}
        title={doc.compare.title}
        subtitle={doc.compare.subtitle}
        columns={doc.compare.columns}
        rows={doc.compare.rows}
      />
      <SiteEcommerceProcessSection kicker={doc.process.kicker} title={doc.process.title} steps={doc.process.steps} />
      <SiteEcommerceStackSection
        kicker={doc.stack.kicker}
        title={doc.stack.title}
        body={doc.stack.body}
        labels={doc.stack.labels}
        pillarHref="/expertises"
        pillarLabel="Expertises"
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={doc.cases.kicker}
        title={doc.cases.title}
        intro={casesIntro}
      />
      <SiteEcommerceFaqSection
        kicker={doc.faq.kicker}
        title={doc.faq.title}
        subtitle={doc.faq.subtitle}
        items={doc.faq.items}
      />
      <PremiumFinalCta
        title={doc.finalCta.title}
        primaryHref={doc.finalCta.primaryHref}
        primaryLabel={doc.finalCta.primaryLabel}
        secondaryHref={doc.finalCta.secondaryHref}
        secondaryLabel={doc.finalCta.secondaryLabel}
      />
    </main>
  );
}
