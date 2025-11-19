import React from 'react';
import { motion } from 'motion/react';
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaGit,
  FaGithub,
  FaJsSquare,
  FaLinux,
} from 'react-icons/fa';
import { VscVscode } from "react-icons/vsc";
import { TbBrandFramerMotion } from "react-icons/tb";
import {
  SiExpress,
  SiTailwindcss,
  SiPostman,
  SiRedux,
  SiReact,
  SiMongodb,
  SiMysql,
  SiRadixui,
  SiVercel,
  SiIntellijidea,
  SiFirebase,
  SiJsonwebtokens,
} from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-700" /> },
  { name: 'React', icon: <FaReact className="text-blue-500" /> },
  { name: 'React Native', icon: <SiReact className="text-blue-600" /> },
  { name: 'Redux', icon: <SiRedux className="text-purple-600" /> },
  { name: 'Motion', icon: <TbBrandFramerMotion className="text-yellow-300" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-800" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-700" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
  { name: 'Git', icon: <FaGit className="text-red-600" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-900" /> },
  { name: 'Linux', icon: <FaLinux className="text-black" /> },
  { name: 'VS Code', icon: <VscVscode className="text-blue-700" /> },
  { name: 'IntelliJ IDEA', icon: <SiIntellijidea className="text-pink-600" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
  { name: 'JWT', icon: <SiJsonwebtokens className="text-purple-600" /> },
  { name: 'Radix UI', icon: <SiRadixui className="text-black" /> },
  { name: 'Vercel', icon: <SiVercel className="text-black" /> },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="max-w-5xl mx-auto px-4 sm:px-6 py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Skills</h2>
      <div className="grid grid-cols-3 sm:grid-cols-7 gap-10 justify-items-center">
        {skills.map(({ name, icon }) => (
          <motion.div
            key={name}
            variants={itemVariants}
            className="flex flex-col items-center justify-center space-y-3 cursor-pointer text-center"
            whileHover={{ scale: 1.3, color: '#2563EB' }} // Tailwind blue-600
            transition={{ type: 'spring', stiffness: 300 }}
            title={name}
            aria-label={name}
          >
            <div className="text-6xl transition-colors duration-300">{icon}</div>
            <span className="text-sm font-semibold text-gray-700">{name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
