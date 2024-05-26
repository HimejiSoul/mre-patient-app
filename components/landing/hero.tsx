import { urbanist } from '@/app/ui/fonts';
import { ArrowRight } from 'lucide-react';
import WhatsApp from '@/public/WhatsApp_icon.png.webp';
import Image from 'next/image';
import Bidan01 from '@/public/a-black-female-doctor-wearing-a-white-coat-free-png.jpg';
import Bidan02 from '@/public/nurse-hijab-portrait-hospital.png';
import Link from 'next/link';

export function Hero() {
  return (
    <main className="h-fit min-h-[100dvh] w-full bg-[#eff6ff]">
      <div className="container static p-8 pb-32 md:flex md:gap-16 md:pb-8">
        <div id="TITLE" className="basis-1/2 md:pt-32">
          <p
            className={`${urbanist.className} w-fit rounded-lg bg-white p-2 px-4 text-[#60b7eb] drop-shadow-md`}
          >
            Bidan Terbaik 😍
          </p>
          <h1
            className={`${urbanist.className} mt-4 text-3xl font-bold text-[#393939] md:text-4xl`}
          >
            Dapatkan <span className="text-[#60b7eb]">Pelayanan</span> Terbaik
            Dengan <span className="text-[#e58bac]">Bidan</span> Terbaik
          </h1>
          <p className="mt-2 text-slate-500 md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="w-fit">
            <Link href="/login">
              <button
                id="reservasi-button"
                className="mt-8 flex items-center justify-center gap-2 rounded-full border-2 border-[#60b7eb] px-4 py-2 font-semibold text-[#60b7eb]"
              >
                Reservasi Layanan
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
        <div
          id="HERO_IMAGES"
          className="mt-16 flex w-full basis-1/2 flex-col items-center justify-center gap-8 md:mt-0 md:grid md:grid-cols-2 md:gap-0"
        >
          <div className="w-full bg-red-500"></div>
          <div
            id="BIDAN_1"
            className="relative h-[350px] w-[85%] md:h-[350px] md:max-w-[400px]"
          >
            <Image
              src={Bidan01}
              alt="Bidan Nina"
              fill
              className="z-[20] object-contain"
            />
            <div className="absolute inset-0 flex items-end justify-center">
              <div className="z-[40] mb-4 w-[95%] rounded-bl-full bg-white p-2 pl-8 pr-4 text-right font-bold drop-shadow-md">
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
            className="relative h-[350px] w-[85%] md:-top-32 md:-mb-32 md:h-[350px] md:max-w-[400px]"
          >
            <Image
              src={Bidan02}
              alt="Bidan Nina"
              fill
              className="z-[20] object-contain"
            />
            <div className="absolute inset-0 flex items-end justify-center">
              <div className="z-[40] mb-4 w-[95%] rounded-bl-full bg-white p-2 pl-8 pr-4 text-right font-bold drop-shadow-md">
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
          <div className="w-full bg-red-500"></div>
        </div>
        <button id="whatsapp-button" className="fixed bottom-8 right-4 z-[80]">
          <Image src={WhatsApp} width={64} height={64} alt="WhatsApp" />
        </button>
      </div>
    </main>
  );
}
