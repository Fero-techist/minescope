import type { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}

const SidebarItem = ({ icon: Icon, label, active }: SidebarItemProps) => {
  return (
    <button
      className={`
        w-full flex items-center gap-3 px-4 py-3 rounded-xl
        transition-all text-sm font-medium
        ${
          active
            ? "bg-emerald-50 text-emerald-600"
            : "text-gray-500 hover:bg-gray-100"
        }
      `}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );
};

export default SidebarItem;
