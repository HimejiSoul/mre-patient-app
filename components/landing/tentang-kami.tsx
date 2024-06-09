import { urbanist } from '@/components/fonts';
import Image from 'next/image';
import TentangKamiImg from '@/public/beranda-tentang-kami.png';
import Link from 'next/link';

export function TentangKami() {
  return (
    <section className="static h-fit bg-white">
      <div className="container p-8 pb-32 md:flex md:gap-32 md:py-32">
        <div id="IMAGE" className="flex w-full basis-1/4 justify-center">
          <div className="relative h-[350px] w-[85%] md:h-[400px] md:w-[400px]">
            <Image
              src={TentangKamiImg}
              alt="Tentang Kami"
              fill
              className="z-20 object-contain"
            />
          </div>
        </div>
        <div id="CONTENT" className="basis-3/4">
          <h1
            className={`${urbanist.className} text-3xl font-bold text-[#393939] md:text-4xl`}
          >
            Tentang Kami
          </h1>
          <p className="mt-2 text-justify text-slate-500 md:text-xl">
            Tim bidan profesional yang berdedikasi untuk memberikan pelayanan
            kesehatan ibu dan anak yang terbaik. Dengan pengalaman dan keahlian
            yang luas, kami siap mendampingi Anda dalam setiap tahap kehamilan
            dan persalinan, memastikan Anda merasa aman dan nyaman.
            <br />
            <br />
            Kami percaya bahwa setiap ibu berhak mendapatkan perawatan yang
            penuh kasih dan personal. Oleh karena itu, kami menyediakan layanan
            yang disesuaikan dengan kebutuhan masing-masing individu, dari
            konsultasi kehamilan, pemeriksaan rutin, hingga proses persalinan
            dan perawatan pasca melahirkan.
            <br />
            <br />
            Prioritas kami adalah kesejahteraan ibu dan bayi, dengan pendekatan
            yang ramah, mendukung, dan profesional. Kami berkomitmen untuk terus
            meningkatkan kualitas layanan kami melalui pelatihan dan
            pengembangan berkelanjutan.
          </p>
          <div className="mt-6 flex w-full justify-end md:justify-start">
            <Link href="/tentang-kami">
              <button
                id="reservasi-button"
                className="flex items-center justify-center gap-2 rounded-full bg-[#e58bac] px-4 py-2 font-medium text-white"
              >
                Lihat Selengkapnya
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
