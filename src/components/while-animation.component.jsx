import { motion as m } from "framer-motion";
const WhileAnimation = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <m.input
        type="text"
        className="px-5 py-3 text-xl text-white bg-blue-500 border border-red-500 rounded-md"
        whileFocus={{
          scale: 1.5,
          transition: { duration: 3 },
        }}
      />
    </div>
  );
};

export default WhileAnimation;
