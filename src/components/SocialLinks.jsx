import React from "react";
import { motion } from "motion/react";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/ShivSPGupta",
    color: "#181717",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/shiv-shankar-gupta/",
    color: "#0A66C2",
  },
  {
    name: "X",
    icon: <FaSquareXTwitter />,
    url: "https://x.com/ShivGupta101",
    color: "#181717",
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    url: "https://www.youtube.com/@ShivShankarGupta01",
    color: "#FF0000",
  },
  // {
  //   name: "Instagram",
  //   icon: <FaInstagram />,
  //   url: "https://instagram.com/yourusername",
  //   color: "#E4405F",
  // },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function SocialLinks({ className }) {
  return (
    <motion.div
      className={`grid grid-cols-4 max-w-xs mx-auto gap-8 justify-center items-center ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socials.map(({ name, icon, url, color }) => (
        <motion.a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          title={name}
          variants={itemVariants}
          className="flex items-center justify-center rounded-full bg-white/25 backdrop-blur-md shadow-md cursor-pointer"
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Animate ICON color only (fixes glitch) */}
          <motion.span
            className="text-6xl"
            whileHover={{ color }}
            transition={{ duration: 0.25 }}
          >
            {icon}
          </motion.span>
        </motion.a>
      ))}
    </motion.div>
  );
}
