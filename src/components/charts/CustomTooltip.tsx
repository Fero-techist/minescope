// components/chart/CustomTooltip.tsx

import { motion } from "framer-motion";
import type { CustomTooltipProps } from "../../types";

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (!active || !payload?.length) return null;

  return (
    <motion.div className="bg-[#131e2e] border rounded-lg px-3 py-2">
      <p>{label}</p>
      <p className="text-emerald-400">{payload[0].value}M bbl</p>
    </motion.div>
  );
};

export default CustomTooltip;
