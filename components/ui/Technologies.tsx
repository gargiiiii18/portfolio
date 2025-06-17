import React from 'react'
import {technologiesImgs } from '@/data/index';
import { cn } from "@/lib/utils";

export const Technologies = ({
    id,
    title,
    img,
    imgClassName
} : {
     id?: number;
     title?: string;
     img?: string;
     imgClassName?: string; 
}) => {
  return (
    <div className='relative flex flex-wrap'>
        {technologiesImgs.map(({id, title, img, imgClassName}, index)=> (
            <div key={id} className='backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black rounded-full border border-gray-700 flex justify-center items-center p-2' style={{transform: `translateX(-${10*index}px)`}}>
            <img src={img} height={10} alt={title} className={cn(imgClassName,
                
            )}/>
            </div>
        ))}
    </div>
  )
}
