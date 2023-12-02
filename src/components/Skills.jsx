import React from "react";
import { Parallax } from "react-parallax";
import SkillsBG from "../assets/SkillsBG.mp4";

import Java from "../assets/java.png";
import Python from "../assets/py.png";
import HTML from "../assets/html.png";
import Tailwind from "../assets/tailwind.png";
import JS from "../assets/js.png";
import REACT from "../assets/react.png";
import GitHub from "../assets/github.png";
import CSS from "../assets/CSS.png";
import Firebase from "../assets/Firebase.png";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillItem = ({ image, alt, text }) => {
  const [ref, inView] = useInView({
    trigger: "fade",
    rootMargin: "-100px",
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
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants4}
      className="shadow-md shadow-[040c16]"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.75 }}
    >
      <img className="w-20 mx-auto scale-110" src={image} alt={alt} />
      <p className="my-[15.1px] text-2xl font-bold ">{text}</p>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div style={{ position: "relative" }}>
      <Parallax bgImage={SkillsBG} strength={1000}>
        <video
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src={SkillsBG} type="video/mp4" />
        </video>
      </Parallax>
      <div
        name="skills"
        className="w-full h-full text-[#8892b0]"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <motion.div>
            <p className="animate-pulse text-gray-300 text-4xl font-bold inline border-b-4 border-orange-600">
              Experience
            </p>
            <p className="text-3xl py-4">
              I can handle the following languages and frameworks.
            </p>
          </motion.div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-center py-8">
            <SkillItem image={Java} alt="Java icon" text="JAVA" />
            <SkillItem image={Python} alt="Python icon" text="PYTHON" />
            <SkillItem image={HTML} alt="Html icon" text="HTML" />
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 text-center py-8">
            <SkillItem image={CSS} alt="CSS icon" text="CSS" />
            <SkillItem image={Tailwind} alt="Tailwind icon" text="TAILWIND" />
            <SkillItem image={JS} alt="Javascript icon" text="JAVASCRIPT" />
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 text-center py-8">
            <SkillItem image={Firebase} alt="Firebase icon" text="FIREBASE" />
            <SkillItem image={REACT} alt="React icon" text="REACT" />
            <SkillItem image={GitHub} alt="Github icon" text="GITHUB" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
