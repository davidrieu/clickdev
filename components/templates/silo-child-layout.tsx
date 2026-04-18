import { ContextualInternalLinks } from "@/components/seo/contextual-internal-links";
import { PageFaqAccordion } from "@/components/seo/page-faq-accordion";
import { MarketingArticleShell } from "@/components/templates/marketing-article-shell";
import { MarketingDualCta } from "@/components/templates/marketing-dual-cta";
import {
  MarketingBackLink,
  MarketingEyebrow,
  MarketingLead,
  MarketingPageTitleTight,
  MarketingTldr,
} from "@/components/templates/marketing-editorial";
import { MarketingPageContainer } from "@/components/templates/marketing-page-container";
import { MarketingProseSection } from "@/components/templates/marketing-prose-section";
import type { SiloChildPageContent } from "@/lib/content/silo-child-types";
import { faqPageJsonLd } from "@/lib/seo/faq-json-ld";

type SiloChildLayoutProps = SiloChildPageContent & {
  parentHref: string;
  parentLabel: string;
};

export function SiloChildLayout({
  parentHref,
  parentLabel,
  eyebrow,
  h1,
  lead,
  tldr,
  sections,
  faq,
  internalLinks,
}: SiloChildLayoutProps) {
  return (
    <MarketingArticleShell aurora="soft">
      <MarketingPageContainer width="article">
        <MarketingBackLink href={parentHref}>← {parentLabel}</MarketingBackLink>
        <MarketingEyebrow className="mt-6">{eyebrow}</MarketingEyebrow>
        <MarketingPageTitleTight variant="child">{h1}</MarketingPageTitleTight>
        <MarketingLead>{lead}</MarketingLead>
        <MarketingTldr items={tldr} />

        {sections.map((s, i) => (
          <MarketingProseSection key={s.heading} block={s} index={i} density="child" />
        ))}

        {internalLinks.length > 0 ? (
          <ContextualInternalLinks
            className="mt-16 border-t border-line pt-12 md:mt-20 md:pt-16"
            eyebrow="Pour aller plus loin"
            title="Maillage interne — parcours utiles depuis cette page"
            intro="Chaque lien est choisi pour prolonger votre réflexion (stack, risques SEO, maintenance ou preuves terrain), pas pour remplir une colonne."
            links={internalLinks}
          />
        ) : null}

        {faq.length > 0 ? (
          <div className="mt-16 border-t border-line pt-12 md:mt-20 md:pt-16">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(faq)) }}
            />
            <PageFaqAccordion
              ariaLabelledBy="silo-child-faq-heading"
              headingId="silo-child-faq-heading"
              title="Questions fréquentes"
              subtitle="Réponses directes — format utile pour la lecture humaine et pour le référencement assisté par IA (GEO)."
              items={faq}
            />
          </div>
        ) : null}

        <MarketingDualCta
          className="mt-14 md:mt-16 md:pt-14"
          primary={{ href: "/devis/", label: "Demander un devis →" }}
          secondary={{ href: parentHref, label: `Vue d’ensemble ${parentLabel}` }}
        />
      </MarketingPageContainer>
    </MarketingArticleShell>
  );
}
