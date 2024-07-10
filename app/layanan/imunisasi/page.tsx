import { urbanist } from '@/components/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { WhatsappButton } from '@/components/whatsapp-button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import layananImage from '@/public/beranda/layanan/imunisasi.png';
import bidanImage from '@/public/layanan-ibu/bidan-1.png';
import { File, PhoneCall } from 'lucide-react';

// PAGE LAYOUT
import { H1, P } from '@/components/typography';
import { Background } from '@/components/page-wrapper';

export default function Page() {
  return (
    <>
      <LayananImunisasi />
      <FAQ />
      <SegeraDapatkan />
      <WhatsappButton />
    </>
  );
}

function LayananImunisasi() {
  return (
    <Background className="bg-white">
      <header className="container flex flex-col place-items-center gap-8 p-8 pb-32 md:flex-row md:gap-16 md:py-32">
        <div className="order-last md:order-first">
          <p
            className={`${urbanist.className}  w-fit animate-fade-in-top rounded-lg bg-white p-2 px-4 text-[#60b7eb] drop-shadow-md duration-2000`}
          >
            Layanan Imunisasi
          </p>
          <H1 className="mt-2 animate-fade-in-top text-[#393939] duration-1000">
            <span className="text-[#60b7eb]">Layanan Imunisasi</span> Terbaik
            untuk Buah Hati Anda
          </H1>
          <P className="animate-fade-in-top text-start duration-1000">
            Layanan imunisasi kami dirancang untuk memberikan perlindungan
            terbaik bagi buah hati Anda sejak dini. Dengan menggunakan vaksin
            yang aman dan terpercaya, kami memastikan setiap anak mendapatkan
            perlindungan maksimal dari berbagai penyakit berbahaya.
          </P>
        </div>
        <Image
          src={layananImage}
          alt="Hero Section for Tentang Kami Page"
          sizes="100vw"
          className="h-auto w-[80%] max-w-[500px] animate-fade-in-right object-contain duration-1000 sm:w-[60%] md:w-[40%]"
        />
      </header>
    </Background>
  );
}

function FAQ() {
  const faqData = [
    {
      title: 'Mengapa imunisasi penting untuk anak?',
      description:
        'Imunisasi sangat penting untuk melindungi anak dari berbagai penyakit berbahaya. Vaksin membantu tubuh anak untuk membentuk kekebalan terhadap penyakit tertentu sehingga dapat mencegah penyebaran dan komplikasi yang serius. Dengan imunisasi, kesehatan anak dapat terjaga lebih optimal.',
    },
    {
      title: 'Apakah vaksin aman untuk anak?',
      description:
        'Ya, vaksin yang diberikan telah melalui uji klinis yang ketat dan terbukti aman serta efektif. Efek samping yang terjadi biasanya ringan dan sementara, seperti demam ringan atau nyeri di tempat suntikan. Manfaat imunisasi jauh lebih besar dibandingkan risiko efek sampingnya.',
    },
    {
      title: 'Kapan waktu yang tepat untuk imunisasi anak?',
      description:
        'Imunisasi sebaiknya dimulai sejak bayi baru lahir dan dilanjutkan sesuai jadwal imunisasi yang direkomendasikan oleh dokter atau petugas kesehatan. Setiap jenis vaksin memiliki jadwal pemberian yang berbeda, sehingga penting untuk mengikuti jadwal yang telah ditentukan untuk memastikan perlindungan yang optimal.',
    },
    {
      title: 'Apakah anak yang sudah divaksin masih bisa terkena penyakit?',
      description:
        'Anak yang sudah divaksin tetap memiliki risiko terkena penyakit, namun kemungkinan tersebut sangat kecil. Jika anak yang sudah divaksin terkena penyakit, gejalanya biasanya lebih ringan dan risiko komplikasinya lebih rendah dibandingkan anak yang tidak divaksin.',
    },
    {
      title: 'Apa yang harus dilakukan jika anak melewatkan jadwal imunisasi?',
      description:
        'Jika anak melewatkan jadwal imunisasi, sebaiknya segera konsultasikan dengan dokter atau petugas kesehatan. Mereka akan membantu menyusun jadwal imunisasi susulan agar anak tetap mendapatkan perlindungan optimal. Jangan menunda untuk mendapatkan vaksin yang terlewat.',
    },
    {
      title: 'Apakah ada persiapan khusus sebelum anak diimunisasi?',
      description:
        'Sebelum anak diimunisasi, pastikan anak dalam kondisi sehat. Jika anak sedang sakit atau demam, sebaiknya tunda imunisasi sampai kondisi anak membaik. Informasikan kepada petugas kesehatan mengenai riwayat kesehatan anak dan alergi yang mungkin dimiliki anak.',
    },
    {
      title: 'Apakah imunisasi hanya untuk bayi dan anak-anak?',
      description:
        'Imunisasi tidak hanya penting untuk bayi dan anak-anak, tetapi juga untuk orang dewasa. Beberapa vaksin perlu diulang atau diperbarui pada usia dewasa untuk menjaga kekebalan terhadap penyakit tertentu. Konsultasikan dengan dokter mengenai imunisasi yang mungkin diperlukan di usia dewasa.',
    },
  ];

  return (
    <Background className="bg-[#eff6ff]">
      <section className="container flex flex-col place-items-center gap-8 p-8 pb-32 md:py-32">
        <H1 className="w-full text-center text-[#393939]">
          Pertanyaan yang Sering Diajukan
        </H1>
        <Accordion
          type="single"
          collapsible
          className="grid w-full grid-cols-1 gap-2 md:grid-cols-2"
        >
          {faqData.map((item, i) => (
            <AccordionItem
              key={item.title}
              value={`item-${i + 1}`}
              className="rounded-lg border bg-white p-2 shadow-sm"
            >
              <AccordionTrigger className="text-start">
                <File size={20} className="mr-2 min-w-fit" />
                <span className="w-full">{item.title}</span>
              </AccordionTrigger>
              <AccordionContent className="whitespace-pre-line rounded-md bg-slate-100 px-4 py-2">
                {item.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </Background>
  );
}

function SegeraDapatkan() {
  return (
    <Background>
      <section className="container flex flex-col place-items-center gap-8 p-8 pb-32 md:py-32">
        <div className="flex w-full items-center rounded-xl bg-[#eff6ff] p-4 md:p-8">
          <div className="h-fit">
            <H1 className="font-bold text-[#151d48]">
              Segera dapatkan harga terbaik kami!
            </H1>
            <P>Lakukan reservasi sekarang juga!</P>
            <div className="_BUTTON mt-6 flex w-full md:justify-start">
              <Link
                href="/reservasi-layanan"
                className="flex items-center justify-center gap-2 rounded-full bg-[#60b7eb] px-4 py-2 font-medium text-white duration-200 hover:brightness-95"
              >
                <PhoneCall size={20} className="h-full" />
                Lakukan Reservasi
              </Link>
            </div>
          </div>
          <div className="relative min-h-full w-1/2 self-stretch">
            <Image
              src={bidanImage}
              alt="Hero Section for Tentang Kami Page"
              sizes="100vw"
              className="absolute -bottom-8 right-0 hidden h-auto w-full max-w-[400px] overflow-visible md:block"
            />
          </div>
        </div>
      </section>
    </Background>
  );
}
