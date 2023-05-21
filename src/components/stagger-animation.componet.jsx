import { motion as m } from "framer-motion";
const StaggerAnimation = () => {
  const childDivClass = "w-full grid place-items-center h-[200px]";
  const parentVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0, // this will set a delay before the children start animating
        staggerChildren: 0.3, // this will set the time inbetween children animation
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        mass: 0.3,
      },
    },
  };
  return (
    <div>
      <h1 className="text-center">Stagger Animation</h1>

      <m.div
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        className="grid w-full grid-cols-4"
      >
        <m.div
          variants={childVariants}
          className={`${childDivClass} bg-red-300`}
        >
          1
        </m.div>
        <m.div
          variants={childVariants}
          className={`${childDivClass} bg-blue-400`}
        >
          2
        </m.div>
        <m.div
          variants={childVariants}
          className={`${childDivClass} bg-gray-500`}
        >
          3
        </m.div>
        <m.div
          variants={childVariants}
          className={`${childDivClass} bg-purple-500`}
        >
          4
        </m.div>
        <m.div
          variants={childVariants}
          className={`${childDivClass} bg-orange-500`}
        >
          5
        </m.div>
        <m.div
          variants={childVariants}
          className={`${childDivClass} bg-yellow-400`}
        >
          6
        </m.div>
        <m.div
          variants={childVariants}
          className={`${childDivClass} bg-slate-600`}
        >
          8
        </m.div>
        <m.div
          variants={childVariants}
          className={`${childDivClass} bg-slate-900`}
        >
          9
        </m.div>
      </m.div>
    </div>
  );
};

export default StaggerAnimation;
