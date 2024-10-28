"use client"

import { Canvas, useThree } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import * as THREE from 'three';

export const GradientBackground = () => {
    const { scene } = useThree();
    const [color, setColor] = useState(new THREE.Color('#000000'));
  
    useEffect(() => {
      let frameId = 0;
      const duration = 2;
      const startColor = new THREE.Color('#5c658b');
      const endColor = new THREE.Color('#051637');
      const changeColor = (elapsedTime: number) => {
        if (elapsedTime <= duration) {
          const t = elapsedTime / duration;
          const newColor = startColor.clone().lerp(endColor, t);
          setColor(newColor);
          scene.background = newColor;
        } else {
          setColor(endColor);
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