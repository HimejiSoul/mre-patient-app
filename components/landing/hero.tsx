import { urbanist } from '@/components/fonts';
import { ArrowRight } from 'lucide-react';
import WhatsApp from '@/public/WhatsApp_icon.png.webp';
import Image from 'next/image';
import Bidan01 from '@/public/a-black-female-doctor-wearing-a-white-coat-free-png.jpg';
import Bidan02 from '@/public/nurse-hijab-portrait-hospital.png';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="h-fit w-full bg-[#eff6ff]">
      <div className="container relative p-8 pb-16 md:flex md:gap-16">
        <Headline />
        <HeroImages />
        <WhatssAppIcon />
      </div>
    </section>
  );
}

function Headline() {
  return (
    <div id="TITLE" className="md:basis-8/12 md:pt-32 lg:basis-1/2">
      <p
        className={`${urbanist.className} w-fit animate-fade-in-top rounded-lg bg-white p-2 px-4 text-[#60b7eb] drop-shadow-md duration-2000`}
      >
        Bidan Terbaik 😍
      </p>
      <h1
        className={`${urbanist.className} text-balance mt-4 animate-fade-in-top text-3xl font-bold text-[#393939] duration-1000 md:text-4xl`}
      >
        Dapatkan <span className="text-[#60b7eb]">Pelayanan</span> Terbaik
        Dengan <span className="text-[#e58bac]">Bidan</span> Terbaik
      </h1>
      <p className="mt-2 animate-fade-in-top text-slate-500 duration-1000 md:text-xl">
        Pelayanan kesehatan yang optimal dengan bidan profesional yang
        berdedikasi tinggi, siap mendampingi Anda dalam setiap tahap perawatan
        dan kesehatan ibu dan anak.
      </p>
      <Link
        href="/reservasi-layanan"
        className="mt-8 flex w-fit animate-fade-in-bottom items-center gap-2 rounded-full border-2 border-[#60b7eb] px-4 py-2 font-semibold text-[#60b7eb] duration-1000 hover:bg-[#60b7eb] hover:text-[#eff6ff] hover:duration-200 active:bg-[#4989ae]"
      >
        Reservasi Layanan
        <ArrowRight size={20} />
      </Link>
    </div>
  );
}

function HeroImages() {
  return (
    <div
      id="HERO_IMAGES"
      className="mt-8 grid w-full grid-rows-2 gap-8 md:mt-0 md:h-[600px] md:basis-4/12 lg:basis-1/2"
    >
      <div
        id="BIDAN_1"
        className="relative order-2 h-[400px] w-[85%] animate-fade-in-right justify-self-center duration-1000 md:h-full md:max-w-[200px] md:justify-self-end lg:max-w-[280px] xl:h-[350px] xl:max-w-[300px]"
      >
        <Image
          src={Bidan01}
          alt="Bidan Nina"
          fill
          className="z-[20] rounded-full object-contain"
        />
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="z-[40] mb-2 w-[95%] rounded-bl-full bg-white px-4 pb-2 pt-4 text-right font-bold drop-shadow-md">
            <p>Imas Amd.keb, CHE</p>
            <p className="font-normal text-slate-500">Bidan</p>
          </div>
          <div
            id="background-title"
            className="absolute -bottom-4 z-[30] mb-4 h-[64px] w-full rounded-bl-full bg-white p-2 pl-8 pr-4 text-right font-bold drop-shadow-md"
          ></div>
          <div
            id="blue-circle"
            className="absolute -bottom-4 z-0 mb-4 h-full w-full rounded-bl-full rounded-tl-full rounded-tr-full bg-[#60b7eb] p-2 pl-8 pr-4 text-right font-bold drop-shadow-md"
          ></div>
        </div>
      </div>
      <div
        id="BIDAN_2"
        className="relative order-3 h-[400px] w-[85%] animate-fade-in-left self-end justify-self-center duration-1000 md:h-full md:max-w-[200px] md:justify-self-start lg:max-w-[280px] xl:h-[350px] xl:max-w-[300px]"
      >
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
    </div>
  );
}

function WhatssAppIcon() {
  return (
    <Link
      id="WHATSAPP_ICON"
      href="https://wa.me/6287716254614"
      className="fixed bottom-8 right-4 z-[80] animate-fade-in-bottom duration-2000"
    >
      <Image src={WhatsApp} width={64} height={64} alt="WhatsApp" />
    </Link>
  );
}
