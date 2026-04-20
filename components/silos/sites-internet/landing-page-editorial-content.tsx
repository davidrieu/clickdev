import Link from 'next/link';

export function LandingPageEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        Une <strong className="font-medium text-white/90">landing page</strong> qui performe, ce n’est pas une page
        « plus courte » du site : c’est un produit avec <strong className="font-medium text-white/90">un objectif</strong>,{' '}
        <strong className="font-medium text-white/90">une audience</strong>, et souvent{' '}
        <strong className="font-medium text-white/90">un budget média</strong> derrière. Si la page traîne à charger,
        si le message se dilue en cinq offres, si le formulaire casse le clavier mobile, vous payez deux fois : en CPC
        et en opportunités perdues.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Retrouvez le contexte plus large sur les{' '}
        <Link href="/sites-internet" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          sites internet
        </Link>{' '}
        ; pour une présence institutionnelle complète, une{' '}
        <Link
          href="/sites-internet/site-vitrine"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          vitrine
        </Link>{' '}
        reste le bon socle — la LP sert les campagnes et les lancements ponctuels.
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Une LP, un message : la discipline du haut de page
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Le hero doit répondre en quelques secondes : pour qui, quelle promesse, quelle preuve, quel geste (lead,
        démo, appel). Chaque bloc en dessous doit{' '}
        <strong className="text-white/85">réduire une friction</strong> ou{' '}
        <strong className="text-white/85">renforcer la confiance</strong> — pas « remplir » la page. Les fuites de
        navigation (menus encyclopédiques, liens vers tout le catalogue) tuent la conversion payante.
      </p>

      <blockquote className="si-editorial-pullquote si-serif-display my-10 border-l-4 border-white/30 py-1 pl-6 text-lg leading-snug text-white/85 italic md:text-xl">
        « Si vous hésitez entre deux objectifs, vous en avez zéro — et votre LP le reflète. »
      </blockquote>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Performance, Quality Score, et expérience mobile
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Google Ads et les réseaux sociaux récompensent les pages rapides et claires. Un{' '}
        <strong className="text-white/85">LCP</strong> maîtrisé, des images dimensionnées, du JS utile plutôt que
        décoratif : ce n’est pas du luxe technique, c’est du levier sur le coût d’acquisition. Côté mobile, champs
        courts, CTA visible, pas de pop-in agressive au premier scroll : les détails font la différence sur le terrain.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Pour le référencement organique d’un site complet :{' '}
        <Link href="/seo/audit-seo" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          audit SEO
        </Link>
        .
      </p>

      <blockquote className="si-editorial-pullquote si-serif-display my-10 border-l-4 border-white/30 py-1 pl-6 text-lg leading-snug text-white/85 italic md:text-xl">
        « La mesure propre vaut mieux que dix pixels de plus au hero. »
      </blockquote>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Tracking, consentement, et itérations A/B
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        GA4, Meta Pixel, événements formulaire : le tout sans double comptage et en respectant le{' '}
        <strong className="text-white/85">consentement</strong>. Je prépare la technique pour vos variantes ; la
        stratégie d’expérimentation reste marketing — mais une LP mal instrumentée ne prouvera jamais grand-chose.
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Quand passer d’une LP à un parcours e-commerce ou sur mesure
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Si votre offre se complexifie (panier, compte client, logique tarifaire), il est temps d’aligner avec un{' '}
        <Link
          href="/sites-internet/site-ecommerce"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          site e-commerce
        </Link>{' '}
        ou un{' '}
        <Link
          href="/sites-internet/site-sur-mesure"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          développement sur mesure
        </Link>
        . La LP reste l’outil d’entrée ; le reste du produit grandit autour.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        <Link href="/a-propos" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          À propos
        </Link>
        {' · '}
        <Link href="/realisations" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Réalisations
        </Link>
        .
      </p>
    </>
  );
}
