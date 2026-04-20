import Link from 'next/link';

export function SiteSurMesureEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        Le <strong className="font-medium text-white/90">développement site web sur mesure</strong> n’est pas une
        fin en soi : c’est ce qu’on choisit quand le standard devient un frein. Quand chaque contournement WordPress
        ou Shopify coûte plus cher en maintenance qu’une brique propre, on passe en sur mesure. Ce n’est pas
        “plus noble” : c’est plus adapté — à condition d’avoir un périmètre MVP clair et des critères de succès
        mesurables.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Pour comparer avec d’autres typologies du même silo :{' '}
        <Link
          href="/sites-internet/site-wordpress"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          WordPress
        </Link>
        ,{' '}
        <Link
          href="/sites-internet/site-ecommerce"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          e-commerce
        </Link>
        , ou encore la{' '}
        <Link
          href="/sites-internet/marketplace"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          marketplace
        </Link>
        . Le fil conducteur reste le même : un site utile, mesurable, et agréable à faire évoluer.
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Les signes qu’un template ne suffira plus
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Quand vos règles de calcul, vos rôles utilisateurs, ou vos intégrations dépassent ce qu’un thème peut assumer
        sans casser à chaque mise à jour, vous êtes en zone{' '}
        <strong className="text-white/85">site web sur mesure vs template</strong>. Les{' '}
        <strong className="text-white/85">limites WordPress</strong> ne viennent pas de WordPress lui-même : elles
        viennent souvent d’une pile de plugins opaque, d’un thème “multi-usages” trop lourd, et d’un hébergement sous-dimensionné. Le sur mesure replace la complexité là où elle doit vivre : dans du code versionné, testé,
        documenté — pas dans dix cases à cocher magiques.
      </p>

      <blockquote className="si-editorial-pullquote si-serif-display my-10 border-l-4 border-white/30 py-1 pl-6 text-lg leading-snug text-white/85 italic md:text-xl">
        « Si vous passez plus de temps à contourner le CMS qu’à servir vos clients, vous avez déjà répondu à la question
        template vs sur mesure. »
      </blockquote>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        L’investissement sur mesure : quel ROI espérer
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Le <strong className="text-white/85">coût développement sur mesure</strong> est plus visible au départ qu’un
        abonnement empilé. En échange, vous achetez de la pérennité : moins de verrouillage sur un plugin critique, plus
        de contrôle sur la performance et le SEO technique. Le <strong className="text-white/85">ROI site sur mesure</strong>{' '}
        se lit souvent en temps gagné (ops, support), en conversion (parcours plus court), et en risque évité (bugs
        financiers, indisponibilités). Je ne promets pas de chiffres miracles : on définit des indicateurs réalistes
        avec vous.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Côté acquisition, un passage par l’
        <Link href="/seo/audit-seo" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          audit SEO
        </Link>{' '}
        peut aider avant une refonte majeure.
      </p>

      <blockquote className="si-editorial-pullquote si-serif-display my-10 border-l-4 border-white/30 py-1 pl-6 text-lg leading-snug text-white/85 italic md:text-xl">
        « Le ROI commence quand on arrête de payer deux fois la même rustine. »
      </blockquote>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Architecture et choix techniques : mes principes
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Une bonne <strong className="text-white/85">architecture site web</strong> découpe le monolithe imaginaire en
        modules testables : auth, paiement, intégrations fragiles. Les <strong className="text-white/85">choix techniques développement</strong>{' '}
        doivent être explicables à un décideur non dev : pourquoi cette base de données, pourquoi ce cache, pourquoi
        cette file d’événements. La doc n’est pas un luxe : c’est ce qui permet d’embaucher ou de changer de partenaire
        sans tout jeter.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Pour la suite produit (SaaS, outils internes), voir aussi{' '}
        <Link
          href="/sites-internet/intranet-extranet"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          intranet / extranet
        </Link>{' '}
        et le silo{' '}
        <Link href="/crm-outils-metiers" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          CRM & outils métiers
        </Link>
        .
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Le rôle du sur mesure dans votre croissance
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Les entreprises qui accélèrent finissent souvent par migrer vers du sur mesure sur leurs flux critiques : le
        standard aide à démarrer, le sur mesure sécurise la suite. Pour vous projeter sur un cas concret, l’étude de
        cas{' '}
        <Link
          href="/realisations/urbawise"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          Urbawise
        </Link>{' '}
        illustre une approche produit ; l’ensemble des{' '}
        <Link href="/realisations" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          réalisations
        </Link>{' '}
        donne d’autres contextes. La page{' '}
        <Link href="/a-propos" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          À propos
        </Link>{' '}
        résume ma façon de travailler.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Prêt à cadrer ? Le{' '}
        <Link href="/devis" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          devis gratuit
        </Link>{' '}
        reste la meilleure porte d’entrée.
      </p>

      <blockquote className="si-editorial-pullquote si-serif-display my-10 border-l-4 border-white/30 py-1 pl-6 text-lg leading-snug text-white/85 italic md:text-xl">
        « Le sur mesure, ce n’est pas “plus cher” : c’est “plus aligné” — quand l’alignement rapporte. »
      </blockquote>
    </>
  );
}
