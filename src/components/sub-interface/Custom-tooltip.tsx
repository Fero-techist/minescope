import { motion } from "framer-motion";

const CustomTooltip = ({ active, payload, label }: any) => {
  // const itemVariants: Variants = {
  //   hidden: { opacity: 0, y: 12 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  //   },
  // };

  if (!active || !payload?.length) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 4, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="bg-[#131e2e] border border-emerald-500/25 rounded-lg px-3 py-2 shadow-xl"
    >
      <p className="text-[9px] font-mono text-slate-500 tracking-widest">
        {label}
      </p>
      <p className="text-sm font-bold text-emerald-400 mt-0.5">
        {payload[0].value}M bbl
      </p>
    </motion.div>
  );
};
export default CustomTooltip;
