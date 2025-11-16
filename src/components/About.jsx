import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = ((y / height) * 2 - 1) * 10; // max 10deg
    const rotateY = ((x / width) * 2 - 1) * -10; // max 10deg, inverse
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => setTilt({ rotateX: 0, rotateY: 0 });

  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 sm:grid-cols-2 items-center gap-12">
      {/* Image with 3D hover */}
      <div
        className="w-full h-80 sm:h-96 flex items-center justify-center"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Replace with your SVG or image */}
        <motion.div
          style={{
            rotateX: tilt.rotateX,
            rotateY: tilt.rotateY,
            perspective: 1000,
            transformStyle: 'preserve-3d',
            width: '100%',
            height: '100%',
          }}
          className="w-64 h-64"
        >
          <img src="your-image-path.svg" alt="3D object" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </motion.div>
      </div>

      {/* Text content */}
      <div>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-700 max-w-xl">
          I am a passionate frontend developer with expertise in modern React development, Tailwind CSS, and Material UI.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-700 max-w-xl">
          I build beautiful, responsive, and performant web applications with smooth, interactive 3D effects.
        </p>
      </div>
    </section>
  );
}
