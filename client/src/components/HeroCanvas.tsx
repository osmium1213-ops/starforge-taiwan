/**
 * HeroCanvas — Minimal Particle Background
 * Status: 5/9 v7 — stripped down to particle field + brand wordmark
 *
 * Design decision (5/9 user pivot):
 * 4-hour 3D chassis iteration hit diminishing returns. Reverting to
 * enterprise-BD-standard hero composition (text-driven + ambient bg).
 * Real Starforge product photos will be added in dedicated sections (5/10–5/11)
 * with proper attribution, instead of a simulated 3D chassis.
 *
 * Previous rich-RGB chassis preserved at: _archive/HeroCanvas-v6-rich-rgb.tsx
 */
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

function DriftingField() {
  // Subtle vertical drift on the star field for organic motion
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.02;
      groupRef.current.rotation.x += delta * 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      <Stars
        radius={60}
        depth={50}
        count={2200}
        factor={2.5}
        saturation={0}
        fade
        speed={0.3}
      />
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} />
        <DriftingField />
      </Canvas>
    </div>
  );
}
