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
            I build and run websites and web apps for clients through my business,{" "}
            <span className="font-semibold text-black dark:text-white">Virtual Vince</span>.
            The work spans community arts organizations, professional education,
            health practices and e-commerce. I do not just build these, I operate
            them, including the multi-tenant Ubuntu server several of them are
            deployed to.
          </p>
          <p className="py-2 text-gray-700 dark:text-gray-300">
            Day to day that means Next.js, TypeScript and Tailwind on the front,
            Node, Express and GraphQL behind it, and Linux underneath. I also
            co-founded{" "}
            <span className="font-semibold text-black dark:text-white">Orpheus</span>,
            version control for music production, where I own the backend schema and
            the validation on everything written to the database.
          </p>
          <p className="py-2 text-gray-700 dark:text-gray-300">
            Lately I have been moving toward embedded and backend systems work, which
            is where I want to end up. That looks like Arduino builds on the bench and
            distributed systems primitives written from scratch in Go. I hold an
            Advanced Diploma in Computer Programming and Analysis from George Brown
            College, finishing on the Dean&apos;s List.
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