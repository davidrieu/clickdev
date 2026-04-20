import MarketingShell from '@/components/marketing/marketing-shell';
import MarketingArticleBody from '@/components/marketing/marketing-article-body';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { FaqPageJsonLd } from '@/components/seo/faq-page-json-ld';
import { AgentsIaPageJsonLd } from '@/components/seo/agents-ia-page-json-ld';
import { AndroidAppPageJsonLd } from '@/components/seo/android-app-page-json-ld';
import { AutomatisationIaPageJsonLd } from '@/components/seo/automatisation-ia-page-json-ld';
import { ChatbotIaPageJsonLd } from '@/components/seo/chatbot-ia-page-json-ld';
import { IaGenerativeEcommercePageJsonLd } from '@/components/seo/ia-generative-ecommerce-page-json-ld';
import { IntegrationIaPageJsonLd } from '@/components/seo/integration-ia-page-json-ld';
import { RagBaseConnaissancesPageJsonLd } from '@/components/seo/rag-base-connaissances-page-json-ld';
import { IntranetExtranetPageJsonLd } from '@/components/seo/intranet-extranet-page-json-ld';
import { IosAppPageJsonLd } from '@/components/seo/ios-app-page-json-ld';
import { LandingPageSiloJsonLd } from '@/components/seo/landing-page-json-ld';
import { PwaAppPageJsonLd } from '@/components/seo/pwa-app-page-json-ld';
import { ReactNativeAppPageJsonLd } from '@/components/seo/react-native-app-page-json-ld';
import { MarketplacePageJsonLd } from '@/components/seo/marketplace-page-json-ld';
import { SiteEcommercePageJsonLd } from '@/components/seo/site-ecommerce-page-json-ld';
import { SiteMiseEnRelationPageJsonLd } from '@/components/seo/site-mise-en-relation-page-json-ld';
import { SiteSurMesurePageJsonLd } from '@/components/seo/site-sur-mesure-page-json-ld';
import { SiteVitrinePageJsonLd } from '@/components/seo/site-vitrine-page-json-ld';
import { SiteWordpressPageJsonLd } from '@/components/seo/site-wordpress-page-json-ld';
import AgentsIaPremiumPage from '@/components/silos/ia/agents-ia-premium-page';
import AutomatisationIaPremiumPage from '@/components/silos/ia/automatisation-ia-premium-page';
import ChatbotIaPremiumPage from '@/components/silos/ia/chatbot-ia-premium-page';
import IaGenerativeEcommercePremiumPage from '@/components/silos/ia/ia-generative-ecommerce-premium-page';
import IntegrationIaPremiumPage from '@/components/silos/ia/integration-ia-premium-page';
import RagBaseConnaissancesPremiumPage from '@/components/silos/ia/rag-base-connaissances-premium-page';
import AndroidPremiumPage from '@/components/silos/applications-mobiles/android-premium-page';
import IosPremiumPage from '@/components/silos/applications-mobiles/ios-premium-page';
import PwaPremiumPage from '@/components/silos/applications-mobiles/pwa-premium-page';
import ReactNativePremiumPage from '@/components/silos/applications-mobiles/react-native-premium-page';
import IntranetExtranetPremiumPage from '@/components/silos/sites-internet/intranet-extranet-premium-page';
import LandingPagePremiumPage from '@/components/silos/sites-internet/landing-page-premium-page';
import MarketplacePremiumPage from '@/components/silos/sites-internet/marketplace-premium-page';
import SiteEcommercePremiumPage from '@/components/silos/sites-internet/site-ecommerce-premium-page';
import SiteMiseEnRelationPremiumPage from '@/components/silos/sites-internet/site-mise-en-relation-premium-page';
import SiteSurMesurePremiumPage from '@/components/silos/sites-internet/site-sur-mesure-premium-page';
import SiteVitrinePremiumPage from '@/components/silos/sites-internet/site-vitrine-premium-page';
import SiteWordpressPremiumPage from '@/components/silos/sites-internet/site-wordpress-premium-page';
import { AGENTS_IA_FAQ_ITEMS } from '@/lib/constants/agents-ia-page';
import { AUTOMATISATION_IA_FAQ_ITEMS } from '@/lib/constants/automatisation-ia-page';
import { CHATBOT_IA_FAQ_ITEMS } from '@/lib/constants/chatbot-ia-page';
import { IA_GENERATIVE_ECOMMERCE_FAQ_ITEMS } from '@/lib/constants/ia-generative-ecommerce-page';
import { INTEGRATION_IA_FAQ_ITEMS } from '@/lib/constants/integration-ia-page';
import { RAG_BASE_CONNAISSANCES_FAQ_ITEMS } from '@/lib/constants/rag-base-connaissances-page';
import { ANDROID_APP_FAQ_ITEMS } from '@/lib/constants/android-app-page';
import { INTRANET_EXTRANET_FAQ_ITEMS } from '@/lib/constants/intranet-extranet-page';
import { IOS_APP_FAQ_ITEMS } from '@/lib/constants/ios-app-page';
import { LANDING_PAGE_FAQ_ITEMS } from '@/lib/constants/landing-page';
import { PWA_APP_FAQ_ITEMS } from '@/lib/constants/pwa-app-page';
import { REACT_NATIVE_APP_FAQ_ITEMS } from '@/lib/constants/react-native-app-page';
import { MARKETPLACE_FAQ_ITEMS } from '@/lib/constants/marketplace-page';
import { SITE_MISE_EN_RELATION_FAQ_ITEMS } from '@/lib/constants/site-mise-en-relation-page';
import { SITE_SUR_MESURE_FAQ_ITEMS } from '@/lib/constants/site-sur-mesure-page';
import { SITE_VITRINE_FAQ_ITEMS } from '@/lib/constants/site-vitrine-page';
import { SITE_WORDPRESS_FAQ_ITEMS } from '@/lib/constants/site-wordpress-page';
import { SITE_ECOMMERCE_FAQ_ITEMS } from '@/lib/constants/site-ecommerce-page';
import { withMarketingVisualPlaceholders } from '@/lib/content/marketing-article-visuals';
import { getSiloChildArticle } from '@/lib/content/silo-child-articles';
import {
  NAV_SILOS,
  SERVICE_SILOS,
  getChildSlugsForSilo,
  isServiceSilo,
} from '@/lib/constants/sitemap';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import { agentsIaPageMetadata } from '@/lib/seo/agents-ia-metadata';
import { androidAppPageMetadata } from '@/lib/seo/android-app-metadata';
import { automatisationIaPageMetadata } from '@/lib/seo/automatisation-ia-metadata';
import { chatbotIaPageMetadata } from '@/lib/seo/chatbot-ia-metadata';
import { iaGenerativeEcommercePageMetadata } from '@/lib/seo/ia-generative-ecommerce-metadata';
import { integrationIaPageMetadata } from '@/lib/seo/integration-ia-metadata';
import { ragBaseConnaissancesPageMetadata } from '@/lib/seo/rag-base-connaissances-metadata';
import { intranetExtranetPageMetadata } from '@/lib/seo/intranet-extranet-metadata';
import { iosAppPageMetadata } from '@/lib/seo/ios-app-metadata';
import { landingPageSiloMetadata } from '@/lib/seo/landing-page-metadata';
import { pwaAppPageMetadata } from '@/lib/seo/pwa-app-metadata';
import { reactNativeAppPageMetadata } from '@/lib/seo/react-native-app-metadata';
import { marketplacePageMetadata } from '@/lib/seo/marketplace-metadata';
import { siteEcommercePageMetadata } from '@/lib/seo/site-ecommerce-metadata';
import { siteMiseEnRelationPageMetadata } from '@/lib/seo/site-mise-en-relation-metadata';
import { siteSurMesurePageMetadata } from '@/lib/seo/site-sur-mesure-metadata';
import { siteVitrinePageMetadata } from '@/lib/seo/site-vitrine-metadata';
import { siteWordpressPageMetadata } from '@/lib/seo/site-wordpress-metadata';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ silo: string; slug: string }> };

