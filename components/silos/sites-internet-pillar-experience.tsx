import Image from 'next/image';
import Link from 'next/link';

import { MarketingAmbientBackdrop } from '@/components/marketing/marketing-ambient-backdrop';
import PageBreadcrumb from '@/components/marketing/page-breadcrumb';
import type { MarketingLongArticle } from '@/lib/content/marketing-article-types';

/** Visuels fictifs (Unsplash) — à remplacer par la médiathèque / shootings. */
const IMG = {
  hero: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&h=1125&q=75',
  process1: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&h=900&q=75',
  process2: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&h=900&q=75',
  process3: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&h=900&q=75',
  process4: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&h=900&q=75',
  gallery: [
    'https://images.unsplash.com/photo-1504639725590-aa384a2e8c8a?auto=format&fit=crop&w=800&h=600&q=70',
    'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&h=600&q=70',
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&h=600&q=70',
    'https://images.unsplash.com/photo-1559027615-cd4628902a4a?auto=format&fit=crop&w=800&h=600&q=70',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&h=600&q=70',
    'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&h=600&q=70',
  ],
} as const;

const PROCESS_STEPS = [
  {
    kicker: 'Cadrage',
    title: 'Clarifier le besoin avant de choisir la stack.',
    body:
      'Atelier court, priorisation par valeur, risques SEO et contraintes éditoriales. On fixe le périmètre MVP et ce qui peut attendre v2 — sans tableau Excel de 40 onglets.',
    image: IMG.process1,
    reverse: false,
  },
  {
    kicker: 'Conception',
    title: 'Parcours utilisateurs, contenu et performance dès le wireframe.',
    body:
      'Architecture d’information, maquettes utiles, stratégie de contenu et objectifs Core Web Vitals. Le design sert la conversion, pas l’inverse.',
    image: IMG.process2,
    reverse: true,
  },
  {
    kicker: 'Build',
    title: 'Next.js, WordPress headless ou Shopify — livré proprement.',
    body:
      'Composants réutilisables, revues, CI, environnements de préprod. Moins de dette technique, plus de sommeil après le go-live.',
    image: IMG.process3,
    reverse: false,
  },
  {
    kicker: 'Mesure',
    title: 'Instrumentation, SEO technique et itérations mesurables.',
    body:
      'Analytics, Search Console, redirections de migration, monitoring. On sait quoi optimiser parce qu’on a défini quoi mesurer.',
    image: IMG.process4,
    reverse: true,
  },
] as const;

const VALUES = [
  {
    title: 'Perf et honnêteté',
    text:
      'Pas de promesses magiques sur le « top 1 Google en 48 h ». On vise des gains mesurables : LCP, CLS, indexation propre, parcours clairs.',
  },
  {
    title: 'Maintenable par des humains',
    text:
      'Le code doit tenir quand ce n’est plus la hype du mois. Choix techno expliqués, documentation minimale utile, transfert possible vers votre équipe.',
  },
  {
    title: 'SEO sans sabotage',
    text:
      'Titres, maillage interne, données structurées utiles, migrations propres. Le technique au service du contenu — pas l’inverse.',
  },
  {
    title: 'Accessibilité pragmatique',
    text:
      'Contrastes, focus clavier, alternatives utiles, animations respectueuses. Bon pour tout le monde — et pour le référencement.',
  },
] as const;

const STATS = [
  { value: '40+', label: 'Sites & produits livrés', hint: 'Vitrine, e-com, outils métiers.' },
  { value: '95+', label: 'Score Lighthouse visé', hint: 'Mobile, hors tiers bloquants.' },
  { value: '8', label: 'Typologies couvertes', hint: 'Du silo vitrine à l’intranet.' },
  { value: '1', label: 'Interlocuteur technique', hint: 'David — de l’audit au déploiement.' },
] as const;

type RelatedPage = { label: string; href: string };

type Props = {
  title: string;
  lead: string;
  article: MarketingLongArticle;
  relatedPages: RelatedPage[];
};

