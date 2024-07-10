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

import layananImage from '@/public/beranda/layanan/nifas.png';
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
            Layanan Nifas
          </p>
          <H1 className="mt-2 animate-fade-in-top text-[#393939] duration-1000">
            Panduan
            <span className="text-[#60b7eb]"> Layanan Nifas</span> untuk Ibu dan
            Si Kecil
          </H1>
          <P className="animate-fade-in-top text-start duration-1000">
            Layanan Nifas kami dirancang untuk memberikan perlindungan terbaik
            bagi keluarga Anda pasca kelahiran. Dengan menggunakan metode yang
            aman dan terpercaya, kami memastikan setiap ibu mendapatkan
            pengetahuan dan dukungan maksimal untuk pemulihan pasca melahirkan
            dan perawatan kesehatan yang optimal.
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
      title: 'Apa itu Layanan Nifas?',
      description:
        'Layanan Nifas adalah program yang dirancang untuk membantu ibu dalam pemulihan pasca kelahiran dan merawat bayi baru. Ini bertujuan untuk memastikan kesehatan optimal ibu dan bayi serta memberikan dukungan dalam menjalani masa nifas dengan baik.',
    },
    {
      title: 'Mengapa Layanan Nifas penting?',
      description:
        'Layanan Nifas penting untuk memastikan pemulihan yang baik bagi ibu pasca kelahiran dan perawatan bayi baru yang optimal. Dengan memanfaatkan layanan ini, ibu dapat mendapatkan perawatan medis, dukungan emosional, dan informasi yang diperlukan untuk menghadapi perubahan fisik dan emosional pasca melahirkan.',
    },
    {
      title: 'Apa saja layanan nifas yang tersedia?',
      description:
        'Ada berbagai layanan nifas yang dapat dipilih sesuai dengan kebutuhan ibu dan bayi, termasuk perawatan kesehatan pasca kelahiran, konsultasi menyusui, dukungan emosional, serta edukasi tentang perawatan bayi. Konsultasikan dengan ahli untuk memilih layanan yang paling sesuai untuk Anda.',
    },
    {
      title: 'Apakah layanan nifas aman?',
      description:
        'Ya, layanan nifas yang disediakan oleh penyedia layanan telah diuji dan terbukti aman serta bermanfaat bagi pemulihan ibu pasca kelahiran. Dukungan dari tenaga medis dan ahli yang terlatih membantu memastikan layanan yang tepat sesuai dengan kebutuhan ibu dan bayi.',
    },
    {
      title: 'Kapan waktu yang tepat untuk memanfaatkan layanan nifas?',
      description:
        'Ibu dapat memanfaatkan layanan nifas segera setelah melahirkan atau kapan pun mereka merasa membutuhkan dukungan tambahan dalam masa nifas. Konsultasikan dengan penyedia layanan untuk mendapatkan bantuan yang tepat sesuai dengan kebutuhan Anda.',
    },
    {
      title: 'Apa yang harus dilakukan jika diperlukan bantuan nifas?',
      description:
        'Jika memerlukan bantuan dalam pemulihan pasca kelahiran atau perawatan bayi, segera konsultasikan dengan penyedia layanan atau ahli untuk mendapatkan nasihat dan dukungan yang diperlukan. Mereka akan membantu dalam menyediakan solusi yang tepat untuk kebutuhan Anda.',
    },
    {
      title: 'Apakah Layanan Nifas hanya untuk ibu?',
      description:
        'Tidak, Layanan Nifas adalah tanggung jawab bersama antara ibu, keluarga, dan penyedia layanan. Dukungan serta partisipasi aktif dari semua pihak yang terlibat sangat penting untuk memastikan pemulihan ibu dan perawatan bayi yang baik secara menyeluruh.',
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
