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
      <div className="container mx-auto mt-0 flex items-center justify-between px-6 py-1 md:py-3">
        <Link href="/" className="md:w-1/4">
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
            <Button
              variant="ghost"
              size={'icon'}
              className="justify-self-end md:hidden"
            >
              <Menu color="#60b7eb" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side={'right'}
            className="z-[80] flex w-3/4 flex-col gap-4 bg-white py-8 pt-16"
          >
            {links.map((link, i) => (
              <SheetClose key={i} asChild>
                <Link
                  href={link.href}
                  className={`${
                    link.href === path
                      ? 'bg-sky-50 text-rme-blue-500'
                      : 'text-slate-500'
                  } rounded-lg px-4 py-2 font-semibold hover:bg-[#60b7eb]/10`}
                >
                  {link.name}
                </Link>
              </SheetClose>
            ))}
            <SheetClose asChild>
              <Link
                href="/reservasi-layanan"
                className={`${
                  '/reservasi-layanan' === path
                    ? 'bg-sky-50 text-rme-blue-500'
                    : 'text-slate-500'
                } rounded-lg px-4 py-2 font-semibold hover:bg-[#60b7eb]/10`}
              >
                Reservasi Layanan
              </Link>
            </SheetClose>
          </SheetContent>
        </Sheet>
        <div className="hidden justify-self-center md:flex" id="menu">
          <nav>
            <ul className="flex gap-2">
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    className={`${
                      link.href === path
                        ? 'bg-sky-50 font-semibold text-rme-blue-500 hover:bg-rme-blue-500/10'
                        : 'text-slate-500 hover:bg-slate-500/10'
                    } rounded-lg px-4 py-2 text-center font-normal transition duration-300 ease-out`}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="hidden w-1/4 justify-end md:flex">
          <Link
            className={`${
              '/reservasi-layanan' === path
                ? 'bg-[#60b7eb] text-white hover:bg-[#60b7eb]/90'
                : 'text-[#60b7eb] hover:bg-rme-blue-500/10'
            } w-fit rounded-full border border-[#60b7eb] px-4 py-2 text-center font-semibold transition duration-300 ease-out`}
            href={'/reservasi-layanan'}
          >
            Lakukan Reservasi
          </Link>
        </div>
      </div>
    </nav>
  );
}
