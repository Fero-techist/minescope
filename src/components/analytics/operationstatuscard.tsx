import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { operationstatusData } from "../../data/dataset";

// const statusData = [
//   { name: "Active", value: 842 },
//   { name: "Maintenance", value: 310 },
//   { name: "Inactive", value: 96 },
// ];

// const COLORS = ["#65F000", "#7DD3FC", "#334155"];

const OperationalStatusCard = () => {
  return (
    <div className="bg-[#0C1730] rounded-3xl p-6 h-[400px] md:h-[490px]">
      <h2 className="text-white text-2xl font-semibold">Operational Status</h2>

      <p className="text-gray-500 text-sm">Asset health distribution</p>

      <div className="h-[200px] md:h-[250px] mt-8">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={operationstatusData}
              dataKey="value"
              innerRadius={65}
              outerRadius={90}
              stroke="none"
            >
              {operationstatusData.map((_, index) => (
                <Cell
                  key={index}
                  fill={operationstatusData[index].color}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-4 mt-4">
        <LegendRow
          color="bg-lime-400"
          label="Active"
          value="842"
        />

        <LegendRow
          color="bg-sky-400"
          label="Maintenance"
          value="310"
        />

        <LegendRow
          color="bg-slate-500"
          label="Inactive"
          value="96"
        />
      </div>
    </div>
  );
};

type LegendRowProps = {
  color: string;
  label: string;
  value: string;
};

const LegendRow = ({ color, label, value }: LegendRowProps) => (
  <div className="flex justify-between">
    <div className="flex items-center gap-3">
      <span className={`w-3 h-3 rounded-full ${color}`} />

      <span className="text-gray-400">{label}</span>
    </div>

    <span className="text-white font-medium">{value}</span>
  </div>
);

export default OperationalStatusCard;
