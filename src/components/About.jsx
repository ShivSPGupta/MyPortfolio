import { motion } from "motion/react";
import SocialLinks from "./SocialLinks";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center"
    >
      <h2 className="text-4xl font-extrabold text-gray-900 mb-6">About Me</h2>
      <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
        I’m a passionate MERN Stack developer who loves building clean,
        user-friendly web apps. I work with React, Node.js, Express, and MongoDB
        to create fast and scalable solutions that solve real problems. I enjoy
        designing smooth frontends, building reliable APIs, and keeping security
        and performance top of mind.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
        I’m a quick learner and a great team player, always eager to grow and
        take on new challenges. Whether working remotely or with a team, I’m
        committed to delivering quality code that makes a difference. Let’s
        build something amazing together!
      </p>

      {/* ... existing About content ... */}

      <div className="mt-10">
        <SocialLinks />
      </div>
    </motion.section>
  );
}
