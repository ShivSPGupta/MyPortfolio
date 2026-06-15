import { motion as Motion } from "motion/react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Modern React portfolio using Tailwind, motion, Material UI & Vite.",
    imageUrl:
      "https://api.microlink.io/?url=https://my-portfolio-six-azure-30.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    liveUrl: "https://my-portfolio-six-azure-30.vercel.app/",
  },
  {
    id: 2,
    title: "Flixxit App",
    description: "Developed a Netflix-style OTT platform with a React-Redux-Tailwind frontend and a secure Express-MongoDB-JWT backend.",
    imageUrl: "https://api.microlink.io/?url=https://flixxit-app.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    liveUrl: "https://flixxit-app.vercel.app/",
  },
  {
    id: 3,
    title: "Figma to React",
    description:
      "Convert Figma designs into a modern, responsive React app using Tailwind CSS and Vite.",
    imageUrl:
      "https://api.microlink.io/?url=https://figmatask-digital-agency.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    liveUrl: "https://figmatask-digital-agency.vercel.app/",
  },
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
    <Motion.section
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
      <div className="flex flex-wrap justify-center gap-10">
        {projects.map(({ id, title, description, imageUrl, liveUrl }) => (
          <Motion.div
            key={id}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="relative flex w-full max-w-xl flex-col overflow-hidden rounded-xl bg-white/20 backdrop-blur-md shadow-lg transform-gpu transition-shadow duration-300 hover:shadow-xl sm:flex-[1_1_28rem]"
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
                className="mt-6 inline-block w-max rounded-full bg-slate-950 px-6 py-2 font-semibold text-white transition hover:bg-slate-800"
              >
                Live Demo
              </a>
            </div>
          </Motion.div>
        ))}
      </div>
    </Motion.section>
  );
}
