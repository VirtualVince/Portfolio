import React from "react";
import Head from "next/head";
import "../app/globals.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const skills = [
  {
    category: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL", "Java", "C#", "Go"],
  },
  {
    category: "Web Development",
    items: ["Next.js", "React", "ASP.NET", "Express.js"],
  },
  {
    category: "Frontend Technologies",
    items: ["HTML", "CSS", "Tailwind CSS", "Shopify API"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "SQLite", "Google Sheets API"],
  },
  {
    category: "Tools & Frameworks",
    items: ["Node.js", "REST APIs", "Neovim", "Git", "GitHub", "Vercel"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Azure", "Google Cloud Platform"],
  },
];

const resume = () => {
  return (
    <>
      <Head>
        <title>Vince | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Vincente Sequeira</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/vincente-sequeira-1824b4245/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/VirtualVince"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}

        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[900px] mx-auto">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <h6 className="font-bold text-[16px] mb-2 text-[#5651e5]">
                  {skillGroup.category}
                </h6>
                <div className="flex flex-wrap justify-center gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Professional Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Daniel Digital</span>
            <span className="px-2">|</span>Junior Developer
            <span className="px-2">|</span>March 2021 – September 2023
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Utilized programming languages and frameworks such as HTML, CSS,
              Python, React, and NextJS to develop and maintain web
              applications.
            </li>
            <li>
              Managed server deployments and client requests, ensuring seamless
              project execution and delivery.
            </li>
          </ul>
          <p className="italic">
            <span className="font-bold">TELUS</span>
            <span className="px-2">|</span>Sales Representative
            <span className="px-2">|</span>October 2023 - January 2024
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Engaged with customers to understand their needs and provide
              tailored product recommendations.
            </li>
            <li>
              Achieved sales targets by leveraging strong communication and
              interpersonal skills.
            </li>
          </ul>
          <p className="italic">
            <span className="font-bold">Virtual Vince</span>
            <span className="px-2">|</span>Business Owner/Developer/Sales
            Representative
            <span className="px-2">|</span>Ongoing
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Founded and operate a business dedicated to building and enhancing
              online presences for small businesses.
            </li>
            <li>
              Provided a range of web services including website development,
              newsletter creation, online stores, and checkout services.
            </li>
            <li>
              Managed all aspects of the business from development to sales,
              ensuring client satisfaction and business growth.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">YAYBI</span>
            <span className="px-2">|</span> Shopify API
          </p>
          <p className="py-1 italic">
            Project URL:{" "}
            <a
              href="https://myyaybiway.me/"
              className="underline text-blue-600"
            >
              https://myyaybiway.me/
            </a>
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed an e-commerce platform for automotive parts leveraging
              Shopify API, enhancing user experience and streamlining the
              purchase process.
            </li>
            <li>
              Implemented custom solutions for inventory management and customer
              engagement, significantly improving operational efficiency.
            </li>
          </ul>

          <p className="italic">
            <span className="font-bold">Exploding Paint Brushes</span>
            <span className="px-2">|</span> LAMP Stack
          </p>
          <p className="py-1 italic">
            Project URL:{" "}
            <a
              href="https://brit.explodingpaintbrushes.com/"
              className="underline text-blue-600 hover:text-blue-800 transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              brit.explodingpaintbrushes.com
            </a>
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed a dynamic e-commerce platform using the LAMP stack
              (Linux, Apache, MySQL, PHP) to ensure stability and performance.
            </li>
            <li>
              Built custom backend solutions to improve inventory management and
              customer engagement, streamlining business operations.
            </li>
            <li>
              Optimized MySQL queries and server configurations to enhance site
              speed and scalability.
            </li>
          </ul>

          <p className="italic">
            <span className="font-bold italic">Zelhi Automotive</span>
            <span className="px-2">|</span> Next JS
          </p>
          <p className="py-1 italic">
            Project URL:{" "}
            <a
              href="https://zeli-automotive.vercel.app/"
              className="underline text-blue-600"
            >
              https://zeli-automotive.vercel.app/
            </a>
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Built a modern, responsive website for an automotive business
              using Next.js, improving site performance and SEO.
            </li>
            <li>
              Integrated dynamic content and server-side rendering features to
              provide a seamless user experience across various devices.
            </li>
          </ul>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Educational Experience
        </h5>

        {/* Education Section */}

        <div className="py-6">
          <p className="italic">
            <span className="font-bold">George Brown College, Toronto</span>
            <span className="px-2">|</span>Advanced Diploma, Computer
            Programming and Analysis (Online)
            <span className="px-2">|</span>
            <span className="italic">2022 - Present</span>
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Currently in Semester 4 of a 6-semester program with focus on
              full-stack development, software testing, and modern development
              methodologies
            </li>
            <li>
              Developed proficiency in Java, JavaScript, web development (HTML,
              CSS, React), database management, and system analysis
            </li>
            <li>
              Completed key technical courses including Data Structures &
              Algorithms, Web Application Development, Database Management, and
              Object-Oriented Programming
            </li>
            <li>
              Actively engaged in collaborative projects using Agile
              methodologies and DevOps practices
            </li>
            <li>
              Set to specialize in Mobile Application Development, Applied
              Machine Learning, and Full Stack Development in upcoming semesters
            </li>
          </ul>

          <p className="pt-5 italic">
            <span className="font-bold">Relevant Coursework:</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-7 py-2">
            <div>
              <p className="font-bold">Programming & Development</p>
              <ul className="list-disc list-outside pl-5">
                <li>Object-Oriented Programming</li>
                <li>Data Structures and Algorithms</li>
                <li>Advanced Web Programming</li>
                <li>Application Development using Java</li>
                <li>Full-Stack Development</li>
              </ul>
            </div>
            <div>
              <p className="font-bold">Software Engineering</p>
              <ul className="list-disc list-outside pl-5">
                <li>Software Quality Assurance</li>
                <li>System Analysis, Design & Testing</li>
                <li>Agile Software Development</li>
                <li>Open Source Development</li>
                <li>Linux Essentials</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default resume;
