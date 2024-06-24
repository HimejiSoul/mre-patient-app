import { urbanist } from '@/components/fonts';
import Image from 'next/image';
import TentangKamiImg from '@/public/beranda-tentang-kami.png';
import Link from 'next/link';
import { Reveal } from '../reveal';

export function TentangKami() {
  return (
    <section className="relative h-fit bg-white">
      <div className="container flex flex-col place-items-center gap-8 p-8 pb-32 md:flex-row md:gap-16 md:py-32">
        <TentangKamiImage img={TentangKamiImg} />
        <Body />
      </div>
    </section>
  );
}

function TentangKamiImage({ img }: { img: any }) {
  return (
    <Reveal className="relative h-[350px] w-[85%] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px]">
      <Image
        src={img}
        alt="Tentang Kami"
        fill
        className="z-20 object-contain"
      />
    </Reveal>
  );
}

function Body() {
  return (
    <Reveal className="basis-3/4">
      <h1
        className={`${urbanist.className} text-3xl font-bold text-[#393939] md:text-4xl`}
      >
        Tentang Kami
      </h1>
      <p className="mt-2 text-justify text-slate-500 md:text-xl">
        Tim bidan profesional yang berdedikasi untuk memberikan pelayanan
        kesehatan ibu dan anak yang terbaik. Dengan pengalaman dan keahlian yang
        luas, kami siap mendampingi Anda dalam setiap tahap kehamilan dan
        persalinan, memastikan Anda merasa aman dan nyaman.
        <br />
        <br />
        Kami percaya bahwa setiap ibu berhak mendapatkan perawatan yang penuh
        kasih dan personal. Oleh karena itu, kami menyediakan layanan yang
        disesuaikan dengan kebutuhan masing-masing individu, dari konsultasi
        kehamilan, pemeriksaan rutin, hingga proses persalinan dan perawatan
        pasca melahirkan.
        <br />
        <br />
        Prioritas kami adalah kesejahteraan ibu dan bayi, dengan pendekatan yang
        ramah, mendukung, dan profesional. Kami berkomitmen untuk terus
        meningkatkan kualitas layanan kami melalui pelatihan dan pengembangan
        berkelanjutan.
      </p>
      <div className="mt-6 flex w-full justify-end md:justify-start">
        <Link
          href="/tentang-kami"
          className="flex items-center justify-center rounded-full bg-[#e58bac] px-4 py-2 font-medium text-white duration-200 hover:bg-[#e58bac]/80"
        >
          Lihat Selengkapnya
        </Link>
      </div>
    </Reveal>
  );
}
