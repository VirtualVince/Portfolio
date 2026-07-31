import React from "react";
import ProjectItem from "./ProjectItem";
import YaybiLogo from "../public/projects/YaybiLogo.png";
import PaintLogo from "../public/projects/ExplodingPaintBrushes.png";
import EGCCLogo from "../public/projects/EGCClogo.png";
import K2ELogo from "../public/projects/K2-Big_1.avif";
import RadiantRootsLogo from "../public/projects/radiantroots.png";
import OrpheusLogo from "../public/projects/orpheus_icon.svg"
import ChironLogo from ".././public/projects/Chiron.png"

const projects = [
  {
    title: "Orpheus",
    backgroundImg: OrpheusLogo,
    projectUrl: "https://app.orpheus.cx/",
    tech: "TypeScript, Rust, Convex",
  },
  {
    title: "Creative Collective",
    backgroundImg: EGCCLogo,
    projectUrl: "https://creativecollectiveonline.com/",
    tech: "Ubuntu, HestiaCP, PHP, WordPress",
  },
  {
    title: "ChironAI",
    backgroundImg: ChironLogo,
    projectUrl: "https://chiron.virtualvince.ca/",
    tech: "Next.js, TypeScript, Tailwind",
  },
  {
    title: "Exploding Paint Brushes",
    backgroundImg: PaintLogo,
    projectUrl: "https://brit.explodingpaintbrushes.com/",
    tech: "LAMP, WordPress, MySQL",
  },
  {
    title: "Radiant Roots Vitality",
    backgroundImg: RadiantRootsLogo,
    projectUrl: "https://radiantrootsvitality.com/",
    tech: "Next.js, TypeScript, Tailwind",
  },
  {
    title: "My YAYBI Way",
    backgroundImg: YaybiLogo,
    projectUrl: "https://myyaybiway.me/",
    tech: "Next.js, TypeScript, Shopify Storefront",
  },
  {
    title: "K2E Canada",
    backgroundImg: K2ELogo,
    projectUrl: "https://www.k2e.ca/",
    tech: "Shopify, Liquid",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-accent">
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