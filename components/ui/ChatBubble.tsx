"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Billboard, OrbitControls, Text, RoundedBox } from '@react-three/drei';
import "@fontsource/ibm-plex-mono";
import { isMobileHook } from '@/hooks/isMobileHook';

export const ChatBubble = ({
    position
}:{
    position?:[number, number, number]
}) => {

    const fullText = "Eevee says Hi!";
    const[displayText, setDisplayText] = useState("");
    const indexRef = useRef(0);
    const isMobile = isMobileHook();

    useEffect(() => {
        const interval = setInterval(() => {
            if(indexRef.current < fullText.length){
                const currentChar = fullText[indexRef.current]
                setDisplayText(prev => (prev + currentChar)); 
                indexRef.current+=1;
                console.log(indexRef.current);
            }
            else {
                clearInterval(interval);
                setTimeout(() => {
                    setDisplayText("");
                }, 2800);
            }
        }, 170);

        return () => clearInterval(interval);
    }, []);

  return (
    <Billboard follow position={position}>
        <OrbitControls
        enableRotate={false}
        enableZoom={false}
        />
        
        <Text
            font="/fonts/IBMPlexMono-Medium.ttf"
            fontSize={isMobile ? 0.09 : 0.12}
            color='white'
            anchorX='center'
            anchorY='middle'
            outlineWidth={0.01}
            outlineColor='black'
        >
         {displayText}
        </Text>
    </Billboard>

  )
}
