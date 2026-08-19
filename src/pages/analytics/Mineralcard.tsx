import type { Mineral } from "../../types";

type MineralCardProps = {
  mineral: Mineral
}
export function MineralCard({ mineral }: MineralCardProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative h-32 w-28 overflow-hidden rounded-lg bg-slate-700/50">
        <div
          className={`
            absolute bottom-0 left-0 right-0
            transition-all duration-700
            ${mineral.glow ? "shadow-lg" : ""}
          `}
          style={{
            height: `${mineral.value}%`,
            background: mineral.glow
              ? `linear-gradient(to top,
                  ${mineral.color},
                  rgba(255,255,255,.15)
                )`
              : mineral.color,
          }}
        />
      </div>

      <span className="text-xs font-medium uppercase text-slate-300">
        {mineral.name}
      </span>
    </div>
  );
}
