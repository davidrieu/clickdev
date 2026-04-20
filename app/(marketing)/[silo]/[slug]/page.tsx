import MarketingShell from '@/components/marketing/marketing-shell';
import MarketingArticleBody from '@/components/marketing/marketing-article-body';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { FaqPageJsonLd } from '@/components/seo/faq-page-json-ld';
import { AndroidAppPageJsonLd } from '@/components/seo/android-app-page-json-ld';
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
import { androidAppPageMetadata } from '@/lib/seo/android-app-metadata';
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
