'use client';

import type { SanityPostTeaser } from '@/types/sanity-post';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const PLACEHOLDERS: SanityPostTeaser[] = [
  {
    _id: 'ph-1',
    title: 'WordPress vs Next.js en 2026 : lequel choisir ?',
    slug: 'wordpress-vs-nextjs',
    excerpt: 'Comparatif orienté décideurs : coûts, SEO, performances et équipes.',
    publishedAt: null,
    coverImage: null,
  },
  {
    _id: 'ph-2',
    title: 'Combien coûte une marketplace ?',
    slug: 'cout-marketplace',
    excerpt: 'Budgets réalistes, phases de delivery et pièges à éviter.',
    publishedAt: null,
    coverImage: null,
  },
  {
    _id: 'ph-3',
    title: 'Core Web Vitals : pourquoi votre site rame',
    slug: 'core-web-vitals',
    excerpt: 'LCP, INP, CLS expliqués simplement — et quoi corriger en priorité.',
    publishedAt: null,
    coverImage: null,
  },
];

function PostCard({ post, isPlaceholder }: { post: SanityPostTeaser; isPlaceholder: boolean }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition hover:bg-white/[0.06]">
      <div className="relative aspect-[16/10] bg-white/5">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 33vw"
          />
        ) : (
          <div
            className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
            aria-hidden
          />
        )}
        {isPlaceholder && (
          <span className="absolute top-3 left-3 rounded bg-black/60 px-2 py-0.5 text-[10px] font-medium tracking-wide text-white/80 uppercase backdrop-blur-sm">
            Bientôt
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[10px] tracking-widest text-white/40 uppercase">
          Blog · à venir
        </p>
        <h3 className="mt-2 text-base leading-snug font-semibold">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>
        {post.excerpt && (
          <p className="mt-2 line-clamp-3 flex-1 text-sm text-white/65">{post.excerpt}</p>
        )}
      </div>
    </article>
  );
}

export default function HomeBlogCta({ posts }: { posts: SanityPostTeaser[] }) {
  const display = posts.length > 0 ? posts.slice(0, 3) : PLACEHOLDERS;
  const isPlaceholder = posts.length === 0;

  return (
    <>
      <section className="mt-24 md:mt-32">
        <motion.h2
          className="text-center text-3xl font-semibold text-white md:text-4xl"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 260, damping: 70 }}
        >
          Blog
        </motion.h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white/70 md:text-base">
          {isPlaceholder
            ? 'Les premiers articles seront publiés ici — sujets SEO, e-commerce, IA et retours de terrain.'
            : 'Derniers articles publiés.'}
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {display.map((post, index) => (
            <motion.div
              key={post._id}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, type: 'spring', stiffness: 280, damping: 72 }}
            >
              <PostCard post={post} isPlaceholder={isPlaceholder} />
            </motion.div>
          ))}
        </div>
        <p className="mt-10 text-center">
          <Link
            href="/blog"
            className="text-sm font-medium text-white/90 underline-offset-4 hover:underline"
          >
            Voir tous les articles →
          </Link>
        </p>
      </section>

      <section className="relative mt-24 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center md:mt-32 md:px-12 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(242,106,6,0.055),transparent_58%)]"
          aria-hidden
        />
        <motion.h2
          className="relative text-3xl font-semibold tracking-tight text-balance md:text-5xl"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          Parlons de{' '}
          <em className="font-serif font-medium text-white/90 not-italic">votre projet</em>.
        </motion.h2>
        <p className="relative mx-auto mt-5 max-w-xl text-sm text-white/70 md:text-base">
          Une idée à concrétiser ? Un projet à faire évoluer ? Échangeons 30 minutes, sans
          engagement.
        </p>
        <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/devis" className="btn glass px-8 py-3">
            Demander un devis
          </Link>
          <a
            href="https://cal.com/"
            className="rounded-full border border-white/25 px-8 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
            target="_blank"
            rel="noreferrer"
          >
            Réserver un appel
          </a>
        </div>
      </section>
    </>
  );
}
