import {
  LayoutDashboard,
  FolderKanban,
  BarChart3,
  FileText,
  Settings,
} from "lucide-react";

import type { SidebarItem } from "../types";

export const sidebarItems: SidebarItem[] = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
    active: true,
  },

  {
    name: "Projects",
    icon: FolderKanban,
    path: "/projects",
  },

  {
    name: "Analytics",
    icon: BarChart3,
    path: "/analytics",
  },

  {
    name: "Reports",
    icon: FileText,
    path: "/reports",
  },

  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];
