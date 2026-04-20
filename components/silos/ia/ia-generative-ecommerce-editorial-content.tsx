import Link from 'next/link';

export function IaGenerativeEcommerceEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        L’<strong className="font-medium text-white/90">IA générative</strong> sur un shop accélère la rédaction — mais
        le risque n’est pas seulement marketing : promesses légales, compatibilités, stocks. La règle d’or : le modèle
        ne devient jamais la <strong className="font-medium text-white/90">source de vérité</strong> pour prix,
        disponibilité ou garanties ; il propose dans un cadre que votre ERP / PIM valide.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Côté SEO :{' '}
        <Link href="/seo/seo-ecommerce" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          SEO e-commerce
        </Link>
        , et{' '}
        <Link href="/sites-internet/site-ecommerce" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          site e-commerce
        </Link>{' '}
        pour le socle technique.
      </p>
      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        A/B sur modules visibles : le seul arbitrage honnête
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Si la conversion baisse, rollback rapide bat des semaines de débat opinion.
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
