import { Hero } from '@/components/beranda/hero';
import { Layanan } from '@/components/beranda/layanan';
import { TentangKami } from '@/components/beranda/tentang-kami';
import { BetaDialog } from '@/components/popup';

export default function Page() {
  return (
    <>
      <BetaDialog />
      <Hero />
      <TentangKami />
      <Layanan />
    </>
  );
}
