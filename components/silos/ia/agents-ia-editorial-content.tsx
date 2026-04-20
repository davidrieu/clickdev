import Link from 'next/link';

export function AgentsIaEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        Un <strong className="font-medium text-white/90">agent</strong> qui appelle des APIs est un programme
        distribué avec une composante non déterministe : la surface d’erreur explose vite. La discipline, c’est des{' '}
        <strong className="font-medium text-white/90">outils typés</strong>, des plafonds, et des traces lisibles —
        sinon vous déboguez “au feeling” quand un client perd de l’argent un vendredi 18 h.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Parfois un{' '}
        <Link href="/ia/automatisation-ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          pipeline déterministe + LLM sur une étape
        </Link>{' '}
        suffit ; pas besoin d’agent full si le gain ne le paye pas.
      </p>
      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Human-in-the-loop où ça fait mal
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Remboursements, emails externes, suppressions : on verrouille tôt, on assouplit quand les métriques sont vertes.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        <Link href="/ia/integration-ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Intégration IA
        </Link>
        .
      </p>
    </>
  );
}
