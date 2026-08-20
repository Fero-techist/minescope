import { Download, Filter } from "lucide-react";

import { concessions } from "../../../data/concessions";

import StatusBadge from "../badge/Statusbadge";

const ConcessionsTable = () => {
  return (
    <div
      className="

bg-[#0D1831]

rounded-3xl

border
border-[#172848]

p-6

"
    >
      {/* Header */}

      <div className="flex flex-col gap-4 justify-between items-start mb-8 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-white text-xl font-semibold">
            Active Concessions
          </h2>

          <p className="text-gray-500 text-sm">
            Government & corporate operations
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="bg-[#1A2944] px-4 py-2 rounded-xl text-gray-300 flex gap-2 items-center">
            <Filter size={16} />
            Filter
          </button>

          <button className="bg-emerald-400 text-black px-4 py-2 rounded-xl flex gap-2 items-center font-medium">
            <Download size={16} />
            Export
          </button>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[760px] table-auto">
          <thead>
            <tr
              className="
text-left

text-gray-500

border-b
border-[#1A2944]
"
            >
              <th className="pb-5">Concession</th>

              <th>Resource</th>

              <th>Region</th>

              <th>Output</th>

              <th>Status</th>

              <th>Compliance</th>
            </tr>
          </thead>

          <tbody>
            {concessions.map((item) => (
              <tr
                key={item.id}
                className="
border-b

border-[#13223D]

hover:bg-[#13223D]/30
"
              >
                <td
                  className="
py-5

text-white
"
                >
                  {item.name}
                </td>

                <td
                  className="
text-gray-300
"
                >
                  {item.resource}
                </td>

                <td
                  className="
text-gray-300
"
                >
                  {item.region}
                </td>

                <td
                  className="
text-white
"
                >
                  {item.output}
                </td>

                <td>
                  <StatusBadge status={item.status} />
                </td>

                <td
                  className="
text-emerald-400
font-medium
"
                >
                  {item.compliance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConcessionsTable;
