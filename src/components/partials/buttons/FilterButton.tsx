import { ChevronDown } from "lucide-react";

function FilterButton({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <button
      type="button"
      className="flex min-w-[165px] items-center justify-between gap-3 rounded-lg border border-white/5 bg-[#252d44] px-3.5 py-2.5 text-sm text-slate-300 transition hover:bg-[#2c3650]"
    >
      <span className="flex items-center gap-2">
        <Icon
          size={15}
          className="text-emerald-400"
        />
        {label}
      </span>

      <ChevronDown
        size={15}
        className="text-slate-500"
      />
    </button>
  );
}
export default FilterButton;
