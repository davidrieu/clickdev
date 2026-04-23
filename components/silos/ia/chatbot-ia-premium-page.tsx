import Link from 'next/link';

import { ChatbotIaEditorialContent } from '@/components/silos/ia/chatbot-ia-editorial-content';
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
  CHATBOT_IA_AUDIENCE,
  CHATBOT_IA_BENEFITS,
  CHATBOT_IA_CASES,
  CHATBOT_IA_COMPARE,
  CHATBOT_IA_EDITORIAL,
  CHATBOT_IA_FAQ,
  CHATBOT_IA_FAQ_ITEMS,
  CHATBOT_IA_FINAL_CTA,
  CHATBOT_IA_HERO,
  CHATBOT_IA_PROCESS,
  CHATBOT_IA_STACK,
} from '@/lib/constants/chatbot-ia-page';
import { getFeaturedCaseStudies } from '@/lib/sanity/fetch';

export default async function ChatbotIaPremiumPage() {
  const caseStudies = await getFeaturedCaseStudies();

  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {CHATBOT_IA_CASES.intro}{' '}
      <Link href="/realisations" className="text-white/70 underline-offset-4 transition hover:text-white hover:underline">
        Toutes les réalisations
      </Link>
      .
    </p>
  );

  return (
    <main className="bg-black text-white">
      <PremiumSitesChildBreadcrumb
        items={[{ label: 'Accueil', href: '/' }, { label: 'IA', href: '/ia' }, { label: 'Chatbot & assistant' }]}
      />
      <PremiumSitesChildHero
        chapter={CHATBOT_IA_HERO.chapter}
        subline={CHATBOT_IA_HERO.subline}
        h1={CHATBOT_IA_HERO.h1}
        lead={CHATBOT_IA_HERO.lead}
        primaryCta={CHATBOT_IA_HERO.primaryCta}
        secondaryCta={CHATBOT_IA_HERO.secondaryCta}
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={CHATBOT_IA_BENEFITS.kicker}
        title={CHATBOT_IA_BENEFITS.title}
        subtitle={CHATBOT_IA_BENEFITS.subtitle}
        items={CHATBOT_IA_BENEFITS.items}
      />
      <PremiumChildEditorialShell kicker={CHATBOT_IA_EDITORIAL.kicker} title={CHATBOT_IA_EDITORIAL.title}>
        <ChatbotIaEditorialContent />
      </PremiumChildEditorialShell>
      <SiteEcommerceAudienceSection
        kicker={CHATBOT_IA_AUDIENCE.kicker}
        title={CHATBOT_IA_AUDIENCE.title}
        subtitle={CHATBOT_IA_AUDIENCE.subtitle}
        cards={CHATBOT_IA_AUDIENCE.cards}
      />
      <SiteEcommerceCompareSection
        kicker={CHATBOT_IA_COMPARE.kicker}
        title={CHATBOT_IA_COMPARE.title}
        subtitle={CHATBOT_IA_COMPARE.subtitle}
        columns={CHATBOT_IA_COMPARE.columns}
        rows={CHATBOT_IA_COMPARE.rows}
      />
      <SiteEcommerceProcessSection
        kicker={CHATBOT_IA_PROCESS.kicker}
        title={CHATBOT_IA_PROCESS.title}
        steps={CHATBOT_IA_PROCESS.steps}
      />
      <SiteEcommerceStackSection
        kicker={CHATBOT_IA_STACK.kicker}
        title={CHATBOT_IA_STACK.title}
        body={CHATBOT_IA_STACK.body}
        labels={CHATBOT_IA_STACK.labels}
        pillarHref="/ia"
        pillarLabel="IA"
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={CHATBOT_IA_CASES.kicker}
        title={CHATBOT_IA_CASES.title}
        intro={casesIntro}
      />
      <SiteEcommerceFaqSection
        kicker={CHATBOT_IA_FAQ.kicker}
        title={CHATBOT_IA_FAQ.title}
        subtitle={CHATBOT_IA_FAQ.subtitle}
        items={CHATBOT_IA_FAQ_ITEMS}
      />
      <PremiumFinalCta
        title={CHATBOT_IA_FINAL_CTA.title}
        primaryHref={CHATBOT_IA_FINAL_CTA.primaryHref}
        primaryLabel={CHATBOT_IA_FINAL_CTA.primaryLabel}
        secondaryHref={CHATBOT_IA_FINAL_CTA.secondaryHref}
        secondaryLabel={CHATBOT_IA_FINAL_CTA.secondaryLabel}
      />
    </main>
  );
}
