import Link from 'next/link';

export function MaintenanceEcommerceEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70">
        La <strong className="font-medium text-white/90">maintenance d&apos;un site e-commerce</strong>, c&apos;est
        moins l&apos;éclat d&apos;une fiche &quot;qui tourne en dev&quot; qu&apos;une obligation de
        <strong className="text-white/90"> dispo et de confiance légale</strong> : 3DS, devis, transporteur, taux, TVA,
        conformité, panier, stock. Côté
        <strong className="text-white/85"> WooCommerce </strong>ou
        <strong className="text-white/85"> boutique Shopify</strong>
        {', '}
        je cale, je relis le patch, j&apos;écris, je prends l&apos;escalade — la ligne tient, sans bruit inutile. Si vous avez bâti la boutique avec
        <Link href="/sites-internet/site-ecommerce" className="text-white/75 underline-offset-4 hover:underline">
          {' '}
          la page e-commerce du site
        </Link>
        {', '}
        c&apos;est d&apos;autant plus cohérent côté tête et cœur.
      </p>
      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Mots qu&apos;on cherche, ton que j&apos;assume
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        <strong className="text-white/85">Maintenance WooCommerce</strong> ou{' '}
        <strong className="text-white/85">exploitation boutique</strong> : c&apos;est moins beau
        qu&apos;un
        lancement, plus rentable. Les pics — soldes, Black Friday, spot TV — je n&apos;improviserai jamais
        17 h pile : quand c&apos;est déjà écrit, l&apos;équipe a le droit de s&apos;énerver ailleurs. Côté
        <Link href="/maintenance" className="text-white/75 underline-offset-4 hover:underline"> maintenance web </Link>globale, la page
        père tient
        l&apos;ensemble, les pages filles,
        c&apos;est
        pédagogie &quot;où ça coûte&quot;.
      </p>
      <blockquote className="si-editorial-pullquote si-serif-display my-10 border-l-4 border-white/30 py-1 pl-6 text-lg leading-snug text-white/85 italic md:text-xl">
        « Le chiffre d’affaires ne s’invente pas en prod : s’il casse, vous le voyez avant Google. »
      </blockquote>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Détour utile côté
        <Link href="/seo/seo-ecommerce" className="text-white/75 underline-offset-4 hover:underline"> SEO e-commerce</Link> si le référencement entre en jeu, pas
        seulement la fiche. Et si toute l&apos;appl&apos; vit derrière, je peux
        cadrer une <Link href="/maintenance/tma" className="text-white/75 underline-offset-4 hover:underline">TMA</Link> — même
        exigence d&apos;écrit, pas
        d&apos;offre cachée.
      </p>
    </>
  );
}
