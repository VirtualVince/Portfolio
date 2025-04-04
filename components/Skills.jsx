import Image from "next/image";
import React from "react";
import Html from "../public/skills/html.png";
import Css from "../public/skills/css.png";
import Javascript from "../public/skills/javascript.png";
import ReactImg from "../public/skills/react.png";
import Tailwind from "../public/skills/tailwind.png";
import Github from "../public/skills/github.png";
import NextJS from "../public/skills/nextjs1.png";
import Node from "../public/skills/node.png";
import TypeScript from "../public/skills/typescript.svg";
import Python from "../public/skills/python.svg";
import SQL from "../public/skills/sql.png";
import Java from "../public/skills/java.png";
import CSharp from "../public/skills/csharp.png";
import Go from "../public/skills/go.svg";
import AspNet from "../public/skills/aspdotnet.png";
import Express from "../public/skills/expressjs.png";
import Shopify from "../public/skills/shopify.png";
import PostgreSQL from "../public/skills/postgresql.svg";
import SQLite from "../public/skills/sqlite.svg";
import GoogleSheets from "../public/skills/googlesheets.svg";
import RestAPI from "../public/skills/restapi.png";
import Neovim from "../public/skills/neovim.svg";
import Git from "../public/skills/git.svg";
import Vercel from "../public/skills/vercel.svg";
import AWS from "../public/skills/amazonwebservices.svg";
import Azure from "../public/skills/azure.png";
import GCP from "../public/skills/googlecloud.svg";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", image: Javascript },
      { name: "TypeScript", image: TypeScript },
      { name: "Python", image: Python },
      { name: "SQL", image: SQL },
      { name: "Java", image: Java },
      { name: "C#", image: CSharp },
      { name: "Go", image: Go },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "Next.js", image: NextJS },
      { name: "React", image: ReactImg },
      { name: "ASP.NET", image: AspNet },
      { name: "Express.js", image: Express },
    ],
  },
  {
    title: "Frontend Technologies",
    skills: [
      { name: "HTML", image: Html },
      { name: "CSS", image: Css },
      { name: "Tailwind CSS", image: Tailwind },
      { name: "Shopify API", image: Shopify },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", image: PostgreSQL },
      { name: "SQLite", image: SQLite },
      { name: "Google Sheets API", image: GoogleSheets },
    ],
  },
  {
    title: "Tools & Frameworks",
    skills: [
      { name: "Node.js", image: Node },
      { name: "REST APIs", image: RestAPI },
      { name: "Neovim", image: Neovim },
      { name: "Git", image: Git },
      { name: "GitHub", image: Github },
      { name: "Vercel", image: Vercel },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", image: AWS },
      { name: "Azure", image: Azure },
      { name: "Google Cloud Platform", image: GCP },
    ],
  },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:min-h-screen p-2 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>

        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-6">
            <h3 className="text-[18px] font-semibold mb-3 text-[#5651e5]">
              {category.title}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="p-2 shadow-md rounded-lg hover:scale-105 ease-in duration-300 bg-white"
                >
                  <div className="flex flex-col items-center justify-center">
                    {skill.image ? (
                      <div className="m-auto">
                        <Image
                          src={skill.image}
                          width="40"
                          height="40"
                          alt={skill.name}
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <p className="text-[8px] text-gray-500">No img</p>
                      </div>
                    )}
                    <div className="flex flex-col items-center justify-center mt-1">
                      <h3 className="text-xs text-center">{skill.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
