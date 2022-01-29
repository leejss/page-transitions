import type { FC } from "react";
import type { Variants, Transition } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const variants: Variants = {
  initial: {
    opacity: 0.1,
    x: -100,
  },
  start: {
    opacity: 1,
    x: 0,
  },
  end: {
    opacity: 0,
    // x: 200,
    y: -100,
  },
};

const transition: Transition = {
  ease: "easeInOut",
};

const PageMotionContainer: FC = ({ children }) => {
  return (
    <motion.main
      variants={variants}
      initial="initial"
      animate="start"
      exit="end"
      transition={transition}
    >
      {children}
    </motion.main>
  );
};

export default PageMotionContainer;
