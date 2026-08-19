import { Filter, Download, ArrowRight } from "lucide-react";

import { miningDeals } from "../../../data/mining-deals";

import MiningBadge from "../../../components/partials/badge/mining-badge";

const RecentMiningDeals = () => {
  return (
    <div
      className="

bg-[#0D1831]

rounded-3xl

border
border-[#172848]

p-8

"
    >
      {/* HEADER */}

      <div className="flex flex-col gap-4 justify-between mb-10 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-white font-semibold text-2xl">Recent Mining Deals</h2>

          <p className="text-gray-500 text-sm">
            Live transaction feed and project acquisitions
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="bg-[#162848] px-4 py-2 rounded-xl flex gap-2 items-center text-gray-300">
            <Filter size={16} />
            Filters
          </button>

          <button className="bg-[#162848] px-4 py-2 rounded-xl flex gap-2 items-center text-gray-300">
            <Download size={16} />
            Export CSV
          </button>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[700px] table-auto">
        <thead>
          <tr
            className="
text-gray-500
text-xs

border-b

border-[#172848]
"
          >
            <th className="pb-5 text-left">PROJECT NAME</th>

            <th className="text-left">MINERAL TYPE</th>

            <th className="text-left">VALUE</th>

            <th className="text-left">STATUS</th>

            <th className="text-left">ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {miningDeals.map((deal) => (
            <tr
              key={deal.id}
              className="
border-b

border-[#13223D]

hover:bg-[#13223D]/20
"
            >
              <td
                className="
py-7
text-white
"
              >
                {deal.project}
              </td>

              <td
                className="
text-gray-400
"
              >
                {deal.mineral}
              </td>

              <td
                className="
text-white
font-medium
"
              >
                {deal.value}
              </td>

              <td>
                <MiningBadge status={deal.status} />
              </td>

              <td
                className="
text-gray-400
"
              >
                •••
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <div className="flex justify-center mt-8">
        <button
          className="
text-emerald-400

flex
items-center
gap-2

text-sm
"
        >
          View All Recent Deals
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default RecentMiningDeals;
