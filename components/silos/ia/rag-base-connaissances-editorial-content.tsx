import Link from 'next/link';

export function RagBaseConnaissancesEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        Le <strong className="font-medium text-white/90">RAG</strong> vit ou meurt avec le{' '}
        <strong className="font-medium text-white/90">chunking</strong> et la fraîcheur des documents. Un mauvais
        découpage mélange deux procédures ; un index stale répond avec conviction sur une politique obsolète — pire
        qu’une erreur 404.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Pour un assistant conversationnel :{' '}
        <Link href="/ia/chatbot-ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          chatbot IA
        </Link>
        . Pour brancher au produit :{' '}
        <Link href="/ia/integration-ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          intégration IA
        </Link>
        .
      </p>
      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        ACL et retrieval : le même mot “search” ne doit pas exposer tout le monde à tout
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Le filtrage par rôle au moment de la requête vectorielle évite les fuites “accidentelles” via le prompt.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        <Link href="/expertises/openai" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Expertise OpenAI
        </Link>
        {' · '}
        <Link href="/ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Silo IA
        </Link>
        .
      </p>
    </>
  );
}
