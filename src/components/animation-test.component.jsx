import { motion } from "framer-motion";

const AnimationTest = () => {
  return (
    <motion.div
      className="w-[100px] h-[100px] bg-red-500 rounded-full"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default AnimationTest;
