import { BarChart3, Pickaxe, ShieldCheck, AlertTriangle } from "lucide-react";

import StatCard from "../app/Statcard";

const AnalyticsStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Total Mineral Sites"
        value="1,248"
        trend="+4.2%"
        trendType="positive"
        icon={BarChart3}
      />

      <StatCard
        title="Active Sites"
        value="842"
        trend="+2.1%"
        trendType="neutral"
        icon={Pickaxe}
      />

      <StatCard
        title="Pending Approvals"
        value="56"
        trend="ON TRACK"
        trendType="neutral"
        icon={ShieldCheck}
      />

      <StatCard
        title="Environmental Alerts"
        value="12"
        trend="ACTION REQUIRED"
        trendType="negative"
        icon={AlertTriangle}
      />
    </div>
  );
};

export default AnalyticsStats;
