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

export const metadata: Metadata = {
  title: { default: 'Clickdev — David Rieu', template: '%s | Clickdev' },
  description:
    'Développeur freelance pour sites, applications et outils digitaux — de la startup au grand groupe.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`dark ${poppins.variable}`}>
      <body>
        <LenisScroll />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
