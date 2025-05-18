"use client";
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/ui/Loader';
import EeveeModel from '@/models/EeveeModel';
import { Bounds, OrbitControls } from '@react-three/drei';

const Eevee = () => {
  return (
    <div className='relative z-0 top-2 h-[800px] md:h-screen -left-3 w-100%'>
        <Canvas 
        className='bg-transparent overflow-hidden'
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
              // enableRotate={false}
              // autoRotate
              // autoRotateSpeed={6.5}
              />
              {/* <Bounds fit clip margin={1}> */}
                <EeveeModel/>
              {/* </Bounds> */}
            </Suspense>
        </Canvas>
    </div>
  )
}

export default Eevee