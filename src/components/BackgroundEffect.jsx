import React from 'react';
import { motion } from 'motion/react';

const circles = Array.from({ length: 8 });

export default function BackgroundEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {circles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-500 opacity-20"
          style={{
            width: 150 + i * 60,
            height: 150 + i * 60,
            top: `${10 * i}%`,
            left: `${12 * i}%`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: 'mirror',
            delay: i,
          }}
        />
      ))}
    </div>
  );
}
