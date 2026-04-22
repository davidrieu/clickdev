import Link from 'next/link';

export function TmaEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        La <strong className="font-medium text-white/90">TMA, tierce maintenance applicative</strong>, ce n&apos;est
        pas un SAV qu&apos;on rebaptise : c&apos;est un rythme. Backlog, risques, releases, écart entre le prévu et
        l&apos;exécuté — le tout en français clair, avec un ticket ou un canal que votre équipe utilise déjà. Moi, je
        n&apos;affiche pas de &quot;illimité&quot; : c&apos;est paresseux pour tout le monde.
      </p>
      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        SLA, priorités, et mots vides qu&apos;on bannit
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        On définit P1, P2, l&apos;heure du premier retour, ce qu&apos;on tente seul, quand on appelle. Les recherches du
        type <strong className="text-white/85">TMA informatique</strong>,{' '}
        <strong className="text-white/85">maintenance applicative</strong> ou{' '}
        <strong className="text-white/85">support applicatif</strong> aboutissent souvent à la même exigence : moins
        de flou, plus de traçabilité. Si l&apos;outil s&apos;aligne sur du{' '}
        <Link href="/crm-outils-metiers" className="text-white/75 underline-offset-4 transition hover:underline">
          CRM ou outil métier
        </Link>
        {', '}
        c&apos;est le même soin sur les intégrations, pas de copier-coller façon ESN.
      </p>
      <blockquote className="si-editorial-pullquote si-serif-display my-10 border-l-4 border-white/30 py-1 pl-6 text-lg leading-snug text-white/85 italic md:text-xl">
        « Un backlog, c&apos;est une file d&apos;attente honnête — pas un placard à tickets oubliés. »
      </blockquote>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        La page{' '}
        <Link href="/maintenance" className="text-white/75 underline-offset-4 transition hover:underline">
          maintenance
        </Link>{' '}
        pose l&apos;ensemble. Si le socle serveur est le nœud critique,         on regarde{' '}
        <Link
          href="/maintenance/infogerance"
          className="text-white/75 underline-offset-4 transition hover:underline"
        >
          l&apos;infogérance
        </Link>
        {'. '}
        Si c&apos;est le tunnel d&apos;achat qui crie, la
        <Link
          href="/maintenance/maintenance-ecommerce"
          className="text-white/75 underline-offset-4 transition hover:underline"
        >
          {' '}
          page e-commerce
        </Link>
        . On cadrera le périmètre au devis, pas des heures cachées derrière un joli intitulé.
      </p>
    </>
  );
}
