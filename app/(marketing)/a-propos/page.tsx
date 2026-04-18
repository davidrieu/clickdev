import type { Metadata } from "next";
import Link from "next/link";
import { SectionAurora } from "@/components/effects/section-aurora";
import { buttonVariants } from "@/components/ui/button";
import { contactLinks } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "David Rieu — développeur freelance e-commerce, marketplaces et outils métiers. Parcours, méthode et liens utiles.",
};

export default function AProposPage() {
  return (
    <article className="relative overflow-hidden border-b border-line/80">
      <SectionAurora variant="soft" />
      <div className="relative z-[1] mx-auto max-w-[720px] px-4 py-20 md:px-8 md:py-28 lg:py-[120px]">
        <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-ink-muted">
          À propos
        </p>
        <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3rem)] font-medium leading-tight tracking-tight text-ink">
          David Rieu — Clickdev
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-dim">
          Freelance depuis une décennie, je livre des sites, des apps et des outils
          internes pour des marques qui jouent la carte de la performance — pas des
          slides.
        </p>

        <section className="mt-14 border-t border-line pt-12">
          <h2 className="font-serif text-2xl font-medium text-ink">Méthode</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-dim">
            Cadrage court, décisions traçables, itérations visibles. Je préfère un
            backlog priorisé à un cahier des charges figé pendant six mois.
          </p>
        </section>

        <section className="mt-12 border-t border-line pt-12">
          <h2 className="font-serif text-2xl font-medium text-ink">
            Clients & références
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-dim">
            Accor, Greenweez, Spreadshirt, Made in France, SIF Group, Urbawise, Crack
            It, The French Maisons, Musée Up’, Mayami Production — et 80+ projets
            livrés.
          </p>
        </section>

        <section className="mt-12 border-t border-line pt-12">
          <h2 className="font-serif text-2xl font-medium text-ink">Liens</h2>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-terracotta">
            <li>
              <a
                href={contactLinks.linkedin}
                className="underline-offset-4 hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={contactLinks.github}
                className="underline-offset-4 hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={contactLinks.malt}
                className="underline-offset-4 hover:underline"
              >
                Malt
              </a>
            </li>
          </ul>
        </section>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-12 sm:flex-row">
          <Link href="/devis/" className={cn(buttonVariants({ size: "cta" }))}>
            Demander un devis →
          </Link>
          <Link
            href="/realisations/"
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "justify-center",
            )}
          >
            Réalisations
          </Link>
        </div>
      </div>
    </article>
  );
}
