import '@/components/global.css';
import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { inter } from '@/components/fonts';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { BetaDialog } from '@/components/popup';

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
        <Analytics />
        <SpeedInsights />
        {/* <BetaDialog /> */}
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
