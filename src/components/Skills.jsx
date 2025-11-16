import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'Material UI', level: 75 },
  { name: 'Framer Motion', level: 70 },
  { name: 'Node.js', level: 65 },
  { name: 'Git & GitHub', level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-4 sm:px-0">
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <div className="space-y-6 max-w-2xl mx-auto">
        {skills.map(({ name, level }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <div className="flex justify-between mb-1 font-semibold">{name}<span>{level}%</span></div>
            <div className="w-full h-5 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-5 bg-blue-600 rounded-full transition-all duration-700"
                style={{ width: `${level}%` }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
