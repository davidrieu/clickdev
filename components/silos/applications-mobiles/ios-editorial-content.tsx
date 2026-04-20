import Link from 'next/link';

export function IosEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        Le <strong className="font-medium text-white/90">natif iOS</strong> reste pertinent dès que vous voulez le
        comportement système le plus prévisible, les dernières APIs Apple sans friction, et une expérience review
        alignée sur les Human Interface Guidelines. Ce n’est pas une question de snobisme technique : c’est un pari sur
        la <strong className="font-medium text-white/90">qualité perçue</strong> et sur la capacité à itérer sans
        contorsionner un framework tiers à chaque release OS.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        L’ensemble{' '}
        <Link
          href="/applications-mobiles"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          applications mobiles
        </Link>{' '}
        regroupe aussi{' '}
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
        selon votre contrainte stores / web.
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        SwiftUI : vitesse de delivery et dette technique
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        SwiftUI accélère la majorité des écrans standards ; la dette apparaît quand on force des cas limites sans plan
        de repli UIKit. Je documente ces zones grises tôt — SDK fournisseur, composant ultra-custom, perf liste — pour
        éviter le refactor douloureux en pleine campagne TestFlight.
      </p>

      <blockquote className="si-editorial-pullquote si-serif-display my-10 border-l-4 border-white/30 py-1 pl-6 text-lg leading-snug text-white/85 italic md:text-xl">
        « La review Apple est un produit à part entière : il faut la traiter comme un jalon, pas comme une surprise. »
      </blockquote>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Accessibilité et confiance utilisateur
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Dynamic Type et VoiceOver sur les parcours critiques ne sont pas réservés aux apps “publiques généralistes” :
        c’est aussi de la <strong className="text-white/85">réduction de friction</strong> pour les pros pressés. Ça se
        cadre avec des critères de livraison mesurables, pas avec du wording creux.
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        iOS seul ou parité Android ?
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Si la parité est dans les trois prochains mois,{' '}
        <Link
          href="/applications-mobiles/react-native"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          React Native
        </Link>{' '}
        peut être plus rationnel. Si Android est incertain ou très différent, un{' '}
        <strong className="text-white/85">iOS natif</strong> propre livre vite — sans bloquer une future seconde équipe
        ou un portage. Pour le web public :{' '}
        <Link href="/sites-internet" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          sites internet
        </Link>
        .
      </p>
      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        TestFlight, analytics, crashs : le quotidien après le “wow” de la démo
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Je configure tôt les outils qui permettent de voir où ça coince : parcours trop long, écran où les gens
        abandonnent, version iOS qui casse un composant. Ce n’est pas du flicage utilisateur : c’est éviter de
        découvrir en production que personne ne valide le panier parce qu’un champ clavier masque le bouton.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        <Link href="/a-propos" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          À propos
        </Link>
        {' · '}
        <Link href="/realisations" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Réalisations
        </Link>
        {' · '}
        <Link href="/blog" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Blog
        </Link>
        {' · '}
        <Link href="/devis" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Devis
        </Link>
        {' · '}
        <Link href="/contact" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Contact
        </Link>
        .
      </p>
    </>
  );
}
