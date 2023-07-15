import React from "react";
import Typed from "react-typed";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#0a185f]">
      {/* Container */}
      <div className="max-w-[1080px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-orange-600 text-3xl font-semibold">Hi, my name is</p>
        <h1 className="animate-pulse bg-gradient-to-r from-[#9fb2eb] via-yellow-500 to-violet-700 bg-clip-text text-transparent text-4xl my-2 sm:text-5xl font-bold">
          S.Hariharasubramaniam
        </h1>
        <div>
          <h2 className="text-4xl my-2 sm:text-5xl font-bold text-[#9fb2eb]">
            I'm into&nbsp;
            <Typed
              strings={["Music", "Sports", "Gaming"]}
              typeSpeed={60}
              backSpeed={30}
              loop={true}
            />
          </h2>
          <h2 className="text-4xl sm:text-5xl my-2 font-bold text-[#e6c94b]">
            Tyro in &nbsp;
            <Typed
              strings={["Web-Dev", "Deep Learning"]}
              typeSpeed={60}
              backSpeed={30}
              loop={true}
            />
          </h2>
        </div>
        <p className="text-orange-600 py-4 max-w-[700px] text-[21px]">
          I have a strong hand in Music and very much interested in front-end
          development🤩
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex item-center hover:bg-orange-600 hover:border-orange-600">
            View work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="flex ml-3 justify-center items-center" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
