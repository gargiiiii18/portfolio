"use client";
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/ui/Loader';
import EeveeModel from '@/models/EeveeModel';
import { Bounds, OrbitControls } from '@react-three/drei';

const Eevee = () => {
  return (
    <div className='relative bottom-3 w-full h-screen'>
        <Canvas 
        className='bg-transparent'
        camera={{position: [1.2,3,8], fov: 70}}
        >
            <Suspense fallback={<Loader/>}>
                <directionalLight/>
                <ambientLight/>
                <pointLight/>
                <spotLight/>
                <hemisphereLight/>
              <OrbitControls/>
              <Bounds fit observe margin={1}>
                <EeveeModel/>
              </Bounds>
            </Suspense>
        </Canvas>
    </div>
  )
}

export default Eevee