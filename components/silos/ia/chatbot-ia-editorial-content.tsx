import Link from 'next/link';

export function ChatbotIaEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        Le <strong className="font-medium text-white/90">chatbot</strong> est souvent la première impression de votre
        aide “intelligente” : s’il invente, c’est votre marque qui trinque. D’où l’intérêt de{' '}
        <strong className="font-medium text-white/90">s’appuyer sur vos textes</strong> quand vous en avez, et de dire
        clairement <strong className="font-medium text-white/90">« je ne sais pas »</strong> quand l’info n’est pas là.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Pour aller plus loin :{' '}
        <Link href="/ia/rag-base-connaissances" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          assistant sur vos documents
        </Link>
        , ou une{' '}
        <Link href="/ia/integration-ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          intégration plus large dans le site ou l’appli
        </Link>
        .
      </p>
      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Parler à un humain : il faut que ça marche vraiment
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Un bouton « contacter une personne » mal raccordé vaut pire que pas de chatbot : on prévoit le transfert avec le
        contexte et la bonne priorité pour votre équipe.
      </p>
      <blockquote className="si-editorial-pullquote si-serif-display my-10 border-l-4 border-white/30 py-1 pl-6 text-lg leading-snug text-white/85 italic md:text-xl">
        « Un chatbot qui ment une fois efface dix réponses utiles — surtout sur du SAV ou de la santé. »
      </blockquote>
      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Contenu source, mises à jour, responsabilité : le trio sous-estimé
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Qui valide les réponses quand le produit change ? Qui signe quand une phrase touche à la réglementation ? Je
        mets en place des garde-fous simples : sources affichables, version des documents, filet humain sur les sujets
        sensibles. Ça se combine avec du{' '}
        <Link href="/seo/redaction-seo" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          contenu web soigné
        </Link>{' '}
        pour que le chatbot et le site racontent la même chose.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        <Link href="/ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Vue d’ensemble IA
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
        .
      </p>
    </>
  );
}
