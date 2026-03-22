import React from "react";
import ProjectItem from "./ProjectItem";
import YaybiLogo from "../public/projects/YaybiLogo.png";
import PaintLogo from "../public/projects/ExplodingPaintBrushes.png";
import EGCCLogo from "../public/projects/EGCClogo.png";
import K2ELogo from "../public/projects/k2e.png";
import RadiantRootsLogo from "../public/projects/radiantroots.png";

const projects = [
  {
    title: "My YAYBI Way",
    backgroundImg: YaybiLogo,
    projectUrl: "https://myyaybiway.me/",
    tech: "Liquid / Hydrogen + Remix",
  },
  {
    title: "Exploding Paint Brushes",
    backgroundImg: PaintLogo,
    projectUrl: "https://brit.explodingpaintbrushes.com/",
    tech: "LAMP Stack",
  },
  {
    title: "Creative Collective",
    backgroundImg: EGCCLogo,
    projectUrl: "https://creativecollectiveonline.com/",
    tech: "LAMP Stack",
  },
  {
    title: "K2E Canada",
    backgroundImg: K2ELogo,
    projectUrl: "https://www.k2e.ca/",
    tech: "Liquid / Hydrogen + Remix",
  },
  {
    title: "Radiant Roots Vitality",
    backgroundImg: RadiantRootsLogo,
    projectUrl: "https://radiantrootsvitality.com/",
    tech: "Nextjs",
  },
  {
    title: "Rogue Paddle",
    bgColor: "#1a1a2e",
    projectUrl: "https://github.com/da-shalev/rogue-paddle",
    tech: "Love2D · Lua · LuaSQL / SQLite",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Work
        </p>
        <h2 className="py-4">Client &amp; Project Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;