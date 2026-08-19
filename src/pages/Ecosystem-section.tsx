import { motion } from "framer-motion";
import FeatureCard from "../components/featureCard";
// import type { Variants } from "framer-motion";
import Text from "../components/text";
import ecosystemData from "../data/ecosystem";

const EcosystemSection = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="px-10 py-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={headerVariants}>
          <Text
            variant="preheading"
            className="text-center font-[Outfit] mb-2"
          >
            Advanced Resource Ecosystem
          </Text>
        </motion.div>

        <motion.div variants={headerVariants}>
          <Text
            variant="body"
            className="text-center max-w-xl mx-auto font-[Lato] mb-12"
          >
            Integrated tools designed for precision engineering and regulatory
            compliance in the modern mining landscape.
          </Text>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 max-w-7xl mx-auto lg:grid-cols-4 gap-6 my-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {ecosystemData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
            >
              <FeatureCard
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EcosystemSection;
