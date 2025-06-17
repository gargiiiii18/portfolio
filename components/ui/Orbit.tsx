"use client";
import { technologiesImgs } from '@/data/index';
import { div } from 'framer-motion/client';
import React, { useState, useEffect } from 'react'
import { SourceTextModule } from 'vm';

type icons = {
    id?:number; 
    title?: string;
    imgClassName?:string;
    img?:string;
}

export const Orbit = ({
    radius
    } : {
    technologiesImgs?:icons;
    radius?:number;
}) => {

    const[isMobile, setIsMobile] = useState(false);

    const centerClass = "absolute top-1/2 left-1/2";

    
    useEffect(()=>{
    const updateScreensize = () => {
        setIsMobile(window.innerWidth<768);
        }
    updateScreensize();
    window.addEventListener("resize", updateScreensize);
      }, []);

      const adjustedRadius = radius ?? (isMobile ? 60 : 90);

  return (
    <div className='flex justify-center items-center'>
    <div className='absolute -top-21 -right-13 sm:-top-19 sm:-right-8 md:-right-5 md:-top-5 md:mr-4 mx-auto h-[300px] w-[300px]'>
        {technologiesImgs.map(({id, title, imgClassName, img}, index) => {
            // console.log(index);
            
            const angle = (2 * Math.PI / technologiesImgs.length) * index;
            const x = (adjustedRadius * Math.cos(angle));
            const y = (adjustedRadius * Math.sin(angle));
        
            return(
                <div 
                key={id}
                className={centerClass}
                style={{
                     transform: `translate(${x}px, ${y}px)`
                }}
                >
                    <img src={img} alt={title} width={32} height={32} className='w-8 h-8 md:hover:scale-165 hover:scale-135 transition-transform duration-200'/>
                </div>
            )
})}
    </div>
    </div>
  )
}