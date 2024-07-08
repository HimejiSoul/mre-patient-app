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

import layananIbuImage from '@/public/layanan-ibu/hero.png';
import pijatKehamilanImage from '@/public/layanan-ibu/pijat-kehamilan.png';
import pijatLaktasiImage from '@/public/layanan-ibu/pijat-laktasi.png';
import pijatOksitosinImage from '@/public/layanan-ibu/pijat-oksitosin.png';
import pijatNifasImage from '@/public/layanan-ibu/pijat-nifas.png';
import bidanImage from '@/public/layanan-ibu/bidan-1.png';
import { File, ArrowRight, PhoneCall } from 'lucide-react';

// PAGE LAYOUT
import { H1, H2, P } from '@/components/typography';
import { Background } from '@/components/page-wrapper';

export default function Page() {
  return (
    <>
      <LayananIbu />
      <PijatKehamilan />
      <PijatLaktasi />
      <PijatOksitosin />
      <PijatNifas />
      <FAQ />
      <SegeraDapatkan />
      <WhatsappButton />
    </>
  );
}

function LayananIbu() {
  return (
    <Background className="bg-[#eff6ff]">
      <header className="container flex flex-col place-items-center gap-8 p-8 pb-32 md:flex-row md:gap-16 md:py-32">
        <div className="order-last md:order-first">
          <p
            className={`${urbanist.className}  w-fit animate-fade-in-top rounded-lg bg-white p-2 px-4 text-[#60b7eb] drop-shadow-md duration-2000`}
          >
            Layanan Ibu
          </p>
          <H1 className="mt-2 animate-fade-in-top text-[#393939] duration-1000">
            Selamat menanti <span className="text-[#60b7eb]">kelahiran</span> si
            kecil, Bun!
          </H1>
          <P className="animate-fade-in-top duration-1000">
            Pelayanan kesehatan yang optimal dengan bidan profesional yang
            berdedikasi tinggi, siap mendampingi Anda dalam setiap tahap
            perawatan dan kesehatan ibu dan anak.
          </P>
        </div>
        <Image
          src={layananIbuImage}
          alt="Hero Section for Tentang Kami Page"
          sizes="100vw"
          className="h-auto w-[80%] max-w-[500px] animate-fade-in-right object-contain duration-1000 sm:w-[60%] md:w-[40%]"
        />
      </header>
    </Background>
  );
}

function PijatKehamilan() {
  return (
    <Background>
      <section className="container flex flex-col place-items-center gap-8 p-8 pb-32 md:flex-row md:gap-16 md:py-32">
        <Image
          src={pijatKehamilanImage}
          alt="Hero Section for Tentang Kami Page"
          sizes="100vw"
          className="h-auto w-[80%] max-w-[500px] object-contain sm:w-[60%] md:w-[40%]"
        />
        <div className="space-y-4">
          <p
            className={`${urbanist.className} w-fit animate-fade-in-top rounded-lg bg-[#60b7eb] p-2 px-4 text-white drop-shadow-md duration-2000`}
          >
            Layanan Ibu
          </p>
          <H1 className="mt-2 text-[#393939]">
            Pijat <span className="text-[#60b7eb]">Kehamilan</span>
          </H1>
          <P>
            Pijat kehamilan atau pijat prenatal ialah pijat yang dilakukan oleh
            bidan terlatih untuk para Ibu di masa-masa kehamilan. Seperti pijat
            pada umumnya, pijatan ini bertujuan meningkatkan sirkulasi darah,
            menghilangkan rasa pegal pada otot-otot tubuh, dan membuatnya lebih
            rileks.
          </P>
        </div>
      </section>
    </Background>
  );
}

function PijatLaktasi() {
  return (
    <Background>
      <section className="container flex flex-col place-items-center gap-8 p-8 pb-32 md:flex-row md:gap-16">
        <Image
          src={pijatLaktasiImage}
          alt="Hero Section for Tentang Kami Page"
          sizes="100vw"
          className="h-auto w-[80%] max-w-[500px] object-contain sm:w-[60%] md:w-[40%]"
        />
        <div className="space-y-4 md:order-first">
          <p
            className={`${urbanist.className} w-fit animate-fade-in-top rounded-lg bg-[#60b7eb] p-2 px-4 text-white drop-shadow-md duration-2000`}
          >
            Layanan Ibu
          </p>
          <H1 className="mt-2 text-[#393939]">
            Pijat <span className="text-[#60b7eb]">Laktasi</span>
          </H1>
          <P>
            piijat laktasi adalah pemijatan yang dilakukan pada beberapa bagian
            tubuh, yaitu kepala, leher, bahu, punggung, dan payudara. Pijat
            laktasi merupakan salah satu langkah untuk memperlancar ASI
          </P>
        </div>
      </section>
    </Background>
  );
}

