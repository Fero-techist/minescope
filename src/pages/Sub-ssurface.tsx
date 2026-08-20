import { useState } from "react";
import StatBlock from "../components/stats/StatBlock";
import { motion } from "framer-motion";
import { cardVariants } from "../animations/variants";
import GlobalOutputChart from "../components/sub-interface/GlobalOutputCard";
import ScanLine from "../components/UI/ScanLine";
import Text from "../components/text";
import { dataSets } from "../data/dataset";

const SubsurfaceInsightsCard: React.FC = () => {
  const [activeSet, setActiveSet] = useState(0);

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-[#0b1220] px-4 py-8 font-[Outfit]">
      <div className="flex flex-col md:flex-row gap-12 bg-white/[0.04] border border-white/[0.08] rounded-2xl md:p-10 p-6 max-w-7xl w-full shadow-[0_32px_80px_rgba(0,0,0,0.5)] backdrop-blur-md">
        <div className="flex flex-col flex-1 gap-4 md:w-50 shrink-0">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            viewport={{ amount: 0.3 }}
          >
            <Text
              variant="preheading"
              className=" font-[Outfit] mb-4"
            >
              Actionable Subsurface Insights
            </Text>
          </motion.div>

          <ScanLine />

          <p className="text-sm leading-relaxed text-slate-400">
            Our AI-driven analytics engine processes petabytes of geological
            data to provide predictive modeling on resource extraction and
            profitability.
          </p>

          <div className="flex gap-10 mt-2">
            <StatBlock
              target={84}
              suffix="%"
              label="PREDICTION ACCURACY"
            />

            <StatBlock
              target={2.4}
              decimals={1}
              suffix="M"
              label="Regions"
            />
          </div>

          <button className="mt-2 self-start px-5 py-2.5 bg-white/[0.06] border border-white/[0.12] rounded-lg text-slate-300 text-sm font-medium transition-all duration-200 hover:bg-emerald-400/10 hover:border-emerald-400/30 hover:text-emerald-400 cursor-pointer">
            Explore Analytics Documentation
          </button>
        </div>

        <div className="flex-1 flex items-center max-w-lg w-full">
          <GlobalOutputChart
            data={dataSets[activeSet]}
            activeSet={activeSet}
            onToggle={setActiveSet}
          />
        </div>
      </div>
    </div>
  );
};

export default SubsurfaceInsightsCard;
