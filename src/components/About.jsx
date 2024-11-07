import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: "-50px",
    threshold: 0.5,
  });

  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div name="about" className="w-full pb-21 text-[#a28be0]">
      <div className="bg-[#000000] pb-20">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full h-[140px] grid grid-cols-2 gap-8">
            <motion.div
              className="sm:text-center mt-10 pb-8 pl-4"
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideUp}
              transition={{ duration: 0.6 }}
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
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideRight}
              transition={{ duration: 0.6 }}
            >
              <p>Hi. I'm Hari, nice to meet you. Please take a look around.</p>
            </motion.div>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideLeft}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl text-orange-400">
                I'm a 3rd year Artificial Intelligence student at Amrita
                University. Being naturally talented in Music🎙️, exploring deep
                into the world of software development🤩 and AI. Always open to
                learning and ready to take up new challenges💪.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
