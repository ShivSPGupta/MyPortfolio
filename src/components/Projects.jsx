import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Portfolio Website',
    description: 'A portfolio to showcase my work using React, Tailwind CSS, and Material UI.',
    link: 'https://github.com/yourusername/portfolio',
  },
  {
    name: 'Todo App',
    description: 'A React todo app with local storage persistence.',
    link: 'https://github.com/yourusername/todo-app',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-0">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {projects.map(({ name, description, link }, i) => (
          <motion.a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <h3 className="font-semibold mb-3 text-lg text-gray-900">{name}</h3>
            <p className="text-gray-600">{description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
