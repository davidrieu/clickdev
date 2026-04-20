import Link from 'next/link';

export function ChatbotIaEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        Le <strong className="font-medium text-white/90">chatbot</strong> est souvent le premier contact utilisateur
        avec votre IA : s’il invente, il coûte plus cher en réputation qu’en tokens. D’où le{' '}
        <strong className="font-medium text-white/90">RAG</strong> quand vous avez une base, et l’
        <strong className="font-medium text-white/90">abstention</strong> explicite quand le corpus ne suffit pas.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Aller plus loin :{' '}
        <Link href="/ia/rag-base-connaissances" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          RAG & base de connaissances
        </Link>
        , ou une{' '}
        <Link href="/ia/integration-ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          intégration produit
        </Link>{' '}
        plus large.
      </p>
      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Handoff humain : un feature, pas une excuse
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Un bouton “parler à un humain” mal branché vaut pire que pas de chatbot : on câble l’escalade avec contexte et
        priorité.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        <Link href="/ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Silo IA
        </Link>
        .
      </p>
    </>
  );
}
