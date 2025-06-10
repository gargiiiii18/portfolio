"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

const EeveeModel = (props) => {

  const [isMobileScreenSize, setIsMobileScreenSize] = useState(false);
  const { nodes, materials } = useGLTF('/eevee.glb');
  const eeveeRef = useRef();

  useEffect(()=>{
    const updateScreensize = () => {
        setIsMobileScreenSize(window.innerWidth<768);
    }
    updateScreensize();
    window.addEventListener("resize", updateScreensize);
    return () => window.removeEventListener(resizeBy, updateScreensize);
  }, [isMobileScreenSize]);

  return (
    <group ref={eeveeRef} {...props}>
      <group scale={isMobileScreenSize ? 0.037 : 0.045}>
        <mesh
          geometry={nodes.Eevee_Material__12_0.geometry}
          material={materials.Material_12}
        />
        <mesh
          geometry={nodes.Eevee_Material__13_0.geometry}
          material={materials.Material_13}
        />
        <mesh
          geometry={nodes.Eevee_Material__14_0.geometry}
          material={materials.Material_14}
        />
      </group>
    </group>
  )
}

export default EeveeModel;
