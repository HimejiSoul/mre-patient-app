import '@/components/global.css';
import { Metadata } from 'next';
import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';
import { inter } from '@/components/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Ninasys',
    default: 'Ninasys - Reservasi Pasien',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased `}>
        {' '}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
