import React from "react";
import { motion } from "framer-motion";
import { Section1 } from "./GoogleMap";

const Map = () => {
  return (
    <section className="w-full h-full px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <Section1 />
      </motion.div>
    </section>
  );
};

export default Map;
