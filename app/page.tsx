import { Hero } from '@/components/beranda/hero';
import { Layanan } from '@/components/beranda/layanan';
import { TentangKami } from '@/components/beranda/tentang-kami';

export default function Page() {
  return (
    <>
      <Hero />
      <TentangKami />
      <Layanan />
    </>
  );
}
