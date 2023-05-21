import { motion as m } from "framer-motion";

const XYAnimation = () => {
  return (
    <div className="space-y-10">
      <m.div
        className="w-[100px] h-[100px] bg-red-500"
        initial={{ x: 600 }}
        animate={{ x: 0 }}
        transition={{ duration: 3 }}
      ></m.div>
      <m.div
        className="w-[100px] h-[100px] bg-red-500"
        initial={{ x: 600 }}
        animate={{ x: -100 }}
        transition={{ duration: 3 }}
      ></m.div>
      <m.div
        className="w-[100px] h-[100px] bg-blue-500"
        initial={{ y: 600 }}
        animate={{ y: -100 }}
        transition={{ duration: 3 }}
      ></m.div>
      <m.div
        className="w-[100px] h-[100px] bg-blue-500"
        initial={{ y: -600 }}
        animate={{ y: 100 }}
        transition={{ duration: 3 }}
      ></m.div>
    </div>
  );
};

export default XYAnimation;
