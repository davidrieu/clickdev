import Link from 'next/link';

export function ApplicationsMobilesPillarEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        Une <strong className="font-medium text-white/90">application mobile</strong> n’est pas un site réduit : ce
        sont des attentes différentes (latence, interruptions, réseau instable), des règles stores, et souvent des
        données plus sensibles. Le bon livrable commence par des{' '}
        <strong className="font-medium text-white/90">parcours courts</strong> et une{' '}
        <strong className="font-medium text-white/90">observabilité</strong> réelle — pas par une liste de features
        interminable.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Les pages{' '}
        <Link href="/applications-mobiles/ios" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          iOS
        </Link>
        ,{' '}
        <Link
          href="/applications-mobiles/android"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          Android
        </Link>
        ,{' '}
        <Link
          href="/applications-mobiles/react-native"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          React Native
        </Link>{' '}
        et{' '}
        <Link href="/applications-mobiles/pwa" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          PWA
        </Link>{' '}
        détaillent chaque approche avec budgets indicatifs et FAQ ciblées.
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Stores : un produit avec ses propres contraintes
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Apple et Google demandent cohérence entre permissions, textes légaux et comportement réel. Anticiper ça dans le
        backlog coûte moins cher que des semaines de ping-pong review — surtout quand votre métier touche médias,
        paiement ou santé.
      </p>

      <blockquote className="si-editorial-pullquote si-serif-display my-10 border-l-4 border-white/30 py-1 pl-6 text-lg leading-snug text-white/85 italic md:text-xl">
        « Une app “terminée” sans plan de release, c’est une app qui n’existe pas pour vos utilisateurs. »
      </blockquote>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Mobile et web : complémentaires
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Beaucoup de parcours commencent sur le web et se concluent dans l’app — ou l’inverse. Si votre enjeu principal
        reste l’acquisition via Google, la partie{' '}
        <Link href="/sites-internet" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          sites internet
        </Link>{' '}
        reste centrale ; le mobile accélère la fidélisation et les usages répétés.
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Après le lancement : la vraie vie
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        OS qui évoluent, SDK qui changent, dépendances à mettre à jour : prévoir une capacité de maintenance modeste
        évite l’app “figée” qui devient incompatible silencieusement. Je peux accompagner en forfait ou au ticket.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        <Link href="/realisations" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Réalisations
        </Link>
        {' · '}
        <Link href="/a-propos" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          À propos
        </Link>
        .
      </p>
    </>
  );
}
