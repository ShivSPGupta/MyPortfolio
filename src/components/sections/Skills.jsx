import { motion as Motion } from "motion/react";
import {
  createStaggerContainer,
  fadeUp,
  revealViewport,
} from "../../animations/motionVariants";
import SkillGroupCard from "../cards/SkillGroupCard";
import SectionTitle from "../common/SectionTitle";
import { skillGroups } from "../../data/skills.jsx";

const groupVariants = createStaggerContainer();

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <Motion.div
      variants={groupVariants}
      initial="hidden"
      whileInView="visible"
        viewport={revealViewport}
    >
      <SectionTitle className="mb-4">Skills</SectionTitle>
      <p className="mb-12 text-center text-gray-600">
        Organized by the parts of the stack I use most often.
      </p>

      <div className="flex flex-col gap-8">
        {skillGroups.map((group) => (
          <SkillGroupCard
            key={group.title}
            group={group}
              variants={fadeUp}
          />
        ))}
      </div>
      </Motion.div>
    </section>
  );
}
