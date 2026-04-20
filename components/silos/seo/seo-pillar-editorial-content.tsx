import Link from 'next/link';

export function SeoPillarEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        Le <strong className="font-medium text-white/90">SEO</strong>, ce n’est pas une baguette magique : c’est rendre
        votre site <strong className="font-medium text-white/90">clair, rapide et crédible</strong> pour les gens qui
        cherchent ce que vous proposez déjà dans la vraie vie.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Exemple concret : un électricien qui veut des appels locaux a besoin d’une fiche cohérente et de pages qui
        répondent à “urgence panne” — pas d’un article de blog de 4 000 mots sur l’histoire de l’électricité.{' '}
        <Link href="/seo/seo-local" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          SEO local
        </Link>
        ,{' '}
        <Link href="/seo/audit-seo" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          audit
        </Link>
        , puis technique si le site freine.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Je <strong className="font-medium text-white/90">développe</strong> aussi les correctifs (Next.js, WordPress,
        Shopify…) : le SEO et le code ne sont pas dans deux mondes séparés chez moi.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        <Link href="/sites-internet" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Sites internet
        </Link>
        {' · '}
        <Link href="/ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          IA
        </Link>
        .
      </p>
    </>
  );
}
