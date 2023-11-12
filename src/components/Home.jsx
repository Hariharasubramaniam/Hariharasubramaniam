import React from "react";
import Typed from "react-typed";
import Bg from "../assets/Background.mp4";
import { HiArrowNarrowRight } from "react-icons/hi";
import MyPhoto from "../assets/Photo.jpeg";
import { Parallax } from "react-parallax";

const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <Parallax bgImage={Bg} strength={1000}>
        <video
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src={Bg} type="video/mp4" />
        </video>
      </Parallax>
      <div
        name="home"
        className="w-full h-full flex justify-center items-center"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="text-left pr-20">
          <p className="text-orange-500 text-3xl font-semibold">
            Hi, my name is
          </p>
          <h1 className="bg-gradient-to-r from-[#6cffdfe7] to-yellow-400 bg-clip-text text-transparent text-4xl my-2 sm:text-5xl font-bold">
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
              Learning &nbsp;
              <Typed
                strings={["Web-Dev", "Deep Learning"]}
                typeSpeed={60}
                backSpeed={30}
                loop={true}
              />
            </h2>
          </div>
          <p className="text-orange-500 py-4 max-w-[700px] text-[21px]">
            I have a strong hand in Music.<br></br>Very much interested in
            front-end development🤩
          </p>
          <div>
            <button className="text-white rounded-lg group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-600 hover:border-orange-600">
              View work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="flex justify-center items-center" />
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
    </div>
  );
};

export default Home;
