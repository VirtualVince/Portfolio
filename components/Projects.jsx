import React from "react";
import ProjectItem from "./ProjectItem";
import Logo from "../public/assets/Logo.png";
import AutoLogo from "../public/projects/logo1.png";
import ZelhiLogo from "../public/projects/logo.png"

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
            backgroundImg={AutoLogo}
            projectUrl="/AutoConnect"
            tech="TypeScript"
          />
          <ProjectItem
            title="Zelhi Automotive"
            backgroundImg={ZelhiLogo}
            projectUrl="/crypto"
            tech="Next JS"
          />
          <ProjectItem
            title="Spotify Clone"
            backgroundImg={Logo}
            projectUrl="/netflix"
            tech="Next JS"
          />
          <ProjectItem
            title="Discord UI"
            backgroundImg={Logo}
            projectUrl="/twitch"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
