'use client';

import { urbanist } from '@/components/fonts';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import persalinaniImg from '@/public/layanan/persalinan.png';
import imunisasiImg from '@/public/layanan/imunisasi.png';
import keluargaBerencanaiImg from '@/public/layanan/keluarga-berencana.png';
import periksaKehamilanImg from '@/public/layanan/periksa-kehamilan.png';
import nifasImg from '@/public/layanan/nifas.png';
import layananIbuImg from '@/public/layanan/layanan-ibu.png';
import layananAnakImg from '@/public/layanan/layanan-anak.png';

const layanan = [
  {
    img: persalinaniImg,
    href: '/layanan/persalinan',
    title: 'Persalinan',
    description:
      'Nikmati pengalaman persalinan yang nyaman dan aman bersama bidan terbaik kami. Kami berkomitmen untuk memberikan pelayanan yang profesional dan penuh perhatian, memastikan ibu dan bayi mendapatkan perawatan yang optimal selama proses persalinan. Keamanan dan kenyamanan Anda adalah prioritas utama kami, dengan pendekatan yang personal dan mendukung di setiap langkahnya.',
  },
  {
    img: imunisasiImg,
    href: '/layanan/imunisasi',
    title: 'Imunisasi',
    description:
      'Nikmati pengalaman imunisasi yang nyaman dan aman bersama bidan terbaik kami. Kami berkomitmen untuk memberikan pelayanan yang profesional dan penuh perhatian, memastikan ibu dan bayi mendapatkan perawatan yang optimal selama proses persalinan. Keamanan dan kenyamanan Anda adalah prioritas utama kami, dengan pendekatan yang personal dan mendukung di setiap langkahnya.',
  },
  {
    img: keluargaBerencanaiImg,
    href: '/layanan/keluarga-berencana',
    title: 'Keluarga Berencana',
    description:
      'Nikmati pengalaman keluarga berencana yang nyaman dan aman bersama bidan terbaik kami. Kami berkomitmen untuk memberikan pelayanan yang profesional dan penuh perhatian, memastikan ibu dan bayi mendapatkan perawatan yang optimal selama proses persalinan. Keamanan dan kenyamanan Anda adalah prioritas utama kami, dengan pendekatan yang personal dan mendukung di setiap langkahnya.',
  },
  {
    img: periksaKehamilanImg,
    href: '/layanan/periksa-kehamilan',
    title: 'Periksa Kehamilan',
    description:
      'Nikmati pengalaman periksa kehamilan yang nyaman dan aman bersama bidan terbaik kami. Kami berkomitmen untuk memberikan pelayanan yang profesional dan penuh perhatian, memastikan ibu dan bayi mendapatkan perawatan yang optimal selama proses persalinan. Keamanan dan kenyamanan Anda adalah prioritas utama kami, dengan pendekatan yang personal dan mendukung di setiap langkahnya.',
  },
  {
    img: nifasImg,
    href: '/layanan/nifas',
    title: 'Nifas',
    description:
      'Nikmati pengalaman nifas yang nyaman dan aman bersama bidan terbaik kami. Kami berkomitmen untuk memberikan pelayanan yang profesional dan penuh perhatian, memastikan ibu dan bayi mendapatkan perawatan yang optimal selama proses persalinan. Keamanan dan kenyamanan Anda adalah prioritas utama kami, dengan pendekatan yang personal dan mendukung di setiap langkahnya.',
  },
  {
    img: layananIbuImg,
    href: '/layanan/layanan-ibu',
    title: 'Layanan Ibu',
    description:
      'Nikmati pengalaman layanan ibu yang nyaman dan aman bersama bidan terbaik kami. Kami berkomitmen untuk memberikan pelayanan yang profesional dan penuh perhatian, memastikan ibu dan bayi mendapatkan perawatan yang optimal selama proses persalinan. Keamanan dan kenyamanan Anda adalah prioritas utama kami, dengan pendekatan yang personal dan mendukung di setiap langkahnya.',
  },
  {
    img: layananAnakImg,
    href: '/layanan/layanan-anak',
    title: 'Layanan Anak',
    description:
      'Nikmati pengalaman layanan anak yang nyaman dan aman bersama bidan terbaik kami. Kami berkomitmen untuk memberikan pelayanan yang profesional dan penuh perhatian, memastikan ibu dan bayi mendapatkan perawatan yang optimal selama proses persalinan. Keamanan dan kenyamanan Anda adalah prioritas utama kami, dengan pendekatan yang personal dan mendukung di setiap langkahnya.',
  },
];