export default function SitesInternetPillarExperience({ title, lead, article, relatedPages }: Props) {
  return (
    <main className="relative">
      <MarketingAmbientBackdrop />

      {/* Hero plein écran visuel (réf. Mad : hero + média) */}
      <section className="relative isolate min-h-[min(88vh,920px)] w-full overflow-hidden">
        <Image
          src={IMG.hero}
          alt=""
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black via-black/88 to-black"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex min-h-[min(88vh,920px)] max-w-6xl flex-col justify-end px-4 pb-20 pt-28 md:px-8 md:pb-28 md:pt-32">
          <p className="font-mono text-[11px] tracking-[0.2em] text-white/50 uppercase">
            Clickdev · freelance
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.05]">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">{lead}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/devis" className="btn rounded-full bg-[#F26A06] px-7 py-3 text-sm font-medium text-white shadow-lg shadow-[#F26A06]/25 transition hover:opacity-95">
              Demander un devis
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/25 bg-white/5 px-7 py-3 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-24 pt-10 md:px-8 md:pt-14">
        <div className="mb-12 border-b border-white/10 pb-10">
          <PageBreadcrumb
            items={[
              { label: 'Accueil', href: '/' },
              { label: title, href: '/sites-internet' },
            ]}
          />
        </div>

        {/* Méthode — bandeaux alternés type Mad “process” */}
        <section className="border-b border-white/10 pb-20 md:pb-28" aria-labelledby="method-heading">
          <header className="mb-14 md:mb-20">
            <h2
              id="method-heading"
              className="max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-[2.75rem] lg:leading-tight"
            >
              Une méthode claire, des jalons visibles
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">
              Inspiré des pages agences modernes : gros titres, blocs rythmés, visuels qui respirent — ici avec des
              visuels de démo en attendant vos assets.
            </p>
          </header>

          <div className="flex flex-col gap-20 md:gap-28">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.kicker}
                className="grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20"
              >
                <div
                  className={`relative aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] md:max-w-none ${step.reverse ? 'md:order-2' : ''}`}
                >
                  <Image
                    src={step.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent"
                    aria-hidden
                  />
                </div>
                <div className={step.reverse ? 'md:order-1' : ''}>
                  <p className="font-mono text-[11px] tracking-[0.25em] text-[#F26A06] uppercase">
                    {step.kicker}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">{step.title}</h3>
                  <p className="mt-5 text-sm leading-relaxed text-white/72 md:text-base">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Valeurs — accordéon type Mad */}
        <section className="border-b border-white/10 py-20 md:py-28" aria-labelledby="values-heading">
          <h2
            id="values-heading"
            className="max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl"
          >
            Comment on travaille ensemble
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-white/60 md:text-base">
            Quatre principes — les détails longs restent dans les sections et la FAQ plus bas.
          </p>
          <div className="mt-12 space-y-3">
            {VALUES.map((v) => (
              <details
                key={v.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-white/15 md:px-6 md:py-5"
              >
                <summary className="cursor-pointer list-none text-lg font-medium text-white [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-3">
                    {v.title}
                    <span className="text-xs font-normal text-white/35 transition group-open:rotate-180">▼</span>
                  </span>
                </summary>
                <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-white/70 md:text-base">
                  {v.text}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-white/10 py-20 md:py-28" aria-labelledby="stats-heading">
          <h2 id="stats-heading" className="sr-only">
            Chiffres indicatifs
          </h2>
          <p className="font-mono text-[11px] tracking-[0.2em] text-white/45 uppercase">Indicateurs de démo</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
              >
                <p className="text-4xl font-semibold tracking-tight text-white md:text-5xl">{s.value}</p>
                <p className="mt-3 text-sm font-medium text-white/90">{s.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-white/50">{s.hint}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Galerie fictive */}
        <section className="py-20 md:py-28" aria-labelledby="gallery-heading">
          <h2
            id="gallery-heading"
            className="max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl"
          >
            Quelques visuels de démo
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-white/60 md:text-base">
            Grille type portfolio — images Unsplash en attendant vos maquettes et photos projet.
          </p>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {IMG.gallery.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]"
              >
                <Image
                  src={src}
                  alt={`Visuel de démonstration ${i + 1}`}
                  fill
                  className="object-cover transition duration-500 hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>

        {/* FAQ depuis le contenu pilier */}
        {article.faq.length > 0 ? (
          <section
            aria-labelledby="faq-heading"
            className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-10"
          >
            <h2 id="faq-heading" className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Questions fréquentes
            </h2>
            <div className="mt-8 space-y-3">
              {article.faq.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-xl border border-white/10 bg-black/20 px-4 py-3 md:px-5"
                >
                  <summary className="cursor-pointer list-none font-medium text-white/95 [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-2">
                      {item.question}
                      <span className="text-xs text-white/40 transition group-open:rotate-180">▼</span>
                    </span>
                  </summary>
                  <p className="mt-3 border-t border-white/10 pt-3 text-sm leading-relaxed text-white/70">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        ) : null}

        {relatedPages.length > 0 ? (
          <section
            aria-labelledby="related-heading"
            className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-10"
          >
            <h2 id="related-heading" className="text-xl font-semibold tracking-tight text-white md:text-2xl">
              Pages du silo
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {relatedPages.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="inline-block rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-sm text-white/85 transition hover:border-white/25 hover:bg-white/[0.08]"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {/* Contenu long : extraits des sections article */}
        <section className="mt-14 space-y-10 md:space-y-12" aria-labelledby="deep-dive-heading">
          <h2 id="deep-dive-heading" className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Pour aller plus loin
          </h2>
          {article.sections.map((section) => (
            <article
              key={section.heading}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-9"
            >
              <h3 className="text-xl font-semibold text-white md:text-2xl">{section.heading}</h3>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/75 md:text-base">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </section>

        <p className="mt-14 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-center text-sm text-white/55">
          <Link href="/devis" className="font-medium text-[#F26A06] underline-offset-4 hover:underline">
            Demander un devis
          </Link>
          {' · '}
          <Link href="/contact" className="font-medium text-white/80 underline-offset-4 hover:underline">
            Contact
          </Link>
        </p>
      </div>
    </main>
  );
}
