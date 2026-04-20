import Link from 'next/link';

export function IntranetExtranetEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        Un <strong className="font-medium text-white/90">intranet</strong> sert vos salariés : actualités, procédures,
        documents, annuaire. Un <strong className="font-medium text-white/90">extranet</strong> ouvre un périmètre
        contrôlé vers l’extérieur — franchisés, partenaires, fournisseurs. Le piège classique, c’est de tout mélanger
        dans le même rôle « super-admin » : au bout de quelques mois, personne ne sait plus qui voit quoi, et l’audit
        devient un cauchemar.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Le cadre des{' '}
        <Link href="/sites-internet" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          sites internet
        </Link>{' '}
        reste utile pour le positionnement public ; ici on parle d’outils internes. Pour un besoin très métier côté web
        public, voir aussi{' '}
        <Link
          href="/sites-internet/site-sur-mesure"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          développement sur mesure
        </Link>
        .
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Intranet vs extranet : tracer la frontière dès le cadrage
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        La règle simple : même code, même produit parfois, mais des <strong className="text-white/85">jeux de droits</strong>{' '}
        et des <strong className="text-white/85">flux de données</strong> différents. L’intranet vit sur l’identité
        interne (SSO entreprise, MFA). L’extranet impose des comptes partenaires, des invitations, parfois des
        contrats d’accès. En 2026, avec la généralisation du télétravail et des réseaux distribués, cette frontière se
        négocie avec les métiers — pas seulement avec l’IT.
      </p>

      <blockquote className="si-editorial-pullquote si-serif-display my-10 border-l-4 border-white/30 py-1 pl-6 text-lg leading-snug text-white/85 italic md:text-xl">
        « Si vous ne pouvez pas expliquer en une phrase qui a accès à quoi, vous n’êtes pas prêt à livrer. »
      </blockquote>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Suite SaaS, portail modulable, ou 100 % sur mesure ?
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Les suites collaboratives couvrent beaucoup de cas — mais rarement vos{' '}
        <strong className="text-white/85">workflows métier</strong> jusqu’au bout. Un portail modulable accélère le
        démarrage ; le sur mesure débloque ce qui n’existe dans aucun catalogue (formulaires terrain, chaînes de
        validation, intégrations ERP capricieuses). Le bon compromis est presque toujours un{' '}
        <strong className="text-white/85">MVP réaliste</strong> avec une dette technique maîtrisée, pas une usine à gaz
        figée sur trois ans.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Pour industrialiser des flux avec vos outils :{' '}
        <Link
          href="/crm-outils-metiers"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          CRM & outils métiers
        </Link>
        .
      </p>

      <blockquote className="si-editorial-pullquote si-serif-display my-10 border-l-4 border-white/30 py-1 pl-6 text-lg leading-snug text-white/85 italic md:text-xl">
        « La sécurité rassure les RSSI ; l’ergonomie fait adopter les équipes. Il faut les deux. »
      </blockquote>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Adoption : le KPI oublié des portails internes
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Un portail magnifique que personne n’ouvre reste un échec. D’où l’importance de la{' '}
        <strong className="text-white/85">recherche</strong>, des <strong className="text-white/85">parcours courts</strong>, et
        de <strong className="text-white/85">champions métier</strong> impliqués tôt. Les intégrations (Google Workspace,
        Microsoft 365, CRM) doivent soulager la double saisie — sinon les équipes contournent l’outil par Excel et
        e-mail.
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Après le MVP : comment faire grandir sans tout casser
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Modularité, journaux d’audit, rôles segmentés : ce sont les fondations pour ajouter un nouveau site, un nouveau
        partenaire, ou un module documentaire sans refonte. Si vous préparez déjà une{' '}
        <Link href="/applications-mobiles" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          application mobile
        </Link>{' '}
        ou une expérience terrain, on peut aligner l’auth et les APIs dès l’architecture.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Pour en savoir plus sur ma façon de livrer :{' '}
        <Link href="/a-propos" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          À propos
        </Link>
        ; exemples concrets :{' '}
        <Link href="/realisations" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          réalisations
        </Link>
        .
      </p>
    </>
  );
}
