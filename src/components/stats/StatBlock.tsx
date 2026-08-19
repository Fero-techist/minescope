// components/stats/StatBlock.tsx

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

import type { StatBlockProps } from "../../types";

const StatBlock: React.FC<StatBlockProps> = ({
  target,
  decimals = 0,
  suffix,
  label,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const count = useMotionValue(0);

  const rounded = useTransform(count, (v) =>
    decimals > 0 ? v.toFixed(decimals) + suffix : Math.round(v) + suffix,
  );

  // useEffect(() => {
  //   const controls = animate(count, target, {
  //     duration: 1.4,
  //     ease: [0.22, 1, 0.36, 1],
  //   });
  //   return controls.stop;
  // }, [count, target]);
  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    });

    return controls.stop;
  }, [count, target, isInView]);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-1"
    >
      <motion.span className="text-3xl font-bold text-emerald-400">
        {rounded}
      </motion.span>
      <span className="text-xs text-slate-500 uppercase">{label}</span>
    </div>
  );
};

export default StatBlock;
