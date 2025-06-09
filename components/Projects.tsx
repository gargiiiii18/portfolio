import React from 'react'
import { projects } from '@/data';
import { AnimatedPinDemo } from '../components/PinContainer'

export const Projects = () => {
  return (
    <div className='md:mt-18 mt-8 py-20'>
       <h1 className='heading text-center font-bold text-2xl lg:text-4xl'>
        Some of My {' '}
        <span className='text-purple-300 font-bold'>Recent Projects</span>
       </h1>
       {/* <div className='flex flex-col flex-wrap md:gap-4 md:flex-row justify-center p-4 mt-10 items-center'>
          {projects.map(({id, title, des, img, iconLists, link}) => (
            <div className='lg:min-h-[32.5rem] min-h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]' key={id}>
              <AnimatedPinDemo
              />
            </div>
          ))}
       </div> */}
        <AnimatedPinDemo/>
        </div>
  )
}