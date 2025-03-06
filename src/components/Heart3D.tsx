import React, { useRef, useMemo, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, GradientTexture, Float, Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const Heart = () => {
  const mesh = useRef<THREE.Mesh>(null);
  
  // Create heart shape with smoother curves
  const heartShape = useMemo(() => {
    const shape = new THREE.Shape();
    const x = 0, y = 0;
    
    // More detailed heart shape with smoother curves
    shape.moveTo(x, y + 5);
    
    // Left curve
    shape.bezierCurveTo(
      x - 5, y + 5,
      x - 10, y,
      x - 10, y - 5
    );
    shape.bezierCurveTo(
      x - 10, y - 15,
      x, y - 15,
      x, y - 7.5
    );
    
    // Right curve
    shape.bezierCurveTo(
      x, y - 15,
      x + 10, y - 15,
      x + 10, y - 5
    );
    shape.bezierCurveTo(
      x + 10, y,
      x + 5, y + 5,
      x, y + 5
    );
    
    return shape;
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      // Smooth pulsing animation
      const t = state.clock.getElapsedTime();
      const scale = 1 + Math.sin(t * 2) * 0.05;
      mesh.current.scale.set(scale, scale, scale);
      
      // Gentle floating motion
      mesh.current.position.y = Math.sin(t) * 0.2;
      
      // Subtle rotation
      mesh.current.rotation.z = Math.sin(t * 0.5) * 0.1;
    }
  });

  return (
    <group>
      {/* Main heart */}
      <mesh ref={mesh} scale={0.15}>
        <extrudeGeometry
          args={[
            heartShape,
            {
              depth: 4,
              bevelEnabled: true,
              bevelSegments: 8,
              bevelSize: 0.8,
              bevelThickness: 0.8,
            },
          ]}
        />
        <MeshDistortMaterial
          speed={2}
          distort={0.2}
          time={1}
        >
          <GradientTexture
            stops={[0, 0.5, 1]}
            colors={['#FF6B6B', '#FF8787', '#4D96FF']}
            size={256}
          />
        </MeshDistortMaterial>
      </mesh>

      {/* Glowing effect */}
      <Sparkles
        count={50}
        scale={2}
        size={2}
        speed={0.3}
        color="#FF6B6B"
      />
    </group>
  );
};

const LoadingFallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="animate-pulse text-primary">Loading 3D Heart...</div>
  </div>
);

const Heart3DCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 20], fov: 45 }}
      dpr={[1, 2]}
    >
      <Environment preset="sunset" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4D96FF" />
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={0.5}
      >
        <Heart />
      </Float>
    </Canvas>
  );
};

const Heart3D: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <LoadingFallback />;
  }

  return (
    <div className="w-full h-[500px]">
      <Suspense fallback={<LoadingFallback />}>
        <Heart3DCanvas />
      </Suspense>
    </div>
  );
};

export default Heart3D; 