export function Layanan() {
  const maxIndex = layanan.length - 1;
  const [indexLayanan, setIndexLayanan] = useState<number>(0);
  const handleIncrement = () => {
    setIndexLayanan((prevIndex) =>
      prevIndex < maxIndex ? prevIndex + 1 : maxIndex,
    );
  };
  const handleDecrement = () => {
    setIndexLayanan((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  return (
    <section className="static h-fit bg-[#eff6ff]">
      <div className="container p-8 pb-32">
        <Title />
        <MobileView
          indexLayanan={indexLayanan}
          maxIndex={maxIndex}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
        <WebView
          indexLayanan={indexLayanan}
          setIndexLayanan={setIndexLayanan}
        />
        <LayananContent indexLayanan={indexLayanan} />
      </div>
    </section>
  );
}

function Title() {
  return (
    <h1
      className={`${urbanist.className} text-center text-3xl font-bold text-[#393939] md:text-4xl`}
    >
      Layanan Bidan <span className="text-[#e58bac]">Nina Nurlayina</span>
    </h1>
  );
}

function MobileView({
  indexLayanan,
  maxIndex,
  handleIncrement,
  handleDecrement,
}: {
  indexLayanan: number;
  maxIndex: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}) {
  return (
    <ul
      id="MOBILE_COMPONENT"
      className="my-4 flex gap-2 rounded-full bg-[#c9e5f5] p-2 lg:hidden"
    >
      <button
        disabled={indexLayanan === 0 ? true : false}
        className="rounded-full p-2"
        onClick={() => handleDecrement()}
      >
        <ChevronLeft
          size={20}
          color={indexLayanan === 0 ? '#c7c7c7' : '#60b7eb'}
        />
      </button>
      <li className="flex grow items-center justify-center whitespace-nowrap rounded-full bg-[#60b7eb] p-2 text-white">
        {layanan[indexLayanan].title}
      </li>
      <button
        disabled={indexLayanan === maxIndex ? true : false}
        className="rounded-full p-2"
        onClick={() => handleIncrement()}
      >
        <ChevronRight
          size={20}
          color={indexLayanan === maxIndex ? '#c7c7c7' : '#60b7eb'}
        />
      </button>
    </ul>
  );
}

function WebView({
  indexLayanan,
  setIndexLayanan,
}: {
  indexLayanan: number;
  setIndexLayanan: any;
}) {
  return (
    <ul
      id="WEB_COMPONENT"
      className="my-8 hidden justify-evenly gap-2 rounded-full bg-[#c9e5f5] p-2 lg:flex"
    >
      {layanan.map((item, i) => (
        <li
          key={i}
          className={`${
            indexLayanan === i
              ? 'bg-[#60b7eb] text-white'
              : 'bg-[#c9e5f5] text-[#60b7eb] hover:bg-[#60b7eb]/20'
          } flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full p-2 px-6 duration-200`}
          onClick={() => setIndexLayanan(i)}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}

function LayananContent({ indexLayanan }: { indexLayanan: number }) {
  return (
    <div className="lg:flex lg:gap-16">
      <div
        id="IMAGE"
        className="flex w-full justify-center md:order-last lg:w-1/2"
      >
        <div className="relative h-[300px] w-[85%] md:w-[100%]">
          <Image
            src={layanan[indexLayanan].img}
            alt={layanan[indexLayanan].title}
            fill
            className="z-20 object-contain"
          />
        </div>
      </div>
      <div className="lg:w-1/2">
        <h1
          className={`${urbanist.className} text-3xl font-bold text-[#393939]`}
        >
          {layanan[indexLayanan].title}
        </h1>
        <p className="mt-2 animate-fade-in-bottom text-justify text-slate-500 duration-500 md:text-xl">
          {layanan[indexLayanan].description}
        </p>
        <div className="mt-6 flex w-full justify-end md:justify-start">
          <Link
            href={layanan[indexLayanan].href}
            className="flex items-center justify-center gap-2 rounded-full bg-[#60b7eb] px-4 py-2 font-medium text-white duration-200 hover:bg-[#60b7eb]/80"
          >
            Lihat Selengkapnya
            <ArrowRight size={20} className="h-full" />
          </Link>
        </div>
      </div>
    </div>
  );
}
