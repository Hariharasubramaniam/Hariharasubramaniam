import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideAnimation, fadeAnimation } from "../config/motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    trigger: "fade",
    rootMargin: "-25px",
    threshold: 1,
  });

  const variants1 = {
    hidden: { opacity: 0.6, scale: 0.75, y: 100 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };
  const variants2 = {
    hidden: { opacity: 0.6, scale: 0.75, x: 200, y: 200 },
    visible: { opacity: 1, scale: 1, x: 0, y: 0 },
  };
  const variants3 = {
    hidden: { opacity: 0.6, scale: 0.75, x: -200, y: 200 },
    visible: { opacity: 1, scale: 1, x: 0, y: 0 },
  };
  const variants4 = {
    hidden: { opacity: 0.3, scale: 0.75, y: -100 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <div name="about" className="float-up w-full pb-21 text-[#a28be0]">
      {" "}
      {/* Shifted background by 1px */}
      <div className="bg-[#000000] pb-20">
        {" "}
        {/* Black background */}
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full h-[140px] grid grid-cols-2 gap-8">
            <motion.div
              className="sm:text-center mt-10 pb-8 pl-4"
              ref={ref}
              animate={inView ? "visible" : "hidden"}
              variants={variants4}
              transition={{ duration: 0.45 }}
            >
              <p className="text-gray-300 animate-pulse text-4xl font-bold inline border-b-4 border-orange-600">
                About
              </p>
            </motion.div>
          </div>
          <div className="max-w-[1100px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <motion.div
              className="sm:text-right text-4xl font-bold"
              ref={ref}
              animate={inView ? "visible" : "hidden"}
              variants={variants3}
              transition={{ duration: 1 }}
            >
              <p>Hi. I'm Hari, nice to meet you. Please take a look around.</p>
            </motion.div>
            <motion.div
              ref={ref}
              animate={inView ? "visible" : "hidden"}
              variants={variants2}
              transition={{ duration: 1 }}
            >
              <p className="text-xl text-orange-400">
                I'm a 3rd year Artificial Intelligence student at Amrita
                University. Being naturally talented in Music🎙️, exploring deep
                into the world of software development🤩 and AI Always open for
                learning and ready to take up new challenges💪
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
