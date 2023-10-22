import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a185f] text-[#8892b0]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-center pb-8 pl-4">
            <p className="bg-gradient-to-r from-red-500 to-yellow-600 animate-pulse bg-clip-text text-transparent text-4xl font-bold inline border-b-4 border-orange-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Hari, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="text-orange-600">
              I'm very much interested in animations and also a passionate
              gamer. Since, Web-dev is a hot topic, I have decided to spare some
              of my time to learn that too. Deep Learning is the next stop in my
              journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
