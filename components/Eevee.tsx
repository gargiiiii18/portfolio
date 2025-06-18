"use client";
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/ui/Loader';
import EeveeModel from '@/models/EeveeModel';
import { Bounds, OrbitControls } from '@react-three/drei';
import { ChatBubble } from './ui/ChatBubble';
import { isMobileHook } from '@/hooks/isMobileHook';

const Eevee = () => {

  const isMobile = isMobileHook();

  return (
    <div className='relative z-10 top-65 md:top-2 h-[400px] md:-left-3 w-100%'>
        <Canvas 
        className='bg-transparent  z-10'
        camera={{
          position: [0, 1.5, 5], fov: 45}}
        >
            <Suspense fallback={<Loader/>}>
                <directionalLight/>
                <ambientLight/>
                <pointLight/>
                <spotLight/>
                <hemisphereLight/>
              <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI/2.5}
              maxPolarAngle={Math.PI/2.5}
              />

             
              <EeveeModel/>
              <ChatBubble position={isMobile ? [0, 1.55, 1.5] : [0.02, 1.8, 1.5]}/>
                    
            </Suspense>
        </Canvas>
    </div>
  )
}

export default Eevee