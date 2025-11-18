import { motion } from 'framer-motion';

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
        I am a passionate frontend developer with expertise in modern React development, Tailwind CSS, Material UI, and Framer Motion. 
        I strive to build beautiful, responsive, and performant web applications that deliver seamless user experiences.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
        My focus lies in writing clean, maintainable code and leveraging modern web technologies to bring creative ideas to life.
      </p>
    </motion.section>
  );
}
