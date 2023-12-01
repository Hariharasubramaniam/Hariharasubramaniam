import React from "react";
import Sleep from "../assets/SleepECG.png";
import HandImg from "../assets/Hand.jpeg";
import Todo from "../assets/Todo.jpeg";
import WorkBG from "../assets/Work.jpg";
import { Parallax } from "react-parallax";

const Work = () => {
  return (
    <div name="work" className="w-full md:screen text-[#a28be0] bg-black">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="animate-pulse text-4xl font-bold inline border-b-4 text-gray-300 border-orange-600">
            Work
          </p>
          <p className="text-3xl py-6">Check out some of my works🧑‍💻</p>
        </div>

        {/* Container  */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${HandImg})` }}
            className="p-2 glowing-border group container rounded-md flex justify-center item-center mx-auto content-div"
          >
            {/* Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-50">
              <span className="text-2xl font-bold text-white tracking-wider">
                Hand Gesture Recognition
              </span>
              <div>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Todo})` }}
            className="p-2 glowing-border group container rounded-md flex justify-start item-center mx-auto content-div2"
          >
            {/* Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-4xl font-bold text-red-400 tracking-wider">
                To-do App
              </span>
              <div>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Sleep})` }}
            className="p-2 glowing-border group container rounded-md flex justify-center item-center mx-auto content-div3"
          >
            {/* Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-yellow-400 tracking-wider">
                Rhythmic Rest: ECG powered Sleep Apnea Predictor
              </span>
              <div>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
