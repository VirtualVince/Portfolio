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
          <p className="uppercase text-sm tracking-widest text-muted">
            Software Engineer &amp; Founder of Virtual Vince
          </p>
          <h1 className="py-4 text-content">
            Hi, I&#39;m <span className="text-accent"> Vince</span>
          </h1>
          <h1 className="py-2 text-content">A Software Engineer</h1>
          <p className="py-4 text-muted sm:max-w-[70%] m-auto">
            I build and run websites and web apps for clients through my business,
            Virtual Vince. Lately I&#39;ve been moving toward embedded and backend
            systems work, which is where I want to end up.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/vincente-sequeira-1824b4245/">
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-raised text-content">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://www.youtube.com/@virtualvincebuilds">
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-raised text-content">
                <FaYoutube />
              </div>
            </a>
            <a href="https://github.com/VirtualVince">
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-raised text-content">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-raised text-content">
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