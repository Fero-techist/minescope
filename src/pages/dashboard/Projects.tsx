import DashboardLayout from "../../components/layout/DashboardLayout";
// import Text from "../../components/text";
// import StatCard from "../../components/card/Statcard";
import ProjectTeam from "../../components/team/Projectteam";
import RecentDocuments from "../../components/Document/RecentDocument";
import DashboardOverview from "../../components/map/overview";
import {
  Download,
  Expand,
  MapPin,
  Pencil,
  Radio,
  Box,
  Pickaxe,
  Zap,
  Leaf,
  CalendarClock,
} from "lucide-react";
import Badge from "../../components/UI/Badge";
import StatCard from "../../components/app/Statcard";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout
      component={
        <div>
          <section
            className="
      w-full
      min-h-screen
      font-Outfit

      text-white

      mb-6

    "
          >
            <div className="mb-6 flex flex-col gap-5 lg:mb-8 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="mb-4 flex flex-wrap items-center gap-2 sm:gap-3">
                  <Badge
                    text="ACTIVE SITE"
                    className="mb-4"
                  />

                  <Badge
                    text="RECENT SITE"
                    className="mb-4"
                  />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
                  Emerald Basin Alpha
                </h1>

                <div className="flex items-center gap-2 md:mb-0 mb-8 text-slate-400 text-sm md:text-[17px]">
                  <MapPin size={18} />

                  <p>
                    Pilbara Region, Western Australia · 22.8424° S, 118.4239° E
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:flex lg:items-center lg:gap-4">
                <button
                  type="button"
                  onClick={() => navigate("/projects/project-001/edit")}
                  className="
            h-12 md:h-[60px]
            px-4 md:px-7

            rounded-2xl

            bg-[#111C32]

            flex
            items-center
            gap-3

            text-white
            font-medium

            hover:bg-[#17253f]
            transition
          "
                >
                  <Pencil size={18} />
                  Edit Project
                </button>

                <button className="h-12 md:h-[60px] px-4 md:px-8 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold flex items-center gap-3 hover:scale-[1.02] transition">
                  <Download size={18} />
                  Export Data
                </button>
              </div>
            </div>

            <div className="relative h-auto w-full overflow-visible rounded-[24px] md:h-[620px] md:overflow-hidden md:rounded-[32px]">
              <img
                src="/images/project.png"
                alt="Mine Site"
                className="
          w-full
          h-[260px] sm:h-[340px] md:h-full
          object-cover
        "
              />

              <div
                className="
          absolute
          left-0
          top-0
          h-[260px]
          w-full
          sm:h-[340px]
          md:inset-0
          md:h-auto

          bg-gradient-to-t
          from-[#020817]
          via-[#020817]/20
          to-transparent
        "
              />

              <button
                className="
          absolute
          top-6
          right-6

          w-14
          h-14

          rounded-full

          bg-black/30
          backdrop-blur-md

          flex
          items-center
          justify-center

          border
          border-white/10
        "
              >
                <Expand size={20} />
              </button>

              <div className="relative grid gap-3 p-3 sm:grid-cols-2 sm:p-4 md:absolute md:bottom-6 md:left-6 md:flex md:flex-nowrap md:gap-5 md:p-0">
                {/* CARD 1 */}
                <div className="flex min-w-0 w-full items-center gap-3 rounded-2xl border border-white/10 bg-[#111C32]/80 p-4 backdrop-blur-xl md:w-[250px] md:rounded-3xl md:gap-4 md:p-5">
                  <div
                    className="
              w-14
              h-14

              rounded-2xl

              bg-[#0D1B33]

              flex
              items-center
              justify-center

              text-[#48F2A3]
            "
                  >
                    <Box size={22} />
                  </div>

                  <div>
                    <p
                      className="
                text-[11px]
                uppercase
                tracking-widest
                text-slate-400
                mb-1
              "
                    >
                      Visualization
                    </p>

                    <h3
                      className="
                text-2xl
                font-semibold
                          leading-tight
              "
                    >
                      Interactive 3D Mesh
                    </h3>
                  </div>
                </div>

                <div className="flex min-w-0 w-full items-center gap-3 rounded-2xl border border-white/10 bg-[#111C32]/80 p-4 backdrop-blur-xl md:w-[250px] md:rounded-3xl md:gap-4 md:p-5">
                  <div
                    className="
              w-14
              h-14

              rounded-2xl

              bg-[#0D1B33]

              flex
              items-center
              justify-center

              text-[#66C2FF]
            "
                  >
                    <Radio size={22} />
                  </div>

                  <div>
                    <p
                      className="
                text-[11px]
                uppercase
                tracking-widest
                text-slate-400
                mb-1
              "
                    >
                      Live Sensors
                    </p>

                    <h3
                      className="
                text-2xl
                font-semibold
              "
                    >
                      14 Active Nodes
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard
              title="Current Yield"
              value="42.8"
              suffix="MT"
              trend="+12%"
              icon={Pickaxe}
              trendType="positive"
              iconColor="text-[#10B981]"
              iconBg="bg-[#34D399]/10"
            />

            <StatCard
              title="Extraction Efficiency"
              value="94.2"
              suffix="%"
              trend="Optimal"
              icon={Zap}
              trendType="neutral"
              iconColor="text-[#66C2FF]"
              iconBg="bg-[#66C2FF]/10"
            />

            <StatCard
              title="Stability Score"
              value="8.4"
              suffix="/10"
              trend="Stable"
              icon={Leaf}
              trendType="positive"
              iconColor="text-[#4EDEA3]"
              iconBg="bg-[#4EDEA3]/10"
            />

            <StatCard
              title="Next Inspection"
              value="04"
              suffix="Days"
              trend="Soon"
              icon={CalendarClock}
              trendType="negative"
              iconColor="text-[#EF4444]"
              iconBg="bg-[#EF4444]/10"
            />
          </section>

          <section>
            <DashboardOverview />
          </section>

          <section className="grid grid-cols-1 md:grid-cols-[0.95fr_1.1fr] gap-8 mt-8">
            <ProjectTeam />

            <RecentDocuments />
          </section>
        </div>
      }
    ></DashboardLayout>
  );
};

export default Projects;

// import {
//   ArrowDownToLine,
//   BarChart3,
//   Bell,
//   CalendarDays,
//   ChevronDown,
//   Download,
//   Edit3,
//   FileText,
//   Gauge,
//   Globe2,
//   MapPin,
//   MessageSquare,
//   MoreHorizontal,
//   Plus,
//   ShieldCheck,
//   Sparkles,
//   Users,
//   Waves,
//   Zap,
// } from "lucide-react";

// import {
//   Area,
//   AreaChart,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";

// import { projectData } from "../../data/projectData";
// import DashboardLayout from "../../components/layout/DashboardLayout";

// const ProjectDetails = () => {
//   const project = projectData;

//   return (
//     <DashboardLayout
//       component={
//         <div className="min-h-screen bg-[#080f20] text-slate-200">
//           <main className="mx-auto max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8">
//             {/* =====================================================
//             TOP BAR
//         ====================================================== */}

//             <header className="mb-6 flex items-center justify-between">
//               <div className="relative hidden w-full max-w-md md:block">
//                 <Globe2
//                   size={15}
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
//                 />

//                 <input
//                   type="text"
//                   placeholder="Search for projects, reports, data..."
//                   className="h-10 w-full rounded-lg border border-white/5 bg-[#10192c] pl-9 pr-4 text-xs text-slate-300 outline-none placeholder:text-slate-600 focus:border-emerald-400/30"
//                 />
//               </div>

//               <div className="ml-auto flex items-center gap-3">
//                 <button
//                   type="button"
//                   className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-white/5 hover:text-white"
//                 >
//                   <Bell size={17} />
//                 </button>

//                 <div className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/40 bg-[#17233a]">
//                   <span className="text-xs font-semibold text-emerald-400">
//                     RM
//                   </span>
//                 </div>
//               </div>
//             </header>

//             {/* =====================================================
//             PROJECT HEADER
//         ====================================================== */}

//             <section className="mb-5">
//               <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
//                 <div>
//                   <div className="mb-2 flex items-center gap-3">
//                     <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-emerald-400">
//                       Active Project
//                     </span>

//                     <span className="text-[10px] text-slate-600">
//                       {project.code}
//                     </span>
//                   </div>

//                   <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
//                     {project.name}
//                   </h1>

//                   <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
//                     <MapPin
//                       size={14}
//                       className="text-slate-400"
//                     />

//                     <span>
//                       {project.region}, {project.country}
//                     </span>

//                     <span>•</span>

//                     <span>{Math.abs(project.latitude).toFixed(4)}° S</span>

//                     <span>{Math.abs(project.longitude).toFixed(4)}° E</span>
//                   </div>
//                 </div>

//                 <div className="flex gap-2">
//                   <button
//                     type="button"
//                     className="flex h-10 items-center gap-2 rounded-lg border border-white/10 bg-[#141e32] px-4 text-xs font-medium text-slate-300 transition hover:border-white/20 hover:text-white"
//                   >
//                     <Edit3 size={14} />
//                     Edit Project
//                   </button>

//                   <button
//                     type="button"
//                     className="flex h-10 items-center gap-2 rounded-lg bg-emerald-400 px-4 text-xs font-semibold text-[#06111d] transition hover:bg-emerald-300"
//                   >
//                     <ArrowDownToLine size={14} />
//                     Export Data
//                   </button>
//                 </div>
//               </div>
//             </section>

//             {/* =====================================================
//             PROJECT HERO
//         ====================================================== */}

//             <section className="relative mb-5 overflow-hidden rounded-xl border border-white/5 bg-[#111b2e]">
//               <img
//                 src={project.image}
//                 alt={project.name}
//                 className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[390px]"
//               />

//               {/* Gradient */}

//               <div className="absolute inset-0 bg-gradient-to-t from-[#07101d]/90 via-transparent to-transparent" />

//               {/* Visualization */}

//               <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
//                 <HeroBadge
//                   icon={<Sparkles size={16} />}
//                   label="Visualization"
//                   value={project.visualization.type}
//                 />

//                 <HeroBadge
//                   icon={<Waves size={16} />}
//                   label="Live Sensors"
//                   value={`${project.visualization.nodes} Active Nodes`}
//                 />
//               </div>

//               <button
//                 type="button"
//                 className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg bg-black/30 text-white backdrop-blur-md hover:bg-black/50"
//               >
//                 <MoreHorizontal size={17} />
//               </button>
//             </section>

//             {/* =====================================================
//             STAT CARDS
//         ====================================================== */}

//             <section className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
//               <StatCard
//                 icon={<BarChart3 size={17} />}
//                 label="Current Yield"
//                 value={`${project.stats.currentYield} KT`}
//                 trend="+12%"
//               />

//               <StatCard
//                 icon={<Zap size={17} />}
//                 label="Extraction Efficiency"
//                 value={`${project.stats.extractionEfficiency}%`}
//                 trend="+8%"
//               />

//               <StatCard
//                 icon={<ShieldCheck size={17} />}
//                 label="Stability Score"
//                 value={`${project.stats.stabilityScore} /10`}
//                 trend="Stable"
//               />

//               <StatCard
//                 icon={<CalendarDays size={17} />}
//                 label="Next Inspection"
//                 value={String(project.stats.nextInspectionDays).padStart(
//                   2,
//                   "0",
//                 )}
//                 suffix="Days"
//                 trend="Soon"
//               />
//             </section>

//             {/* =====================================================
//             ANALYTICS GRID
//         ====================================================== */}

//             <section className="grid gap-5 xl:grid-cols-[1.7fr_1fr]">
//               <GeologicalActivity />

//               <ResourceComposition />
//             </section>

//             {/* =====================================================
//             TEAM + DOCUMENTS
//         ====================================================== */}

//             <section className="mt-5 grid gap-5 xl:grid-cols-[1fr_1.7fr]">
//               <ProjectTeam />

//               <RecentDocuments />
//             </section>
//           </main>
//         </div>
//       }
//     ></DashboardLayout>
//   );
// };

// export default ProjectDetails;

// /* =============================================================
//    HERO BADGE
// ============================================================= */

// const HeroBadge = ({
//   icon,
//   label,
//   value,
// }: {
//   icon: React.ReactNode;
//   label: string;
//   value: string;
// }) => {
//   return (
//     <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#0b1728]/80 px-3 py-2 backdrop-blur-md">
//       <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
//         {icon}
//       </div>

//       <div>
//         <p className="text-[8px] uppercase tracking-[0.15em] text-slate-500">
//           {label}
//         </p>

//         <p className="mt-0.5 text-xs font-medium text-white">{value}</p>
//       </div>
//     </div>
//   );
// };

// /* =============================================================
//    STAT CARD
// ============================================================= */

// const StatCard = ({
//   icon,
//   label,
//   value,
//   trend,
//   suffix,
// }: {
//   icon: React.ReactNode;
//   label: string;
//   value: string;
//   trend: string;
//   suffix?: string;
// }) => {
//   return (
//     <div className="rounded-xl border border-white/5 bg-[#111b2e] p-4">
//       <div className="mb-4 flex items-start justify-between">
//         <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
//           {icon}
//         </div>

//         <span className="text-[9px] font-medium text-emerald-400">{trend}</span>
//       </div>

//       <p className="text-[10px] text-slate-500">{label}</p>

//       <div className="mt-1 flex items-baseline gap-1">
//         <span className="text-2xl font-semibold text-white">{value}</span>

//         {suffix && <span className="text-xs text-slate-500">{suffix}</span>}
//       </div>
//     </div>
//   );
// };

// /* =============================================================
//    GEOLOGICAL ACTIVITY
// ============================================================= */

// const GeologicalActivity = () => {
//   return (
//     <div className="rounded-xl border border-white/5 bg-[#111b2e] p-5">
//       <div className="mb-5 flex items-start justify-between">
//         <div>
//           <h2 className="text-sm font-semibold text-white">
//             Geological Activity
//           </h2>

//           <p className="mt-1 text-[10px] text-slate-500">
//             Seismic & density readings (Last 30 days)
//           </p>
//         </div>

//         <div className="flex rounded-lg bg-[#19243a] p-1">
//           {["30D", "90D", "1Y"].map((range, index) => (
//             <button
//               key={range}
//               type="button"
//               className={`rounded-md px-3 py-1 text-[9px] ${
//                 index === 0 ? "bg-[#26334b] text-white" : "text-slate-500"
//               }`}
//             >
//               {range}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="h-[260px]">
//         <ResponsiveContainer
//           width="100%"
//           height="100%"
//         >
//           <AreaChart data={projectData.geologicalActivity}>
//             <defs>
//               <linearGradient
//                 id="activityGradient"
//                 x1="0"
//                 y1="0"
//                 x2="0"
//                 y2="1"
//               >
//                 <stop
//                   offset="0%"
//                   stopColor="#34d399"
//                   stopOpacity={0.25}
//                 />

//                 <stop
//                   offset="100%"
//                   stopColor="#34d399"
//                   stopOpacity={0}
//                 />
//               </linearGradient>
//             </defs>

//             <XAxis
//               dataKey="date"
//               axisLine={false}
//               tickLine={false}
//               tick={{
//                 fill: "#64748b",
//                 fontSize: 9,
//               }}
//             />

//             <YAxis
//               axisLine={false}
//               tickLine={false}
//               tick={{
//                 fill: "#64748b",
//                 fontSize: 9,
//               }}
//             />

//             <Tooltip
//               contentStyle={{
//                 background: "#111b2e",
//                 border: "1px solid rgba(255,255,255,0.08)",
//                 borderRadius: "8px",
//                 fontSize: "11px",
//               }}
//             />

//             <Area
//               type="monotone"
//               dataKey="value"
//               stroke="#34d399"
//               strokeWidth={2}
//               fill="url(#activityGradient)"
//             />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// /* =============================================================
//    RESOURCE COMPOSITION
// ============================================================= */

// const ResourceComposition = () => {
//   const total = projectData.resources.reduce(
//     (sum, resource) => sum + resource.percentage,
//     0,
//   );

//   const primaryResource = projectData.resources[0];

//   return (
//     <div className="rounded-xl border border-white/5 bg-[#111b2e] p-5">
//       <div className="flex items-start justify-between">
//         <div>
//           <h2 className="text-sm font-semibold text-white">
//             Resource Composition
//           </h2>

//           <p className="mt-1 text-[10px] text-slate-500">
//             Current estimated composition
//           </p>
//         </div>

//         <button
//           type="button"
//           className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400 hover:bg-emerald-400/20"
//         >
//           <Plus size={16} />
//         </button>
//       </div>

//       <div className="mt-5 flex flex-col items-center gap-6 sm:flex-row">
//         {/* Donut */}

//         <div
//           className="relative flex h-40 w-40 shrink-0 items-center justify-center rounded-full"
//           style={{
//             background: `conic-gradient(
//               #34d399 0% 70%,
//               #38bdf8 70% 90%,
//               #64748b 90% 100%
//             )`,
//           }}
//         >
//           <div className="flex h-[112px] w-[112px] flex-col items-center justify-center rounded-full bg-[#111b2e]">
//             <span className="text-2xl font-semibold text-white">
//               {primaryResource.percentage}%
//             </span>

//             <span className="text-[10px] text-slate-500">Lithium</span>
//           </div>
//         </div>

//         {/* Legend */}

//         <div className="w-full space-y-4">
//           {projectData.resources.map((resource, index) => (
//             <div
//               key={resource.name}
//               className="flex items-center justify-between gap-3"
//             >
//               <div className="flex items-center gap-2">
//                 <span
//                   className={`h-2 w-2 rounded-full ${
//                     index === 0
//                       ? "bg-emerald-400"
//                       : index === 1
//                         ? "bg-sky-400"
//                         : "bg-slate-500"
//                   }`}
//                 />

//                 <span className="text-xs text-slate-400">{resource.name}</span>
//               </div>

//               <span className="text-xs font-medium text-white">
//                 {resource.percentage}%
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// /* =============================================================
//    PROJECT TEAM
// ============================================================= */

// const ProjectTeam = () => {
//   return (
//     <div className="rounded-xl border border-white/5 bg-[#111b2e] p-5">
//       <div className="mb-5 flex items-center justify-between">
//         <h2 className="text-sm font-semibold text-white">Project Team</h2>

//         <button
//           type="button"
//           className="text-[10px] font-medium text-emerald-400 hover:text-emerald-300"
//         >
//           Manage All
//         </button>
//       </div>

//       <div className="space-y-2">
//         {projectData.team.map((member) => (
//           <div
//             key={member.id}
//             className="flex items-center gap-3 rounded-lg bg-[#18233a] p-2.5"
//           >
//             <img
//               src={member.avatar}
//               alt={member.name}
//               className="h-9 w-9 rounded-full object-cover"
//             />

//             <div className="min-w-0 flex-1">
//               <p className="truncate text-xs font-medium text-white">
//                 {member.name}
//               </p>

//               <p className="mt-0.5 truncate text-[9px] text-slate-500">
//                 {member.role}
//               </p>
//             </div>

//             <button
//               type="button"
//               className="text-slate-600 hover:text-emerald-400"
//             >
//               <MessageSquare size={14} />
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// /* =============================================================
//    RECENT DOCUMENTS
// ============================================================= */

// const RecentDocuments = () => {
//   return (
//     <div className="rounded-xl border border-white/5 bg-[#111b2e] p-5">
//       <div className="mb-5 flex items-center justify-between">
//         <h2 className="text-sm font-semibold text-white">Recent Documents</h2>

//         <button
//           type="button"
//           className="text-[10px] font-medium text-emerald-400 hover:text-emerald-300"
//         >
//           View Repository
//         </button>
//       </div>

//       <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
//         {projectData.documents.map((document) => (
//           <div
//             key={document.id}
//             className="group rounded-lg border border-white/5 bg-[#18233a] p-3 transition hover:border-emerald-400/20"
//           >
//             <div className="mb-4 flex items-center justify-between">
//               <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
//                 <FileText size={15} />
//               </div>

//               <button
//                 type="button"
//                 className="text-slate-600 opacity-0 transition group-hover:opacity-100 hover:text-white"
//               >
//                 <Download size={14} />
//               </button>
//             </div>

//             <p className="line-clamp-2 text-[10px] font-medium leading-4 text-slate-300">
//               {document.name}
//             </p>

//             <p className="mt-2 text-[9px] text-slate-600">{document.size}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
