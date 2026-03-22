"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-black dark:text-gray-400">
            Freelance Software Engineer &amp; Founder of Virtual Vince
          </p>
          <h1 className="py-4 text-black dark:text-white">
            Hi, I&#39;m <span className="text-[#3e37ff]"> Vince</span>
          </h1>
          <h1 className="py-2 text-black dark:text-white">A Software Engineer</h1>
          <p className="py-4 text-gray-600 dark:text-gray-400 sm:max-w-[70%] m-auto">
            I build production websites and web apps for real clients
            from community organizations and e-commerce stores to health
            practices and automotive businesses.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/vincente-sequeira-1824b4245/">
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white dark:bg-[#1a1a1a] text-black dark:text-white">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://www.youtube.com/@vssincorporated">
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white dark:bg-[#1a1a1a] text-black dark:text-white">
                <FaYoutube />
              </div>
            </a>
            <a href="https://github.com/VirtualVince">
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white dark:bg-[#1a1a1a] text-black dark:text-white">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white dark:bg-[#1a1a1a] text-black dark:text-white">
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