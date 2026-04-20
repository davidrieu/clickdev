import Link from 'next/link';

/** Bloc éditorial SEO ~900 mots — contenu serveur passé en enfant du shell client. */
export function SiteEcommerceEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        Un <strong className="font-medium text-white/90">site e-commerce sur mesure</strong>, ce n&apos;est pas
        seulement un catalogue de produits : c&apos;est une machine à confiance et à encaissement. Si la page met du
        temps à réagir, si les filtres perdent le fil, ou si le checkout ressemble à un labyrinthe, vos visiteurs
        repartent — souvent vers un concurrent plus fluide. En 2026, la barre est haute : le mobile domine, les attentes
        sur la <strong className="text-white/85">vitesse</strong> et la clarté sont celles des grandes marques, même
        pour une petite structure. Mon rôle est de caler la{' '}
        <strong className="text-white/85">conversion e-commerce</strong> avec une{' '}
        <strong className="text-white/85">UX</strong> honnête et une stack tenable pour vous, pas pour impressionner
        LinkedIn. Pour le volet référencement catalogue, la page{' '}
        <Link
          href="/seo/seo-ecommerce"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          SEO e-commerce
        </Link>{' '}
        complète utilement cette lecture.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Si vous débutez, jetez aussi un œil au{' '}
        <Link
          href="/sites-internet/site-vitrine"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          site vitrine
        </Link>{' '}
        : beaucoup de marques combinent vitrine éditoriale et boutique. Pour des volumes multi-vendeurs, le modèle
        change : voir la page{' '}
        <Link
          href="/sites-internet/marketplace"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          marketplace
        </Link>
        .
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Pourquoi la plupart des e-commerces ne convertissent pas vraiment
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Le problème arrive rarement sur une seule &quot;grosse&quot; erreur. C&apos;est l&apos;empilement : pages
        produit trop lourdes, méga-menu illisible, tunnel d&apos;achat qui ajoute des étapes inutiles, frais de port
        dévoilés trop tard, compte obligatoire avant le paiement… Chaque friction coûte un pourcentage. Côté technique,
        un LCP lent ou du layout qui saute sous le pouce donne la même sensation qu&apos;une caisse qui bloque en
        magasin : on pose le panier. Quand on parle de <strong className="text-white/85">taux de conversion e-commerce</strong>, je
        commence donc par observer le parcours réel — mobile d&apos;abord — puis je mesure. La page pilier{' '}
        <Link href="/sites-internet" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Sites internet
        </Link>{' '}
        rappelle le cadre performance et SEO qui s&apos;applique à toutes les typologies.
      </p>

      <blockquote className="si-editorial-pullquote si-serif-display my-10 border-l-4 border-white/30 py-1 pl-6 text-lg leading-snug text-white/85 italic md:text-xl">
        « La plupart des abandons de panier ne sont pas un mystère : ce sont des frictions visibles si on regarde avec
        des yeux clients. »
      </blockquote>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Shopify, WooCommerce ou sur mesure : comment choisir sans se tromper
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        La question <strong className="text-white/85">Shopify vs WooCommerce</strong> n&apos;a pas de gagnant
        universel. Shopify brille quand vous voulez un standard international, des mises à jour gérées, et peu de
        dette serveur. WooCommerce est pertinent quand WordPress est déjà votre centre de gravité éditorial et que le
        catalogue reste raisonnable. Le <strong className="text-white/85">e-commerce headless</strong> (souvent Next.js
        en vitrine + API catalogue) vaut le coup quand la performance, le SEO très fin, ou des règles métier poussées
        imposent de contrôler chaque couche — au prix d&apos;un peu plus de sophistication côté équipe. Pour la
        maintenance après coup, le volet{' '}
        <Link
          href="/maintenance/maintenance-ecommerce"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          maintenance e-commerce
        </Link>{' '}
        évite les mauvaises surprises.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Un point d&apos;honnêteté : si vous n&apos;avez pas la bande passante interne pour du headless, je ne vous le
        vends pas. Je préfère une boutique simple qui encaisse, qu&apos;une architecture de conférence que personne ne
        saura faire évoluer. Pour en savoir plus sur ma façon de travailler, la page{' '}
        <Link href="/a-propos" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          À propos
        </Link>{' '}
        pose le cadre humain ; les{' '}
        <Link href="/realisations" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          réalisations
        </Link>{' '}
        montrent le terrain.
      </p>

      <blockquote className="si-editorial-pullquote si-serif-display my-10 border-l-4 border-white/30 py-1 pl-6 text-lg leading-snug text-white/85 italic md:text-xl">
        « La bonne stack est celle que votre équipe saura tenir dans six mois — pas celle du thread Twitter du jour. »
      </blockquote>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Les 7 leviers d&apos;un e-commerce qui convertit
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        <strong className="text-white/85">1. Vitesse réelle</strong> (mobile, 4G, pas le Wi-Fi du bureau).{' '}
        <strong className="text-white/85">2. Fiches produit</strong> utiles : bénéfices, preuves, médias légers.{' '}
        <strong className="text-white/85">3. Avis</strong> et signaux de confiance placés sans agresser.{' '}
        <strong className="text-white/85">4. Recherche & filtres</strong> qui renvoient vite des résultats pertinents
        — parfois avec un moteur type Algolia quand le catalogue explose. <strong className="text-white/85">5. Checkout</strong>{' '}
        court, frais clairs, paiement rassurant. <strong className="text-white/85">6. Mobile-first</strong> partout, pas
        seulement sur la home. <strong className="text-white/85">7. SEO catalogue</strong> propre : pagination,
        canonicals, contenus de catégorie qui servent vraiment. C&apos;est l&apos;essentiel de l&apos;
        <strong className="text-white/85">optimisation e-commerce</strong> dont on parle — sans baguette magique.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Côté contenus éditoriaux, le{' '}
        <Link href="/blog" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          blog
        </Link>{' '}
        peut tirer des catégories stratégiques ; côté acquisition, une{' '}
        <Link
          href="/sites-internet/landing-page"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          landing page
        </Link>{' '}
        bien ciblée peut compléter une campagne. Et si demain vous avez besoin d&apos;IA sur le catalogue, le silo{' '}
        <Link href="/ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          IA
        </Link>{' '}
        décrit les intégrations possibles sans bullshit.
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        De la première vente à la scalabilité internationale
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        On commence par un périmètre qui vend : checkout fiable, flux produit sains, outils admin clairs. Ensuite
        seulement on empile promotions complexes, bundles B2B, multi-langues ou connecteurs ERP — parce qu&apos;une
        boutique qui tombe en panne le jour J coûte plus cher qu&apos;une feature reportée. J&apos;ai accompagné des
        contextes exigeants ; par exemple, l&apos;étude de cas{' '}
        <Link
          href="/realisations/greenweez"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          Greenweez
        </Link>{' '}
        illustre une refonte e-commerce orientée conversion et performance. Le principe reste le même pour une PME :
        prioriser ce qui rapporte, instrumenter, puis itérer.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Si votre besoin dépasse la boutique classique — portails partenaires, espaces connectés — regardez aussi{' '}
        <Link
          href="/sites-internet/intranet-extranet"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          intranet / extranet
        </Link>
        . Quand vous êtes prêt à cadrer, le plus simple reste le{' '}
        <Link href="/devis" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          devis gratuit
        </Link>
        .
      </p>

      <blockquote className="si-editorial-pullquote si-serif-display my-10 border-l-4 border-white/30 py-1 pl-6 text-lg leading-snug text-white/85 italic md:text-xl">
        « Scalabilité ne veut pas dire “tout faire au jour 1”. Ça veut dire ne pas se fermer les portes qu’on regrettera
        à 10 000 commandes. »
      </blockquote>
    </>
  );
}
