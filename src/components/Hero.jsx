import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-4 sm:px-0">
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg sm:text-7xl mb-6"
      >
        Hi, I'm Your Name
      </motion.h1>
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-3xl text-xl text-gray-700 dark:text-gray-600"
      >
        Frontend developer creating seamless user experiences with React, Tailwind, Material UI & Framer Motion.
      </motion.p>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.85, duration: 0.6 }}
        className="mt-10"
      >
        <Button variant="contained" color="primary" href="#contact" size="large" sx={{ px: 6, py: 1.8 }}>
          Get In Touch
        </Button>
      </motion.div>
    </section>
  );
}
