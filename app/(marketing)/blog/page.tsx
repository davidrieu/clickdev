import type { Metadata } from "next";
import Link from "next/link";
import { ContextualInternalLinks } from "@/components/seo/contextual-internal-links";
import { PageFaqAccordion } from "@/components/seo/page-faq-accordion";
import { SectionAurora } from "@/components/effects/section-aurora";
import { buttonVariants } from "@/components/ui/button";
import { blogContextLinks, blogFaq } from "@/lib/content/marketing-pages-extra";
import { faqPageJsonLd } from "@/lib/seo/faq-json-ld";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog — guides techniques, SEO, e-commerce & IA",
  description:
    "Articles Sanity : comparatifs, budgets, perf, SEO et IA. Maillage vers silos Sites, SEO, IA et réalisations — listing dynamique à venir.",
};

export default function BlogIndexPage() {
  const faqLd = faqPageJsonLd(blogFaq);

  return (
    <article className="relative overflow-hidden border-b border-line/80">
      <SectionAurora variant="soft" />
      <div className="relative z-[1] mx-auto max-w-[840px] px-4 py-20 md:px-8 md:py-28 lg:py-[120px]">
        <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-ink-muted">Blog</p>
        <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3rem)] font-medium leading-tight tracking-tight text-ink">
          Articles &amp; notes
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-dim md:text-xl">
          Le blog capte le trafic informationnel amont : comparatifs de stacks, budgets réalistes, checklists de
          refonte, SEO technique, intégrations IA et retours d’expérience terrain. Les contenus sont pensés pour être
          utiles à la lecture humaine et pour le GEO — sections claires, faits vérifiables, liens vers sources
          externes lorsque pertinent, et renvoi vers les{" "}
          <Link href="/sites-internet/" className="text-terracotta underline-offset-4 hover:underline">
            pages silo
          </Link>{" "}
          lorsqu’un article doit se prolonger en offre commerciale.
        </p>
        <p className="mt-4 text-base leading-relaxed text-ink-dim md:text-lg">
          La home affiche déjà un aperçu des derniers posts publiés depuis Sanity lorsque le contenu existe. Ce
          listing évoluera vers pagination, filtres par catégorie et recherche plein texte lorsque le volume
          d’articles augmentera — la structure URL restera propre pour le maillage interne et les sitemaps.
        </p>
        <p className="mt-4 text-base leading-relaxed text-ink-dim md:text-lg">
          Thèmes typiques alignés sur le brief éditorial : WordPress vs Next.js, coût d’une marketplace, Core Web
          Vitals, e-commerce headless, intégration IA e-commerce, RAG expliqué simplement, migrations SEO. Chaque
          article doit pouvoir envoyer le lecteur vers une action mesurable (devis, audit, ou page silo) sans casser
          la confiance.
        </p>

        <ContextualInternalLinks
          className="mt-14 border-t border-line pt-12"
          eyebrow="Maillage interne"
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
            items={blogFaq}
          />
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}>
            ← Retour à l’accueil
          </Link>
          <Link href="/devis/" className={cn(buttonVariants({ size: "cta" }))}>
            Demander un devis
          </Link>
        </div>
      </div>
    </article>
  );
}
