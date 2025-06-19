"use client"
import React from 'react';
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from './ui/text-generate-effect';
import MagicButton from './ui/MagicButton';
import {FaLocationArrow } from 'react-icons/fa';
import {BentoGridDemo}from "@/components/Grid";
import Eevee from '../components/Eevee';
const Hero = () => {
  return (
    <div className=''>

      <div>
        <Spotlight className='right-34 md:-right-7 h-[80vh] w-[50vw]' fill="purple" />
        <Spotlight className='top-5 md:top-30 md:left-11 h-[80vh] w-[50vw]' fill="blue" />
        <Spotlight className='top-0 md:top-5 left-2 md:left-20 right-0 h-[80vh] w-[50vw]' fill="white" />
      </div>
      <div>
        <div className="md:top-0 top-50 md:left-0 flex flex-col justify-center overflow-hidden md:flex-row h-dvh    w-screen items-center bg-black-100">
          
          <div
            className={cn(
              "[background-size:20px_20px]",
              "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
              "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
            )}
          />

          <div className="pointer-events-none inset-0 flex mt-30 md:mt-0 items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black-100" />

          <div className='flex justify-center relative z-10 my-12'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center'>
              <h2 className='uppercase tracking-widest text-xs text-center max-w-80'>Welcome to my Portfolio</h2>
              <TextGenerateEffect
                className='text-center text-[40px] md:text-5xl lg:text-6xl'
                words='Hello Earth'
                duration={1}
              />
              <p className='mx-2 text-md md:text-xl'>I'm a Full-Stack Web Developer</p>

              <a className='' href="#projects">
                <MagicButton
                  title="View my projects"
                  icon={<FaLocationArrow />}
                  position='right'
                />
              </a>
            </div>
          </div>
          <div className='relative -top-65 left-2 md:left-0 md:top-0'>
            <Eevee />
        </div>
         
        </div>
        <div id='about'>
         <BentoGridDemo/>
         </div>
      </div>
    </div>
  )
}

export default Hero