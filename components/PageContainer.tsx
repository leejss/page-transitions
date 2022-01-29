import type { FC } from "react";
import type { Variants, Transition } from "framer-motion";
import { motion } from "framer-motion";
import React from "react";

const variants: Variants = {
  initial: {
    opacity: 0.1,
    x: -100,
    y: 0,
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
  },
  exit: {
    opacity: 0,
    x: 0,
    y: -100,
  },
};

const transition: Transition = {
  ease: "easeInOut",
};

const PageContainer: FC = ({ children }) => {
  return (
    <motion.main
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
      transition={transition}
    >
      {children}
    </motion.main>
  );
};

export default PageContainer;
