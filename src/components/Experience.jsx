import React from "react";
import { motion } from "motion/react";

const workHistory = [
  {
    role: "MERN Stack Intern",
    company: "SequelString AI Pvt Ltd",
    period: "Jul 2025 – Sep 2025",
    description:
      "Developed responsive MERN stack web applications and optimized RESTful APIs for scalable performance.",
  },
  {
    role: "React JS Developer Trainee",
    company: "QuadB Technologies",
    period: "Apr 2025 – Jun 2025",
    description:
      "Building responsive web apps using React, Tailwind CSS, and Material UI, focusing on performance and UX.",
  },
  {
    role: "Web Developer Intern",
    company: "7 Star MedTech Pvt Ltd",
    period: "Jan 2025 – Apr 2025",
    description:
      "Developed and maintained WordPress websites optimizing SEO, speed, and user engagement.",
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
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="max-w-5xl mx-auto px-4 sm:px-6 py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
        Experience
      </h2>
      <div className="space-y-10">
        {workHistory.map(({ role, company, period, description }, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            className="bg-white/20 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
              <h3 className="text-2xl font-semibold text-blue-600">{role}</h3>
              <span className="text-gray-600 italic mt-2 sm:mt-0">
                {period}
              </span>
            </div>
            <h4 className="text-lg font-medium text-gray-700 mb-4">
              {company}
            </h4>
            <p className="text-gray-800">{description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
