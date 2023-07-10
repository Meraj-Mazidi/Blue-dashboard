import React from "react";
import { motion } from "framer-motion";
import { Section1, Section2 } from "./Profile";

const UserProfile = () => {
  return (
    <section className="w-full px-4 grid grid-cols-1 lg:grid-cols-6 gap-5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="lg:col-span-4 order-2 lg:order-1"
      >
        <Section1 />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="lg:col-span-2 order-1 lg:order-1"
      >
        <Section2 />
      </motion.div>
    </section>
  );
};

export default UserProfile;
