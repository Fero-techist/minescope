// types/index.ts

import type { LucideIcon } from "lucide-react";

export interface StatBlockProps {
  target: number;
  decimals?: number;
  suffix: string;
  label: string;
}

export interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}

export interface ChartDataPoint {
  month: string;
  output: number;
}

export interface GlobalOutputChartProps {
  data: ChartDataPoint[];
  activeSet: number;
  onToggle: (i: number) => void;
}

export interface SidebarItem {
  name: string;
  icon: LucideIcon;
  path: string;
  active?: boolean;
}
export interface TopbarProps {
  userName: string;
  role: string;
}

// export interface StatCardProps {
//   title: string;
//   value: string;
//   icon: LucideIcon;
//   trend: string;

//   trendType: "positive" | "negative" | "neutral";
// }

export type StatCardProps = {
  title: string;

  value: string | number;

  suffix?: string;

  trend: string;

  icon: LucideIcon;

  iconColor?: string;
  iconBg?: string;

  trendType: "positive" | "negative" | "neutral";
};

export type Hotspot = {
  id: string;
  name: string;
  x: number;
  y: number;
  level: "low" | "medium" | "high" | "extreme";
  color: string;
};

export type Mineral = {
  id: string;
  name: string;
  value: number;
  color: string;
  glow: boolean;
};

export interface ReportFilter {
  dateRange: string;
  region: string;
  mineralType: string;
}

export interface ReportSummary {
  totalSites: number;
  activeLicenses: number;
  inactiveLicenses: number;
  complianceScore: number;
  estimatedReserve: number;
}

export interface GeneratedReport {
  id: string;
  generatedAt: string;
  summary: ReportSummary;
}
