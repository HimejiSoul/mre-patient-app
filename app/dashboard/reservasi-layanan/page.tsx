import ReservasiForm from '@/app/ui/reservasi-layanan/reservasi-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reservasi Layanan',
};

export default async function Page() {
  return <ReservasiForm />;
}
