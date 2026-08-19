import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import type { GlobalOutputChartProps } from "../../types";
import CustomTooltip from "./Custom-tooltip";

const GlobalOutputChart: React.FC<GlobalOutputChartProps> = ({
  data,
  activeSet,
  onToggle,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      <div className="flex items-center  justify-between mb-4">
        <span className="text-[11px] font-semibold tracking-[1.5px] text-slate-500 font-mono">
          GLOBAL OUTPUT
        </span>
        <div className="flex gap-1.5">
          {[0, 1].map((i) => (
            <button
              key={i}
              onClick={() => onToggle(i)}
              className={`w-7 h-3.5 rounded-sm transition-colors duration-200 ${
                activeSet === i
                  ? "bg-emerald-400"
                  : "bg-white/10 hover:bg-white/20"
              }`}
              aria-pressed={activeSet === i}
            />
          ))}
        </div>
      </div>

      <ResponsiveContainer
        width="100%"
        height={180}
      >
        <BarChart
          data={data}
          barCategoryGap="30%"
          margin={{ top: 8, right: 4, bottom: 0, left: -28 }}
        >
          <XAxis
            dataKey="month"
            tick={{
              fill: "#64748b",
              fontSize: 11,
              fontFamily: "ui-monospace, monospace",
            }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{
              fill: "#64748b",
              fontSize: 10,
              fontFamily: "ui-monospace, monospace",
            }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={false}
          />
          <Bar
            dataKey="output"
            radius={[4, 4, 0, 0]}
            onMouseEnter={(_, index) => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  hoveredIndex === index
                    ? "#6ee7b7" // emerald-300
                    : index % 2 === 0
                      ? "#2a9e6e" // mid green
                      : "#1d6b4a" // deep green
                }
                style={{ transition: "fill 0.2s ease" }}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default GlobalOutputChart;
