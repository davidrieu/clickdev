import Link from 'next/link';

export function IaPillarEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        L’<strong className="font-medium text-white/90">intelligence artificielle</strong> sur un site ou dans une appli,
        ce n’est pas une démo : vos clients la jugent en quelques secondes, et le coût d’utilisation doit rester lisible
        pour vous. D’où des <strong className="font-medium text-white/90">règles simples</strong>, un suivi honnête, et
        des priorités claires avant de parler d’outils.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Les pages{' '}
        <Link href="/ia/integration-ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          site & appli
        </Link>
        ,{' '}
        <Link href="/ia/rag-base-connaissances" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          documents internes
        </Link>{' '}
        et{' '}
        <Link href="/ia/agents-ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          scénarios sur plusieurs étapes
        </Link>{' '}
        ne demandent pas le même niveau d’investissement ;{' '}
        <Link href="/ia/chatbot-ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          chatbot
        </Link>{' '}
        et{' '}
        <Link
          href="/ia/ia-generative-ecommerce"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          boutique en ligne
        </Link>{' '}
        restent souvent les portes d’entrée les plus parlantes pour un indépendant ou une PME.
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Un petit pilote vaut mieux qu’une grande annonce vide
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Quelques semaines sur un périmètre réel (temps gagné au téléphone, demandes traitées sur le site) bat une feuille
        de route floue sur six mois. Les chiffres utiles sont ceux que vous comprenez sans être développeur.
      </p>

      <blockquote className="si-editorial-pullquote si-serif-display my-10 border-l-4 border-white/30 py-1 pl-6 text-lg leading-snug text-white/85 italic md:text-xl">
        « Si vous ne pouvez pas expliquer à un client ce que fait l’outil, il n’est pas prêt à être généralisé. »
      </blockquote>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Données : moins d’infos inutiles, avant toute chose
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Même la meilleure formulation ne rattrape pas un flux qui envoie trop de données personnelles. Le cadre légal et
        vos règles internes viennent en premier ; je mets en œuvre la partie technique une fois que c’est clair pour vous.
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        IA et SEO : deux sujets, une même exigence de clarté
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Pour le référencement classique : le silo{' '}
        <Link href="/seo" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          SEO
        </Link>
        . Pour les parcours web hors boutique :{' '}
        <Link href="/sites-internet" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          sites internet
        </Link>
        .
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        <Link href="/realisations" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          Réalisations
        </Link>
        {' · '}
        <Link href="/a-propos" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          À propos
        </Link>
        .
      </p>
    </>
  );
}
