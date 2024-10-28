"use client";

import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import * as THREE from 'three';

export const GradientBackground = () => {
    const { scene } = useThree();
  
    useEffect(() => {
      let frameId = 0;
      const duration = 2;
      const startColor = new THREE.Color('#020b1c');
      const endColor = new THREE.Color('#051637');
      
      const changeColor = (elapsedTime: number) => {
        if (elapsedTime <= duration) {
          const t = elapsedTime / duration;
          const newColor = startColor.clone().lerp(endColor, t);
          scene.background = newColor;
        } else {
          scene.background = endColor;
          cancelAnimationFrame(frameId);
        }
      };
  
      const animate = () => {
        const clock = new THREE.Clock();
        const tick = () => {
          const elapsedTime = clock.getElapsedTime();
          changeColor(elapsedTime);
          frameId = requestAnimationFrame(tick);
        };
        tick();
      };
  
      animate();
  
      return () => {
        cancelAnimationFrame(frameId);
      };
    }, [scene]);
  
    return null;
};
