import Link from 'next/link';

export function SeoPillarEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        Le <strong className="font-medium text-white/90">SEO</strong>, ce n’est pas une baguette magique : c’est rendre
        votre site <strong className="font-medium text-white/90">clair, rapide et crédible</strong> pour les gens qui
        cherchent ce que vous proposez déjà dans la vraie vie — avec des mots qu’ils utilisent eux-mêmes quand ils sont
        pressés ou stressés.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Exemple concret : un électricien qui veut des appels locaux a besoin d’une fiche Google cohérente avec son site,
        et de pages qui répondent à “urgence panne” ou “mise aux normes tableau électrique” — pas d’un article de blog
        de 4 000 mots sur l’histoire de l’électricité que personne ne lira. On commence souvent par le{' '}
        <Link href="/seo/seo-local" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          référencement local
        </Link>
        , un{' '}
        <Link href="/seo/audit-seo" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          audit
        </Link>{' '}
        pour savoir quoi traiter en premier, puis le{' '}
        <Link href="/seo/seo-technique" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          technique
        </Link>{' '}
        si le site met trop longtemps à s’afficher ou envoie des signaux contradictoires à Google.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Ce qui me tient à cœur, c’est d’éviter le jargon inutile : vous repartez avec une liste d’actions que vous pouvez
        relire avec votre comptable ou votre associé sans googler chaque acronyme. Quand une correction demande du
        code, je la fais ou je la documente pour votre équipe — pas de rapport SEO “décoratif” qui finit au fond d’un
        dossier Drive.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Je <strong className="font-medium text-white/90">développe</strong> aussi les correctifs (Next.js, WordPress,
        Shopify…) : le référencement et le code ne sont pas dans deux mondes séparés chez moi. Une refonte ou une
        boutique mal paramétrée peut détruire des mois de travail sur le contenu ; autant le voir avant le jour J.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Enfin, si votre secteur commence à poser des questions aux assistants (ChatGPT, Perplexity…), regardez aussi la
        page{' '}
        <Link href="/seo/geo-generative-engine-optimization" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          GEO
        </Link>
        : ce n’est pas du SEO “classique”, mais ça s’appuie sur les mêmes fondations — pages honnêtes, faits vérifiables,
        structure lisible.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        <Link href="/sites-internet" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Sites internet
        </Link>
        {' · '}
        <Link href="/ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Intelligence artificielle
        </Link>
        .
      </p>
    </>
  );
}
