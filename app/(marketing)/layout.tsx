import Footer from '@/components/footer';
import { MarketingStellarSky } from '@/components/marketing-stellar-sky';
import Navbar from '@/components/navbar';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-w-0 overflow-x-clip bg-black text-white">
      <MarketingStellarSky />
      <div className="relative z-10 min-w-0">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
