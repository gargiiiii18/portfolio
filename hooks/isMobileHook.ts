import React, { useState, useEffect } from 'react'

export const isMobileHook = (breakpoint = 768): boolean => {

    const[isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
        const updateScreensize = () => {
            setIsMobile(window.innerWidth<768);
            }
        updateScreensize();
        window.addEventListener("resize", updateScreensize);
    
        return () => {
            window.removeEventListener("resize", updateScreensize);
        }
          }, [breakpoint]);

  return isMobile;
}
