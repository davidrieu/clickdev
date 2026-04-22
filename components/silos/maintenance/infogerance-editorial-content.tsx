import Link from 'next/link';

export function InfogeranceEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70">
        <strong className="font-medium text-white/90">L&apos;infogérance</strong>, chez moi, ce n&apos;est pas un
        mot fourre-tout : c&apos;est un <strong className="font-medium text-white/90">cadre écrit</strong> — accès,
        sauvegardes, mises à jour, alertes, astreinte. Vous savez qui tient le serveur, où pointe le domaine, et quelle
        est la dernière restauration testée. Je ne remplace pas votre hébergeur en catimini : je clarifie le rôle, le
        vôtre et le mien.
      </p>
      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Hébergement géré, administration serveur, mots qu&apos;on tape sur Google
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Que l&apos;on cherche <strong className="text-white/85">maintenance serveur</strong>,{' '}
        <strong className="text-white/85">supervision site</strong> ou{' '}
        <strong className="text-white/85">administration Linux</strong>, le besoin se ressemble : moins d&apos;écran
        noir anonyme, plus de procédure. La page
        <Link href="/maintenance" className="text-white/75 underline-offset-4 transition hover:underline">
          {' '}
          maintenance
        </Link>{' '}
        pose l&apos;ensemble. Si l&apos;application prime sur le serveur, on parle plutôt
        <Link href="/maintenance/tma" className="text-white/75 underline-offset-4 transition hover:underline"> TMA
        </Link>
        {'. '}
        Si c&apos;est la boutique qui trébuche, plutôt
        <Link
          href="/maintenance/maintenance-ecommerce"
          className="text-white/75 underline-offset-4 transition hover:underline"
        > maintenance e-commerce
        </Link>
        .
      </p>
      <blockquote className="si-editorial-pullquote si-serif-display my-10 border-l-4 border-white/30 py-1 pl-6 text-lg leading-snug text-white/85 italic md:text-xl">
        « Sans runbook, l&apos;astreinte, c&apos;est du hasard avec un téléphone. »
      </blockquote>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Côté <Link href="/seo/seo-technique" className="text-white/75 underline-offset-4 hover:underline">SEO technique
        </Link>
        {', '}
        un serveur qui tousse en 500, c&apos;est un signal négatif et des leads qui partent : l&apos;infrastructure
        et le front se parlent, je ne les isole pas.
      </p>
    </>
  );
}
