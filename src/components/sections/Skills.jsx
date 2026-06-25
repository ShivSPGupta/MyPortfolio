import { motion as Motion } from "motion/react";
import SkillGroupCard from "../cards/SkillGroupCard";
import SectionTitle from "../common/SectionTitle";
import { skillGroups } from "../../data/skills.jsx";

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
      <SectionTitle className="mb-4">Skills</SectionTitle>
      <p className="mb-12 text-center text-gray-600">
        Organized by the parts of the stack I use most often.
      </p>

      <div className="flex flex-col gap-8">
        {skillGroups.map((group) => (
          <SkillGroupCard
            key={group.title}
            group={group}
            variants={itemVariants}
          />
        ))}
      </div>
    </Motion.section>
  );
}
