import { ContextualInternalLinks } from "@/components/seo/contextual-internal-links";
import { PageFaqAccordion } from "@/components/seo/page-faq-accordion";
import { getPillarSupplement } from "@/lib/content/pillar-supplements";
import { faqPageJsonLd } from "@/lib/seo/faq-json-ld";

type Props = { siloHref: string };

/** FAQ + maillage contextualisé sous le contenu principal (brief §5). */
export function SiloPillarBottom({ siloHref }: Props) {
  const sup = getPillarSupplement(siloHref);
  if (!sup) return null;

  const headingId = `faq-pillar-${siloHref.replace(/\//g, "-").replace(/^-|-$/g, "")}`;

  return (
    <>
      <ContextualInternalLinks
        className="mt-16 border-t border-line pt-12 md:mt-20 md:pt-16"
        eyebrow="Pour aller plus loin"
        title="Pistes utiles depuis cette page pilier"
        intro="Quelques pages du site pour approfondir un angle précis (e-commerce, SEO, IA, maintenance, CRM ou réalisations) sans repartir de zéro sur le menu."
        links={sup.links}
      />
      <div className="mt-16 border-t border-line pt-12 md:mt-20 md:pt-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(sup.faq)) }}
        />
        <PageFaqAccordion
          ariaLabelledBy={headingId}
          headingId={headingId}
          title="Questions fréquentes"
          subtitle="Réponses factuelles : arbitrages courants, budgets d’erreur et suites possibles — utiles pour cadrer un projet avant un échange."
          items={sup.faq}
        />
      </div>
    </>
  );
}
