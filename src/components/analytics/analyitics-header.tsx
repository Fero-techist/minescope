import { ChevronDown } from "lucide-react";
import Text from "../text";

const AnalyticsHeader = () => {
  return (
    <div className="flex flex-col font-Outfit gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <Text
          variant="subheading"
          className="text-3xl sm:text-2xl"
        >
          Analytics Overview
        </Text>

        <p className="text-gray-400 mt-2 max-w-2xl">
          Real-time mineral distribution and operational metrics.
        </p>
      </div>

      <div className="flex flex-wrap justify-start gap-3 sm:justify-end">
        <FilterButton label="All Regions" />
        <FilterButton label="Mineral Type" />
        <FilterButton label="Last 30 Days" />
      </div>
    </div>
  );
};

const FilterButton = ({ label }: { label: string }) => (
  <button
    className="
      bg-[#16233D]
      px-4
      py-3
      rounded-xl
      text-gray-300
      flex
      items-center
      justify-between
      gap-2
      min-w-[160px]
      sm:min-w-[170px]
    "
  >
    <span className="truncate text-left">{label}</span>
    <ChevronDown size={16} />
  </button>
);

export default AnalyticsHeader;
