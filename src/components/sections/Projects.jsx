import React from "react";
import { motion as Motion } from "motion/react";
import ProjectCard from "../cards/ProjectCard";
import SectionTitle from "../common/SectionTitle";
import { projects } from "../../data/projects";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Projects() {
  const [expandedStacks, setExpandedStacks] = React.useState({});

  const toggleStack = (projectId) => {
    setExpandedStacks((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  return (
    <Motion.section
      id="projects"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <SectionTitle className="mb-12">Projects</SectionTitle>
      <div className="grid items-stretch gap-10 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            totalProjects={projects.length}
            isStackExpanded={Boolean(expandedStacks[project.id])}
            onToggleStack={() => toggleStack(project.id)}
          />
        ))}
      </div>
    </Motion.section>
  );
}
