import Pagination from '@/app/ui/reservasi-layanan/pagination';
import Search from '@/app/ui/search';
import ReservasiTable from '@/app/ui/reservasi-layanan/table';
import { CreateKBForm } from '@/app/ui/reservasi-layanan/buttons';
import { urbanist } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';
import { Metadata } from 'next';
import dataReservasiPatient from '@/public/data/dataReservasi.json';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    allPatientKB?: any;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const dataReservasi = dataReservasiPatient.data;
  const totalPages = Math.ceil(dataReservasi.length / 5);
  // console.log(dataReservasi);
  return (
    <div className="w-full rounded-2xl bg-rme-pink-150 p-5">
      <div className="flex w-full justify-between">
        <p
          className={`${urbanist.className} my-auto align-middle text-xl font-bold  md:text-2xl`}
        >
          Tabel Reservasi Pasien
        </p>
        <CreateKBForm />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <ReservasiTable
          dataPatient={dataReservasi}
          // query={query}
          // currentPage={currentPage}
        />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
