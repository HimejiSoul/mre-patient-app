import KBForm from '@/app/ui/keluarga-berencana/kb-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reservasi Layanan',
};

export default async function Page() {
  return <KBForm />;
}
