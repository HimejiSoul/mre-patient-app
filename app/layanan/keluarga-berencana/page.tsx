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

import layananImage from '@/public/beranda/layanan/keluarga-berencana.png';
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
            Layanan Keluarga Berencana
          </p>
          <H1 className="mt-2 animate-fade-in-top text-[#393939] duration-1000">
            Selamat Menanti Kelahiran Si Kecil dengan
            <span className="text-[#60b7eb]"> Layanan Keluarga Berencana</span>
          </H1>
          <P className="animate-fade-in-top text-start duration-1000">
            Layanan Keluarga Berencana kami dirancang untuk memberikan
            perlindungan terbaik bagi keluarga Anda sejak dini. Dengan
            menggunakan metode yang aman dan terpercaya, kami memastikan setiap
            keluarga mendapatkan pengetahuan dan dukungan maksimal untuk
            merencanakan kehamilan dan menjaga kesehatan reproduksi.
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
      title: 'Apa itu Keluarga Berencana?',
      description:
        'Keluarga Berencana adalah program yang dirancang untuk membantu pasangan suami istri dalam merencanakan dan mengatur jumlah serta jarak kelahiran anak. Ini bertujuan untuk meningkatkan kesejahteraan keluarga dan kesehatan ibu serta anak.',
    },
    {
      title: 'Mengapa Keluarga Berencana penting?',
      description:
        'Keluarga Berencana penting untuk memastikan kesejahteraan keluarga secara keseluruhan. Dengan merencanakan kehamilan, pasangan dapat memberikan perhatian yang lebih baik kepada anak-anak mereka, menjaga kesehatan ibu, serta mengelola sumber daya keluarga dengan lebih efektif.',
    },
    {
      title: 'Metode Keluarga Berencana apa saja yang tersedia?',
      description:
        'Ada berbagai metode Keluarga Berencana yang dapat dipilih sesuai kebutuhan dan kenyamanan pasangan, termasuk metode hormonal (pil, suntik, implan), alat kontrasepsi dalam rahim (AKDR/IUD), kondom, serta metode alami seperti kalender dan menyusui. Konsultasikan dengan tenaga kesehatan untuk memilih metode yang paling tepat.',
    },
    {
      title: 'Apakah metode Keluarga Berencana aman?',
      description:
        'Ya, metode Keluarga Berencana yang disediakan oleh fasilitas kesehatan telah melalui uji klinis dan terbukti aman serta efektif. Efek samping yang mungkin terjadi biasanya ringan dan sementara. Konsultasikan dengan dokter untuk informasi lebih lanjut tentang setiap metode.',
    },
    {
      title:
        'Kapan waktu yang tepat untuk mulai menggunakan Keluarga Berencana?',
      description:
        'Pasangan dapat mulai menggunakan metode Keluarga Berencana setelah menikah dan kapan saja mereka merasa siap untuk menunda atau merencanakan kehamilan. Penting untuk mendiskusikan dengan dokter atau petugas kesehatan untuk menentukan waktu yang tepat sesuai kondisi dan kebutuhan pasangan.',
    },
    {
      title: 'Apa yang harus dilakukan jika terjadi kehamilan tak terduga?',
      description:
        'Jika terjadi kehamilan yang tidak direncanakan, segera konsultasikan dengan dokter atau petugas kesehatan untuk mendapatkan nasihat dan dukungan yang diperlukan. Mereka akan membantu dalam merencanakan langkah selanjutnya untuk memastikan kesehatan ibu dan bayi.',
    },
    {
      title: 'Apakah Keluarga Berencana hanya untuk wanita?',
      description:
        'Tidak, Keluarga Berencana adalah tanggung jawab bersama antara suami dan istri. Ada metode yang bisa digunakan oleh pria seperti kondom dan vasektomi. Dukungan dan partisipasi aktif dari kedua pasangan sangat penting untuk keberhasilan program Keluarga Berencana.',
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
