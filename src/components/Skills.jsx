import React from "react";

import Java from "../assets/java.png";
import Python from "../assets/py.png";
import Numpy from "../assets/numpy.png";
import HTML from "../assets/html.png";
import Tailwind from "../assets/tailwind.png";
import JS from "../assets/js.png";
import REACT from "../assets/react.png";
import GitHub from "../assets/github.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a185f] text-[#8892b0]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-orange-600">
            Experience
          </p>
          <p className="py-4">
            The first three are the ones I have mostly worked on. I'm slowly
            trying to master the rest.
          </p>
        </div>
        <div className="w-full grid grid-col-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Java} alt="Java icon" />
            <p className="my-[16.5px] text-2xl font-bold ">JAVA</p>
          </div>
          <div className="shadow-md shadow-[040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Python} alt="Python icon" />
            <p className="my-[45px] text-2xl font-bold ">PYTHON</p>
          </div>
          <div className="shadow-md shadow-[040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Numpy} alt="Numpy icon" />
            <p className="my-[40px] text-2xl font-bold ">NUMPY</p>
          </div>
          <div className="shadow-md shadow-[040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="Html icon" />
            <p className="my-[48px] text-2xl font-bold ">HTML</p>
          </div>
          <div className="shadow-md shadow-[040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-[48px] text-2xl font-bold ">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JS} alt="Javascript icon" />
            <p className="my-[48px] text-2xl font-bold ">JAVASCRIPT</p>
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
  );
};

export default Skills;
