import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full bg-[#000000]  pb-20 text-[#a28be0]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full h-[140px] grid grid-cols-2 gap-8">
          <div className="sm:text-center pb-8 pl-4">
            <p className="text-gray-300 animate-pulse text-4xl font-bold inline border-b-4 border-orange-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1100px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Hari, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="text-xl text-orange-400">
              I'm a 3rd year Artificial Intelligence student at Amrita
              University. Being naturally talented in Music🎙️, exploring deep
              into the world of software development🤩 and AI Always open for
              learning and ready to take up new challenges💪
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
