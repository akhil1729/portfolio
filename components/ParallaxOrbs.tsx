"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type MouseVec = { x: number; y: number };

export default function ParallaxOrbs() {
  const [mouse, setMouse] = useState<MouseVec>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);


  const layers = [
    {
      size: 340,
      className: "bg-indigo-500/40 blur-3xl",
      strength: 10,
      style: { top: "35%", right: "4%" } as const,
    },
    {
      size: 260,
      className: "bg-fuchsia-500/35 blur-3xl",
      strength: -8,
      style: { top: "46%", right: "-6%" } as const,
    },
    {
      size: 220,
      className: "bg-sky-400/30 blur-3xl",
      strength: 8,
      style: { bottom: "18%", right: "6%" } as const,
    },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >

      {/* LEFT fade mask to protect hero text */}
      <div className="absolute left-0 top-0 h-full w-[40%] 
        bg-gradient-to-r from-black via-black/70 to-transparent z-20" />

      {/* soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(8,12,24,0.7),_transparent_75%)]" />

      {/* Particle ring behind the right card */}
      <motion.div
        className="absolute right-[14%] top-[52%] h-[520px] w-[520px] 
        -translate-y-1/2 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%)",
          maskImage:
            "radial-gradient(circle, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
        }}
      >
        <div className="absolute inset-0 
            border-[3px] border-cyan-300/40 rounded-full blur-[2px]" />
      </motion.div>

      {/* floating orbs */}
      {layers.map((layer, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full mix-blend-screen ${layer.className}`}
          style={{
            width: layer.size,
            height: layer.size,
            ...layer.style,
            opacity: 0.22,
          }}
          animate={{
            x: mouse.x * layer.strength,
            y: mouse.y * layer.strength,
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 18,
            mass: 0.6,
          }}
        />
      ))}
    </div>
  );
}
