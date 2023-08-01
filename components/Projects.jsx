import React from "react";
import ProjectItem from "./ProjectItem";
import Logo from "../public/assets/Logo.png"

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Property Finder'
            backgroundImg={Logo}
            projectUrl='/property'
            tech='Next JS'
          />
          <ProjectItem
            title='Crypto App'
            backgroundImg={Logo}
            projectUrl='/crypto'
            tech='Next JS'

          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={Logo}
            projectUrl='/netflix'
            tech='Next JS'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={Logo}
            projectUrl='/twitch'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects