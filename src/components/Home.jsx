import React from "react";
import Typed from "react-typed";
import { HiArrowNarrowRight } from "react-icons/hi";
import MyPhoto from "../assets/Photo.jpeg";

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#0a185f] flex justify-center items-center">
      <div className="text-left pr-20">
        <p className="text-orange-600 text-3xl font-semibold">Hi, my name is</p>
        <h1 className="animate-pulse bg-gradient-to-r from-[#81a0ff] to-yellow-500 bg-clip-text text-transparent text-4xl my-2 sm:text-5xl font-bold">
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
          I have a strong hand in Music.<br></br>Very much interested in
          front-end development🤩
        </p>
        <div>
          <button className="text-white rounded-lg group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-600 hover:border-orange-600">
            View work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="flex ml-3 justify-center items-center" />
            </span>
          </button>
        </div>
      </div>
      <div className="rounded-full border-[#46179c] p-2 glowing-border">
        <img
          className="w-80 rounded-full shadow-[0_0_75px_theme('colors.blue.500'),0_0_50px_theme('colors.violet.700'),0_0_75px_theme('colors.red.500')]"
          src={MyPhoto}
          alt="My Photo"
        />
      </div>
    </div>
  );
};

export default Home;
