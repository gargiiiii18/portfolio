import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data';

export const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full py-10' id='contact'>
      {/* <div className='w-full absolute left-0 -bottom-72 min-h-96'>
        <img src="/footer-grid.svg" 
        alt="grid" 
        className='w-vw h-full opacity-50'
        />
      </div> */}
      <div className='flex flex-col items-center'>
          <h1 className='heading text-center font-bold text-2xl lg:text-4xl'>Connect {' '}
            <span className='text-purple-300 font-bold'>With Me</span>
            </h1>
            <p className='max-w-60 md:max-w-96 text-sm md:text-lg text-white-200 text-center md:mt-15 mt-10 mb-5'>If you found my work interesting and would like to have a chat, Ping me!</p>
            <a href="mailto:codereevee@gmail.com">
              <MagicButton
                otherClasses="z-20"
                title="Let's Get In Touch"
                icon={<FaLocationArrow/>}
                position="right"
              />
            </a>
      </div>
      <div className='flex mt-16  md:gap-3 gap-6 md:flex-row flex-col justify-between items-center'>
        <p className='text-xs md:text-base md:font-normal font-light'>Copyright © {currentYear} Eevee</p>
        <div className='flex items-center gap-2'>{socialMedia.map((profile) => (
           <a href={profile.link} target='_blank' rel='noopener noreferrer'>
          <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-gray-700'>
           
            <img src={profile.img} alt={profile.title} width={20} height={20} />
          </div>
           </a>
        ))}</div>
      </div>
    </footer>
  )
}
