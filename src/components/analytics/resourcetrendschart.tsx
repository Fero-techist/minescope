import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from "recharts";
import { resourceTrendsData } from "../../data/dataset";

const data = [...resourceTrendsData];

const ResourceTrendsChart = () => {
  return (
    <div className="bg-[#0C1730] rounded-3xl p-6 h-[400px] md:h-[490px]">
      <div className="flex justify-between mb-8">
        <div>
          <h2 className="text-white text-2xl font-semibold">Resource Trends</h2>

          <p className="text-gray-500 text-sm">
            Extraction and discovery rates (last 12 months)
          </p>
        </div>

        <div className="flex gap-5 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-emerald-400">EXTRACTION</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span className="text-sky-400">DISCOVERY</span>
          </div>
        </div>
      </div>

      <ResponsiveContainer
        width="100%"
        height="80%"
      >
        <AreaChart data={data}>
          <defs>
            <linearGradient
              id="extraction"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#4ADE80"
                stopOpacity={0.3}
              />

              <stop
                offset="100%"
                stopColor="#4ADE80"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="month"
            tick={{ fill: "#64748B" }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="extraction"
            stroke="#4ADE80"
            fill="url(#extraction)"
            strokeWidth={3}
          />

          <Area
            type="monotone"
            dataKey="discovery"
            stroke="#7DD3FC"
            fill="transparent"
            strokeDasharray="6 6"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResourceTrendsChart;
