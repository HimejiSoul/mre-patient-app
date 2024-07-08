import { urbanist } from '@/components/fonts';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Bidan02 from '@/public/beranda/nurse-hijab-portrait-hospital.png';
import Link from 'next/link';
import { WhatsappButton } from '@/components/whatsapp-button';

import { H1, P } from '@/components/typography';
import { Background } from '@/components/page-wrapper';

export function Hero() {
  return (
    <Background className="bg-[#eff6ff]">
      <section className="container relative flex flex-col gap-12 p-8 pb-16 md:flex-row md:justify-between">
        <Headline />
        <HeroImages />
        <WhatsappButton />
      </section>
    </Background>
  );
}

function Headline() {
  return (
    <div id="TITLE" className="md:w-1/2 md:place-content-center">
      <p
        className={`${urbanist.className} w-fit animate-fade-in-top rounded-lg bg-white p-2 px-4 text-[#60b7eb] drop-shadow-md duration-2000`}
      >
        Bidan Terbaik 😍
      </p>
      <H1 className="mt-4 animate-fade-in-top text-[#393939] duration-1000">
        Dapatkan <span className="text-[#60b7eb]">Pelayanan</span> Terbaik
        Dengan <span className="text-[#e58bac]">Bidan</span> Terbaik
      </H1>
      <P className="animate-fade-in-top duration-1000">
        Pelayanan kesehatan yang optimal dengan bidan profesional yang
        berdedikasi tinggi, siap mendampingi Anda dalam setiap tahap perawatan
        dan kesehatan ibu dan anak.
      </P>
      <Link
        href="/reservasi-layanan"
        className="mt-6 flex w-fit animate-fade-in-bottom items-center gap-2 rounded-full border-2 border-[#60b7eb] px-4 py-2 font-semibold text-[#60b7eb] duration-1000 hover:bg-[#60b7eb] hover:text-[#eff6ff] hover:duration-200 active:bg-[#4989ae]"
      >
        Reservasi Layanan
        <ArrowRight size={20} />
      </Link>
    </div>
  );
}

function HeroImages() {
  return (
    <div className="relative h-[400px] w-[80%] max-w-[500px] animate-fade-in-right self-center justify-self-center duration-1000 md:max-w-[300px]">
      <Image
        src={Bidan02}
        alt="Bidan Nina"
        fill
        className="z-[20] rounded-full object-contain"
      />
      <div className="absolute inset-0 flex items-end justify-center">
        <div className="z-[40] mb-2 w-[95%] rounded-bl-full bg-white px-4 pb-2 pt-4 text-right font-bold drop-shadow-md">
          <p>Nina Nurlayina Amd.keb, CHE</p>
          <p className="font-normal text-slate-500">Bidan</p>
        </div>
        <div
          id="background-title"
          className="absolute -bottom-4 z-[30] mb-4 h-[64px] w-full rounded-bl-full bg-white p-2 pl-8 pr-4 text-right font-bold drop-shadow-md"
        ></div>
        <div
          id="pink-circle"
          className="absolute -bottom-4 z-0 mb-4 h-full w-full rounded-bl-full rounded-tl-full rounded-tr-full bg-[#fccada] p-2 pl-8 pr-4 text-right font-bold drop-shadow-md"
        ></div>
      </div>
    </div>
  );
}
