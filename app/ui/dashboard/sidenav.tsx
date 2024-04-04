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
        className="mb-10 flex h-20 items-end justify-start rounded-md bg-rme-pink-900 p-4"
        href="/"
      >
        <div className="w-40 text-white">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex h-full flex-col justify-between space-x-0 space-y-2">
        <NavLinks />
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-start gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-[#F9E0DF] hover:text-[#DF645F] md:flex-none md:p-2 md:px-3">
            <LogOutIcon className="h-8 w-6 text-[#DF645F]" />
            <div className="text-[#DF645F]">Log Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
