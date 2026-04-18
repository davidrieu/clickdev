import type { Metadata } from "next";
import Link from "next/link";
import { ContextualInternalLinks } from "@/components/seo/contextual-internal-links";
import { PageFaqAccordion } from "@/components/seo/page-faq-accordion";
import { SectionAurora } from "@/components/effects/section-aurora";
import { buttonVariants } from "@/components/ui/button";
import { aProposContextLinks, aProposFaq } from "@/lib/content/marketing-pages-extra";
import { contactLinks } from "@/lib/constants/navigation";
import { faqPageJsonLd } from "@/lib/seo/faq-json-ld";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "À propos — David Rieu, développeur freelance e-commerce & plateformes",
  description:
    "Parcours, méthode et références : 10 ans de freelance, 80+ projets — sites, apps, IA, SEO & CRM. E-E-A-T, liens utiles et FAQ.",
};

export default function AProposPage() {
  const faqLd = faqPageJsonLd(aProposFaq);

  return (
    <article className="relative overflow-hidden border-b border-line/80">
      <SectionAurora variant="soft" />
      <div className="relative z-[1] mx-auto max-w-[840px] px-4 py-20 md:px-8 md:py-28 lg:py-[120px]">
        <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-ink-muted">
          À propos
        </p>
        <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3rem)] font-medium leading-tight tracking-tight text-ink">
          David Rieu — Clickdev
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-dim md:text-xl">
          Freelance depuis une décennie, je conçois et livre des sites, des applications mobiles et des outils
          métiers pour des marques qui jouent la carte de la performance — e-commerce, marketplaces, plateformes de
          mise en relation, configurateurs, CRM sur mesure et intégrations IA en production. Mon approche est
          volontairement peu « agence slide » : cadrage court, décisions traçables, itérations visibles sur des
          environnements de staging, et une obsession pour ce qui se mesure (conversion, Core Web Vitals, coûts
          token, indexation, taux d’erreur checkout).
        </p>

        <section className="mt-14 border-t border-line pt-12">
          <h2 className="font-serif text-2xl font-medium text-ink md:text-3xl">Parcours &amp; positionnement</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-dim md:text-lg">
            J’interviens le plus souvent au croisement produit / technique : traduire un objectif business en backlog
            priorisé, choisir une stack réaliste (Next.js, WordPress, Shopify, WooCommerce, Node.js, Laravel,
            React Native…), et sécuriser la mise en production (SEO technique, données structurées, perf, logs,
            sauvegardes). Je ne vends pas de « transformation digitale » floue : je livre des incréments utiles —
            parfois une refonte complète, parfois une industrialisation de ce qui existait déjà mais gémit sous la
            dette.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-dim md:text-lg">
            Le positionnement SEO &amp; GEO du site n’est pas anecdotique : appliquer sur mon propre domaine ce que je
            prêche (maillage interne, FAQ, contenus factuels, TL;DR) sert de preuve — utile quand vous évaluez un
            partenaire sur le silo{" "}
            <Link href="/seo/" className="text-terracotta underline-offset-4 hover:underline">
              SEO &amp; GEO
            </Link>
            .
          </p>
        </section>

        <section className="mt-14 border-t border-line pt-12">
          <h2 className="font-serif text-2xl font-medium text-ink md:text-3xl">Méthode de travail</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-dim md:text-lg">
            Atelier de cadrage limité dans le temps, arbitrages écrits, revues régulières. Je préfère un backlog
            priorisé à un cahier des charges figé six mois : le web change, vos concurrents aussi — la méthode doit
            absorber l’incertitude sans transformer chaque ajustement en crise budgétaire. Les parties prenantes
            marketing, design et ops sont intégrées tôt lorsqu’elles impactent SEO, contenus ou données produit.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-dim md:text-lg">
            Après mise en ligne, je propose maintenance/TMA lorsque la vélocité et le sommeil reposent sur la même
            chose : mises à jour prévisibles, monitoring minimal et feuille d’évolutions partagée — voir{" "}
            <Link href="/maintenance/" className="text-terracotta underline-offset-4 hover:underline">
              Maintenance &amp; TMA
            </Link>
            .
          </p>
        </section>

        <section className="mt-14 border-t border-line pt-12">
          <h2 className="font-serif text-2xl font-medium text-ink md:text-3xl">Clients &amp; références</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-dim md:text-lg">
            Accor, Greenweez, Spreadshirt, Made in France, SIF Group, Urbawise, Crack It, The French Maisons, Musée
            Up’, Mayami Production — et 80+ projets livrés. Les études de cas publiées sous{" "}
            <Link href="/realisations/" className="text-terracotta underline-offset-4 hover:underline">
              Réalisations
            </Link>{" "}
            détaillent contexte, solution et résultats lorsque le contenu Sanity est disponible : elles complètent
            cette page pour l’E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).
          </p>
        </section>

        <section className="mt-14 border-t border-line pt-12">
          <h2 className="font-serif text-2xl font-medium text-ink md:text-3xl">Liens externes vérifiables</h2>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-terracotta md:text-base">
            <li>
              <a href={contactLinks.linkedin} className="underline-offset-4 hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={contactLinks.github} className="underline-offset-4 hover:underline">
                GitHub
              </a>
            </li>
            <li>
              <a href={contactLinks.malt} className="underline-offset-4 hover:underline">
                Malt
              </a>
            </li>
          </ul>
        </section>

        <ContextualInternalLinks
          className="mt-16 border-t border-line pt-12 md:mt-20 md:pt-16"
          eyebrow="Maillage interne"
          title="Poursuivre sur les offres et preuves"
          intro="Six liens contextualisés vers les silos et pages les plus demandés — la suite logique après une page À propos orientée décision."
          links={aProposContextLinks}
        />

        <div className="mt-16 border-t border-line pt-12 md:mt-20 md:pt-16">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
          <PageFaqAccordion
            ariaLabelledBy="a-propos-faq"
            headingId="a-propos-faq"
            title="Questions fréquentes"
            subtitle="Format court utile pour lecteurs humains et pour le GEO."
            items={aProposFaq}
          />
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-12 sm:flex-row">
          <Link href="/devis/" className={cn(buttonVariants({ size: "cta" }))}>
            Demander un devis →
          </Link>
          <Link
            href="/realisations/"
            className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "justify-center")}
          >
            Réalisations
          </Link>
        </div>
      </div>
    </article>
  );
}
