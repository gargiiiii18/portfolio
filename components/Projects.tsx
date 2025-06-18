import React from 'react'
import { projects } from '@/data';
import { PinContainer } from "./ui/3d-pin";

export const Projects = () => {
  return (
    <div className='md:mt-20 mt-8 py-15' id='projects'>
       <h1 className='heading text-center font-bold text-2xl lg:text-4xl'>
        Some of My {' '}
        <span className='text-purple-300 font-bold'>Recent Projects</span>
       </h1>
      <div className='flex flex-col flex-wrap md:gap-4 md:flex-row justify-center p-4 mt-10 items-center'>
  {projects.map(({id, title, des, img, iconLists, link}) => (
    <div key={id} className='lg:min-h-[32.5rem] sm:h-[30rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
                <div className="h-[20rem]  w-full flex md:flex-row flex-col items-center justify-center ">
      <PinContainer
        title={link}
        href={link}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h1 className="lg:text-xl max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {title}
          </h1>
          <div className="text-base !m-0 !p-0 font-normal">
            <p className="text-slate-500 font-normal text-sm md:text-md line-clamp-2">
              {des}
            </p>
            <div className='flex items-center justify-between mt-7 mb-3'>
                    <div className='flex items-center'>
                        {iconLists.map((icon, index) => (
                          <div key={icon} className='border bg-black lg:w-10 lg:h-10 w-8 h-8 border-white/[0.2] rounded-full flex justify-center items-center' style={{transform: `translateX(-${10*index}px)`}}>
                          <img src={icon} alt={icon} className='p-2'/>
                          </div>
                        ))}
                    </div>
            </div>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                    <img src={img} alt="" />
                    <p>{iconLists}</p>
                </div>
            </PinContainer>
        </div>
    </div>
))}
</div>
        </div>
  )
}