"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarField = (props: any) => {
  const ref: any = useRef(null);
  
  // 1. INCREASED COUNT & RADIUS:
  // - 15000 stars for high density
  // - radius: 50 makes the universe massive (camera is now inside it)
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(15000), { radius: 50 })
  );

  useFrame((state, delta) => {
    // Slower rotation to simulate the vastness of space
    ref.current.rotation.x -= delta / 50;
    ref.current.rotation.y -= delta / 60;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.05} // Slightly larger stars since they are further away
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] w-full h-full pointer-events-none bg-black">
      {/* 2. CAMERA ADJUSTMENT: 
          Position [0, 0, 1] puts us right inside the star field.
      */}
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarField />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default SpaceBackground;