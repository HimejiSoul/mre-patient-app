import { urbanist } from '@/components/fonts';

export default function Page() {
  return (
    <section className="flex h-[100dvh] flex-col items-center justify-center p-8">
      <h1 className={`${urbanist.className} text-3xl font-bold text-[#2563eb]`}>
        COMING SOON
      </h1>
      <h2 className="text-slate-500">
        This page is currently under development.
      </h2>
    </section>
  );
}
