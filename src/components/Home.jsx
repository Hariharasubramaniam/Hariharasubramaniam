import React from "react";
import Typed from "react-typed";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#0a185f]">
      {/* Container */}
      <div className="max-w-[1080px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-orange-600 text-3xl font-semibold">Hi, my name is</p>
        <h1 className="text-4xl my-2 sm:text-5xl font-bold text-[#ccd6f6]">
          S.Hariharasubramaniam
        </h1>
        <div>
          <h2 className="text-4xl my-2 sm:text-5xl font-bold text-[#8892b0]">
            I'm a&nbsp;
            <Typed
              strings={["Musician", "Sportsman", "Passionate Gamer"]}
              typeSpeed={60}
              backSpeed={30}
              loop={true}
            />
          </h2>
          <h2 className="text-4xl sm:text-5xl my-2 font-bold text-[#5a6176]">
            Tyro in &nbsp;
            <Typed
              strings={["Web-Dev", "Deep Learning"]}
              typeSpeed={60}
              backSpeed={30}
              loop={true}
            />
          </h2>
        </div>
        <p className="text-orange-700 py-4 max-w-[700px]">
          I have a strong hand in Music and sound editing. My aim is to
          implement AI in Music.🤩
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex item-center hover:bg-orange-600 hover:border-orange-600">
            View work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
