import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/vince1.png";
import "../src/app/globals.css";
// need to update personal branding 
const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="py-4 uppercase text-xl tracking-widest text-[#3e37ff]">
            About
          </p>
          <h2 className="py-4 uppercase text-xl tracking-widest text-black dark:text-white">
            Who I am
          </h2>
          <p className="py-2 text-gray-700 dark:text-gray-300">
            I&apos;m a freelance web developer and the founder of{" "}
            <span className="font-semibold text-black dark:text-white">Virtual Vince</span>, a development
            practice focused on helping small businesses and organizations build
            a strong online presence. My client work spans a range of industries
            from community arts organizations and professional education
            platforms to health and wellness practices and automotive businesses.
          </p>
          <p className="py-2 text-gray-700 dark:text-gray-300">
            I specialize in building responsive, production-ready websites and
            apps using modern tooling including Next.js, React, Tailwind CSS,
            and TypeScript, with backend experience across Node.js, ASP.NET,
            Express, and cloud platforms like AWS, Azure, and GCP. I manage
            everything from initial scoping and design through to deployment and
            ongoing maintenance.
          </p>
          <p className="py-2 text-gray-700 dark:text-gray-300">
            Alongside my client work, I&apos;m completing an Advanced Diploma in
            Computer Programming and Analysis at George Brown College, where I&apos;m
            currently building a roguelike game headed to Steam as my capstone
            project. I bring the same professional standards to academic work
            that I apply to every client engagement.
          </p>
          <p className="py-2 text-gray-700 dark:text-gray-300">
            Check out my{" "}
            <Link href="/resume">
              <span className="text-[#3e37ff] hover:underline"> resume </span>
            </Link>{" "}
            or browse my{" "}
            <Link href="/#projects">
              <span className="text-[#3e37ff] hover:underline"> client work </span>
            </Link>
            .
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 dark:shadow-gray-800 rounded-xl flex items-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={AboutImg} alt="Vince" />
        </div>
      </div>
    </div>
  );
};

export default About;