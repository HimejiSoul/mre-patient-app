import '@/app/ui/global.css';
import { Footer } from '@/components/landing/footer';
import { Navbar } from '@/components/landing/navbar';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
