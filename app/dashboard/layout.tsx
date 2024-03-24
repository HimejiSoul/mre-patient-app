import SideNav from '@/app/ui/dashboard/sidenav';
import Rightbar from '@/app/ui/dashboard/rightBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden w-full flex-none md:block md:w-64">
        <SideNav />
      </div>
      <div className="no-scrollbar relative flex w-full grow flex-col overflow-y-scroll p-8">
        {children}
      </div>
      <div className=" hidden w-fit xl:block xl:w-80">
        <Rightbar />
      </div>
    </div>
  );
}
