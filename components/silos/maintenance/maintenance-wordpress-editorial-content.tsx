import Link from 'next/link';

export function MaintenanceWordpressEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        La <strong className="font-medium text-white/90">maintenance WordPress</strong>, c&apos;est d&apos;abord des
        dépendances qui avancent sans attendre votre agenda : cœur, thème, extensions, hébergeur, PHP, base. Moi, je
        m&apos;aligne sur la criticité, pas sur le &quot;clic mettre à jour partout quand c&apos;est rouge&quot; — c&apos;est
        le meilleur moyen de mélanger fête et 500. Si vous cherchez un{' '}
        <strong className="text-white/85">support WordPress</strong> qui parle clair, vous êtes au bon endroit.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Le <Link href="/sites-internet/site-wordpress" className="text-white/75 underline-offset-4 hover:underline">site WordPress</Link>
        {', '}
        je le conçois, je le reprends, ou seulement je l&apos;entretien — c&apos;est le même exigence de rigueur. Côté
        mots-clés, pensez{' '}
        <strong className="text-white/85">mise à jour WordPress</strong>
        {', '}
        <strong className="text-white/85">sécurité WordPress</strong> ou{' '}
        <strong className="text-white/85">WooCommerce maintenance</strong>
        {', '}
        c&apos;est le même moteur, moins d&apos;ego, plus d&apos;ordre.
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Pourquoi je n&apos;applique jamais les MAJ &quot;en prod direct&quot; sans bâche
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        La preprod, c&apos;est 30 % du coût, 70 % du calme. Si vous n&apos;en avez pas, on en parle franchement — parfois
        je la monte avant la première grosse update, parfois on cale l&apos;heure et l&apos;écart acceptable. Rien
        d&apos;obscur. Côté
        <Link href="/maintenance" className="text-white/75 underline-offset-4 hover:underline">
          {' '}
          maintenance site internet
        </Link>
        {', '}
        c&apos;est l&apos;article du chapitre parent, avec les quatre offres, dont la{' '}
        <Link href="/maintenance/maintenance-ecommerce" className="text-white/75 underline-offset-4 hover:underline">
          e-commerce
        </Link>
        {', '}
        si c&apos;est le tunnel qui paie.
      </p>
      <blockquote className="si-editorial-pullquote si-serif-display my-10 border-l-4 border-white/30 py-1 pl-6 text-lg leading-snug text-white/85 italic md:text-xl">
        « Un plugin, c&apos;est une promesse de quelqu&apos;un d&apos;autre : je ne fais jamais semblant de la connaître
        mieux que l&apos;historique. »
      </blockquote>
      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Lien vers le SEO — sans poudre d&apos;invisibilité
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        L&apos;admin lente, la page qui crashe, l&apos;erreur SQL en silence : c&apos;est moins de crawl, moins
        d&apos;index propre, plus de stress. Avec un œil sur
        <Link href="/seo/seo-technique" className="text-white/75 underline-offset-4 hover:underline">
          {' '}
          le SEO technique
        </Link>
        {', '}
        je n&apos;écris pas 40 pages, je garde l&apos;essentiel. Et si c&apos;est toute l&apos;applic&apos;,
        dites-le : la{' '}
        <Link href="/maintenance/tma" className="text-white/75 underline-offset-4 hover:underline">TMA</Link> couvre
        d&apos;autres angles.
      </p>
    </>
  );
}
