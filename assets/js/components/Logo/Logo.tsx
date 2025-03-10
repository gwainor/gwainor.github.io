import * as React from "react";
import { motion } from "motion/react";

export const Logo = () => {
  return (
    <motion.a
      href="/"
      className="group block transition-colors duration-150 hover:text-primary"
    >
      <h1 className="text-5xl font-semibold">
        <span className="transition-colors duration-300">g</span>
        <span className="inline-block w-0 opacity-0 transition-all duration-300 group-hover:w-45 group-hover:opacity-100">
          okhan
        </span>
        <span className="transition-colors duration-300">ozt</span>
        <span className="inline-block w-0 opacity-0 transition-all duration-300 group-hover:w-8 group-hover:opacity-100">
          u
        </span>
        <span className="transition-colors duration-300">rk</span>
      </h1>
    </motion.a>
  );
};
