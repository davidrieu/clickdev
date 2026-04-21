import { ExpertisesBreadcrumb } from '@/components/expertises/expertises-breadcrumb';
import { ExpertisesIndexFaq } from '@/components/expertises/expertises-index-faq';
import { ExpertisesIndexGrid } from '@/components/expertises/expertises-index-grid';
import { ExpertisesIndexHero } from '@/components/expertises/expertises-index-hero';
import { PremiumFinalCta } from '@/components/silos/sites-internet/premium-final-cta';
import { CollectionPageItemListJsonLd } from '@/components/seo/collection-page-item-list-json-ld';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { FaqPageJsonLd } from '@/components/seo/faq-page-json-ld';
import { EXPERTISE_INDEX_FAQ, EXPERTISE_INDEX_GROUPS } from '@/lib/constants/expertises-index';
import { HOME_STACK_ITEMS } from '@/lib/constants/home-content';
import { SITE_NAME } from '@/lib/constants/site';
import { getExpertiseArticle } from '@/lib/content/expertise-articles';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

const jsonLdItems = [
  { name: 'Accueil', path: '/' },
  { name: 'Expertises', path: '/expertises' },
];

const pageTitle = `Expertises techniques — stack web, mobile & IA — ${SITE_NAME}`;

const ctaDescription = (
  <>
    <p>
      Décrivez votre contexte (stack actuelle, objectif, contraintes) : retour structuré sous{' '}
      <strong className="font-medium text-white/85">24h ouvrées</strong> avec pistes réalistes.
    </p>
    <p className="mt-4 text-white/55">
      Les fiches ci-dessus détaillent mon approche techno ; le devis traduit ça en périmètre et budget.
    </p>
  </>
);

export const metadata: Metadata = {
  ...listingPageMetadata({
    title: 'Expertises techniques (stack web, mobile & IA)',
    description:
      'Fiches SEO par techno : Next.js, WordPress, Shopify, WooCommerce, React Native, Laravel, Node.js, Python, OpenAI, Claude, LangChain. Méthode, livrables et liens vers sites, apps, IA et CRM — développeur freelance.',
    path: '/expertises',
  }),
  keywords: [
    'expertise développeur freelance',
    'Next.js freelance France',
    'WordPress freelance',
    'Shopify développeur',
    'React Native freelance',
    'Laravel freelance',
    'Node.js freelance',
    'Python freelance',
    'FastAPI Django',
    'OpenAI intégration',
    'Claude API',
    'LangChain',
    'SEO technique freelance',
    'développeur full-stack',
  ],
};

export default function ExpertisesIndexPage() {
  const listItems = HOME_STACK_ITEMS.map((item) => ({
    path: `/expertises/${item.slug}`,
    name: item.name,
  }));

  const groups = EXPERTISE_INDEX_GROUPS.map((g) => ({
    id: g.id,
    title: g.title,
    description: g.description,
    items: g.slugs.map((slug) => {
      const stack = HOME_STACK_ITEMS.find((i) => i.slug === slug);
      const article = getExpertiseArticle(slug);
      return {
        slug,
        name: stack?.name ?? slug,
        teaser: article.metaDescription,
      };
    }),
  }));

  return (
    <>
      <BreadcrumbJsonLd items={jsonLdItems} />
      <CollectionPageItemListJsonLd pagePath="/expertises" pageTitle={pageTitle} items={listItems} />
      <FaqPageJsonLd items={[...EXPERTISE_INDEX_FAQ]} />
      <main className="bg-black text-white">
        <ExpertisesBreadcrumb />
        <ExpertisesIndexHero />
        <ExpertisesIndexGrid groups={groups} />
        <ExpertisesIndexFaq items={EXPERTISE_INDEX_FAQ} />
        <PremiumFinalCta
          title="Votre stack mérite un regard honnête"
          description={ctaDescription}
          primaryHref="/devis"
          primaryLabel="Demander un devis"
          secondaryHref="/contact"
          secondaryLabel="Me contacter"
        />
      </main>
    </>
  );
}
