import { motion as m } from "framer-motion";
const VariantsAnimation = () => {
  const divVariant = {
    hidden: { x: -100, opacity: 0 },
    show: { x: 600, opacity: 1, transition: { duration: 4 } },
  };

  return (
    <>
      <m.div
        variants={divVariant}
        initial="hidden"
        animate="show"
        className="inline-block p-5 bg-red-500"
      >
        Slider Right
      </m.div>
      <m.div
        variants={divVariant}
        initial="hidden"
        animate="show"
        className="inline-block p-5 bg-red-500"
      >
        Slider Right
      </m.div>
      <m.div
        variants={divVariant}
        initial="hidden"
        animate="show"
        className="inline-block p-5 bg-red-500"
      >
        Slider Right
      </m.div>
    </>
  );
};

export default VariantsAnimation;
