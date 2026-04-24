import { PremiumSiloServiceTemplate } from '@/components/silo-shared/premium-silo-service-template';
import { SEO_PREMIUM_CHILDREN, type SeoPremiumSlug } from '@/lib/constants/seo-premium-children';

import { SEO_CHILD_EDITORIALS } from './seo-child-editorials';

export async function SeoChildPremiumPage({ slug }: { slug: SeoPremiumSlug }) {
  const c = SEO_PREMIUM_CHILDREN[slug];
  return (
    <PremiumSiloServiceTemplate
      breadcrumbItems={[
        { label: 'Accueil', href: '/' },
        { label: 'SEO', href: '/seo' },
        { label: c.breadcrumbLabel },
      ]}
      hero={c.hero}
      benefits={c.benefits}
      editorial={c.editorial}
      editorialContent={SEO_CHILD_EDITORIALS[slug]}
      audience={c.audience}
      compare={c.compare}
      process={c.process}
      stack={c.stack}
      cases={c.cases}
      faq={c.faq}
      faqItems={c.faqItems}
      finalCta={c.finalCta}
      stackPillar={{ href: '/seo', label: 'SEO' }}
      heroMockupId="seo"
    />
  );
}
