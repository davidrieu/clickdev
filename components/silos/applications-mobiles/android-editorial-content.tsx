import Link from 'next/link';

export function AndroidEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        Android impose une chose que les slides marketing oublient : la{' '}
        <strong className="font-medium text-white/90">variété réelle des devices</strong>. Un écran qui est parfait sur
        un flagship peut être moche ou lent sur un milieu de gamme — et c’est souvent là que vit votre utilisateur
        terrain. D’où les flavors, les builds reproductibles, et une stratégie Play Console qui n’effraie pas votre
        équipe à chaque correctif.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Voir aussi{' '}
        <Link href="/applications-mobiles/ios" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          iOS natif
        </Link>{' '}
        et{' '}
        <Link
          href="/applications-mobiles/react-native"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          React Native
        </Link>{' '}
        pour comparer les approches cross-platform.
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Compose : productivité et transitions progressives
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Jetpack Compose n’est pas “magique” : il demande une discipline d’état et de navigation. Quand une base XML
        existe, je privilégie une <strong className="text-white/85">transition progressive</strong> plutôt qu’un big
        bang qui fige l’équipe six mois.
      </p>

      <blockquote className="si-editorial-pullquote si-serif-display my-10 border-l-4 border-white/30 py-1 pl-6 text-lg leading-snug text-white/85 italic md:text-xl">
        « Le Play Store pardonne moins qu’on ne le croit quand la politique de données est floue. »
      </blockquote>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Data safety : aligner le formulaire et le code
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Le risque classique est le décalage entre ce que déclare le formulaire Play et ce que fait réellement l’app. Je
        préfère une déclaration sobre et vérifiable — et des choix produit qui évitent de collecter “par défaut”.
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Android-first terrain, iOS ensuite ?
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        C’est fréquent en B2B. Dans ce cas, cadrez l’API et les modèles pour ne pas peindre votre futur{' '}
        <Link href="/applications-mobiles/ios" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          iOS
        </Link>{' '}
        dans un coin. Et si le web suffit pour distribuer :{' '}
        <Link href="/applications-mobiles/pwa" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          PWA
        </Link>
        .
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        <Link href="/realisations" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Réalisations
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
