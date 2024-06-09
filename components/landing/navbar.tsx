import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/bidan-nina-logo.png';

const links = [
  {
    name: 'Beranda',
    href: '/',
  },
  {
    name: 'Layanan',
    href: '/layanan',
  },
  {
    name: 'Tentang Kami',
    href: '/tentang-kami',
  },
];

export function Navbar() {
  return (
    <nav
      id="header"
      className="sticky top-0 z-50 w-full bg-white py-2 drop-shadow"
    >
      <div className="container mx-auto mt-0 flex w-full flex-wrap items-center justify-between px-6 py-1 md:py-3">
        <Link href="/">
          <Image
            priority
            src={Logo}
            width={32}
            height={32}
            alt="Logo Bidan Nina"
          />
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size={'icon'} className="md:hidden">
              <Menu color="#2563eb" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side={'right'}
            className="flex w-3/4 flex-col gap-4 bg-white py-8 pt-16"
          >
            {links.map((link, i) => (
              <SheetClose key={i} asChild>
                <Link
                  href={link.href}
                  className="rounded-lg bg-white py-2 text-center font-semibold text-rme-blue-500 hover:bg-rme-blue-500/10"
                >
                  {link.name}
                </Link>
              </SheetClose>
            ))}
          </SheetContent>
        </Sheet>
        <div
          className="order-3 hidden w-full md:order-1 md:flex md:w-auto md:items-center"
          id="menu"
        >
          <nav>
            <ul className="flex gap-2">
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    className="rounded-lg bg-white px-4 py-2 text-center font-semibold text-blue-300 hover:bg-rme-blue-500/10"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
}
