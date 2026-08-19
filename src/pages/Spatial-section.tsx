import Text from "../components/text";
import { motion } from "framer-motion";
import FeatureItem from "../components/FeatureItem";
import { subtitleVariants } from "../animations/variants";
import MapCard from "../components/MapCard";

const SpatialSection = () => {
  return (
    <section className="grid md:grid-cols-2 bg-[#131B2E] gap-12 px-10 py-20 items-center">
      {/* LEFT */}
      <div>
        <Text
          variant="caption"
          className="text-green-400 font-[Outfit] tracking-widest"
        >
          GLOBAL PRESENCE
        </Text>

        <Text
          variant="heading"
          className="mt-4 font-[Outfit] leading-tight"
        >
          Real-Time <br /> Subsurface <br /> Spatial Intelligence
        </Text>

        <motion.div
          variants={subtitleVariants}
          initial="hidden"
          animate="show"
        >
          <Text
            variant="body"
            className="mt-6 max-w-lg font-[Nunito]"
          >
            Visualize multi-layered geological data across global territories.
            Our proprietary map engine renders complex terrain analysis and
            resource density in high-fidelity 3D environments.
          </Text>
        </motion.div>

        <div className="mt-6 space-y-3">
          <FeatureItem text="High-Resolution Strata Mapping" />
          <FeatureItem text="Real-time Satellite Feed Integration" />
        </div>

        <button className="mt-6 text-green-400 flex items-center gap-2">
          View Full Map →
        </button>
      </div>

      <MapCard />
    </section>
  );
};

export default SpatialSection;
