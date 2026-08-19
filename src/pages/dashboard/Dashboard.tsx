import DashboardLayout from "../../components/layout/DashboardLayout";
import Concessionstable from "../../components/partials/table/Concessionstable";
import StatCard from "../../components/app/Statcard";
import { Wallet, Layers3, Pickaxe, ShieldCheck } from "lucide-react";
import ResourceCard from "../../components/card/Resourcecard";
import MiningMap from "../../components/map/Miningmap";
import RecentMiningDeals from "../../components/partials/table/RecentMiningDeals";

const Dashboard = () => {
  return (
    <DashboardLayout
      component={
        <div
          className="
            space-y-8
            
          "
        >
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Total Revenue"
              value="$4,280,000"
              icon={Wallet}
              trend="+12.5%"
              trendType="positive"
            />

            <StatCard
              title="Active Projects"
              value="24"
              icon={Layers3}
              trend="+4 new"
              trendType="neutral"
            />

            <StatCard
              title="Total Resources"
              value="1.2M"
              icon={Pickaxe}
              trend="-2.1%"
              trendType="negative"
            />

            <StatCard
              title="Environmental Score"
              value="94/100"
              icon={ShieldCheck}
              trend="Optimum"
              trendType="positive"
            />
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2">
              <MiningMap />
            </div>

            <ResourceCard />
          </section>

          <Concessionstable />

          <RecentMiningDeals />
        </div>
      }
    />
  );
};

export default Dashboard;
