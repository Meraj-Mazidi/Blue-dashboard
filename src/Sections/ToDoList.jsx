import React from "react";
import { Section1 } from "./ToDo";
import { motion } from "framer-motion";

const ToDoList = () => {
  return (
    <section className="w-full px-4">
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

export default ToDoList;
