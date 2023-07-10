import React from "react";
import { Section1, Section2 } from "./Tables";
import { motion } from "framer-motion";

const TablesList = () => {
  return (
    <div className="px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <Section1 />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <Section2 />
      </motion.div>
    </div>
  );
};

export default TablesList;
