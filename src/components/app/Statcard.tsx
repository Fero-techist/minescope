import type { StatCardProps } from "../../types";

const StatCard = ({
  title,
  value,
  icon: Icon,
  trend,
  trendType,
  suffix,
  iconColor,
  iconBg,
}: StatCardProps) => {
  const badgeStyles = {
    positive: `
bg-emerald-500/10
text-emerald-400
`,

    negative: `
bg-orange-500/10
text-orange-400
`,

    neutral: `
bg-sky-500/10
text-sky-400
`,
  };

  return (
    <div className="bg-[#0C1730]  rounded-3xl p-4 md:p-6 hover:scale-[1.02] transition-all duration-300">
      <div
        className="
flex
justify-between
items-center
"
      >
        <div
          className={`
    w-10
    h-10
    rounded-xl
    flex
    items-center
    justify-center

    ${iconBg || "bg-[#152340]"}
  `}
        >
          <Icon
            size={18}
            className={iconColor || "text-emerald-400"}
          />
        </div>
        <span
          className={`

px-3
py-1

rounded-full

text-xs

font-medium


${badgeStyles[trendType]}

`}
        >
          {trend}
        </span>
      </div>

      {/* LABEL */}

      <p
        className="

text-gray-500

text-sm

mt-5

"
      >
        {title}
      </p>

      <h2 className="text-white text-2xl md:text-4xl font-bold mt-4 flex items-end gap-2">
        {value}

        {suffix && (
          <span className="text-gray-500 text-lg md:text-3xl font-medium">
            {suffix}
          </span>
        )}
      </h2>
    </div>
  );
};

export default StatCard;
