import Link from 'next/link';

export function CrmPillarEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        Un <strong className="font-medium text-white/90">outil métier</strong> réussi, c’est celui qu’on ouvre sans
        râler. Je <strong className="font-medium text-white/90">conçois</strong> les écrans avec vous, puis je{' '}
        <strong className="font-medium text-white/90">développe</strong> une version stable — pas une démo qui casse au
        premier vrai dossier.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Exemple : une petite équipe commerciale qui passait 2 h par jour à recopier des devis signés depuis le mail vers
        un tableur : une intégration simple peut rendre ce temps à la vente.{' '}
        <Link href="/crm-outils-metiers/integration-crm" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Intégration CRM
        </Link>
        , puis{' '}
        <Link href="/crm-outils-metiers/automatisation" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          automatisations
        </Link>{' '}
        quand les flux sont clairs.
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
