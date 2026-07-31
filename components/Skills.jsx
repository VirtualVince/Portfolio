import Image from "next/image";
import React from "react";

// Local brand assets
import Javascript from "../public/skills/javascript.png";
import ReactImg from "../public/skills/react.png";
import Tailwind from "../public/skills/tailwind.png";
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

// Everything else comes from Simple Icons, already bundled inside react-icons.
// No extra dependency, no files to download.
import {
  SiLinux, SiUbuntu, SiDocker, SiKubernetes, SiTerraform, SiJenkins,
  SiApachekafka, SiCplusplus, SiPhp, SiLua, SiApollographql, SiMongodb,
  SiMysql, SiArduino, SiC, SiAngular, SiGithubactions, SiBun, SiTurborepo,
  SiNixos,
} from "react-icons/si";

// Generic marks for things with no brand logo: protocols, services and concepts.
import { MdDns, MdBackup } from "react-icons/md";
import {
  TbServerCog, TbShieldLock, TbKey, TbDatabase, TbCpu, TbPlugConnected,
  TbArrowsExchange,
} from "react-icons/tb";

// One accent per category, carried by the left border and the heading.
const CATEGORY_COLORS = {
  "Infrastructure & Operations": "#db2777",
  "Containers & Orchestration": "#0891b2",
  "Languages":                  "#3e37ff",
  "Backend":                    "#0ea5e9",
  "Data":                       "#059669",
  "Embedded":                   "#ea580c",
  "Frontend":                   "#7c3aed",
  "Tooling":                    "#d97706",
};

// Each skill carries either `image` (a local asset) or `Icon` (a react-icons
// component). Anything with neither falls back to an initials chip.
const skillCategories = [
  {
    title: "Infrastructure & Operations",
    skills: [
      { name: "Linux",         Icon: SiLinux },
      { name: "Ubuntu Server", Icon: SiUbuntu },
      { name: "HestiaCP",  Icon: TbServerCog },
      { name: "DNS",       Icon: MdDns },
      { name: "Firewalls", Icon: TbShieldLock },
      { name: "Backups",   Icon: MdBackup },
      { name: "AWS",           image: AWS },
      { name: "Azure",         image: Azure },
      { name: "Google Cloud",  image: GCP },
      { name: "Vercel",        image: Vercel },
    ],
  },
  {
    title: "Containers & Orchestration",
    skills: [
      { name: "Docker",     Icon: SiDocker },
      { name: "Kubernetes", Icon: SiKubernetes },
      { name: "Terraform",  Icon: SiTerraform },
      { name: "Jenkins",    Icon: SiJenkins },
      { name: "Kafka",      Icon: SiApachekafka },
      { name: "Keycloak",  Icon: TbKey },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Go",         image: Go },
      { name: "TypeScript", image: TypeScript },
      { name: "JavaScript", image: Javascript },
      { name: "Python",     image: Python },
      { name: "C++",        Icon: SiCplusplus },
      { name: "C#",         image: CSharp },
      { name: "Java",       image: Java },
      { name: "PHP",        Icon: SiPhp },
      { name: "SQL",        image: SQL },
      { name: "Lua",        Icon: SiLua },
      { name: "Liquid",     image: Shopify },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js",        image: Node },
      { name: "Express",        image: Express },
      { name: "Apollo GraphQL", Icon: SiApollographql },
      { name: "ASP.NET",        image: AspNet },
      { name: "Convex",    Icon: TbDatabase },
      { name: "REST APIs",      image: RestAPI },
    ],
  },
  {
    title: "Data",
    skills: [
      { name: "PostgreSQL", image: PostgreSQL },
      { name: "MongoDB",    Icon: SiMongodb },
      { name: "MySQL",      Icon: SiMysql },
      { name: "SQLite",     image: SQLite },
    ],
  },
  {
    title: "Embedded",
    skills: [
      { name: "Arduino",                Icon: SiArduino },
      { name: "C for microcontrollers", Icon: SiC },
      { name: "I2C",       Icon: TbCpu },
      { name: "SPI",       Icon: TbPlugConnected },
      { name: "UART",      Icon: TbArrowsExchange },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React",        image: ReactImg },
      { name: "Next.js",      image: NextJS },
      { name: "Angular",      Icon: SiAngular },
      { name: "Tailwind CSS", image: Tailwind },
      { name: "Shopify",      image: Shopify },
    ],
  },
  {
    title: "Tooling",
    skills: [
      { name: "Git",            image: Git },
      { name: "GitHub Actions", Icon: SiGithubactions },
      { name: "Neovim",         image: Neovim },
      { name: "Bun",            Icon: SiBun },
      { name: "Turborepo",      Icon: SiTurborepo },
      { name: "Nix",            Icon: SiNixos },
    ],
  },
];

const SkillChip = ({ name, image, Icon, accent }) => (
  <div
    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-[#222222] hover:scale-105 ease-in duration-200 cursor-default"
    style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.05)" }}
  >
    {image ? (
      <Image src={image} width={22} height={22} alt={name} style={{ objectFit: "contain" }} />
    ) : Icon ? (
      <Icon size={22} color={accent} style={{ flexShrink: 0 }} aria-hidden="true" />
    ) : (
      <span
        className="flex items-center justify-center text-[10px] font-bold rounded"
        style={{
          width: 22,
          height: 22,
          background: accent + "22",
          color: accent,
          flexShrink: 0,
        }}
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
    )}
    <span className="text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">{name}</span>
  </div>
);

const Skills = () => {
  return (
    <div id="skills" className="w-full py-16 px-2">
      <div className="max-w-[1240px] mx-auto">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4 text-black dark:text-white">What I Work With</h2>

        <div className="grid md:grid-cols-2 gap-5 mt-2">
          {skillCategories.map((category) => {
            const accent = CATEGORY_COLORS[category.title] || "#5651e5";
            return (
              <div
                key={category.title}
                className="rounded-xl bg-gray-50 dark:bg-[#1a1a1a] p-5"
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
                      Icon={skill.Icon}
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
