import { motion as m } from "framer-motion";
const OtherPropertiesAnimation = () => {
  return (
    <div>
      <m.div
        className="w-[100px] h-[100px] bg-red-500"
        initial={{ rotate: 0 }} // scale,opacity
        animate={{ rotate: 360 }}
        transition={{ duration: 3 }}
      ></m.div>
      <m.p
        initial={{ fontSize: "16px" }}
        animate={{ fontSize: "60px" }}
        transition={{ duration: 3 }}
      >
        Hello World
      </m.p>
    </div>
  );
};

export default OtherPropertiesAnimation;
