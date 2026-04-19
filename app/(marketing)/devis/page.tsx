import type { Metadata } from "next";
import Link from "next/link";
import { MarketingHeroStage } from "@/components/marketing/marketing-hero-stage";
import { ContextualInternalLinks } from "@/components/seo/contextual-internal-links";
import { MarketingArticleShell } from "@/components/templates/marketing-article-shell";
import { MarketingBodyParagraph } from "@/components/templates/marketing-editorial";
import { MarketingPageContainer } from "@/components/templates/marketing-page-container";
import { DevisForm } from "@/components/forms/devis-form";
import { buttonVariants } from "@/components/ui/button";
import { devisContextLinks } from "@/lib/content/marketing-pages-extra";
import { calBookingUrl } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Demander un devis — projet web, mobile, IA, SEO ou CRM",
  description:
    "Formulaire structuré : type de projet, contexte, budget, délai. Liens vers contact, à propos, réalisations et pages d’offres pour qualifier avant envoi.",
};

export default function DevisPage() {
  return (
    <MarketingArticleShell>
      <MarketingPageContainer width="reading">
        <MarketingHeroStage
          variant="display"
          eyebrow="Devis"
          title="Démarrer un projet"
          lead="Plus le contexte est clair (objectifs business, contraintes techniques, périmètre pays/langues, intégrations ERP/CRM/PIM, niveau de risque SEO), plus la réponse sera utile. Ce formulaire multi-étapes reprend la logique brief : type de projet, création vs refonte, budget indicatif, délai — puis message libre pour les nuances. Aucun engagement à ce stade : l’objectif est un chiffrage ou un plan de phases défendable."
        />
        <MarketingBodyParagraph>
          Avant d’envoyer, vous pouvez parcourir les pages les plus proches de votre besoin — par exemple{" "}
          <Link href="/sites-internet/site-ecommerce/" className="text-primary underline-offset-4 hover:underline">
            Site e-commerce
          </Link>
          ,{" "}
          <Link href="/seo/audit-seo/" className="text-primary underline-offset-4 hover:underline">
            Audit SEO
          </Link>{" "}
          ou{" "}
          <Link href="/ia/rag-base-connaissances/" className="text-primary underline-offset-4 hover:underline">
            RAG
          </Link>{" "}
          — cela enrichit votre message et réduit les allers-retours.
        </MarketingBodyParagraph>
        <p className="mt-4 text-sm text-ink-muted md:text-base">
          Préférez un échange oral d’abord ?{" "}
          <a
            href={calBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            Réserver un créneau
          </a>{" "}
          — puis revenez au devis si le périmètre se précise.
        </p>

        <div className="mt-10 rounded-lg border border-line bg-bg-3/80 p-6 md:p-8">
          <DevisForm />
        </div>

        <p className="mt-8 text-center text-xs text-ink-muted md:text-sm">
          Envoi automatisé (e-mail) : prochaine étape du brief — pour l’instant enregistrement côté navigateur
          uniquement.
        </p>

        <ContextualInternalLinks
          className="mt-14 border-t border-line pt-12"
          eyebrow="Pour aller plus loin"
          title="Pages utiles avant / après envoi"
          intro="Six liens pour continuer à qualifier votre besoin ou valider le style de travail — sans quitter l’écosystème du site."
          links={devisContextLinks}
        />

        <div className="mt-10 flex justify-center">
          <Link
            href="/contact/"
            className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "justify-center")}
          >
            Autres moyens de contact
          </Link>
        </div>
      </MarketingPageContainer>
    </MarketingArticleShell>
  );
}
