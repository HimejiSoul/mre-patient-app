import PengaturanAkun from '@/app/ui/pengaturan-akun/create-form';
import KBForm from '@/app/ui/reservasi-layanan/reservasi-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pengaturan Akun',
};

export default async function Page() {
  return <PengaturanAkun />;
}
