import type { ChartDataPoint } from "../types";
import type { Hotspot } from "../types";
import type { Mineral } from "../types";

export const dataSets: ChartDataPoint[][] = [
  [
    { month: "JAN", output: 62 },
    { month: "MAR", output: 78 },
    { month: "MAY", output: 45 },
    { month: "JUL", output: 91 },
    { month: "SEP", output: 70 },
    { month: "OCT", output: 60 },
    { month: "NOV", output: 85 },
  ],
  [
    { month: "JAN", output: 55 },
    { month: "MAR", output: 82 },
    { month: "MAY", output: 69 },
    { month: "JUL", output: 74 },
    { month: "SEP", output: 88 },
    { month: "OCT", output: 51 },
    { month: "NOV", output: 93 },
  ],
];

export const geologicalData = [
  { day: "MAY 01", value: 18 },
  { day: "MAY 05", value: 14 },
  { day: "MAY 09", value: 30 },
  { day: "MAY 13", value: 8 },
  { day: "MAY 17", value: 52 },
  { day: "MAY 21", value: 7 },
  { day: "MAY 25", value: 78 },
  { day: "MAY 29", value: 10 },
  { day: "MAY 30", value: 55 },
];

export const compositionData = [
  {
    name: "Lithium Carbonate",
    value: 70,
    color: "#4FFFB0",
  },
  {
    name: "Quartz Crystals",
    value: 20,
    color: "#6BCBFF",
  },
  {
    name: "Other Silicates",
    value: 10,
    color: "#44506B",
  },
];

export const resourceTrendsData = [
  { month: "Jan", extraction: 20, discovery: 15 },
  { month: "Feb", extraction: 35, discovery: 20 },
  { month: "Mar", extraction: 40, discovery: 22 },
  { month: "Apr", extraction: 38, discovery: 21 },
  { month: "May", extraction: 50, discovery: 24 },
  { month: "Jun", extraction: 75, discovery: 30 },
  { month: "Jul", extraction: 95, discovery: 55 },
  { month: "Aug", extraction: 100, discovery: 58 },
  { month: "Sep", extraction: 65, discovery: 56 },
  { month: "Oct", extraction: 38, discovery: 54 },
  { month: "Nov", extraction: 42, discovery: 50 },
  { month: "Dec", extraction: 105, discovery: 47 },
];

export const operationstatusData = [
  { name: "Active", value: 60, color: "#4ADE80" },
  { name: "Review", value: 25, color: "#FACC15" },
  { name: "Inactive", value: 15, color: "#EF4444" },
];

export const hotspots: Hotspot[] = [
  {
    id: "1",
    name: "North America Hub",
    x: 20,
    y: 35,
    level: "high",
    color: "#22c55e",
  },
  {
    id: "2",
    name: "South Atlantic Node",
    x: 25,
    y: 55,
    level: "medium",
    color: "#22c55e",
  },
  {
    id: "3",
    name: "Sub-Saharan Basin #4",
    x: 63,
    y: 65,
    level: "extreme",
    color: "#22c55e",
  },
  {
    id: "4",
    name: "Eastern Zone",
    x: 86,
    y: 24,
    level: "low",
    color: "#60a5fa",
  },
];

export const minerals: Mineral[] = [
  {
    id: "gold",
    name: "Gold",
    value: 82,
    color: "#56D39B",
    glow: false,
  },
  {
    id: "lithium",
    name: "Lithium",
    value: 62,
    color: "#7CC5EE",
    glow: false,
  },
  {
    id: "copper",
    name: "Copper",
    value: 42,
    color: "#B7C4DD",
    glow: false,
  },
  {
    id: "iron",
    name: "Iron Ore",
    value: 92,
    color: "#18C989",
    glow: true,
  },
  {
    id: "cobalt",
    name: "Cobalt",
    value: 28,
    color: "#F87171",
    glow: false,
  },
];
