"use client";
import React from "react";
import { motion } from "framer-motion";

export const GeometricParticles = () => {
  const shapes = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    type: Math.random() > 0.5 ? "circle" : Math.random() > 0.5 ? "square" : "triangle",
    size: Math.random() * 30 + 10,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  const getShapeComponent = (shape: typeof shapes[0]) => {
    const baseClasses = "absolute border opacity-20";
    const sizeStyle = { width: shape.size, height: shape.size };

    switch (shape.type) {
      case "circle":
        return (
          <div
            className={`${baseClasses} border-blue-400/30 rounded-full`}
            style={sizeStyle}
          />
        );
      case "square":
        return (
          <div
            className={`${baseClasses} border-purple-400/30`}
            style={sizeStyle}
          />
        );
      case "triangle":
        return (
          <div
            className={`${baseClasses} border-cyan-400/30`}
            style={{
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid rgba(6, 182, 212, 0.1)`,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          style={{
            left: `${shape.initialX}%`,
            top: `${shape.initialY}%`,
            opacity: shape.opacity,
          }}
          animate={{
            y: [-50, -200, -50],
            x: [-20, 20, -20],
            rotate: [0, 180, 360],
            opacity: [shape.opacity, shape.opacity * 0.2, shape.opacity],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {getShapeComponent(shape)}
        </motion.div>
      ))}
    </div>
  );
};