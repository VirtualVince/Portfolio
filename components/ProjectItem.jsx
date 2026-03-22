import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
 
const ProjectItem = ({ title, backgroundImg, bgColor, tech, projectUrl }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
      {backgroundImg ? (
        <Image
          className='rounded-xl group-hover:opacity-10'
          src={backgroundImg}
          alt={title}
        />
      ) : (
        <div
          className='rounded-xl group-hover:opacity-10 w-full flex items-center justify-center'
          style={{ background: bgColor || '#e8e8e8', minHeight: '220px' }}
        >
          <p className='text-sm font-medium px-4 text-center' style={{ color: bgColor === '#1a1a2e' ? '#9b9bba' : '#555' }}>
            {title}
          </p>
        </div>
      )}
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
        <Link href={projectUrl} target='_blank' rel='noopener noreferrer'>
          <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
            More Info
          </p>
        </Link>
      </div>
    </div>
  )
}
 
export default ProjectItem