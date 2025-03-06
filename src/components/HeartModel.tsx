import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// This is a simplified heart model component
// In a real implementation, you would use a proper 3D heart model
export default function HeartModel({ ...props }) {
  const group = useRef();
  
  // Create a simple heart shape using Three.js geometry
  const heartShape = new THREE.Shape();
  
  heartShape.moveTo(0, 0);
  heartShape.bezierCurveTo(0, -1, -1, -1.5, -2, -1.5);
  heartShape.bezierCurveTo(-4, -1.5, -4, 1, -4, 1);
  heartShape.bezierCurveTo(-4, 3, -2, 4.5, 0, 6);
  heartShape.bezierCurveTo(2, 4.5, 4, 3, 4, 1);
  heartShape.bezierCurveTo(4, 1, 4, -1.5, 2, -1.5);
  heartShape.bezierCurveTo(1, -1.5, 0, -1, 0, 0);
  
  const extrudeSettings = {
    depth: 1,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 0.5,
    bevelThickness: 0.5
  };
  
  // Animate the heart
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.2;
      group.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      group.current.scale.x = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      group.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      group.current.scale.z = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
  });

  return (
    <group ref={group} {...props} dispose={null} scale={[0.5, 0.5, 0.5]}>
      <mesh>
        <extrudeGeometry args={[heartShape, extrudeSettings]} />
        <meshStandardMaterial color="#ff5757" roughness={0.3} metalness={0.2} />
      </mesh>
    </group>
  );
}