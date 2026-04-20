import Link from 'next/link';

export function RagBaseConnaissancesEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        Un <strong className="font-medium text-white/90">assistant sur vos documents</strong> tient surtout à la façon
        dont les fichiers sont découpés et tenus à jour. Un mauvais découpage mélange deux procédures ; une notice
        périmée répondie avec assurance vaut pire qu’une page « introuvable ».
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Pour un <strong className="font-medium text-white/90">chatbot</strong> grand public :{' '}
        <Link href="/ia/chatbot-ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          chatbot & assistant
        </Link>
        . Pour brancher au produit :{' '}
        <Link href="/ia/integration-ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          IA site & appli
        </Link>
        .
      </p>
      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Qui voit quoi : les mêmes règles que dans votre entreprise
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Chaque personne ne doit retrouver que les documents auxquels elle a droit — comme dans vos outils actuels, sans
        contourner les accès « parce que c’est l’IA ».
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
