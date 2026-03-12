"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

/* ---------- Dense star field ---------- */
const StarField = (props: any) => {
  const ref: any = useRef(null);

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(18000), { radius: 50 })
  );

  useFrame((_state: any, delta: number) => {
    ref.current.rotation.x -= delta / 50;
    ref.current.rotation.y -= delta / 60;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.055}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

/* ---------- Smaller bright accent stars ---------- */
const AccentStars = (props: any) => {
  const ref: any = useRef(null);

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(3000), { radius: 35 })
  );

  useFrame((_state: any, delta: number) => {
    ref.current.rotation.x += delta / 80;
    ref.current.rotation.y += delta / 70;
  });

  return (
    <group rotation={[0, 0, -Math.PI / 6]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#a5b4fc"
          size={0.08}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] w-full h-full pointer-events-none bg-black">
      {/* Nebula glow layers — CSS radial gradients for depth */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Top-left indigo nebula */}
        <div
          className="absolute -top-1/4 -left-1/4 w-[70%] h-[70%] rounded-full opacity-[0.15] blur-[120px]"
          style={{ background: "radial-gradient(circle, #818cf8 0%, transparent 70%)" }}
        />
        {/* Bottom-right purple nebula */}
        <div
          className="absolute -bottom-1/4 -right-1/4 w-[60%] h-[60%] rounded-full opacity-[0.12] blur-[100px]"
          style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)" }}
        />
        {/* Center cyan accent */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full opacity-[0.08] blur-[140px]"
          style={{ background: "radial-gradient(circle, #22d3ee 0%, transparent 70%)" }}
        />
      </div>

      {/* 3D Star Canvas */}
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarField />
          <AccentStars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default SpaceBackground;