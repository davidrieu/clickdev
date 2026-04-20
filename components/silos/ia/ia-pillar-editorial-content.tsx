import Link from 'next/link';

export function IaPillarEditorialContent() {
  return (
    <>
      <p className="mt-5 text-base leading-[1.75] text-white/70 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-[0.85] first-letter:font-medium first-letter:text-white/90 md:first-letter:text-[3.75rem]">
        L’<strong className="font-medium text-white/90">IA en production</strong>, ce n’est pas une démo sur un
        slide : c’est une dépendance externe (fournisseur, modèle, quota), des données qui bougent, et des utilisateurs
        qui jugent en secondes. D’où les <strong className="font-medium text-white/90">garde-fous</strong>, les{' '}
        <strong className="font-medium text-white/90">journaux</strong>, et les budgets tokens traités comme une ligne
        de marge — pas comme une footnote ops.
      </p>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Les pages{' '}
        <Link href="/ia/integration-ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          intégration
        </Link>
        ,{' '}
        <Link href="/ia/rag-base-connaissances" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          RAG
        </Link>{' '}
        et{' '}
        <Link href="/ia/agents-ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          agents
        </Link>{' '}
        couvrent des niveaux de complexité différents ;{' '}
        <Link href="/ia/chatbot-ia" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          chatbot
        </Link>{' '}
        et{' '}
        <Link
          href="/ia/ia-generative-ecommerce"
          className="text-white/75 underline-offset-4 transition hover:text-white hover:underline"
        >
          e-commerce
        </Link>{' '}
        restent souvent les portes d’entrée les plus lisibles côté métier.
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        POC : mesurer avant d’étiqueter “IA partout”
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Un périmètre restreint mais mesurable en quelques semaines bat une roadmap floue sur six mois. Les métriques
        utiles sont souvent le temps gagné, le taux d’erreur humaine évitée, ou le coût marginal par ticket — pas le
        nombre de tokens affichés sur un dashboard vanity.
      </p>

      <blockquote className="si-editorial-pullquote si-serif-display my-10 border-l-4 border-white/30 py-1 pl-6 text-lg leading-snug text-white/85 italic md:text-xl">
        « Si personne ne peut expliquer pourquoi le modèle a proposé cette action, vous n’êtes pas prêt à scaler. »
      </blockquote>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        Données : minimiser avant d’“optimiser le prompt”
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Le prompt parfait ne sauve pas un flux qui envoie trop de champs personnels. Le cadrage RGPD et produit vient
        avant l’ingénierie — je peux implémenter proprement une fois les règles clarifiées avec vos responsables.
      </p>

      <h3 className="si-editorial-h3 si-serif-display mt-14 text-2xl font-medium tracking-tight text-white md:text-[1.65rem]">
        IA et SEO : deux silos, une même exigence de clarté
      </h3>
      <p className="mt-4 text-base leading-[1.75] text-white/70">
        Pour le référencement classique et le contenu : le silo{' '}
        <Link href="/seo" className="text-white/75 underline-offset-4 transition hover:text-white hover:underline">
          SEO
        </Link>
        . Pour des parcours web sans store :{' '}
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
