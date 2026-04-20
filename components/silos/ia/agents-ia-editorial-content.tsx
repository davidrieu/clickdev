import Link from 'next/link';

export function AgentsIaEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        Un <strong className="font-medium text-white/90">scénario</strong> qui enchaîne plusieurs actions dans vos
        outils, c’est pratique — mais la surface d’erreur augmente vite. La discipline, ce sont des étapes claires, des
        plafonds, et un <strong className="font-medium text-white/90">historique lisible</strong> pour comprendre ce qui
        s’est passé quand un client appelle un vendredi soir.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Parfois un{' '}
        <Link href="/ia/automatisation-ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          flux simple avec une seule étape « intelligente »
        </Link>{' '}
        suffit ; pas besoin d’enchaîner dix actions si le gain ne le justifie pas.
      </p>
      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Validation humaine là où ça fait mal
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Remboursements, messages vers l’extérieur, suppressions : on verrouille tôt, on assouplit quand les retours terrain
        sont rassurants.
      </p>
      <blockquote className="si-editorial-pullquote si-serif-display my-10 border-l-4 border-white/30 py-1 pl-6 text-lg leading-snug text-white/85 italic md:text-xl">
        « Un agent sans plafond, c’est une machine à envoyer des mails de trop — ou pire. »
      </blockquote>
      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Orchestration : outils, API, et humains au bon endroit
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Je découpe en étapes nommées : lecture d’un ticket, proposition de réponse, validation, envoi. Chaque étape a
        un propriétaire et un budget tokens. Quand ça touche au CRM ou aux factures, je relie plutôt à{' '}
        <Link href="/crm-outils-metiers/automatisation" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          l’automatisation métier
        </Link>{' '}
        qu’à une boîte noire magique.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        <Link href="/ia/integration-ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          IA site & appli
        </Link>
        {' · '}
        <Link href="/blog" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Blog
        </Link>
        {' · '}
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
