import DevisForm from '@/components/devis/devis-form';
import PageBreadcrumb from '@/components/marketing/page-breadcrumb';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = listingPageMetadata({
  title: 'Demander un devis',
  description: 'Devis qualifié — décrivez votre projet : type, budget, délai et message.',
  path: '/devis',
});

const jsonLdItems = [
  { name: 'Accueil', path: '/' },
  { name: 'Devis', path: '/devis' },
];

export default function DevisPage() {
  return (
    <>
      <BreadcrumbJsonLd items={jsonLdItems} />
      <article className="mx-auto max-w-2xl px-4 py-16 md:px-6 md:py-20">
        <PageBreadcrumb items={jsonLdItems.map((j) => ({ label: j.name, href: j.path }))} />
        <p className="font-mono text-[11px] tracking-widest text-white/45 uppercase">Projet</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Demander un devis
        </h1>
        <p className="mt-6 text-sm leading-relaxed text-white/75 md:text-base">
          Quelques champs pour cadrer le besoin. Le message part par e-mail (Resend) lorsque les
          variables d’environnement sont renseignées.
        </p>
        <DevisForm />
      </article>
    </>
  );
}
