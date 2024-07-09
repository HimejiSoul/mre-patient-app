import Image from 'next/image';
import Link from 'next/link';

// ASSETS
import heroImage from '@/public/tentang-kami/hero.png';
import kenapaHarusKamiImage from '@/public/tentang-kami/kenapa-harus-kami.png';
import bidan2Image from '@/public/tentang-kami/bidan-2.png';
import { WhatsappButton } from '@/components/whatsapp-button';
import { ArrowRight } from 'lucide-react';

// PAGE LAYOUT
import { H1, H2, P } from '@/components/typography';
import { Background } from '@/components/page-wrapper';

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

function TentangKami() {
  return (
    <Background>
      <header className="container flex flex-col place-items-center gap-8 p-8 pb-32 md:flex-row md:gap-16 md:pt-16">
        <div className="order-last md:order-first md:w-1/2">
          <H1 className="animate-fade-in-top duration-1000">Tentang Kami</H1>
          <P className="animate-fade-in-bottom text-start duration-1000">
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
          className="h-auto w-[80%] animate-fade-in-right object-contain duration-1000 md:h-[400px] md:w-1/2 lg:h-[500px]"
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
      </section>
    </Background>
  );
}
