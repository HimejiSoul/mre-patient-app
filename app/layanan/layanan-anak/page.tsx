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

import layananImage from '@/public/beranda/layanan/layanan-anak.png';
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
            Layanan Anak
          </p>
          <H1 className="mt-2 animate-fade-in-top text-[#393939] duration-1000">
            Selamat manjaga si kecil dengan
            <span className="text-[#60b7eb]"> Layanan Anak</span>
          </H1>
          <P className="animate-fade-in-top text-start duration-1000">
            Layanan Anak kami dirancang untuk memberikan perlindungan terbaik
            bagi keluarga Anda sejak dini. Dengan menggunakan metode yang aman
            dan terpercaya, kami memastikan setiap keluarga mendapatkan
            pengetahuan dan dukungan maksimal untuk merencanakan kehamilan dan
            menjaga kesehatan reproduksi.
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
      title: 'Apa itu Layanan Anak?',
      description:
        'Layanan Anak adalah program yang dirancang untuk membantu orang tua dalam merencanakan dan mengelola aspek-aspek penting dalam perawatan dan perkembangan anak-anak mereka. Ini bertujuan untuk meningkatkan kesejahteraan anak-anak dan mendukung keluarga dalam memberikan perhatian yang terbaik.',
    },
    {
      title: 'Mengapa Layanan Anak penting?',
      description:
        'Layanan Anak penting untuk memastikan perkembangan dan kesejahteraan optimal anak-anak. Dengan memanfaatkan layanan ini, orang tua dapat memberikan perhatian yang tepat sesuai dengan kebutuhan anak-anak mereka, mendukung tumbuh kembang mereka dengan baik, dan mengelola peran orang tua dengan lebih efektif.',
    },
    {
      title: 'Apa saja layanan anak yang tersedia?',
      description:
        'Ada berbagai layanan anak yang dapat dipilih sesuai dengan kebutuhan dan situasi keluarga, termasuk perawatan kesehatan anak, pendidikan anak usia dini, dukungan perkembangan, serta layanan sosial dan psikologis. Konsultasikan dengan ahli untuk memilih layanan yang paling sesuai untuk anak Anda.',
    },
    {
      title: 'Apakah layanan anak aman?',
      description:
        'Ya, layanan anak yang disediakan oleh penyedia layanan telah diuji dan terbukti aman serta bermanfaat bagi perkembangan anak. Dukungan dari ahli dan profesional yang terlatih membantu memastikan layanan yang tepat sesuai dengan kebutuhan anak.',
    },
    {
      title: 'Kapan waktu yang tepat untuk memanfaatkan layanan anak?',
      description:
        'Orang tua dapat memanfaatkan layanan anak sejak dini, sejak kelahiran anak mereka atau kapan pun mereka merasa perlu mendapatkan dukungan dalam memahami dan merespons kebutuhan anak. Konsultasikan dengan penyedia layanan untuk mendapatkan bantuan yang sesuai.',
    },
    {
      title: 'Apa yang harus dilakukan jika diperlukan bantuan anak?',
      description:
        'Jika memerlukan bantuan dalam perawatan atau perkembangan anak, segera konsultasikan dengan penyedia layanan atau ahli untuk mendapatkan nasihat dan dukungan yang diperlukan. Mereka akan membantu dalam menyediakan solusi yang tepat untuk kebutuhan anak Anda.',
    },
    {
      title: 'Apakah Layanan Anak hanya untuk orang tua?',
      description:
        'Tidak, Layanan Anak adalah tanggung jawab bersama antara orang tua dan penyedia layanan. Dukungan dan partisipasi aktif dari semua pihak yang terlibat sangat penting untuk membantu perkembangan dan kesejahteraan anak secara menyeluruh.',
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
