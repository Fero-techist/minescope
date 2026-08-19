import AnalyticsHeader from "../../components/analytics/analyitics-header";
import map from "../../assets/bbb.png";
import AnalyticsStats from "../../components/analytics/analytics-stat";
import OperationalStatusCard from "../../components/analytics/operationstatuscard";
import ResourceTrendsChart from "../../components/analytics/resourcetrendschart";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { hotspots } from "../../data/dataset";
import { minerals } from "../../data/dataset";
import { Marker } from "../../components/analytics/marker";
import { MineralCard } from "./Mineralcard";

const Analytics = () => {
  const currentFocus = hotspots.find((spot) => spot.level === "extreme");

  return (
    <DashboardLayout
      component={
        <div className="space-y-8  min-h-screen">
          <AnalyticsHeader />

          <AnalyticsStats />

          <div className="grid lg:grid-cols-2 py-8 gap-6">
            <ResourceTrendsChart />

            <OperationalStatusCard />
          </div>

          <section className="rounded-3xl bg-[#0C1730] p-6">
            <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Global Density Map
                </h2>

                <p className="text-sm text-slate-400">
                  Site hotspots and tectonic activity zones
                </p>
              </div>

              <div className="flex flex-wrap gap-2 rounded-full bg-slate-900 p-1">
                <button className="rounded-full bg-emerald-500/20 px-4 py-1 text-xs text-emerald-400">
                  Satellite
                </button>

                <button className="rounded-full px-4 py-1 text-xs text-slate-400">
                  Terrain
                </button>
              </div>
            </header>

            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={map}
                alt="World map"
                className="h-full w-full object-cover"
              />

              {hotspots.map((spot) => (
                <Marker
                  key={spot.id}
                  x={spot.x}
                  y={spot.y}
                  color={spot.color}
                />
              ))}

              {currentFocus && (
                <div className="absolute bottom-6 left-6 right-6 max-w-xs rounded-2xl bg-slate-900/90 p-4 backdrop-blur sm:right-auto sm:max-w-sm">
                  <p className="text-xs font-semibold tracking-widest text-emerald-400">
                    CURRENT FOCUS
                  </p>

                  <h3 className="mt-2 text-sm text-white">
                    {currentFocus.name}
                  </h3>

                  <p className="text-sm text-slate-300">
                    Activity Level:
                    <span className="ml-1 text-emerald-400">
                      {currentFocus.level}
                    </span>
                  </p>
                </div>
              )}
            </div>
          </section>

          <section className="rounded-2xl bg-[#111C3A] p-6">
            <h2 className="mb-8 text-lg font-semibold text-white">
              Mineral Distribution
            </h2>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {minerals.map((mineral) => (
                <MineralCard
                  key={mineral.id}
                  mineral={mineral}
                />
              ))}
            </div>
          </section>
        </div>
      }
    />
  );
};

export default Analytics;
