import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { signOut } from '@/auth';
import { LogOut } from '../icons';

export default function SideNav() {
  const LogOutIcon = LogOut;
  return (
    <div className="flex h-full flex-col p-4">
      <Link
        className="mb-10 flex h-10 items-end justify-start rounded-md bg-rme-pink-900 p-4 md:h-20"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex h-full flex-col space-x-2 md:justify-between md:space-x-0 md:space-y-2">
        <NavLinks />
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-[#F9E0DF] hover:text-[#DF645F] md:flex-none md:justify-start md:p-2 md:px-3">
            <LogOutIcon className="h-8 w-6 text-[#DF645F]" />
            <div className="hidden text-[#DF645F] md:block">Log Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
