import { ContextualInternalLinks } from "@/components/seo/contextual-internal-links";
import { PageFaqAccordion } from "@/components/seo/page-faq-accordion";
import { MarketingHeroStage } from "@/components/marketing/marketing-hero-stage";
import { MarketingTldrBento } from "@/components/marketing/marketing-tldr-bento";
import { MarketingArticleShell } from "@/components/templates/marketing-article-shell";
import { MarketingDualCta } from "@/components/templates/marketing-dual-cta";
import { MarketingBackLink } from "@/components/templates/marketing-editorial";
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
    <MarketingArticleShell>
      <MarketingPageContainer width="article">
        <MarketingHeroStage
          variant="child"
          compact
          eyebrow={eyebrow}
          title={h1}
          lead={lead}
          topSlot={<MarketingBackLink href={parentHref}>← {parentLabel}</MarketingBackLink>}
        />
        <MarketingTldrBento items={tldr} />

        {sections.map((s, i) => (
          <MarketingProseSection key={s.heading} block={s} index={i} density="child" />
        ))}

        {internalLinks.length > 0 ? (
          <ContextualInternalLinks
            className="mt-16 border-t border-line pt-12 md:mt-20 md:pt-16"
            eyebrow="Pour aller plus loin"
            title="Pistes utiles depuis cette page"
            intro="Liens choisis pour prolonger votre lecture : sujets techniques proches, preuves terrain ou prochaine étape concrète (devis, audit). Chaque destination répond à une intention différente."
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
              subtitle="Réponses courtes et vérifiables : critères de décision, risques fréquents et suites possibles avant un échange ou une demande de devis."
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
