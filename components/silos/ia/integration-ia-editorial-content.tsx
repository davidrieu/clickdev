import Link from 'next/link';

export function IntegrationIaEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        Brancher un <strong className="font-medium text-white/90">service d’IA</strong> sur votre site ou votre
        application, c’est aussi accepter des limites de débit, parfois des coupures, et des évolutions côté fournisseur.
        La partie visible pour vos utilisateurs compte ; tout aussi importante est la partie{' '}
        <strong className="font-medium text-white/90">côté serveur</strong> : mots de passe au bon endroit, délais
        raisonnables, et ce qui reste privé.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Suite logique :{' '}
        <Link href="/ia/agents-ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          scénarios sur plusieurs étapes
        </Link>{' '}
        si vous enchaînez des actions, ou{' '}
        <Link href="/ia/rag-base-connaissances" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          assistant sur vos documents
        </Link>{' '}
        si la vérité est dans vos fichiers internes.
      </p>
      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Mesurer avec des exemples réels
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Quelques cas concrets tirés de votre activité, le coût par demande traitée, et le taux de situations où une
        personne doit reprendre : trois repères valent mieux qu’une démo soignée sur cinq phrases choisies à la main.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        <Link href="/ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Vue d’ensemble IA
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
