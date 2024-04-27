import Pagination from '@/app/ui/reservasi-layanan/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/reservasi-layanan/table';
import { CreateKBForm } from '@/app/ui/reservasi-layanan/buttons';
import { urbanist } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);
  return (
    <div className="w-full rounded-2xl bg-rme-pink-150 p-5">
      <div className="flex w-full justify-between">
        <p
          className={`${urbanist.className} text-mdfont-bold my-auto align-middle  md:text-2xl`}
        >
          Tabel Reservasi Pasien
        </p>
        <CreateKBForm />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
