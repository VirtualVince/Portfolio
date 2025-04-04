import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa6";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-[#000000]">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-[#000000] ">
            Hi, I&#39;m <span className="text-[#3e37ff]"> Vince</span>
          </h1>
          <h1 className="py-2 text-[#000000] ">A Software Engineer</h1>
          <p className="py-4 text-[#000000]  sm:max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className="flex items -center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/vincente-sequeira-1824b4245/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://www.twitch.tv/c0d3x7747">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-duration-300">
                <FaTwitch />
              </div>
            </a>
            <a href="https://github.com/VirtualVince  ">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact ">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-duration-300">
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
