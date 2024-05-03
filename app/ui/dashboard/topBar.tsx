import SideNav from '@/app/ui/dashboard/sidenav';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Profile } from '@/components/Profile';
import AuthProvider from '@/components/AuthProvider';

export default function TopBar() {
  return (
    <div className="flex justify-between lg:pt-10">
      <Sheet>
        <SheetTrigger>
          <Bars3Icon className="my-auto h-5" />
        </SheetTrigger>
        <SheetContent side={'left'} className="w-[250px] p-0 md:w-[300px]">
          <SideNav />
        </SheetContent>
      </Sheet>
      <div className="font-base flex h-10 flex-row justify-end gap-3 text-right text-sm lg:hidden">
        <AuthProvider>
          <Profile />
        </AuthProvider>
        <div className="w-10 rounded-full bg-rme-pink-900"></div>
      </div>
    </div>
  );
}
