import { useState } from "react";
import Sidebar from "../partials/navs/Sidebar";
import Topbar from "../partials/navs/Topbar";

type DashboardLayoutProps = {
  component: React.ReactNode;
};

const DashboardLayout = ({ component }: DashboardLayoutProps) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="theme-surface flex min-h-screen min-w-0 overflow-x-hidden font-Outfit">
      <Sidebar
        isOpen={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
      />

      <div className="theme-content min-w-0 flex-1 px-2 pt-4 sm:px-6 sm:pt-5 md:pl-[280px] md:pr-8">
        <Topbar onOpenSidebar={() => setMobileSidebarOpen(true)} />

        <div className="mt-6 sm:mt-8">{component}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
