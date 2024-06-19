'use client';

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
import { usePathname } from 'next/navigation';

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
  const path = usePathname();
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
                    className={`${
                      link.href === path
                        ? 'bg-sky-50 text-blue-500'
                        : 'text-[#60b7eb]'
                    } rounded-lg px-4 py-2 text-center font-semibold transition duration-300 ease-out hover:bg-rme-blue-500/10`}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              {/* <li>
                <Link
                  className={`${
                    '/reservasi-layanan' === path
                      ? 'bg-sky-50 text-blue-500'
                      : 'text-[#60b7eb]'
                  } rounded-full border border-blue-500 px-4 py-2 text-center font-semibold transition duration-300 ease-out hover:bg-rme-blue-500/10`}
                  href={'/reservasi-layanan'}
                >
                  Lakukan Reservasi
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
}
