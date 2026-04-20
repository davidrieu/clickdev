import Link from 'next/link';

export function AutomatisationIaEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        L’<strong className="font-medium text-white/90">automatisation IA</strong> utile ressemble souvent à une chaîne
        de confiance : score, seuil, file humaine, journal. Sans ça, vous remplacez une tâche ennuyeuse par une boîte
        noire qui fait des erreurs plus vite.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Liens utiles :{' '}
        <Link href="/crm-outils-metiers" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          CRM & outils métiers
        </Link>
        ,{' '}
        <Link href="/ia/agents-ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          agents IA
        </Link>
        .
      </p>
      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        100 % auto : objectif de fin de parcours, pas de jour 1
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        On élargit les seuils quand la précision et le coût marginal le permettent — pas quand le board veut une slide
        “full auto”.
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
