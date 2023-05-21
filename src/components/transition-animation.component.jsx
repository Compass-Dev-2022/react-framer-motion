import { motion as m } from "framer-motion";
const TransitionAnimation = () => {
  return (
    <m.div
      initial={{ x: 0 }}
      animate={{ x: 500 }}
      transition={{ ease: "easeInOut", duration: 4, repeat: "Infinity" }} //duration,delay,type,ease
      className="w-[100px] h-[100px] bg-red-500 rounded-full"
    ></m.div>
  );
};

export default TransitionAnimation;