function PijatOksitosin() {
  return (
    <Background>
      <section className="container flex flex-col place-items-center gap-8 p-8 pb-32 md:flex-row md:gap-16">
        <Image
          src={pijatOksitosinImage}
          alt="Hero Section for Tentang Kami Page"
          sizes="100vw"
          className="h-auto w-[80%] max-w-[500px] object-contain sm:w-[60%] md:w-[40%]"
        />
        <div className="space-y-4">
          <p
            className={`${urbanist.className} w-fit animate-fade-in-top rounded-lg bg-[#60b7eb] p-2 px-4 text-white drop-shadow-md duration-2000`}
          >
            Layanan Ibu
          </p>
          <H1 className="mt-2 text-[#393939]">
            Pijat <span className="text-[#60b7eb]">Oksitosin</span>
          </H1>
          <P>
            Pijat oksitosin adalah suatu tindakan pemijatan tulang belakang
            mulai dari nervus ke 5 - 6 sampai scapula yang akan mempercepat
            kerja saraf parasimpatis untuk menyampaikan perintah ke otak bagian
            belakang sehingga oksitosin keluar. Pijat oksitosin ini dilakukan
            untuk merangsang refleks oksitosin Atau let down reflex. Biasanay
            dilakukan untuk merangsang kontraksi pada saat proses bersalin atau
            dilakukan pada saat pijat laktasi untuk membantu meperlancar
            pengeluaran ASI.
          </P>
        </div>
      </section>
    </Background>
  );
}

function PijatNifas() {
  return (
    <Background>
      <section className="container flex flex-col place-items-center gap-8 p-8 pb-32 md:flex-row md:gap-16">
        <Image
          src={pijatNifasImage}
          alt="Hero Section for Tentang Kami Page"
          sizes="100vw"
          className="h-auto w-[80%] max-w-[500px] object-contain sm:w-[60%] md:w-[40%]"
        />
        <div className="space-y-4 md:order-first">
          <p
            className={`${urbanist.className} w-fit animate-fade-in-top rounded-lg bg-[#60b7eb] p-2 px-4 text-white drop-shadow-md duration-2000`}
          >
            Layanan Ibu
          </p>
          <H1 className="mt-2 text-[#393939]">
            Pijat <span className="text-[#60b7eb]">Nifas</span>
          </H1>
          {/* TODO: Siapa tau masih di pakai :( */}
          {/* <ul className="grid list-inside list-disc grid-cols-1 marker:text-[#60b7eb]">
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-[#60b7eb]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-[#60b7eb]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-[#60b7eb]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </li>
          </ul> */}
          <P>
            Pijat Nifas l ialah pijat yang dilakukan oleh bidan terlatih untuk
            para Ibu di pada masa setelah melahirkan. Seperti pijat pada
            umumnya, pijatan ini bertujuan meningkatkan sirkulasi darah,
            menghilangkan rasa pegal pada otot-otot tubuh, dan membuatnya lebih
            rileks.
          </P>
        </div>
      </section>
    </Background>
  );
}

