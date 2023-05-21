import React from "react";
import {motion as m} from "framer-motion"
import { downAnimation, leftAnimation, rightAnimation, upAnimation, zoomInAnimation, zoomOutAnimation } from "../animation/animation-whileinview";

const ScrollItem = ({ color, text,animated }) => {
  return (
    <m.div

          
          initial={animated.initial}
          whileInView={animated.whileInView}
          transition={{ duration: 1.5, type: "spring", bounce: 0.25 }}

      className={`w-screen mx-auto h-screen ${color} grid place-items-center text-6xl text-white`}
    >
      {text}
    </m.div>
  );
};
const ScrollTriggerWhileInView = () => {
  return (
    <div className="space-y-10 overflow-x-hidden">
      <ScrollItem color="bg-blue-500" text="RIGHT" animated={rightAnimation} />
      <ScrollItem color="bg-red-500" text="LEFT" animated={leftAnimation}/>
      <ScrollItem color="bg-orange-500" text="UP" animated={upAnimation}/>
      <ScrollItem color="bg-yellow-500" text="DOWN" animated={downAnimation}/>
      <ScrollItem color="bg-purple-500" text="ZOOM IN" animated={zoomInAnimation}/>
      <ScrollItem color="bg-gray-500" text="ZOOM OUT" animated={zoomOutAnimation}/>
    </div>
  );
};

export default ScrollTriggerWhileInView;
