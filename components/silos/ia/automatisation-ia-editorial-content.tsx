import Link from 'next/link';

export function AutomatisationIaEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        L’<strong className="font-medium text-white/90">automatisation utile</strong>, c’est souvent une chaîne de
        confiance : niveau de confiance, seuil, passage à un humain, trace courte. Sans ça, on remplace une tâche ennuyeuse
        par une boîte noire qui se trompe plus vite.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Liens utiles :{' '}
        <Link href="/crm-outils-metiers" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          CRM & outils métiers
        </Link>
        ,{' '}
        <Link href="/ia/agents-ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          scénarios multi-étapes
        </Link>
        .
      </p>
      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Tout automatiser : objectif de fin de parcours, pas du premier jour
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        On élargit les règles quand la précision et le coût le permettent — pas parce qu’une présentation PowerPoint
        demandait du « full auto ».
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
