import { Hero } from '@/components/landing/hero';
import { Layanan } from '@/components/landing/layanan';
import { TentangKami } from '@/components/landing/tentang-kami';

export default function Page() {
  return (
    <>
      <Hero />
      <TentangKami />
      <Layanan />
    </>
  );
}
