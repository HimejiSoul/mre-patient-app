import { urbanist } from '@/components/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { WhatsappButton } from '@/components/whatsapp-button';

import heroImage from '@/public/tentang-kami/hero.png';
import kenapaHarusKamiImage from '@/public/tentang-kami/kenapa-harus-kami.png';
import bidan1Image from '@/public/tentang-kami/bidan-1.png';
import bidan2Image from '@/public/tentang-kami/bidan-2.png';
import { ArrowRight } from 'lucide-react';

export default function Page() {
  return (
    <>
      <TentangKami />
      <KenapaHarusKami />
      <ProfileBidan />
      <WhatsappButton />
    </>
  );
}

function Background({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
}) {
  return (
    <div className={cn('h-fit bg-white', className)} {...props}>
      {children}
    </div>
  );
}

function H1({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
}) {
  return (
    <h1
      className={cn(
        `${urbanist.className} scroll-m-20 text-4xl font-bold tracking-tight text-[#60b7eb] md:text-4xl`,
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

function H2({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
}) {
  return (
    <h1
      className={cn(
        `${urbanist.className} text-2xl font-bold text-[#60b7eb] md:text-3xl`,
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

function P({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
}) {
  return (
    <p
      className={cn(
        'text-justify leading-7 text-slate-500 [&:not(:first-child)]:mt-2',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}

function TentangKami() {
  return (
    <Background>
      <header className="container flex flex-col place-items-center gap-8 p-8 pb-32 md:flex-row md:gap-16 md:py-32">
        <div className="order-last md:order-first md:w-1/2">
          <H1>Tentang Kami</H1>
          <P>
            Selamat datang di Ninasys, platform terdepan yang menyediakan solusi
            reservasi rekam medis secara online. Kami memahami pentingnya akses
            yang mudah dan cepat terhadap informasi kesehatan Anda. Dengan
            teknologi inovatif dan tim profesional yang berdedikasi, kami hadir
            untuk mempermudah pengelolaan rekam medis Anda.
          </P>
        </div>
        <Image
          src={heroImage}
          alt="Hero Section for Tentang Kami Page"
          sizes="100vw"
          className="h-auto w-[80%] object-contain md:h-[400px] md:w-1/2 lg:h-[500px]"
        />
      </header>
    </Background>
  );
}

function KenapaHarusKami() {
  return (
    <Background className="bg-[#eff6ff]">
      <section className="container flex flex-col place-items-center gap-8 p-8 pb-32 md:flex-row md:gap-16 md:py-32">
        <Image
          src={kenapaHarusKamiImage}
          alt="Mom with her baby"
          sizes="100vw"
          className="h-auto w-[80%] object-contain md:h-[400px] md:w-[40%] lg:h-[500px]"
        />
        <div className="space-y-4 md:space-y-8">
          <H1>Kenapa Harus Kami?</H1>
          <ul className="grid list-inside list-disc grid-cols-1 marker:text-[#60b7eb] md:grid-cols-2">
            <li>A Passion for Healing</li>
            <li>All our best</li>
            <li>Always caring</li>
            <li>5-Star Care</li>
            <li>Belive in Us</li>
            <li>A Legacy of Excellence</li>
          </ul>
          <P>
            Kami memiliki Passion for Healing yang mendalam, dengan selalu
            mengutamakan kepentingan dan kesejahteraan pasien. All our best
            tercermin dalam setiap layanan yang kami berikan, memastikan bahwa
            setiap individu mendapatkan perhatian dan perawatan terbaik. Always
            caring adalah janji kami, untuk selalu hadir dan mendukung setiap
            langkah perjalanan kesehatan Anda. Kami bangga dengan 5-Star Care
            yang menjadi standar kami, memberikan layanan berkualitas tinggi
            dengan penuh dedikasi. Belive in Us karena kami telah membangun A
            Legacy of Excellence yang terpercaya dalam menyediakan solusi
            kesehatan yang inovatif dan dapat diandalkan.
          </P>
        </div>
      </section>
    </Background>
  );
}

function ProfileBidan() {
  return (
    <Background>
      <section className="container flex flex-col place-items-center gap-8 p-8 pb-32 md:py-32">
        <H1 className="text-center">Profile Bidan</H1>
        <div className="_BIDAN1 flex flex-col place-items-center gap-8 md:flex-row md:gap-16">
          <div>
            <H2 className="text-[#393939]">
              Bidan Nina Nurlayani Amd.keb, CHE
            </H2>
            <P>
              Salah satu profesional kesehatan dengan pengalaman lebih dari 15
              tahun di bidang kebidanan, ia telah membantu ribuan ibu hamil
              menjalani proses kehamilan dan persalinan dengan aman dan nyaman.
              Nina dikenal karena pendekatannya yang hangat dan empatik, selalu
              memberikan dukungan dan perhatian penuh kepada setiap pasiennya.
              Selain memiliki keahlian klinis yang luar biasa, Nina juga aktif
              dalam berbagai program edukasi kesehatan ibu dan anak, dan
              berkomitmen untuk meningkatkan kesejahteraan komunitas.
            </P>
            <div className="_BUTTON mt-6 flex w-full md:justify-start">
              <Link
                href="/reservasi-layanan"
                className="flex items-center justify-center gap-2 rounded-full bg-[#60b7eb] px-4 py-2 font-medium text-white duration-200 hover:brightness-95"
              >
                Konsultasi Gratis
                <ArrowRight size={20} className="h-full" />
              </Link>
            </div>
          </div>
          <Image
            src={bidan2Image}
            alt="Bidan Nina Nurlayani"
            sizes="100vw"
            className="order-first h-auto w-[80%] object-contain md:order-last md:h-[400px] md:w-[40%] lg:h-[400px]"
          />
        </div>
        <div className="_BIDAN2 flex flex-col place-items-center gap-8 md:flex-row md:gap-16">
          <Image
            src={bidan1Image}
            alt="Bidan Nina Nurlayani"
            sizes="100vw"
            className="h-auto w-[80%] object-contain md:h-[400px] md:w-[40%] lg:h-[400px]"
          />
          <div>
            <H2 className="text-[#393939]">Bidan Imas Amd.keb, CHE</H2>
            <P>
              Bidan Imas adalah tenaga kesehatan berpengalaman di dengan lebih
              dari 12 tahun dedikasi dalam kesehatan ibu dan anak. Dikenal
              karena pendekatan holistik dan personal, ia memastikan setiap
              pasien merasa aman dan didukung selama kehamilan dan persalinan.
              Selain keahlian klinisnya, Bidan Imas aktif dalam edukasi
              kesehatan melalui seminar dan lokakarya. Dengan kasih sayang dan
              profesionalisme, Bidan Imas siap menjadi mitra terpercaya dalam
              perjalanan kehamilan Anda.
            </P>
            <div className="_BUTTON mt-6 flex w-full md:justify-start">
              <Link
                href="/reservasi-layanan"
                className="flex items-center justify-center gap-2 rounded-full bg-[#60b7eb] px-4 py-2 font-medium text-white duration-200 hover:brightness-95"
              >
                Konsultasi Gratis
                <ArrowRight size={20} className="h-full" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Background>
  );
}