export function generateStaticParams() {
  return SERVICE_SILOS.flatMap((silo) =>
    getChildSlugsForSilo(silo).map((slug) => ({
      silo,
      slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { silo, slug } = await params;
  if (!isServiceSilo(silo)) return {};
  const entry = NAV_SILOS.find((s) => s.href === `/${silo}`);
  const child = entry?.children.find((c) => c.href === `/${silo}/${slug}`);
  if (!child || !entry) return {};
  if (silo === 'sites-internet' && slug === 'site-ecommerce') {
    return siteEcommercePageMetadata();
  }
  if (silo === 'sites-internet' && slug === 'marketplace') {
    return marketplacePageMetadata();
  }
  if (silo === 'sites-internet' && slug === 'site-mise-en-relation') {
    return siteMiseEnRelationPageMetadata();
  }
  if (silo === 'sites-internet' && slug === 'site-sur-mesure') {
    return siteSurMesurePageMetadata();
  }
  if (silo === 'sites-internet' && slug === 'site-wordpress') {
    return siteWordpressPageMetadata();
  }
  if (silo === 'sites-internet' && slug === 'site-vitrine') {
    return siteVitrinePageMetadata();
  }
  if (silo === 'sites-internet' && slug === 'intranet-extranet') {
    return intranetExtranetPageMetadata();
  }
  if (silo === 'sites-internet' && slug === 'landing-page') {
    return landingPageSiloMetadata();
  }
  if (silo === 'applications-mobiles' && slug === 'ios') {
    return iosAppPageMetadata();
  }
  if (silo === 'applications-mobiles' && slug === 'android') {
    return androidAppPageMetadata();
  }
  if (silo === 'applications-mobiles' && slug === 'react-native') {
    return reactNativeAppPageMetadata();
  }
  if (silo === 'applications-mobiles' && slug === 'pwa') {
    return pwaAppPageMetadata();
  }
  if (silo === 'ia' && slug === 'integration-ia') {
    return integrationIaPageMetadata();
  }
  if (silo === 'ia' && slug === 'chatbot-ia') {
    return chatbotIaPageMetadata();
  }
  if (silo === 'ia' && slug === 'agents-ia') {
    return agentsIaPageMetadata();
  }
  if (silo === 'ia' && slug === 'automatisation-ia') {
    return automatisationIaPageMetadata();
  }
  if (silo === 'ia' && slug === 'rag-base-connaissances') {
    return ragBaseConnaissancesPageMetadata();
  }
  if (silo === 'ia' && slug === 'ia-generative-ecommerce') {
    return iaGenerativeEcommercePageMetadata();
  }
  const article = getSiloChildArticle(silo, slug, child.label, entry.label);
  return listingPageMetadata({
    title: child.label,
    description: article.metaDescription,
    path: `/${silo}/${slug}`,
  });
}

export default async function SiloChildPage({ params }: Props) {
  const { silo, slug } = await params;
  if (!isServiceSilo(silo)) notFound();
  const entry = NAV_SILOS.find((s) => s.href === `/${silo}`);
  const child = entry?.children.find((c) => c.href === `/${silo}/${slug}`);
  if (!entry || !child) notFound();

  const article = withMarketingVisualPlaceholders(
    getSiloChildArticle(silo, slug, child.label, entry.label)
  );
  const relatedPages = entry.children
    .filter((c) => c.href !== child.href)
    .map((c) => ({ label: c.label, href: c.href }));

  if (silo === 'sites-internet' && slug === 'site-ecommerce') {
    return (
      <>
        <SiteEcommercePageJsonLd faqItems={[...SITE_ECOMMERCE_FAQ_ITEMS]} />
        <SiteEcommercePremiumPage />
      </>
    );
  }

  if (silo === 'sites-internet' && slug === 'marketplace') {
    return (
      <>
        <MarketplacePageJsonLd faqItems={[...MARKETPLACE_FAQ_ITEMS]} />
        <MarketplacePremiumPage />
      </>
    );
  }

  if (silo === 'sites-internet' && slug === 'site-mise-en-relation') {
    return (
      <>
        <SiteMiseEnRelationPageJsonLd faqItems={[...SITE_MISE_EN_RELATION_FAQ_ITEMS]} />
        <SiteMiseEnRelationPremiumPage />
      </>
    );
  }

  if (silo === 'sites-internet' && slug === 'site-sur-mesure') {
    return (
      <>
        <SiteSurMesurePageJsonLd faqItems={[...SITE_SUR_MESURE_FAQ_ITEMS]} />
        <SiteSurMesurePremiumPage />
      </>
    );
  }

  if (silo === 'sites-internet' && slug === 'site-wordpress') {
    return (
      <>
        <SiteWordpressPageJsonLd faqItems={[...SITE_WORDPRESS_FAQ_ITEMS]} />
        <SiteWordpressPremiumPage />
      </>
    );
  }

  if (silo === 'sites-internet' && slug === 'site-vitrine') {
    return (
      <>
        <SiteVitrinePageJsonLd faqItems={[...SITE_VITRINE_FAQ_ITEMS]} />
        <SiteVitrinePremiumPage />
      </>
    );
  }

  if (silo === 'sites-internet' && slug === 'intranet-extranet') {
    return (
      <>
        <IntranetExtranetPageJsonLd faqItems={[...INTRANET_EXTRANET_FAQ_ITEMS]} />
        <IntranetExtranetPremiumPage />
      </>
    );
  }

  if (silo === 'sites-internet' && slug === 'landing-page') {
    return (
      <>
        <LandingPageSiloJsonLd faqItems={[...LANDING_PAGE_FAQ_ITEMS]} />
        <LandingPagePremiumPage />
      </>
    );
  }

  if (silo === 'applications-mobiles' && slug === 'ios') {
    return (
      <>
        <IosAppPageJsonLd faqItems={[...IOS_APP_FAQ_ITEMS]} />
        <IosPremiumPage />
      </>
    );
  }

  if (silo === 'applications-mobiles' && slug === 'android') {
    return (
      <>
        <AndroidAppPageJsonLd faqItems={[...ANDROID_APP_FAQ_ITEMS]} />
        <AndroidPremiumPage />
      </>
    );
  }

  if (silo === 'applications-mobiles' && slug === 'react-native') {
    return (
      <>
        <ReactNativeAppPageJsonLd faqItems={[...REACT_NATIVE_APP_FAQ_ITEMS]} />
        <ReactNativePremiumPage />
      </>
    );
  }

  if (silo === 'applications-mobiles' && slug === 'pwa') {
    return (
      <>
        <PwaAppPageJsonLd faqItems={[...PWA_APP_FAQ_ITEMS]} />
        <PwaPremiumPage />
      </>
    );
  }

  if (silo === 'ia' && slug === 'integration-ia') {
    return (
      <>
        <IntegrationIaPageJsonLd faqItems={[...INTEGRATION_IA_FAQ_ITEMS]} />
        <IntegrationIaPremiumPage />
      </>
    );
  }

  if (silo === 'ia' && slug === 'chatbot-ia') {
    return (
      <>
        <ChatbotIaPageJsonLd faqItems={[...CHATBOT_IA_FAQ_ITEMS]} />
        <ChatbotIaPremiumPage />
      </>
    );
  }

  if (silo === 'ia' && slug === 'agents-ia') {
    return (
      <>
        <AgentsIaPageJsonLd faqItems={[...AGENTS_IA_FAQ_ITEMS]} />
        <AgentsIaPremiumPage />
      </>
    );
  }

  if (silo === 'ia' && slug === 'automatisation-ia') {
    return (
      <>
        <AutomatisationIaPageJsonLd faqItems={[...AUTOMATISATION_IA_FAQ_ITEMS]} />
        <AutomatisationIaPremiumPage />
      </>
    );
  }

  if (silo === 'ia' && slug === 'rag-base-connaissances') {
    return (
      <>
        <RagBaseConnaissancesPageJsonLd faqItems={[...RAG_BASE_CONNAISSANCES_FAQ_ITEMS]} />
        <RagBaseConnaissancesPremiumPage />
      </>
    );
  }

  if (silo === 'ia' && slug === 'ia-generative-ecommerce') {
    return (
      <>
        <IaGenerativeEcommercePageJsonLd faqItems={[...IA_GENERATIVE_ECOMMERCE_FAQ_ITEMS]} />
        <IaGenerativeEcommercePremiumPage />
      </>
    );
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', path: '/' },
          { name: entry.label, path: entry.href },
          { name: child.label, path: child.href },
        ]}
      />
      <FaqPageJsonLd items={article.faq} />
      <MarketingShell
        eyebrow={entry.label}
        title={child.label}
        description={article.lead}
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: entry.label, href: entry.href },
          { label: child.label, href: child.href },
        ]}
      >
        <MarketingArticleBody
          sections={article.sections}
          faq={article.faq}
          relatedPages={relatedPages}
        />
      </MarketingShell>
    </>
  );
}
