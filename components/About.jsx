import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from "../public/assets/vince1.png";
import '../src/app/globals.css';

const About = () => {
  return (
    <div id = "about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="py-4 uppercase text-xl tracking-widest text-[#3e37ff]">
            About
          </p>
          <h2 className="py-4 uppercase text-xl tracking-widest">Who I am?</h2>
          <p className="py-2">
            I am an analytical, innovative, and motivated professional in web
            development. Throughout my career, I have gained experience
            in customer service, team leadership, and organizational
            effectiveness in dynamic and demanding environments. I excel at
            developing strategies and implementing streamlined operations to
            enhance efficiency. Overall, I am a dedicated professional who is
            driven by a passion for web development. My qualifications and
            experiences have equipped me with the necessary skills to excel in
            this field, and I am committed to continuous learning and growth to
            stay at the forefront of industry trends.
          </p>
          <h2 className="py-4 uppercase text-xl tracking-widest">What I&apos;ve Built?</h2>
          <p className="py-2">
          I recently developed this website using some powerful technologies to 
          create a seamless and visually appealing online experience. I used
          NextJS, which is a modern web framework that ensures faster loading
          times and smoother navigation. To give the website a polished and 
          stylish look, I leveraged Tailwind CSS, a cutting-edge design system 
          that allows for quick and efficient customization. Additionally, I 
          incorporated TypeScript, a type checking language, to ensure the 
          website&apos; code is more robust, reliable, and less prone to errors. 
          These technologies not only enhance the website&apos; performance but also 
          make it easier for future maintenance and expansion. As a developer, 
          I&apos;m adept at utilizing these tools to build efficient, user-friendly, 
          and visually striking websites, making me a valuable asset to any employer 
          looking to create a strong online presence.
          </p>
        </div>
          <div className="w-full h-auto m-auto shadow-xl rounded-xl flex items-center p-4 hover:scale-105 ease-in duration-300 grid-cols-6">
            <Image className="rounded-xl" src={AboutImg} alt = '/' />
          </div>
        </div>
      </div>
  );
};

export default About;
