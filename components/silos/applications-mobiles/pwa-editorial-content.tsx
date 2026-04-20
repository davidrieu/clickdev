import Link from 'next/link';

export function PwaEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        Une <strong className="font-medium text-white/90">PWA</strong> n’est pas une étiquette marketing : c’est un
        ensemble de choix techniques — <strong className="font-medium text-white/90">service worker</strong>,{' '}
        <strong className="font-medium text-white/90">manifest</strong>, HTTPS — qui permettent une expérience
        installable et plus résiliente. Le piège classique est le cache “trop agressif” : rapide un jour, incohérent le
        lendemain. D’où le versioning du worker et des stratégies par route, pas un seul bouton magique.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Besoin des stores ? Comparez avec{' '}
        <Link href="/applications-mobiles/ios" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          iOS
        </Link>{' '}
        et{' '}
        <Link
          href="/applications-mobiles/android"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          Android
        </Link>
        . Besoin des deux mondes :{' '}
        <Link
          href="/applications-mobiles/react-native"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          React Native
        </Link>
        .
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        iOS Safari : valider tôt, promettre sobrement
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Les capacités évoluent ; certaines APIs web restent plus strictes sur Safari. Je valide les parcours critiques
        sur iPhone réel — pas seulement sur le simulateur desktop — avant d’engager une promesse “100 % comme une
        app”.
      </p>

      <blockquote className="si-editorial-pullquote si-serif-display my-10 border-l-4 border-white/30 py-1 pl-6 text-lg leading-snug text-white/85 italic md:text-xl">
        « Le offline partiel utile bat le offline total buggé. »
      </blockquote>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        PWA et SEO : éviter les doubles contenus
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Quand la PWA vit sur un sous-domaine ou un chemin dédié, on aligne canonicals, indexation et analytics avec
        votre{' '}
        <Link href="/sites-internet" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          site principal
        </Link>
        . Pour aller plus loin côté recherche :{' '}
        <Link href="/seo" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          SEO
        </Link>
        .
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Passer au store plus tard
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        TWA / Capacitor ou refonte ciblée : si vous anticipez la bascule, on isole la logique métier du shell web pour
        ne pas tout jeter à la première évolution store.
      </p>
      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Hors-ligne partiel, notifications, perf : ce qu’une PWA peut (vraiment) faire aujourd’hui
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Le service worker permet de mettre en cache des écrans critiques pour un réseau faible ; les push web existent
        sur Android plus volontiers que sur iOS — je vous dis franchement ce qui marchera chez vos utilisateurs sans
        vous vendre du “100 % comme une app native”. Souvent la PWA est une étape intelligente avant de financer deux
        stores.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        <Link href="/realisations" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Réalisations
        </Link>
        {' · '}
        <Link href="/blog" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Blog
        </Link>
        {' · '}
        <Link href="/devis?projectType=app" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Devis app
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
