import type { Metadata } from "next";
import Link from "next/link";
import { ContextualInternalLinks } from "@/components/seo/contextual-internal-links";
import { PageFaqAccordion } from "@/components/seo/page-faq-accordion";
import { MarketingArticleShell } from "@/components/templates/marketing-article-shell";
import { MarketingEndButtonRow } from "@/components/templates/marketing-dual-cta";
import {
  MarketingBodyParagraph,
  MarketingEyebrow,
  MarketingLead,
  MarketingPageTitle,
} from "@/components/templates/marketing-editorial";
import { MarketingPageContainer } from "@/components/templates/marketing-page-container";
import { buttonVariants } from "@/components/ui/button";
import { blogContextLinks, blogFaq } from "@/lib/content/marketing-pages-extra";
import { faqPageJsonLd } from "@/lib/seo/faq-json-ld";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog — guides techniques, SEO, e-commerce & IA",
  description:
    "Articles Sanity : comparatifs, budgets, perf, SEO et IA. Liens vers les offres Sites, SEO, IA et réalisations — listing dynamique à venir.",
};

export default function BlogIndexPage() {
  const faqLd = faqPageJsonLd(blogFaq);

  return (
    <MarketingArticleShell aurora="soft">
      <MarketingPageContainer width="wide">
        <MarketingEyebrow>Blog</MarketingEyebrow>
        <MarketingPageTitle variant="display">Articles &amp; notes</MarketingPageTitle>
        <MarketingLead>
          Le blog capte le trafic informationnel amont : comparatifs de stacks, budgets réalistes, checklists de
          refonte, SEO technique, intégrations IA et retours d’expérience terrain. Les contenus sont pensés pour être
          utiles à la lecture et aux moteurs (y compris réponses assistées) — sections claires, faits vérifiables, liens vers sources externes
          lorsque pertinent, et renvoi vers les{" "}
          <Link href="/sites-internet/" className="text-terracotta underline-offset-4 hover:underline">
            pages silo
          </Link>{" "}
          lorsqu’un article doit se prolonger en offre commerciale.
        </MarketingLead>
        <MarketingBodyParagraph>
          La home affiche déjà un aperçu des derniers posts publiés depuis Sanity lorsque le contenu existe. Ce listing
          évoluera vers pagination, filtres par catégorie et recherche plein texte lorsque le volume d’articles
          augmentera — la structure URL restera propre pour les liens entre pages et les sitemaps.
        </MarketingBodyParagraph>
        <MarketingBodyParagraph>
          Thèmes typiques alignés sur le brief éditorial : WordPress vs Next.js, coût d’une marketplace, Core Web
          Vitals, e-commerce headless, intégration IA e-commerce, RAG expliqué simplement, migrations SEO. Chaque article
          doit pouvoir envoyer le lecteur vers une action mesurable (devis, audit, ou page silo) sans casser la
          confiance.
        </MarketingBodyParagraph>

        <ContextualInternalLinks
          className="mt-14 border-t border-line pt-12"
          eyebrow="Pour aller plus loin"
          title="Ressources liées sur Clickdev"
          intro="En attendant le listing dynamique complet, ces pages structurent le même savoir-faire que le blog, sous un angle commercial ou méthodologique."
          links={blogContextLinks}
        />

        <div className="mt-14 border-t border-line pt-12">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
          <PageFaqAccordion
            ariaLabelledBy="blog-faq"
            headingId="blog-faq"
            title="FAQ blog"
            subtitle="Réponses courtes sur le fonctionnement du blog et la republication de contenus."
            items={blogFaq}
          />
        </div>

        <MarketingEndButtonRow>
          <Link href="/" className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "justify-center")}>
            ← Retour à l’accueil
          </Link>
          <Link href="/devis/" className={cn(buttonVariants({ size: "cta" }), "justify-center")}>
            Demander un devis
          </Link>
        </MarketingEndButtonRow>
      </MarketingPageContainer>
    </MarketingArticleShell>
  );
}
