/**
 * HeroCanvas — L3 Premium PC Tower (rich RGB build)
 * Status: 5/9 v6 — multi-color RGB + visible fans + central LCD screen
 *
 * Goals from 5/9 user feedback iterations:
 * - Less monotonous (multi-color RGB, not single green)
 * - Visible large RGB fans with blades
 * - Central display/screen (iconic Hyte/Lian Li dual-chamber feature)
 * - Glass-front visibility into vibrant interior
 */
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Text } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import type { Group, Mesh } from "three";

// ─── Chassis dimensions ─────────────────────────────────────────────────────
const W = 1.8;
const H = 2.6;
const D = 1.8;
const T = 0.04;

// RGB color palette for fans (cyan, purple, magenta, green)
const RGB_PALETTE = ["#10b981", "#06b6d4", "#a855f7", "#ec4899"];

// ─── RGB Fan Component (reusable) ───────────────────────────────────────────
function RgbFan({
  position,
  color,
  size = 0.32,
  pulseOffset = 0,
}: {
  position: [number, number, number];
  color: string;
  size?: number;
  pulseOffset?: number;
}) {
  const ringRef = useRef<Mesh>(null);
  const bladeRef = useRef<Group>(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime + pulseOffset;
    if (ringRef.current) {
      const mat = ringRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 2.5 + Math.sin(t * 2) * 1.2;
    }
    if (bladeRef.current) {
      bladeRef.current.rotation.z += delta * 4;
    }
  });

  return (
    <group position={position}>
      {/* Outer dark housing */}
      <mesh>
        <ringGeometry args={[size * 0.95, size, 48]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.7} side={THREE.DoubleSide} />
      </mesh>
      {/* RGB ring (the glowing edge) */}
      <mesh ref={ringRef} position={[0, 0, 0.005]}>
        <ringGeometry args={[size * 0.78, size * 0.95, 48]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2.8}
          toneMapped={false}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Fan blades (rotating) */}
      <group ref={bladeRef} position={[0, 0, 0.012]}>
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <mesh
            key={i}
            rotation={[0, 0, (angle * Math.PI) / 180]}
            position={[size * 0.4, 0, 0]}
          >
            <boxGeometry args={[size * 0.6, size * 0.12, 0.01]} />
            <meshStandardMaterial color="#444" transparent opacity={0.55} />
          </mesh>
        ))}
        {/* Center hub */}
        <mesh>
          <circleGeometry args={[size * 0.18, 24]} />
          <meshStandardMaterial color="#222" />
        </mesh>
      </group>
    </group>
  );
}

// ─── Central LCD Display ────────────────────────────────────────────────────
function CentralLcd() {
  const screenRef = useRef<Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (screenRef.current) {
      const mat = screenRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 1.2 + Math.sin(t * 1.5) * 0.3;
    }
  });

  return (
    <group position={[0, 0.1, 0.15]}>
      {/* Bezel */}
      <mesh>
        <circleGeometry args={[0.32, 64]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Screen face */}
      <mesh ref={screenRef} position={[0, 0, 0.005]}>
        <circleGeometry args={[0.27, 64]} />
        <meshStandardMaterial
          color="#000"
          emissive="#10b981"
          emissiveIntensity={1.4}
          toneMapped={false}
        />
      </mesh>
      {/* Screen content text */}
      <Text
        position={[0, 0.06, 0.012]}
        fontSize={0.07}
        color="#10b981"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.1}
        outlineWidth={0.003}
        outlineColor="#10b981"
        outlineOpacity={1}
      >
        T-13d
      </Text>
      <Text
        position={[0, -0.04, 0.012]}
        fontSize={0.04}
        color="#10b981"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.2}
        fillOpacity={0.7}
      >
        TAIWAN PILOT
      </Text>
      <Text
        position={[0, -0.13, 0.012]}
        fontSize={0.028}
        color="#06b6d4"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.3}
        fillOpacity={0.8}
      >
        WIRFORCE · COMPUTEX · TGS
      </Text>
      {/* Bezel screws (4 corners) */}
      {[
        [-0.27, 0.0],
        [0.27, 0.0],
        [0, 0.27],
        [0, -0.27],
      ].map(([x, y], i) => (
        <mesh key={i} position={[x, y, 0.003]}>
          <circleGeometry args={[0.014, 16]} />
          <meshBasicMaterial color="#444" />
        </mesh>
      ))}
    </group>
  );
}

