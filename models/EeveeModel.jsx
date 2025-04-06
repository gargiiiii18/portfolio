
import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

const EeveeModel = (props) => {
  const { nodes, materials } = useGLTF('/eevee.glb');
  const eeveeRef = useRef();
  return (
    <group ref={eeveeRef} {...props}>
      <group scale={0.1}>
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
