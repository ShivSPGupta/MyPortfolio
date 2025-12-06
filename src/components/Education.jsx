import React from 'react';
import { motion } from 'motion/react';

const education = [
  {
    title: 'Bachelor of Technology in Mechanical Engineering',
    institution: 'Jaipur National University',
    period: '2014 – 2018',
    detail: 'Studied Mechatronics, FEA, and Design Engineering.',
  },
  {
    title: 'Full Stack Development (MERN)',
    institution: 'upGrad',
    period: '2023',
    detail: 'Completed professional certification focused on MERN, modern Java & DSA.',
  },
  // Add more as needed…
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Education() {
  return (
    <motion.section
      id="education"
      className="max-w-5xl mx-auto px-4 sm:px-6 py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
        Education & Certification
      </h2>
      <div className="space-y-10">
        {education.map(({ title, institution, period, detail }, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            className="bg-white/20 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
              <h3 className="text-2xl font-semibold text-blue-600">{title}</h3>
              <span className="text-gray-600 italic mt-2 sm:mt-0">{period}</span>
            </div>
            <h4 className="text-lg font-medium text-gray-700 mb-4">{institution}</h4>
            <p className="text-gray-800">{detail}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
