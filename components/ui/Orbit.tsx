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

      const adjustedRadius = radius ?? (isMobile ? 70 : 100);

  return (
    <div className='flex justify-center items-center'>
    <div className='absolute -top-10 -right-4 md:top-12 md:mr-9 mx-auto h-[300px] w-[300px]'>
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
                    <img src={img} alt={title} width={32} height={32} className='w-8 h-8 hover:scale-125 transition-transform duration-300'/>
                </div>
            )
})}
    </div>
    </div>
  )
}