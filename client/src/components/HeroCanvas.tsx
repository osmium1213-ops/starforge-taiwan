/**
 * HeroCanvas — L3 Three.js placeholder
 * Status: SCAFFOLDING ONLY (5/8 evening setup)
 * TODO 5/9-5/10: Replace placeholder cube with stylized PC chassis (Voyager III silhouette)
 *                Add particle field background
 *                Wire up scroll-linked rotation/depth
 *
 * Current implementation: rotating wireframe cube + ambient particles to validate
 * the rendering pipeline (react-three/fiber + drei) works inside the existing Hero layout.
 */
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function PlaceholderChassis() {
  const meshRef = useRef<Mesh>(null);

  // Slow auto-rotation — to be replaced with scroll-linked rotation in 5/10 iteration
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.25;
      meshRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      {/* Vaguely chassis-shaped: tall rectangular prism */}
      <boxGeometry args={[1.6, 2.4, 1.6]} />
      <meshStandardMaterial
        color="#10b981"
        wireframe
        emissive="#10b981"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.6} />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#10b981" />

        {/* Particle field — drei Stars repurposed as ambient particles */}
        <Stars
          radius={50}
          depth={40}
          count={1500}
          factor={2}
          saturation={0}
          fade
          speed={0.5}
        />

        {/* Placeholder chassis */}
        <PlaceholderChassis />

        {/* Disabled in production — only enable for dev inspection */}
        {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
      </Canvas>
    </div>
  );
}
