import { urbanist } from '@/components/fonts';
import Image from 'next/image';
import PersalinanImg from '@/public/layanan-persalinan.png';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function Layanan() {
  return (
    <section className="static h-fit bg-[#eff6ff]">
      <div className="container p-8 pb-32">
        <h1
          className={`${urbanist.className} text-center text-3xl font-bold text-[#393939] md:text-4xl`}
        >
          Layanan Bidan <span className="text-[#e58bac]">Nina Nurlayina</span>
        </h1>
        <ul
          id="MOBILE_COMPONENT"
          className="mt-4 flex gap-2 rounded-full bg-[#c9e5f5] p-2 md:hidden"
        >
          <button className="rounded-full p-2">
            <ChevronLeft size={20} color="#60b7eb" />
          </button>
          <li className="flex grow items-center justify-center whitespace-nowrap rounded-full bg-[#60b7eb] p-2 text-white">
            Persalinan
          </li>
          <button className="rounded-full p-2">
            <ChevronRight size={20} color="#60b7eb" />
          </button>
        </ul>
        <ul
          id="WEB_COMPONENT"
          className="my-8 hidden justify-evenly gap-2 rounded-full bg-[#c9e5f5] p-2 md:flex"
        >
          <li className="flex items-center justify-center whitespace-nowrap rounded-full bg-[#60b7eb] p-2 px-6 text-white">
            Persalinan
          </li>

          <li className="flex items-center justify-center whitespace-nowrap rounded-xl p-2 text-[#60b7eb]">
            Imunisasi
          </li>
          <li className="flex items-center justify-center whitespace-nowrap rounded-xl p-2 text-[#60b7eb]">
            KB
          </li>
          <li className="flex items-center justify-center whitespace-nowrap rounded-xl p-2 text-[#60b7eb]">
            Kehamilan
          </li>
          <li className="flex items-center justify-center whitespace-nowrap rounded-xl p-2 text-[#60b7eb]">
            Nifas
          </li>
          <li className="flex items-center justify-center whitespace-nowrap rounded-xl p-2 text-[#60b7eb]">
            Layanan Ibu
          </li>
          <li className="flex items-center justify-center whitespace-nowrap rounded-xl p-2 text-[#60b7eb]">
            Layanan Anak
          </li>
        </ul>
        <div className="md:flex md:gap-32">
          <div id="IMAGE" className="flex w-full justify-center md:order-last">
            <div className="relative h-[300px] w-[85%]">
              <Image
                src={PersalinanImg}
                alt="Layanan Persalinan"
                fill
                className="z-20 object-contain"
              />
            </div>
          </div>
          <div className="">
            <h1
              className={`${urbanist.className} text-3xl font-bold text-[#393939]`}
            >
              Persalinan
            </h1>
            <p className="mt-2 text-justify text-slate-500 md:text-xl">
              Nikmati pengalaman persalinan yang nyaman dan aman bersama bidan
              terbaik kami. Kami berkomitmen untuk memberikan pelayanan yang
              profesional dan penuh perhatian, memastikan ibu dan bayi
              mendapatkan perawatan yang optimal selama proses persalinan.
              Keamanan dan kenyamanan Anda adalah prioritas utama kami, dengan
              pendekatan yang personal dan mendukung di setiap langkahnya.
            </p>
            <div className="mt-6 flex w-full justify-end md:justify-start">
              <Link href="/layanan">
                <button
                  id="reservasi-button"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#60b7eb] px-4 py-2 font-medium text-white"
                >
                  Lihat Selengkapnya
                  <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
