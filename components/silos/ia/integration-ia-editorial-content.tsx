import Link from 'next/link';

export function IntegrationIaEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        Intégrer un <strong className="font-medium text-white/90">LLM</strong>, c’est accepter une dépendance : quotas,
        latence, changements de modèle, et parfois des indisponibilités. La partie “sexy” est le prompt ; la partie qui
        paie en prod est le <strong className="font-medium text-white/90">contrat d’interface</strong> avec votre
        backend : timeouts, retries, idempotence, et surtout la séparation stricte entre ce qui est public et ce qui reste
        serveur.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Suite logique :{' '}
        <Link href="/ia/agents-ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          agents
        </Link>{' '}
        si vous enchaînez des actions, ou{' '}
        <Link href="/ia/rag-base-connaissances" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          RAG
        </Link>{' '}
        si la vérité vit dans vos documents.
      </p>
      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        POC : la mesure qui tient debout
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Jeux de cas réels, coût marginal par tâche, taux d’échec : trois nombres valent mieux qu’une démo sur cinq
        prompts cherry-picked.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        <Link href="/ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Silo IA
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
