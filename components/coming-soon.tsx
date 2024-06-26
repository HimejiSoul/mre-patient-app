import { urbanist } from '@/components/fonts';
import Image from 'next/image';
import devImage from '@/public/development-image.jpg';
import Link from 'next/link';

export default function ComingSoon({ pageName }: { pageName: string }) {
  return (
    <section className="flex h-[100dvh] flex-col items-center justify-center p-8">
      <Image
        src={devImage}
        width={300}
        alt="Picture of someone develop a website"
        className="mb-4 w-[200px] md:mb-8 md:w-[300px]"
      />
      <h1
        className={`${urbanist.className} text-center text-3xl font-bold text-[#2563eb]`}
      >
        COMING SOON
      </h1>
      <h2 className="text-center text-sm text-slate-500 md:text-lg">
        {pageName} page is currently under development.
      </h2>
      <Link
        href={'/'}
        className="mb-24 mt-4 rounded-lg bg-rme-blue-500 px-4 py-2 text-center text-sm text-white transition duration-300 ease-in-out hover:bg-rme-blue-500/80 md:mt-8 md:rounded-xl md:text-lg"
      >
        Back to Home
      </Link>
    </section>
  );
}
