import React from "react";
import { Parallax } from "react-parallax";
import Bgskills from "../assets/SkillsBG.jpg";

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
    <Parallax className="image" bgImage={Bgskills} strength="1000">
      <div name="skills" className="w-full h-screen text-[#8892b0]">
        {/* Container */}
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
              <img className="w-20 mx-auto" src={Java} alt="Java icon" />
              <p className="my-[16.5px] text-2xl font-bold ">JAVA</p>
            </div>
            <div className="shadow-md shadow-[040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Python} alt="Python icon" />
              <p className="my-[45px] text-2xl font-bold ">PYTHON</p>
            </div>
            <div className="shadow-md shadow-[040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={HTML} alt="Html icon" />
              <p className="my-[48px] text-2xl font-bold ">HTML</p>
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
    </Parallax>
  );
};

export default Skills;
