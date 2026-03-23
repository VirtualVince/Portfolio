import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
 
const ProjectItem = ({ title, backgroundImg, bgColor, tech, projectUrl }) => {
  return (
    <div className='relative w-full shadow-xl shadow-gray-400 dark:shadow-gray-800 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] overflow-hidden'>
      <div className='relative w-full' style={{ aspectRatio: '4/3' }}>
        {backgroundImg ? (
          <Image
            className='rounded-xl group-hover:opacity-10 object-contain p-4 bg-white dark:bg-[#1a1a1a]'
            src={backgroundImg}
            alt={title}
            fill
          />
        ) : (
          <div
            className='absolute inset-0 rounded-xl group-hover:opacity-10 flex items-center justify-center'
            style={{ background: bgColor || '#1a1a1a' }}
          >
            <p
              className='text-sm font-medium px-4 text-center'
              style={{ color: bgColor === '#1a1a2e' ? '#9b9bba' : '#888' }}
            >
              {title}
            </p>
          </div>
        )}
 
        {/* Hover overlay */}
        <div className='hidden group-hover:flex absolute inset-0 flex-col items-center justify-center px-4'>
          <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
          <p className='pb-4 pt-2 text-white text-center text-sm'>{tech}</p>
          <Link href={projectUrl} target='_blank' rel='noopener noreferrer'>
            <p className='text-center py-3 px-6 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
              More Info
            </p>
          </Link>
        </div>
      </div>
 
    </div>
  )
}
 
export default ProjectItem