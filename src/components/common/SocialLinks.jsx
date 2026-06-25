import { motion as Motion } from "motion/react";
import { socialLinks } from "../../data/socialLinks.jsx";

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

export default function SocialLinks({ className = "" }) {
  return (
    <Motion.div
      className={`grid grid-cols-4 max-w-xs mx-auto gap-8 justify-center items-center ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map(({ name, icon, url, color }) => (
        <Motion.a
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
          <Motion.span
            className="text-6xl"
            whileHover={{ color }}
            transition={{ duration: 0.25 }}
          >
            {icon}
          </Motion.span>
        </Motion.a>
      ))}
    </Motion.div>
  );
}
