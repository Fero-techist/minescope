// ReportFilters.tsx

import type { ReportFilter } from "../../types";

interface Props {
  filters: ReportFilter;
  onChange: (filters: ReportFilter) => void;
}

export function ReportFilters({ filters, onChange }: Props) {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <select
        value={filters.dateRange}
        onChange={(e) => onChange({ ...filters, dateRange: e.target.value })}
      >
        <option>2024</option>
      </select>

      <select
        value={filters.region}
        onChange={(e) => onChange({ ...filters, region: e.target.value })}
      >
        <option>All Territories</option>
      </select>

      <select
        value={filters.mineralType}
        onChange={(e) => onChange({ ...filters, mineralType: e.target.value })}
      >
        <option>Gold</option>
        <option>Lithium</option>
        <option>Iron Ore</option>
      </select>
    </div>
  );
}
