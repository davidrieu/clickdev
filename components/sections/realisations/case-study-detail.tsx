import Image from "next/image";
import { MarketingHeroStage } from "@/components/marketing/marketing-hero-stage";
import { BlockContent } from "@/components/portable/block-content";
import { MarketingArticleShell } from "@/components/templates/marketing-article-shell";
import { MarketingDualCta } from "@/components/templates/marketing-dual-cta";
import { MarketingBackLink, MarketingSectionTitle } from "@/components/templates/marketing-editorial";
import { MarketingPageContainer } from "@/components/templates/marketing-page-container";
import type { SanityCaseStudyDetail } from "@/types/sanity-case-study";

const CATEGORY_LABEL: Record<string, string> = {
  website: "Site web",
  ecommerce: "E-commerce",
  marketplace: "Marketplace",
  mobile: "App mobile",
  crm: "CRM",
  tool: "Outil métier",
};

type CaseStudyDetailProps = {
  study: SanityCaseStudyDetail;
};

export function CaseStudyDetail({ study }: CaseStudyDetailProps) {
  const categoryLabel = study.category ? (CATEGORY_LABEL[study.category] ?? study.category) : null;
  const eyebrowParts = [
    study.client ?? "Étude de cas",
    study.year != null ? String(study.year) : null,
    categoryLabel,
  ].filter(Boolean);

  return (
    <MarketingArticleShell aurora="soft">
      <MarketingPageContainer width="article">
        <MarketingHeroStage
          variant="child"
          compact
          eyebrow={eyebrowParts.join(" · ")}
          title={study.title ?? "Étude de cas"}
          topSlot={<MarketingBackLink href="/realisations/">← Réalisations</MarketingBackLink>}
          lead={
            <>
              {study.tagline ? (
                <p className="text-xl leading-relaxed text-ink-dim md:text-2xl">{study.tagline}</p>
              ) : null}
              {study.featuredMetric ? (
                <p className="mt-4 font-serif text-2xl text-terracotta md:text-3xl">{study.featuredMetric}</p>
              ) : null}
            </>
          }
        />

        <div className="mt-8 flex flex-wrap gap-3 text-sm text-ink-dim">
          {study.role ? <span>Rôle : {study.role}</span> : null}
          {study.duration ? <span>Durée : {study.duration}</span> : null}
          {study.liveUrl ? (
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta underline-offset-4 hover:underline"
            >
              Site en ligne
            </a>
          ) : null}
        </div>

        {study.technologies && study.technologies.length > 0 ? (
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
            {study.technologies.map((t) => (
              <li key={t}>
                <span className="inline-block rounded-full border border-line bg-bg-3 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-dim">
                  {t}
                </span>
              </li>
            ))}
          </ul>
        ) : null}

        {study.heroImage ? (
          <div className="relative mt-12 aspect-[21/9] overflow-hidden rounded-lg border border-line bg-bg-3">
            <Image
              src={study.heroImage}
              alt={study.title ?? ""}
              fill
              className="object-cover"
              sizes="(max-width: 960px) 100vw, 960px"
              priority
            />
          </div>
        ) : null}

        {study.metrics && study.metrics.length > 0 ? (
          <dl className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {study.metrics.map((m, i) => (
              <div key={`${m.label}-${i}`} className="border-t border-line pt-4">
                <dt className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                  {m.label}
                </dt>
                <dd className="mt-1 font-serif text-2xl text-ink">{m.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        {study.context ? (
          <section className="mt-16 border-t border-line pt-12">
            <MarketingSectionTitle>Contexte & enjeux</MarketingSectionTitle>
            <BlockContent value={study.context} />
          </section>
        ) : null}

        {study.challenges && study.challenges.length > 0 ? (
          <section className="mt-16 border-t border-line pt-12">
            <MarketingSectionTitle>Défis</MarketingSectionTitle>
            <ul className="mt-6 space-y-6">
              {study.challenges.map((c, i) => (
                <li key={`${c.title}-${i}`}>
                  <h3 className="font-serif text-lg text-ink">{c.title}</h3>
                  {c.description ? (
                    <p className="mt-2 text-ink-dim whitespace-pre-line">{c.description}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {study.solution ? (
          <section className="mt-16 border-t border-line pt-12">
            <MarketingSectionTitle>Solution</MarketingSectionTitle>
            <BlockContent value={study.solution} />
          </section>
        ) : null}

        {study.gallery && study.gallery.some((g) => g.url) ? (
          <section className="mt-16 border-t border-line pt-12">
            <MarketingSectionTitle>Galerie</MarketingSectionTitle>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {study.gallery.map((g, i) =>
                g.url ? (
                  <li key={`${g.url}-${i}`} className="overflow-hidden rounded-lg border border-line">
                    <div className="relative aspect-video bg-bg-3">
                      <Image
                        src={g.url}
                        alt={g.caption ?? ""}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    {g.caption ? (
                      <p className="p-3 text-xs text-ink-muted">{g.caption}</p>
                    ) : null}
                  </li>
                ) : null,
              )}
            </ul>
          </section>
        ) : null}

        {study.results ? (
          <section className="mt-16 border-t border-line pt-12">
            <MarketingSectionTitle>Résultats</MarketingSectionTitle>
            <BlockContent value={study.results} />
          </section>
        ) : null}

        <MarketingDualCta
          primary={{ href: "/devis/", label: "Projet similaire →" }}
          secondary={{ href: "/realisations/", label: "Autres réalisations" }}
        />
      </MarketingPageContainer>
    </MarketingArticleShell>
  );
}
