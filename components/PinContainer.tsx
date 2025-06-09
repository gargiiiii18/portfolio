"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { projects } from '@/data';

export function AnimatedPinDemo() {
  return (
    <div className='flex flex-col flex-wrap md:gap-4 md:flex-row justify-center p-4 mt-10 items-center'>
  {projects.map(({id, title, des, img, iconLists, link}) => (
    <div key={id} className='lg:min-h-[32.5rem] min-h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
                  {/* <AnimatedPinDemo
                  /> */}
                <div className="h-[20rem] w-full flex md:flex-row flex-col items-center justify-center ">
      <PinContainer
        title={title}
        href={link}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {des}
            </span>
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
    
  );
}
