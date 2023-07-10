"use client";
import React from "react";
import { Section1, Section2, Section3, Section4, Section5 } from "./Dashboard";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <section className="w-full h-full">
      {/* Content */}
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <Section3 />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <Section4 />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <Section5 />
        </motion.div>
      </div>
    </section>
  );
};

export default Main;
