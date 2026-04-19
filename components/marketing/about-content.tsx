import Link from 'next/link';

export default function AboutContent() {
  return (
    <div className="mt-10 space-y-10 text-sm leading-relaxed text-white/80 md:text-base">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-white">Parcours</h2>
        <p>
          Je suis David Rieu, développeur freelance derrière Clickdev. Depuis une dizaine d’années,
          j’accompagne des marques et des équipes produit sur des sites à fort trafic, des
          applications mobiles, des marketplaces et des outils métiers — du artisan à des groupes
          internationaux.
        </p>
        <p>
          Mon approche combine exigence technique (performances, SEO technique, qualité de code) et
          pragmatisme business : livrer vite une première version utile, puis itérer avec des mesures
          claires.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-white">Ce que je fais au quotidien</h2>
        <ul className="list-inside list-disc space-y-2 text-white/75">
          <li>Front et full-stack sur Next.js, écosystème React, intégrations API.</li>
          <li>Apps mobiles et PWA, e-commerce (Shopify, sur mesure), outils internes.</li>
          <li>SEO technique, Core Web Vitals, et bases de GEO (visibilité dans les réponses IA).</li>
          <li>Maintenance, refontes progressives et transferts de compétences vers vos équipes.</li>
        </ul>
      </section>
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-white">Confiance & références</h2>
        <p>
          J’interviens régulièrement sur des environnements exigeants (disponibilité, conformité,
          pics de trafic). Les études de cas publiées sur le site détaillent contexte, stack et
          résultats lorsque le client l’autorise.
        </p>
      </section>
      <p>
        <Link href="/devis" className="font-medium text-[#F26A06] underline-offset-4 hover:underline">
          Demander un devis
        </Link>
        {' · '}
        <Link href="/contact" className="font-medium text-white/90 underline-offset-4 hover:underline">
          Contact
        </Link>
        {' · '}
        <Link href="/expertises" className="font-medium text-white/90 underline-offset-4 hover:underline">
          Expertises
        </Link>
      </p>
    </div>
  );
}
