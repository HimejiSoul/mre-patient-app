import SideNav from '@/app/ui/dashboard/sidenav';
import Rightbar from '@/app/ui/dashboard/rightBar';
import TopBar from '../ui/dashboard/topBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col overflow-hidden lg:flex-row">
      <div className="hidden w-full flex-none xl:block xl:w-64">
        <SideNav />
      </div>
      <div className="p-4 md:py-6 md:pl-8 md:pr-0 xl:hidden">
        <TopBar />
      </div>
      <div className="no-scrollbar relative flex w-full grow flex-col overflow-y-scroll p-4 md:p-8">
        {children}
      </div>
      <div className=" hidden w-fit lg:block lg:w-80">
        <Rightbar />
      </div>
    </div>
  );
}
