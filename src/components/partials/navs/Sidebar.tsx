import { Plus, Layers2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { sidebarItems } from "../../../data/Sidebardata";
import DashButton from "../buttons/DashButton";

type SidebarProps = {
  isOpen?: boolean;
  onClose?: () => void;
};

const Sidebar = ({ isOpen = false, onClose }: SidebarProps) => {
  const navigate = useNavigate();

  const content = (
    <>
      <div className=" font-Outfit">
        <div className="flex  items-center gap-3 mb-14">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
            <Layers2
              size={18}
              className="text-black"
            />
          </div>

          <div>
            <h1 className="theme-heading font-bold text-xl">MineScope</h1>

            <p className="text-gray-500 text-[11px] uppercase tracking-wider">
              Geo Analytical Suite
            </p>
          </div>
        </div>

        <nav className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `w-full flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? `bg-[#0D1B33] text-[#33F0A3] border-r-[3px] border-[#33F0A3]`
                      : `text-slate-400 hover:bg-[#091528] hover:text-white`
                  }`
                }
              >
                <div className="flex items-center gap-4">
                  <Icon size={18} />
                  <span>{item.name}</span>
                </div>
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className=" grid gap-6">
        <DashButton
          title="New Project"
          onClick={() => navigate("/projects/new")}
          variant="primary"
          icon={<Plus size={14} />}
        />
        <DashButton
          title="Logout"
          variant="primary"
          onClick={() => navigate("/")}
          icon={<Plus size={14} />}
        />
      </div>
    </>
  );

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Desktop sidebar */}
      <aside className="theme-sidebar hidden md:flex fixed left-0 top-0 w-[250px] h-screen font-Manrope border-r px-5 py-6 flex-col justify-between">
        {content}
      </aside>

      {/* Mobile sidebar (overlay) */}
      <aside
        className={`theme-sidebar fixed top-0 left-0 w-[250px] h-screen border-r px-5 py-6 flex flex-col justify-between z-50 md:hidden transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {content}
      </aside>
    </>
  );
};

export default Sidebar;
