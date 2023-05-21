import React from "react";
import { motion as m } from "framer-motion";

const animations = {
  initial: { opacity: 0, x: -200, y: 0 },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1.5,
      type: "tween",
    },
  },
  exit: {
    opacity: 0,
    x: 0,
    y: -100,
    transition: {
      duration: 1.5,
      type: "tween",
    },
  },
};

const AnimatedLayout = ({ children }) => {
  return (
    <m.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </m.div>
  );
};

export default AnimatedLayout;
