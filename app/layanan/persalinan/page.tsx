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

import layananImage from '@/public/beranda/layanan/persalinan.png';
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
            Layanan Persalinan
          </p>
          <H1 className="mt-2 animate-fade-in-top text-[#393939] duration-1000">
            <span className="text-[#60b7eb]"> Layanan Persalinan</span> yang
            Peduli dan Profesional
          </H1>
          <P className="animate-fade-in-top text-start duration-1000">
            Layanan Persalinan yang Aman dan Terpercaya. Layanan periksa
            kehamilan kami didesain untuk memberikan perlindungan terbaik dalam
            proses kehamilan. Kami menggunakan metode yang aman dan terpercaya
            untuk memastikan setiap ibu mendapatkan perawatan kesehatan yang
            optimal dan pengetahuan yang dibutuhkan selama masa kehamilan.
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
      title: 'Apa itu Layanan Persalinan?',
      description:
        'Layanan Persalinan adalah program yang dirancang untuk memberikan perawatan kesehatan terbaik bagi ibu dan bayi selama proses persalinan. Tujuannya adalah untuk memastikan kesehatan optimal ibu hamil dan bayi serta memberikan dukungan dalam menghadapi perubahan fisik dan emosional selama persalinan.',
    },
    {
      title: 'Mengapa Layanan Persalinan penting?',
      description:
        'Layanan Persalinan penting untuk memantau dan mengelola proses persalinan dengan aman dan efektif. Dengan memanfaatkan layanan ini, ibu hamil dapat memperoleh perawatan medis yang sesuai, dukungan emosional, serta pendampingan yang diperlukan untuk memastikan kelahiran yang sehat dan aman.',
    },
    {
      title: 'Apa saja layanan persalinan yang tersedia?',
      description:
        'Ada berbagai layanan persalinan yang dapat dipilih sesuai dengan kebutuhan ibu hamil, termasuk pemantauan kesehatan ibu dan bayi selama persalinan, dukungan kebidanan, pemilihan posisi persalinan, serta persiapan pasca persalinan. Konsultasikan dengan ahli kesehatan untuk memilih layanan yang paling sesuai untuk Anda.',
    },
    {
      title: 'Apakah layanan persalinan aman?',
      description:
        'Ya, layanan persalinan yang disediakan oleh penyedia layanan telah diuji dan terbukti aman serta bermanfaat bagi kesehatan ibu hamil dan bayi. Dukungan dari tenaga medis dan ahli yang terlatih membantu memastikan kelahiran yang aman sesuai dengan kebutuhan Anda.',
    },
    {
      title: 'Kapan waktu yang tepat untuk memanfaatkan layanan persalinan?',
      description:
        'Ibu hamil dapat memanfaatkan layanan persalinan sejak awal kehamilan atau kapan pun merasa perlu mendapatkan perawatan tambahan selama proses persalinan. Konsultasikan dengan penyedia layanan kesehatan untuk mendapatkan bantuan yang tepat sesuai dengan kebutuhan Anda.',
    },
    {
      title:
        'Apa yang harus dilakukan jika diperlukan bantuan dalam layanan persalinan?',
      description:
        'Jika memerlukan bantuan tambahan dalam layanan persalinan, segera konsultasikan dengan penyedia layanan kesehatan atau ahli kebidanan untuk mendapatkan nasihat dan dukungan yang diperlukan. Mereka akan membantu dalam menyediakan solusi yang tepat untuk proses persalinan Anda.',
    },
    {
      title: 'Apakah Layanan Persalinan hanya untuk ibu?',
      description:
        'Tidak, Layanan Persalinan melibatkan tanggung jawab bersama antara ibu, keluarga, dan penyedia layanan kesehatan. Dukungan serta partisipasi aktif dari semua pihak yang terlibat sangat penting untuk memastikan kelahiran yang aman dan mendukung bagi ibu hamil dan keluarga.',
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
                <File size={20} className="mr-2" />
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
