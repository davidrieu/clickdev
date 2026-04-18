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
        eyebrow="Maillage interne"
        title="Poursuivre la lecture — liens choisis pour votre parcours"
        intro="Six à huit liens maximum, contextualisés : e-commerce, SEO, IA, maintenance, CRM ou preuves terrain selon ce que cette page pilier active comme questions chez le lecteur."
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
          subtitle="Réponses factuelles — utiles pour la décision d’achat et pour le référencement (y compris GEO)."
          items={sup.faq}
        />
      </div>
    </>
  );
}
