import type { Metadata } from "next";
import Link from "next/link";
import { ContextualInternalLinks } from "@/components/seo/contextual-internal-links";
import { SectionAurora } from "@/components/effects/section-aurora";
import { buttonVariants } from "@/components/ui/button";
import { contactContextLinks } from "@/lib/content/marketing-pages-extra";
import { calBookingUrl } from "@/lib/constants/site";
import { contactLinks } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact — David Rieu (Clickdev), freelance web & mobile",
  description:
    "Écrire à bonjour@clickdev.fr, réserver un créneau ou passer par le devis structuré. Maillage vers offres SEO, e-commerce, IA et réalisations.",
};

export default function ContactPage() {
  return (
    <article className="relative overflow-hidden border-b border-line/80">
      <SectionAurora variant="soft" />
      <div className="relative z-[1] mx-auto max-w-[720px] px-4 py-20 md:px-8 md:py-28 lg:py-[120px]">
        <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-ink-muted">
          Contact
        </p>
        <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3rem)] font-medium leading-tight tracking-tight text-ink">
          Parlons de votre projet
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-dim md:text-xl">
          Pour un besoin projet (e-commerce, marketplace, app, outil métier, audit SEO, intégration IA), le
          formulaire{" "}
          <Link href="/devis/" className="text-terracotta underline-offset-4 hover:underline">
            Demander un devis
          </Link>{" "}
          reste le canal le plus efficace : périmètre, budget indicatif, stack et calendrier permettent une réponse
          actionnable plutôt qu’un échange vague. Pour une question courte, un partenariat presse, ou un sujet
          nécessitant un NDA avant de partager des accès, l’e-mail direct ou un créneau calendrier fonctionnent mieux.
        </p>
        <p className="mt-4 text-base leading-relaxed text-ink-dim md:text-lg">
          Si vous arrivez depuis une page silo (par exemple{" "}
          <Link href="/ia/integration-ia/" className="text-terracotta underline-offset-4 hover:underline">
            Intégration IA
          </Link>
          ,{" "}
          <Link href="/seo/audit-seo/" className="text-terracotta underline-offset-4 hover:underline">
            Audit SEO
          </Link>{" "}
          ou{" "}
          <Link href="/sites-internet/marketplace/" className="text-terracotta underline-offset-4 hover:underline">
            Marketplace
          </Link>
          ), indiquez-le : je contextualise la réponse et je peux renvoyer vers la bonne section du site pour
          gagner du temps.
        </p>

        <ul className="mt-10 space-y-6 text-base text-ink">
          <li>
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">E-mail</span>
            <br />
            <a href={contactLinks.email} className="text-terracotta underline-offset-4 hover:underline">
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
              className="text-terracotta underline-offset-4 hover:underline"
            >
              Réserver un créneau
            </a>
          </li>
        </ul>

        <ContextualInternalLinks
          className="mt-14 border-t border-line pt-12"
          eyebrow="Maillage interne"
          title="Où aller ensuite sur le site"
          intro="Liens choisis pour qualifier votre besoin sans vous perdre dans le menu — chaque destination prolonge une intention différente."
          links={contactContextLinks}
        />

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link href="/devis/" className={cn(buttonVariants({ size: "cta" }))}>
            Demander un devis →
          </Link>
          <Link
            href="/a-propos/"
            className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "justify-center")}
          >
            À propos
          </Link>
        </div>
      </div>
    </article>
  );
}
