import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';

function LiquidOrb() {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.1;
    meshRef.current.rotation.z = time * 0.05;
  });

  return (
    <Sphere ref={meshRef} args={[1.5, 64, 64]} scale={1.5}>
      <MeshDistortMaterial
        color="#0a192f" // Very dark blue base
        attach="material"
        distort={0.4} // Amount of distortion
        speed={1.5} // Speed of distortion
        roughness={0.2}
        metalness={0.8}
        emissive="#1e3a8a" // Glowing inner blue
        emissiveIntensity={0.2}
      />
    </Sphere>
  );
}

export default function Background3D() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', background: 'radial-gradient(circle at 50% 50%, #080b12 0%, #020203 100%)' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
        <LiquidOrb />
      </Canvas>
    </div>
  );
}
