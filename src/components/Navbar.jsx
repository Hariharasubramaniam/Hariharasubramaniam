import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import MyVideo from "../assets/Hari.mp4";
import Bg from "../assets/Background.jpg";
import { Parallax } from "react-parallax";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <Parallax
      className="image"
      blur={{ min: -1, max: 1 }}
      bgImage={Bg}
      strength="1000"
    >
      <div
        className="fixed w-full h-[95px] flex justify-between items-center px-4
      bg-[#0a185f] text-blue-200"
      >
        <div>
          <video src={MyVideo} autoPlay loop muted style={{ width: "90px" }} />
        </div>

        {/* menu */}
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Experience</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#11175e] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Experience</li>
          <li className="py-6 text-4xl">Work</li>
          <li className="py-6 text-4xl">Contact</li>
        </ul>

        {/* Social */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[black]">
              <a
                className="flex justify-between items-center w-full text-white"
                href="https://github.com/ig-BaymaX"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-blue-900">
              <a
                className="flex justify-between items-center w-full text-white"
                href="https://www.linkedin.com/in/s-hariharasubramaniam-69a1a926a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
              <a
                className="flex justify-between items-center w-full text-white"
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#df16df]">
              <a
                className="flex justify-between items-center w-full text-white"
                href="https://www.instagram.com/_._h.a.r.iii.__/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram <FaInstagram size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Parallax>
  );
};

export default Navbar;
