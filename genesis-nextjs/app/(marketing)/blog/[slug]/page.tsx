import MarketingShell from '@/components/marketing/marketing-shell';
import type { Metadata } from 'next';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slug.replace(/-/g, ' '),
    description: `Article « ${slug} » — blog Clickdev.`,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  return (
    <MarketingShell
      eyebrow="Blog"
      title={slug.replace(/-/g, ' ')}
      description="Article piloté par Sanity (portable text, auteur, OG). Le contenu sera branché sur les requêtes CMS."
      breadcrumb={[
        { label: 'Accueil', href: '/' },
        { label: 'Blog', href: '/blog' },
        { label: slug, href: `/blog/${slug}` },
      ]}
    />
  );
}
