import Link from 'next/link';

export function MarketplaceEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        Une <strong className="font-medium text-white/90">marketplace réussie</strong>, ce n&apos;est presque
        jamais un coup de chance : c&apos;est une suite de choix cohérents sur la confiance, l&apos;argent, et la
        modération. Les utilisateurs ne lisent pas votre roadmap ; ils testent si payer est simple, si le vendeur a
        l&apos;air sérieux, et si quelqu&apos;un répond quand ça coince. En tant que{' '}
        <strong className="text-white/85">freelance développement marketplace</strong>, je préfère un MVP modeste mais
        bout-en-bout à une « plateforme ambitieuse » où personne ne peut encore encaisser. Si votre besoin est plutôt
        une boutique classique, la page{' '}
        <Link
          href="/sites-internet/site-ecommerce"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          e-commerce
        </Link>{' '}
        pose un cadre différent — moins de vendeurs, plus de contrôle catalogue.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Le silo{' '}
        <Link href="/sites-internet" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Sites internet
        </Link>{' '}
        regroupe les typologies ; la{' '}
        <Link
          href="/sites-internet/site-mise-en-relation"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          mise en relation
        </Link>{' '}
        reste voisine quand il n&apos;y a pas de catalogue multi-offres. Pour le référencement multi-vendeurs, le SEO
        technique du{' '}
        <Link href="/seo/seo-technique" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          silo SEO
        </Link>{' '}
        reste la base.
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Les marketplaces qui marchent ont toutes 3 points communs
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        D&apos;abord la <strong className="text-white/85">masse critique</strong> : sans offre, pas d&apos;acheteurs ;
        sans acheteurs, pas d&apos;offre. Le produit doit réduire le coût d&apos;entrée des premiers vendeurs (temps,
        friction, clarté des règles). Ensuite la <strong className="text-white/85">friction minimale</strong> sur le
        parcours d&apos;achat : paiement clair, livraison ou prestation comprise, pas d&apos;étapes cachées. Enfin la{' '}
        <strong className="text-white/85">modération</strong> crédible : signalements, file d&apos;attente, décisions
        traçables. Sans ces trois piliers, même la meilleure stack ne sauve pas un{' '}
        <strong className="text-white/85">modèle économique marketplace</strong> mal calé.
      </p>

      <blockquote className="si-editorial-pullquote si-serif-display my-10 border-l-4 border-white/30 py-1 pl-6 text-lg leading-snug text-white/85 italic md:text-xl">
        « Une marketplace sans règles lisibles, c’est un marché noir numérique — passionnant au cinéma, cher en
        production. »
      </blockquote>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Les défis techniques à anticiper dès le départ
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Les <strong className="text-white/85">défis technique marketplace</strong> classiques : identité vendeur,
        anti-fraude, chargebacks, remboursements partiels, indisponibilité d&apos;un vendeur au mauvais moment. Côté
        SEO, le multi-catalogue génère vite des URLs inutiles ou dupliquées : on pose des règles dès le début
        (canonicals, indexation ciblée, pages catégories utiles). Côté scale, un pic de trafic sans file d&apos;attente
        ou rate limits peut faire tomber une API fragile — et toute la plateforme avec. L&apos;
        <strong className="text-white/85">architecture marketplace</strong> doit isoler ce qui est critique (argent,
        identité) du reste.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Pour des intégrations outils métiers ou CRM, le silo{' '}
        <Link
          href="/crm-outils-metiers"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          CRM & outils métiers
        </Link>{' '}
        prolonge souvent la plateforme ; côté ops, la{' '}
        <Link href="/maintenance" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          maintenance
        </Link>{' '}
        évite la dette silencieuse.
      </p>

      <blockquote className="si-editorial-pullquote si-serif-display my-10 border-l-4 border-white/30 py-1 pl-6 text-lg leading-snug text-white/85 italic md:text-xl">
        « Si le flux d’argent n’est pas testé comme du critique, tout le reste est du décor. »
      </blockquote>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Stripe Connect et la gestion des paiements fractionnés
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        <strong className="text-white/85">Stripe Connect marketplace</strong> permet souvent de router l&apos;argent :
        l&apos;acheteur paie, la plateforme prélève sa commission, le vendeur reçoit le solde — avec des délais et des
        comptes (Express, Custom…) selon les pays. Les <strong className="text-white/85">paiements fractionnés</strong>{' '}
        évitent de « passer par votre compte perso » comme intermédiaire permanent, ce qui serait à la fois risqué et
        pénible à suivre. Il faut toutefois cadrer refunds, litiges, et ce qui se passe si un vendeur disparaît au
        milieu d&apos;une commande. Je documente les flux pour que votre équipe comprenne le film, pas seulement le
        tableau de bord.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Pour aller plus loin sur l&apos;IA (matching, modération assistée), le silo{' '}
        <Link href="/ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          IA
        </Link>{' '}
        décrit des intégrations réalistes — sans promesse de « tout automatiser » sans garde-fous humains.
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        De l&apos;idée au MVP : méthode de développement progressif
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        On commence par un périmètre réduit mais complet : vendeur onboardé, offre publiée, commande, paiement,
        commission, support minimal. Ensuite on ajoute finesse : recommandations, programmes partenaires, promos
        complexes. Cette progression tient la route sur 3–4 mois de calendrier réaliste si le cadrage est serré — pas
        si on vise « toutes les features d&apos;Amazon ». Les{' '}
        <Link href="/realisations" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          réalisations
        </Link>{' '}
        donnent des exemples concrets ; la page{' '}
        <Link href="/a-propos" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          À propos
        </Link>{' '}
        explique comment je travaille au quotidien.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Quand vous êtes prêt à cadrer, le{' '}
        <Link href="/devis" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          devis gratuit
        </Link>{' '}
        reste la porte d&apos;entrée la plus simple — avec un retour sous 24 h ouvrées comme d&apos;habitude.
      </p>

      <blockquote className="si-editorial-pullquote si-serif-display my-10 border-l-4 border-white/30 py-1 pl-6 text-lg leading-snug text-white/85 italic md:text-xl">
        « Un MVP marketplace, ce n’est pas “moins de features” : c’est “assez de boucle fermée pour que l’argent tourne”. »
      </blockquote>
    </>
  );
}