// ─── Motherboard with RGB headers ───────────────────────────────────────────
function MotherboardBack() {
  return (
    <group position={[0, 0, -D / 2 + T + 0.02]}>
      {/* Main PCB */}
      <mesh>
        <boxGeometry args={[W * 0.9, H * 0.85, 0.04]} />
        <meshStandardMaterial color="#0d3d2c" metalness={0.3} roughness={0.6} />
      </mesh>
      {/* RGB heatsink stripes */}
      {[
        { x: -0.4, y: 0.7, c: "#06b6d4" },
        { x: 0.4, y: 0.5, c: "#10b981" },
        { x: 0, y: 0.2, c: "#a855f7" },
        { x: -0.5, y: -0.3, c: "#ec4899" },
        { x: 0.4, y: -0.7, c: "#10b981" },
      ].map((d, i) => (
        <mesh key={i} position={[d.x, d.y, 0.025]}>
          <boxGeometry args={[0.28, 0.08, 0.01]} />
          <meshStandardMaterial
            color={d.c}
            emissive={d.c}
            emissiveIntensity={1.8}
            toneMapped={false}
          />
        </mesh>
      ))}
      {/* RAM sticks (4 vertical bars) */}
      {[-0.55, -0.45, -0.35, -0.25].map((x, i) => (
        <mesh key={i} position={[x, 0.6, 0.03]}>
          <boxGeometry args={[0.05, 0.4, 0.04]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.6} />
        </mesh>
      ))}
      {/* RAM RGB stripe on top */}
      {[-0.55, -0.45, -0.35, -0.25].map((x, i) => (
        <mesh key={i} position={[x, 0.79, 0.05]}>
          <boxGeometry args={[0.045, 0.025, 0.005]} />
          <meshStandardMaterial
            color={RGB_PALETTE[i % RGB_PALETTE.length]}
            emissive={RGB_PALETTE[i % RGB_PALETTE.length]}
            emissiveIntensity={2.5}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

// ─── GPU with RGB ───────────────────────────────────────────────────────────
function GpuRig() {
  return (
    <group position={[0, -0.3, -0.15]}>
      <mesh>
        <boxGeometry args={[W * 0.75, 0.42, 0.55]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.85} roughness={0.25} />
      </mesh>
      {/* GPU brand RGB stripe (front-facing) */}
      <mesh position={[0, 0.21, 0]}>
        <boxGeometry args={[W * 0.55, 0.06, 0.005]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={3.0}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

// ─── Chassis Outer Frame (with visible cross-braces) ────────────────────────
function ChassisFrame() {
  return (
    <group>
      {/* Back wall */}
      <mesh position={[0, 0, -D / 2]}>
        <boxGeometry args={[W, H, T]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.85} roughness={0.3} />
      </mesh>

      {/* Top panel */}
      <mesh position={[0, H / 2, 0]}>
        <boxGeometry args={[W, T, D]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.85} roughness={0.3} />
      </mesh>

      {/* Bottom + feet */}
      <mesh position={[0, -H / 2, 0]}>
        <boxGeometry args={[W, T, D]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.85} roughness={0.3} />
      </mesh>
      {[
        [-W * 0.4, -H / 2 - 0.04, -D * 0.4],
        [W * 0.4, -H / 2 - 0.04, -D * 0.4],
        [-W * 0.4, -H / 2 - 0.04, D * 0.4],
        [W * 0.4, -H / 2 - 0.04, D * 0.4],
      ].map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]}>
          <boxGeometry args={[0.12, 0.06, 0.12]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.6} />
        </mesh>
      ))}

      {/* Right opaque side */}
      <mesh position={[W / 2, 0, 0]}>
        <boxGeometry args={[T, H, D]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.85} roughness={0.3} />
      </mesh>

      {/* Frame cross-braces (visible black struts on glass corners) */}
      {/* Front-left vertical strut */}
      <mesh position={[-W / 2 + 0.04, 0, D / 2 - 0.04]}>
        <boxGeometry args={[0.06, H, 0.06]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.85} />
      </mesh>
      {/* Front-right vertical strut */}
      <mesh position={[W / 2 - 0.04, 0, D / 2 - 0.04]}>
        <boxGeometry args={[0.06, H, 0.06]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.85} />
      </mesh>
      {/* Top-front horizontal strut */}
      <mesh position={[0, H / 2 - 0.04, D / 2 - 0.04]}>
        <boxGeometry args={[W, 0.06, 0.06]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.85} />
      </mesh>
      {/* Bottom-front horizontal strut */}
      <mesh position={[0, -H / 2 + 0.04, D / 2 - 0.04]}>
        <boxGeometry args={[W, 0.06, 0.06]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.85} />
      </mesh>
      {/* Side-left front vertical strut (back of glass) */}
      <mesh position={[-W / 2 + 0.04, 0, -D / 2 + 0.04]}>
        <boxGeometry args={[0.06, H, 0.06]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.85} />
      </mesh>

      {/* LEFT GLASS PANEL */}
      <mesh position={[-W / 2, 0, 0]}>
        <boxGeometry args={[T * 0.5, H * 0.95, D * 0.95]} />
        <meshStandardMaterial
          color="#0d1f1a"
          metalness={0.5}
          roughness={0.05}
          transparent
          opacity={0.14}
        />
      </mesh>

      {/* FRONT GLASS PANEL */}
      <mesh position={[0, 0, D / 2]}>
        <boxGeometry args={[W * 0.95, H * 0.95, T * 0.5]} />
        <meshStandardMaterial
          color="#0d1f1a"
          metalness={0.5}
          roughness={0.05}
          transparent
          opacity={0.18}
        />
      </mesh>

      {/* Brand etch (top corner of glass) */}
      <Text
        position={[-W / 2 + 0.18, H / 2 - 0.15, D / 2 + 0.005]}
        fontSize={0.08}
        color="#10b981"
        anchorX="left"
        anchorY="middle"
        letterSpacing={0.15}
        fillOpacity={0.8}
      >
        STARFORGE
      </Text>
    </group>
  );
}

// ─── IO Strip (front-bottom) ────────────────────────────────────────────────
function IoStrip() {
  return (
    <group position={[0, -H / 2 + 0.12, D / 2 + 0.005]}>
      {/* Power button */}
      <mesh position={[-0.55, 0, 0]}>
        <circleGeometry args={[0.05, 32]} />
        <meshStandardMaterial
          color="#10b981"
          emissive="#10b981"
          emissiveIntensity={2.5}
          toneMapped={false}
        />
      </mesh>
      {[-0.3, -0.1].map((x, i) => (
        <mesh key={i} position={[x, 0, 0]}>
          <boxGeometry args={[0.12, 0.05, 0.005]} />
          <meshBasicMaterial color="#222" />
        </mesh>
      ))}
      <mesh position={[0.15, 0, 0]}>
        <boxGeometry args={[0.08, 0.04, 0.005]} />
        <meshBasicMaterial color="#222" />
      </mesh>
      {[0.35, 0.45].map((x, i) => (
        <mesh key={i} position={[x, 0, 0]}>
          <circleGeometry args={[0.022, 16]} />
          <meshBasicMaterial color="#222" />
        </mesh>
      ))}
    </group>
  );
}

// ─── Main Group ─────────────────────────────────────────────────────────────
function ChassisRoot() {
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.18;
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      <ChassisFrame />
      <IoStrip />
      <MotherboardBack />
      <GpuRig />
      <CentralLcd />

      {/* TOP RADIATOR FANS — 3 fans, multi-color */}
      <group position={[0, H / 2 - 0.15, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <RgbFan position={[-0.5, 0, 0]} color={RGB_PALETTE[2]} size={0.34} pulseOffset={0} />
        <RgbFan position={[0, 0, 0]} color={RGB_PALETTE[0]} size={0.34} pulseOffset={1.2} />
        <RgbFan position={[0.5, 0, 0]} color={RGB_PALETTE[1]} size={0.34} pulseOffset={2.4} />
      </group>

      {/* FRONT-FACING FANS — 2 large RGB fans on the right side, visible through glass */}
      <RgbFan position={[0.5, 0.6, 0.55]} color={RGB_PALETTE[2]} size={0.36} pulseOffset={0.8} />
      <RgbFan position={[0.5, -0.5, 0.55]} color={RGB_PALETTE[1]} size={0.36} pulseOffset={1.8} />

      {/* SIDE FAN behind glass (left panel) */}
      <RgbFan position={[-0.55, 0.5, 0.3]} color={RGB_PALETTE[3]} size={0.28} pulseOffset={2.6} />
      <RgbFan position={[-0.55, -0.4, 0.3]} color={RGB_PALETTE[0]} size={0.28} pulseOffset={3.6} />

      {/* Multi-color glow lights for ambient interior pop */}
      <pointLight position={[0.4, 0.4, 0.4]} intensity={1.0} distance={2} color={RGB_PALETTE[2]} />
      <pointLight position={[0.4, -0.4, 0.4]} intensity={1.0} distance={2} color={RGB_PALETTE[1]} />
      <pointLight position={[-0.4, 0.3, 0.3]} intensity={0.8} distance={2} color={RGB_PALETTE[3]} />
      <pointLight position={[0, 0, 0]} intensity={0.6} distance={2} color={RGB_PALETTE[0]} />

      {/* Holographic platform rings */}
      <mesh position={[0, -H / 2 - 0.18, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.2, 1.35, 64]} />
        <meshBasicMaterial color="#10b981" transparent opacity={0.6} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, -H / 2 - 0.21, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.5, 1.65, 64]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.25} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, -H / 2 - 0.24, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.8, 1.88, 64]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.18} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function FloatingBrand() {
  return (
    <Text
      position={[-0.6, -2.3, 0]}
      fontSize={0.3}
      color="#10b981"
      anchorX="center"
      anchorY="middle"
      letterSpacing={0.18}
      outlineWidth={0.008}
      outlineColor="#10b981"
      outlineOpacity={0.9}
    >
      STARFORGE
    </Text>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 38 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 5, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-5, 2, 3]} intensity={0.6} color="#6ee7b7" />

        <Stars
          radius={50}
          depth={40}
          count={1200}
          factor={2}
          saturation={0}
          fade
          speed={0.4}
        />

        <group position={[2.9, 0, 0]}>
          <ChassisRoot />
          <FloatingBrand />
        </group>
      </Canvas>
    </div>
  );
}
