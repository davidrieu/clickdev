import type { Metadata } from "next";
import Link from "next/link";
import { MarketingHeroStage } from "@/components/marketing/marketing-hero-stage";
import { ContextualInternalLinks } from "@/components/seo/contextual-internal-links";
import { MarketingArticleShell } from "@/components/templates/marketing-article-shell";
import { MarketingDualCta } from "@/components/templates/marketing-dual-cta";
import { MarketingBodyParagraph } from "@/components/templates/marketing-editorial";
import { MarketingPageContainer } from "@/components/templates/marketing-page-container";
import { contactContextLinks } from "@/lib/content/marketing-pages-extra";
import { calBookingUrl } from "@/lib/constants/site";
import { contactLinks } from "@/lib/constants/navigation";

export const metadata: Metadata = {
  title: "Contact — David Rieu (Clickdev), freelance web & mobile",
  description:
    "Écrire à bonjour@clickdev.fr, réserver un créneau ou passer par le devis structuré. Liens vers offres SEO, e-commerce, IA et réalisations.",
};

export default function ContactPage() {
  return (
    <MarketingArticleShell>
      <MarketingPageContainer width="reading">
        <MarketingHeroStage
          variant="display"
          eyebrow="Contact"
          title="Parlons de votre projet"
          lead={
            <>
              Pour un besoin projet (e-commerce, marketplace, app, outil métier, audit SEO, intégration IA), le
              formulaire{" "}
              <Link href="/devis/" className="text-primary underline-offset-4 hover:underline">
                Demander un devis
              </Link>{" "}
              reste le canal le plus efficace : périmètre, budget indicatif, stack et calendrier permettent une réponse
              actionnable plutôt qu’un échange vague. Pour une question courte, un partenariat presse, ou un sujet
              nécessitant un NDA avant de partager des accès, l’e-mail direct ou un créneau calendrier fonctionnent
              mieux.
            </>
          }
        />
        <MarketingBodyParagraph>
          Si vous arrivez depuis une page silo (par exemple{" "}
          <Link href="/ia/integration-ia/" className="text-primary underline-offset-4 hover:underline">
            Intégration IA
          </Link>
          ,{" "}
          <Link href="/seo/audit-seo/" className="text-primary underline-offset-4 hover:underline">
            Audit SEO
          </Link>{" "}
          ou{" "}
          <Link href="/sites-internet/marketplace/" className="text-primary underline-offset-4 hover:underline">
            Marketplace
          </Link>
          ), indiquez-le : je contextualise la réponse et je peux renvoyer vers la bonne section du site pour gagner du
          temps.
        </MarketingBodyParagraph>

        <ul className="mt-10 space-y-6 text-base text-ink">
          <li>
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">E-mail</span>
            <br />
            <a href={contactLinks.email} className="text-primary underline-offset-4 hover:underline">
              bonjour@clickdev.fr
            </a>
          </li>
          <li>
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">Calendrier</span>
            <br />
            <a
              href={calBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              Réserver un créneau
            </a>
          </li>
        </ul>

        <ContextualInternalLinks
          className="mt-14 border-t border-line pt-12"
          eyebrow="Pour aller plus loin"
          title="Où aller ensuite sur le site"
          intro="Liens choisis pour qualifier votre besoin sans vous perdre dans le menu — chaque destination prolonge une intention différente."
          links={contactContextLinks}
        />

        <MarketingDualCta
          className="mt-12 md:mt-14 md:pt-12"
          primary={{ href: "/devis/", label: "Demander un devis →" }}
          secondary={{ href: "/a-propos/", label: "À propos" }}
        />
      </MarketingPageContainer>
    </MarketingArticleShell>
  );
}
