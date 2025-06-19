"use client";
import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/ui/Loader';
import EeveeModel from '@/models/EeveeModel';
import { OrbitControls } from '@react-three/drei';
import { ChatBubble } from './ui/ChatBubble';
import { isMobileHook } from '@/hooks/isMobileHook';
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";


const Eevee = () => {

  const isMobile = isMobileHook();

   const controlsRef = useRef<OrbitControlsImpl | null>(null);
  
  useEffect(() => {
    let touchStartY = 0;
    let touchStartX = 0;
  
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    };
  
    const handleTouchMove = (e: TouchEvent) => {
      const deltaY = Math.abs(e.touches[0].clientY - touchStartY);
      const deltaX = Math.abs(e.touches[0].clientX - touchStartX);
  
      const isVerticalSwipe = deltaY > deltaX;
  
      if (controlsRef.current) {
        controlsRef.current.enabled = !isVerticalSwipe;
      }
    };
  
    const handleTouchEnd = () => {
      if (controlsRef.current) {
        controlsRef.current.enabled = true;
      }
    };
  
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
  
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className='touch-pan-y relative overflow-hidden -left-2 top-65 md:top-2 h-[400px] md:-left-3 w-100%'>
        <Canvas 
        className='bg-transparent pointer-events-auto'
        camera={{
          position: [0, 1.5, 5], fov: 45}}
        >
            <Suspense fallback={<Loader/>}>
                <directionalLight/>
                <ambientLight/>
                <pointLight/>
                <spotLight/>
                <hemisphereLight/>
                {!isMobile && 
              <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI/2.5}
              maxPolarAngle={Math.PI/2.5}
              />
                } 
             
              <EeveeModel/>
              <ChatBubble position={isMobile ? [0, 1.55, 1.5] : [0.02, 1.8, 1.5]}/>
                    
            </Suspense>
        </Canvas>
    </div>
  )
}

export default Eevee