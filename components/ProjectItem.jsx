import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
 
const ProjectItem = ({ title, backgroundImg, bgColor, tech, projectUrl }) => {
  return (
    <div className='relative w-full shadow-xl shadow-gray-400 dark:shadow-gray-800 rounded-xl group overflow-hidden border border-line hover:border-accent transition-colors duration-200'>
      <div className='relative w-full' style={{ aspectRatio: '4/3' }}>
        {backgroundImg ? (
          <Image
            className='rounded-xl group-hover:opacity-10 transition-opacity duration-200 object-contain p-4 bg-raised'
            src={backgroundImg}
            alt={title}
            fill
          />
        ) : (
          <div
            className='absolute inset-0 rounded-xl group-hover:opacity-10 transition-opacity duration-200 flex items-center justify-center bg-navy-900'
            style={bgColor ? { background: bgColor } : undefined}
          >
            <p className='text-sm font-medium px-4 text-center text-gold-bright'>
              {title}
            </p>
          </div>
        )}

        {/* Hover overlay. Navy panel, gold heading, gold call to action. */}
        <div className='hidden group-hover:flex absolute inset-0 flex-col items-center justify-center px-4 bg-navy-900/95'>
          <h3 className='text-2xl text-gold-bright tracking-wider text-center'>{title}</h3>
          <p className='pb-4 pt-2 text-center text-sm text-gray-300'>{tech}</p>
          <Link href={projectUrl} target='_blank' rel='noopener noreferrer'>
            <p className='text-center py-3 px-6 rounded-lg bg-gold-bright text-ink font-bold text-lg cursor-pointer hover:bg-gold-hover transition-colors duration-200'>
              More Info
            </p>
          </Link>
        </div>
      </div>

    </div>
  )
}
 
export default ProjectItem