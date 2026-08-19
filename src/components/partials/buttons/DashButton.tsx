import React, { type FC } from "react";
import { formatWeight } from "../../../utils/helper.util";

type variants =
  | "primary"
  | "secondary"
  | "tertiary"
  | "outline"
  | "others"
  | "danger";
interface IDashButton {
  title: string;
  variant: variants;
  className: string;
  color: string;
  weight: string;
  width: string;
  icon: React.ReactNode;
  onClick(): void;
}

const DashButton: FC<Partial<IDashButton>> = ({
  title,
  variant = "primary",
  className,
  color,
  weight = "semibold",
  width,
  icon,
  onClick,
}) => {
  const formatVariant = (variant: variants): string => {
    let result: string = "";

    if (variant === "primary") {
      result =
        "bg-gradient-to-r from-emerald-400 to-cyan-400  hover:bg-green-300";
    } else if (variant === "secondary") {
      result = "bg-[#152340] text-white hover:bg-[#0A192F]";
    } else if (variant === "tertiary") {
      result = "bg-[#0A192F] text-white hover:bg-[#152340]";
    } else if (variant === "outline") {
      result = "border border-gray-500 text-white hover:bg-gray-800";
    } else if (variant === "others") {
      result = " border border-blue-400 text-white hover:bg-blue-500";
    } else if (variant === "danger") {
      result = "bg-red-500 text-white hover:bg-red-600";
    }
    return result;
  };

  return (
    <button
      className={`py-4 font-Outfit rounded-2xl shadow-lg shadow-emerald-500/20 hover:scale-[1.03] transition flex justify-center items-center gap-2 
        ${className} 
        ${formatVariant(variant)}
        ${color ? color : "text-black"}
        ${formatWeight(weight ? weight : "semibold")}
        ${width ? width : "min-w-[135px]"}
        `}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}

      <span>{title}</span>
    </button>
  );
};

export default DashButton;
