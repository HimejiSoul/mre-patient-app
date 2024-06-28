import Image from 'next/image';
import NotFoundImage from '@/public/404-NotFound.png';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex h-[100dvh] flex-col items-center justify-center p-8">
      <Image
        src={NotFoundImage}
        alt="Picture of someone develop a website"
        sizes="100vw"
        className="h-auto w-[80%] object-contain lg:h-[300px]"
      />
      <h2 className="text-center text-sm text-slate-500 md:text-lg">
        This page could not be found :(
      </h2>
      <Link
        href={'/'}
        className="mb-32 mt-4 rounded-lg bg-[#242424] px-4 py-2 text-center text-sm text-white transition duration-300 ease-in-out hover:brightness-75 md:mt-8 md:rounded-xl md:text-lg"
      >
        Back to Home
      </Link>
    </section>
  );
}
