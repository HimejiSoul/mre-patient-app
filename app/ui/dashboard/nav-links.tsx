'use client';
import * as Icon from '../icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Dashboard', href: '/dashboard', icon: Icon.Home },
  {
    name: 'Reservasi Layanan',
    href: '/dashboard/reservasi-layanan',
    icon: Icon.KB,
  },
  {
    name: 'Pengaturan Akun',
    href: '/dashboard/pengaturan-akun',
    icon: Icon.KB,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="space-y-2">
      {links.map((link, i) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-pink-50 hover:text-pink-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-pink-100 text-rme-pink-900':
                  i === 0
                    ? pathname === link.href
                    : pathname.startsWith(link.href),
              },
            )}
          >
            <LinkIcon className="h-8 w-6" />
            <p className="hidden font-semibold md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
