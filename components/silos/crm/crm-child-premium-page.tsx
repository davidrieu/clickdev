import { PremiumSiloServiceTemplate } from '@/components/silo-shared/premium-silo-service-template';
import { CRM_PREMIUM_CHILDREN, type CrmPremiumSlug } from '@/lib/constants/crm-premium-children';
import { prioritizeCrmCaseStudies } from '@/lib/content/seo-crm-case-studies';

import { CRM_CHILD_EDITORIALS } from './crm-child-editorials';

export async function CrmChildPremiumPage({ slug }: { slug: CrmPremiumSlug }) {
  const c = CRM_PREMIUM_CHILDREN[slug];
  return (
    <PremiumSiloServiceTemplate
      breadcrumbItems={[
        { label: 'Accueil', href: '/' },
        { label: 'CRM & outils métiers', href: '/crm-outils-metiers' },
        { label: c.breadcrumbLabel },
      ]}
      hero={c.hero}
      benefits={c.benefits}
      editorial={c.editorial}
      editorialContent={CRM_CHILD_EDITORIALS[slug]}
      audience={c.audience}
      compare={c.compare}
      process={c.process}
      stack={c.stack}
      cases={c.cases}
      faq={c.faq}
      faqItems={c.faqItems}
      finalCta={c.finalCta}
      stackPillar={{ href: '/crm-outils-metiers', label: 'CRM & outils métiers' }}
      caseStudiesPick={prioritizeCrmCaseStudies}
    />
  );
}
