import React from "react";
import ProjectItem from "./ProjectItem";
import Logo from "../public/assets/Logo.png";
import AutoLogo from "../public/projects/autoconnectLogo.png";
import YaybiLogo from "../public/projects/yaybiLogo.jpg";
import ZelhiLogo from "../public/projects/zeliLogo.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Auto Connect"
            backgroundImg={YaybiLogo}
            projectUrl="https://myyaybiway.me/"
            tech="Shopify API"
          />
          <ProjectItem
            title="Zelhi Automotive"
            backgroundImg={ZelhiLogo}
            projectUrl="https://zeli-automotive.vercel.app/"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
