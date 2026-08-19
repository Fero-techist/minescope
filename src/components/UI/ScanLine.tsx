// components/ui/ScanLine.tsx

import { motion } from "framer-motion";

const ScanLine = () => (
  <motion.div
    className="absolute inset-x-0 h-px"
    animate={{ top: ["0%", "100%"] }}
    transition={{ duration: 3, repeat: Infinity }}
  />
);

export default ScanLine;
