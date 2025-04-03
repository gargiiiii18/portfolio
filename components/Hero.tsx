import React from 'react';
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import { div } from 'motion/react-client';
const Hero = () => {
  return (
    <div className='pb-40 pt-36'>
  
    <div>
        <Spotlight className='-top-10 -right-11 h-[80vh] w-[50vw]' fill="purple"/>
        {/* <Spotlight className='md:-left-32 h-screen md:-top-20' fill="purple"/> */}
        <Spotlight className='top-10 left-11 h-[80vh] w-[50vw]' fill="blue"/>
        {/* <Spotlight className='top-28 left-80 h-[80vh] w-[50vw] md:-left-32 md:-top-20' fill="purple"/> */}
        <Spotlight className='top-10 right-0 h-[80vh] w-[50vw]' fill="white"/>
    </div>
    <div>


    <div className="absolute top-0 left-0 flex justify-center h-screen w-screen items-center bg-white dark:bg-black-100">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />

      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"/>

        <div className='flex justify-center relative z-10 my-20'>
      <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center'>
        <h2 className='uppercase tracking-widest text-xs text-center max-w-80'>A full-stack web developer.</h2>
        </div>
        </div>

    </div>
    </div>
    </div>
  )
}

export default Hero