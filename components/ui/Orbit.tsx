"use client";
import { technologiesImgs } from '@/data/index';
import { div } from 'framer-motion/client';
import React from 'react'
import { SourceTextModule } from 'vm';

type icons = {
    id?:number; 
    title?: string;
    imgClassName?:string;
    img?:string;
}

export const Orbit = ({
    radius=100
    } : {
    technologiesImgs?:icons;
    radius?:number;
}) => {

    const centerClass = "absolute top-1/2 left-1/2";

  return (
    <div className='flex justify-center items-center'>
    <div className='relative md:mr-8 mx-auto h-[300px] w-[300px]'>
        {technologiesImgs.map(({id, title, imgClassName, img}, index) => {
            // console.log(index);
            
            const angle = (2 * Math.PI / technologiesImgs.length) * index;
            const x = (radius * Math.cos(angle));
            const y = (radius * Math.sin(angle));
        
            return(
                <div 
                key={id}
                className={centerClass}
                style={{
                     transform: `translate(${x}px, ${y}px)`
                }}
                >
                    <img src={img} alt={title} width={32} height={32} className='w-8 h-8 hover:scale-125 transition-transform duration-300'/>
                </div>
            )
})}
    </div>
    </div>
  )
}