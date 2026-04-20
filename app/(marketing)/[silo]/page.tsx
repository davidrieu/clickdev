import MarketingShell from '@/components/marketing/marketing-shell';
import MarketingArticleBody from '@/components/marketing/marketing-article-body';
import SitesInternetPremiumPage from '@/components/silos/sites-internet/premium-page';
import ApplicationsMobilesPremiumPage from '@/components/silos/applications-mobiles/applications-mobiles-premium-page';
import IaPillarPremiumPage from '@/components/silos/ia/ia-pillar-premium-page';
import CrmPillarPremiumPage from '@/components/silos/crm/crm-pillar-premium-page';
import SeoPillarPremiumPage from '@/components/silos/seo/seo-pillar-premium-page';
import { ApplicationsMobilesPillarJsonLd } from '@/components/seo/applications-mobiles-pillar-json-ld';
import { CrmPillarJsonLd } from '@/components/seo/crm-pillar-json-ld';
import { IaPillarJsonLd } from '@/components/seo/ia-pillar-json-ld';
import { SeoPillarJsonLd } from '@/components/seo/seo-pillar-json-ld';
import { CollectionPageItemListJsonLd } from '@/components/seo/collection-page-item-list-json-ld';
import { SitesInternetPillarJsonLd } from '@/components/seo/sites-internet-pillar-json-ld';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { FaqPageJsonLd } from '@/components/seo/faq-page-json-ld';
import { SITE_NAME } from '@/lib/constants/site';
import { withMarketingVisualPlaceholders } from '@/lib/content/marketing-article-visuals';
import { getSiloPillarArticle } from '@/lib/content/silo-pillar-articles';
import { applicationsMobilesPillarFaqJsonLdItems } from '@/lib/constants/applications-mobiles-pillar-premium';
import { crmPillarFaqJsonLdItems } from '@/lib/constants/crm-pillar-premium';
import { iaPillarFaqJsonLdItems } from '@/lib/constants/ia-pillar-premium';
import { seoPillarFaqJsonLdItems } from '@/lib/constants/seo-pillar-premium';
import { sitesInternetFaqJsonLdItems } from '@/lib/constants/sites-internet-premium';
import { NAV_SILOS, SERVICE_SILOS, isServiceSilo } from '@/lib/constants/sitemap';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import { applicationsMobilesPillarMetadata } from '@/lib/seo/applications-mobiles-pillar-metadata';
import { crmPillarMetadata } from '@/lib/seo/crm-pillar-metadata';
import { iaPillarMetadata } from '@/lib/seo/ia-pillar-metadata';
import { seoPillarMetadata } from '@/lib/seo/seo-pillar-metadata';
import { sitesInternetPillarMetadata } from '@/lib/seo/sites-internet-pillar-metadata';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ silo: string }> };

export function generateStaticParams() {
  return SERVICE_SILOS.map((silo) => ({ silo }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { silo } = await params;
  if (!isServiceSilo(silo)) return {};
  const entry = NAV_SILOS.find((s) => s.href === `/${silo}`);
  if (!entry) return {};
  if (silo === 'sites-internet') {
    return sitesInternetPillarMetadata();
  }
  if (silo === 'applications-mobiles') {
    return applicationsMobilesPillarMetadata();
  }
  if (silo === 'ia') {
    return iaPillarMetadata();
  }
  if (silo === 'seo') {
    return seoPillarMetadata();
  }
  if (silo === 'crm-outils-metiers') {
    return crmPillarMetadata();
  }
  const article = getSiloPillarArticle(silo);
  return listingPageMetadata({
    title: entry.label,
    description: article.metaDescription,
    path: `/${silo}`,
  });
}

export default async function SiloPillarPage({ params }: Props) {
  const { silo } = await params;
  if (!isServiceSilo(silo)) {
    notFound();
  }
  const entry = NAV_SILOS.find((s) => s.href === `/${silo}`);
  if (!entry) notFound();

  const article = withMarketingVisualPlaceholders(getSiloPillarArticle(silo));
  const relatedPages = entry.children.map((c) => ({ label: c.label, href: c.href }));
  const listItems = entry.children.map((c) => ({ path: c.href, name: c.label }));

  return (
    <>
      {silo === 'sites-internet' ? (
        <SitesInternetPillarJsonLd faqItems={sitesInternetFaqJsonLdItems()} />
      ) : silo === 'applications-mobiles' ? (
        <ApplicationsMobilesPillarJsonLd faqItems={applicationsMobilesPillarFaqJsonLdItems()} />
      ) : silo === 'ia' ? (
        <IaPillarJsonLd faqItems={iaPillarFaqJsonLdItems()} />
      ) : silo === 'seo' ? (
        <SeoPillarJsonLd faqItems={seoPillarFaqJsonLdItems()} />
      ) : silo === 'crm-outils-metiers' ? (
        <CrmPillarJsonLd faqItems={crmPillarFaqJsonLdItems()} />
      ) : (
        <>
          <BreadcrumbJsonLd
            items={[
              { name: 'Accueil', path: '/' },
              { name: entry.label, path: entry.href },
            ]}
          />
          <FaqPageJsonLd items={article.faq} />
        </>
      )}
      <CollectionPageItemListJsonLd
        pagePath={entry.href}
        pageTitle={`${entry.label} — ${SITE_NAME}`}
        items={listItems}
      />
      {silo === 'sites-internet' ? (
        <SitesInternetPremiumPage />
      ) : silo === 'applications-mobiles' ? (
        <ApplicationsMobilesPremiumPage />
      ) : silo === 'ia' ? (
        <IaPillarPremiumPage />
      ) : silo === 'seo' ? (
        <SeoPillarPremiumPage />
      ) : silo === 'crm-outils-metiers' ? (
        <CrmPillarPremiumPage />
      ) : (
        <MarketingShell
          eyebrow="Clickdev"
          title={entry.label}
          description={article.lead}
          breadcrumb={[
            { label: 'Accueil', href: '/' },
            { label: entry.label, href: entry.href },
          ]}
        >
          <MarketingArticleBody sections={article.sections} faq={article.faq} relatedPages={relatedPages} />
        </MarketingShell>
      )}
    </>
  );
}
