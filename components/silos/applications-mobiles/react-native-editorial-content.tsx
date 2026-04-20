import Link from 'next/link';

export function ReactNativeEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        <strong className="font-medium text-white/90">React Native</strong> brille quand vous devez livrer{' '}
        <strong className="font-medium text-white/90">les mêmes features</strong> sur deux stores sans doubler chaque
        écran — à condition d’accepter que certains sujets (liste géante, module SDK exotique, animation lourde)
        demanderont une <strong className="font-medium text-white/90">échappatoire native</strong>. Le bon setup
        commence par la navigation, l’état réseau, et une CI qui build vraiment les deux plateformes à chaque merge.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Questions classiques côté silo :{' '}
        <Link href="/applications-mobiles/ios" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          iOS natif
        </Link>
        ,{' '}
        <Link
          href="/applications-mobiles/android"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          Android natif
        </Link>
        , ou{' '}
        <Link href="/applications-mobiles/pwa" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          PWA
        </Link>{' '}
        si le store n’est pas indispensable.
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        TypeScript et limites des listes
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Beaucoup de “lenteurs RN” viennent de renders évitablement nombreux. On traite ça par architecture (memoization
        pertinente, découpage des composants) plutôt que par patch miracle — et on mesure sur un device milieu de gamme.
      </p>

      <blockquote className="si-editorial-pullquote si-serif-display my-10 border-l-4 border-white/30 py-1 pl-6 text-lg leading-snug text-white/85 italic md:text-xl">
        « Cross-platform ne veut pas dire “zéro natif” : ça veut dire “natif au bon endroit”. »
      </blockquote>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Expo : accélérer sans se fermer des portes
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Expo accélère le démarrage et certaines mises à jour. Quand un besoin SDK bloque, on anticipe le chemin config
        plugin / bare — sans casser tout le repo sur un coups de tête vendredi soir.
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Cohérence avec votre stack web
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Si vous avez déjà du{' '}
        <Link href="/expertises/react-native" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          React
        </Link>{' '}
        côté{' '}
        <Link href="/sites-internet" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          web
        </Link>
        , partager types et patterns a du sens — tant qu’on ne mélange pas UI web et mobile dans la même couche sans
        frontière. Pour des parcours purement web performants :{' '}
        <Link href="/sites-internet/landing-page" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          landing page
        </Link>
        .
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        <Link href="/a-propos" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          À propos
        </Link>
        .
      </p>
    </>
  );
}
