import React from "react";
import { motion as Motion } from "motion/react";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaGit,
  FaGithub,
  FaJsSquare,
  FaJava,
  FaLinux,
  FaAws,
} from "react-icons/fa";
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
  SiPostgresql,
  SiRedis,
  SiNextdotjs,
  SiNestjs,
  SiGithubactions,
  SiNginx,
  SiSocketdotio,
  SiShadcnui,
  SiDocker,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiJest,
  SiSwagger,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    description: "UI, styling, and interactive app development",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-700" /> },
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
      { name: "React Native", icon: <SiReact className="text-blue-600" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
      { name: "Motion", icon: <TbBrandFramerMotion className="text-yellow-300" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "Radix UI", icon: <SiRadixui className="text-black" /> },
      { name: "ShadCN UI", icon: <SiShadcnui className="text-black" /> },
    ],
  },
  {
    title: "Programming Languages",
    description: "Core languages I use for application logic and problem solving",
    skills: [
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "Python", icon: <SiPython className="text-blue-500" /> },
      { name: "Java", icon: <FaJava className="text-yellow-400" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
    ],
  },
  {
    title: "Backend",
    description: "Server-side logic, APIs, and realtime systems",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
      { name: "NestJS", icon: <SiNestjs className="text-red-600" /> },
      { name: "Socket.IO", icon: <SiSocketdotio className="text-purple-600" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="text-purple-600" /> },
      { name: "Swagger", icon: <SiSwagger className="text-green-500" /> },
    ],
  },
  {
    title: "Database & Cache",
    description: "Data stores, caching, and persistence layers",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
      { name: "Redis", icon: <SiRedis className="text-red-700" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    ],
  },
  {
    title: "Tools & DevOps",
    description: "Build, deployment, and developer productivity tools",
    skills: [
      { name: "Git", icon: <FaGit className="text-red-600" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-900" /> },
      { name: "GitHub Actions", icon: <SiGithubactions className="text-black" /> },
      { name: "Nginx", icon: <SiNginx className="text-green-600" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-600" /> },
      { name: "Linux", icon: <FaLinux className="text-black" /> },
      { name: "VS Code", icon: <VscVscode className="text-blue-700" /> },
      { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-pink-600" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "Jest", icon: <SiJest className="text-red-500" /> },
      { name: "AWS", icon: <FaAws className="text-orange-500" /> },
      { name: "Vercel", icon: <SiVercel className="text-black" /> },
    ],
  },
];

const groupVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <Motion.section
      id="skills"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-20"
      variants={groupVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">
        Skills
      </h2>
      <p className="mb-12 text-center text-gray-600">
        Organized by the parts of the stack I use most often.
      </p>

      <div className="flex flex-col gap-8">
        {skillGroups.map((group) => (
          <Motion.div
            key={group.title}
            variants={itemVariants}
            className="w-full max-w-4xl mx-auto rounded-xl bg-white/20 backdrop-blur-md p-6 shadow-lg border border-white/20 text-center"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                {group.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{group.description}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {group.skills.map(({ name, icon }) => (
                <Motion.div
                  key={name}
                  className="flex w-24 flex-col items-center justify-center space-y-3 text-center"
                  whileHover={{ scale: 1.12, color: "#2563EB" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  title={name}
                  aria-label={name}
                >
                  <div className="text-5xl transition-colors duration-300">
                    {icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    {name}
                  </span>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        ))}
      </div>
    </Motion.section>
  );
}
