import KBForm from '@/app/ui/reservasi-layanan/reservasi-form';
import { SectionTitle } from '@/app/ui/section-title';

export default async function Page() {
  return (
    <main>
      <SectionTitle>Tambah Pasien Layanan Keluarga Berencana</SectionTitle>
      <KBForm />
    </main>
  );
}
