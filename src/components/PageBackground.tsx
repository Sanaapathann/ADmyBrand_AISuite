'use client';

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function PageBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
      mouseX.set(clientX);
      mouseY.set(clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base dark layer */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Cursor effects - more visible */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: useMotionTemplate`radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.5), transparent 80%)`,
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: useMotionTemplate`radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(236, 72, 153, 0.4), transparent 80%)`,
        }}
      />
    </div>
  );
}