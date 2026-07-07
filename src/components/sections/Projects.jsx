import React from "react";
import { motion as Motion } from "motion/react";
import {
  createStaggerContainer,
  revealViewport,
} from "../../animations/motionVariants";
import ProjectCard from "../cards/ProjectCard";
import SectionTitle from "../common/SectionTitle";
import { projects } from "../../data/projects";

const projectGridVariants = createStaggerContainer();

export default function Projects() {
  const [expandedStacks, setExpandedStacks] = React.useState({});

  const toggleStack = (projectId) => {
    setExpandedStacks((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <Motion.div
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
      >
        <SectionTitle className="mb-8 sm:mb-12">Projects</SectionTitle>
        <Motion.div
          className="grid items-stretch gap-10 lg:grid-cols-2"
          variants={projectGridVariants}
        >
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
        </Motion.div>
      </Motion.div>
    </section>
  );
}