function FAQ() {
  const faqData = [
    {
      title: 'Apakah normal bila ibu hamil mengalami masalah pencernaan?',
      description:
        'Penyebab utama dari sembelit saat hamil adalah tingginya kadar hormon progesteron di dalam tubuh. Meski merupakan hal yang wajar, kenaikan kadar hormon progesteron selama masa kehamilan ini menyebabkan otot-otot usus mengalami relaksasi dan bergerak lebih lambat. Maka dari itu, feses di dalam usus menjadi sulit keluar. Sehingga ibu hamil disarankan untuk minum dan makanan buah dan sayur yang cukup agar feses tidak keras dan mudah keluar.',
    },
    {
      title: 'Berapa berat badan ideal selama hamil?',
      description:
        'Untuk kenaikan Berat badan ibu hamil harus mengetahui IMT (indesk Masa Tubuh). Rumus menghitung IMT=Berat Badan (kg) dibagi Tinggi Badan (m)2.\n- Bagi ibu yang memiliki berat badan Under weight IMT < 18,5  kenaikan BB selama kehamilan 12,5-18,5 kg.\n- Bagi Ibu hamil memiliki IMT normal atau IMT 18,5-24,9 kg/m2 sebelum hamil, disarankan untuk menaikkan berat badan 11,3-15,9 kilogram selama hamil.\n- Untuk ibu yang memiliki berat badan di atas normal atau IMT 25-29,9 kg/m2, disarankan untuk menaikkan berat badan 7,5-11,5 kilogram Untuk Ibu hamil dengan IMT Obesitas > 30 kh/m2 disarankan kenaikan BB selama hamil 5-9 kg.',
    },
    {
      title: 'Apakah persalinan akan merusak vagina?',
      description:
        'Setiap wanita yang akan melahirkan normal /pervagina memiliki risiko mengalami robekan pada vagina. Hal ini terjadi karena pada saat melahirkan bayinya, jalan lahir ibu akan meregang dan mengalami tekanan yang sangat kuat ketika hendak mendorong bayi keluar.',
    },
    {
      title: 'Apakah ibu hamil akan buang air besar saat proses persalinan?',
      description:
        'Bisa saja mengeluarkan tinja saat proses persalinan, Saat mengejan, Bumil akan menggunakan otot-otot yang dipakai untuk mengeluarkan tinja saat BAB. Otot-otot tersebut sangat kuat dan efektif untuk mendorong bayi melewati jalan lahir. Karena menggunakan otot yang sama.',
    },
    {
      title: 'Apakah normal bila vagina mengeluarkan cairan selama hamil?',
      description:
        'Keluarnya cairan vagina saat hamil umumnya adalah hal yang normal. Meski begitu, Bumil juga perlu waspada jika cairan vagina yang keluar mengalami perubahan warna atau aroma, karena hal ini bisa menandakan adanya gangguan kesehatan.\n\nKeluarnya cairan vagina disebut juga sebagai leukorrhea atau keputihan. Saat hamil, terjadi peningkatan kadar hormon yang dapat meningkatkan produksi cairan vagina. Keputihan ini biasanya tidak berbahaya. Namun, pada kondisi tertentu, cairan vagina dapat muncul akibat infeksi sehingga memerlukan penanganan dokter.',
    },
    {
      title: 'Cairan Vagina Normal Selama Kehamilan',
      description:
        'Cairan vagina berfungsi untuk mencegah masuknya infeksi dari vagina ke rahim. Di dalam cairan vagina terdapat sel-sel yang telah menua dari vagina dan leher rahim, serta bakteri normal vagina.\n\nBerikut adalah beberapa ciri-ciri cairan vagina normal yang perlu Bumil ketahui:\n- Cairan terasa encer seperti lendir\n- Cairan berwarna jernih atau putih susu\n- Cairan tidak beraroma atau hanya sedikit berbau\n\nVolume cairan vagina biasanya akan semakin bertambah menjelang persalinan. Beberapa saat sebelum memasuki proses persalinan, cairan akan mengental dan mengandung sedikit darah.',
    },
    {
      title: 'Mengenali Cairan Vagina yang Tidak Normal pada Ibu Hamil',
      description:
        'Perubahan cairan vagina bisa disebabkan oleh infeksi jamur (candidiasis). Infeksi ini cukup sering terjadi pada wanita hamil karena adanya perubahan kadar hormon yang mengganggu keseimbangan pH di vagina dan mempermudah tumbuhnya jamur di vagina.\n\nBeberapa ciri cairan vagina tidak normal yang disebabkan oleh infeksi jamur adalah:\n- Cairan vagina berwarna kekuningan atau kehijauan\n- Cairan memiliki aroma tak sedap\n- Keluarnya cairan disertai gejala gatal dan perih pada kemaluan, atau rasa sakit saat buang air kecil\n\nSelain akibat infeksi jamur, munculnya cairan vagina tidak normal juga bisa disebabkan oleh beragam penyakit, seperti vagonosis bakteri dan infeksi menular seksual yang meliputi gonorea, klamidia, hingga trikomoniasis.',
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
