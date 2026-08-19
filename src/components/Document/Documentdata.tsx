// documentsData.ts

import { Archive, FileSpreadsheet, FileText, ShieldCheck } from "lucide-react";

export const documents = [
  {
    id: 1,

    title: "Environmental Impact Report 2024_Q2.pdf",

    size: "2.4 MB",

    type: "PDF",

    uploadedBy: "Sarah Connor",

    uploadedAt: "2 hours ago",

    icon: <FileText size={20} />,

    iconBg: "bg-emerald-500/10 text-emerald-400",
  },

  {
    id: 2,

    title: "Annual Site Safety Audit - Final.pdf",

    size: "1.8 MB",

    type: "PDF",

    uploadedBy: "Dr. Marcus Vance",

    uploadedAt: "Yesterday",

    icon: <ShieldCheck size={20} />,

    iconBg: "bg-cyan-500/10 text-cyan-400",
  },

  {
    id: 3,

    title: "Extraction Forecast Models - v3.xlsx",

    size: "5.1 MB",

    type: "XLSX",

    uploadedBy: "Xavier Chen",

    uploadedAt: "3 days ago",

    icon: <FileSpreadsheet size={20} />,

    iconBg: "bg-green-500/10 text-green-400",
  },

  {
    id: 4,

    title: "Raw Geological Sensor Data Log.zip",

    size: "142 MB",

    type: "ZIP",

    uploadedBy: "AI Sensor Network",

    uploadedAt: "5 mins ago",

    icon: <Archive size={20} />,

    iconBg: "bg-slate-500/10 text-slate-300",
  },
];
