import React from "react";
import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Modern React portfolio using Tailwind, Material UI & Vite.",
    imageUrl:
      "https://api.microlink.io/?url=https://figmatask-digital-agency.vercel.app&screenshot=true&meta=false&embed=screenshot.url", // Place your actual image in /public folder
    liveUrl: "https://figmatask-digital-agency.vercel.app/",
  },
  {
    id: 2,
    title: "Todo App",
    description: "React todo app with local storage and clean UX/UI.",
    imageUrl: "/project2.png",
    liveUrl: "https://yourtodoapp.com",
  },
  {
    id: 3,
    title: "Figma to React",
    description: "Convert Figma designs into a modern, responsive React app using Tailwind, and Vite.",
    imageUrl:
      "https://api.microlink.io/?url=https://figmatask-digital-agency.vercel.app&screenshot=true&meta=false&embed=screenshot.url", // Place your actual image in /public folder
    liveUrl: "https://figmatask-digital-agency.vercel.app/",
  },
  // Add more projects as required
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projects.map(({ id, title, description, imageUrl, liveUrl }) => (
          <motion.div
            key={id}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="relative flex flex-col bg-white/20 backdrop-blur-md rounded-xl shadow-lg overflow-hidden transform-gpu hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-48 sm:h-56 w-full overflow-hidden rounded-t-xl">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {title}
              </h3>
              <p className="text-gray-700 flex-grow">{description}</p>
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition w-max"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
