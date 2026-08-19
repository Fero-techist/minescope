import type { Project } from "../types/project";

export const projectData: Project = {
  id: "project-001",
  code: "MSP-25-001-A",
  name: "Emerald Basin Alpha",
  status: "ACTIVE",

  region: "Pilbara Region",
  country: "Western Australia",

  latitude: -22.8424,
  longitude: 118.4238,

  image:
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1600&q=80",

  visualization: {
    type: "Interactive 3D Mesh",
    nodes: 14,
  },

  stats: {
    currentYield: 42.8,
    extractionEfficiency: 94.2,
    stabilityScore: 8.4,
    nextInspectionDays: 4,
  },

  geologicalActivity: [
    { date: "Apr 30", value: 25 },
    { date: "May 07", value: 20 },
    { date: "May 14", value: 43 },
    { date: "May 21", value: 12 },
    { date: "May 28", value: 78 },
    { date: "Jun 04", value: 8 },
    { date: "Jun 11", value: 92 },
    { date: "Jun 18", value: 18 },
    { date: "Jun 25", value: 76 },
  ],

  resources: [
    {
      name: "Lithium Carbonate",
      percentage: 70,
    },
    {
      name: "Quartz Crystals",
      percentage: 20,
    },
    {
      name: "Other Silicates",
      percentage: 10,
    },
  ],

  team: [
    {
      id: "member-1",
      name: "Dr. Marcus Vance",
      role: "Chief Geologist",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
      id: "member-2",
      name: "Sarah Connor",
      role: "Operations Manager",
      avatar: "https://i.pravatar.cc/100?img=47",
    },
    {
      id: "member-3",
      name: "Xavier Chen",
      role: "Environmental Lead",
      avatar: "https://i.pravatar.cc/100?img=33",
    },
  ],

  documents: [
    {
      id: "doc-1",
      name: "Environmental Impact Report 2024_Q2.pdf",
      type: "PDF",
      size: "2.4 MB",
    },
    {
      id: "doc-2",
      name: "Annual Site Safety Audit - Final.pdf",
      type: "PDF",
      size: "1.8 MB",
    },
    {
      id: "doc-3",
      name: "Extraction Forecast Models - v2.xlsx",
      type: "XLSX",
      size: "1.1 MB",
    },
    {
      id: "doc-4",
      name: "Raw Geological Sensor Data Log.zip",
      type: "ZIP",
      size: "12 MB",
    },
  ],
};
