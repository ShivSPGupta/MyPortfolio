import { motion } from "motion/react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Section({ id, title, children }) {
  return (
    <motion.section
      id={id}
      className="max-w-5xl mx-auto px-4 mb-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <h2 className="text-4xl font-bold mb-8">{title}</h2>
      {children}
    </motion.section>
  );
}
