import React from "react";
import { Parallax } from "react-parallax";
import SkillsBG from "../assets/SkillsBG.mp4";
import { motion } from "framer-motion";

import Java from "../assets/java.png";
import Python from "../assets/py.png";
import HTML from "../assets/html.png";
import Tailwind from "../assets/tailwind.png";
import JS from "../assets/js.png";
import REACT from "../assets/react.png";
import GitHub from "../assets/github.png";
import CSS from "../assets/CSS.png";
import Firebase from "../assets/Firebase.png";

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
          <div>
            <p className="animate-pulse text-gray-300 text-4xl font-bold inline border-b-4 border-orange-600">
              Experience
            </p>
            <p className="text-xl py-4">
              I can handle the following languages and frameworks.
            </p>
          </div>
          <div className="w-full grid grid-col-1 sm:grid-cols-3 gap-4 text-center py-8">
            <div className="shadow-md shadow-[040c16] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto scale-110"
                src={Java}
                alt="Java icon"
              />
              <p className="my-[15.1px] text-2xl font-bold ">JAVA</p>
            </div>

            <div className="mt-[20.5px] shadow-md shadow-[040c16] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto scale-125"
                src={Python}
                alt="Python icon"
              />
              <p className="my-[23px] text-2xl font-bold ">PYTHON</p>
            </div>
            <div className="mt-6 shadow-md shadow-[040c16] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto scale-125"
                src={HTML}
                alt="Html icon"
              />
              <p className="my-[22px] text-2xl font-bold ">HTML</p>
            </div>
          </div>
          <div className="w-full grid grid-col-1 sm:grid-cols-3 text-center py-8">
            <div className="shadow-md shadow-[040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={CSS} alt="Html icon" />
              <p className="my-[48px] text-2xl font-bold ">CSS</p>
            </div>
            <div className="shadow-md shadow-[040c16] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto"
                src={Tailwind}
                alt="Tailwind icon"
              />
              <p className="my-[48px] text-2xl font-bold ">TAILWIND</p>
            </div>
            <div className="shadow-md shadow-[040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={JS} alt="Javascript icon" />
              <p className="my-[48px] text-2xl font-bold ">JAVASCRIPT</p>
            </div>
          </div>
          <div className="w-full grid grid-col-1 sm:grid-cols-3 text-center py-8">
            <div className="shadow-md shadow-[040c16] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto"
                src={Firebase}
                alt="Firebase icon"
              />
              <p className="my-[48px] text-2xl font-bold ">FIREBASE</p>
            </div>
            <div className="shadow-md shadow-[040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={REACT} alt="React icon" />
              <p className="my-[48px] text-2xl font-bold ">REACT</p>
            </div>
            <div className="shadow-md shadow-[040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={GitHub} alt="Github icon" />
              <p className="my-[48px] text-2xl font-bold ">GITHUB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
