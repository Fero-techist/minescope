import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Button from "../components/partials/buttons/Button";
import Badge from "../components/UI/Badge";
import Text from "../components/text";
import DashButton from "../components/partials/buttons/DashButton";

const Hero = () => {
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const subtitleVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.6 },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.92 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut", delay: 0.85 },
    },
  };

  const headingWords = [
    "Smart Mineral Resource",
    "Management &",
    "Geo-Analytics Platform",
  ];

  return (
    <section className="text-center md:mt-20 mt-10 md:px-6 px-4 py-20">
      <Badge text="REVOLUTIONIZING SUBSURFACE INTELLIGENCE" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mt-4"
      >
        <Text
          variant="heading"
          className="font-[Outfit] leading-tight"
        >
          {headingWords.map((line, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className="block"
            >
              {i === 2 ? <span className="text-green-400">{line}</span> : line}
            </motion.span>
          ))}
        </Text>
      </motion.div>

      <motion.div
        variants={subtitleVariants}
        initial="hidden"
        animate="show"
      >
        <Text
          variant="body"
          className="mt-6 max-w-xl mx-auto"
        >
          Harness advanced geological datasets and real-time environmental
          monitoring to optimize global resource discovery and management
        </Text>
      </motion.div>

      <motion.div
        variants={buttonVariants}
        initial="hidden"
        animate="show"
        className="flex justify-center gap-4 mt-8"
      >
        {/* <Button>Explore Map</Button> */}
        <DashButton
          variant="primary"
          title="Explore Map"
        />
        <Button variant="outline">Get Started</Button>
      </motion.div>
    </section>
  );
};

export default Hero;
