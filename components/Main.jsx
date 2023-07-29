import Link from "next/link";
import React from "react";

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
          <h1 className="py-2 text-[#000000] ">A Front-End Web Developer</h1>
          <p className="py-4 text-[#000000]  sm:max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
