import {
  Bell,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  FileBarChart,
  FileText,
  Globe2,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Eye,
  AlertCircle,
  Gem,
  Plus,
  Files,
} from "lucide-react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import FilterButton from "../../components/partials/buttons/FilterButton";
import DashButton from "../../components/partials/buttons/DashButton";

const Reports = () => {
  type ReportStatus = "VERIFIED" | "NEEDS AUDIT";

  interface Report {
    id: string;
    name: string;
    date: string;
    region: string;
    type: "Summary" | "Detailed";
    status: ReportStatus;
    icon: "document" | "chart" | "environment" | "safety";
  }

  interface StatCard {
    title: string;
    value: string;
    description: string;
    icon: React.ElementType;
    trend: string;
  }

  const reports: Report[] = [
    {
      id: "REP-2024-00124",
      name: "Q3 Regional Extraction Summary",
      date: "Oct 24, 2024",
      region: "WESTERN AUSTRALIA",
      type: "Summary",
      status: "VERIFIED",
      icon: "document",
    },
    {
      id: "REP-2024-00121",
      name: "Geological Seismic Anomaly Log",
      date: "Oct 18, 2024",
      region: "QUEENSLAND",
      type: "Detailed",
      status: "NEEDS AUDIT",
      icon: "chart",
    },
    {
      id: "REP-2024-00115",
      name: "Environmental Impact Review",
      date: "Oct 12, 2024",
      region: "SOUTH AUSTRALIA",
      type: "Detailed",
      status: "VERIFIED",
      icon: "environment",
    },
    {
      id: "REP-2024-00109",
      name: "Mining Safety Compliance Audit",
      date: "Oct 05, 2024",
      region: "VICTORIA",
      type: "Summary",
      status: "VERIFIED",
      icon: "safety",
    },
  ];

  const stats: StatCard[] = [
    {
      title: "Total Reports",
      value: "152",
      description: "+12 this month",
      icon: FileText,
      trend: "+12",
    },
    {
      title: "Verified Reports",
      value: "128",
      description: "84% compliance",
      icon: ShieldCheck,
      trend: "84%",
    },
    {
      title: "Needs Audit",
      value: "24",
      description: "16% pending",
      icon: AlertCircle,
      trend: "+6",
    },
    {
      title: "Downloads",
      value: "342",
      description: "+28 this month",
      icon: Download,
      trend: "+28",
    },
  ];

  const reportIconMap = {
    document: FileText,
    chart: FileBarChart,
    environment: ShieldCheck,
    safety: ShieldCheck,
  };

  return (
    <DashboardLayout
      component={
        <div className=" min-h-screen">
          <div>
            <header className="flex flex-col gap-5 border-b border-white/5  py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between ">
              <div className="space-y-4 grid justify-between items-start ">
                <div className=" md:grid-cols-3 grid-cols-2  grid gap-6">
                  <DashButton
                    title="Export as PDF"
                    className=" px-4"
                    variant="secondary"
                    icon={<Files size={14} />}
                  />

                  <DashButton
                    title="Export as CSV"
                    className="px-4"
                    variant="secondary"
                    icon={<Plus size={14} />}
                  />

                  <DashButton
                    title="Generate Report"
                    className=" px-8"
                    variant="primary"
                    icon={<Plus size={14} />}
                  />
                </div>

                <p className="mt-1 text-sm text-slate-400">
                  Access, manage and download geological, operational and
                  compliance reports.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative flex-1 lg:w-[300px]">
                  <Search
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="text"
                    placeholder="Search reports..."
                    className="h-11 w-full rounded-lg border border-white/10 bg-transparent pl-11 pr-4 text-sm text-slate-200 outline-none placeholder:text-slate-500 focus:border-emerald-400/50"
                  />
                </div>

                <button
                  type="button"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:bg-white/5 hover:text-white"
                >
                  <Bell size={19} />
                </button>
              </div>
            </header>

            <div className="space-y-6 sm:p-8 lg:p-6">
              <section className="grid gap-4 xl:grid-cols-[1fr_380px]">
                <div className="rounded-xl border border-white/5 bg-[#121c31] p-5">
                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    <div>
                      <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">
                        Date Range
                      </p>

                      <FilterButton
                        icon={CalendarDays}
                        label="Oct 2024 - Dec 2024"
                      />
                    </div>

                    <div>
                      <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">
                        Region
                      </p>

                      <FilterButton
                        icon={Globe2}
                        label="All Territories"
                      />
                    </div>

                    <div>
                      <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">
                        Mineral Type
                      </p>

                      <FilterButton
                        icon={Gem}
                        label="Ferrous & Rare Earth"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-xl border border-emerald-400/10 bg-[#0d1e2b] p-5">
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-emerald-400/5 blur-2xl" />

                  <div className="relative flex h-full items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-400/10">
                      <Sparkles
                        size={22}
                        className="text-emerald-400"
                      />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-semibold text-emerald-400">
                        Smart Filtering
                      </p>

                      <p className="mt-1 max-w-[250px] text-xs leading-5 text-slate-400">
                        Predictive reporting based on latest trends.
                      </p>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10">
                      <TrendingUp
                        size={17}
                        className="text-emerald-400"
                      />
                    </div>
                  </div>
                </div>
              </section>
              {/* =====================================================
                REPORT TABLE
            ===================================================== */}
              <section className="overflow-hidden rounded-xl border border-white/5 bg-[#121c31]">
                {/* Table Header */}
                <div className="flex flex-col gap-4 border-b border-white/5 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                  <h2 className="text-base font-semibold sm:text-lg">
                    Historical Documentation
                  </h2>

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500">
                      Showing 24 of 152 reports
                    </span>

                    <div className="flex gap-1">
                      <button className="flex h-7 w-7 items-center justify-center rounded-md bg-[#202a40] text-slate-500 hover:text-white">
                        <ChevronLeft size={14} />
                      </button>

                      <button className="flex h-7 w-7 items-center justify-center rounded-md bg-[#202a40] text-slate-300 hover:text-white">
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Responsive table */}
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[850px]">
                    <thead>
                      <tr className="border-b border-white/5 text-left">
                        <th className="px-7 py-4 text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">
                          Report Name
                        </th>

                        <th className="px-5 py-4 text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">
                          Date Created
                        </th>

                        <th className="px-5 py-4 text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">
                          Region
                        </th>

                        <th className="px-5 py-4 text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">
                          Type
                        </th>

                        <th className="px-5 py-4 text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">
                          Compliance Status
                        </th>

                        <th className="px-7 py-4 text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {reports.map((report) => {
                        const Icon = reportIconMap[report.icon];

                        const verified = report.status === "VERIFIED";

                        return (
                          <tr
                            key={report.id}
                            className="border-b border-white/5 last:border-b-0 hover:bg-white/[0.015]"
                          >
                            {/* Name */}
                            <td className="px-7 py-5">
                              <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#202b43] text-slate-400">
                                  <Icon size={18} />
                                </div>

                                <div>
                                  <p className="max-w-[220px] text-sm font-medium text-slate-200">
                                    {report.name}
                                  </p>

                                  <p className="mt-1 text-[10px] text-slate-500">
                                    ID: {report.id}
                                  </p>
                                </div>
                              </div>
                            </td>

                            {/* Date */}
                            <td className="px-5 py-5 text-sm text-slate-400">
                              {report.date}
                            </td>

                            {/* Region */}
                            <td className="px-5 py-5">
                              <span className="inline-flex rounded-full bg-cyan-400/10 px-3 py-1.5 text-[9px] font-semibold tracking-wider text-cyan-400">
                                {report.region}
                              </span>
                            </td>

                            {/* Type */}
                            <td className="px-5 py-5 text-sm text-slate-400">
                              {report.type}
                            </td>

                            {/* Status */}
                            <td className="px-5 py-5">
                              <span
                                className={`inline-flex items-center gap-2 text-[10px] font-semibold ${
                                  verified
                                    ? "text-emerald-400"
                                    : "text-rose-300"
                                }`}
                              >
                                <span
                                  className={`h-1.5 w-1.5 rounded-full ${
                                    verified ? "bg-emerald-400" : "bg-rose-300"
                                  }`}
                                />

                                {report.status}
                              </span>
                            </td>

                            {/* Actions */}
                            <td className="px-7 py-5">
                              <div className="flex items-center gap-4">
                                <button
                                  title="View report"
                                  className="text-slate-500 transition hover:text-white"
                                >
                                  <Eye size={18} />
                                </button>

                                <button
                                  title="Download report"
                                  className="text-slate-500 transition hover:text-white"
                                >
                                  <Download size={18} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Load more */}
                <div className="flex justify-center border-t border-white/5 px-5 py-5">
                  <button className="flex items-center gap-2 text-xs font-medium text-emerald-400 transition hover:text-emerald-300">
                    Load More Archives
                    <ChevronDown size={14} />
                  </button>
                </div>
              </section>
              {/* =====================================================
                STATISTICS
            ===================================================== */}
              <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.title}
                      className="group rounded-xl border border-white/5 bg-[#121c31] p-5 transition hover:border-white/10"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10">
                          <Icon
                            size={19}
                            className="text-emerald-400"
                          />
                        </div>

                        <TrendingUp
                          size={18}
                          className="text-emerald-400/60 transition group-hover:text-emerald-400"
                        />
                      </div>

                      <p className="mt-5 text-2xl font-semibold tracking-tight">
                        {stat.value}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {stat.title}
                      </p>

                      <p className="mt-2 text-[11px] text-slate-500">
                        {stat.description}
                      </p>
                    </div>
                  );
                })}
              </section>
            </div>
          </div>
        </div>
      }
    ></DashboardLayout>
  );
};

export default Reports;
