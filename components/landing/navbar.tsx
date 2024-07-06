'use client';

import * as React from 'react';
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
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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

const services = [
  {
    name: 'Layanan Ibu',
    href: '/layanan/layanan-ibu',
  },
  {
    name: 'Persalinan',
    href: '/layanan/persalinan',
  },
  {
    name: 'Imunisasi',
    href: '/layanan/imunisasi',
  },
  {
    name: 'Keluarga Berencana',
    href: '/layanan/keluarga-berencana',
  },
  {
    name: 'Periksa Kehamilan',
    href: '/layanan/periksa-kehamilan',
  },
  {
    name: 'Nifas',
    href: '/layanan/nifas',
  },
  {
    name: 'Layanan Anak',
    href: '/layanan/layanan-anak',
  },
];

export function Navbar() {
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
        <MobileNav />
        <NavbarToto />
        {/* <WebNav /> */}
      </div>
    </nav>
  );
}

function MobileNav() {
  const path = usePathname();
  return (
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
        {links.map((link, i) =>
          link.href === '/layanan' ? (
            <Accordion
              key={i}
              type="single"
              collapsible
              className={`${
                link.href === path
                  ? 'bg-sky-50 text-rme-blue-500'
                  : 'text-slate-500'
              } rounded-lg px-4 py-2 font-semibold hover:bg-[#60b7eb]/10`}
            >
              <AccordionItem className="border-0" value="item-1">
                <AccordionTrigger className="py-0 font-semibold hover:no-underline">
                  {link.name}
                </AccordionTrigger>
                <AccordionContent className="mt-4 pb-0">
                  {services.map((service, i) => (
                    <SheetClose key={i} asChild>
                      <Link
                        href={service.href}
                        className={`${
                          service.href === path
                            ? 'bg-sky-50 text-rme-blue-500'
                            : 'text-slate-500'
                        } w-full rounded-lg px-4 py-2 font-medium hover:bg-[#60b7eb]/10`}
                      >
                        {service.name}
                      </Link>
                    </SheetClose>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : (
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
          ),
        )}
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
  );
}

export function NavbarToto() {
  const path = usePathname();
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={
                  (navigationMenuTriggerStyle(),
                  `${
                    '/' === path
                      ? 'bg-sky-50  text-rme-blue-500 hover:bg-rme-blue-500/10'
                      : 'text-slate-500 hover:bg-slate-500/10'
                  } rounded-lg px-4 py-2 text-center font-normal transition duration-300 ease-out`)
                }
              >
                Beranda
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={`${
                path.startsWith('/layanan')
                  ? 'bg-sky-50 text-rme-blue-500 hover:bg-rme-blue-500/10'
                  : 'text-slate-500 hover:bg-slate-500/10'
              } rounded-lg px-4 py-2 text-center font-normal transition duration-300 ease-out`}
            >
              Layanan
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {services.map((service) => (
                  <ListItem
                    key={service.name}
                    title={service.name}
                    href={service.href}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/tentang-kami" legacyBehavior passHref>
              <NavigationMenuLink
                className={
                  (navigationMenuTriggerStyle(),
                  `${
                    '/tentang-kami' === path
                      ? 'bg-sky-50 text-rme-blue-500 hover:bg-rme-blue-500/10'
                      : 'text-slate-500 hover:bg-slate-500/10'
                  } rounded-lg px-4 py-2 text-center font-normal transition duration-300 ease-out`)
                }
              >
                Tentang Kami
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
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
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-300 hover:bg-slate-500/10',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
