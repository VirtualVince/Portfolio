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
import RestAPI from "../public/skills/restapi.png";
import Neovim from "../public/skills/neovim.svg";
import Git from "../public/skills/git.svg";
import Vercel from "../public/skills/vercel.svg";
import AWS from "../public/skills/amazonwebservices.svg";
import Azure from "../public/skills/azure.png";
import GCP from "../public/skills/googlecloud.svg";
 
// Accent colors per category (left border + heading)
const CATEGORY_COLORS = {
  "Languages":       "#3e37ff",
  "Frontend":        "#7c3aed",
  "Frameworks":      "#0ea5e9",
  "Databases":       "#059669",
  "Tools":           "#d97706",
  "Cloud & DevOps":  "#db2777",
};
 
const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript",  image: Javascript },
      { name: "TypeScript",  image: TypeScript },
      { name: "Python",      image: Python },
      { name: "Java",        image: Java },
      { name: "C#",          image: CSharp },
      { name: "Go",          image: Go },
      { name: "SQL",         image: SQL },
      { name: "Lua",         image: null },
      { name: "Liquid",      image: Shopify },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML",         image: Html },
      { name: "CSS",          image: Css },
      { name: "React",        image: ReactImg },
      { name: "Next.js",      image: NextJS },
      { name: "Tailwind CSS", image: Tailwind },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Node.js",      image: Node },
      { name: "Express.js",   image: Express },
      { name: "ASP.NET",      image: AspNet },
      { name: "Hydrogen / Remix", image: Shopify },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL",   image: PostgreSQL },
      { name: "SQLite",       image: SQLite },
      { name: "LuaSQL",       image: null },
      { name: "MySQL",        image: null },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git",          image: Git },
      { name: "GitHub",       image: Github },
      { name: "REST APIs",    image: RestAPI },
      { name: "Vercel",       image: Vercel },
      { name: "Neovim",       image: Neovim },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS",          image: AWS },
      { name: "Azure",        image: Azure },
      { name: "Google Cloud", image: GCP },
    ],
  },
];
 
const SkillChip = ({ name, image, accent }) => (
  <div
    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white hover:scale-105 ease-in duration-200 cursor-default"
    style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.05)" }}
  >
    {image ? (
      <Image src={image} width={22} height={22} alt={name} style={{ objectFit: "contain" }} />
    ) : (
      <span
        className="flex items-center justify-center text-[10px] font-bold rounded"
        style={{
          width: 22,
          height: 22,
          background: accent + "18",
          color: accent,
          flexShrink: 0,
        }}
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
    )}
    <span className="text-sm text-gray-700 whitespace-nowrap">{name}</span>
  </div>
);
 
const Skills = () => {
  return (
    <div id="skills" className="w-full py-16 px-2">
      <div className="max-w-[1240px] mx-auto">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Work With</h2>
 
        <div className="grid md:grid-cols-2 gap-5 mt-2">
          {skillCategories.map((category) => {
            const accent = CATEGORY_COLORS[category.title] || "#5651e5";
            return (
              <div
                key={category.title}
                className="rounded-xl bg-gray-50 p-5"
                style={{
                  borderLeft: `4px solid ${accent}`,
                  boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                }}
              >
                <h3
                  className="text-sm font-semibold uppercase tracking-widest mb-4"
                  style={{ color: accent }}
                >
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillChip
                      key={skill.name}
                      name={skill.name}
                      image={skill.image}
                      accent={accent}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
 
export default Skills;