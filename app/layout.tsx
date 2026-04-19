import { OrganizationJsonLd } from '@/components/seo/organization-json-ld';
import { SITE_NAME, SITE_URL } from '@/lib/constants/site';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import LenisScroll from '@/components/lenis-scroll';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
});

const metadataBaseUrl = SITE_URL.endsWith('/') ? SITE_URL.slice(0, -1) : SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(metadataBaseUrl),
  title: { default: 'Clickdev — David Rieu', template: '%s | Clickdev' },
  description:
    'Développeur freelance pour sites, applications et outils digitaux — de la startup au grand groupe.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: SITE_NAME,
    images: [
      {
        url: '/assets/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/assets/web-app-manifest-512x512.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`dark ${poppins.variable}`}>
      <body>
        <OrganizationJsonLd />
        <LenisScroll />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
