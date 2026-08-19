// components/chart/GlobalOutputChart.tsx

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useState } from "react";
import CustomTooltip from "./CustomTooltip";
import type { GlobalOutputChartProps } from "../../types";

const GlobalOutputChart: React.FC<GlobalOutputChartProps> = ({
  data,
  //   activeSet,
  //   onToggle,
}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex-1 flex items-center max-w-lg w-full">
      <ResponsiveContainer
        width="100%"
        height={180}
      >
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="output">
            {data.map((_, i) => (
              <Cell
                key={i}
                fill={hovered === i ? "#5fffb0" : "#2a9e6e"}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GlobalOutputChart;
