import SideNav from '@/app/ui/dashboard/sidenav';
import Rightbar from '@/app/ui/dashboard/rightBar';
import { Bars3Icon } from '@heroicons/react/24/outline';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col overflow-hidden md:flex-row">
      <div className="hidden w-full flex-none md:block md:w-64">
        <SideNav />
      </div>
      <div className="flex justify-between px-4 py-2 md:hidden">
        <Sheet>
          <SheetTrigger>
            <Bars3Icon className="my-auto h-5 md:ml-4" />
          </SheetTrigger>
          <SheetContent side={'left'} className="w-[250px] p-0 md:w-[300px]">
            <SideNav />
          </SheetContent>
        </Sheet>
        <div className="text-right">
          <p className="text-sm font-bold">Rai Barokah Utari</p>
          <p className="text-xs text-rme-pink-900">Pasien</p>
        </div>
      </div>
      <div className="no-scrollbar relative flex w-full grow flex-col overflow-y-scroll p-4 md:p-8">
        {children}
      </div>
      <div className=" hidden w-fit xl:block xl:w-80">
        <Rightbar />
      </div>
    </div>
  );
}
