import React from "react";
// import Sleep from "../assets/SleepECG.png";
import HandImg from "../assets/Hand.jpg";
// import Todo from "../assets/Todo.jpeg";

const Work = () => {
  return (
    <div name="work" className="w-full md:screen text-[#8892b0] bg-[#0a185f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="animate-pulse text-4xl font-bold inline border-b-4 text-[#8892b0] border-orange-600">
            Work
          </p>
          <p className="py-6">Check out some of my works.</p>
        </div>
        <div
          style={{ backgroundImage: `url(${HandImg})` }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center item-center mx-auto content-div">
            {/* Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Hand Gesture Recognition
              </span>
              <div>
                <a href="/">
                  <button>Code</button>
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
