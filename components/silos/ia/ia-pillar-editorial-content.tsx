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
        L’IA qu’on voit sur LinkedIn vs l’IA qui vous rend une demi-journée par semaine
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Il y a plein de bruit autour de l’IA : slides futuristes, prompts magiques, “agents autonomes” qui n’existent que
        dans une démo. Dans la vraie vie, ce qui marche souvent, c’est beaucoup plus terre-à-terre : un formulaire qui
        pose les bonnes questions, un assistant qui cite vos documents, une petite automatisation qui évite à quelqu’un
        de recopier la même chose dix fois. Moi je pars de votre irritant du lundi matin — pas du mot à la mode.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Trois cas où j’intègre de l’IA sans me prendre la tête : le support qui répète les mêmes réponses (on documente
        les bonnes réponses puis on les rend consultables), le site e-commerce où les gens hésitent entre deux produits
        (on aide à choisir sans inventer des specs), et l’équipe interne qui perd du temps sur des mails ou des PDF
        (on résume, on classe, on signale quand un humain doit reprendre). À l’inverse, je déconseille d’automatiser ce
        qui touche à l’argent ou à la santé sans filet humain clair — ce n’est pas “anti-tech”, c’est du bon sens.
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        ChatGPT, Claude, Mistral… : je choisis avec vous, pas à votre place
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Chaque fournisseur a ses forces : qualité de texte, prix à la requête, vitesse, options d’hébergement en Europe,
        fenêtre de contexte pour de gros documents… Je vous explique les compromis en français simple — parce que
        signer un contrat SaaS sur la base d’un thread Twitter, c’est risqué. Souvent on commence avec un modèle
        “large audience” pour un prototype, puis on resserre quand on sait ce qui compte vraiment pour vous.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Le RAG — récupérer des bouts de vos docs pour répondre — est devenu le truc le plus demandé : c’est
        l’équivalent d’un collègue qui aurait lu tout votre drive… sans inventer quand il ne sait pas. Si vous voulez le
        détail, la page{' '}
        <Link href="/ia/rag-base-connaissances" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          assistant sur vos documents
        </Link>{' '}
        raconte comment je le monte proprement.
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Combien ça coûte vraiment — et comment éviter la facture surprise
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Il y a deux budgets : le développement (moi) et l’usage des API (les fournisseurs). Le second peut grimper si on
        envoie des romans entiers à chaque clic. D’où l’intérêt de cadrer : prompts courts, mise en cache raisonnable,
        modèles adaptés à la tâche. Je préfère vous montrer une courbe sur un pilote plutôt que promettre “zéro euro
        ensuite” — ce serait vous mentir.
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        IA et SEO : deux sujets, une même exigence de clarté
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Pour le référencement classique, toute la partie{' '}
        <Link href="/seo" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          SEO & GEO
        </Link>{' '}
        est détaillée ici sur le site. Pour les parcours web hors boutique :{' '}
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
